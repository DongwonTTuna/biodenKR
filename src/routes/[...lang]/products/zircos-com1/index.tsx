import { $translate as t } from "qwik-speak";
import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
      <div class="right">
        <h3>
          ZIRCOS-Com <span class="text-[#b62f23]">Flow </span>
        </h3>
        <div class="zircos_flow">
          <p class="flow_p1">
            {t("product.zircos-com.flow_1@@Zirconia filler가 함유되어 강도와 내마모성이 뛰어난 Hybrid 제품으로써 작업성이 탁월한 점도를 지니고 있습니다.")}
            <br />
            <br />
            {t("product.zircos-com.flow_2@@바이오덴은 Shade Guide의 모든 색상을 생산하고 있습니다.")}
          </p>
        </div>
        <div class="shade mt-20">
          <p>Shade</p>
          <ul class="clearfix">
            <li>A1</li>
            <li>A2</li>
            <li>A3</li>
            <li>A3.5</li>
            <li>A4</li>
            <li>A2E</li>
            <li>A3E</li>
          </ul>
          <ul class="clearfix">
            <li>B1</li>
            <li>B2</li>
            <li>B3</li>
            <li>C2</li>
            <li>C3</li>
          </ul>
          <ul class="clearfix">
            <li>D2</li>
            <li>D3</li>
            <li>OA2</li>
            <li>OA3</li>
            <li>TL</li>
            <li>WT</li>
            <li>OP</li>
          </ul>
        </div>
      </div>
  );
})