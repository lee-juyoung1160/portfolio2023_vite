import { menu } from "./menu.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";
import { cursor } from "./cursor.js";

window.addEventListener("load", function () {
    cursor();
    smooth();
    link();
    menu();
});