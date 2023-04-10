import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
export default component$(() => {
  return (
    <>
      <div class="right">
        <h3>Global Network</h3>
        <div class="network">
          <div class="global_map">
            <Image
              height={500}
              width={760}
              layout="constrained"
              style={{ width: "100%", height: "100%" }}
              src="https://res.cloudinary.com/dfd9pdmuf/image/upload/w_780,f_auto/v1677989414/bioden/network_map_fuavxl"
              srcSet=""
              alt="Network Map"
            />
          </div>
        </div>
      </div>
    </>
  );
});
