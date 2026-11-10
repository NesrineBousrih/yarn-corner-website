import { useCallback } from 'react';
import { buildOrderMessage, getInstagramDmUrl, getWhatsAppUrl, type OrderSelection } from '@/utils/order';
import { useToast } from './useToast';

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Sends an order: WhatsApp (pre-filled message) when configured,
 * otherwise Instagram DM (message copied to the clipboard).
 */
export function useOrder() {
  const toast = useToast();

  return useCallback(
    (selection: OrderSelection) => {
      const message = buildOrderMessage(selection);

      const whatsapp = getWhatsAppUrl(message);
      if (whatsapp) {
        window.open(whatsapp, '_blank', 'noopener,noreferrer');
        return;
      }

      const instagram = getInstagramDmUrl();
      if (instagram) {
        // Open the tab synchronously (inside the click) so popup blockers allow it.
        window.open(instagram, '_blank', 'noopener,noreferrer');
        void copyToClipboard(message).then((copied) =>
          toast(
            copied
              ? 'Your order details were copied. Paste them in our Instagram chat to complete your order.'
              : `In our Instagram chat, just tell us: ${selection.product.name} and the options you chose.`,
            'success',
          ),
        );
        return;
      }

      toast('Online ordering is coming very soon. Thank you for your patience!');
    },
    [toast],
  );
}
