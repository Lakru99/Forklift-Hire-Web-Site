// animation for link buttons

// header-section
let link1 = document.querySelector('.header .contact a');
let logo1 = document.querySelector('.header .contact i');

link1.addEventListener('mouseover', () => {
    logo1.classList.toggle('animate__headShake');
})

link1.addEventListener('mouseout', () => {
    logo1.classList.remove('animate__headShake');
})


// let link2 = document.querySelector('.header .mail a');
// let logo2 = document.querySelector('.header .mail img');

// link2.addEventListener('mouseover', () => {
//     logo2.classList.toggle('animate__headShake');
// })

// link2.addEventListener('mouseout', () => {
//     logo2.classList.remove('animate__headShake');
// })


// // // three
// let link3 = document.querySelector('.section-c a');
// let logo3 = document.querySelector('.section-c i');

// link3.addEventListener('mouseover', () => {
//     logo3.classList.toggle('animate__headShake');
// })

// link3.addEventListener('mouseout', () => {
//     logo3.classList.remove('animate__headShake');
// })




// // four
let link4 = document.querySelector('.footer .contact a:first-child');
let logo4 = document.querySelector('.footer .contact img:first-child');

link4.addEventListener('mouseover', () => {
    logo4.classList.toggle('animate__headShake');
})

link4.addEventListener('mouseout', () => {
    logo4.classList.remove('animate__headShake');
})

// // five
let link5 = document.querySelector('.box-3 a');
let logo5 = document.querySelector('.box-3 i');

link5.addEventListener('mouseover', () => {
    logo5.classList.toggle('animate__headShake');
})

link5.addEventListener('mouseout', () => {
    logo5.classList.remove('animate__headShake');
})









// let div3 = document.querySelector(".section-a .col-xs-12:nth-child(2) img");
// gsap.registerPlugin(ScrollTrigger);

// gsap.fromTo(
//     div3, {
//         clipPath: "circle(12.8% at 50% 50%)",
//     }, {
//         clipPath: "circle(70.7% at 50% 50%)",
//         ease: 'Sine.easeInOut',
//         duration: 2,
//         scrollTrigger: {
//             trigger: div3,
//             scrub: 1,
//             start: "top bottom",
//             end: "top bottom-=50"
//         },
//     }
// );


// var div9 = gsap.utils.toArray(".section-a .col-xs-12:nth-child(2) img, .section-d .col-xs-12:nth-child(2) img ");
// gsap.registerPlugin(ScrollTrigger);
// div9.forEach(function(div9) {
//     gsap.fromTo(
//         div9, {
//             clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
//         }, {
//             clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
//             ease: 'SlowMo.easeInOut(0.7 , 0.7 , false)',
//             duration: 1,
//             scrollTrigger: {
//                 trigger: div9,
//                 scrub: 1,
//                 start: "top bottom",
//                 end: "top bottom-=200"
//             },
//         }
//     );
// });


// slider
// let div1 = document.querySelector(".slider-section");

//     gsap.fromTo(
//         div1, {
//             clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
//         }, {
//             clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
//             ease: 'Sine.easeInOut',
//             duration: 2,
//         }
//     );

