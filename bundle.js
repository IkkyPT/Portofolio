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
  --main-font: 'Roboto Mono', monospace;
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
  padding: 2rem;
  background-color: var(--night-main-bg-color);
  color: var(--main-font-color);
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 2px solid var(--wrap-bg-color);
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

.typeText {
  width: 17ch;
  border-right: 3px solid;
  animation: blink 1s step-end infinite, type 2.5s steps(28) forwards;
  overflow: hidden;
  white-space: nowrap;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes type {
  0% {
    width: 0;
  }
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
  margin: 2rem auto 20rem auto;
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
    margin-top: 3.5rem;
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
    margin: 0 1rem;
  }

  header {
    padding: 1rem 0;
  }

  main {
    gap: 0rem;
    padding-top: 0;
  }

  section {
    margin-top: 0;
  }

  .navbarItems.show {
    margin-top: 1.5rem;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/*------- Import fonts -------*/\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  /*------- Color Variable -------*/\n  --button-border-color: #115e59;\n  --button-bg-color: #14b8a6;\n  --night-main-bg-color: #111111;\n  --day-main-bg-color: #fff;\n  --main-console-color: #011627;\n  --rectangle-color: #3f3f69;\n  --wrap-bg-color: #2f2f2f;\n  --wrap-border-color: #192028;\n  /*------- Font Color Variable -------*/\n  --main-font-color: #f5f5ed;\n  --sub-font-color: #BDBDBD;\n  --day-font-color: #011627;\n  --day-sub-font-color: #07263dea;\n  /*------- Font Variable -------*/\n  --main-font: 'Roboto Mono', monospace;\n}\n\n/*------- Night Theme -------*/\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0 11rem;\n  background-color: var(--night-main-bg-color);\n  font-family: var(--main-font);\n  color: var(--main-font-color);\n}\n\n/*------- Header -------*/\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem;\n  background-color: var(--night-main-bg-color);\n  color: var(--main-font-color);\n  font-size: 1.2rem;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  border-bottom: 2px solid var(--wrap-bg-color);\n}\n\n.themeToggle:hover{\n    cursor: pointer;\n}\n\n.moon {\n  background-color: transparent;\n  box-shadow: -6px 1px 0 3px #275e8e;\n  border-left:3px solid #27476D;\n  border-radius:50%;\n  width: 50px;\n  height: 50px;\n  margin-left:8px;\n  margin-top:0px;\n  transition: 2s;\n}\n\n.sun {\n  background-color: #fdd462;\n  box-shadow: 2px 0px 0px 1px #D19C29;\n  border-radius:50%;\n  width: 50px;\n  height: 50px;\n  transition: 2s;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n}\n\n.navbarItems {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style-type: none;\n  gap: 2rem;\n}\n\n.navbarItems > li:last-child {\n  border-bottom: none;\n}\n\n.navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-main-bg-color);\n  transform: scale(1.1);\n}\n\na:visited, a:link, a:active {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton {\n  background-color: var(--night-main-bg-color);\n  color: var(--main-font-color);\n  font-weight: 800;\n  font-size: 1.2rem;\n  padding: 0.8rem 2.5rem;\n  border: 2px solid var(--main-font-color);\n}\n\nbutton:active {\n  background-color: var(--day-main-bg-color);\n  color: var(--night-main-bg-color);\n}\n\n/*------- Main -------*/\nmain {\n  width: 100%;\n  padding-top: 10rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10rem;\n}\n\n/*------- Rectangle -------*/\n.rectangle {\n  padding: 3rem 3rem;\n  border-radius: 1rem;\n  background-color: var(--rectangle-color);\n}\n\n/*------- Console -------*/\n\n.consoleBody {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  background-color: var(--main-console-color);\n  padding: 1.5rem;\n  border-radius: 2rem;\n  box-shadow: 11px 7px 16px 5px rgba(0,0,0,0.75);\n}\n\n.consoleTop {\n  display: flex;\n  gap: 0.8rem;\n  margin-bottom: 2rem;\n}\n\n.circle {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n}\n\n.red {\n  background-color: #ff5f56;\n}\n\n.yellow {\n  background-color: #ffbd2e;\n}\n\n.green {\n  background-color: #27c93f;\n}\n\n.consoleBottom {\n  padding-bottom: 5rem;\n  color: var(--main-font-color);\n}\n\n.consoleItems {\n  list-style-type: none;\n  margin-left: 1rem;\n}\n\n.purpleText {\n  color: #9774bb;\n}\n\n.blueText {\n  color: #4285f4;\n}\n\n.orangeText {\n  color: #dbb17a;\n}\n\n/*------- Personal Info -------*/\n.containerInfo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 750px;\n  color: var(--main-font-color);\n}\n\n.typeText {\n  width: 17ch;\n  border-right: 3px solid;\n  animation: blink 1s step-end infinite, type 2.5s steps(28) forwards;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n@keyframes blink {\n  50% {\n    border-color: transparent;\n  }\n}\n\n@keyframes type {\n  0% {\n    width: 0;\n  }\n}\n\n.containerInfo p {\n  color: var(--sub-font-color);\n}\n\n.containerInfo h1 {\n  font-size: 3rem;\n}\n\n.containerInfo h2 {\n  color: #c5c5c4;\n  font-size: 1.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.personalInfo {\n  padding-bottom: 1rem;\n}\n\n.socialItems {\n  display: flex;\n  gap: 1rem;\n  flex-direction: row;\n  list-style-type: none;\n  align-items: center;\n}\n\n/*------- Skill&Tools Section -------*/\n.division {\n  height: 1px;\n  min-width: 100%;\n  background-color: var(--main-font-color);\n  margin-bottom: 2.5rem;\n  margin-top: 2.5rem;\n}\n\nsection {\n  margin-top: 13rem;\n}\n\n.sectionDescription {\n  color: var(--sub-font-color);\n  margin-top: 0.8rem;\n}\n\n/*------- Skill&Tools Section - Slider -------*/\n\n.swiper-container {\n  position: relative;\n  width: 70%;\n  margin: 0 auto;\n  margin-top: 2rem;\n}\n\n.swiper-container .swiper-button-prev{\n  left: -40px;\n}\n\n.swiper-container .swiper-button-next{\n  right: -40px;\n}\n\n.swiper-button-prev,\n.swiper-button-next {\n  color: var(--main-font-color);\n  font-size: 10px!important;\n}\n\n.swiper {\n  max-width: 768px;\n  display: flex;\n}\n\n.swiper-wrapper > * {\n  aspect-ratio: 4/3;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #1a2029;\n  backdrop-filter: blur(5px);\n  border-radius: 10px;\n  width: 100%;\n  height: auto;\n  padding: 2rem;\n  gap: 1rem;\n}\n\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  min-width: 50px;\n  min-height: 50px;\n  display: block;\n  border-radius: .5rem;\n}\n\n/*------- Projects Section -------*/\n\n.projectsContainer {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin: 2rem 0;\n}\n\n.projectsWrapper {\n  max-width: 400px;\n  overflow: hidden;\n  background: #1a2029;\n  backdrop-filter: blur(5px);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.projectsWrapper img {\n  width: 100%;\n  height: 350px;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  padding: 1rem;\n  object-fit: cover;\n}\n\n.projectsData {\n  padding: 1rem;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.projectsData h2 {\n  margin-bottom: 0.6rem;\n  color: var(--main-font-color);\n}\n\n.projectsData span {\n  color: var(--sub-font-color);\n  font-size: 0.9rem;\n  flex-grow: 1;\n}\n\n.projectsLinks {\n  margin-top: 1rem;\n}\n\n.projectsLinks ul {\n  list-style: none;\n  padding: 0;\n  display: flex;\n}\n\n.projectsLinks li i {\n  margin-right: 1rem;\n  color: var(--main-font-color);\n}\n\n.projectsLinks a img {\n  width: 100%;\n  height: auto;\n  border-radius: 50%;\n  transition: transform 0.2s ease-in-out;\n}\n\n/*------- Contact Section -------*/\n\n.contactContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  flex-wrap: wrap;\n  margin-bottom: 15rem;\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 40rem;\n  margin: 2rem auto 20rem auto;\n  background: #1a2029;\n  backdrop-filter: blur(5px);\n  border-radius: 10px;\n  padding: 1.5rem;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\ninput, textarea {\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  box-sizing: border-box;\n  resize: none;\n}\n\n/* Day Theme */\n.dayMode {\n  background-color: var(--day-main-bg-color);\n  color: var(--day-font-color);\n}\n\n.dayMode > header {\n  background-color: var(--day-main-bg-color);\n  color: var(--day-font-color);\n}\n\n.dayMode * .navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-font-color);\n}\n\n.dayMode * .containerInfo {\n  color: var(--day-font-color);\n}\n\n.dayMode * .containerInfo p {\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * .containerInfo h2 {\n  color: #011b30;\n}\n\n.dayMode * .division {\n  background-color: var(--day-font-color);\n}\n\n.dayMode * .swiper-slide {\n  background: #e6e5e5;\n  backdrop-filter: blur(5px);\n  box-shadow: none;\n}\n\n.dayMode * .projectsWrapper {\n  background: #e6e5e5;\n  backdrop-filter: blur(5px);\n  box-shadow: none;\n}\n\n.dayMode * .projectsWrapper * h2 {\n  color: var(--night-main-bg-color);\n}\n\n.dayMode * .projectsWrapper * span{\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * .sectionDescription {\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * button {\n  background-color: var(--day-main-bg-color);\n  color: var(--night-main-bg-color);\n  border-color: var(--night-main-bg-color);\n}\n\n.dayMode * button:active {\n  background-color: var(--night-main-bg-color);\n  color: var(--day-main-bg-color);\n}\n\n.dayMode * i:before  {\n  color: var(--night-main-bg-color)\n}\n\n.dayMode * .bar {\n  background-color: var(--night-main-bg-color);\n}\n\n.dayMode * .navbarItems.show {\n  background-color: var(--day-main-bg-color);\n}\n\n.dayMode * #contactForm {\n  background: #e6e5e5;\n  backdrop-filter: blur(5px);\n  box-shadow: none;\n}\n\n.dayMode .swiper-button-next:after,\n.dayMode .swiper-button-prev:after {\n  color: var(--night-main-bg-color);\n}\n\n/* Media Queries for responsiveness */\n@media screen and (max-width: 1560px){\n  body {\n    margin: 0 5rem;\n  }\n}\n\n@media screen and (max-width: 900px){\n  body {\n    margin: 0 2rem;\n  }\n\n  .navbarItems {\n    display: none;\n    flex-direction: row;\n    position: absolute;\n    top: 60px;\n    left: 0;\n    width: 100%;\n    background-color: var(--night-main-bg-color);\n    border-bottom: 2px solid var(--wrap-bg-color);\n    z-index: 1;\n}\n\n.navbarItems.show {\n    display: flex;\n    flex-direction: column;\n    margin-top: 3.5rem;\n    position: fixed;\n}\n\n.navbarItems li {\n    margin: 0;\n    text-align: center;\n    padding: 10px;\n}\n\n.navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-main-bg-color);\n  transform: scale(1.1);\n}\n\n.navbar-toggle {\n    display: block;\n    cursor: pointer;\n}\n\n.bar {\n    width: 30px;\n    height: 3px;\n    background-color: #fff;\n    margin: 7px 0;\n    transition: 0.4s;\n}\n\n.navbarItems.show li {\n    animation: slideIn 0.3s ease-in-out;\n}\n\n.downloadResume:hover {\n  background-color: none;\n}\n\n#contactForm {\n  margin-bottom: 5rem;\n}\n\n@keyframes slideIn {\n    from {\n        transform: translateY(-20px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n}\n\n\n@media screen and (max-width: 600px) {\n  body {\n    margin: 0 1rem;\n  }\n\n  header {\n    padding: 1rem 0;\n  }\n\n  main {\n    gap: 0rem;\n    padding-top: 0;\n  }\n\n  section {\n    margin-top: 0;\n  }\n\n  .navbarItems.show {\n    margin-top: 1.5rem;\n  }\n\n  .rectangle {\n    transform: scale(0.8);\n  }\n\n  .swiper-slide-description {\n    font-size: 0.6rem;\n  }\n\n  .swiper-button-next:after,\n  .swiper-button-prev:after {\n    font-size: 1.5rem;\n  }\n\n}\n"],"sourceRoot":""}]);
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





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLCtGQUErRixRQUFRLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUs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O0FDQTRCO0FBQ0E7QUFDQTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9zY3JpcHRzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9zcmMvc2NyaXB0cy9kYXluaWdodC5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vc3JjL3NjcmlwdHMvZW1haWwuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9zY3JpcHRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1BvcnRvZm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1BvcnRvZm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIGxvb3A6IHRydWUsXG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogMjAwMCwgLy8gU2V0IHRoZSBkZWxheSBpbiBtaWxsaXNlY29uZHMgKDMgc2Vjb25kcyBpbiB0aGlzIGV4YW1wbGUpXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsIC8vIEFsbG93IG5hdmlnYXRpb24gd2hpbGUgYXV0b3BsYXlpbmdcbiAgICB9LFxuICBcbiAgICAvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgfSxcbiAgXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG4gIFxuICAgIC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgfSxcbiAgfSk7XG59KTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2ljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWVUb2dnbGUnKTtcblxuICAgIGNpY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5cIik7XG4gICAgICAgIGlmIChtb29uLmNsYXNzTmFtZSA9PT0gXCJzdW5cIikge1xuICAgICAgICAgICAgbW9vbi5jbGFzc05hbWUgPSBcIm1vb25cIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImRheU1vZGVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJuaWdodE1vZGVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb24gPSAnMC4ycyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb29uLmNsYXNzTmFtZSA9IFwic3VuXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuaWdodE1vZGVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJkYXlNb2RlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMnO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCJlbWFpbGpzLmluaXQoJ2RaZ1NGa0g3dGgydi1xbEhnJyk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBnZW5lcmF0ZSBhIGZpdmUgZGlnaXQgbnVtYmVyIGZvciB0aGUgY29udGFjdF9udW1iZXIgdmFyaWFibGVcbiAgICAgICAgdGhpcy5jb250YWN0X251bWJlci52YWx1ZSA9IE1hdGgucmFuZG9tKCkgKiAxMDAwMDAgfCAwO1xuICAgICAgICAvLyB0aGVzZSBJRHMgZnJvbSB0aGUgcHJldmlvdXMgc3RlcHNcbiAgICAgICAgZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV80Ynlsd3BrJywgJ3RlbXBsYXRlX3Zzc3Vmd2snLCB0aGlzKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTIScpO1xuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBSUxFRC4uLicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufSIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbmF2YmFyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhci10b2dnbGUnKTtcbiAgICBjb25zdCBuYXZiYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJJdGVtcycpO1xuXG4gICAgbmF2YmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuYXZiYXJJdGVtcy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgfSk7XG59KTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyotLS0tLS0tIEltcG9ydCBmb250cyAtLS0tLS0tKi9cblxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gIC8qLS0tLS0tLSBDb2xvciBWYXJpYWJsZSAtLS0tLS0tKi9cbiAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiAjMTE1ZTU5O1xuICAtLWJ1dHRvbi1iZy1jb2xvcjogIzE0YjhhNjtcbiAgLS1uaWdodC1tYWluLWJnLWNvbG9yOiAjMTExMTExO1xuICAtLWRheS1tYWluLWJnLWNvbG9yOiAjZmZmO1xuICAtLW1haW4tY29uc29sZS1jb2xvcjogIzAxMTYyNztcbiAgLS1yZWN0YW5nbGUtY29sb3I6ICMzZjNmNjk7XG4gIC0td3JhcC1iZy1jb2xvcjogIzJmMmYyZjtcbiAgLS13cmFwLWJvcmRlci1jb2xvcjogIzE5MjAyODtcbiAgLyotLS0tLS0tIEZvbnQgQ29sb3IgVmFyaWFibGUgLS0tLS0tLSovXG4gIC0tbWFpbi1mb250LWNvbG9yOiAjZjVmNWVkO1xuICAtLXN1Yi1mb250LWNvbG9yOiAjQkRCREJEO1xuICAtLWRheS1mb250LWNvbG9yOiAjMDExNjI3O1xuICAtLWRheS1zdWItZm9udC1jb2xvcjogIzA3MjYzZGVhO1xuICAvKi0tLS0tLS0gRm9udCBWYXJpYWJsZSAtLS0tLS0tKi9cbiAgLS1tYWluLWZvbnQ6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbn1cblxuLyotLS0tLS0tIE5pZ2h0IFRoZW1lIC0tLS0tLS0qL1xuXG5odG1sLFxuYm9keSB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwIDExcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xufVxuXG4vKi0tLS0tLS0gSGVhZGVyIC0tLS0tLS0qL1xuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdyYXAtYmctY29sb3IpO1xufVxuXG4udGhlbWVUb2dnbGU6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9vbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAtNnB4IDFweCAwIDNweCAjMjc1ZThlO1xuICBib3JkZXItbGVmdDozcHggc29saWQgIzI3NDc2RDtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OjhweDtcbiAgbWFyZ2luLXRvcDowcHg7XG4gIHRyYW5zaXRpb246IDJzO1xufVxuXG4uc3VuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDQ2MjtcbiAgYm94LXNoYWRvdzogMnB4IDBweCAwcHggMXB4ICNEMTlDMjk7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0cmFuc2l0aW9uOiAycztcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZiYXJJdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGdhcDogMnJlbTtcbn1cblxuLm5hdmJhckl0ZW1zID4gbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5uYXZiYXJJdGVtcyA+IGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5hOnZpc2l0ZWQsIGE6bGluaywgYTphY3RpdmUge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAwLjhyZW0gMi41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG59XG5cbi8qLS0tLS0tLSBNYWluIC0tLS0tLS0qL1xubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTByZW07XG59XG5cbi8qLS0tLS0tLSBSZWN0YW5nbGUgLS0tLS0tLSovXG4ucmVjdGFuZ2xlIHtcbiAgcGFkZGluZzogM3JlbSAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWN0YW5nbGUtY29sb3IpO1xufVxuXG4vKi0tLS0tLS0gQ29uc29sZSAtLS0tLS0tKi9cblxuLmNvbnNvbGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29uc29sZS1jb2xvcik7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYm94LXNoYWRvdzogMTFweCA3cHggMTZweCA1cHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cblxuLmNvbnNvbGVUb3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmNpcmNsZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVmNTY7XG59XG5cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZDJlO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdjOTNmO1xufVxuXG4uY29uc29sZUJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuLmNvbnNvbGVJdGVtcyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wdXJwbGVUZXh0IHtcbiAgY29sb3I6ICM5Nzc0YmI7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiAjNDI4NWY0O1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiAjZGJiMTdhO1xufVxuXG4vKi0tLS0tLS0gUGVyc29uYWwgSW5mbyAtLS0tLS0tKi9cbi5jb250YWluZXJJbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xufVxuXG4udHlwZVRleHQge1xuICB3aWR0aDogMTdjaDtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQ7XG4gIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcC1lbmQgaW5maW5pdGUsIHR5cGUgMi41cyBzdGVwcygyOCkgZm9yd2FyZHM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0eXBlIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5cbi5jb250YWluZXJJbmZvIHAge1xuICBjb2xvcjogdmFyKC0tc3ViLWZvbnQtY29sb3IpO1xufVxuXG4uY29udGFpbmVySW5mbyBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmNvbnRhaW5lckluZm8gaDIge1xuICBjb2xvcjogI2M1YzVjNDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbi5wZXJzb25hbEluZm8ge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLnNvY2lhbEl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qLS0tLS0tLSBTa2lsbCZUb29scyBTZWN0aW9uIC0tLS0tLS0qL1xuLmRpdmlzaW9uIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxM3JlbTtcbn1cblxuLnNlY3Rpb25EZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1zdWItZm9udC1jb2xvcik7XG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcbn1cblxuLyotLS0tLS0tIFNraWxsJlRvb2xzIFNlY3Rpb24gLSBTbGlkZXIgLS0tLS0tLSovXG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1idXR0b24tcHJldntcbiAgbGVmdDogLTQwcHg7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLW5leHR7XG4gIHJpZ2h0OiAtNDBweDtcbn1cblxuLnN3aXBlci1idXR0b24tcHJldixcbi5zd2lwZXItYnV0dG9uLW5leHQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcbn1cblxuLnN3aXBlciB7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zd2lwZXItd3JhcHBlciA+ICoge1xuICBhc3BlY3QtcmF0aW86IDQvMztcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMWEyMDI5O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMnJlbTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xufVxuXG4vKi0tLS0tLS0gUHJvamVjdHMgU2VjdGlvbiAtLS0tLS0tKi9cblxuLnByb2plY3RzQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMnJlbTtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG5cbi5wcm9qZWN0c1dyYXBwZXIge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjMWEyMDI5O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3RzV3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnByb2plY3RzRGF0YSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3RzRGF0YSBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG59XG5cbi5wcm9qZWN0c0RhdGEgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1zdWItZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5wcm9qZWN0c0xpbmtzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnByb2plY3RzTGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvamVjdHNMaW5rcyBsaSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuLnByb2plY3RzTGlua3MgYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4vKi0tLS0tLS0gQ29udGFjdCBTZWN0aW9uIC0tLS0tLS0qL1xuXG4uY29udGFjdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDE1cmVtO1xufVxuXG4jY29udGFjdEZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQwcmVtO1xuICBtYXJnaW46IDJyZW0gYXV0byAyMHJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMWEyMDI5O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcmVzaXplOiBub25lO1xufVxuXG4vKiBEYXkgVGhlbWUgKi9cbi5kYXlNb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSA+IGhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXktZm9udC1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLmNvbnRhaW5lckluZm8ge1xuICBjb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5jb250YWluZXJJbmZvIHAge1xuICBjb2xvcjogdmFyKC0tZGF5LXN1Yi1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAuY29udGFpbmVySW5mbyBoMiB7XG4gIGNvbG9yOiAjMDExYjMwO1xufVxuXG4uZGF5TW9kZSAqIC5kaXZpc2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAuc3dpcGVyLXNsaWRlIHtcbiAgYmFja2dyb3VuZDogI2U2ZTVlNTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kYXlNb2RlICogLnByb2plY3RzV3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNlNmU1ZTU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZGF5TW9kZSAqIC5wcm9qZWN0c1dyYXBwZXIgKiBoMiB7XG4gIGNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAucHJvamVjdHNXcmFwcGVyICogc3BhbntcbiAgY29sb3I6IHZhcigtLWRheS1zdWItZm9udC1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLnNlY3Rpb25EZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXktc3ViLWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiBpOmJlZm9yZSAge1xuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcilcbn1cblxuLmRheU1vZGUgKiAuYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLm5hdmJhckl0ZW1zLnNob3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogI2NvbnRhY3RGb3JtIHtcbiAgYmFja2dyb3VuZDogI2U2ZTVlNTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kYXlNb2RlIC5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsXG4uZGF5TW9kZSAuc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzIGZvciByZXNwb25zaXZlbmVzcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU2MHB4KXtcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwIDVyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xuICBib2R5IHtcbiAgICBtYXJnaW46IDAgMnJlbTtcbiAgfVxuXG4gIC5uYXZiYXJJdGVtcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td3JhcC1iZy1jb2xvcik7XG4gICAgei1pbmRleDogMTtcbn1cblxuLm5hdmJhckl0ZW1zLnNob3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4ubmF2YmFySXRlbXMgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLm5hdmJhckl0ZW1zID4gbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5uYXZiYXItdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYXIge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiA3cHggMDtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubmF2YmFySXRlbXMuc2hvdyBsaSB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb3dubG9hZFJlc3VtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbiNjb250YWN0Rm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBtYXJnaW46IDAgMXJlbTtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG5cbiAgbWFpbiB7XG4gICAgZ2FwOiAwcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5uYXZiYXJJdGVtcy5zaG93IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cblxuICAucmVjdGFuZ2xlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgfVxuXG4gIC5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsXG4gIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFj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OztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDtBQUNKO0FBQ0E7OztBQUdBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjs7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tLS0tLS0gSW1wb3J0IGZvbnRzIC0tLS0tLS0qL1xcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAvKi0tLS0tLS0gQ29sb3IgVmFyaWFibGUgLS0tLS0tLSovXFxuICAtLWJ1dHRvbi1ib3JkZXItY29sb3I6ICMxMTVlNTk7XFxuICAtLWJ1dHRvbi1iZy1jb2xvcjogIzE0YjhhNjtcXG4gIC0tbmlnaHQtbWFpbi1iZy1jb2xvcjogIzExMTExMTtcXG4gIC0tZGF5LW1haW4tYmctY29sb3I6ICNmZmY7XFxuICAtLW1haW4tY29uc29sZS1jb2xvcjogIzAxMTYyNztcXG4gIC0tcmVjdGFuZ2xlLWNvbG9yOiAjM2YzZjY5O1xcbiAgLS13cmFwLWJnLWNvbG9yOiAjMmYyZjJmO1xcbiAgLS13cmFwLWJvcmRlci1jb2xvcjogIzE5MjAyODtcXG4gIC8qLS0tLS0tLSBGb250IENvbG9yIFZhcmlhYmxlIC0tLS0tLS0qL1xcbiAgLS1tYWluLWZvbnQtY29sb3I6ICNmNWY1ZWQ7XFxuICAtLXN1Yi1mb250LWNvbG9yOiAjQkRCREJEO1xcbiAgLS1kYXktZm9udC1jb2xvcjogIzAxMTYyNztcXG4gIC0tZGF5LXN1Yi1mb250LWNvbG9yOiAjMDcyNjNkZWE7XFxuICAvKi0tLS0tLS0gRm9udCBWYXJpYWJsZSAtLS0tLS0tKi9cXG4gIC0tbWFpbi1mb250OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi8qLS0tLS0tLSBOaWdodCBUaGVtZSAtLS0tLS0tKi9cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwIDExcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4vKi0tLS0tLS0gSGVhZGVyIC0tLS0tLS0qL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTk5O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdyYXAtYmctY29sb3IpO1xcbn1cXG5cXG4udGhlbWVUb2dnbGU6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAtNnB4IDFweCAwIDNweCAjMjc1ZThlO1xcbiAgYm9yZGVyLWxlZnQ6M3B4IHNvbGlkICMyNzQ3NkQ7XFxuICBib3JkZXItcmFkaXVzOjUwJTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6OHB4O1xcbiAgbWFyZ2luLXRvcDowcHg7XFxuICB0cmFuc2l0aW9uOiAycztcXG59XFxuXFxuLnN1biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkNDYyO1xcbiAgYm94LXNoYWRvdzogMnB4IDBweCAwcHggMXB4ICNEMTlDMjk7XFxuICBib3JkZXItcmFkaXVzOjUwJTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZiYXJJdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ubmF2YmFySXRlbXMgPiBsaTpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5uYXZiYXJJdGVtcyA+IGxpOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmE6dmlzaXRlZCwgYTpsaW5rLCBhOmFjdGl2ZSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAwLjhyZW0gMi41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi8qLS0tLS0tLSBNYWluIC0tLS0tLS0qL1xcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMTByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHJlbTtcXG59XFxuXFxuLyotLS0tLS0tIFJlY3RhbmdsZSAtLS0tLS0tKi9cXG4ucmVjdGFuZ2xlIHtcXG4gIHBhZGRpbmc6IDNyZW0gM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWN0YW5nbGUtY29sb3IpO1xcbn1cXG5cXG4vKi0tLS0tLS0gQ29uc29sZSAtLS0tLS0tKi9cXG5cXG4uY29uc29sZUJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29uc29sZS1jb2xvcik7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYm94LXNoYWRvdzogMTFweCA3cHggMTZweCA1cHggcmdiYSgwLDAsMCwwLjc1KTtcXG59XFxuXFxuLmNvbnNvbGVUb3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ZjU2O1xcbn1cXG5cXG4ueWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJkMmU7XFxufVxcblxcbi5ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdjOTNmO1xcbn1cXG5cXG4uY29uc29sZUJvdHRvbSB7XFxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY29uc29sZUl0ZW1zIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHVycGxlVGV4dCB7XFxuICBjb2xvcjogIzk3NzRiYjtcXG59XFxuXFxuLmJsdWVUZXh0IHtcXG4gIGNvbG9yOiAjNDI4NWY0O1xcbn1cXG5cXG4ub3JhbmdlVGV4dCB7XFxuICBjb2xvcjogI2RiYjE3YTtcXG59XFxuXFxuLyotLS0tLS0tIFBlcnNvbmFsIEluZm8gLS0tLS0tLSovXFxuLmNvbnRhaW5lckluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNzUwcHg7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLnR5cGVUZXh0IHtcXG4gIHdpZHRoOiAxN2NoO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQ7XFxuICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXAtZW5kIGluZmluaXRlLCB0eXBlIDIuNXMgc3RlcHMoMjgpIGZvcndhcmRzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgNTAlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0eXBlIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxufVxcblxcbi5jb250YWluZXJJbmZvIHAge1xcbiAgY29sb3I6IHZhcigtLXN1Yi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmNvbnRhaW5lckluZm8gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uY29udGFpbmVySW5mbyBoMiB7XFxuICBjb2xvcjogI2M1YzVjNDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnBlcnNvbmFsSW5mbyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnNvY2lhbEl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyotLS0tLS0tIFNraWxsJlRvb2xzIFNlY3Rpb24gLS0tLS0tLSovXFxuLmRpdmlzaW9uIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxM3JlbTtcXG59XFxuXFxuLnNlY3Rpb25EZXNjcmlwdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tc3ViLWZvbnQtY29sb3IpO1xcbiAgbWFyZ2luLXRvcDogMC44cmVtO1xcbn1cXG5cXG4vKi0tLS0tLS0gU2tpbGwmVG9vbHMgU2VjdGlvbiAtIFNsaWRlciAtLS0tLS0tKi9cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1wcmV2e1xcbiAgbGVmdDogLTQwcHg7XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLW5leHR7XFxuICByaWdodDogLTQwcHg7XFxufVxcblxcbi5zd2lwZXItYnV0dG9uLXByZXYsXFxuLnN3aXBlci1idXR0b24tbmV4dCB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMTBweCFpbXBvcnRhbnQ7XFxufVxcblxcbi5zd2lwZXIge1xcbiAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zd2lwZXItd3JhcHBlciA+ICoge1xcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XFxufVxcblxcbi5zd2lwZXItc2xpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMWEyMDI5O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc3dpcGVyLXNsaWRlIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4vKi0tLS0tLS0gUHJvamVjdHMgU2VjdGlvbiAtLS0tLS0tKi9cXG5cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJyZW07XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuXFxuLnByb2plY3RzV3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICMxYTIwMjk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RzV3JhcHBlciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLnByb2plY3RzRGF0YSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0c0RhdGEgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0c0RhdGEgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tc3ViLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5wcm9qZWN0c0xpbmtzIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0c0xpbmtzIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3RzTGlua3MgbGkgaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3RzTGlua3MgYSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyotLS0tLS0tIENvbnRhY3QgU2VjdGlvbiAtLS0tLS0tKi9cXG5cXG4uY29udGFjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cmVtO1xcbn1cXG5cXG4jY29udGFjdEZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gIG1hcmdpbjogMnJlbSBhdXRvIDIwcmVtIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjMWEyMDI5O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLyogRGF5IFRoZW1lICovXFxuLmRheU1vZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgPiBoZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5jb250YWluZXJJbmZvIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXktZm9udC1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLmNvbnRhaW5lckluZm8gcCB7XFxuICBjb2xvcjogdmFyKC0tZGF5LXN1Yi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAuY29udGFpbmVySW5mbyBoMiB7XFxuICBjb2xvcjogIzAxMWIzMDtcXG59XFxuXFxuLmRheU1vZGUgKiAuZGl2aXNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5zd2lwZXItc2xpZGUge1xcbiAgYmFja2dyb3VuZDogI2U2ZTVlNTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmRheU1vZGUgKiAucHJvamVjdHNXcmFwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICNlNmU1ZTU7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5kYXlNb2RlICogLnByb2plY3RzV3JhcHBlciAqIGgyIHtcXG4gIGNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAucHJvamVjdHNXcmFwcGVyICogc3BhbntcXG4gIGNvbG9yOiB2YXIoLS1kYXktc3ViLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5zZWN0aW9uRGVzY3JpcHRpb24ge1xcbiAgY29sb3I6IHZhcigtLWRheS1zdWItZm9udC1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogaTpiZWZvcmUgIHtcXG4gIGNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKVxcbn1cXG5cXG4uZGF5TW9kZSAqIC5iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLm5hdmJhckl0ZW1zLnNob3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqICNjb250YWN0Rm9ybSB7XFxuICBiYWNrZ3JvdW5kOiAjZTZlNWU1O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uZGF5TW9kZSAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLFxcbi5kYXlNb2RlIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4vKiBNZWRpYSBRdWVyaWVzIGZvciByZXNwb25zaXZlbmVzcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NjBweCl7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwIDVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDAgMnJlbTtcXG4gIH1cXG5cXG4gIC5uYXZiYXJJdGVtcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2MHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13cmFwLWJnLWNvbG9yKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLm5hdmJhckl0ZW1zLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLm5hdmJhckl0ZW1zIGxpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5uYXZiYXJJdGVtcyA+IGxpOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJhciB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luOiA3cHggMDtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLm5hdmJhckl0ZW1zLnNob3cgbGkge1xcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRvd25sb2FkUmVzdW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxufVxcblxcbiNjb250YWN0Rm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgZ2FwOiAwcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcblxcbiAgLm5hdmJhckl0ZW1zLnNob3cge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICB9XFxuXFxuICAucmVjdGFuZ2xlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgfVxcblxcbiAgLnN3aXBlci1zbGlkZS1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgfVxcblxcbiAgLnN3aXBlci1idXR0b24tbmV4dDphZnRlcixcXG4gIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2Nhcm91c2VsJztcbmltcG9ydCAnLi9zY3JpcHRzL2RheW5pZ2h0JztcbmltcG9ydCAnLi9zY3JpcHRzL25hdmJhcic7XG5pbXBvcnQgJy4vc2NyaXB0cy9lbWFpbCc7Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN3aXBlciIsIlN3aXBlciIsImRpcmVjdGlvbiIsImxvb3AiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwicGFnaW5hdGlvbiIsImVsIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInNjcm9sbGJhciIsImNpY2xlIiwicXVlcnlTZWxlY3RvciIsIm1vb24iLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTmFtZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJlbWFpbGpzIiwiaW5pdCIsIndpbmRvdyIsIm9ubG9hZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb250YWN0X251bWJlciIsInZhbHVlIiwiTWF0aCIsInJhbmRvbSIsInNlbmRGb3JtIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm5hdmJhclRvZ2dsZSIsIm5hdmJhckl0ZW1zIiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==