const header = document.querySelector(".header");
const headerBtn = document.querySelector(".header-btn");
const toggleBtn = document.querySelector(".toggler-menu");
const headerLogo = document.querySelector(".header-logo");
const navLink = document.querySelectorAll(".nav-link");
const navList = document.querySelector(".nav-list");
const mainNav = document.querySelector(".main-nav");
const accordionBtn = document.querySelectorAll(".accordion-head");
const accBody = document.querySelectorAll(".accordion-body");
const bakBtn = document.querySelector(".btn-back-top");

bakBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.currentTarget.getAttribute("href");
  const sectionId = document.getElementById(target.replace("#", ""));
  const offsetTop = sectionId.offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
});

/* -------------------------------------------------------------------------- */
/*                  ADD TOGGLE CLASS TO THE TOGGLER MENU BTN                  */
/* -------------------------------------------------------------------------- */
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("clicked");
  mainNav.classList.toggle("show");
});
/* -------------------------------------------------------------------------- */
/*                       ADD IS SCROLLED CLASS TO HEADER                      */
/* -------------------------------------------------------------------------- */
window.addEventListener("scroll", () => {
  let distance = window.scrollY;
  let winWidth = window.innerWidth;
  let headerLogoSrcBasic = "./images/logo/white-logo.svg";
  let headerLogoSrcAlt = "./images/logo/logo.svg";
  //   CHECK THE DISTANCE OF WINDOW FORM TOP
  distance >= 100 || winWidth <= 992 //  ADD / REOMOVE CLASS TO HEADER WHEN WINDOW SCROLLED 100PX OR MORE
    ? (header.classList.add("is-scrolled"),
      // REPLACE HEADER BTN CLASS WHEN SCROLLED
      headerBtn.classList.remove("btn-primary"),
      headerBtn.classList.add("btn-tertiary"),
      //   REPLACE LOGO SRC
      headerLogo.setAttribute("src", headerLogoSrcAlt))
    : // REPLACE HEADER BTN CLASS WHEN SCROLLED
      (header.classList.remove("is-scrolled"),
      headerBtn.classList.add("btn-primary"),
      headerBtn.classList.remove("btn-tertiary"),
      //   REPLACE LOGO SRC
      headerLogo.setAttribute("src", headerLogoSrcBasic));
  // CLOSE MAIN NAV MENU
  mainNav.classList.contains("show") ? mainNav.classList.remove("show") : "";

  // SHOW BACK BTN

  distance >= 100
    ? bakBtn.classList.add("show")
    : bakBtn.classList.remove("show");
  // bakBtn.classList.remove("is-clicked");

  // CHANGE ACTIVE CLASS WHILE SCROLLING
  // CURRENT POSITON
  const currPosition =
    window.offsetTop ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  navLink.forEach((link) => {
    let currLink = link;
    let linkHref = currLink.getAttribute("href");
    let section = document.querySelector(linkHref);
    let sectionTop = section.offsetTop - 80;
    let sectionHeight = section.offsetHeight;

    if (
      sectionTop <= currPosition &&
      sectionTop + sectionHeight > currPosition
    ) {
      document.querySelector(".nav-link").classList.remove("active");
      currLink.classList.add("active");
    } else {
      currLink.classList.remove("active");
    }
  });
});

// ADD IS SCROLLED WHEN RESIZING WINDOW
window.addEventListener("resize", () => {
  let distance = window.scrollY;
  let winWidth = window.innerWidth;
  let headerLogoSrcBasic = "./images/logo/white-logo.svg";
  let headerLogoSrcAlt = "./images/logo/logo.svg";
  //   CHECK THE DISTANCE OF WINDOW FORM TOP
  distance >= 100 || winWidth <= 992 //  ADD / REOMOVE CLASS TO HEADER WHEN WINDOW SCROLLED 100PX OR MORE
    ? (header.classList.add("is-scrolled"),
      // REPLACE HEADER BTN CLASS WHEN SCROLLED
      headerBtn.classList.remove("btn-primary"),
      headerBtn.classList.add("btn-tertiary"),
      //   REPLACE LOGO SRC
      headerLogo.setAttribute("src", headerLogoSrcAlt))
    : // REPLACE HEADER BTN CLASS WHEN SCROLLED
      (header.classList.remove("is-scrolled"),
      headerBtn.classList.add("btn-primary"),
      headerBtn.classList.remove("btn-tertiary"),
      //   REPLACE LOGO SRC
      headerLogo.setAttribute("src", headerLogoSrcBasic));
});
// TO KEEP EVERY THING WHEN REFRESH THE PAGE
window.addEventListener("load", () => {
  let distance = window.scrollY;
  let winWidth = window.innerWidth;
  let headerLogoSrcBasic = "./images/logo/white-logo.svg";
  let headerLogoSrcAlt = "./images/logo/logo.svg";
  //   CHECK THE DISTANCE OF WINDOW FORM TOP
  distance >= 100 || winWidth <= 992 //  ADD / REOMOVE CLASS TO HEADER WHEN WINDOW SCROLLED 100PX OR MORE
    ? (header.classList.add("is-scrolled"),
      // REPLACE HEADER BTN CLASS WHEN SCROLLED
      headerBtn.classList.remove("btn-primary"),
      headerBtn.classList.add("btn-tertiary"),
      //   REPLACE LOGO SRC
      headerLogo.setAttribute("src", headerLogoSrcAlt))
    : // REPLACE HEADER BTN CLASS WHEN SCROLLED
      (header.classList.remove("is-scrolled"),
      headerBtn.classList.add("btn-primary"),
      headerBtn.classList.remove("btn-tertiary"),
      //   REPLACE LOGO SRC
      headerLogo.setAttribute("src", headerLogoSrcBasic));
});
/* -------------------------------------------------------------------------- */
/*         ADD / REMOVE ACTIVE CLASS FROM SELECTED LINK & GOTO SECTION        */
/* -------------------------------------------------------------------------- */
navLink.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    const navHref = e.currentTarget.getAttribute("href");
    const sectionId = document.getElementById(navHref.replace("#", ""));
    const offsetTop = sectionId.offsetTop;
    // CLOSE MENU AFTER SELET ITEM
    toggleBtn.classList.remove("clicked");
    mainNav.classList.remove("show");
    // ADD / REMOVE ACTIVE CLASS FROM SELECTED LINK
    navList.querySelector(".active").classList.remove("active");
    e.currentTarget.classList.add("active");
    // GO TO SELECTED SECTION
    window.scrollTo({
      top: offsetTop - 80,
      behavior: "smooth",
    });
  });
});

/* -------------------------------------------------------------------------- */
/*                             TESTIMONIALS SLIDER                            */
/* -------------------------------------------------------------------------- */
$(".slider.owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});

/* -------------------------------------------------------------------------- */
/*                                  ACCORDION                                 */
/* -------------------------------------------------------------------------- */
accordionBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let Body = btn.nextElementSibling;
    accBody.forEach((panal) => {
      if (
        e.currentTarget.nextElementSibling !== panal &&
        panal.classList.contains("active")
      ) {
        panal.classList.remove("active");
        accordionBtn.forEach((btn) => {
          btn.classList.remove("active");
        });
      }
    });

    btn.classList.toggle("active");
    Body.classList.toggle("active");
  });
});

/* -------------------------------------------------------------------------- */
/*                                   CLIENTS                                  */
/* -------------------------------------------------------------------------- */
$(".clients-content.owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});

/* -------------------------------------------------------------------------- */
/*                                   COUNTER                                  */
/* -------------------------------------------------------------------------- */

$(".counter").counterUp({
  delay: 10,
  time: 1000,
});
