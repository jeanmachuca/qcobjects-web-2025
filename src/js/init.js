import * as QCObjects from "qcobjects";
import "./components/nav.js";

RegisterWidgets("header-component", "home-component", 
    "features-component", "about-component", 
    "contact-component", "footer-component");



CONFIG.set("sourceType", "module");
CONFIG.set("componentsBasePath", "templates/components/");
CONFIG.set("tplextension", "tpl.html");

export default {Nav};