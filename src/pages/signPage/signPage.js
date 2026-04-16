import forbes from "../../images/forbes.png";
import elle from "../../images/elle.png";
import vogue from "../../images/vogue.png";
import pinterest from "../../images/pinterest.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import chevron from "../../images/chevron.svg";

import "./signPage.css";

export function getSignPage()
{
    const section = document.createElement("section");
    section.className = "section-sign";

    const container = document.createElement("div");
    container.className = "container";

    const signBlock = document.createElement("div");
    signBlock.className = "sign-block";
    signBlock.innerHTML = `
        <div class="header-content"></div>
        <div class="footer-box">
            <p class="footer-text">
                “The brand justifies its name. Freedom with elegance, 
                something that every woman deserves.”
            </p>
            <img class="footer-img" src="${forbes}" alt="">
            <img class="footer-img" src="${elle}" alt="">
            <img class="footer-img" src="${vogue}" alt="">
        </div>
        <div class="footer-block">
            <h2 class="footer-title">E L I R A</h2>
            <div class="block-content">
                <div class="content_box">
                    <h3 class="content_title">Support</h3>
                    <ul class="content_list">
                        <li class="content_item">
                            <a href="#" class="content_link">FAQ</a>
                        </li>
                        <li class="content_item">
                            <a href="#" class="content_link">Virtual shopping</a>
                        </li>
                        <li class="content_item">
                            <a href="#" class="content_link">Shipping and Returns</a>
                        </li>
                        <li class="content_item">
                            <a href="#" class="content_link">Ring sizer</a>
                        </li>
                        <li class="content_item">
                            <a href="#" class="content_link">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div class="content_box">
                    <h3 class="content_title">Company</h3>
                    <ul class="content_list">
                        <li class="content_item">
                            <a href="/about" class="content_link">About Us</a>
                        </li>
                        <li class="content_item">
                            <a href="/stores" class="content_link">Stores</a>
                        </li>
                        <li class="content_item">
                            <a href="#" class="content_link">What’s new?</a>
                        </li>
                    </ul>
                </div>
                <div class="content_box">
                    <h3 class="content_title title">Get notified upon new arrivals</h3>
                    <input class="content-input" type="text" placeholder="Your Email-Id Here">
                </div>
                <div class="content_box">
                    <ul class="content_list">
                        <li class="content_item">
                            <a href="#" class="content_link">
                                <img class="content-img" src="${pinterest}" alt="">
                            </a>
                        </li>
                        <li class="content_item">
                            <a href="#" class="content_link">
                                <img class="content-img" src="${instagram}" alt="">
                            </a>
                        </li>
                        <li class="content_item">
                            <a href="#" class="content_link">
                                <img class="content-img" src="${facebook}" alt="">
                            </a>
                        </li>
                        <li class="content_item">
                            <a href="#" class="content_link">
                                <img class="content-img" src="${twitter}" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="conditions">
            <p class="conditions-text">Terms and conditions</p>
            <p class="conditions-text">Privacy Policiy</p>
            <p class="conditions-text">@2021 Elira Inc</p>
            <div class="conditions-box">
                <p class="conditions-text">Lang</p>
                <button class="conditions-btn" type="button">
                    USA
                    <img class="conditions-img" src="${chevron}" alt="">
                </button>
            </div>
        </div>
    `;

    section.append(container);
    container.append(signBlock);

    return section;
}