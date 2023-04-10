import { $translate as t } from "qwik-speak";
import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
      <div class="right">
        <h3>ZIRCOS-Universal</h3>
        <div class="zircos_universal">
          <p class="universal_p1">
            {t("product.zircos-com.universal_1@@Zirconia filler가 함유되어 강도와 내마모성이 뛰어난 Hybrid 제품입니다.")}
            <br />
			<br/>
            {t("product.zircos-com.universal_2@@One Body 개념의 Enamel resin으로 Indirect resin Inlay 제작 시 쉽고 빠르게 사용이 편리합니다.")}
          </p>
        </div>
        <div class="shade">
          <p>Shade</p>
          <ul class="clearfix">
            <li>A1</li>
            <li>A2</li>
            <li>A3</li>
            <li>A3.5</li>
            <li>A4</li>
          </ul>
          <ul class="clearfix">
            <li>B1</li>
            <li>B2</li>
            <li>B3</li>
            <li>B4</li>
          </ul>
          <ul class="clearfix">
            <li>C1</li>
            <li>C2</li>
            <li>C3</li>
            <li>C4</li>
          </ul>
          <ul class="clearfix">
            <li>D2</li>
            <li>D3</li>
            <li>D4</li>
          </ul>
          <ul class="clearfix">
            <li>U1</li>
            <li>U2</li>
            <li>LT</li>
            <li>WT</li>
            <li>OP</li>
          </ul>
        </div>
      </div>
  );
})