import { getNavigationLink } from "../navigation/navigationLink";
import "./header.css";

export function getHeader() {
    const header = document.createElement("header");
    header.className = "header";

    const container = document.createElement("div");
    container.className = "container";
    
    const nav = document.createElement("div");
    nav.className = "navigation";

    // Конфигурация навигационных пунктов
    const navItems = {
        main: [
            { id: "home", path: "/", text: "Home" },
            { id: "about", path: "/about", text: "About" },
            { id: "coupons", path: "/coupons", text: "Gift Coupons" },
            { id: "stores", path: "/stores", text: "Stores" }
        ],
        secondary: [
            { id: "connect", path: "/connect", text: "Connect" },
            { id: "sign", path: "/sign", text: "Sign In" }
        ]
    };

    // Функция создания списка ссылок
    const createNavList = (items, className) => {
        const ul = document.createElement("ul");
        ul.className = className;
        
        items.forEach(item => {
            const li = document.createElement("li");
            li.className = `${className.slice(0, -3)}-item`; 
            
            const link = getNavigationLink(item.path, item.text);
            link.className = `${className.slice(0, -3)}-link`;
            link.dataset.navId = item.id;
            
            li.appendChild(link);
            ul.appendChild(li);
        });
        
        return ul;
    };

    const mainNavList = createNavList(navItems.main, "header-list");
    const secondaryNavList = createNavList(navItems.secondary, "nav-list");
    
    const navElement = document.createElement("nav");
    navElement.className = "nav";
    navElement.appendChild(mainNavList);
    navElement.appendChild(secondaryNavList);
    nav.appendChild(navElement);

    // Собираем все ссылки в объект для удобного доступа
    const links = {};
    document.querySelectorAll('[data-nav-id]').forEach(link => {
        links[link.dataset.navId] = link;
    });

    const setActiveLink = (linkId = "") => {
        Object.values(links).forEach(link => {
            link.classList.remove("active");
        });
        
        if (linkId && links[linkId]) {
            links[linkId].classList.add("active");
        }
    };

    header.appendChild(container);
    container.appendChild(nav);

    return {
        header,
        setActiveLink
    };
}