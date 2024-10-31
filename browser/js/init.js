var m=Object.defineProperty;var s=(t,e,o)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var c=(t,e)=>m(t,"name",{value:e,configurable:!0});var n=(t,e,o)=>(s(t,typeof e!="symbol"?e+"":e,o),o);import"https://unpkg.com/qcobjects@2.4.107-ts";var a=class extends Component{constructor(){super(...arguments);n(this,"name","nav");n(this,"tplsource","inline");n(this,"data",{options:[{value:"home",name:"Home"},{value:"features",name:"Features"},{value:"about",name:"About"},{value:"contact",name:"Contact"}]});n(this,"template",`
<nav>
    <ul>
        $mapper(li,options)
    </ul>
</nav>
    `)}};c(a,"Nav");Package("com.qcobjects.components",[a]);RegisterWidgets("header-component","home-component","features-component","about-component","contact-component","footer-component");Package("com.qcobjects.components",[Nav]);CONFIG.set("sourceType","module");CONFIG.set("componentsBasePath","templates/components/");CONFIG.set("tplextension","tpl.html");var d={Nav};export{d as default};
//# sourceMappingURL=init.js.map
