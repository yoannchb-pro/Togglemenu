const toggleMenuScripts = [{
        type: "css",
        href: "./lib/script/togglemenu-css.css"
    },
    {
        type: "js",
        src: "./lib/script/togglemenu-js.js"
    }
];

toggleMenuScripts.forEach(function(element, index) {
    let script = null;
    if (element.type == "css") {
        script = document.createElement('link');
        script.rel = "stylesheet";
        script.href = element.href;
    } else {
        script = document.createElement('script');
        script.type = "text/javascript";
        script.src = element.src;
    }
    document.head.appendChild(script);
})