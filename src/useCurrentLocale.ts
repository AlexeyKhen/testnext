import { useRouter } from "next/router";

type LOCALES = "en" | "ru" | "kk";

export function useCurrentLocale() {
  const router = useRouter();
  return (router.locale as LOCALES) || (router.defaultLocale as LOCALES);
}
