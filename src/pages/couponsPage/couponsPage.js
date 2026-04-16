import collectionImg_1 from "../../images/collection-img-1.png";
import collectionImg_2 from "../../images/collection-img-2.png";

import "./couponsPage.css";


export function getCouponsPage()
{
    const section = document.createElement("section");
    section.className = "section-coupons";

    const container = document.createElement("div");
    container.className = "container";

    const couponsBlock = document.createElement("div");
    couponsBlock.className = "coupons-block";
    couponsBlock.innerHTML = `
        <div class="header-content"></div>
        <div class="collection">
            <div class="collection-content">
                <h2 class="collection-title">Dive into our everyday wear collection</h2>
                <p class="collection-text">See More</p>
            </div>
            <div class="collection-block">
                <div class="collection-box">
                    <img class="collection-img images1" src="${collectionImg_1}" alt="">
                    <span>Earrings</span>
                </div>
                <div class="collection-box">
                    <img class="collection-img images2" src="${collectionImg_2}" alt="">
                    <span>Necklaces</span>
                </div>
            </div>
        </div>
    `;

    section.append(container);
    container.append(couponsBlock);
    
    return section;
}