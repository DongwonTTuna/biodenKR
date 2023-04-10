import { $translate as t } from "qwik-speak";
import { component$, useSignal, $ } from "@builder.io/qwik";
import Imgsrc from "~/variables/Imgsrc";
import { Image } from "@unpic/qwik";
const Images = [
  {
    src: "https://res.cloudinary.com/dfd9pdmuf/image/upload/w_22,f_auto/v1677989412/bioden/jig-gel_icon1_uixhkp",
    text: "Reduces workload and efficient",
  },
  {
    src: "https://res.cloudinary.com/dfd9pdmuf/image/upload/w_22,f_auto/v1677989412/bioden/jig-gel_icon2_nfevpt",
    text: "Odorless",
  },
  {
    src: "https://res.cloudinary.com/dfd9pdmuf/image/upload/w_22,f_auto/v1677989412/bioden/jig-gel_icon3_vldhzz",
    text: "Polishing is not required",
  },
  {
    src: "https://res.cloudinary.com/dfd9pdmuf/image/upload/w_22,f_auto/v1677989412/bioden/jig-gel_icon4_mmk139",
    text: "Low Priced",
  },
  {
    src: "https://res.cloudinary.com/dfd9pdmuf/image/upload/w_22,f_auto/v1677989412/bioden/jig-gel_icon5_bfz0um",
    text: "Easy to use even for beginners",
  },
  {
    src: "https://res.cloudinary.com/dfd9pdmuf/image/upload/w_22,f_auto/v1677989413/bioden/jig-gel_icon6_eqkkiw",
    text: "High quality",
  },
];

export default component$(() => {
  const DOMElement = useSignal<HTMLDivElement>();

  const handleMouseEnter = $(() => {
    if (DOMElement.value === undefined) return;
    DOMElement.value.style.opacity = "1";
    DOMElement.value.style.visibility = "visible";
  });
  const handleMouseLeave = $(() => {
    if (DOMElement.value === undefined) return;
    DOMElement.value.style.opacity = "0";
    DOMElement.value.style.visibility = "hidden";
  });

  return (
    <div class="right">
      <h3>JIG-GEL</h3>
      <div class="jig-gel1">
        <p class="jig-gel_p1">
          {t(
            "product.jig-gel.p1@@주사식 투입방법으로 제작된 광중합형 레진으로서 임플란트 지그를 쉽게 제작할 수 있는 제품입니다. 기존에 레진 파우더를 붓으로 이용하여 용액에 흡수시킨 후 임플란트 어버트먼트에 수없이 떠올리는 방식에서 탈피한 획기적인 제품입니다."
          )}
        </p>
      </div>
      <div class="jig-gel_line"></div>
      <ul class="jig-gel2">
        <span class="ul_title">Benefits of JIG-GEL</span>
        {Images.map((item, index) => {
          return (
            <li key={`jigk${index}`}>
              <Image
                width={22}
                height={20}
                layout="constrained"
                src={item.src}
                alt="Jiggel"
                class="inline mr-1"
              />
              {item.text}
              {index === 3 ? (
                <div class="relative inline-block">
                  <div
                    ref={DOMElement}
                    id="info"
                    class="flex before:block absolute left-[240px] bottom-[5px] invisible z-10 before:z-0 items-center py-[2px] px-2 mx-auto mt-2 before:w-2 before:h-2 rounded transition-all duration-150 transform before:transform before:rotate-45 -translate-x-1/2 before:-translate-x-1/2 w-[400px] text-base bg-yellow-100 text-black"
                  >
                    {t(
                      "product.jig-gel.lowprice@@(1 SET에 6개 들어 있고 내용량의 합계는 약 100G으로써 이는 패턴레진 1통 값과 같습니다)"
                    )}
                  </div>
                  <div
                    onMouseEnter$={() => handleMouseEnter()}
                    onMouseLeave$={() => handleMouseLeave()}
                  >
                    <Image
                      width={20}
                      height={20}
                      src={Imgsrc.Question}
                      srcSet=""
                      layout="constrained"
                      alt="Jiggel"
                      class="inline ml-1"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
});
