import { $translate as t } from "qwik-speak";
import type { Translation } from "qwik-speak";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
export default component$(() => {
  const imageArray = t<Translation[]>(
    'product.hycera@@["v1677989410/bioden/hycera1_gjjzdt","v1677989411/bioden/hycera2_v46x7l","v1677989411/bioden/hycera3_lqhmo5"]'
  );
  return (
    <div class="right">
      <h3>Hycera</h3>
      {imageArray.map((item, index) => {
        return (
          <Image
            key={`hycera${index}`}
            src={`https://res.cloudinary.com/dfd9pdmuf/image/upload/w_1600,f_auto/${item}`}
            srcSet=""
            layout="constrained"
            alt={`hycera${index + 1}`}
            width={1600}
            height={2000}
            loading="eager"
          />
        );
      })}
    </div>
  );
});
