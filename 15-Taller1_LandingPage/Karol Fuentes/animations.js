gsap.registerPlugin(ScrollTrigger);

gsap.to(".textointro", {
    x: 50,
    duration: 3,
    scrollTrigger: "#botoncomprar"
})

gsap.to("#botoncomprar", {
    x: 50,
    duration: 3,
    scrollTrigger: "#botoncomprar"
})

gsap.to(".librointro", {
    x:-50,
    duration: 3,
    scrollTrigger: ".librointro"
})

gsap.to("#h3card", {
    x:-50,
    duration: 3,
    scrollTrigger: "#h3card"
})

gsap.to("#textcontainercontact", {
    y:-50,
    duration: 3,
    scrollTrigger: "#textcontainercontact"
})


