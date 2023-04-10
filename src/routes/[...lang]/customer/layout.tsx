import { component$, useStore, $ } from "@builder.io/qwik";
import { Slot } from "@builder.io/qwik";
import Imgsrc from "~/variables/Imgsrc";
import CustomerMenu from "./CustomerMenu";
import { Image } from "@unpic/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const Menus = [
  { title: "MSDS", target: "/customer/downloads" },
  { title: "Catalog", target: "/customer/catalog" },
  { title: "Instruction for use", target: "/customer/instruction" },
];
const ChangeMenu = (item: string) => {
  if (item.includes("downloads")) return  "MSDS"
  else if (item.includes("catalog")) return "Catalog"
  else if (item.includes("instruction")) return "Instruction for use"
};
export default component$(() => {
  const loc = useLocation();
  const currentMenu = useStore({ value: ChangeMenu(loc.url.pathname) });
  const changeMenuItem = $((item: string) => {
    currentMenu.value = item;
  });
  return (
    <div id="wrap">
      <div id="container">
        <div class="common_top customer_top">
          <h2>
            <p class="h2p">Customer</p>
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
              <li>Customer</li>
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
              <li>{currentMenu.value}</li>
            </div>
          </ul>
        </div>

        <div id="content">
          <div class="con_wrap">
            <CustomerMenu
              currentMenu={currentMenu}
              changeCurrentMenu={changeMenuItem}
            />
            <Slot />
          </div>
        </div>
      </div>
    </div>
  );
});
