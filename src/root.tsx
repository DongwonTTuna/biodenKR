import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/HTMLHeader/Header";
import 'swiper/swiper-bundle.min.css'
import "./global.css";
import { QwikSpeakProvider } from "qwik-speak";
import { config } from "./speak-config";
import { translationFn } from './speak-functions';
export default component$(() => {
  return (
    <QwikSpeakProvider config={config} translationFn={translationFn}>
      <QwikCityProvider>
        <head>
          <meta charSet="utf-8" />
          <RouterHead />
        </head>
        <body lang="ko" class="relative h-fit min-h-[1300px] min-w-fit w-full">
          <RouterOutlet />
          <ServiceWorkerRegister />
        </body>
      </QwikCityProvider>
    </QwikSpeakProvider>
  );
});
