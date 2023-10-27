import { menu } from "./menu.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";
import { cursor } from "./cursor.js";
import { main } from "./main.js";
import { fade } from "./fade.js";



window.addEventListener("load", function () {
    window.scrollTo(0,0); // 새로고침 시 최 상단

    cursor(); // 마우스 커서 커스텀
    smooth(); // 페이지 스크롤 부드럽게 
    link(); // 상단 메뉴 클릭 시 해당 영역으로
    menu(); //상단 메뉴 모바일, 피시
    main(); // 메인 스크립트
    fade(); // 컨텐츠 스크롤 위치에 따라 나타내기 효과
 
});



