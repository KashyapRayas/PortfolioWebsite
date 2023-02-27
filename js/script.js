// declarations
    const loader = document.getElementById('loading')
    const body = document.querySelector('body')
    const logo = document.querySelector('.logo')
    const me = document.querySelector('.fallin')

// scroll
    const lscroll = new LocomotiveScroll({
        el: document.querySelector('#js-scroll'),
        smooth: true,
        lerp: 0.02,
        direction: 'vertical',
        scrollFromAnywhere: true,
        smoothMobile: true,
        smartphone: {
            lerp: 0.01
        }
    });

    function fallin_animation() {
        let fallin_anime = anime.timeline({
            easing: 'easeOutSine',
            autoplay: true
        })
        fallin_anime.add({
            targets: '.fallin-container .fallin',
            keyframes: [
                {translateY: -me.offsetHeight, duration: 0},
                {translateY: (window.innerHeight)/2, duration: 4000}
            ]
        }, '+=2000');
    }

    function nav_logo_animation() {
        let logo_anime = anime.timeline({
            easing: 'cubicBezier(0.215, 0.610, 0.355, 1.000)',
            autoplay: false
        });
        logo_anime.add({
            targets: '.navbar-top .logo-container .logo .R',
            keyframes: [
                { translateX: 90, duration: 700 },
                { translateX: -36.83, rotateX: 180, duration: 700}
            ]
        })
        .add({
            targets: '.navbar-top .logo-container .ashyap-container .ashyap',
            keyframes: [
                { translateX: -85, duration: 400}
            ]
        }, '-=600')
        .add({
            targets: '.navbar-top .logo-container',
            keyframes: [
                { rotateX: 180, translateY: 3.28, duration: 500}
            ]
        }, '+=800')
        .add({
            targets: '.navbar-top .logo-container .ashyap-container .ashyap',
            opacity: '0',
            duration: 10
        }, '-=400')
        .add({
            targets: '.navbar-top .logo-container .ayas-container .ayas',
            opacity: ['0%', '100%'],
            duration: 10
        }, '-=400')
        .add({
            targets: '.navbar-top .logo-container .logo',
            keyframes: [
                { translateX: 126.83, duration: 700},
                { translateX: 36.83, duration: 700}
            ]
        }, '+=500')
        .add({
            targets: '.navbar-top .logo-container .ayas-container .ayas',
            keyframes: [
                { left: 60, duration: 500}
            ]
        }, '-=1400')
        .add({
            targets: '.navbar-top .logo-container .logo .R',
            keyframes: [
                {rotateX: 0, translateX: -73.53, duration: 700, translateY:0.3}
            ]
        }, '-=200');
        logo.onmouseover = logo_anime.play
    }

    
    function loader_logo_animation() {

        let logo_anime = anime.timeline({
            easing: 'cubicBezier(0.215, 0.610, 0.355, 1.000)',
            autoplay: true
        });
        logo_anime.add({
            targets: '.loading-logo-container .logo1 .R',
            keyframes: [
                { translateX: 90, duration: 700 },
                { translateX: -36.83, rotateX: 180, duration: 700}
            ]
        })
        .add({
            targets: '.loading-logo-container .ashyap-container .ashyap',
            keyframes: [
                { translateX: -85, duration: 400}
            ]
        }, '-=600')
        .add({
            targets: '.loading-logo-container',
            keyframes: [
                { rotateX: 180, translateY: 3.28, duration: 500}
            ]
        }, '+=800')
        .add({
            targets: '.loading-logo-container .ashyap-container .ashyap',
            opacity: '0',
            duration: 10
        }, '-=400')
        .add({
            targets: '.loading-logo-container .ayas-container .ayas',
            opacity: ['0%', '100%'],
            duration: 10
        }, '-=400')
        .add({
            targets: '.loading-logo-container .logo1',
            keyframes: [
                { translateX: 126.83, duration: 700},
                { translateX: 36.83, duration: 700}
            ]
        }, '+=500')
        .add({
            targets: '.loading-logo-container .ayas-container .ayas',
            keyframes: [
                { left: 60, duration: 500}
            ]
        }, '-=1400')
        .add({
            targets: '.loading-logo-container .logo1 .R',
            keyframes: [
                {rotateX: 0, translateX: -73.53, duration: 700, translateY:0.3}
            ]
        }, '-=200')
        .add({
            targets: '.loading-logo-container .logo1 .R',
            keyframes: [
                {duration: 1000}
            ]
        }, '+=1000');
    }

    function loader_exit_animation() {
        let loadexit_anime = anime.timeline({
            easing: 'easeInOutSine',
            autoplay: true
        })
        loadexit_anime.add({
            targets: '#loading .page1',
            keyframes: [
                {translateY: `-${window.screen.height}`, duration: 800}
            ]
        })
        .add({
            targets: '#loading .page2',
            keyframes: [
                {translateY: `-${window.screen.height}`, duration: 500}
            ]
        }, '-=200')
        .add({
            targets: '#loading .page3',
            keyframes: [
                {translateY: `-${window.screen.height}`, duration: 400}
            ]
        }, '-=300')
    }

    function loader_text_animation() {
        var wrapperText1 = document.querySelector('.h11')
        wrapperText1.innerHTML = wrapperText1.textContent.replace(
            /\S/g, "<span class='letter'>$&</span>"
        )
        var wrapperText2 = document.querySelector('.h12')
        wrapperText2.innerHTML = wrapperText2.textContent.replace(
            /\S/g, "<span class='letter'>$&</span>"
        )
        let text_anime = anime.timeline({
            easing: 'easeInOutSine',
            autoplay: true
        })
        text_anime.add({
            targets: '.h11 .letter',
            translateY: [0, -23.5],
            easing: 'easeOutExpo',
            opacity: 1,
            duration: 1700,
            delay: (el, i) => 400+70*i
        }, '+=1000')
        .add({
            targets: '.h12 .letter',
            translateY: [0, -23.5],
            easing: 'easeOutExpo',
            opacity: 1,
            duration: 1700,
            delay: (el, i) => 400+70*i 
        }, '+=1500');
    }

    loader_text_animation()
    window.setTimeout(function() {
        window.addEventListener('load', loader_logo_animation())
    }, 2500)
    function preloader() {
        loader_exit_animation()
        fallin_animation()
    }

    imagesLoaded( body, function( instance ) {
        window.setTimeout(preloader, 500) //7500
        // console.log('all images are loaded')
        lscroll.update()
    });

// nav logo animation
    logo.addEventListener('mouseover', nav_logo_animation())
    