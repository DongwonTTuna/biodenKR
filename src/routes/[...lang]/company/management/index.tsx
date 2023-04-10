import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
export default component$(() => {
  return (
    <div class="right">
      <h3>Philosophy&Objective</h3>
      <div class="management">
        <div class="philosophy">
          <div class="philosophy_t">
            <p class="philosophy_t1 whitespace-nowrap">
              {t("company.management.philosophy_title_p1@@경영이념")}
            </p>
            <p class="philosophy_t2">
              {t("company.management.philosophy_title_p2@@Management Philosophy")}
            </p>
          </div>
          <div class="manage_left">
            {t("company.management.philosophy1_title@@人 和")}
          </div>
          <div class="manage_right">
            <p class="p1">{t("company.management.philosophy1_p1@@인화중심의 창조 경영")}</p>
            <p class="p2">{t("company.management.philosophy1_p2@@Human concord-oriented creation management")}</p>
          </div>
        </div>

        <div class="objective">
          <div class="objective_t">
            <p class="objective_t1 whitespace-nowrap">
              {t("company.management.objective_title_p1@@경영목표")}
            </p>
            <p class="objective_t2">
              {t("company.management.objective_title_p2@@Management Objective")}
            </p>
          </div>
          <div class="objective1">
            <div class="manage_left">
              {t("company.management.objective1_title@@價 値")}
            </div>
            <div class="manage_right">
              <p class="p1">{t("company.management.objective1_p1@@가치 중심 경영")}</p>
              <p class="p2">{t("company.management.objective1_p2@@Value-based management")}</p>
            </div>
          </div>

          <div class="objective2">
            <div class="manage_left">
              {t("company.management.objective2_title@@技 術")}
            </div>
            <div class="manage_right">
              <p class="p1">{t("company.management.objective2_p1@@최고 기술 실현")}</p>
              <p class="p2">{t("company.management.objective2_p2@@Come true the best technology")}</p>
            </div>
          </div>

          <div class="objective3">
            <div class="manage_left">
              {t("company.management.objective3_title@@顧 客")}
            </div>
            <div class="manage_right">
              <p class="p1">{t("company.management.objective3_p1@@고객 만족 경영")}</p>
              <p class="p2">{t("company.management.objective3_p2@@Consumer satisfaction management")}</p>
            </div>
          </div>

          <div class="objective4">
            <div class="manage_left">
              {t("company.management.objective4_title@@收 益")}
            </div>
            <div class="manage_right">
              <p class="p1">{t("company.management.objective4_p1@@수익 창출 경영")}</p>
              <p class="p2">{t("company.management.objective4_p2@@Create profit management")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
