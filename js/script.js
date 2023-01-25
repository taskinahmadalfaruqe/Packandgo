$(function(){
    $(".popular_slider").slick({
        slidesToShow:3,
        arrows:false,
        centerMode:true,
        centerPadding: "150px",
        focusOnSelect:true,
    })
    // Counter Up Js
    $('.counter').counterUp({
        time: 3000,
        delay: 10
    });



    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        focusOnSelect:true,
        dots:false,

      });
          


    // Count Down js
//     let days = document.querySelector(".days")
//     let hours = document.querySelector(".hours")
//     let minutes = document.querySelector(".minutes")
//     let seconds = document.querySelector(".seconds")
// let countDownDate = new Date("Dec 3, 2023 15:30:15").getTime();

// // Update the count down every 1 second
//     let x = setInterval(function() {
//         let now = new Date().getTime();
//         let distance = countDownDate - now;
    
//         // Time calculations for days, hours, minutes and seconds
//         let d = Math.floor(distance / (1000 * 60 * 60 * 24));
//         let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         let s = Math.floor((distance % (1000 * 60)) / 1000);
//         days.innerHTML = d;
//         hours.innerHTML = h;
//         minutes.innerHTML = m;
//         seconds.innerHTML = s;
        
//         if (distance < 0) {
//             clearInterval(x);
//             document.getElementById("demo").innerHTML = "EXPIRED";
//         }
// }, 1000);

})