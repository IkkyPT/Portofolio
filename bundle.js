/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/carousel.js":
/*!*********************************!*\
  !*** ./src/scripts/carousel.js ***!
  \*********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      // Set the delay in milliseconds (3 seconds in this example)
      disableOnInteraction: false // Allow navigation while autoplaying
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  });
});

/***/ }),

/***/ "./src/scripts/daynight.js":
/*!*********************************!*\
  !*** ./src/scripts/daynight.js ***!
  \*********************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var cicle = document.querySelector('.themeToggle');
  cicle.addEventListener('click', function () {
    var moon = document.getElementById("sun");
    if (moon.className === "sun") {
      moon.className = "moon";
      document.body.classList.remove("dayMode");
      document.body.classList.add("nightMode");
      document.body.style.transition = '0.2s';
    } else {
      moon.className = "sun";
      document.body.classList.remove("nightMode");
      document.body.classList.add("dayMode");
      document.body.style.transition = '0.2s';
    }
  });
});

/***/ }),

/***/ "./src/scripts/email.js":
/*!******************************!*\
  !*** ./src/scripts/email.js ***!
  \******************************/
/***/ (() => {

emailjs.init('dZgSFkH7th2v-qlHg');
window.onload = function () {
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_4bylwpk', 'template_vssufwk', this).then(function () {
      console.log('SUCCESS!');
    }, function (error) {
      console.log('FAILED...', error);
    });
  });
};

/***/ }),

/***/ "./src/scripts/navbar.js":
/*!*******************************!*\
  !*** ./src/scripts/navbar.js ***!
  \*******************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var navbarToggle = document.getElementById('navbar-toggle');
  var navbarItems = document.querySelector('.navbarItems');
  navbarToggle.addEventListener('click', function () {
    navbarItems.classList.toggle('show');
  });
});

/***/ }),

/***/ "./src/scripts/typeeffect.js":
/*!***********************************!*\
  !*** ./src/scripts/typeeffect.js ***!
  \***********************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typeText", {
    strings: ["Ricardo Carvalho"],
    typeSpeed: 100
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*------- Import fonts -------*/

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /*------- Color Variable -------*/
  --button-border-color: #115e59;
  --button-bg-color: #14b8a6;
  --night-main-bg-color: #111111;
  --day-main-bg-color: #fff;
  --main-console-color: #011627;
  --rectangle-color: #3f3f69;
  --wrap-bg-color: #2f2f2f;
  --wrap-border-color: #192028;
  /*------- Font Color Variable -------*/
  --main-font-color: #f5f5ed;
  --sub-font-color: #BDBDBD;
  --day-font-color: #011627;
  --day-sub-font-color: #07263dea;
  /*------- Font Variable -------*/
  --main-font: 'Poppins', sans-serif;
  --sub-font: 'Roboto Mono', monospace;
}

/*------- Night Theme -------*/

html,
body {
  scroll-behavior: smooth;
}

body {
  margin: 0 11rem;
  background-color: var(--night-main-bg-color);
  font-family: var(--main-font);
  color: var(--main-font-color);
}

/*------- Header -------*/
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--night-main-bg-color);
  color: var(--main-font-color);
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 2px solid var(--wrap-bg-color);
}

.themeToggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.themeToggle:hover{
    cursor: pointer;
}

.moon {
  background-color: transparent;
  box-shadow: -6px 1px 0 3px #275e8e;
  border-left:3px solid #27476D;
  border-radius:50%;
  width: 50px;
  height: 50px;
  margin-left:8px;
  margin-top:0px;
  transition: 2s;
}

.sun {
  background-color: #fdd462;
  box-shadow: 2px 0px 0px 1px #D19C29;
  border-radius:50%;
  width: 50px;
  height: 50px;
  transition: 2s;
}

.navbar {
  display: flex;
  align-items: center;
}

.navbarItems {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  gap: 2rem;
}

.navbarItems > li:last-child {
  border-bottom: none;
}

.navbarItems > li:hover {
  border-bottom: 1px solid var(--day-main-bg-color);
  transform: scale(1.1);
}

a:visited, a:link, a:active {
  color: inherit;
  text-decoration: none;
}

button {
  background-color: var(--night-main-bg-color);
  color: var(--main-font-color);
  font-weight: 800;
  font-size: 1.2rem;
  padding: 0.8rem 2.5rem;
  border: 2px solid var(--main-font-color);
}

button:active {
  background-color: var(--day-main-bg-color);
  color: var(--night-main-bg-color);
}

.downloadResume > a {
  width: 100%;
  height: auto;
}

/*------- Main -------*/
main {
  width: 100%;
  padding-top: 10rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10rem;
}

/*------- Rectangle -------*/
.rectangle {
  padding: 3rem 3rem;
  border-radius: 1rem;
  background-color: var(--rectangle-color);
}

/*------- Console -------*/

.consoleBody {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: var(--main-console-color);
  padding: 1.5rem;
  border-radius: 2rem;
  box-shadow: 11px 7px 16px 5px rgba(0,0,0,0.75);
  font-family: var(--sub-font);
}

.consoleTop {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.circle {
  height: 20px;
  width: 20px;
  border-radius: 50%;
}

.red {
  background-color: #ff5f56;
}

.yellow {
  background-color: #ffbd2e;
}

.green {
  background-color: #27c93f;
}

.consoleBottom {
  padding-bottom: 5rem;
  color: var(--main-font-color);
}

.consoleItems {
  list-style-type: none;
  margin-left: 1rem;
}

.purpleText {
  color: #9774bb;
}

.blueText {
  color: #4285f4;
}

.orangeText {
  color: #dbb17a;
}

/*------- Personal Info -------*/
.containerInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 750px;
  color: var(--main-font-color);
}

.containerInfo p {
  color: var(--sub-font-color);
}

.containerInfo h1 {
  font-size: 3rem;
}

.containerInfo h2 {
  color: #c5c5c4;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
}

.personalInfo {
  padding-bottom: 1rem;
}

.socialItems {
  display: flex;
  gap: 1rem;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
}

/*------- Skill&Tools Section -------*/
.division {
  height: 1px;
  min-width: 100%;
  background-color: var(--main-font-color);
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
}

section {
  margin-top: 13rem;
}

.sectionDescription {
  color: var(--sub-font-color);
  margin-top: 0.8rem;
}

/*------- Skill&Tools Section - Slider -------*/

.swiper-container {
  position: relative;
  width: 70%;
  margin: 0 auto;
  margin-top: 2rem;
}

.swiper-container .swiper-button-prev{
  left: -40px;
}

.swiper-container .swiper-button-next{
  right: -40px;
}

.swiper-button-prev,
.swiper-button-next {
  color: var(--main-font-color);
  font-size: 10px!important;
}

.swiper {
  max-width: 768px;
  display: flex;
}

.swiper-wrapper > * {
  aspect-ratio: 4/3;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1a2029;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  width: 100%;
  height: auto;
  padding: 2rem;
  gap: 1rem;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
  display: block;
  border-radius: .5rem;
}

/*------- Projects Section -------*/

.projectsContainer {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
}

.projectsWrapper {
  max-width: 400px;
  overflow: hidden;
  background: #1a2029;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.projectsWrapper img {
  width: 100%;
  height: 350px;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 1rem;
  object-fit: cover;
}

.projectsData {
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.projectsData h2 {
  margin-bottom: 0.6rem;
  color: var(--main-font-color);
}

.projectsData span {
  color: var(--sub-font-color);
  font-size: 0.9rem;
  flex-grow: 1;
}

.projectsLinks {
  margin-top: 1rem;
}

.projectsLinks ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.projectsLinks li i {
  margin-right: 1rem;
  color: var(--main-font-color);
}

.projectsLinks a img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
}

/*------- Contact Section -------*/

.contactContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
  margin-bottom: 15rem;
}

#contactForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  margin: 2rem auto 10rem auto;
  background: #1a2029;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 1.5rem;
}

label {
  display: block;
  margin-bottom: 1rem;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-sizing: border-box;
  resize: none;
}

/* Day Theme */
.dayMode {
  background-color: var(--day-main-bg-color);
  color: var(--day-font-color);
}

.dayMode > header {
  background-color: var(--day-main-bg-color);
  color: var(--day-font-color);
}

.dayMode * .navbarItems > li:hover {
  border-bottom: 1px solid var(--day-font-color);
}

.dayMode * .containerInfo {
  color: var(--day-font-color);
}

.dayMode * .containerInfo p {
  color: var(--day-sub-font-color);
}

.dayMode * .containerInfo h2 {
  color: #011b30;
}

.dayMode * .division {
  background-color: var(--day-font-color);
}

.dayMode * .swiper-slide {
  background: #e6e5e5;
  backdrop-filter: blur(5px);
  box-shadow: none;
}

.dayMode * .projectsWrapper {
  background: #e6e5e5;
  backdrop-filter: blur(5px);
  box-shadow: none;
}

.dayMode * .projectsWrapper * h2 {
  color: var(--night-main-bg-color);
}

.dayMode * .projectsWrapper * span{
  color: var(--day-sub-font-color);
}

.dayMode * .sectionDescription {
  color: var(--day-sub-font-color);
}

.dayMode * button {
  background-color: var(--day-main-bg-color);
  color: var(--night-main-bg-color);
  border-color: var(--night-main-bg-color);
}

.dayMode * button:active {
  background-color: var(--night-main-bg-color);
  color: var(--day-main-bg-color);
}

.dayMode * i:before  {
  color: var(--night-main-bg-color)
}

.dayMode * .bar {
  background-color: var(--night-main-bg-color);
}

.dayMode * .navbarItems.show {
  background-color: var(--day-main-bg-color);
}

.dayMode * #contactForm {
  background: #e6e5e5;
  backdrop-filter: blur(5px);
  box-shadow: none;
}

.dayMode .swiper-button-next:after,
.dayMode .swiper-button-prev:after {
  color: var(--night-main-bg-color);
}

/* Media Queries for responsiveness */
@media screen and (max-width: 1560px){
  body {
    margin: 0 5rem;
  }
}

@media screen and (max-width: 900px){
  body {
    margin: 0 2rem;
  }

  .navbarItems {
    display: none;
    flex-direction: row;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: var(--night-main-bg-color);
    border-bottom: 2px solid var(--wrap-bg-color);
    z-index: 1;
}

.navbarItems.show {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    position: fixed;
}

.navbarItems li {
    margin: 0;
    text-align: center;
    padding: 10px;
}

.navbarItems > li:hover {
  border-bottom: 1px solid var(--day-main-bg-color);
  transform: scale(1.1);
}

.navbar-toggle {
    display: block;
    cursor: pointer;
}

.bar {
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 7px 0;
    transition: 0.4s;
}

.navbarItems.show li {
    animation: slideIn 0.3s ease-in-out;
}

.downloadResume:hover {
  background-color: none;
}

#contactForm {
  margin-bottom: 5rem;
}

@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
}


@media screen and (max-width: 600px) {
  body {
    margin: 0 0.5rem;
  }

  header {
    padding: 0.5rem 0;
  }

  main {
    gap: 0rem;
    padding-top: 0;
  }

  section {
    margin-top: 0;
  }

  .navbarItems.show {
    margin-top: 0.5rem;
  }

  .rectangle {
    transform: scale(0.8);
  }

  .swiper-slide-description {
    font-size: 0.6rem;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.5rem;
  }

}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/*------- Import fonts -------*/\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  /*------- Color Variable -------*/\n  --button-border-color: #115e59;\n  --button-bg-color: #14b8a6;\n  --night-main-bg-color: #111111;\n  --day-main-bg-color: #fff;\n  --main-console-color: #011627;\n  --rectangle-color: #3f3f69;\n  --wrap-bg-color: #2f2f2f;\n  --wrap-border-color: #192028;\n  /*------- Font Color Variable -------*/\n  --main-font-color: #f5f5ed;\n  --sub-font-color: #BDBDBD;\n  --day-font-color: #011627;\n  --day-sub-font-color: #07263dea;\n  /*------- Font Variable -------*/\n  --main-font: 'Poppins', sans-serif;\n  --sub-font: 'Roboto Mono', monospace;\n}\n\n/*------- Night Theme -------*/\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0 11rem;\n  background-color: var(--night-main-bg-color);\n  font-family: var(--main-font);\n  color: var(--main-font-color);\n}\n\n/*------- Header -------*/\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  background-color: var(--night-main-bg-color);\n  color: var(--main-font-color);\n  font-size: 1.2rem;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  border-bottom: 2px solid var(--wrap-bg-color);\n}\n\n.themeToggle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.themeToggle:hover{\n    cursor: pointer;\n}\n\n.moon {\n  background-color: transparent;\n  box-shadow: -6px 1px 0 3px #275e8e;\n  border-left:3px solid #27476D;\n  border-radius:50%;\n  width: 50px;\n  height: 50px;\n  margin-left:8px;\n  margin-top:0px;\n  transition: 2s;\n}\n\n.sun {\n  background-color: #fdd462;\n  box-shadow: 2px 0px 0px 1px #D19C29;\n  border-radius:50%;\n  width: 50px;\n  height: 50px;\n  transition: 2s;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n}\n\n.navbarItems {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style-type: none;\n  gap: 2rem;\n}\n\n.navbarItems > li:last-child {\n  border-bottom: none;\n}\n\n.navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-main-bg-color);\n  transform: scale(1.1);\n}\n\na:visited, a:link, a:active {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton {\n  background-color: var(--night-main-bg-color);\n  color: var(--main-font-color);\n  font-weight: 800;\n  font-size: 1.2rem;\n  padding: 0.8rem 2.5rem;\n  border: 2px solid var(--main-font-color);\n}\n\nbutton:active {\n  background-color: var(--day-main-bg-color);\n  color: var(--night-main-bg-color);\n}\n\n.downloadResume > a {\n  width: 100%;\n  height: auto;\n}\n\n/*------- Main -------*/\nmain {\n  width: 100%;\n  padding-top: 10rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10rem;\n}\n\n/*------- Rectangle -------*/\n.rectangle {\n  padding: 3rem 3rem;\n  border-radius: 1rem;\n  background-color: var(--rectangle-color);\n}\n\n/*------- Console -------*/\n\n.consoleBody {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  background-color: var(--main-console-color);\n  padding: 1.5rem;\n  border-radius: 2rem;\n  box-shadow: 11px 7px 16px 5px rgba(0,0,0,0.75);\n  font-family: var(--sub-font);\n}\n\n.consoleTop {\n  display: flex;\n  gap: 0.8rem;\n  margin-bottom: 2rem;\n}\n\n.circle {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n}\n\n.red {\n  background-color: #ff5f56;\n}\n\n.yellow {\n  background-color: #ffbd2e;\n}\n\n.green {\n  background-color: #27c93f;\n}\n\n.consoleBottom {\n  padding-bottom: 5rem;\n  color: var(--main-font-color);\n}\n\n.consoleItems {\n  list-style-type: none;\n  margin-left: 1rem;\n}\n\n.purpleText {\n  color: #9774bb;\n}\n\n.blueText {\n  color: #4285f4;\n}\n\n.orangeText {\n  color: #dbb17a;\n}\n\n/*------- Personal Info -------*/\n.containerInfo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 750px;\n  color: var(--main-font-color);\n}\n\n.containerInfo p {\n  color: var(--sub-font-color);\n}\n\n.containerInfo h1 {\n  font-size: 3rem;\n}\n\n.containerInfo h2 {\n  color: #c5c5c4;\n  font-size: 1.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.personalInfo {\n  padding-bottom: 1rem;\n}\n\n.socialItems {\n  display: flex;\n  gap: 1rem;\n  flex-direction: row;\n  list-style-type: none;\n  align-items: center;\n}\n\n/*------- Skill&Tools Section -------*/\n.division {\n  height: 1px;\n  min-width: 100%;\n  background-color: var(--main-font-color);\n  margin-bottom: 2.5rem;\n  margin-top: 2.5rem;\n}\n\nsection {\n  margin-top: 13rem;\n}\n\n.sectionDescription {\n  color: var(--sub-font-color);\n  margin-top: 0.8rem;\n}\n\n/*------- Skill&Tools Section - Slider -------*/\n\n.swiper-container {\n  position: relative;\n  width: 70%;\n  margin: 0 auto;\n  margin-top: 2rem;\n}\n\n.swiper-container .swiper-button-prev{\n  left: -40px;\n}\n\n.swiper-container .swiper-button-next{\n  right: -40px;\n}\n\n.swiper-button-prev,\n.swiper-button-next {\n  color: var(--main-font-color);\n  font-size: 10px!important;\n}\n\n.swiper {\n  max-width: 768px;\n  display: flex;\n}\n\n.swiper-wrapper > * {\n  aspect-ratio: 4/3;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #1a2029;\n  backdrop-filter: blur(5px);\n  border-radius: 10px;\n  width: 100%;\n  height: auto;\n  padding: 2rem;\n  gap: 1rem;\n}\n\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  min-width: 50px;\n  min-height: 50px;\n  display: block;\n  border-radius: .5rem;\n}\n\n/*------- Projects Section -------*/\n\n.projectsContainer {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin: 2rem 0;\n}\n\n.projectsWrapper {\n  max-width: 400px;\n  overflow: hidden;\n  background: #1a2029;\n  backdrop-filter: blur(5px);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.projectsWrapper img {\n  width: 100%;\n  height: 350px;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  padding: 1rem;\n  object-fit: cover;\n}\n\n.projectsData {\n  padding: 1rem;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.projectsData h2 {\n  margin-bottom: 0.6rem;\n  color: var(--main-font-color);\n}\n\n.projectsData span {\n  color: var(--sub-font-color);\n  font-size: 0.9rem;\n  flex-grow: 1;\n}\n\n.projectsLinks {\n  margin-top: 1rem;\n}\n\n.projectsLinks ul {\n  list-style: none;\n  padding: 0;\n  display: flex;\n}\n\n.projectsLinks li i {\n  margin-right: 1rem;\n  color: var(--main-font-color);\n}\n\n.projectsLinks a img {\n  width: 100%;\n  height: auto;\n  border-radius: 50%;\n  transition: transform 0.2s ease-in-out;\n}\n\n/*------- Contact Section -------*/\n\n.contactContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  flex-wrap: wrap;\n  margin-bottom: 15rem;\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 40rem;\n  margin: 2rem auto 10rem auto;\n  background: #1a2029;\n  backdrop-filter: blur(5px);\n  border-radius: 10px;\n  padding: 1.5rem;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\ninput, textarea {\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  box-sizing: border-box;\n  resize: none;\n}\n\n/* Day Theme */\n.dayMode {\n  background-color: var(--day-main-bg-color);\n  color: var(--day-font-color);\n}\n\n.dayMode > header {\n  background-color: var(--day-main-bg-color);\n  color: var(--day-font-color);\n}\n\n.dayMode * .navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-font-color);\n}\n\n.dayMode * .containerInfo {\n  color: var(--day-font-color);\n}\n\n.dayMode * .containerInfo p {\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * .containerInfo h2 {\n  color: #011b30;\n}\n\n.dayMode * .division {\n  background-color: var(--day-font-color);\n}\n\n.dayMode * .swiper-slide {\n  background: #e6e5e5;\n  backdrop-filter: blur(5px);\n  box-shadow: none;\n}\n\n.dayMode * .projectsWrapper {\n  background: #e6e5e5;\n  backdrop-filter: blur(5px);\n  box-shadow: none;\n}\n\n.dayMode * .projectsWrapper * h2 {\n  color: var(--night-main-bg-color);\n}\n\n.dayMode * .projectsWrapper * span{\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * .sectionDescription {\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * button {\n  background-color: var(--day-main-bg-color);\n  color: var(--night-main-bg-color);\n  border-color: var(--night-main-bg-color);\n}\n\n.dayMode * button:active {\n  background-color: var(--night-main-bg-color);\n  color: var(--day-main-bg-color);\n}\n\n.dayMode * i:before  {\n  color: var(--night-main-bg-color)\n}\n\n.dayMode * .bar {\n  background-color: var(--night-main-bg-color);\n}\n\n.dayMode * .navbarItems.show {\n  background-color: var(--day-main-bg-color);\n}\n\n.dayMode * #contactForm {\n  background: #e6e5e5;\n  backdrop-filter: blur(5px);\n  box-shadow: none;\n}\n\n.dayMode .swiper-button-next:after,\n.dayMode .swiper-button-prev:after {\n  color: var(--night-main-bg-color);\n}\n\n/* Media Queries for responsiveness */\n@media screen and (max-width: 1560px){\n  body {\n    margin: 0 5rem;\n  }\n}\n\n@media screen and (max-width: 900px){\n  body {\n    margin: 0 2rem;\n  }\n\n  .navbarItems {\n    display: none;\n    flex-direction: row;\n    position: absolute;\n    top: 60px;\n    left: 0;\n    width: 100%;\n    background-color: var(--night-main-bg-color);\n    border-bottom: 2px solid var(--wrap-bg-color);\n    z-index: 1;\n}\n\n.navbarItems.show {\n    display: flex;\n    flex-direction: column;\n    margin-top: 1.5rem;\n    position: fixed;\n}\n\n.navbarItems li {\n    margin: 0;\n    text-align: center;\n    padding: 10px;\n}\n\n.navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-main-bg-color);\n  transform: scale(1.1);\n}\n\n.navbar-toggle {\n    display: block;\n    cursor: pointer;\n}\n\n.bar {\n    width: 30px;\n    height: 3px;\n    background-color: #fff;\n    margin: 7px 0;\n    transition: 0.4s;\n}\n\n.navbarItems.show li {\n    animation: slideIn 0.3s ease-in-out;\n}\n\n.downloadResume:hover {\n  background-color: none;\n}\n\n#contactForm {\n  margin-bottom: 5rem;\n}\n\n@keyframes slideIn {\n    from {\n        transform: translateY(-20px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n}\n\n\n@media screen and (max-width: 600px) {\n  body {\n    margin: 0 0.5rem;\n  }\n\n  header {\n    padding: 0.5rem 0;\n  }\n\n  main {\n    gap: 0rem;\n    padding-top: 0;\n  }\n\n  section {\n    margin-top: 0;\n  }\n\n  .navbarItems.show {\n    margin-top: 0.5rem;\n  }\n\n  .rectangle {\n    transform: scale(0.8);\n  }\n\n  .swiper-slide-description {\n    font-size: 0.6rem;\n  }\n\n  .swiper-button-next:after,\n  .swiper-button-prev:after {\n    font-size: 1.5rem;\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _scripts_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/carousel */ "./src/scripts/carousel.js");
/* harmony import */ var _scripts_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_daynight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/daynight */ "./src/scripts/daynight.js");
/* harmony import */ var _scripts_daynight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_daynight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/navbar */ "./src/scripts/navbar.js");
/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_navbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/email */ "./src/scripts/email.js");
/* harmony import */ var _scripts_email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_typeeffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/typeeffect */ "./src/scripts/typeeffect.js");
/* harmony import */ var _scripts_typeeffect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_typeeffect__WEBPACK_IMPORTED_MODULE_5__);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDbEQsSUFBTUMsTUFBTSxHQUFHLElBQUlDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7SUFDbkM7SUFDQUMsU0FBUyxFQUFFLFlBQVk7SUFDdkJDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGFBQWEsRUFBRSxDQUFDO0lBQ2hCQyxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsUUFBUSxFQUFFO01BQ1JDLEtBQUssRUFBRSxJQUFJO01BQUU7TUFDYkMsb0JBQW9CLEVBQUUsS0FBSyxDQUFFO0lBQy9CLENBQUM7SUFFRDtJQUNBQyxVQUFVLEVBQUU7TUFDVkMsRUFBRSxFQUFFO0lBQ04sQ0FBQztJQUVEO0lBQ0FDLFVBQVUsRUFBRTtNQUNWQyxNQUFNLEVBQUUscUJBQXFCO01BQzdCQyxNQUFNLEVBQUU7SUFDVixDQUFDO0lBRUQ7SUFDQUMsU0FBUyxFQUFFO01BQ1RKLEVBQUUsRUFBRTtJQUNOO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDNUJGWixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaEQsSUFBTWdCLEtBQUssR0FBR2pCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFFcERELEtBQUssQ0FBQ2hCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ2xDLElBQU1rQixJQUFJLEdBQUduQixRQUFRLENBQUNvQixjQUFjLENBQUMsS0FBSyxDQUFDO0lBQzNDLElBQUlELElBQUksQ0FBQ0UsU0FBUyxLQUFLLEtBQUssRUFBRTtNQUMxQkYsSUFBSSxDQUFDRSxTQUFTLEdBQUcsTUFBTTtNQUN2QnJCLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ3pDeEIsUUFBUSxDQUFDc0IsSUFBSSxDQUFDQyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFDeEN6QixRQUFRLENBQUNzQixJQUFJLENBQUNJLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLE1BQU07SUFDM0MsQ0FBQyxNQUFNO01BQ0hSLElBQUksQ0FBQ0UsU0FBUyxHQUFHLEtBQUs7TUFDdEJyQixRQUFRLENBQUNzQixJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFdBQVcsQ0FBQztNQUMzQ3hCLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxHQUFHLENBQUMsU0FBUyxDQUFDO01BQ3RDekIsUUFBUSxDQUFDc0IsSUFBSSxDQUFDSSxLQUFLLENBQUNDLFVBQVUsR0FBRyxNQUFNO0lBQzNDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDakJGQyxPQUFPLENBQUNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztBQUVqQ0MsTUFBTSxDQUFDQyxNQUFNLEdBQUcsWUFBVztFQUN2Qi9CLFFBQVEsQ0FBQ29CLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFTK0IsS0FBSyxFQUFFO0lBQzlFQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCO0lBQ0EsSUFBSSxDQUFDQyxjQUFjLENBQUNDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDO0lBQ3REO0lBQ0FULE9BQU8sQ0FBQ1UsUUFBUSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUN4REMsSUFBSSxDQUFDLFlBQU07TUFDUkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUMsRUFBRSxVQUFDQyxLQUFLLEVBQUs7TUFDVkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFQyxLQUFLLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0VBQ1YsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7OztBQ2ZEMUMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hELElBQU0wQyxZQUFZLEdBQUczQyxRQUFRLENBQUNvQixjQUFjLENBQUMsZUFBZSxDQUFDO0VBQzdELElBQU13QixXQUFXLEdBQUc1QyxRQUFRLENBQUNrQixhQUFhLENBQUMsY0FBYyxDQUFDO0VBRTFEeUIsWUFBWSxDQUFDMUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDekMyQyxXQUFXLENBQUNyQixTQUFTLENBQUNzQixNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3hDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQ1BGN0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hELElBQU02QyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDLFdBQVcsRUFBQztJQUNoQ0MsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7SUFDN0JDLFNBQVMsRUFBRTtFQUNmLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xGO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywrRkFBK0YsUUFBUSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8s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V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDQTtBQUNBO0FBQ0Y7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL1BvcnRvZm9saW8vLi9zcmMvc2NyaXB0cy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vc3JjL3NjcmlwdHMvZGF5bmlnaHQuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9zY3JpcHRzL2VtYWlsLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9zcmMvc2NyaXB0cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9zY3JpcHRzL3R5cGVlZmZlY3QuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1BvcnRvZm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICBsb29wOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDIwMDAsIC8vIFNldCB0aGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzICgzIHNlY29uZHMgaW4gdGhpcyBleGFtcGxlKVxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLCAvLyBBbGxvdyBuYXZpZ2F0aW9uIHdoaWxlIGF1dG9wbGF5aW5nXG4gICAgfSxcbiAgXG4gICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIH0sXG4gIFxuICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICBcbiAgICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgIH0sXG4gIH0pO1xufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lVG9nZ2xlJyk7XG5cbiAgICBjaWNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9vbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VuXCIpO1xuICAgICAgICBpZiAobW9vbi5jbGFzc05hbWUgPT09IFwic3VuXCIpIHtcbiAgICAgICAgICAgIG1vb24uY2xhc3NOYW1lID0gXCJtb29uXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXlNb2RlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibmlnaHRNb2RlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9vbi5jbGFzc05hbWUgPSBcInN1blwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibmlnaHRNb2RlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZGF5TW9kZVwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICcwLjJzJztcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiZW1haWxqcy5pbml0KCdkWmdTRmtIN3RoMnYtcWxIZycpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZ2VuZXJhdGUgYSBmaXZlIGRpZ2l0IG51bWJlciBmb3IgdGhlIGNvbnRhY3RfbnVtYmVyIHZhcmlhYmxlXG4gICAgICAgIHRoaXMuY29udGFjdF9udW1iZXIudmFsdWUgPSBNYXRoLnJhbmRvbSgpICogMTAwMDAwIHwgMDtcbiAgICAgICAgLy8gdGhlc2UgSURzIGZyb20gdGhlIHByZXZpb3VzIHN0ZXBzXG4gICAgICAgIGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2VfNGJ5bHdwaycsICd0ZW1wbGF0ZV92c3N1ZndrJywgdGhpcylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTUyEnKTtcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGQUlMRUQuLi4nLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn0iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IG5hdmJhclRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXItdG9nZ2xlJyk7XG4gICAgY29uc3QgbmF2YmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFySXRlbXMnKTtcblxuICAgIG5hdmJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmF2YmFySXRlbXMuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIH0pO1xufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHR5cGVkID0gbmV3IFR5cGVkKFwiI3R5cGVUZXh0XCIse1xuICAgICAgICBzdHJpbmdzOiBbXCJSaWNhcmRvIENhcnZhbGhvXCJdLFxuICAgICAgICB0eXBlU3BlZWQ6IDEwMCxcbiAgICB9KVxufSk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qLS0tLS0tLSBJbXBvcnQgZm9udHMgLS0tLS0tLSovXG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAvKi0tLS0tLS0gQ29sb3IgVmFyaWFibGUgLS0tLS0tLSovXG4gIC0tYnV0dG9uLWJvcmRlci1jb2xvcjogIzExNWU1OTtcbiAgLS1idXR0b24tYmctY29sb3I6ICMxNGI4YTY7XG4gIC0tbmlnaHQtbWFpbi1iZy1jb2xvcjogIzExMTExMTtcbiAgLS1kYXktbWFpbi1iZy1jb2xvcjogI2ZmZjtcbiAgLS1tYWluLWNvbnNvbGUtY29sb3I6ICMwMTE2Mjc7XG4gIC0tcmVjdGFuZ2xlLWNvbG9yOiAjM2YzZjY5O1xuICAtLXdyYXAtYmctY29sb3I6ICMyZjJmMmY7XG4gIC0td3JhcC1ib3JkZXItY29sb3I6ICMxOTIwMjg7XG4gIC8qLS0tLS0tLSBGb250IENvbG9yIFZhcmlhYmxlIC0tLS0tLS0qL1xuICAtLW1haW4tZm9udC1jb2xvcjogI2Y1ZjVlZDtcbiAgLS1zdWItZm9udC1jb2xvcjogI0JEQkRCRDtcbiAgLS1kYXktZm9udC1jb2xvcjogIzAxMTYyNztcbiAgLS1kYXktc3ViLWZvbnQtY29sb3I6ICMwNzI2M2RlYTtcbiAgLyotLS0tLS0tIEZvbnQgVmFyaWFibGUgLS0tLS0tLSovXG4gIC0tbWFpbi1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIC0tc3ViLWZvbnQ6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbn1cblxuLyotLS0tLS0tIE5pZ2h0IFRoZW1lIC0tLS0tLS0qL1xuXG5odG1sLFxuYm9keSB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwIDExcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xufVxuXG4vKi0tLS0tLS0gSGVhZGVyIC0tLS0tLS0qL1xuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdyYXAtYmctY29sb3IpO1xufVxuXG4udGhlbWVUb2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLnRoZW1lVG9nZ2xlOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogLTZweCAxcHggMCAzcHggIzI3NWU4ZTtcbiAgYm9yZGVyLWxlZnQ6M3B4IHNvbGlkICMyNzQ3NkQ7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDo4cHg7XG4gIG1hcmdpbi10b3A6MHB4O1xuICB0cmFuc2l0aW9uOiAycztcbn1cblxuLnN1biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGQ0NjI7XG4gIGJveC1zaGFkb3c6IDJweCAwcHggMHB4IDFweCAjRDE5QzI5O1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdHJhbnNpdGlvbjogMnM7XG59XG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2YmFySXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBnYXA6IDJyZW07XG59XG5cbi5uYXZiYXJJdGVtcyA+IGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuYTp2aXNpdGVkLCBhOmxpbmssIGE6YWN0aXZlIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogMC44cmVtIDIuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xufVxuXG4uZG93bmxvYWRSZXN1bWUgPiBhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyotLS0tLS0tIE1haW4gLS0tLS0tLSovXG5tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHJlbTtcbn1cblxuLyotLS0tLS0tIFJlY3RhbmdsZSAtLS0tLS0tKi9cbi5yZWN0YW5nbGUge1xuICBwYWRkaW5nOiAzcmVtIDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlY3RhbmdsZS1jb2xvcik7XG59XG5cbi8qLS0tLS0tLSBDb25zb2xlIC0tLS0tLS0qL1xuXG4uY29uc29sZUJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb25zb2xlLWNvbG9yKTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBib3gtc2hhZG93OiAxMXB4IDdweCAxNnB4IDVweCByZ2JhKDAsMCwwLDAuNzUpO1xuICBmb250LWZhbWlseTogdmFyKC0tc3ViLWZvbnQpO1xufVxuXG4uY29uc29sZVRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY2lyY2xlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWY1Njtcbn1cblxuLnllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJkMmU7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2M5M2Y7XG59XG5cbi5jb25zb2xlQm90dG9tIHtcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xufVxuXG4uY29uc29sZUl0ZW1zIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnB1cnBsZVRleHQge1xuICBjb2xvcjogIzk3NzRiYjtcbn1cblxuLmJsdWVUZXh0IHtcbiAgY29sb3I6ICM0Mjg1ZjQ7XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6ICNkYmIxN2E7XG59XG5cbi8qLS0tLS0tLSBQZXJzb25hbCBJbmZvIC0tLS0tLS0qL1xuLmNvbnRhaW5lckluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG59XG5cbi5jb250YWluZXJJbmZvIHAge1xuICBjb2xvcjogdmFyKC0tc3ViLWZvbnQtY29sb3IpO1xufVxuXG4uY29udGFpbmVySW5mbyBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmNvbnRhaW5lckluZm8gaDIge1xuICBjb2xvcjogI2M1YzVjNDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbi5wZXJzb25hbEluZm8ge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLnNvY2lhbEl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qLS0tLS0tLSBTa2lsbCZUb29scyBTZWN0aW9uIC0tLS0tLS0qL1xuLmRpdmlzaW9uIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxM3JlbTtcbn1cblxuLnNlY3Rpb25EZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1zdWItZm9udC1jb2xvcik7XG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcbn1cblxuLyotLS0tLS0tIFNraWxsJlRvb2xzIFNlY3Rpb24gLSBTbGlkZXIgLS0tLS0tLSovXG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1idXR0b24tcHJldntcbiAgbGVmdDogLTQwcHg7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLW5leHR7XG4gIHJpZ2h0OiAtNDBweDtcbn1cblxuLnN3aXBlci1idXR0b24tcHJldixcbi5zd2lwZXItYnV0dG9uLW5leHQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcbn1cblxuLnN3aXBlciB7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zd2lwZXItd3JhcHBlciA+ICoge1xuICBhc3BlY3QtcmF0aW86IDQvMztcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMWEyMDI5O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMnJlbTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xufVxuXG4vKi0tLS0tLS0gUHJvamVjdHMgU2VjdGlvbiAtLS0tLS0tKi9cblxuLnByb2plY3RzQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMnJlbTtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG5cbi5wcm9qZWN0c1dyYXBwZXIge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjMWEyMDI5O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3RzV3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnByb2plY3RzRGF0YSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3RzRGF0YSBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG59XG5cbi5wcm9qZWN0c0RhdGEgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1zdWItZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5wcm9qZWN0c0xpbmtzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnByb2plY3RzTGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvamVjdHNMaW5rcyBsaSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuLnByb2plY3RzTGlua3MgYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4vKi0tLS0tLS0gQ29udGFjdCBTZWN0aW9uIC0tLS0tLS0qL1xuXG4uY29udGFjdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDE1cmVtO1xufVxuXG4jY29udGFjdEZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQwcmVtO1xuICBtYXJnaW46IDJyZW0gYXV0byAxMHJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMWEyMDI5O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcmVzaXplOiBub25lO1xufVxuXG4vKiBEYXkgVGhlbWUgKi9cbi5kYXlNb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSA+IGhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXktZm9udC1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLmNvbnRhaW5lckluZm8ge1xuICBjb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5jb250YWluZXJJbmZvIHAge1xuICBjb2xvcjogdmFyKC0tZGF5LXN1Yi1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAuY29udGFpbmVySW5mbyBoMiB7XG4gIGNvbG9yOiAjMDExYjMwO1xufVxuXG4uZGF5TW9kZSAqIC5kaXZpc2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAuc3dpcGVyLXNsaWRlIHtcbiAgYmFja2dyb3VuZDogI2U2ZTVlNTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kYXlNb2RlICogLnByb2plY3RzV3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNlNmU1ZTU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZGF5TW9kZSAqIC5wcm9qZWN0c1dyYXBwZXIgKiBoMiB7XG4gIGNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAucHJvamVjdHNXcmFwcGVyICogc3BhbntcbiAgY29sb3I6IHZhcigtLWRheS1zdWItZm9udC1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLnNlY3Rpb25EZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXktc3ViLWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiBpOmJlZm9yZSAge1xuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcilcbn1cblxuLmRheU1vZGUgKiAuYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLm5hdmJhckl0ZW1zLnNob3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogI2NvbnRhY3RGb3JtIHtcbiAgYmFja2dyb3VuZDogI2U2ZTVlNTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kYXlNb2RlIC5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsXG4uZGF5TW9kZSAuc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzIGZvciByZXNwb25zaXZlbmVzcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU2MHB4KXtcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwIDVyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xuICBib2R5IHtcbiAgICBtYXJnaW46IDAgMnJlbTtcbiAgfVxuXG4gIC5uYXZiYXJJdGVtcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td3JhcC1iZy1jb2xvcik7XG4gICAgei1pbmRleDogMTtcbn1cblxuLm5hdmJhckl0ZW1zLnNob3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4ubmF2YmFySXRlbXMgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLm5hdmJhckl0ZW1zID4gbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5uYXZiYXItdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYXIge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiA3cHggMDtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubmF2YmFySXRlbXMuc2hvdyBsaSB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb3dubG9hZFJlc3VtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbiNjb250YWN0Rm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBtYXJnaW46IDAgMC41cmVtO1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgfVxuXG4gIG1haW4ge1xuICAgIGdhcDogMHJlbTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAubmF2YmFySXRlbXMuc2hvdyB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB9XG5cbiAgLnJlY3RhbmdsZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cblxuICAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLFxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtCQUErQjs7QUFFL0I7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0VBQ2xDLG9DQUFvQztBQUN0Qzs7QUFFQSw4QkFBOEI7O0FBRTlCOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw0Q0FBNEM7RUFDNUMsNkJBQTZCO0VBQzdCLDZCQUE2QjtBQUMvQjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0VBQ1osNkNBQTZDO0FBQy9DOztB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ckM7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLDRDQUE0QztJQUM1Qyw2Q0FBNkM7SUFDN0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtRQUM1QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7QUFDSjtBQUNBOzs7QUFHQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsU0FBUztJQUNULGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0tLS0tLSBJbXBvcnQgZm9udHMgLS0tLS0tLSovXFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC8qLS0tLS0tLSBDb2xvciBWYXJpYWJsZSAtLS0tLS0tKi9cXG4gIC0tYnV0dG9uLWJvcmRlci1jb2xvcjogIzExNWU1OTtcXG4gIC0tYnV0dG9uLWJnLWNvbG9yOiAjMTRiOGE2O1xcbiAgLS1uaWdodC1tYWluLWJnLWNvbG9yOiAjMTExMTExO1xcbiAgLS1kYXktbWFpbi1iZy1jb2xvcjogI2ZmZjtcXG4gIC0tbWFpbi1jb25zb2xlLWNvbG9yOiAjMDExNjI3O1xcbiAgLS1yZWN0YW5nbGUtY29sb3I6ICMzZjNmNjk7XFxuICAtLXdyYXAtYmctY29sb3I6ICMyZjJmMmY7XFxuICAtLXdyYXAtYm9yZGVyLWNvbG9yOiAjMTkyMDI4O1xcbiAgLyotLS0tLS0tIEZvbnQgQ29sb3IgVmFyaWFibGUgLS0tLS0tLSovXFxuICAtLW1haW4tZm9udC1jb2xvcjogI2Y1ZjVlZDtcXG4gIC0tc3ViLWZvbnQtY29sb3I6ICNCREJEQkQ7XFxuICAtLWRheS1mb250LWNvbG9yOiAjMDExNjI3O1xcbiAgLS1kYXktc3ViLWZvbnQtY29sb3I6ICMwNzI2M2RlYTtcXG4gIC8qLS0tLS0tLSBGb250IFZhcmlhYmxlIC0tLS0tLS0qL1xcbiAgLS1tYWluLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIC0tc3ViLWZvbnQ6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyotLS0tLS0tIE5pZ2h0IFRoZW1lIC0tLS0tLS0qL1xcblxcbmh0bWwsXFxuYm9keSB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAgMTFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi8qLS0tLS0tLSBIZWFkZXIgLS0tLS0tLSovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td3JhcC1iZy1jb2xvcik7XFxufVxcblxcbi50aGVtZVRvZ2dsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRoZW1lVG9nZ2xlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogLTZweCAxcHggMCAzcHggIzI3NWU4ZTtcXG4gIGJvcmRlci1sZWZ0OjNweCBzb2xpZCAjMjc0NzZEO1xcbiAgYm9yZGVyLXJhZGl1czo1MCU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1sZWZ0OjhweDtcXG4gIG1hcmdpbi10b3A6MHB4O1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcblxcbi5zdW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDQ2MjtcXG4gIGJveC1zaGFkb3c6IDJweCAwcHggMHB4IDFweCAjRDE5QzI5O1xcbiAgYm9yZGVyLXJhZGl1czo1MCU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2YmFySXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLm5hdmJhckl0ZW1zID4gbGk6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4ubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5hOnZpc2l0ZWQsIGE6bGluaywgYTphY3RpdmUge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC44cmVtIDIuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4uZG93bmxvYWRSZXN1bWUgPiBhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKi0tLS0tLS0gTWFpbiAtLS0tLS0tKi9cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTByZW07XFxufVxcblxcbi8qLS0tLS0tLSBSZWN0YW5nbGUgLS0tLS0tLSovXFxuLnJlY3RhbmdsZSB7XFxuICBwYWRkaW5nOiAzcmVtIDNyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVjdGFuZ2xlLWNvbG9yKTtcXG59XFxuXFxuLyotLS0tLS0tIENvbnNvbGUgLS0tLS0tLSovXFxuXFxuLmNvbnNvbGVCb2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbnNvbGUtY29sb3IpO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDExcHggN3B4IDE2cHggNXB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tc3ViLWZvbnQpO1xcbn1cXG5cXG4uY29uc29sZVRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjhyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVmNTY7XFxufVxcblxcbi55ZWxsb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmQyZTtcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2M5M2Y7XFxufVxcblxcbi5jb25zb2xlQm90dG9tIHtcXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi5jb25zb2xlSXRlbXMge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wdXJwbGVUZXh0IHtcXG4gIGNvbG9yOiAjOTc3NGJiO1xcbn1cXG5cXG4uYmx1ZVRleHQge1xcbiAgY29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi5vcmFuZ2VUZXh0IHtcXG4gIGNvbG9yOiAjZGJiMTdhO1xcbn1cXG5cXG4vKi0tLS0tLS0gUGVyc29uYWwgSW5mbyAtLS0tLS0tKi9cXG4uY29udGFpbmVySW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA3NTBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY29udGFpbmVySW5mbyBwIHtcXG4gIGNvbG9yOiB2YXIoLS1zdWItZm9udC1jb2xvcik7XFxufVxcblxcbi5jb250YWluZXJJbmZvIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmNvbnRhaW5lckluZm8gaDIge1xcbiAgY29sb3I6ICNjNWM1YzQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5wZXJzb25hbEluZm8ge1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5zb2NpYWxJdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qLS0tLS0tLSBTa2lsbCZUb29scyBTZWN0aW9uIC0tLS0tLS0qL1xcbi5kaXZpc2lvbiB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxuICBtYXJnaW4tdG9wOiAyLjVyZW07XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogMTNyZW07XFxufVxcblxcbi5zZWN0aW9uRGVzY3JpcHRpb24ge1xcbiAgY29sb3I6IHZhcigtLXN1Yi1mb250LWNvbG9yKTtcXG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcXG59XFxuXFxuLyotLS0tLS0tIFNraWxsJlRvb2xzIFNlY3Rpb24gLSBTbGlkZXIgLS0tLS0tLSovXFxuXFxuLnN3aXBlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1idXR0b24tcHJldntcXG4gIGxlZnQ6IC00MHB4O1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1uZXh0e1xcbiAgcmlnaHQ6IC00MHB4O1xcbn1cXG5cXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LFxcbi5zd2lwZXItYnV0dG9uLW5leHQge1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDEwcHghaW1wb3J0YW50O1xcbn1cXG5cXG4uc3dpcGVyIHtcXG4gIG1heC13aWR0aDogNzY4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc3dpcGVyLXdyYXBwZXIgPiAqIHtcXG4gIGFzcGVjdC1yYXRpbzogNC8zO1xcbn1cXG5cXG4uc3dpcGVyLXNsaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzFhMjAyOTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnN3aXBlci1zbGlkZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG59XFxuXFxuLyotLS0tLS0tIFByb2plY3RzIFNlY3Rpb24gLS0tLS0tLSovXFxuXFxuLnByb2plY3RzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxufVxcblxcbi5wcm9qZWN0c1dyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjMWEyMDI5O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0c1dyYXBwZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5wcm9qZWN0c0RhdGEge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdHNEYXRhIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdHNEYXRhIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLXN1Yi1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ucHJvamVjdHNMaW5rcyB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHNMaW5rcyB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0c0xpbmtzIGxpIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0c0xpbmtzIGEgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qLS0tLS0tLSBDb250YWN0IFNlY3Rpb24gLS0tLS0tLSovXFxuXFxuLmNvbnRhY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tYm90dG9tOiAxNXJlbTtcXG59XFxuXFxuI2NvbnRhY3RGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNDByZW07XFxuICBtYXJnaW46IDJyZW0gYXV0byAxMHJlbSBhdXRvO1xcbiAgYmFja2dyb3VuZDogIzFhMjAyOTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi8qIERheSBUaGVtZSAqL1xcbi5kYXlNb2RlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXktZm9udC1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlID4gaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXktZm9udC1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLm5hdmJhckl0ZW1zID4gbGk6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRheS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAuY29udGFpbmVySW5mbyB7XFxuICBjb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5jb250YWluZXJJbmZvIHAge1xcbiAgY29sb3I6IHZhcigtLWRheS1zdWItZm9udC1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLmNvbnRhaW5lckluZm8gaDIge1xcbiAgY29sb3I6ICMwMTFiMzA7XFxufVxcblxcbi5kYXlNb2RlICogLmRpdmlzaW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAuc3dpcGVyLXNsaWRlIHtcXG4gIGJhY2tncm91bmQ6ICNlNmU1ZTU7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5kYXlNb2RlICogLnByb2plY3RzV3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjZTZlNWU1O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5wcm9qZWN0c1dyYXBwZXIgKiBoMiB7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLnByb2plY3RzV3JhcHBlciAqIHNwYW57XFxuICBjb2xvcjogdmFyKC0tZGF5LXN1Yi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAuc2VjdGlvbkRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXktc3ViLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIGk6YmVmb3JlICB7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcilcXG59XFxuXFxuLmRheU1vZGUgKiAuYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5uYXZiYXJJdGVtcy5zaG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAjY29udGFjdEZvcm0ge1xcbiAgYmFja2dyb3VuZDogI2U2ZTVlNTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmRheU1vZGUgLnN3aXBlci1idXR0b24tbmV4dDphZnRlcixcXG4uZGF5TW9kZSAuc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG59XFxuXFxuLyogTWVkaWEgUXVlcmllcyBmb3IgcmVzcG9uc2l2ZW5lc3MgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTYwcHgpe1xcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMCA1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwIDJyZW07XFxuICB9XFxuXFxuICAubmF2YmFySXRlbXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td3JhcC1iZy1jb2xvcik7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5uYXZiYXJJdGVtcy5zaG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5uYXZiYXJJdGVtcyBsaSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubmF2YmFyLXRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iYXIge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbjogN3B4IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5uYXZiYXJJdGVtcy5zaG93IGxpIHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kb3dubG9hZFJlc3VtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbn1cXG5cXG4jY29udGFjdEZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBnYXA6IDByZW07XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgfVxcblxcbiAgc2VjdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuXFxuICAubmF2YmFySXRlbXMuc2hvdyB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5yZWN0YW5nbGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICB9XFxuXFxuICAuc3dpcGVyLXNsaWRlLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICB9XFxuXFxuICAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLFxcbiAgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvY2Fyb3VzZWwnO1xuaW1wb3J0ICcuL3NjcmlwdHMvZGF5bmlnaHQnO1xuaW1wb3J0ICcuL3NjcmlwdHMvbmF2YmFyJztcbmltcG9ydCAnLi9zY3JpcHRzL2VtYWlsJztcbmltcG9ydCAnLi9zY3JpcHRzL3R5cGVlZmZlY3QnOyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzd2lwZXIiLCJTd2lwZXIiLCJkaXJlY3Rpb24iLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhZ2luYXRpb24iLCJlbCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJzY3JvbGxiYXIiLCJjaWNsZSIsInF1ZXJ5U2VsZWN0b3IiLCJtb29uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc05hbWUiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiZW1haWxqcyIsImluaXQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29udGFjdF9udW1iZXIiLCJ2YWx1ZSIsIk1hdGgiLCJyYW5kb20iLCJzZW5kRm9ybSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJuYXZiYXJUb2dnbGUiLCJuYXZiYXJJdGVtcyIsInRvZ2dsZSIsInR5cGVkIiwiVHlwZWQiLCJzdHJpbmdzIiwidHlwZVNwZWVkIl0sInNvdXJjZVJvb3QiOiIifQ==