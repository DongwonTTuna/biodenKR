import { component$ } from "@builder.io/qwik";
import { $translate as t, Speak } from "qwik-speak";
import IndexSlides from "~/components/IndexComponent/Slides";
import InsideMenu from "~/components/IndexComponent/InsideMenu";
export const Home = component$(() => {
  return (
    <main>
      <div id="wrap">
        <div id="container min-w-fit">
          <IndexSlides />
          <div id="content">
            <div class="flex flex-col  min-w-[1000px] w-[80vw] max-w-[1200px] mx-auto mb-16 ">
              <div class="ml-4 my-10">
                <dl>
                  <dt class="pb-4">{t("common.index.index1@@최고의 품질과 정직하고 합리적인 서비스를 제공하기 위해")}</dt>
                  <dd>{t("common.index.index2@@바이오덴은 언제나 고객님과 함께하겠습니다.")}</dd>
                </dl>
              </div>
              <InsideMenu />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});

export default component$(() => {
  return (
    <Speak assets={["common"]}>
      <Home />
    </Speak>
  );
});
