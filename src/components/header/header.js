import { getNavigationLink } from "../navigation/navigationLink";
import "./haeder.css";

export function getHeader()
{
    const header = document.createElement("header");
    header.className = "header";

    const container = document.createElement("div");
    container.className = "container";
   
    const nav = document.createElement("div");
    nav.className = "navigation";
    // nav.innerHTML = `
    //     <nav class="nav">
    //         <ul class="header-list">
    //             <li class="header-item">
    //                 <a href="${getNavigationLink("/", "Home")}" class="header-link">Home</a>
    //             </li>
    //             <li class="header-item">
    //                 <a href="${getNavigationLink("/about", "About")}" class="header-link">About</a>
    //             </li>
    //             <li class="header-item">
    //                 <a href="${getNavigationLink("/coupons", "Gift Coupons")}" class="header-link">Gift Coupons</a>
    //             </li>
    //             <li class="header-item">
    //                 <a href="${getNavigationLink("/stores", "Stores")}" class="header-link">Stores</a>
    //             </li>
    //         </ul>
    //         <ul class="nav-list">
    //             <li class="nav-item">
    //                 <a href="${getNavigationLink("/connect", "Connect")}" class="nav-link">Connect</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a href="${getNavigationLink("/sign", "Sign In")}" class="nav-link">Sign In</a>
    //             </li>
    //         </ul>
    //     </nav>
    // `;

    const links = {
        "home": getNavigationLink("/", "Home"),
        "about": getNavigationLink("/about", "About"),
        "coupons": getNavigationLink("/coupons", "Gift Coupons"),
        "stores": getNavigationLink("/stores", "Stores"),
        "connect": getNavigationLink("/connect", "Connect"),
        "sign": getNavigationLink("/sign", "Sign In")
    }

    for (const oneLink in links) 
    {
        nav.append(links[oneLink]);
    }
    
    const setActiveLink = function (link = "") 
    {
        for (const oneLink in links) 
        {
            links[oneLink].classList.remove("active");
        }
        if (link !== "") 
        {
            links[link].classList.add("active");
        }
    }

    header.append(container);
    container.append(nav);

    return {
        header,
        setActiveLink
    }
}