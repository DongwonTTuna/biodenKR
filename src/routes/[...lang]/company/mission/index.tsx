import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { $translate as t } from "qwik-speak";
import { useSpeakLocale } from "qwik-speak";
export default component$(() => {
  const loc = useSpeakLocale();
  return (
    <div class="right">
      <h3 class="">Mission & Vision</h3>
      <div class="mission text-2xl mt-8  relative">
        <Image
          width={400}
          height={260}
          layout="constrained"
          src="https://res.cloudinary.com/dfd9pdmuf/image/upload/w_400,f_auto/v1677989414/bioden/mission_img_yvaec5"
          srcSet=""
          alt="missionImage"
          class="w-[400px] h-[260px] absolute  top-[-30px] right-[0] z-0 opacity-60"
        />
        <div class="relative z-1">
          {loc.lang === "en" ? (
            <>
              <p class="leading-[1.4em] ">
                {t("company.mission.p1_1@@인류의 치아 건강")}
                <br />
                <span class="text-[#269885]">
                  {t("company.mission.p1_green@@인류의 치아 건강")}
                </span>
              </p>
              <p class="leading-[1.4em] mt-10">
                {t("company.mission.p2_1@@우리의 사명(Mission)이며,")}
                <br />
                <span class="text-[#269885]">
                  {t("company.mission.p2_green@@치아건강산업의 글로벌 리더")}
                </span>
              </p>
            </>
          ) : (
            <>
              <p class="leading-[1.4em] ">
                <span class="text-[#269885]">
                  {t("company.mission.p1_green@@인류의 치아 건강")}
                </span>
                {t("company.mission.p1_1@@에 이바지하는 것이")}
                <br />
                {t("company.mission.p1_2@@우리의 사명(Mission)이며,")}
              </p>
              <p class="leading-[1.4em] mt-10">
                <span class="text-[#269885]">
                  {t("company.mission.p2_green@@치아건강산업의 글로벌 리더")}
                </span>
                {t("company.mission.p2_1@@가 되는")}
                <br />
                {t("company.mission.p2_2@@것이 우리의 이상(Vision)입니다.")}
              </p>
            </>
          )}
        </div>
      </div>
      <div class="vision relative z-1 mt-20">
        <p class="vision_p mb-10 text-center w-[755px]">Vision</p>
        <div class="vision_img relative">
          <Image
            class="absolute z-0"
            width={760}
            height={loc.lang === "en" ? 470 : 370}
            layout="constrained"
            src={`https://res.cloudinary.com/dfd9pdmuf/image/upload/${t(
              "company.mission.imgsrc@@v1677989414/bioden/mission_vision_bkfpks"
            )}`}
            alt="MissionImage2"
          />
          <ul class="absolute z-1">
            <li
              class={
                loc.lang === "en"
                  ? "v_list1 relative top-8"
                  : "v_list1 relative top-3"
              }
            >
              {t(
                "company.mission.v_list1@@Zircocnia 인조치아와 관련된 제품에 대해 연구 개발을 추진하여 기술 특허를 보유 중이며 창조적 도전정신에 의한 글로벌 기업체로 성장하고 있습니다."
              )}
            </li>
            <li class="v_list2">
              {t(
                "company.mission.v_list2@@세계 최초의 기술력 노하우로 해외 수출업체로부터 제품의 우수성을 인정받고 있으며 독창적인 기술력에 의한 신제품 개발을 통해 시장 점유율을 점차 향상시키고 있습니다."
              )}
            </li>
            <li class={loc.lang === "en" ? "v_list3" : "v_list3"}>
              {t(
                "company.mission.v_list3@@미국, 캐나다, 유럽지역에 해외 수출전망이 밝아 대외무역에 기여하고 있으며 글로벌 시장에 공략적인 기반을 구축하여 매년 20%이상의 고용인원을 창출코자 합니다."
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});
