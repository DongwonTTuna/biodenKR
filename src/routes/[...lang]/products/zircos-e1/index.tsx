import { $translate as t } from "qwik-speak";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
export default component$(() => {
  return (
    <div class="right">
      <h3>Zircos-E Block</h3>
      <div class="zirconia_block1">
        <p class="zirconia_b_p1">
          <span class="blue">
            {t("product.zircos-e.firstblue@@ZIRCOS-E 블록")}
          </span>

          {t(
            "product.zircos-e.first@@은 200ton의 높은 압력 성형을 통해 접착강도, 부착력, 내충격성, 내마모성 등 물리적 특성을 향상시켜 매우 쉽게 블록가공을 할 수 있는 제품입니다."
          )}
          <br />
          <br />
          {t(
            "product.zircos-e.second@@Shade 블록은 지르코니아 분말에 세라믹 이온 코팅 처리와 물리적 기술을 향상시켜 생체적합성이 뛰어난 제품입니다."
          )}
          <br />
          <br />
          {t(
            "product.zircos-e.third@@A,B,C,D 계열의 각종 블록은 항상 생산되고 있습니다."
          )}
        </p>
        <p class="zirconia_b_p3">
          <span class="big">Zircos-E Block</span>
          {t("product.zircos-e.zircosblocktitle@@지르코니아 E 블록")}
        </p>
        <Image
          width={758}
          height={294}
          layout="constrained"
          src="https://res.cloudinary.com/dfd9pdmuf/image/upload/f_auto/v1677989416/bioden/zirconia_block_bizbnq"
          srcSet=""
          alt=""
          id="zirconia_block"
        />
      </div>
      <div class="zirconia_block2 flex flex-col">
        <div class="w-[759px] float-right flex py-8">
          <Image
            width={204}
            height={176}
            layout="constrained"
            srcSet=""
            class=" w-52 h-44"
            src="https://res.cloudinary.com/dfd9pdmuf/image/upload/f_auto/v1677989415/bioden/posterior_block_lm9tmz"
            alt=""
          />
          <div class="flex flex-col w-full ml-4 border-t-[1px] border-t-black text-left">
            <div class="border_r w-full text-[14px] bg-[#f3f3f4] py-[6px] px-16">
              Posterior block (1200MPa, 98π)
            </div>
            <div class=" w-full text-[14px] border-y-[1px]border-y-[#e3e2e2] py-[6px] px-16">
              Pure
            </div>
            <div class=" w-full text-[14px]  py-[6px] px-16">
              Shade A2, Shade A3
            </div>
            <div class=" w-full text-[14px] border-y-[1px] border-y-[#e3e2e2] py-[6px] px-16">
              Multi-Shade
            </div>
          </div>
        </div>
        <div class="w-[759px] float-right flex">
          <Image
            width={204}
            height={176}
            layout="constrained"
            srcSet=""
            class=" w-52 h-44"
            src="https://res.cloudinary.com/dfd9pdmuf/image/upload/f_auto/v1677989407/bioden/anterior_block_dv1u0l"
            alt=""
          />
          <div class="flex flex-col w-full ml-4 border-t-[1px] border-t-black text-left">
            <div class="border_r w-full text-[14px] bg-[#f3f3f4] py-[6px] px-16">
              Anterior Block (800MPa, 98π)
            </div>
            <div class=" w-full text-[14px] border-y-[1px] border-y-[#e3e2e2] py-[6px] px-16">
              Pure
            </div>
            <div class=" w-full text-[14px] py-[6px] px-16">
              Shade A1, Shade A2, Shade A3
            </div>
            <div class=" w-full text-[14px] border-y-[1px] border-y-[#e3e2e2] py-[6px] px-16">
              Multi-Shade
            </div>
          </div>
        </div>
        <div class="w-[759px] float-right flex py-8">
          <Image
            width={204}
            height={176}
            layout="constrained"
            srcSet=""
            class=" w-52 h-44"
            src="https://res.cloudinary.com/dfd9pdmuf/image/upload/f_auto/v1677989410/bioden/HT_block_buknae"
            alt=""
          />
          <div class="flex flex-col w-full ml-4 border-t-[1px] border-t-black text-left">
            <div class="border_r w-full text-[14px] bg-[#f3f3f4] py-[6px] px-16">
              HT block (1300MPa, 95π)
            </div>
            <div class=" w-full text-[14px] border-y-[1px] border-y-[#e3e2e2] py-[6px] px-16">
              Pure
            </div>
            <div class=" w-full text-[14px] py-[6px] px-16">Shade A2</div>
            <div class=" w-full text-[14px] border-y-[1px] border-y-[#e3e2e2] py-[6px] px-16">
              Multi-Shade
            </div>
          </div>
        </div>
        <div class="w-[759px] float-right flex">
          <Image
            width={204}
            height={176}
            layout="constrained"
            srcSet=""
            class=" w-52 h-44"
            src="https://res.cloudinary.com/dfd9pdmuf/image/upload/f_auto/v1677989407/bioden/ACE_block_u7zfrt"
            alt=""
          />
          <div class="flex flex-col w-full ml-4 border-t-[1px] border-t-black text-left">
            <div class="border_r w-full text-[14px] bg-[#f3f3f4] py-[6px] px-16">
              ACE Block (1100MPa, 95π / 98 π )
            </div>
            <div class=" w-full text-[14px] py-[6px] px-16">Pure</div>
            <div class=" w-full text-[14px] border-y-[1px] border-y-[#e3e2e2] py-[6px] px-16">
              Shade A2
            </div>
          </div>
        </div>
        <div class="z_block2_line"></div>
      </div>

      <div class="zirconia_products flex flex-col">
        <p class="b_p3">
          <span class="big">Metal Block</span>
        </p>
        <div class="w-[759px] float-right flex">
          <Image
            width={204}
            height={176}
            layout="constrained"
            srcSet=""
            class=" w-52 h-44"
            src="https://res.cloudinary.com/dfd9pdmuf/image/upload/f_auto/v1677989413/bioden/metal_block1_r4odv7"
            alt=""
          />
          <div class="flex flex-col w-full ml-4 border-t-[1px] border-t-black text-left">
            <div class="border_r w-full text-[14px] bg-[#f3f3f4] py-[6px] px-16">
              Cr-Co (98π)
            </div>
            <div class=" w-full text-[14px] py-[6px] px-16">
              10T / 12T / 14T / 16T /18T
            </div>
          </div>
        </div>
        <div class="w-[759px] float-right flex">
          <Image
            width={204}
            height={176}
            layout="constrained"
            srcSet=""
            class=" w-52 h-44"
            src="https://res.cloudinary.com/dfd9pdmuf/image/upload/f_auto/v1677989413/bioden/metal_block2_au6odk"
            alt=""
          />
          <div class="flex flex-col w-full ml-4 border-t-[1px] border-t-black text-left">
            <div class="border_r w-full text-[14px] bg-[#f3f3f4] py-[6px] px-16">
              Ni-Cr (98π)
            </div>
            <div class=" w-full text-[14px] py-[6px] px-16">12T /14T / 16T</div>
          </div>
        </div>
      </div>

      <div class="zirconia_products flex flex-col">
        <p class="b_p3">
          <span class="big">WAX & PMMA</span>
        </p>
        <div class="w-[759px] float-right flex">
          <Image
            width={204}
            height={176}
            layout="constrained"
            srcSet=""
            class=" w-52 h-44"
            src="https://res.cloudinary.com/dfd9pdmuf/image/upload/f_auto/v1677989416/bioden/WAX_l3vbzc"
            alt=""
          />
          <div class="flex flex-col w-full ml-4 border-t-[1px] border-t-black text-left">
            <div class="border_r w-full text-[14px] bg-[#f3f3f4] py-[6px] px-16">
              WAX(blue)
            </div>
            <div class=" w-full  border-y-[1px] border-y-[#e3e2e2] text-[14px] py-[6px] px-16">
              14T / 16T / 18T / 20T
            </div>
          </div>
        </div>
        <div class="w-[759px] float-right flex">
          <Image
            width={204}
            height={176}
            layout="constrained"
            srcSet=""
            class=" w-52 h-44"
            src="https://res.cloudinary.com/dfd9pdmuf/image/upload/f_auto/v1677989414/bioden/PMMA_ch0hia"
            alt=""
          />
          <div class="flex flex-col w-full ml-4 border-t-[1px] border-t-black text-left">
            <div class="border_r w-full text-[14px] bg-[#f3f3f4] py-[6px] px-16">
              PMMA
            </div>

            <div class=" w-full text-[14px] py-[6px] px-16">
              Shade A2, Shade A3
            </div>
            <div class=" w-full  border-y-[1px] border-y-[#e3e2e2] text-[14px] py-[6px] px-16">
              14T / 18T
            </div>
          </div>
        </div>
        <div class="z_block2_line"></div>
      </div>
    </div>
  );
});
