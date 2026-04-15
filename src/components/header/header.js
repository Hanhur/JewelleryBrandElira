


export function getHeader()
{
    const header = document.createElement("header");
    header.classList.add("header");

    const container = document.createElement("div");
    container.classList.add("container", "header__container");

    const logo = getLogo();
    logo.classList.add("header__logo");

    const basketBtn = getBasketBtn();

    const nav = document.createElement("nav");
    nav.classList.add("header__navigation");

    container.append(logo, nav, basketBtn);
    header.append(container);
}