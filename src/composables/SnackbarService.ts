import { onMounted, defineCustomElement } from 'vue';
import SnackbarAlerts from '@/components/shared/SnackbarAlerts.vue';

export function loadSnackbar(
  text: string,
  type: 'warning' | 'success' | 'error',
  autoClose: boolean
) {
  const snackbarComponent = defineCustomElement(SnackbarAlerts);

  const snackbarIdIdentifier = new Date().getTime();
  const snackbarId = 'snackbar-alerts-' + snackbarIdIdentifier;

  customElements.define(snackbarId, snackbarComponent);

  document.body.appendChild(
    new snackbarComponent({
      text,
      type,
      autoClose,
      identifier: snackbarId,
    })
  );

  if (autoClose) {
    setTimeout(() => {
      const activeSnackbar = document.getElementsByTagName(snackbarId)[0];
      if (activeSnackbar) {
        document.body.removeChild(activeSnackbar);
      }
    }, 3000);
  }

  return snackbarComponent;
}
