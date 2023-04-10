import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { $translate as t } from "qwik-speak";
export default component$(() => {
  return (
      <div class="right">
        <h3>Organization</h3>
        <div class="organization">
          <p class="w-fit whitespace-nowrap">Organization of BIO DEN Co., Ltd</p>
          <Image
            height={400}
            width={760}
            layout="constrained"
            style={{width:"100%",height:"100%"}}
            src={`https://res.cloudinary.com/dfd9pdmuf/image/upload/w_600,f_auto/${t("company.organization.imgsrc@@v1677989415/bioden/organization_mx7ym7")}`}
            srcSet=""
            class="mt-20"
            alt="Organization image"
          />
        </div>
      </div>
  );
})