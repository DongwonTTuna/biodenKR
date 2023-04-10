import { component$, useStore, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import { Slot } from "@builder.io/qwik";
import Imgsrc from "~/variables/Imgsrc";
import ProductMenu from "./ProductMenu";
import { Image } from "@unpic/qwik";

export const Menus = [
  {
    title: "HyCera",
    include: "hycera",
    links: [{ title: "Metal-Block", target: "/products/hycera" }],
  },
  {
    title: "ZIRCOS-E",
    include: "zircos-e",
    links: [
      { title: "Zircos-E Block", target: "/products/zircos-e1" },
      { title: "Aqua Coloring Liquid", target: "/products/zircos-e2" },
      { title: "Etching Solution", target: "/products/zircos-e3" },
      { title: "Zirconia milling tools", target: "/products/zircos-e4" },
    ],
  },
  {
    title: "ZIRCOS-Com",
    include: "zircos-com",
    links: [
      { title: "Flow", target: "/products/zircos-com1" },
      { title: "Hard", target: "/products/zircos-com2" },
      { title: "Universal", target: "/products/zircos-com3" },
    ],
  },
  {
    title: "JIG-GEL",
    include: "jig-gel",
    links: [{ title: "JIG-GEL", target: "/products/jig-gel" }],
  },
  {
    title: "Metal-Block",
    include: "metal-block",
    links: [{ title: "Metal-Block", target: "/products/metal-block" }],
  },
];


const ChangeMenu = (item: string) => {
  if (item.includes("zircos-e1")) return  "Zircos-E Block"
  else if (item.includes("zircos-e2")) return "Aqua Coloring Liquid"
  else if (item.includes("zircos-e3")) return "Etching Solution"
  else if (item.includes("zircos-e4")) return "Zirconia milling tools"
  else if (item.includes("zircos-com1")) return "Flow"
  else if (item.includes("zircos-com2")) return "Hard"
  else if (item.includes("zircos-com3")) return "Universal"
  else if (item.includes("jig-gel")) return "JIG-GEL"
  else if (item.includes("metal-block")) return "Metal Block"
  else if (item.includes("hycera")) return "Hycera"
};


export default component$(() => {
  const loc = useLocation();
  const currentMenu = useStore({
    value: ChangeMenu(loc.url.pathname),
  });
  const changeMenuItem = $((item: string) => {
    currentMenu.value = item;
  });

  return (
    <Speak assets={["product"]}>
      <div id="wrap">
        <div id="container">
          <div class="common_top products_top">
            <h2>
              <p class="h2p">Products</p>
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
                <li>Products</li>
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
              <ProductMenu
                currentMenu={currentMenu}
                changeCurrentMenu={changeMenuItem}
              />
              <Slot />
            </div>
          </div>
        </div>
      </div>
    </Speak>
  );
});
