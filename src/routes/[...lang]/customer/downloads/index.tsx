import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
      <div class="right">
        <h3>MSDS</h3>
        <div class="msds">
          <div class="safety_d">
            <p class="download_t">Safety Data Sheets</p>
            <ul>
              <li class="space">
                <a href="http://biodenzircose.com/gnuboard/bbs/board.php?bo_table=eng_downloads_eng">
                  MSDS_Eng
                </a>
              </li>
              <li>
                <a href="http://biodenzircose.com/gnuboard/bbs/board.php?bo_table=eng_downloads_kor">
                  MSDS_Kor
                </a>
              </li>
            </ul>
          </div>
          <div class="line"></div>
        </div>
      </div>
  );
})
