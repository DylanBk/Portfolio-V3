const download_btn = document.getElementById('download-btn');
const view_examples_cont = document.getElementById('view-examples-container');
const abilities_cont = document.getElementById('abilities-container');
const left_contact_btns = document.querySelectorAll('.contact-btn-left');
const mid_contact_btn = document.querySelector('.contact-btn-mid');
const right_contact_btns = document.querySelectorAll('.contact-btn-right');

mq1 = window.matchMedia("(min-width: 1201px) and (max-width: 2560px)");
mq2 = window.matchMedia("(min-width: 1101px) and (max-width: 1200px)");
mqMobile = window.matchMedia("(min-width: 320px) and (max-width: 500px");

if (mq1.matches) {
  var scroll1 = 100;
  var scroll2 = 350;
  var scroll3 = 600;
  var scroll4 = 1450;
}
else if (mq2.matches) {
  var scroll1 = 100;
  var scroll2 = 350;
  var scroll3 = 725;
  var scroll4 = 1525;
}

if (mqMobile.matches) {
  window.addEventListener('DOMContentLoaded'), () => {
    abilities_cont.transform = "translateX(50%)";
  };
}
else {
  window.addEventListener('DOMContentLoaded', () => { // set up element positioning on page loaded, prevents elements starting at end pos
    download_btn.style.transform = "translateX(-70%) translateY(90%)";
    download_btn.style.opacity = "1";
    abilities_cont.style.transform = "translateX(50%)";
    view_examples_cont.style.transform = "translate(0%)";
    view_examples_cont.style.opacity = "0.4";
  });
};

if (!mqMobile.matches){
  window.onscroll = function() {slideDownloadBtn(), slideAbilitiesContainer(), slideViewExamplesContainer(), slideContactButtons()};

  function slideDownloadBtn() {
      if (document.body.scrollTop > scroll1 || document.documentElement.scrollTop > scroll1) {
          download_btn.style.transition = "0.8s ease all";
          download_btn.style.transform = "translateX(0%) translateY(0%)";
          download_btn.style.opacity = "0.4";
      
          document.getElementById('container').addEventListener('mouseleave', () => {
            download_btn.style.transform = "translateX(0%) translateY(0%) scale(1)";
            download_btn.style.opacity = "0.4";
          });
      }
      else {
          download_btn.style.transition = "0.8s ease all";
          download_btn.style.transform = "translateX(-70%) translateY(90%) scale(1)";
          download_btn.style.opacity = "1";

          document.getElementById('container').addEventListener('mouseleave', () => {
            download_btn.style.transform = "translateX(-70%) translateY(90%) scale(1)";
            download_btn.style.opacity = "1";
          });
      };
  };

  function slideAbilitiesContainer() {
    if (document.body.scrollTop > scroll2 || document.documentElement.scrollTop > scroll2) {
      abilities_cont.style.transform = "translateX(25%)";
    } else {
      abilities_cont.style.transform = "translateX(50%)";
    };
  };

  function slideViewExamplesContainer() {
      if (document.body.scrollTop > scroll3 || document.documentElement.scrollTop > scroll3) {
          view_examples_cont.style.transform = "translate(10%)";
          view_examples_cont.style.opacity = "1";
      }
      else {
          view_examples_cont.style.transform = "translate(0%)";
          view_examples_cont.style.opacity = "0.4";
      };
  };

  function slideContactButtons() {
    if (document.body.scrollTop > scroll4 || document.documentElement.scrollTop > scroll4) {
      for (let i = 0; i < left_contact_btns.length; i++) {

        let left_contact_btn = left_contact_btns[i];
        let right_contact_btn = right_contact_btns[i];

        left_contact_btn.className = 'animated-btn-left';
        right_contact_btn.className = 'animated-btn-right';
      };

      mid_contact_btn.className = 'animated-btn-mid';
    }
    else {

      for (let i = 0; i < left_contact_btns.length; i++) {
        let left_contact_btn = left_contact_btns[i];
        let right_contact_btn = right_contact_btns[i];

        left_contact_btn.className = 'contact-btn-left';
        right_contact_btn.className = 'contact-btn-right';
      };

      mid_contact_btn.className = 'contact-btn-mid';
    };
  };

  download_btn.addEventListener('mouseover', () => {
    download_btn.style.transform = "translateX(-70%) translateY(90%) scale(1.1)";
    download_btn.style.opacity = "1";
  });
  download_btn.addEventListener('mouseleave', () => {
    download_btn.style.transform = "translateX(-70%) translateY(90%) scale(1)";
  });
};


// -- CODE FOR SLIDESHOW --

let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");

  if (slideIndex >= slides.length) {
    slideIndex = 0; // If slides at end, reset
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Go back to last slide
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  // Show current slide
  slides[slideIndex].classList.add('active');
}

// Previous button functionality
document.getElementById("prevBtn").addEventListener("click", function() {
  plusSlides(-1);
});

// Next button functionality
document.getElementById("nextBtn").addEventListener("click", function() {
  plusSlides(1);
});