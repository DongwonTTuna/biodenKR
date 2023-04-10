import { $translate as t, useSpeakLocale } from "qwik-speak";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
export default component$(() => {
  const loc = useSpeakLocale();
  return (
    <div class="right">
      <h3>Aqua Coloring Liquid</h3>
      <div class="aqua_coloring">
        <p class="aqua_c_p1">
          {t(
            "product.aqua.aqua_c_p1@@A, B, C, D 계열의 16종류의 Dentin 색상, 16종류의 Enamel 색상, 8종류의 Effect 색상, 2종류의 Opaque 색상을 생산하고 있습니다."
          )}
        </p>
        <p class="aqua_c_p2 mt-16">
          {t("product.aqua.aqua_c_p2_1@@아쿠아 베이스로 염산이 포함되지 않아")}
          <span class="blue">
            {loc.lang === "ko" ? <br /> : <></>}
            {t("product.aqua.blue@@인체에 무해")}
          </span>
          {t("product.aqua.aqua_c_p2_2@@하고 장비를 부식시키지 않습니다.")}
        </p>
        <Image
          src="https://res.cloudinary.com/dfd9pdmuf/image/upload/w_800,f_auto/v1677989407/bioden/aqua-coloring1_dkd2tw"
          width={800}
          height={521}
          layout="constrained"
          srcSet=""
          class="relative"
          alt="aquaColoring"
        />
      </div>
      <div class="aqua-c_img2">
        <Image
          height={223}
          width={700}
          srcSet=""
          layout="constrained"
          src="https://res.cloudinary.com/dfd9pdmuf/image/upload/w_800,f_auto/v1677989408/bioden/aqua-coloring2_xdmyas"
          alt=""
        />
        <p class="aqua-c_p1">Dentine</p>
        <p class="aqua-c_p2">Color</p>
      </div>
      <div>
        <Image
          height={457}
          width={700}
          srcSet=""
          layout="constrained"
          src="https://res.cloudinary.com/dfd9pdmuf/image/upload/w_800,f_auto/v1677989408/bioden/aqua-coloring3_uh1y9x"
          alt=""
        />
        <div class="aqua_c_line"></div>
      </div>
      <div class="aqua_c_table mt-10">
        <h4>{t("product.aqua.h4@@Aqua Coloring Liquid 구성")}</h4>
        <div class="w-[759px] h-[125px] flex my-10 border-y-[1px] border-t-black border-b-[#b9b7b7]">
          <div class="flex items-center justify-center w-[205px] text-lg bg-[#f3f3f4] text-black">
            Dentine
          </div>
          <div class="flex flex-col text-base">
            <div class="h-8 flex items-center text-[#5b5b5b] border-b-[1px] border-b-[#b9b7b7] w-[554px]">
              <p class="pl-16">A1, A2, A3, A3.5, A4</p>
            </div>
            <div class="h-8 flex items-center text-[#5b5b5b] border-b-[1px] border-b-[#b9b7b7] w-[554px]">
              <p class="pl-16">B1, B2, B3, B4</p>
            </div>
            <div class="h-8 flex items-center text-[#5b5b5b] border-b-[1px] border-b-[#b9b7b7] w-[554px]">
              <p class="pl-16">C1, C2, C3, C4</p>
            </div>
            <div class="h-8 flex items-center text-[#5b5b5b] w-[554px]">
              <p class="pl-16">D2, D3, D4</p>
            </div>
          </div>
        </div>
        <div class="w-[759px] h-[64px] flex my-10 border-y-[1px] border-t-black border-b-[#b9b7b7]">
          <div class="flex items-center justify-center w-[205px] text-lg bg-[#f3f3f4] text-black">
            Color
          </div>
          <div class="flex flex-col text-base">
            <div class="h-8 flex items-center text-[#5b5b5b] border-b-[1px] border-b-[#b9b7b7] w-[554px]">
              <p class="pl-16">Gray, Pink+, Violet, Brown, White</p>
            </div>
            <div class="h-8 flex items-center text-[#5b5b5b] w-[554px]">
              <p class="pl-16">Orange, Blue, Dark gray</p>
            </div>
          </div>
        </div>
        <div class="w-[759px] h-8 flex my-10 border-y-[1px] border-t-black border-b-[#b9b7b7]">
          <div class="flex items-center justify-center w-[205px] text-lg bg-[#f3f3f4] text-black">
            Opaque
          </div>
          <div class="flex flex-col text-base">
            <div class="h-8 flex items-center text-[#5b5b5b] w-[554px]">
              <p class="pl-16">Snow Light</p>
            </div>
          </div>
        </div>
        <div class="w-[759px] h-8 flex my-10 border-y-[1px] border-t-black border-b-[#b9b7b7]">
          <div class="flex items-center justify-center w-[205px] text-lg bg-[#f3f3f4] text-black">
            Pallet
          </div>
          <div class="flex flex-col text-base">
            <div class="h-8 flex items-center text-[#5b5b5b] w-[554px]">
              <p class="pl-16">Zirconia Coloring & Porcelain Stain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
