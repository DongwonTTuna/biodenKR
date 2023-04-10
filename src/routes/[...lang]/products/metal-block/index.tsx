import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
export default component$(() => {
  return (
    <div class="right">
      <h3>Metal Block</h3>
      <Image
        src="https://res.cloudinary.com/dfd9pdmuf/image/upload/w_758,f_auto/v1677989414/bioden/metal-block_skugqm"
        alt=""
        width={758}
        height={800}
        srcSet=""
        layout="constrained"
      />
    </div>
  );
});
