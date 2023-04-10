import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
  defaultLocale: { lang: "ko", currency: "KRW", timeZone: "Asia/Seoul" },
  supportedLocales: [
    { lang: "ko", currency: "KRW", timeZone: "Asia/Seoul" },
    { lang: "en", currency: "USD", timeZone: "America/Los_Angeles" },
    { lang: "ja", currency: "JPY", timeZone: "Asia/Tokyo" },
    { lang: "cn", currency: "CNY", timeZone: "Asia/Shanghai" },
    { lang: "ru", currency: "RUB", timeZone: "Europe/Moscow" },
  ],
  assets: [
    'common'
  ]
};