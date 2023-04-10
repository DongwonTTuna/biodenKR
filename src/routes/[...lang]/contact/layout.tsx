import { component$, Slot } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { Speak } from "qwik-speak";
import Imgsrc from "~/variables/Imgsrc";
export default component$(() => {
  return (
    <Speak assets={["contact"]}>
      <div id="wrap">
        <div id="container">
          <div class="common_top contact_top">
            <h2>
              <p class="h2p">Contact us</p>
            </h2>
            <p class="top_text">New Etched Full Zirconia Technic</p>
            <ul>
              <div class="flex float-right mr-20">
                <li class="w-15 text-center">Home </li>
                <li class="mx-3">
                  <Image
                    width={10}
                    height={10}
                    layout="constrained"
                    src={Imgsrc.Arrow}
                    srcSet=""
                    alt=""
                  />
                </li>
                <li>CONTACT US</li>
              </div>
            </ul>
          </div>
          <div id="content">
            <div class="con_wrap">
              <Slot />
            </div>
          </div>
        </div>
      </div>
    </Speak>
  );
});
