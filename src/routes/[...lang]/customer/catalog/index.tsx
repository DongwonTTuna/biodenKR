import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="right">
      <h3>Catalog</h3>
      <div class="catalog">
        <div class="catalog_con">
          <p class="download_t">Catalog</p>
          <ul>
            <li class="space">
              <a href="../pdf/Zirconia Block eng.pdf">
                <p>Zirconia Block_Eng</p>
              </a>
            </li>
            <li>
              <a href="../pdf/Zirconia Block kor.pdf">
                <p>Zirconia Block_Kor</p>
              </a>
            </li>
            <li class="space">
              <a href="../pdf/Zircos-Com eng.pdf">
                <p>Zircos-Com_Eng</p>
              </a>
            </li>
            <li>
              <a href="../pdf/Zircos-Com kor.pdf">
                <p>Zircos-Com_Kor</p>
              </a>
            </li>
            <li class="space">
              <a href="../pdf/JIG-GEL eng.pdf">
                <p>Jig-Gel_Eng</p>
              </a>
            </li>
            <li>
              <a href="../pdf/JIG-GEL kor.pdf">
                <p>Jig-Gel_Kor</p>
              </a>
            </li>
            <li class="space">
              <a href="../pdf/Universal.pdf">
                <p>Zircos-Universal_Eng</p>
              </a>
            </li>
            <li>
              <a href="../pdf/Universal.pdf">
                <p>Zircos-Universal_Kor</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="line"></div>
      </div>
    </div>
  );
});
