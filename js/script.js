window.addEventListener("load", (event) => {
    init();
});


function init() {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const body = document.querySelector('body');
    const wrapper = document.querySelector('.wrapper');


    // ? gsap animation

    let tl = gsap.timeline();
    let mm = gsap.matchMedia();

    const pageHome = document.querySelector('.page-home');
    const pageDonate = document.querySelector('.page-donate');
    if (pageHome) {
        gsap.registerPlugin(ScrollTrigger);

        if (wrapper.getBoundingClientRect().top == 0) {
            body.classList.add('fixed');
        }

        const wave = document.querySelector('#wave');
        const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
        const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

        tl.to(wave, .8, {
            attr: { d: start },
            ease: Power2.easeIn
        });
        tl.to(wave, .8, {
            attr: { d: end },
            ease: Power2.easeOut,
        });
        tl.to('.preload-logo', {
            duration: 1,
            opacity: 1
        }, '-=0.5')
        tl.to('.preload-logo', {
            width: "300px"
        }, '-=0.5')

        tl.to('.preload-logo', {
            duration: 1,
            opacity: 0
        }, '+=0.5')
        tl.to('.preloader', {
            opacity: 0,
            'z-index': '-1',
        }, '-=0.5');


        // ? hero

        tl.fromTo('.header__logo', { opacity: 0, y: 0, scale: 0.8 }, {
            opacity: 1,
            y: 0,
            scale: 1
        });

        mm.add("(min-width: 651px)", () => {
            tl.fromTo('.header-menu__item', { opacity: 0 }, {
                opacity: 1,
                stagger: 0.1
            });
        });

        tl.fromTo('.hero__title', { opacity: 0, y: 50 }, {
            duration: 0.8,
            opacity: 1,
            y: 0,
        });
        tl.fromTo('.hero__description', { opacity: 0, x: -50 }, {
            duration: 0.8,
            opacity: 1,
            x: 0,
        });
        tl.fromTo('.hero__link-btn', { opacity: 0, y: 20 }, {
            opacity: 1,
            y: 0,
        });
        tl.fromTo('.hero__item-image', { opacity: 0, xPercent: 5, yPercent: 5, scale: 0.9 }, {
            duration: 1,
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            onComplete: function () {
                body.classList.remove('fixed');
            },
        });


        gsap.fromTo('.social__item-image', { opacity: 0, scale: 0.9 }, {
            duration: 2,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: ".social__item-image",
                start: "top 80%",
                end: 'bottom bottom',
            }
        })
        gsap.fromTo('.socail__title', { opacity: 0, y: 100 }, {
            duration: 1,
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".socail__title",
                start: "top 80%",
                end: 'bottom bottom',
            }
        })
        gsap.fromTo('.socail__description', { opacity: 0, x: 50 }, {
            duration: 1,
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: ".socail__description",
                start: "top 75%",
                end: 'bottom bottom',
            }
        },)
        gsap.fromTo('.social__link-btn', { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".social__link-btn",
                start: "top 70%",
                end: 'bottom bottom',
            }
        })

        // ? start-game
        gsap.fromTo('.start-game__title', { opacity: 0, y: 100 }, {
            duration: 1,
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".start-game__title",
                start: "top 80%",
                end: 'bottom bottom',
            }
        })
        gsap.fromTo('.start-game__subtitle', { opacity: 0, y: 100 }, {
            duration: 1,
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".start-game__subtitle",
                start: "top 75%",
                end: 'bottom bottom',
            }
        })
        gsap.fromTo('.start-game__item-1', { opacity: 0, x: -200, scale: 0 }, {
            duration: 1,
            opacity: 1,
            x: 0,
            scale: 1,
            scrollTrigger: {
                trigger: ".start-game__items",
                start: "top 70%",
                end: 'bottom bottom',
            }
        })
        gsap.fromTo('.start-game__item-2', { opacity: 0, y: 200, scale: 0 }, {
            duration: 1,
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
                trigger: ".start-game__items",
                start: "top 70%",
                end: 'bottom bottom',
            }
        })
        gsap.fromTo('.start-game__item-3', { opacity: 0, x: 200, scale: 0 }, {
            duration: 1,
            opacity: 1,
            x: 0,
            scale: 1,
            scrollTrigger: {
                trigger: ".start-game__items",
                start: "top 70%",
                end: 'bottom bottom',
            }
        })


        gsap.fromTo('.start-game__bottom-text', { opacity: 0, x: -200 }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: ".start-game__bottom-text",
                start: "top 80%",
                end: 'bottom bottom',
            }
        })
        gsap.fromTo('.start-game__link-btn', { opacity: 0, x: 200 }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: ".start-game__link-btn",
                start: "top 80%",
                end: 'bottom bottom',
            }
        })

    }

    if (pageDonate) {

        tl.to('.preloader', {
            opacity: 0,
            "z-index": "-1"
        });
        tl.fromTo('.header__logo', { opacity: 0, y: 0, scale: 0.8 }, {
            opacity: 1,
            y: 0,
            scale: 1
        });

        mm.add("(min-width: 651px)", () => {
            tl.fromTo('.header-menu__item', { opacity: 0 }, {
                opacity: 1,
                stagger: 0.1
            });
        });

        tl.fromTo('.donate__item-image', { opacity: 0, x: 100 }, {
            opacity: 1,
            x: 0
        });
        tl.fromTo('.donate__title', { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
        });
        tl.fromTo('.donate-form', { opacity: 0, y: 50 }, {
            duration: 0.5,
            opacity: 1,
            y: 0,
        });

        mm.add("(min-width: 651px)", () => {

            tl.fromTo('.footer__logo', { opacity: 0, }, {
                opacity: 1,
            });
            tl.fromTo('.footer__item', { opacity: 0, }, {
                opacity: 1,
                stagger: 0.1
            });
        });
    }


    //?  ---------------- burger menu
    const burgerMenu = document.querySelector('.burger-menu');
    const headerMenu = document.querySelector('.nav-menu');

    if (burgerMenu) {
        burgerMenu.classList.add('toggled');
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            burgerMenu.classList.toggle('toggled');
            let width1 = wrapper.offsetWidth;
            body.classList.toggle('fixed');
            headerMenu.classList.toggle('active');
            let width2 = wrapper.offsetWidth;
            let margin = width2 - width1;
            if (headerMenu.classList.contains('active')) {
                margin = `${margin}px`;
                corrrectionMargin(margin);
            } else {

                corrrectionMargin('0px');
            }
        });
    }

    function closeBurgerMenu() {
        if (burgerMenu && headerMenu) {
            burgerMenu.classList.remove('active');
            burgerMenu.classList.add('toggled');
            body.classList.remove('fixed');
            headerMenu.classList.remove('active');

            corrrectionMargin('0px');
        }
    }

    function corrrectionMargin(margin = '0px') {
        wrapper.style.marginRight = margin;
    }
    document.addEventListener('click', e => {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.burger-menu')) {
            closeBurgerMenu();
        }
    })

    // ? function scroll to element
    function scrollToElement(el, top) {
        let offsetPositon = el.getBoundingClientRect().top - top;
        window.scrollBy({
            top: offsetPositon,
            behavior: 'smooth',
        });
    }

    // ? select event color

    const select = document.querySelector('.donate-form__select-server');
    if (select) {
        select.addEventListener('change', e => {
            select.style.color = '#337ed7';
        })
    }
}

