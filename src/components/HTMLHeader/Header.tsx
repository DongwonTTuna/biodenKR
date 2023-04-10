import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content="치아 건강 산업, dental health industry" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=0.3, minimum-scale=0.2, maximum-scale=1.0"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta
        name="Author"
        content="HTML, CSS, JS by Yu Hyejin, Parsed to Qwik by @DongwonTTuna on Github"
      />
      <meta
        name="description"
        content="dental restorations, Zirconia Etching system, artificial teeth, dental health industry"
      />
      <title>{t("common.title@@(주) 바이오덴")}</title>
    </>
  );
});
