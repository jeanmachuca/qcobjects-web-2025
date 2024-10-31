class Nav extends Component {
    name = "nav";
    tplsource = "inline";
    data = {
        options: [
            {value:"home", name: "Home"},
            {value:"features", name: "Features"},
            {value:"about", name: "About"},
            {value:"contact", name: "Contact"}
        ]
    }
    template = `
<nav>
    <ul>
        $mapper(li,options)
    </ul>
</nav>
    `;
}

Package("com.qcobjects.components", [Nav]);

export default Nav;