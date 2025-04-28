let click = document.querySelector(".click");
let cat = document.querySelector(".cat");
let move = false;

    click.addEventListener("click", function(){
        if(!move){
            cat.style.transform = "translateX(-80%)";
            cat.style.transition = "transform 0.5s ease";
            move = true;
        }
        else{
            cat.style.transform = "translateX(0)";
            cat.style.transition = "transform 0.5s ease";
            move = false;
        }
    })

    gsap.registerPlugin(ScrollTrigger);

    let muscat = gsap.utils.toArray(".container .inner ul .muscat-list");
    let first = gsap.utils.toArray(".container .inner ul .first")
    let second = gsap.utils.toArray(".container .inner ul .second")
    let third = gsap.utils.toArray(".container .inner ul .third")
    let line = gsap.utils.toArray(".container .inner ul > img")

    let scrollTween = gsap.to(muscat, {
        xPercent: -200 * (muscat.length+1),
        ease:'none',
        scrollTrigger:{
            trigger:'.container',
            pin: true,
            scrub: 1,
            start: 'center center',
            end: '300%',
            markers: true
        }
    })
    let scrollLine = gsap.to(line, {
        xPercent: -100 * (line.length),
        ease:'none',
        scrollTrigger:{
            trigger:'.container',
            pin: true,
            scrub: 1,
            start: 'center center',
            end: '300%',
            markers: true
        }
    })