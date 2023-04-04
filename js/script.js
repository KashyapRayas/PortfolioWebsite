// declarations
    const loader = document.getElementById('loading')
    const body = document.querySelector('body')
    const logo = document.querySelector('.logo')
    const me = document.querySelector('.fallin')
    const me_container = document.querySelector('.fallin-container')
    const works_container = document.querySelector('#works-container')
    const tvs = document.querySelector('.moving-tvs')
    const highlight_text = document.querySelectorAll('.highlight')
    const close_button_list = document.querySelectorAll('.close-button-container')
    const work_mini_list = document.querySelectorAll('.work_mini')

    var wheight = 0
    var wwidth = 0
    var wtop = 0
    var wleft = 0

// oriantation change
    window.onorientationchange = function() {  	window.location.reload(); };

// scroll

    const lscroll = new LocomotiveScroll({
        el: document.querySelector('#js-scroll'),
        smooth: true,
        lerp: 0.02,
        direction: 'vertical',
        reloadOnContextChange: true,
        scrollFromAnywhere: true,
        smoothMobile: true,
        smartphone: {
            lerp: 0.02
        }
    });

//initial fall animation
    function fallin_animation() {
        let fallin_anime = anime.timeline({
            easing: 'easeOutSine',
            autoplay: true
        })
        fallin_anime.add({
            targets: '.fallin-container',
            keyframes: [
                {translateY: -(window.innerHeight)/1.5, duration: 0},
                {translateY: 0, duration: 4000}
            ]
        }, '+=2000');
    }

//tv horizontal animation
    function tv_animation() {
        let tv_anime = anime.timeline({
            easing: 'linear',
            autoplay: true,
            loop: true
        })
        tv_anime.add({
            targets: '.moving-tvs',
            keyframes: [
                {translateX: 0, duration: 0},
                {translateX: -(window.innerWidth+tvs.clientWidth), duration: 12000}
            ]
        }, '+=1000');
    }

//nav link clicking 
    function navclick(flag) {
        if(flag==1) lscroll.scrollTo('#home-container', 0)
        if(flag==2) lscroll.scrollTo('#about-container', -50)
        if(flag==3) lscroll.scrollTo('#works-container', -50)
        if(flag==4) lscroll.scrollTo('#contact-container', -50)
    }

    function contact_display(flag) {
        if(flag==1) {
            document.querySelector('.contact-name').textContent = 'GMAIL'
            document.querySelector('.contact-value').textContent = 'KASHYAP.RAYAS'
            var b = baffle(document.querySelector('.contact-name'), {
                // characters: 'abcdefghijklmnopqrstuvwxyz',
                characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
                speed: 75
            })
            b.start()
            b.reveal(5500)
            var c = baffle(document.querySelector('.contact-value'), {
                // characters: 'abcdefghijklmnopqrstuvwxyz',
                characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
                speed: 75
            })
            c.start()
            c.reveal(4500)
        }
        if(flag==2) {
            document.querySelector('.contact-name').textContent = 'INSTAGRAM'
            document.querySelector('.contact-value').textContent = 'KASHYAP.PNG'
            var b = baffle(document.querySelector('.contact-name'), {
                // characters: 'abcdefghijklmnopqrstuvwxyz',
                characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
                speed: 75
            })
            b.start()
            b.reveal(5500)
            var c = baffle(document.querySelector('.contact-value'), {
                // characters: 'abcdefghijklmnopqrstuvwxyz',
                characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
                speed: 75
            })
            c.start()
            c.reveal(4500)
        }
        if(flag==3) {
            document.querySelector('.contact-name').textContent = 'DISCORD'
            document.querySelector('.contact-value').textContent = 'kkstar#5674'
            var b = baffle(document.querySelector('.contact-name'), {
                // characters: 'abcdefghijklmnopqrstuvwxyz',
                characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
                speed: 75
            })
            b.start()
            b.reveal(5500)
            var c = baffle(document.querySelector('.contact-value'), {
                // characters: 'abcdefghijklmnopqrstuvwxyz',
                characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
                speed: 75
            })
            c.start()
            c.reveal(4500)
        }
        if(flag==4) {
            document.querySelector('.contact-name').textContent = 'LINKEDIN'
            document.querySelector('.contact-value').textContent = 'KASHYAPGRAYAS'
            var b = baffle(document.querySelector('.contact-name'), {
                // characters: 'abcdefghijklmnopqrstuvwxyz',
                characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
                speed: 75
            })
            b.start()
            b.reveal(5500)
            var c = baffle(document.querySelector('.contact-value'), {
                // characters: 'abcdefghijklmnopqrstuvwxyz',
                characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
                speed: 75
            })
            c.start()
            c.reveal(4500)
        }
    }


    lscroll.on('call', (flag)=>{
        if(flag==='tv') {
            tv_animation()
        }
        else if(flag==='switch_reverse') {
            me.src = 'assets/fallin.png'
        }
        else if(flag==='switch') {
            me.src = 'assets/fallin-dark.png'
        }
        else if(flag==='highlight') {
            var i=1
            highlight_text.forEach(element => {
                element.style.animation = `2s highlight ${i+=0.5}s 1 normal forwards`
            });
        }
    })

    function reveal_child(elem, i) {
        let reveal_anime = anime.timeline({
            easing: 'easeOutSine',
            autoplay: true,
        })
        reveal_anime.add({
            targets: elem,
            keyframes: [
                {duration: 0, opacity: '0'},
                {duration: 700, opacity: '1'}
            ]
        }, `+=${800+i}`);
    }

    function reveal_animation(page) {
        elem = document.querySelectorAll('.'+page+'-page .reveal')
        var i=100
        elem.forEach(elem => {
            reveal_child(elem, i+=100)
        })
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
                {height: 0, duration: 500}
            ]
        }, '-=200')
        .add({
            targets: '#loading .page3',
            keyframes: [
                {height: 0, duration: 400}
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

    function hero_text() {
        d = baffle(document.querySelector('#home-container .hero-text span'), {
            characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
            speed: 90
        })
        d.text(currentText => currentText='GRAPHIC')
        d.start()
        d.reveal(3000, 1000)
        window.setTimeout(()=>{
            d.text(currentText => currentText='WEB')
            d.start()
            d.reveal(2000, 1000)
        }, 2500)
        window.setTimeout(()=>{
            d.text(currentText => currentText='CREATIVE')
            d.start()
            d.reveal(2000, 1000)
        }, 4500)
    }

    loader_text_animation()
    window.setTimeout(function() {
        window.addEventListener('load', loader_logo_animation())
    }, 2500)
    function preloader() {
        loader_exit_animation()
        fallin_animation()
        hero_text()
    }

    imagesLoaded( body, function( instance ) {
        window.setTimeout(preloader, 7500) //7500
        // console.log('all images are loaded')
        lscroll.start()
        lscroll.update()
    });

// nav logo animation
    logo.addEventListener('mouseover', nav_logo_animation())

//clicking on mini page    
    work_mini_list.forEach(element => {
        element.addEventListener('click', ()=>{
            let work_mini = element
            work_mini.style.zIndex = '8'
            wheight = work_mini.style.height
            wwidth = work_mini.style.width
            wtop = work_mini.style.top
            wleft = work_mini.style.left
            let work_mini_name = work_mini.className.substring(0, 5)
            let project_page = document.getElementById(work_mini_name)
            reveal_animation(work_mini_name)
            lscroll.stop()
            window.setTimeout(()=>{
                work_mini.style.width = '200vw'
                work_mini.style.height = '350vh'
                work_mini.style.top = '-100vh'
                work_mini.style.left = '-50vw'
                work_mini.style.backgroundColor = 'white'
                work_mini.style.boxShadow = '30vw 10vw 10vw 10vw white'
            }, 100)
            document.querySelectorAll('.'+work_mini_name+' .elements').forEach(element => {
                element.style.display = 'none'
            })
            project_page.style.display = 'grid'
            let project_page_content = document.querySelector('#'+work_mini_name+' .project-content')
            project_page_content.scrollTo(0, 0)
            let project_left_section = document.querySelector('#'+work_mini_name+' .left-section')
            project_left_section.scrollTo(0, 0)
            window.setTimeout(()=>{
                project_page.style.opacity = 1
            }, 300)
        })
    })

//exiting project page
    close_button_list.forEach(element => {
        element.addEventListener('click', ()=>{

            let close_button = element
            let page = close_button.parentNode
            let project_name = close_button.parentNode.id
            let page_mini = document.querySelector('.'+project_name)
            page.style.opacity = 0
            page_mini.style.zIndex='5'
            page_mini.style.width = wwidth
            page_mini.style.height = wheight
            page_mini.style.top = wtop
            page_mini.style.left = wleft
            page_mini.style.backgroundColor = '#bef992'
            page_mini.style.boxShadow = 'none'
            document.querySelectorAll('.'+project_name+' .elements').forEach(element => {
                element.style.display = 'block'
            })
            lscroll.start()
            window.setTimeout(()=>{
                page.style.display = 'none'
            }, 400)
        })
    })

    

    