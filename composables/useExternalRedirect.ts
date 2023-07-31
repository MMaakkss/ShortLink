import { sendRedirect } from "h3";

export default function useExternalRedirect(
  url: string,
  code: number = 302
): Promise<void> {
  if (!/^(https?:\/\/)/.test(url)) {
    if (process.server) {
      const nuxtApp = useNuxtApp();

      if (nuxtApp.ssrContext?.event) {
        return nuxtApp.callHook("app:redirected").then(() => {
          if (nuxtApp.ssrContext?.event) {
            return sendRedirect(nuxtApp.ssrContext.event, url, code);
          }
        });
      }
    } else {
      window.location.href = url;
    }
  }

  throw new Error("Invalid url");
}
