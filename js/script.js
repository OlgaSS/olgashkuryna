const openMenuOnMob = function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const headerNav = document.querySelector('.header-nav');
    const headerNavLink = document.querySelectorAll('.header-nav__item')
    if (burgerIcon) {
        burgerIcon.addEventListener("click", function () {
            if(!burgerIcon.classList.contains('_active')){
                document.body.classList.add('_lock');
                burgerIcon.classList.add('_active');
                headerNav.classList.add('_active');
            } else {
                document.body.classList.remove('_lock');
                burgerIcon.classList.remove('_active');
                headerNav.classList.remove('_active');
            }
        });
        for (let link of headerNavLink) {
            link.addEventListener('click', function () {
                document.body.classList.remove('_lock');
                burgerIcon.classList.remove('_active');
                headerNav.classList.remove('_active');
            })
        }
    };
}
openMenuOnMob();


const animateElements = function () {
    const animElements = document.querySelectorAll('.animElement');

    if (animElements.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(params) {
            for (let i = 0; i < animElements.length; i++) {
                const animElement = animElements[i];
                const animElementHeight = animElement.offsetHeight;
                const animElementOffset = offset(animElement).top;
                const animStart = 4;

                let animElementPoint = window.innerHeight - animElementHeight / animStart;
                if (animElementHeight > window.innerHeight) {
                    animElementPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animElementOffset - animElementPoint) && pageYOffset < (animElementOffset + animElementHeight)) {
                    animElement.classList.add('active');
                } else {
                    if (!animElement.classList.contains('anim-hide')) {
                        animElement.classList.remove('active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop= window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop, left: rect.left + scrollLeft
            }
        }

        setTimeout(() => {
            animOnScroll();
        }, 300);
    }
}
animateElements();