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
        direction: 'vertical'
    });

    function fallin_animation() {
        let fallin_anime = anime.timeline({
            easing: 'linear',
            autoplay: true
        })
        fallin_anime.add({
            targets: 'main #home-container .fallin',
            keyframes: [
                {translateY: 2*me.offsetHeight, duration: 40000}
            ]
        });
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
                {translateY: `-${window.innerHeight}`, duration: 800}
            ]
        })
        .add({
            targets: '#loading .page2',
            keyframes: [
                {translateY: `-${window.innerHeight}`, duration: 500}
            ]
        }, '-=200')
        .add({
            targets: '#loading .page3',
            keyframes: [
                {translateY: `-${window.innerHeight}`, duration: 400}
            ]
        }, '-=300')
    }

    window.setTimeout(loader_logo_animation, 1000)
    function preloader() {
        loader_exit_animation()
        fallin_animation()
        window.setTimeout(function(){
        })
    }



    imagesLoaded( body, function( instance ) {
        me.style.top = `-${me.offsetHeight}px`
        window.setTimeout(preloader, 6000)
        console.log('all images are loaded')
        lscroll.update()
    });

    // history.scrollRestoration = 'manual'

// nav logo animation
    logo.addEventListener('mouseover', nav_logo_animation())
    