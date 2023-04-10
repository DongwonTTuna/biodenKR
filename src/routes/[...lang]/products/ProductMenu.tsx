import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { Menus } from "./layout";

interface PropsItem {
  currentMenu?: any;
  changeCurrentMenu?: any;
}

export default component$((props: PropsItem) => {
  const loc = useLocation();

  return (
    <div class="left">
      <div class="lnb">
        <ul id="lnbmenu">
          <li class="left_menu_t">PRODUCTS</li>
          {Menus.map((item, index) => {
            return (
              <li class="li" key={`pm${index}`}>
                <div
                  class={
                    loc.url.pathname.includes(item.include)
                      ? "li text-[#2368a8]"
                      : "li"
                  }
                >
                  <Link href={item.links[0].target}>
                    <div
                      onClick$={(e) => {
                        const target = e.target as HTMLElement;
                        if (e.target !== target.parentElement) return;
                        props.changeCurrentMenu(item.links[0].title);
                      }}
                    >
                      {item.title}
                    </div>
                  </Link>

                  {item.links.length > 1 ? (
                    <ul>
                      {item.links.map((itm, index) => {
                        return (
                          <Link
                            key={`pmlia${index}`}
                            href={itm.target}
                          >
                            <li
                              onClick$={() => {
                                props.changeCurrentMenu(itm.title);
                              }}
                              class={
                                props.currentMenu.value === itm.title
                                  ? "on1"
                                  : ""
                              }
                            >
                              <p>{itm.title}</p>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
