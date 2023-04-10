import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { Menus } from "./layout";

interface PropsItem {
  currentMenu?: any;
  changeCurrentMenu?: any;
}

export default component$((props: PropsItem) => {

  return (
    <div class="left_menu customer_left">
      <ul>
        <li class="left_menu_t">CUSTOMER</li>
        {Menus.map((item, index) => {
          return (
            <li
              class="li"
              onClick$={() => props.changeCurrentMenu(item.title)}
              key={`commenu${index}`}
            >
              <Link href={item.target}>
                <div
                  class={
                    item.title === props.currentMenu.value
                      ? "li text-[#be5e11]"
                      : "li"
                  }
                >
                  {item.title}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
