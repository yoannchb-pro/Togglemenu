window.addEventListener('load', function() {
    const ripple = document.querySelectorAll('[togglemenu-ripple]');

    function initRipple(event) {
        const pointer = event.target;

        const x = event.pageX - this.offsetLeft;
        const y = event.pageY - this.offsetTop;
        const w = this.offsetWidth;

        const ripple = document.createElement('span');

        ripple.setAttribute('togglemenu-ripple-effect', '');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        pointer.appendChild(ripple);

        setTimeout(() => { ripple.remove() }, 500);
    }

    ripple.forEach((btn, index) => {
        btn.addEventListener('click', initRipple);
        btn.addEventListener('touchstart', initRipple);
    });

    const toggle = document.querySelectorAll('[togglemenu-toggle]');

    toggle.forEach((btn, index) => {

        btn.addEventListener('click', (e) => {

            //the modal navbar

            const pointer = document.querySelector('#' + e.target.getAttribute('togglemenu-toggle'));



            //Set position from left, right, bottom or top

            function setPosition(element, rem = false) {

                const pos = element.getAttribute('togglemenu-menu');

                switch (pos) {

                    case "right":

                        if (rem) element.style.right = "-100%";
                        else element.style.right = "0";

                        break;

                    case "bottom":

                        if (rem) element.style.bottom = "-100%";
                        else element.style.bottom = "0";

                        break;

                    case "top":

                        if (rem) element.style.top = "-100%";
                        else element.style.top = "0";

                        break;

                    default:

                        if (rem) element.style.left = "-100%";
                        else element.style.left = "0";

                }

            }



            //Display navbar

            pointer.style.display = "block";

            setTimeout(() => {

                pointer.style.opacity = "1";

                setPosition(pointer.querySelector('[togglemenu-menu]'));

            }, 100);



            //function to remove navbar

            function reset(element) {

                setTimeout(() => { element.style.display = "none" }, 400);

                element.style.opacity = "0";

                setPosition(element.querySelector('[togglemenu-menu]'), true);

            }



            //modal click to remove navbar

            function modalClick(e) {

                const el = e.target;

                if (el.getAttribute('togglemenu-container') != null) reset(pointer);

            }

            pointer.addEventListener('click', modalClick);

            pointer.addEventListener('touchstart', modalClick);



            //close boutton to remove navbar

            pointer.querySelector('[togglemenu-close]').addEventListener('click', () => {

                reset(pointer);

            });

            pointer.querySelector('[togglemenu-close]').addEventListener('touchstart', () => {

                reset(pointer);

            });

        });

    });

});