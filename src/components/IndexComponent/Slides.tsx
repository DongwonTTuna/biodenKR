import Swiper, { Pagination, Autoplay } from "swiper";
import { $translate as t, Speak } from "qwik-speak";
import { useVisibleTask$ } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
const IndexSlides = component$(() => {
  useVisibleTask$(() => {
    Swiper.use([Pagination, Autoplay]);
    new Swiper(".swiper", {
      slidesPerView: 1,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: false,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
    });
  });
  const slideArray = t<string[]>(
    'common.slides@@["v1677989416/bioden/visual4_cwkbfm","v1677989415/bioden/visual1_bfl9jt","v1677989415/bioden/visual2_jvblyf","v1677989416/bioden/visual3_c5cc17"]'
  );

  return (
    <div class="pt-1">
      <div class="swiper min-h-[600px] h-[50vh]  max-h-[1200px] w-screen">
        <div class="swiper-wrapper">
          {slideArray.map((item, index) => {
            return (
              <div class="swiper-slide" key={`sl${index}`}>
                <Image
                  layout="fullWidth"
                  loading="eager"
                  src={`https://res.cloudinary.com/dfd9pdmuf/image/upload/f_auto/${item}`}
                  style={{ objectFit: "cover", height: "100%" }}
                  alt="slidesLogo"
                />
              </div>
            );
          })}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  );
});

export default component$(() => {
  return (
    <Speak assets={["common"]}>
      <IndexSlides />
    </Speak>
  );
});
