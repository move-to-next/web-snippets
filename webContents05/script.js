window.onload = function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.container .inner .cardBox .uicard').forEach((selector)=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:selector,
                start:'0% 60%',
                end:'0% 0%',
                scrub:1,
                markers: true
            }
        })
        .to(
            selector,
            {
                transform:'rotateX(-10deg) scale(0.9)',
                transformOrigin:'top',
                filter:'brightness(0.3)'
            },0)
    })
}