import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

const IMAGE_DIR = path.resolve(__dirname, 'public/images');
const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif|svg)$/i;

/** Recursively lists every image inside public/images as a site path, e.g. "/images/logo/logo.png". */
function listImages(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listImages(full);
    if (!IMAGE_EXT.test(entry.name)) return [];
    return ['/images/' + path.relative(IMAGE_DIR, full).split(path.sep).join('/')];
  });
}

/**
 * Exposes `virtual:image-manifest` (the list of photos that actually exist) so the site can show
 * an elegant placeholder instead of a broken image, without any 404 requests.
 * In dev, adding or removing a photo reloads the page automatically.
 */
function imageManifest(): Plugin {
  const virtualId = 'virtual:image-manifest';
  const resolvedId = '\0' + virtualId;
  const isInImageDir = (file: string) =>
    path.resolve(file).toLowerCase().startsWith(IMAGE_DIR.toLowerCase());

  return {
    name: 'yarn-corner-image-manifest',
    resolveId(id) {
      return id === virtualId ? resolvedId : undefined;
    },
    load(id) {
      if (id === resolvedId) return `export default ${JSON.stringify(listImages(IMAGE_DIR))};`;
    },
    transformIndexHtml() {
      // Use the real logo as favicon once it has been added; otherwise a neutral fallback icon.
      const logo = listImages(IMAGE_DIR).find((p) => /^\/images\/logo\/logo\.(png|svg|webp|jpe?g)$/i.test(p));
      return [{ tag: 'link', attrs: { rel: 'icon', href: logo ?? '/favicon.svg' }, injectTo: 'head' }];
    },
    configureServer(server) {
      server.watcher.add(IMAGE_DIR);
      const refresh = (file: string) => {
        if (!isInImageDir(file)) return;
        const mod = server.moduleGraph.getModuleById(resolvedId);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('add', refresh);
      server.watcher.on('unlink', refresh);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), imageManifest()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
