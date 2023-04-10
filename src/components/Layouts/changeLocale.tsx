import { component$, useSignal, $} from "@builder.io/qwik";
import { useSpeakConfig,useSpeakLocale } from "qwik-speak";
import type { SpeakLocale } from "qwik-speak";

export const ChangeLocale = component$(() => {
    const config = useSpeakConfig();
    const locale =  useSpeakLocale().lang
    
    const changeLocale$ = $((newLocale: SpeakLocale) => {
      document.cookie = `locale=${JSON.stringify(newLocale)};max-age=86400;path=/`;
  
      location.reload();
    });

    const currentLocale: { [key: string]: string } = {
      "ko": "한국어",
      "en": "English",
      "ja": "日本語",
      "cn": "中文(簡体)",
      "ru": "ру́сский",
    };
    const LangBox = useSignal(false);
  
    return (
        <div class="lang_box">
        <p
          onClick$={() => {
            LangBox.value = !LangBox.value;
          }}
          class={LangBox.value === true ? "select_box on" : "select_box off"}
        >
          {currentLocale[locale]}
        </p>
        <div class={`select_lang${LangBox.value === true ? " selected" : ""}`}>
          {config.supportedLocales.map((item,index) => {
            if (locale === item.lang) return;
            return (
              <a
                key={`langitem${index}`}
                onClick$={async () => {
                  LangBox.value = !LangBox.value;
                  await changeLocale$(item)
                }}
              >
                <p class="item">{currentLocale[item.lang]}</p>
              </a>
            );
          })}
        </div>
      </div>
    );
  });