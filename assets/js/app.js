"use strict";

// Header

let header = $(`
<nav class="navbar navbar-expand-lg fixed-top dark-theme" id="navbar">
<a class="navbar-brand" href="index.html"  >
    <img class="logo2"  src="img/bkfc_linear.png" style="max-width: 400px; height: 37px; opacity: 1; " alt="">
</a>

<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>


</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="teambkfc.html">Team BKFC-CHV</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="in4.html">Thông tin</a></li>

   <li class="nav-item nav-item-hover"><a class="nav-link" href="events.html">Sự kiện</a></li>
 
   <li class="nav-item">
   <input type="checkbox" id="dark_toggler" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()" checked>
   </li>
   
 
  </ul>
</div>
</nav>`);

// Footer

let footer = $(`






</footer>
`);

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

$(document).ready(function () {
  // updating the color of the swiper bullets (initial update of color)
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));

  //function for the "Scroll To Top" button to detect the footer
  $(window).scroll(function () {
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
      $("#btnScrollToTop").css("visibility", "hidden");
    } else {
      $("#btnScrollToTop").css("visibility", "visible");
      //The button will change it's color when it hits the footer
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 838
      ) {
        // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      } else {
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      }
    }
  });
});

//function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class

$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
$(function () {
  $("a.nav-link").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("current-link");
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {
  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current-link");
      }
    }
  );
});

//consistent light mode for page change
if (localStorage.getItem("lightMode") == "light") {
  var app = document.getElementsByTagName("HTML")[0];
  app.setAttribute("light-mode", "light");

  //to add dark theme to nav bar after its been loaded
  window.addEventListener("load", function () {
    var nav = document.getElementById("navbar");
    nav.classList.remove("dark-theme");
    document.getElementById("dark_toggler").checked = false;
  });

  var sc = document.getElementsByClassName("socialicon");
  for (var i = 0; i < sc.length; i++) {
    sc[i].classList.remove("dsc");
  }
} else {
  localStorage.setItem("lightMode", "dark");
}

function toggle_light_mode() {
  console.log(localStorage.getItem("lightMode"));
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.getElementById("navbar");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.remove("dsc");
    }
  } else {
    nav.classList.add("dark-theme");
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.add("dsc");
    }
  }

  // updating the swiper bullets
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));
}

// function to update swiper bullets
function updateColorOfSwiperBullets(lightMode) {
  document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
    if (lightMode == "light") {
      bullet.style.backgroundColor = "blue";
    } else {
      bullet.style.backgroundColor = "white";
    }
  });
}

window.addEventListener("storage", function () {
  if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
  } else {
    app.setAttribute("light-mode", "light");
  }
});

// Function to remove scroll bar during preload
$(window).on("load", function () {
  setTimeout(function () {
    $(".no-scroll-preload").css("overflow", "visible");
  }, 1000);
  $(".loader-container").fadeOut(2500);
});
