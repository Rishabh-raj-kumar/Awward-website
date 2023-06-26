const mouseFollower = document.querySelector(".mouse-follower");
const section = document.querySelector("section");
const anchorli = document.querySelectorAll("header nav ul li");
const icon = document.querySelector("header span ");
const computedRoot = document.querySelector(":root");
const cs = getComputedStyle(computedRoot);
const explore = document.querySelectorAll(".box h1");
const para = document.querySelector('.box p');
const homeContainer = document.querySelector('#HOME .container');
const storiesheading = document.querySelectorAll('.story h2');
const storiesIcon = document.querySelector('#STORIES span');
const spanWheel = document.querySelectorAll('.lerp-wrap span');

let i = 0;
icon.addEventListener("click", () => {
  // console.log(cs.getPropertyValue('--bg-blck'));
  i = i + 1;
  if (i % 2 === 0) {
    icon.innerHTML = `<i class="fa-solid fa-lightbulb"></i>`;
    icon.querySelector('i').style.color = `hsla(91, 23%, 2%, 1)`;

   homeContainer.style.setProperty('--forg-color','hsla(91, 23%, 2%, 1)');

    document.body.style.setProperty("--bg-white", `hsla(46, 13%, 84%, 1)`);
    explore.forEach((exp) => {
      exp.style.setProperty("--forg-color", `hsla(91, 23%, 2%, 1)`);
    })

    spanWheel.forEach((span) =>{
      span.style.setProperty("--forg-color", `hsla(91, 23%, 2%, 1)`);
    })

    para.style.setProperty("--forg-color",`hsla(91, 23%, 2%, 1)`);
    storiesIcon.style.setProperty('--forg-color',`hsla(91, 23%, 2%, 1)`);

    anchorli.forEach((lists) => {
      lists.querySelector("a").style.color = `hsla(91, 23%, 2%, 1)`;
      lists.querySelector("a").style.mixBlendMode = "normal";
    });

    storiesheading.forEach((stories) =>{
      stories.style.setProperty('--forg-color','hsla(91, 23%, 2%, 1)');
    })

  } else {
    icon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    icon.querySelector('i').style.color = `hsla(46, 13%, 84%, 1)`;

    homeContainer.style.setProperty('--forg-color','hsla(46, 13%, 84%, 1)');

    document.body.style.setProperty("--bg-white", `hsla(91, 23%, 2%, 1)`);
    explore.forEach((exp) => {
      exp.style.setProperty("--forg-color", `rgb(255,187,0)`);
    })

    spanWheel.forEach((span) =>{
      span.style.setProperty("--forg-color", `rgb(255,187,0)`);
    })

    para.style.setProperty("--forg-color",`hsla(46, 13%, 84%, 1)`);
    para.style.mixBlendMode = "difference";

    storiesIcon.style.setProperty('--forg-color',`rgb(255,187,0)`);

    anchorli.forEach((lists) => {
      lists.querySelector("a").style.color = `hsla(46, 13%, 84%, 1)`;
      lists.querySelector("a").style.mixBlendMode = "difference";
    });

    storiesheading.forEach((stories) =>{
      stories.style.setProperty('--forg-color',`hsla(46, 13%, 84%, 1)`);
    })

  }
});

//setup locomotive scroll
const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smartphone: {
    smooth: true
}
});

// //animating website with gsap..
// gsap.registerPlugin(ScrollTrigger);

// gsap.from('.box h1',{
//   scrollTrigger : {
//     trigger : '.box',
//     start : `top 0px`,
//     markers : true,
//     toggleActions : "play none none none",
//     end : `top 100px`,
//     scrub : 1
//   },
//   opacity : 0,
//    scale : 20,
//   }
// )
