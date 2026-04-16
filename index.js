import Navigo from "navigo";

import { getHeader } from "./src/components/header/header";
import { getMainPage } from "./src/pages/mainPage";


const app = document.querySelector("#app");

export const router = new Navigo("/");

const header = getHeader();
const main = getMainPage();

router.on("/", async () => {
    main.innerHTML = "";
    const moduleMain = await import("./src/pages/mainPage.js");
    const pageMain = moduleMain.getMainPage();
    main.append(pageMain);
    header.setActiveLink("home");
});

router.on("/about", async () => {
    main.innerHTML = "";
    const moduleAbout = await import("./src/pages/aboutPage/aboutPage.js");
    const pageAbout = moduleAbout.getAboutPage();
    main.append(pageAbout);
    header.setActiveLink("about");
});

router.on("/coupons", async () => {
    main.innerHTML = "";
    const moduleCoupons = await import("./src/pages/couponsPage/couponsPage.js");
    const pageCoupons = moduleCoupons.getCouponsPage();
    main.append(pageCoupons);
    header.setActiveLink("coupons");
});

router.on("/stores", async () => {
    main.innerHTML = "";
    const moduleStores = await import("./src/pages/storesPage/storesPage.js");
    const pageStores = moduleStores.getSrotesPage();
    main.append(pageStores);
    header.setActiveLink("stores");
});

router.on("/connect", async () => {
    main.innerHTML = "";
    const moduleConnect = await import("./src/pages/connectPage/connectPage.js");
    const pageConnect = moduleConnect.getConnectPage();
    main.append(pageConnect);
    header.setActiveLink("connect");
});


router.resolve();

app.append(header.header, main);