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
  flex-direction: row;
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

button:hover {
  background-color: var(--day-main-bg-color);
  color: var(--night-main-bg-color);
  transform: scale(1.03);
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
  color: orange;
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

/* Animations */

i:hover {
  transform: scale(1.1);
  color: orange;
}

.projectsData * i:hover {
  transform: scale(1.1);
  color: orange;
}

img:hover {
  transform: scale(1.1);
}

.themeToggle:hover {
  transform: scale(1.1);
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

.dayMode .containerInfo #typeText {
  color: var(--rectangle-color);
}

.dayMode .typed-cursor {
  color: var(--rectangle-color);
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

.dayMode * button:hover {
  background-color: var(--night-main-bg-color);
  color: var(--day-main-bg-color);
  transform: scale(1.03);
}

.dayMode *:before {
  color: var(--night-main-bg-color);
}

.dayMode i:hover:before {
  color: var(--rectangle-color);
}

.dayMode .projectsData i:hover:before {
  color: var(--rectangle-color);
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/*------- Import fonts -------*/\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  /*------- Color Variable -------*/\n  --button-border-color: #115e59;\n  --button-bg-color: #14b8a6;\n  --night-main-bg-color: #111111;\n  --day-main-bg-color: #fff;\n  --main-console-color: #011627;\n  --rectangle-color: #3f3f69;\n  --wrap-bg-color: #2f2f2f;\n  --wrap-border-color: #192028;\n  /*------- Font Color Variable -------*/\n  --main-font-color: #f5f5ed;\n  --sub-font-color: #BDBDBD;\n  --day-font-color: #011627;\n  --day-sub-font-color: #07263dea;\n  /*------- Font Variable -------*/\n  --main-font: 'Poppins', sans-serif;\n  --sub-font: 'Roboto Mono', monospace;\n}\n\n/*------- Night Theme -------*/\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0 11rem;\n  background-color: var(--night-main-bg-color);\n  font-family: var(--main-font);\n  color: var(--main-font-color);\n}\n\n/*------- Header -------*/\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  background-color: var(--night-main-bg-color);\n  color: var(--main-font-color);\n  font-size: 1.2rem;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  border-bottom: 2px solid var(--wrap-bg-color);\n}\n\n.themeToggle {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.themeToggle:hover{\n    cursor: pointer;\n}\n\n.moon {\n  background-color: transparent;\n  box-shadow: -6px 1px 0 3px #275e8e;\n  border-left:3px solid #27476D;\n  border-radius:50%;\n  width: 50px;\n  height: 50px;\n  margin-left:8px;\n  margin-top:0px;\n  transition: 2s;\n}\n\n.sun {\n  background-color: #fdd462;\n  box-shadow: 2px 0px 0px 1px #D19C29;\n  border-radius:50%;\n  width: 50px;\n  height: 50px;\n  transition: 2s;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n}\n\n.navbarItems {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style-type: none;\n  gap: 2rem;\n}\n\n.navbarItems > li:last-child {\n  border-bottom: none;\n}\n\n.navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-main-bg-color);\n  transform: scale(1.1);\n}\n\na:visited, a:link, a:active {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton {\n  background-color: var(--night-main-bg-color);\n  color: var(--main-font-color);\n  font-weight: 800;\n  font-size: 1.2rem;\n  padding: 0.8rem 2.5rem;\n  border: 2px solid var(--main-font-color);\n}\n\nbutton:hover {\n  background-color: var(--day-main-bg-color);\n  color: var(--night-main-bg-color);\n  transform: scale(1.03);\n}\n\n.downloadResume > a {\n  width: 100%;\n  height: auto;\n}\n\n/*------- Main -------*/\nmain {\n  width: 100%;\n  padding-top: 10rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10rem;\n}\n\n/*------- Rectangle -------*/\n.rectangle {\n  padding: 3rem 3rem;\n  border-radius: 1rem;\n  background-color: var(--rectangle-color);\n}\n\n/*------- Console -------*/\n\n.consoleBody {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  background-color: var(--main-console-color);\n  padding: 1.5rem;\n  border-radius: 2rem;\n  box-shadow: 11px 7px 16px 5px rgba(0,0,0,0.75);\n  font-family: var(--sub-font);\n}\n\n.consoleTop {\n  display: flex;\n  gap: 0.8rem;\n  margin-bottom: 2rem;\n}\n\n.circle {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n}\n\n.red {\n  background-color: #ff5f56;\n}\n\n.yellow {\n  background-color: #ffbd2e;\n}\n\n.green {\n  background-color: #27c93f;\n}\n\n.consoleBottom {\n  padding-bottom: 5rem;\n  color: var(--main-font-color);\n}\n\n.consoleItems {\n  list-style-type: none;\n  margin-left: 1rem;\n}\n\n.purpleText {\n  color: #9774bb;\n}\n\n.blueText {\n  color: #4285f4;\n}\n\n.orangeText {\n  color: #dbb17a;\n}\n\n/*------- Personal Info -------*/\n.containerInfo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 750px;\n  color: var(--main-font-color);\n}\n\n.containerInfo p {\n  color: var(--sub-font-color);\n}\n\n.containerInfo h1 {\n  font-size: 3rem;\n  color: orange;\n}\n\n.containerInfo h2 {\n  color: #c5c5c4;\n  font-size: 1.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.personalInfo {\n  padding-bottom: 1rem;\n}\n\n.socialItems {\n  display: flex;\n  gap: 1rem;\n  flex-direction: row;\n  list-style-type: none;\n  align-items: center;\n}\n\n/*------- Skill&Tools Section -------*/\n.division {\n  height: 1px;\n  min-width: 100%;\n  background-color: var(--main-font-color);\n  margin-bottom: 2.5rem;\n  margin-top: 2.5rem;\n}\n\nsection {\n  margin-top: 13rem;\n}\n\n.sectionDescription {\n  color: var(--sub-font-color);\n  margin-top: 0.8rem;\n}\n\n/*------- Skill&Tools Section - Slider -------*/\n\n.swiper-container {\n  position: relative;\n  width: 70%;\n  margin: 0 auto;\n  margin-top: 2rem;\n}\n\n.swiper-container .swiper-button-prev{\n  left: -40px;\n}\n\n.swiper-container .swiper-button-next{\n  right: -40px;\n}\n\n.swiper-button-prev,\n.swiper-button-next {\n  color: var(--main-font-color);\n  font-size: 10px!important;\n}\n\n.swiper {\n  max-width: 768px;\n  display: flex;\n}\n\n.swiper-wrapper > * {\n  aspect-ratio: 4/3;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #1a2029;\n  backdrop-filter: blur(5px);\n  border-radius: 10px;\n  width: 100%;\n  height: auto;\n  padding: 2rem;\n  gap: 1rem;\n}\n\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  min-width: 50px;\n  min-height: 50px;\n  display: block;\n  border-radius: .5rem;\n}\n\n/*------- Projects Section -------*/\n\n.projectsContainer {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin: 2rem 0;\n}\n\n.projectsWrapper {\n  max-width: 400px;\n  overflow: hidden;\n  background: #1a2029;\n  backdrop-filter: blur(5px);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.projectsWrapper img {\n  width: 100%;\n  height: 350px;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  padding: 1rem;\n  object-fit: cover;\n}\n\n.projectsData {\n  padding: 1rem;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.projectsData h2 {\n  margin-bottom: 0.6rem;\n  color: var(--main-font-color);\n}\n\n.projectsData span {\n  color: var(--sub-font-color);\n  font-size: 0.9rem;\n  flex-grow: 1;\n}\n\n.projectsLinks {\n  margin-top: 1rem;\n}\n\n.projectsLinks ul {\n  list-style: none;\n  padding: 0;\n  display: flex;\n}\n\n.projectsLinks li i {\n  margin-right: 1rem;\n  color: var(--main-font-color);\n}\n\n.projectsLinks a img {\n  width: 100%;\n  height: auto;\n  border-radius: 50%;\n  transition: transform 0.2s ease-in-out;\n}\n\n/*------- Contact Section -------*/\n\n.contactContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  flex-wrap: wrap;\n  margin-bottom: 15rem;\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 40rem;\n  margin: 2rem auto 10rem auto;\n  background: #1a2029;\n  backdrop-filter: blur(5px);\n  border-radius: 10px;\n  padding: 1.5rem;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\ninput, textarea {\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  box-sizing: border-box;\n  resize: none;\n}\n\n/* Animations */\n\ni:hover {\n  transform: scale(1.1);\n  color: orange;\n}\n\n.projectsData * i:hover {\n  transform: scale(1.1);\n  color: orange;\n}\n\nimg:hover {\n  transform: scale(1.1);\n}\n\n.themeToggle:hover {\n  transform: scale(1.1);\n}\n\n/* Day Theme */\n.dayMode {\n  background-color: var(--day-main-bg-color);\n  color: var(--day-font-color);\n}\n\n.dayMode > header {\n  background-color: var(--day-main-bg-color);\n  color: var(--day-font-color);\n}\n\n.dayMode * .navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-font-color);\n}\n\n.dayMode * .containerInfo {\n  color: var(--day-font-color);\n}\n\n.dayMode * .containerInfo p {\n  color: var(--day-sub-font-color);\n}\n\n.dayMode .containerInfo #typeText {\n  color: var(--rectangle-color);\n}\n\n.dayMode .typed-cursor {\n  color: var(--rectangle-color);\n}\n\n.dayMode * .containerInfo h2 {\n  color: #011b30;\n}\n\n.dayMode * .division {\n  background-color: var(--day-font-color);\n}\n\n.dayMode * .swiper-slide {\n  background: #e6e5e5;\n  backdrop-filter: blur(5px);\n  box-shadow: none;\n}\n\n.dayMode * .projectsWrapper {\n  background: #e6e5e5;\n  backdrop-filter: blur(5px);\n  box-shadow: none;\n}\n\n.dayMode * .projectsWrapper * h2 {\n  color: var(--night-main-bg-color);\n}\n\n.dayMode * .projectsWrapper * span{\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * .sectionDescription {\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * button {\n  background-color: var(--day-main-bg-color);\n  color: var(--night-main-bg-color);\n  border-color: var(--night-main-bg-color);\n}\n\n.dayMode * button:hover {\n  background-color: var(--night-main-bg-color);\n  color: var(--day-main-bg-color);\n  transform: scale(1.03);\n}\n\n.dayMode *:before {\n  color: var(--night-main-bg-color);\n}\n\n.dayMode i:hover:before {\n  color: var(--rectangle-color);\n}\n\n.dayMode .projectsData i:hover:before {\n  color: var(--rectangle-color);\n}\n\n.dayMode * .bar {\n  background-color: var(--night-main-bg-color);\n}\n\n.dayMode * .navbarItems.show {\n  background-color: var(--day-main-bg-color);\n}\n\n.dayMode * #contactForm {\n  background: #e6e5e5;\n  backdrop-filter: blur(5px);\n  box-shadow: none;\n}\n\n.dayMode .swiper-button-next:after,\n.dayMode .swiper-button-prev:after {\n  color: var(--night-main-bg-color);\n}\n\n/* Media Queries for responsiveness */\n@media screen and (max-width: 1560px){\n  body {\n    margin: 0 5rem;\n  }\n}\n\n@media screen and (max-width: 900px){\n  body {\n    margin: 0 2rem;\n  }\n\n  .navbarItems {\n    display: none;\n    flex-direction: row;\n    position: absolute;\n    top: 60px;\n    left: 0;\n    width: 100%;\n    background-color: var(--night-main-bg-color);\n    border-bottom: 2px solid var(--wrap-bg-color);\n    z-index: 1;\n}\n\n.navbarItems.show {\n    display: flex;\n    flex-direction: column;\n    margin-top: 1.5rem;\n    position: fixed;\n}\n\n.navbarItems li {\n    margin: 0;\n    text-align: center;\n    padding: 10px;\n}\n\n.navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-main-bg-color);\n  transform: scale(1.1);\n}\n\n.navbar-toggle {\n    display: block;\n    cursor: pointer;\n}\n\n.bar {\n    width: 30px;\n    height: 3px;\n    background-color: #fff;\n    margin: 7px 0;\n    transition: 0.4s;\n}\n\n.navbarItems.show li {\n    animation: slideIn 0.3s ease-in-out;\n}\n\n.downloadResume:hover {\n  background-color: none;\n}\n\n#contactForm {\n  margin-bottom: 5rem;\n}\n\n@keyframes slideIn {\n    from {\n        transform: translateY(-20px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n}\n\n\n@media screen and (max-width: 600px) {\n  body {\n    margin: 0 0.5rem;\n  }\n\n  header {\n    padding: 0.5rem 0;\n  }\n\n  main {\n    gap: 0rem;\n    padding-top: 0;\n  }\n\n  section {\n    margin-top: 0;\n  }\n\n  .navbarItems.show {\n    margin-top: 0.5rem;\n  }\n\n  .rectangle {\n    transform: scale(0.8);\n  }\n\n  .swiper-slide-description {\n    font-size: 0.6rem;\n  }\n\n  .swiper-button-next:after,\n  .swiper-button-prev:after {\n    font-size: 1.5rem;\n  }\n\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywrRkFBK0YsUUFBUSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxL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YUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNBO0FBQ0E7QUFDRjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9zY3JpcHRzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9zcmMvc2NyaXB0cy9kYXluaWdodC5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vc3JjL3NjcmlwdHMvZW1haWwuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9zY3JpcHRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vc3JjL3NjcmlwdHMvdHlwZWVmZmVjdC5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1BvcnRvZm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1BvcnRvZm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIGxvb3A6IHRydWUsXG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogMjAwMCwgLy8gU2V0IHRoZSBkZWxheSBpbiBtaWxsaXNlY29uZHMgKDMgc2Vjb25kcyBpbiB0aGlzIGV4YW1wbGUpXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsIC8vIEFsbG93IG5hdmlnYXRpb24gd2hpbGUgYXV0b3BsYXlpbmdcbiAgICB9LFxuICBcbiAgICAvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgfSxcbiAgXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG4gIFxuICAgIC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgfSxcbiAgfSk7XG59KTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2ljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWVUb2dnbGUnKTtcblxuICAgIGNpY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5cIik7XG4gICAgICAgIGlmIChtb29uLmNsYXNzTmFtZSA9PT0gXCJzdW5cIikge1xuICAgICAgICAgICAgbW9vbi5jbGFzc05hbWUgPSBcIm1vb25cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImRheU1vZGVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJuaWdodE1vZGVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb29uLmNsYXNzTmFtZSA9IFwic3VuXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuaWdodE1vZGVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJkYXlNb2RlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMnO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCJlbWFpbGpzLmluaXQoJ2RaZ1NGa0g3dGgydi1xbEhnJyk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBnZW5lcmF0ZSBhIGZpdmUgZGlnaXQgbnVtYmVyIGZvciB0aGUgY29udGFjdF9udW1iZXIgdmFyaWFibGVcbiAgICAgICAgdGhpcy5jb250YWN0X251bWJlci52YWx1ZSA9IE1hdGgucmFuZG9tKCkgKiAxMDAwMDAgfCAwO1xuICAgICAgICAvLyB0aGVzZSBJRHMgZnJvbSB0aGUgcHJldmlvdXMgc3RlcHNcbiAgICAgICAgZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV80Ynlsd3BrJywgJ3RlbXBsYXRlX3Zzc3Vmd2snLCB0aGlzKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTIScpO1xuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBSUxFRC4uLicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufSIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbmF2YmFyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhci10b2dnbGUnKTtcbiAgICBjb25zdCBuYXZiYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJJdGVtcycpO1xuXG4gICAgbmF2YmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuYXZiYXJJdGVtcy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgfSk7XG59KTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgdHlwZWQgPSBuZXcgVHlwZWQoXCIjdHlwZVRleHRcIix7XG4gICAgICAgIHN0cmluZ3M6IFtcIlJpY2FyZG8gQ2FydmFsaG9cIl0sXG4gICAgICAgIHR5cGVTcGVlZDogMTAwLFxuICAgIH0pXG59KTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyotLS0tLS0tIEltcG9ydCBmb250cyAtLS0tLS0tKi9cblxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gIC8qLS0tLS0tLSBDb2xvciBWYXJpYWJsZSAtLS0tLS0tKi9cbiAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiAjMTE1ZTU5O1xuICAtLWJ1dHRvbi1iZy1jb2xvcjogIzE0YjhhNjtcbiAgLS1uaWdodC1tYWluLWJnLWNvbG9yOiAjMTExMTExO1xuICAtLWRheS1tYWluLWJnLWNvbG9yOiAjZmZmO1xuICAtLW1haW4tY29uc29sZS1jb2xvcjogIzAxMTYyNztcbiAgLS1yZWN0YW5nbGUtY29sb3I6ICMzZjNmNjk7XG4gIC0td3JhcC1iZy1jb2xvcjogIzJmMmYyZjtcbiAgLS13cmFwLWJvcmRlci1jb2xvcjogIzE5MjAyODtcbiAgLyotLS0tLS0tIEZvbnQgQ29sb3IgVmFyaWFibGUgLS0tLS0tLSovXG4gIC0tbWFpbi1mb250LWNvbG9yOiAjZjVmNWVkO1xuICAtLXN1Yi1mb250LWNvbG9yOiAjQkRCREJEO1xuICAtLWRheS1mb250LWNvbG9yOiAjMDExNjI3O1xuICAtLWRheS1zdWItZm9udC1jb2xvcjogIzA3MjYzZGVhO1xuICAvKi0tLS0tLS0gRm9udCBWYXJpYWJsZSAtLS0tLS0tKi9cbiAgLS1tYWluLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgLS1zdWItZm9udDogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xufVxuXG4vKi0tLS0tLS0gTmlnaHQgVGhlbWUgLS0tLS0tLSovXG5cbmh0bWwsXG5ib2R5IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDAgMTFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG59XG5cbi8qLS0tLS0tLSBIZWFkZXIgLS0tLS0tLSovXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td3JhcC1iZy1jb2xvcik7XG59XG5cbi50aGVtZVRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4udGhlbWVUb2dnbGU6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9vbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAtNnB4IDFweCAwIDNweCAjMjc1ZThlO1xuICBib3JkZXItbGVmdDozcHggc29saWQgIzI3NDc2RDtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OjhweDtcbiAgbWFyZ2luLXRvcDowcHg7XG4gIHRyYW5zaXRpb246IDJzO1xufVxuXG4uc3VuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDQ2MjtcbiAgYm94LXNoYWRvdzogMnB4IDBweCAwcHggMXB4ICNEMTlDMjk7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0cmFuc2l0aW9uOiAycztcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZiYXJJdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGdhcDogMnJlbTtcbn1cblxuLm5hdmJhckl0ZW1zID4gbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5uYXZiYXJJdGVtcyA+IGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5hOnZpc2l0ZWQsIGE6bGluaywgYTphY3RpdmUge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAwLjhyZW0gMi41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLmRvd25sb2FkUmVzdW1lID4gYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qLS0tLS0tLSBNYWluIC0tLS0tLS0qL1xubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTByZW07XG59XG5cbi8qLS0tLS0tLSBSZWN0YW5nbGUgLS0tLS0tLSovXG4ucmVjdGFuZ2xlIHtcbiAgcGFkZGluZzogM3JlbSAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWN0YW5nbGUtY29sb3IpO1xufVxuXG4vKi0tLS0tLS0gQ29uc29sZSAtLS0tLS0tKi9cblxuLmNvbnNvbGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29uc29sZS1jb2xvcik7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYm94LXNoYWRvdzogMTFweCA3cHggMTZweCA1cHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXN1Yi1mb250KTtcbn1cblxuLmNvbnNvbGVUb3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmNpcmNsZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVmNTY7XG59XG5cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZDJlO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdjOTNmO1xufVxuXG4uY29uc29sZUJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuLmNvbnNvbGVJdGVtcyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wdXJwbGVUZXh0IHtcbiAgY29sb3I6ICM5Nzc0YmI7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiAjNDI4NWY0O1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiAjZGJiMTdhO1xufVxuXG4vKi0tLS0tLS0gUGVyc29uYWwgSW5mbyAtLS0tLS0tKi9cbi5jb250YWluZXJJbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xufVxuXG4uY29udGFpbmVySW5mbyBwIHtcbiAgY29sb3I6IHZhcigtLXN1Yi1mb250LWNvbG9yKTtcbn1cblxuLmNvbnRhaW5lckluZm8gaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5jb250YWluZXJJbmZvIGgyIHtcbiAgY29sb3I6ICNjNWM1YzQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuXG4ucGVyc29uYWxJbmZvIHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5zb2NpYWxJdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKi0tLS0tLS0gU2tpbGwmVG9vbHMgU2VjdGlvbiAtLS0tLS0tKi9cbi5kaXZpc2lvbiB7XG4gIGhlaWdodDogMXB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTNyZW07XG59XG5cbi5zZWN0aW9uRGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0tc3ViLWZvbnQtY29sb3IpO1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG59XG5cbi8qLS0tLS0tLSBTa2lsbCZUb29scyBTZWN0aW9uIC0gU2xpZGVyIC0tLS0tLS0qL1xuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLXByZXZ7XG4gIGxlZnQ6IC00MHB4O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1uZXh0e1xuICByaWdodDogLTQwcHg7XG59XG5cbi5zd2lwZXItYnV0dG9uLXByZXYsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTBweCFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXIge1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3dpcGVyLXdyYXBwZXIgPiAqIHtcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzFhMjAyOTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG4gIGdhcDogMXJlbTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn1cblxuLyotLS0tLS0tIFByb2plY3RzIFNlY3Rpb24gLS0tLS0tLSovXG5cbi5wcm9qZWN0c0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDJyZW07XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuXG4ucHJvamVjdHNXcmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzFhMjAyOTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0c1dyYXBwZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wcm9qZWN0c0RhdGEge1xuICBwYWRkaW5nOiAxcmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0c0RhdGEgaDIge1xuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xufVxuXG4ucHJvamVjdHNEYXRhIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tc3ViLWZvbnQtY29sb3IpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ucHJvamVjdHNMaW5rcyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5wcm9qZWN0c0xpbmtzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2plY3RzTGlua3MgbGkgaSB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG59XG5cbi5wcm9qZWN0c0xpbmtzIGEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLyotLS0tLS0tIENvbnRhY3QgU2VjdGlvbiAtLS0tLS0tKi9cblxuLmNvbnRhY3RDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxNXJlbTtcbn1cblxuI2NvbnRhY3RGb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA0MHJlbTtcbiAgbWFyZ2luOiAycmVtIGF1dG8gMTByZW0gYXV0bztcbiAgYmFja2dyb3VuZDogIzFhMjAyOTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLyogQW5pbWF0aW9ucyAqL1xuXG5pOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucHJvamVjdHNEYXRhICogaTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4udGhlbWVUb2dnbGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi8qIERheSBUaGVtZSAqL1xuLmRheU1vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1kYXktZm9udC1jb2xvcik7XG59XG5cbi5kYXlNb2RlID4gaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5uYXZiYXJJdGVtcyA+IGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRheS1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAuY29udGFpbmVySW5mbyB7XG4gIGNvbG9yOiB2YXIoLS1kYXktZm9udC1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLmNvbnRhaW5lckluZm8gcCB7XG4gIGNvbG9yOiB2YXIoLS1kYXktc3ViLWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSAuY29udGFpbmVySW5mbyAjdHlwZVRleHQge1xuICBjb2xvcjogdmFyKC0tcmVjdGFuZ2xlLWNvbG9yKTtcbn1cblxuLmRheU1vZGUgLnR5cGVkLWN1cnNvciB7XG4gIGNvbG9yOiB2YXIoLS1yZWN0YW5nbGUtY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5jb250YWluZXJJbmZvIGgyIHtcbiAgY29sb3I6ICMwMTFiMzA7XG59XG5cbi5kYXlNb2RlICogLmRpdmlzaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kOiAjZTZlNWU1O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmRheU1vZGUgKiAucHJvamVjdHNXcmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2U2ZTVlNTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kYXlNb2RlICogLnByb2plY3RzV3JhcHBlciAqIGgyIHtcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5wcm9qZWN0c1dyYXBwZXIgKiBzcGFue1xuICBjb2xvcjogdmFyKC0tZGF5LXN1Yi1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAuc2VjdGlvbkRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWRheS1zdWItZm9udC1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cbi5kYXlNb2RlICo6YmVmb3JlIHtcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xufVxuXG4uZGF5TW9kZSBpOmhvdmVyOmJlZm9yZSB7XG4gIGNvbG9yOiB2YXIoLS1yZWN0YW5nbGUtY29sb3IpO1xufVxuXG4uZGF5TW9kZSAucHJvamVjdHNEYXRhIGk6aG92ZXI6YmVmb3JlIHtcbiAgY29sb3I6IHZhcigtLXJlY3RhbmdsZS1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5uYXZiYXJJdGVtcy5zaG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqICNjb250YWN0Rm9ybSB7XG4gIGJhY2tncm91bmQ6ICNlNmU1ZTU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZGF5TW9kZSAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLFxuLmRheU1vZGUgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XG4gIGNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbn1cblxuLyogTWVkaWEgUXVlcmllcyBmb3IgcmVzcG9uc2l2ZW5lc3MgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NjBweCl7XG4gIGJvZHkge1xuICAgIG1hcmdpbjogMCA1cmVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwIDJyZW07XG4gIH1cblxuICAubmF2YmFySXRlbXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdyYXAtYmctY29sb3IpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5uYXZiYXJJdGVtcy5zaG93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLm5hdmJhckl0ZW1zIGxpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5uYXZiYXJJdGVtcyA+IGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ubmF2YmFyLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFyIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogN3B4IDA7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm5hdmJhckl0ZW1zLnNob3cgbGkge1xuICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZG93bmxvYWRSZXN1bWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xufVxuXG4jY29udGFjdEZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gIH1cblxuICBtYWluIHtcbiAgICBnYXA6IDByZW07XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLm5hdmJhckl0ZW1zLnNob3cge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxuXG4gIC5yZWN0YW5nbGUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICB9XG5cbiAgLnN3aXBlci1idXR0b24tbmV4dDphZnRlcixcbiAgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwrQkFBK0I7O0FBRS9COzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHNDQUFzQztFQUN0QywwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQyxvQ0FBb0M7QUFDdEM7O0FBRUEsOEJBQThCOztBQUU5Qjs7RUFFRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxl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dkM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtRQUM1QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLHdCQUF3QjtRQUN4QixVQUFVO0lBQ2Q7QUFDSjtBQUNBOzs7QUFHQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsU0FBUztJQUNULGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25COztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0tLS0tLSBJbXBvcnQgZm9udHMgLS0tLS0tLSovXFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC8qLS0tLS0tLSBDb2xvciBWYXJpYWJsZSAtLS0tLS0tKi9cXG4gIC0tYnV0dG9uLWJvcmRlci1jb2xvcjogIzExNWU1OTtcXG4gIC0tYnV0dG9uLWJnLWNvbG9yOiAjMTRiOGE2O1xcbiAgLS1uaWdodC1tYWluLWJnLWNvbG9yOiAjMTExMTExO1xcbiAgLS1kYXktbWFpbi1iZy1jb2xvcjogI2ZmZjtcXG4gIC0tbWFpbi1jb25zb2xlLWNvbG9yOiAjMDExNjI3O1xcbiAgLS1yZWN0YW5nbGUtY29sb3I6ICMzZjNmNjk7XFxuICAtLXdyYXAtYmctY29sb3I6ICMyZjJmMmY7XFxuICAtLXdyYXAtYm9yZGVyLWNvbG9yOiAjMTkyMDI4O1xcbiAgLyotLS0tLS0tIEZvbnQgQ29sb3IgVmFyaWFibGUgLS0tLS0tLSovXFxuICAtLW1haW4tZm9udC1jb2xvcjogI2Y1ZjVlZDtcXG4gIC0tc3ViLWZvbnQtY29sb3I6ICNCREJEQkQ7XFxuICAtLWRheS1mb250LWNvbG9yOiAjMDExNjI3O1xcbiAgLS1kYXktc3ViLWZvbnQtY29sb3I6ICMwNzI2M2RlYTtcXG4gIC8qLS0tLS0tLSBGb250IFZhcmlhYmxlIC0tLS0tLS0qL1xcbiAgLS1tYWluLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIC0tc3ViLWZvbnQ6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyotLS0tLS0tIE5pZ2h0IFRoZW1lIC0tLS0tLS0qL1xcblxcbmh0bWwsXFxuYm9keSB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAgMTFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi8qLS0tLS0tLSBIZWFkZXIgLS0tLS0tLSovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td3JhcC1iZy1jb2xvcik7XFxufVxcblxcbi50aGVtZVRvZ2dsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRoZW1lVG9nZ2xlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogLTZweCAxcHggMCAzcHggIzI3NWU4ZTtcXG4gIGJvcmRlci1sZWZ0OjNweCBzb2xpZCAjMjc0NzZEO1xcbiAgYm9yZGVyLXJhZGl1czo1MCU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1sZWZ0OjhweDtcXG4gIG1hcmdpbi10b3A6MHB4O1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcblxcbi5zdW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDQ2MjtcXG4gIGJveC1zaGFkb3c6IDJweCAwcHggMHB4IDFweCAjRDE5QzI5O1xcbiAgYm9yZGVyLXJhZGl1czo1MCU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2YmFySXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLm5hdmJhckl0ZW1zID4gbGk6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4ubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5hOnZpc2l0ZWQsIGE6bGluaywgYTphY3RpdmUge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC44cmVtIDIuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4uZG93bmxvYWRSZXN1bWUgPiBhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKi0tLS0tLS0gTWFpbiAtLS0tLS0tKi9cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEwcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTByZW07XFxufVxcblxcbi8qLS0tLS0tLSBSZWN0YW5nbGUgLS0tLS0tLSovXFxuLnJlY3RhbmdsZSB7XFxuICBwYWRkaW5nOiAzcmVtIDNyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVjdGFuZ2xlLWNvbG9yKTtcXG59XFxuXFxuLyotLS0tLS0tIENvbnNvbGUgLS0tLS0tLSovXFxuXFxuLmNvbnNvbGVCb2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbnNvbGUtY29sb3IpO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDExcHggN3B4IDE2cHggNXB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tc3ViLWZvbnQpO1xcbn1cXG5cXG4uY29uc29sZVRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjhyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVmNTY7XFxufVxcblxcbi55ZWxsb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmQyZTtcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2M5M2Y7XFxufVxcblxcbi5jb25zb2xlQm90dG9tIHtcXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi5jb25zb2xlSXRlbXMge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wdXJwbGVUZXh0IHtcXG4gIGNvbG9yOiAjOTc3NGJiO1xcbn1cXG5cXG4uYmx1ZVRleHQge1xcbiAgY29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi5vcmFuZ2VUZXh0IHtcXG4gIGNvbG9yOiAjZGJiMTdhO1xcbn1cXG5cXG4vKi0tLS0tLS0gUGVyc29uYWwgSW5mbyAtLS0tLS0tKi9cXG4uY29udGFpbmVySW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA3NTBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY29udGFpbmVySW5mbyBwIHtcXG4gIGNvbG9yOiB2YXIoLS1zdWItZm9udC1jb2xvcik7XFxufVxcblxcbi5jb250YWluZXJJbmZvIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5jb250YWluZXJJbmZvIGgyIHtcXG4gIGNvbG9yOiAjYzVjNWM0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucGVyc29uYWxJbmZvIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uc29jaWFsSXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKi0tLS0tLS0gU2tpbGwmVG9vbHMgU2VjdGlvbiAtLS0tLS0tKi9cXG4uZGl2aXNpb24ge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDEzcmVtO1xcbn1cXG5cXG4uc2VjdGlvbkRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1zdWItZm9udC1jb2xvcik7XFxuICBtYXJnaW4tdG9wOiAwLjhyZW07XFxufVxcblxcbi8qLS0tLS0tLSBTa2lsbCZUb29scyBTZWN0aW9uIC0gU2xpZGVyIC0tLS0tLS0qL1xcblxcbi5zd2lwZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLXByZXZ7XFxuICBsZWZ0OiAtNDBweDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1idXR0b24tbmV4dHtcXG4gIHJpZ2h0OiAtNDBweDtcXG59XFxuXFxuLnN3aXBlci1idXR0b24tcHJldixcXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcXG59XFxuXFxuLnN3aXBlciB7XFxuICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnN3aXBlci13cmFwcGVyID4gKiB7XFxuICBhc3BlY3QtcmF0aW86IDQvMztcXG59XFxuXFxuLnN3aXBlci1zbGlkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxYTIwMjk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5zd2lwZXItc2xpZGUgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxufVxcblxcbi8qLS0tLS0tLSBQcm9qZWN0cyBTZWN0aW9uIC0tLS0tLS0qL1xcblxcbi5wcm9qZWN0c0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdHNXcmFwcGVyIHtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogIzFhMjAyOTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdHNXcmFwcGVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucHJvamVjdHNEYXRhIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RzRGF0YSBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3RzRGF0YSBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1zdWItZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnByb2plY3RzTGlua3Mge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzTGlua3MgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdHNMaW5rcyBsaSBpIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdHNMaW5rcyBhIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKi0tLS0tLS0gQ29udGFjdCBTZWN0aW9uIC0tLS0tLS0qL1xcblxcbi5jb250YWN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVyZW07XFxufVxcblxcbiNjb250YWN0Rm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDQwcmVtO1xcbiAgbWFyZ2luOiAycmVtIGF1dG8gMTByZW0gYXV0bztcXG4gIGJhY2tncm91bmQ6ICMxYTIwMjk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4vKiBBbmltYXRpb25zICovXFxuXFxuaTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ucHJvamVjdHNEYXRhICogaTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG5pbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udGhlbWVUb2dnbGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBEYXkgVGhlbWUgKi9cXG4uZGF5TW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSA+IGhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5uYXZiYXJJdGVtcyA+IGxpOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXktZm9udC1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLmNvbnRhaW5lckluZm8ge1xcbiAgY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAuY29udGFpbmVySW5mbyBwIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXktc3ViLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAuY29udGFpbmVySW5mbyAjdHlwZVRleHQge1xcbiAgY29sb3I6IHZhcigtLXJlY3RhbmdsZS1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlIC50eXBlZC1jdXJzb3Ige1xcbiAgY29sb3I6IHZhcigtLXJlY3RhbmdsZS1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLmNvbnRhaW5lckluZm8gaDIge1xcbiAgY29sb3I6ICMwMTFiMzA7XFxufVxcblxcbi5kYXlNb2RlICogLmRpdmlzaW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAuc3dpcGVyLXNsaWRlIHtcXG4gIGJhY2tncm91bmQ6ICNlNmU1ZTU7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5kYXlNb2RlICogLnByb2plY3RzV3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjZTZlNWU1O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5wcm9qZWN0c1dyYXBwZXIgKiBoMiB7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLnByb2plY3RzV3JhcHBlciAqIHNwYW57XFxuICBjb2xvcjogdmFyKC0tZGF5LXN1Yi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAuc2VjdGlvbkRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXktc3ViLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4uZGF5TW9kZSAqOmJlZm9yZSB7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlIGk6aG92ZXI6YmVmb3JlIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWN0YW5nbGUtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAucHJvamVjdHNEYXRhIGk6aG92ZXI6YmVmb3JlIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWN0YW5nbGUtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLm5hdmJhckl0ZW1zLnNob3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqICNjb250YWN0Rm9ybSB7XFxuICBiYWNrZ3JvdW5kOiAjZTZlNWU1O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uZGF5TW9kZSAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLFxcbi5kYXlNb2RlIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4vKiBNZWRpYSBRdWVyaWVzIGZvciByZXNwb25zaXZlbmVzcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NjBweCl7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwIDVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDAgMnJlbTtcXG4gIH1cXG5cXG4gIC5uYXZiYXJJdGVtcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2MHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13cmFwLWJnLWNvbG9yKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLm5hdmJhckl0ZW1zLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLm5hdmJhckl0ZW1zIGxpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5uYXZiYXJJdGVtcyA+IGxpOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJhciB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luOiA3cHggMDtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLm5hdmJhckl0ZW1zLnNob3cgbGkge1xcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRvd25sb2FkUmVzdW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxufVxcblxcbiNjb250YWN0Rm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGdhcDogMHJlbTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICB9XFxuXFxuICBzZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG5cXG4gIC5uYXZiYXJJdGVtcy5zaG93IHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgfVxcblxcbiAgLnJlY3RhbmdsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIH1cXG5cXG4gIC5zd2lwZXItc2xpZGUtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gIH1cXG5cXG4gIC5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsXFxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9jYXJvdXNlbCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9kYXluaWdodCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9uYXZiYXInO1xuaW1wb3J0ICcuL3NjcmlwdHMvZW1haWwnO1xuaW1wb3J0ICcuL3NjcmlwdHMvdHlwZWVmZmVjdCc7Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN3aXBlciIsIlN3aXBlciIsImRpcmVjdGlvbiIsImxvb3AiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwicGFnaW5hdGlvbiIsImVsIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInNjcm9sbGJhciIsImNpY2xlIiwicXVlcnlTZWxlY3RvciIsIm1vb24iLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTmFtZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJlbWFpbGpzIiwiaW5pdCIsIndpbmRvdyIsIm9ubG9hZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb250YWN0X251bWJlciIsInZhbHVlIiwiTWF0aCIsInJhbmRvbSIsInNlbmRGb3JtIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm5hdmJhclRvZ2dsZSIsIm5hdmJhckl0ZW1zIiwidG9nZ2xlIiwidHlwZWQiLCJUeXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiXSwic291cmNlUm9vdCI6IiJ9