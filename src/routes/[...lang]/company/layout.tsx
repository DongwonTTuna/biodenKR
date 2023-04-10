import { component$, useStore, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import { Slot } from "@builder.io/qwik";
import Imgsrc from "~/variables/Imgsrc";
import CompanyMenu from "./CompanyMenu";
import { Image } from "@unpic/qwik";

export const Menus = [
  { title: "About BIODEN", target: "/company/about" },
  { title: "Philosophy & Objective", target: "/company/management" },
  { title: "Mission & Vision", target: "/company/mission" },
  { title: "Global Network", target: "/company/network" },
  { title: "Organization", target: "/company/organization" },
  { title: "History", target: "/company/history" },
];

const ChangeMenu = (item: string) => {
  if (item.includes("about")) return  "About BIODEN"
  else if (item.includes("management")) return "Philosophy & Objective"
  else if (item.includes("mission")) return "Mission & Vision"
  else if (item.includes("network")) return "Global Network"
  else if (item.includes("organization")) return "Organization"
  else if (item.includes("history")) return "History"

};



export default component$(() => {
  const loc = useLocation();
  const currentMenu = useStore({ value: ChangeMenu(loc.url.pathname)});
  const changeMenuItem = $((item: string) => {
    currentMenu.value = item;
  });
  return (
    <Speak assets={["company"]}>
      <div id="wrap">
        <div id="container">
          <div class="common_top company_top">
            <h2>
              <p class="h2p">Company</p>
            </h2>
            <p class="top_text">New Etched Full Zirconia Technic</p>
            <ul>
              <div class="flex float-right mr-20">
                <li class="w-15 text-center ">Home </li>
                <li class="mx-3">
                  <Image width={10} height={10} layout="constrained"  src={Imgsrc.Arrow} srcSet="" alt="" />
                </li>
                <li>COMPANY</li>
                <li class="mx-3">
                  <Image width={10} height={10} layout="constrained" src={Imgsrc.Arrow} srcSet="" alt="" />
                </li>
                <li>{currentMenu.value}</li>
              </div>
            </ul>
          </div>

          <div id="content">
            <div class="con_wrap">
              <CompanyMenu
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
