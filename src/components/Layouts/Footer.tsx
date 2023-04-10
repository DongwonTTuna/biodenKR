import { component$ } from "@builder.io/qwik";
import { Speak, $translate as t } from "qwik-speak";

const Footer =  component$(() => {
  return (
    <div id="footer">
      <div class="inner flex items-center">
        <img
          width={288}
          height={80}
          decoding="async"
          src={`https://res.cloudinary.com/dfd9pdmuf/image/upload/w_300,f_auto/${t("common.footer.logo@@v1677989409/bioden/f_logo_kor_ajqvty")}`}
          srcSet=""
          alt="FooterLogo"
        />
        <address>
          {t("common.footer.address@@경기도 광주시 양벌로 379-10")}
          <br />
          <span>  {t("common.footer.tel@@Tel : 031-765-2840")} |</span>
          {t("common.footer.fax@@Fax : 031-765-2841")}
          <span>|</span>e-mail : bio0790@daum.net
          <span class="text-[10px]">
            COPYRIGHT (C) BIO DEN CORPORATION. ALL RIGHTS RESERVER.
          </span>
        </address>
      </div>
    </div>
  );
});

export default component$(()=>{

  return (
    <Speak assets={["common"]}>
      <Footer/>
    </Speak>
  )
})