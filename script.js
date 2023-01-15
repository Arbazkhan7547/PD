var tl = gsap.timeline();

tl.from('.navitem', {
    stagger: .3,
    duration: 2,
    y: 20,
    delay: 7,
    ease: 'Expo.easeInOut',
    opacity: 0
})
 
function move(){

    const card = document.querySelectorAll(".projects .p1 .card");

     const cardrows = document.querySelectorAll("#part2 .projects .p1")
    .forEach(function(elem){
       const totalWidth = elem.getBoundingClientRect().width;
       const totalHeight = elem.getBoundingClientRect().height;

    elem.addEventListener("mousemove",function(dets){
        card.forEach(function(val){
            val.style.transform = `translate(${-(dets.x - (totalWidth/2))/(totalWidth/100)}%,${((dets.y - 402 - 35)/4.03)/2}%)`;
        })

   })
})
}

gsap.to("#part3 .design .d1  img",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#part3 .designs",
        start:"top 30%",
    },
     width:"100%",
     ease:Expo.easeInOut,
     duration:2
})

gsap.to(" #part3 .h1 h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#part3 .h1 h1",
        start:"top 40%",
    },
      y:0,
     ease:Expo.easeInOut,
     duration:1
})

move();
