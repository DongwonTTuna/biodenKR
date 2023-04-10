import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
  return (
      <div id="wrap">
        <div id="container">
          <div id="content">
            <div class="con_wrap">
              <div class="left_menu contact_left">
                <ul>
                  <li class="left_menu_t">CONTACT US</li>
                  <li class="li on">
                    <Link
                      href=""
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="right contact_wrap">
                <h3>Contact us</h3>
                <div class="contact">
                  <div class="h-fit w-[470px] my-8 text-2xl leading-8">
                  <p class="">
                    {t("contact.contact_p1_1@@다양한 영역에서 세계인과 함께 호흡하는")} <br />
                    <span class="green2">{t("contact.contact_p1_green@@선도적 글로벌 기업")}</span>
                    {t("contact.contact_p1_2@@이 되겠습니다.")}
                  </p>
                  </div>
                  <div class="gray_box">
                    <p class="gray_box_p1 my-2 ml-2 leading-5 w-[98%]">{t("contact.gray_p1@@문의 내용에 대해 이메일 정보를 작성하여 주시면 빠른 시간 내로 답변해 드리겠습니다.")}</p>
                    <a class="gray_box_p2 block" href={t("contact.mailaddress@@mailto:biodenzircose@gmail.com?subject=[]건으로 문의드립니다.&body=바이오덴에 관심을 가져주셔서 감사합니다.") } target="_blank" rel="noreferrer">
                      e-mail : biodenzircose@gmail.com
                    </a>
                    <p class="gray_box_p3">
                      {t("contact.telefax@@TEL : 031-765-2840    FAX : 031-765-2841")}
                    </p>
                  </div>

                  <p class="contact_p2">Locations</p>
                  <p class="contact_p3 w-[600px] mt-5">{t("contact.contact_p3@@경기도 광주시 양벌로 379-10")}</p>
                </div>
                <div class="mt-40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.0536400714445!2d127.24294628037653!3d37.36490764350459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caa664aecbd73%3A0x7fc20bcf8ed46a1c!2z77yT77yX77yZ4oiS77yR77yQIFlhbmdiZW9sLXJvLCBPcG8tZXVwLCBHd2FuZ2p1LXNpLCBHeWVvbmdnaS1kbywg5aSn6Z-T5rCR5Zu9!5e0!3m2!1sja!2sjp!4v1676642574397!5m2!1sja!2sjp"
                    width="756"
                    height="400"
                    class="b-0"
                    title="map"
                    allowFullScreen
                  ></iframe>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
  );
})