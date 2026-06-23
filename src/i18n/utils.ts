import de from "../../messages/de.json";

type Messages = typeof de;

export function useTranslations(_locale?: string) {
  const msgs: Messages = de;

  function t(key: string): string {
    const keys = key.split(".");
    let value: unknown = msgs;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (value as string) ?? key;
  }

  function tRaw<T = unknown>(key: string): T {
    const keys = key.split(".");
    let value: unknown = msgs;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return value as T;
  }

  return { t, tRaw, msgs };
}
