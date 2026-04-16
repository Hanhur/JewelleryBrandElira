import makeImg_1 from "../../images/make-img-1.png";
import makeImg_2 from "../../images/make-img-2.png";

import "./storesPage.css";

export function getSrotesPage()
{
    const section = document.createElement("section");
    section.className = "section-stores";

    const container = document.createElement("div");
    container.className = "container";

    const storesBlock = document.createElement("div");
    storesBlock.className = "stores-block";
    storesBlock.innerHTML = `
        <div class="header-content"></div>
        <div class="make">
            <h2 class="make-title">Make Your Own Jewellery</h2>
            <div class="make-box">
                <img class="make-img-1" src="${makeImg_1}" alt="">
                <img class="make-img-2" src="${makeImg_2}" alt="">
            </div>
            <p class="make-text">Watch one of our happy customers flaunt their new  custom made jewellery</p>
        </div>
    `;

    section.append(container);
    container.append(storesBlock);

    return section;
}