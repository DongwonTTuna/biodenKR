import { $translate as t } from "qwik-speak";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
export default component$(() => {
  return (
    <div class="right">
      <h3>Etching Solution</h3>
      <div class="etching_solution1">
        <p class="etching_s_p1">
          <span class="blue">ZIRCOS-E</span>
          {t("product.etching.etching_s_p1@@는 액상솔루션을 이용해 지르코니아 표면에 이온을 활성화시켜 porcelain과의 접착강도를 강화시키고 박리현상을 방지하는 표면처리 기술 Solution 입니다.")}
        </p>
        <p class="etching_s_p2">{t("product.etching.etching_s_p2@@이 기술을 응용하여 full zir 표면에 porcelain을 0.3mm 올려서 지르코니아 특유의 자개장 색을 제거할 수 있어 탁월한 shade를 재현할 수 있습니다.")}</p>
        <p class="etching_s_p3">
          <span class="big">Etching Solution</span>
          {t("product.etching.title@@에칭 솔루션")}
        </p>
        <Image
          src="https://res.cloudinary.com/dfd9pdmuf/image/upload/w_700,f_auto/v1677989409/bioden/etching_s_img2_zza19c"
          srcSet=""
          alt=""
          id="etching_s_img2"
          width={700}
          height={700}
          layout="constrained"
        />
        <div class="etching_s_line"></div>
        <p class="add">{t("product.etching.add@@ZIRCOS-E 사용 설명서는 Customer 메뉴바에서 다운 받을 수 있습니다.")}</p>
      </div>
    </div>
  );
});
