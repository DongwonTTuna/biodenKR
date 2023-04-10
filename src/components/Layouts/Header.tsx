
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ChangeLocale } from "./changeLocale";
import { Image } from "@unpic/qwik";
const Header = component$(() => {
  return (
    <div id="header">
      <div class="inner">
        <Link href="/">
          <Image
            src={"https://res.cloudinary.com/dfd9pdmuf/image/upload/w_100,f_auto/v1677989413/bioden/logo_o48aal"}
            width={100}
            height={80}
            srcSet=""
            layout="constrained"
            style={{ width: "auto", height: "80px" }}
            alt="logo"
          />
        </Link>

        <div class="header_menu">
          <ul class="header_ul">
            <li class="header_ul_li">
              <Link class="li_a" href="/company/about">
                COMPANY
              </Link>
            </li>
            <li class="header_ul_li">
              <Link class="li_a" href="/products/hycera">
                PRODUCTS
              </Link>
            </li>

            <li class="header_ul_li">
              <Link class="li_a" href="/customer/downloads">
                CUSTOMER
              </Link>
            </li>
            <li class="header_ul_li last">
              <Link class="li_a" href="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ChangeLocale/>
    </div>
  );
});

export default Header;
