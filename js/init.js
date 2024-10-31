import * as QCObjects from "https://unpkg.com/qcobjects@2.4.107-ts";
import "./components/nav.js";

RegisterWidgets("header-component", "home-component", 
    "features-component", "about-component", 
    "contact-component", "footer-component");

Package("com.qcobjects.components", [Nav]);


CONFIG.set("sourceType", "module");
CONFIG.set("componentsBasePath", "templates/components/");
CONFIG.set("tplextension", "tpl.html");

export default {Nav};