import seeMore from "../../images/main-img.png";
import "./aboutPage.css";

export function getAboutPage()
{
    const section = document.createElement("section");
    section.className = "section-about";
     
    const container = document.createElement("div");
    container.className = "container";

    const aboutContent = document.createElement("div");
    aboutContent.className = "about-content";
    aboutContent.innerHTML = `
        <div class="header-content"></div>
        <div class="inner">
            <div class="block">
                <h2 class="block-title">Ethnically Handcrafted Jewellery</h2>
                <h3 class="block_title">Fair Price</h3>
                <p class="block-text">
                    Say goodbye to traditional 10x markups. We design fine jewelry that you can wear every single day.
                </p>
                <h3 class="block_title">High Quality</h3>
                <p class="block-text">
                    We work with expert jewelers who use high-quality and enduring materials, from precious metals—such as recycled and responsibly mined gold—to ethically sourced diamonds and AAA-grade gemstones.
                </p>
                <button class="block-btn" type="button">Read More</button>
            </div>
            <img class="block-img" src="${seeMore}" alt="">
            <span class="block-span">See More</span>
        </div>
    `;

    section.append(container);
    container.append(aboutContent);

    return section;
}