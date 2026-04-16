import arrivalsImg_1 from "../../images/arrivals-img-1.png";
import arrivalsImg_2 from "../../images/arrivals-img-2.png";

import "./connectPage.css";

export function getConnectPage()
{
    const section = document.createElement("section");
    section.className = "section-connect";

    const container = document.createElement("div");
    container.className = "container";

    const connectBlock = document.createElement("div");
    connectBlock.className = "connect-block";
    connectBlock.innerHTML = `
        <div class="header-content"></div>
        <div class="arrivals-block">
            <div class="arrivals-box">
                <h2 class="arrivals-title">Exolore New Arrivals</h2>
                <p class="arrivals-text">See More</p>
            </div>
            <div class="arrivals-box-img">
                <img class="arrivals-img-1" src="${arrivalsImg_1}" alt="">
                <img class="arrivals-img-2" src="${arrivalsImg_2}" alt="">
                <div class="hoops">
                    <h3 class="hoops-title">Perfect Hoops</h3>
                    <button class="hoops-btn" type="button">Buy Now</button>
                </div>
            </div>
            <p class="arrivals_text">Simple thick small/medium sized gold hoops for everyday wear</p>
        </div>
    `;

    section.append(container);
    container.append(connectBlock);

    return section;
}