import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { $translate as t, useSpeakLocale } from "qwik-speak";
import Imgsrc from "~/variables/Imgsrc";
export default component$(() => {
  const loc = useSpeakLocale();
  return (
    <div class="right">
      <h3>About BIODEN</h3>
      <div class="ceo_message">
        <p class="ceo_p1">
          {loc.lang === "en" ? (
            <>
              {t("company.about.ceo_p1")}
              <span class="green"> {t("company.about.ceo_p1_span")}</span>
            </>
          ) : (
            <>
              <span class="green">
                {" "}
                {t("company.about.ceo_p1_span@@치아 건강산업")}
              </span>
              {t(
                "company.about.ceo_p1@@의 글로벌 리더로 새롭게 거듭나고 있습니다."
              )}
            </>
          )}
        </p>
        <p class="ceo_p2">
          {t(
            "company.about.ceo_p2_1@@인화 중심의 창조 경영을 통한 도전 정신은"
          )}
          {loc.lang === "ko" ? <br /> : ""}
          {t(
            "company.about.ceo_p2_2@@계속 될 것이며 앞서가는 기술력과 창의력으로 세계적인 일류 기업이 되겠습니다."
          )}
        </p>
        <p class="ceo_p3">CEO Message</p>
        <p class="ceo_p4">
          {t(
            "company.about.ceo_p4_1@@세계 초일류의 Tooth Mater-pia(Tooth Material Utopia)를 지향하는 Bioden은 인조치아의 Quality가 급변하는 세계화 시대속에 치기공 산업계 및 치과 의료업계의 지속적인 성장과 더불어 Zirconia Etching system을 개발한 세계 최초의 치아기능 특허제품을 생산, 공급하여온 대한민국 대표 기업으로서 글로벌 시장에서의 경쟁력 강화를 위해 선도적 역할을 경주하여 왔습니다."
          )}
          <br />
          <br />
          {t(
            "company.about.ceo_p4_2@@Bioden은 부단한 기술개발과 글로벌 인프라 및 네트워크를 통해 고품질의 치아기능 제품을 홍보하고 있으며 국내외 치기공 학술대회 및 치과기자재 전시회 참가를 통해 해외 수출업체로 부터 독창적인 기술력과 품질의 우수성을 인정받아 국내는 물론 미국, 캐나다, 호주, 러시아, 대만, 일본 등 세계 12개국과의 수출계약 체결 및 글로벌 Top Brand 기업가치를 높이고 있습니다."
          )}
          <br />
          <br />
          {t(
            "company.about.ceo_p4_3@@Bioden은 창조적인 도전정신과 세계 일류를 향한 기술력으로 최첨단 제품의 품질혁신에 기여하여 글로벌 시장력 강화 및 국내외 치기공 산업계의 중심에 서는 그날까지 함께할 수 있도록 새로운 고부가 가치의 제품 개발과 고품질 제품의 공급에 임직원 모두가 최선의 노력을 다하겠음을 약속드리겠습니다."
          )}
          <br />
          <br />
          {t("company.about.thankyou@@감사합니다.")}
          <br />
          <br />
        </p>
        <div class="flex float-right mb-40">
          <div class="w-fit mr-5">
            <p class="ceo_p5">
              {t("company.about.ceo_p5_1@@주식회사 바이오덴")}
              <br />
              {t("company.about.ceo_p5_2@@대표이사 이창택")}
            </p>
          </div>
          <div>
            <Image
              width={100}
              height={100}
              layout="constrained"
              src={Imgsrc.Sign}
              srcSet=""
              alt="Sign of CEO"
            />
          </div>
        </div>
      </div>
    </div>
  );
});
