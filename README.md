# Togglemenu.js v1.0
Togglemenu.js is a library inspired from <a href="https://oncebot.github.io/pushbar.js/">pushbarjs</a> to make beatiful responsive menu from any side just with attributes.

# Demo
https://yoannchb-pro.github.io/Togglemenu/

# Import
```html
<!-- IN THE HEAD -->

<!-- CDN -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yoannchb-pro/togglemenu@latest/lib/script/togglemenu-js.js"></script>
<link rel="stylesheet" src="https://cdn.jsdelivr.net/gh/yoannchb-pro/togglemenu@latest/lib/script/togglemenu-css.css"/>

<!-- NORMAL -->
<script type="text/javascript" src="./lib/togglemenu.js"></script>
```

## Example
```html
 <!-- Button to open the menu with ripple effect -->
<button togglemenu-toggle="menu1" togglemenu-ripple>Toggle Left</button>

<!-- The menu -->
<div togglemenu-container id="menu1">

<!-- CAN BE LEFT, RIGHT, BOTTOM OR TOP -->
    <div togglemenu-menu="left">

       <!-- The menu header -->
       <div togglemenu-close>
           <div style="display: flex; flex-wrap: nowrap;">
                <p style="flex: 1 1">Navbar</p>
                 <!-- Close button icon -->
                 <i togglemenu-btn></i>
                 </div>
       </div>

        <!-- Te content of the menu -->
       <div togglemenu-content>
           <nav>
              <ul>
                  <li>
                     <a href="#home">Home</a>
                   </li>
                   <li>
                     <a href="#dashboard">Dashboard</a>
                    </li>
                    <li>
                      <a href="#documentation">Documentation</a>
                     </li>
                     <li>
                       <a href="#about">About</a>
                     </li>
                     <li>
                        <a href="#contact">Contact</a>
                     </li>
                </ul>
           </nav>
      </div>
 </div>
```
