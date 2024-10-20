/* 
How to use this sample-work-page: 
- Make a copy of this file
- name the file after the project for ease of reference (e.g. edf-vision-2023.js)
- switch out the paths to the images
- fill out the fields in the JS object below according to the project
*/

/** change the paths below to the corresponding project assets */
import BG from "../client-work-pages/assets/edf-vision-2023/edf-vision-2023-bg.png";
import BENTO_TOP from "../client-work-pages/assets/edf-vision-2023/edf-vision-2023-bento-top.png";
import BENTO_BOTTOM_LEFT from "../client-work-pages/assets/edf-vision-2023/edf-vision-2023-bento-bottom-left.png";
import BENTO_BOTTOM_MID from "../client-work-pages/assets/edf-vision-2023/edf-vision-2023-bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "../client-work-pages/assets/edf-vision-2023/edf-vision-2023-bento-bottom-right.png";
import FULL_WIDTH_IMG from "../client-work-pages/assets/edf-vision-2023/edf-vision-2023-full-width-img.png";
import CLIENT_SPOTLIGHT from "../client-work-pages/assets/edf-vision-2023/edf-vission-2023-client-spotlight.img";

export const PROJECT_NAME_HERE = {
  hero: {
    hero_bg_img: BG,
    header: {
      client_full_name: "",
      project_title: "",
      tags: ["array", "of", "strings", "here"],
    },
  },
  main_headline: <>{/** headline text here */}</>,
  bento_images: {
    top: BENTO_TOP,
    bottom_left: BENTO_BOTTOM_LEFT,
    bottom_mid: BENTO_BOTTOM_MID,
    bottom_right: BENTO_BOTTOM_RIGHT,
  },
  client_quote: {
    quote: <>{/** quote text here */}</>,
    speaker: {
      name: "",
      title: "",
      org: "",
    },
    fullWidthImg: FULL_WIDTH_IMG,
    client_spotlight: CLIENT_SPOTLIGHT,
    project_overview: <>{/** paragraph text here */}</>,
  },
};
