import Navigo from "navigo";
import { getHeader } from "./src/components/header/header";


const app = document.querySelector("#app");

export const router = new Navigo("/");

const header = getHeader();


router.resolve();

app.append(header);