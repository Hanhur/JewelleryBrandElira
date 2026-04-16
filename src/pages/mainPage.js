import headerImg_1 from "../images/header-img-1.png";
import headerImg_2 from "../images/header-img-2.png";
import bag from "../images/bag.svg";
import "./mainPage.css";

export function getMainPage()
{
    const main = document.createElement("main");
    main.className = "main";

    const container = document.createElement("div");
    container.className = "container";

    const innerMain = document.createElement("div");
    innerMain.className = "inner-main"
    innerMain.innerHTML = `
        <div class="main-inner">
            <div class="content">
                <img class="content-img" src="${headerImg_1}" alt="">
                <img class="content-img" src="${headerImg_2}" alt="">
                <div class="content-box">
                    <h1 class="content-title">E L I R A</h1>
                    <p class="content-text">We add elegance to your freedom</p>
                    <button class="content-box-btn" type="button">
                        Shop Now
                        <img src="${bag}" alt="" width="30">
                    </button>
                </div>
            </div>
        </div>
    `;

    main.append(container);
    container.append(innerMain);

    return main;
}