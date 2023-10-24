import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function main() {

    gsap.registerPlugin(ScrollTrigger);

    // visual animation
    
    const ani0 = gsap.timeline();
    ani0.to(".visual__main__text", {scale: 50, duration: 1})
        .to(".visual__main__text", {autoAlpha: 0})

    ScrollTrigger.create({
        animation: ani0,
        trigger: ".visual",
        start: "top top",
        end: "+=50",
        scrub: true,
        //pin: true,
        // anticipatePin: 1,
        markers: false
    });


    //스킬
    const horSection = gsap.utils.toArray(".skill__item");
    gsap.to(horSection, {
        xPercent: -100 * (horSection.length),
        ease: "none",
        scrollTrigger: {
            trigger: ".skill",
            start: "top 0%",
            end: "+=5000",
            pin: true,
            anticipatePin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });


    //lottie
    animation1 = bodymovin.loadAnimation({ 
        container: document.getElementById("aboutLottie__01"), 
        renderer: "svg", 
        loop: true,
        autoplay: true,
        path: "../assets/js/lottie/about_ani_02.json"
    });
    animation2 = bodymovin.loadAnimation({ 
        container: document.getElementById("aboutLottie__02"), 
        renderer: "svg", 
        loop: true, 
        autoplay: true, 
        path: "../assets/js/lottie/about_ani_01.json" 
    });
  
}