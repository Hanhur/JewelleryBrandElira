
import "./mainPage.css";

export function getMainPage()
{
    const page = document.createElement("div");
    page.classList.add("page", "main-page", "container");

    const mainTitle = getMainTitle("Главная страница");

    page.append(mainTitle);
    return page;
}