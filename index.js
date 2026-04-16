import Navigo from "navigo";

import { getHeader } from "./src/components/header/header";
import { getMainPage } from "./src/pages/mainPage";


const app = document.querySelector("#app");

export const router = new Navigo("/");

const header = getHeader();
const main = getMainPage();

router.on("/about", async () => {
    main.innerHTML = "";
    const moduleAbout = await import("./src/pages/aboutPage/aboutPage.js");
    const pageAbout = moduleAbout.getAboutPage();
    main.append(pageAbout);
});


router.resolve();

app.append(header, main);