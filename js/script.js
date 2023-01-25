

//scroll
    const lscroll = new LocomotiveScroll({
        el: document.querySelector('#js-scroll'),
        smooth: true,
        lerp: 0.05,
        direction: 'vertical'
    });

    const loader = document.getElementById("loading");
    const add_class_images_loaded = () => loader.classList.add("d-none");

    imagesLoaded( document.querySelector('body'), function( instance ) {
        console.log('all images are loaded');
        lscroll.update();
        add_class_images_loaded();
    });

    // history.scrollRestoration = 'manual'

//logo animation
    const logo = document.querySelector('.logo');
    let logo_anime = anime.timeline({
        easing: 'cubicBezier(0.215, 0.610, 0.355, 1.000)',
        autoplay: false
    });
    logo_anime.add({
        targets: '.R',
        keyframes: [
            { translateX: 90, duration: 700 },
            { translateX: -36.83, rotateX: 180, duration: 700}
        ]
    })
    .add({
        targets: '.ashyap',
        keyframes: [
            { translateX: -85, duration: 400}
        ]
    }, '-=600')
    .add({
        targets: '.logo-container',
        keyframes: [
            { rotateX: 180, translateY: 3.28, duration: 500}
        ]
    }, '+=800')
    .add({
        targets: '.ashyap',
        opacity: '0',
        duration: 10
    }, '-=400')
    .add({
        targets: '.ayas',
        opacity: ['0%', '100%'],
        duration: 10
    }, '-=400')
    .add({
        targets: '.logo',
        keyframes: [
            { translateX: 126.83, duration: 700},
            { translateX: 36.83, duration: 700}
        ]
    }, '+=500')
    .add({
        targets: '.ayas',
        keyframes: [
            { left: 60, duration: 500}
        ]
    }, '-=1400')
    .add({
        targets: '.R',
        keyframes: [
            {rotateX: 0, translateX: -73.53, duration: 700, translateY:0.3}
        ]
    }, '-=200');
    logo.onmouseover = logo_anime.play;