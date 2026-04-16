import "./haeder.css";

export function getHeader()
{
    const header = document.createElement("header");
    header.className = "header";

    const container = document.createElement("div");
    container.className = "container";
   
    const nav = document.createElement("div");
    nav.className = "navigation";
    nav.innerHTML = `
        <nav class="nav">
            <ul class="header-list">
                <li class="header-item">
                    <a href="/" class="header-link">Home</a>
                </li>
                <li class="header-item">
                    <a href="/about" class="header-link">About</a>
                </li>
                <li class="header-item">
                    <a href="/coupons" class="header-link">Gift Coupons</a>
                </li>
                <li class="header-item">
                    <a href="/stores" class="header-link">Stores</a>
                </li>
            </ul>
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="/connect" class="nav-link">Connect</a>
                </li>
                <li class="nav-item">
                    <a href="/sign" class="nav-link">Sign In</a>
                </li>
            </ul>
        </nav>
    `;

    header.append(container);
    container.append(nav);

    return header;
}