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

var cicle = document.querySelector('.themeToggle');
cicle.addEventListener('click', function () {
  var moon = document.getElementById("moon");
  if (moon.className === "moon") {
    moon.className = "sun";
    document.body.classList.remove("nightMode");
    document.body.classList.add("dayMode");
  } else {
    moon.className = "moon";
    document.body.classList.remove("dayMode");
    document.body.classList.add("nightMode");
  }
});

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
  --sub-font-color: #878888;
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
  background-color: var(--night-main-bg-color);
  font-family: var(--main-font);
  color: var(--main-font-color);
}

/*------- Header -------*/
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.downloadResume {
  background-color: var(--night-main-bg-color);
  color: var(--main-font-color);
  font-weight: 800;
  font-size: 1.2rem;
  padding: 0.8rem 2.5rem;
  border: 2px solid var(--main-font-color);
}

.downloadResume:hover {
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
  background-color: var(--wrap-bg-color);
  border-radius: 5px;
  border: 3px solid var(--wrap-border-color);
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
  background-color: var(--wrap-bg-color);
  border-radius: 8px;
  border: 3px solid var(--wrap-border-color);
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.projectsWrapper img {
  width: 100%;
  height: 320px;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 1rem;
}

.projectsData {
  padding: 1rem;
}

.projectsData h2 {
  margin-bottom: 0.6rem;
  color: var(--main-font-color)
}

.projectsData span {
  color: var(--sub-font-color);
  font-size: 0.9rem;
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
  background-color: var(--day-main-bg-color);
}

.dayMode * .projectsWrapper {
  background-color: var(--day-main-bg-color);
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

.dayMode * .downloadResume {
  background-color: var(--day-main-bg-color);
  color: var(--night-main-bg-color);
  border-color: var(--night-main-bg-color);
}

.dayMode * .downloadResume:hover {
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

/* Media Queries for responsiveness */
@media screen and (max-width: 1560px){
  body {
  }
}

@media screen and (max-width: 900px){
  body {
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
  }

  header {
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
    transform: scale(0.6);
  }

  .swiper-slide-description {
    font-size: 0.6rem;
  }

}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/*------- Import fonts -------*/\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  /*------- Color Variable -------*/\n  --button-border-color: #115e59;\n  --button-bg-color: #14b8a6;\n  --night-main-bg-color: #111111;\n  --day-main-bg-color: #fff;\n  --main-console-color: #011627;\n  --rectangle-color: #3f3f69;\n  --wrap-bg-color: #2f2f2f;\n  --wrap-border-color: #192028;\n  /*------- Font Color Variable -------*/\n  --main-font-color: #f5f5ed;\n  --sub-font-color: #878888;\n  --day-font-color: #011627;\n  --day-sub-font-color: #07263dea;\n  /*------- Font Variable -------*/\n  --main-font: 'Roboto Mono', monospace;\n}\n\n/*------- Night Theme -------*/\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nbody {\n  background-color: var(--night-main-bg-color);\n  font-family: var(--main-font);\n  color: var(--main-font-color);\n}\n\n/*------- Header -------*/\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--night-main-bg-color);\n  color: var(--main-font-color);\n  font-size: 1.2rem;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  border-bottom: 2px solid var(--wrap-bg-color);\n}\n\n.themeToggle:hover{\n    cursor: pointer;\n}\n\n.moon {\n  background-color: transparent;\n  box-shadow: -6px 1px 0 3px #275e8e;\n  border-left:3px solid #27476D;\n  border-radius:50%;\n  width: 50px;\n  height: 50px;\n  margin-left:8px;\n  margin-top:0px;\n  transition: 2s;\n}\n\n.sun {\n  background-color: #fdd462;\n  box-shadow: 2px 0px 0px 1px #D19C29;\n  border-radius:50%;\n  width: 50px;\n  height: 50px;\n  transition: 2s;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n}\n\n.navbarItems {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style-type: none;\n  gap: 2rem;\n}\n\n.navbarItems > li:last-child {\n  border-bottom: none;\n}\n\n.navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-main-bg-color);\n  transform: scale(1.1);\n}\n\na:visited, a:link, a:active {\n  color: inherit;\n  text-decoration: none;\n}\n\n.downloadResume {\n  background-color: var(--night-main-bg-color);\n  color: var(--main-font-color);\n  font-weight: 800;\n  font-size: 1.2rem;\n  padding: 0.8rem 2.5rem;\n  border: 2px solid var(--main-font-color);\n}\n\n.downloadResume:hover {\n  background-color: var(--day-main-bg-color);\n  color: var(--night-main-bg-color);\n}\n\n/*------- Main -------*/\nmain {\n  width: 100%;\n  padding-top: 10rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10rem;\n}\n\n/*------- Rectangle -------*/\n.rectangle {\n  padding: 3rem 3rem;\n  border-radius: 1rem;\n  background-color: var(--rectangle-color);\n}\n\n/*------- Console -------*/\n\n.consoleBody {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  background-color: var(--main-console-color);\n  padding: 1.5rem;\n  border-radius: 2rem;\n  box-shadow: 11px 7px 16px 5px rgba(0,0,0,0.75);\n}\n\n.consoleTop {\n  display: flex;\n  gap: 0.8rem;\n  margin-bottom: 2rem;\n}\n\n.circle {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n}\n\n.red {\n  background-color: #ff5f56;\n}\n\n.yellow {\n  background-color: #ffbd2e;\n}\n\n.green {\n  background-color: #27c93f;\n}\n\n.consoleBottom {\n  padding-bottom: 5rem;\n  color: var(--main-font-color);\n}\n\n.consoleItems {\n  list-style-type: none;\n  margin-left: 1rem;\n}\n\n.purpleText {\n  color: #9774bb;\n}\n\n.blueText {\n  color: #4285f4;\n}\n\n.orangeText {\n  color: #dbb17a;\n}\n\n/*------- Personal Info -------*/\n.containerInfo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 750px;\n  color: var(--main-font-color);\n}\n\n.containerInfo p {\n  color: var(--sub-font-color);\n}\n\n.containerInfo h1 {\n  font-size: 3rem;\n}\n\n.containerInfo h2 {\n  color: #c5c5c4;\n  font-size: 1.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.personalInfo {\n  padding-bottom: 1rem;\n}\n\n.socialItems {\n  display: flex;\n  gap: 1rem;\n  flex-direction: row;\n  list-style-type: none;\n  align-items: center;\n}\n\n/*------- Skill&Tools Section -------*/\n.division {\n  height: 1px;\n  min-width: 100%;\n  background-color: var(--main-font-color);\n  margin-bottom: 2.5rem;\n  margin-top: 2.5rem;\n}\n\nsection {\n  margin-top: 13rem;\n}\n\n.sectionDescription {\n  color: var(--sub-font-color);\n  margin-top: 0.8rem;\n}\n\n/*------- Skill&Tools Section - Slider -------*/\n\n.swiper-container {\n  position: relative;\n  width: 70%;\n  margin: 0 auto;\n  margin-top: 2rem;\n}\n\n.swiper-container .swiper-button-prev{\n  left: -40px;\n}\n\n.swiper-container .swiper-button-next{\n  right: -40px;\n}\n\n.swiper-button-prev,\n.swiper-button-next {\n  color: var(--main-font-color);\n  font-size: 10px!important;\n}\n\n.swiper {\n  max-width: 768px;\n  display: flex;\n}\n\n.swiper-wrapper > * {\n  aspect-ratio: 4/3;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--wrap-bg-color);\n  border-radius: 5px;\n  border: 3px solid var(--wrap-border-color);\n  width: 100%;\n  height: auto;\n  padding: 2rem;\n  gap: 1rem;\n}\n\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  min-width: 50px;\n  min-height: 50px;\n  display: block;\n  border-radius: .5rem;\n}\n\n/*------- Projects Section -------*/\n\n.projectsContainer {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin: 2rem 0;\n}\n\n.projectsWrapper {\n  max-width: 400px;\n  background-color: var(--wrap-bg-color);\n  border-radius: 8px;\n  border: 3px solid var(--wrap-border-color);\n  overflow: hidden;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.projectsWrapper img {\n  width: 100%;\n  height: 320px;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  padding: 1rem;\n}\n\n.projectsData {\n  padding: 1rem;\n}\n\n.projectsData h2 {\n  margin-bottom: 0.6rem;\n  color: var(--main-font-color)\n}\n\n.projectsData span {\n  color: var(--sub-font-color);\n  font-size: 0.9rem;\n}\n\n.projectsLinks {\n  margin-top: 1rem;\n}\n\n.projectsLinks ul {\n  list-style: none;\n  padding: 0;\n  display: flex;\n}\n\n.projectsLinks li i {\n  margin-right: 1rem;\n  color: var(--main-font-color);\n}\n\n.projectsLinks a img {\n  width: 100%;\n  height: auto;\n  border-radius: 50%;\n  transition: transform 0.2s ease-in-out;\n}\n\n/*------- Contact Section -------*/\n\n.contactContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  flex-wrap: wrap;\n  margin-bottom: 15rem;\n}\n\n/* Day Theme */\n.dayMode {\n  background-color: var(--day-main-bg-color);\n  color: var(--day-font-color);\n}\n\n.dayMode > header {\n  background-color: var(--day-main-bg-color);\n  color: var(--day-font-color);\n}\n\n.dayMode * .navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-font-color);\n}\n\n.dayMode * .containerInfo {\n  color: var(--day-font-color);\n}\n\n.dayMode * .containerInfo p {\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * .containerInfo h2 {\n  color: #011b30;\n}\n\n.dayMode * .division {\n  background-color: var(--day-font-color);\n}\n\n.dayMode * .swiper-slide {\n  background-color: var(--day-main-bg-color);\n}\n\n.dayMode * .projectsWrapper {\n  background-color: var(--day-main-bg-color);\n}\n\n.dayMode * .projectsWrapper * h2 {\n  color: var(--night-main-bg-color);\n}\n\n.dayMode * .projectsWrapper * span{\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * .sectionDescription {\n  color: var(--day-sub-font-color);\n}\n\n.dayMode * .downloadResume {\n  background-color: var(--day-main-bg-color);\n  color: var(--night-main-bg-color);\n  border-color: var(--night-main-bg-color);\n}\n\n.dayMode * .downloadResume:hover {\n  background-color: var(--night-main-bg-color);\n  color: var(--day-main-bg-color);\n}\n\n.dayMode * i:before  {\n  color: var(--night-main-bg-color)\n}\n\n.dayMode * .bar {\n  background-color: var(--night-main-bg-color);\n}\n\n.dayMode * .navbarItems.show {\n  background-color: var(--day-main-bg-color);\n}\n\n/* Media Queries for responsiveness */\n@media screen and (max-width: 1560px){\n  body {\n  }\n}\n\n@media screen and (max-width: 900px){\n  body {\n  }\n\n  .navbarItems {\n    display: none;\n    flex-direction: row;\n    position: absolute;\n    top: 60px;\n    left: 0;\n    width: 100%;\n    background-color: var(--night-main-bg-color);\n    border-bottom: 2px solid var(--wrap-bg-color);\n    z-index: 1;\n}\n\n.navbarItems.show {\n    display: flex;\n    flex-direction: column;\n    margin-top: 3.5rem;\n    position: fixed;\n}\n\n.navbarItems li {\n    margin: 0;\n    text-align: center;\n    padding: 10px;\n}\n\n.navbarItems > li:hover {\n  border-bottom: 1px solid var(--day-main-bg-color);\n  transform: scale(1.1);\n}\n\n.navbar-toggle {\n    display: block;\n    cursor: pointer;\n}\n\n.bar {\n    width: 30px;\n    height: 3px;\n    background-color: #fff;\n    margin: 7px 0;\n    transition: 0.4s;\n}\n\n.navbarItems.show li {\n    animation: slideIn 0.3s ease-in-out;\n}\n\n.downloadResume:hover {\n  background-color: none;\n}\n\n@keyframes slideIn {\n    from {\n        transform: translateY(-20px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n}\n\n\n@media screen and (max-width: 600px) {\n  body {\n  }\n\n  header {\n  }\n\n  main {\n    gap: 0rem;\n    padding-top: 0;\n  }\n\n  section {\n    margin-top: 0;\n  }\n\n  .navbarItems.show {\n    margin-top: 1.5rem;\n  }\n\n  .rectangle {\n    transform: scale(0.6);\n  }\n\n  .swiper-slide-description {\n    font-size: 0.6rem;\n  }\n\n}\n"],"sourceRoot":""}]);
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




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sK0ZBQStGLFFBQVEsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZ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Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vc3JjL3NjcmlwdHMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9zY3JpcHRzL2RheW5pZ2h0LmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9zcmMvc2NyaXB0cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1BvcnRvZm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Qb3J0b2ZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUG9ydG9mb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1BvcnRvZm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL1BvcnRvZm9saW8vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICBsb29wOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDIwMDAsIC8vIFNldCB0aGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzICgzIHNlY29uZHMgaW4gdGhpcyBleGFtcGxlKVxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLCAvLyBBbGxvdyBuYXZpZ2F0aW9uIHdoaWxlIGF1dG9wbGF5aW5nXG4gICAgfSxcbiAgXG4gICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIH0sXG4gIFxuICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICBcbiAgICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgIH0sXG4gIH0pO1xufSk7IiwiY29uc3QgY2ljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWVUb2dnbGUnKTtcblxuY2ljbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbW9vbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vblwiKTtcbiAgICBpZiAobW9vbi5jbGFzc05hbWUgPT09IFwibW9vblwiKSB7XG4gICAgICAgIG1vb24uY2xhc3NOYW1lID0gXCJzdW5cIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibmlnaHRNb2RlXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJkYXlNb2RlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vb24uY2xhc3NOYW1lID0gXCJtb29uXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImRheU1vZGVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm5pZ2h0TW9kZVwiKTtcbiAgICB9XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbmF2YmFyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhci10b2dnbGUnKTtcbiAgICBjb25zdCBuYXZiYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJJdGVtcycpO1xuXG4gICAgbmF2YmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuYXZiYXJJdGVtcy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgfSk7XG59KTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyotLS0tLS0tIEltcG9ydCBmb250cyAtLS0tLS0tKi9cblxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gIC8qLS0tLS0tLSBDb2xvciBWYXJpYWJsZSAtLS0tLS0tKi9cbiAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiAjMTE1ZTU5O1xuICAtLWJ1dHRvbi1iZy1jb2xvcjogIzE0YjhhNjtcbiAgLS1uaWdodC1tYWluLWJnLWNvbG9yOiAjMTExMTExO1xuICAtLWRheS1tYWluLWJnLWNvbG9yOiAjZmZmO1xuICAtLW1haW4tY29uc29sZS1jb2xvcjogIzAxMTYyNztcbiAgLS1yZWN0YW5nbGUtY29sb3I6ICMzZjNmNjk7XG4gIC0td3JhcC1iZy1jb2xvcjogIzJmMmYyZjtcbiAgLS13cmFwLWJvcmRlci1jb2xvcjogIzE5MjAyODtcbiAgLyotLS0tLS0tIEZvbnQgQ29sb3IgVmFyaWFibGUgLS0tLS0tLSovXG4gIC0tbWFpbi1mb250LWNvbG9yOiAjZjVmNWVkO1xuICAtLXN1Yi1mb250LWNvbG9yOiAjODc4ODg4O1xuICAtLWRheS1mb250LWNvbG9yOiAjMDExNjI3O1xuICAtLWRheS1zdWItZm9udC1jb2xvcjogIzA3MjYzZGVhO1xuICAvKi0tLS0tLS0gRm9udCBWYXJpYWJsZSAtLS0tLS0tKi9cbiAgLS1tYWluLWZvbnQ6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbn1cblxuLyotLS0tLS0tIE5pZ2h0IFRoZW1lIC0tLS0tLS0qL1xuXG5odG1sLFxuYm9keSB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuLyotLS0tLS0tIEhlYWRlciAtLS0tLS0tKi9cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13cmFwLWJnLWNvbG9yKTtcbn1cblxuLnRoZW1lVG9nZ2xlOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogLTZweCAxcHggMCAzcHggIzI3NWU4ZTtcbiAgYm9yZGVyLWxlZnQ6M3B4IHNvbGlkICMyNzQ3NkQ7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDo4cHg7XG4gIG1hcmdpbi10b3A6MHB4O1xuICB0cmFuc2l0aW9uOiAycztcbn1cblxuLnN1biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGQ0NjI7XG4gIGJveC1zaGFkb3c6IDJweCAwcHggMHB4IDFweCAjRDE5QzI5O1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdHJhbnNpdGlvbjogMnM7XG59XG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2YmFySXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBnYXA6IDJyZW07XG59XG5cbi5uYXZiYXJJdGVtcyA+IGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuYTp2aXNpdGVkLCBhOmxpbmssIGE6YWN0aXZlIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmRvd25sb2FkUmVzdW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogMC44cmVtIDIuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuLmRvd25sb2FkUmVzdW1lOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG59XG5cbi8qLS0tLS0tLSBNYWluIC0tLS0tLS0qL1xubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTByZW07XG59XG5cbi8qLS0tLS0tLSBSZWN0YW5nbGUgLS0tLS0tLSovXG4ucmVjdGFuZ2xlIHtcbiAgcGFkZGluZzogM3JlbSAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWN0YW5nbGUtY29sb3IpO1xufVxuXG4vKi0tLS0tLS0gQ29uc29sZSAtLS0tLS0tKi9cblxuLmNvbnNvbGVCb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29uc29sZS1jb2xvcik7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYm94LXNoYWRvdzogMTFweCA3cHggMTZweCA1cHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cblxuLmNvbnNvbGVUb3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmNpcmNsZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVmNTY7XG59XG5cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZDJlO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdjOTNmO1xufVxuXG4uY29uc29sZUJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuLmNvbnNvbGVJdGVtcyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5wdXJwbGVUZXh0IHtcbiAgY29sb3I6ICM5Nzc0YmI7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiAjNDI4NWY0O1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiAjZGJiMTdhO1xufVxuXG4vKi0tLS0tLS0gUGVyc29uYWwgSW5mbyAtLS0tLS0tKi9cbi5jb250YWluZXJJbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xufVxuXG4uY29udGFpbmVySW5mbyBwIHtcbiAgY29sb3I6IHZhcigtLXN1Yi1mb250LWNvbG9yKTtcbn1cblxuLmNvbnRhaW5lckluZm8gaDEge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5jb250YWluZXJJbmZvIGgyIHtcbiAgY29sb3I6ICNjNWM1YzQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuXG4ucGVyc29uYWxJbmZvIHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5zb2NpYWxJdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKi0tLS0tLS0gU2tpbGwmVG9vbHMgU2VjdGlvbiAtLS0tLS0tKi9cbi5kaXZpc2lvbiB7XG4gIGhlaWdodDogMXB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTNyZW07XG59XG5cbi5zZWN0aW9uRGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0tc3ViLWZvbnQtY29sb3IpO1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG59XG5cbi8qLS0tLS0tLSBTa2lsbCZUb29scyBTZWN0aW9uIC0gU2xpZGVyIC0tLS0tLS0qL1xuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLXByZXZ7XG4gIGxlZnQ6IC00MHB4O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLWJ1dHRvbi1uZXh0e1xuICByaWdodDogLTQwcHg7XG59XG5cbi5zd2lwZXItYnV0dG9uLXByZXYsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTBweCFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXIge1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3dpcGVyLXdyYXBwZXIgPiAqIHtcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3JhcC1iZy1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0td3JhcC1ib3JkZXItY29sb3IpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xuICBnYXA6IDFyZW07XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XG59XG5cbi8qLS0tLS0tLSBQcm9qZWN0cyBTZWN0aW9uIC0tLS0tLS0qL1xuXG4ucHJvamVjdHNDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAycmVtO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLnByb2plY3RzV3JhcHBlciB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdyYXAtYmctY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXdyYXAtYm9yZGVyLWNvbG9yKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnByb2plY3RzV3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ucHJvamVjdHNEYXRhIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnByb2plY3RzRGF0YSBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcilcbn1cblxuLnByb2plY3RzRGF0YSBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXN1Yi1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5wcm9qZWN0c0xpbmtzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnByb2plY3RzTGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvamVjdHNMaW5rcyBsaSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcbn1cblxuLnByb2plY3RzTGlua3MgYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4vKi0tLS0tLS0gQ29udGFjdCBTZWN0aW9uIC0tLS0tLS0qL1xuXG4uY29udGFjdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDE1cmVtO1xufVxuXG4vKiBEYXkgVGhlbWUgKi9cbi5kYXlNb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSA+IGhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1tYWluLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXktZm9udC1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLmNvbnRhaW5lckluZm8ge1xuICBjb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5jb250YWluZXJJbmZvIHAge1xuICBjb2xvcjogdmFyKC0tZGF5LXN1Yi1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAuY29udGFpbmVySW5mbyBoMiB7XG4gIGNvbG9yOiAjMDExYjMwO1xufVxuXG4uZGF5TW9kZSAqIC5kaXZpc2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAuc3dpcGVyLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5wcm9qZWN0c1dyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLnByb2plY3RzV3JhcHBlciAqIGgyIHtcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5wcm9qZWN0c1dyYXBwZXIgKiBzcGFue1xuICBjb2xvcjogdmFyKC0tZGF5LXN1Yi1mb250LWNvbG9yKTtcbn1cblxuLmRheU1vZGUgKiAuc2VjdGlvbkRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWRheS1zdWItZm9udC1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLmRvd25sb2FkUmVzdW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogLmRvd25sb2FkUmVzdW1lOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XG59XG5cbi5kYXlNb2RlICogaTpiZWZvcmUgIHtcbiAgY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpXG59XG5cbi5kYXlNb2RlICogLmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xufVxuXG4uZGF5TW9kZSAqIC5uYXZiYXJJdGVtcy5zaG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzIGZvciByZXNwb25zaXZlbmVzcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU2MHB4KXtcbiAgYm9keSB7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xuICBib2R5IHtcbiAgfVxuXG4gIC5uYXZiYXJJdGVtcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td3JhcC1iZy1jb2xvcik7XG4gICAgei1pbmRleDogMTtcbn1cblxuLm5hdmJhckl0ZW1zLnNob3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4ubmF2YmFySXRlbXMgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLm5hdmJhckl0ZW1zID4gbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5uYXZiYXItdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYXIge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiA3cHggMDtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubmF2YmFySXRlbXMuc2hvdyBsaSB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb3dubG9hZFJlc3VtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgfVxuXG4gIGhlYWRlciB7XG4gIH1cblxuICBtYWluIHtcbiAgICBnYXA6IDByZW07XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLm5hdmJhckl0ZW1zLnNob3cge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgfVxuXG4gIC5yZWN0YW5nbGUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICB9XG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsK0JBQStCOztBQUUvQjs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixzQ0FBc0M7RUFDdEMsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxxQ0FBcUM7QUFDdkM7O0FBRUEsOEJBQThCOztBQUU5Qjs7RUFFRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsNkJBQTZCO0VBQzdCLDZCQUE2QjtBQUMvQjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qiw0Q0FBNEM7RUFDNUMsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFlBQVk7RUFDWiw2Q0FBNkM7QUFDL0M7O0FBRUE7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O0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0tLS0tLSBJbXBvcnQgZm9udHMgLS0tLS0tLSovXFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC8qLS0tLS0tLSBDb2xvciBWYXJpYWJsZSAtLS0tLS0tKi9cXG4gIC0tYnV0dG9uLWJvcmRlci1jb2xvcjogIzExNWU1OTtcXG4gIC0tYnV0dG9uLWJnLWNvbG9yOiAjMTRiOGE2O1xcbiAgLS1uaWdodC1tYWluLWJnLWNvbG9yOiAjMTExMTExO1xcbiAgLS1kYXktbWFpbi1iZy1jb2xvcjogI2ZmZjtcXG4gIC0tbWFpbi1jb25zb2xlLWNvbG9yOiAjMDExNjI3O1xcbiAgLS1yZWN0YW5nbGUtY29sb3I6ICMzZjNmNjk7XFxuICAtLXdyYXAtYmctY29sb3I6ICMyZjJmMmY7XFxuICAtLXdyYXAtYm9yZGVyLWNvbG9yOiAjMTkyMDI4O1xcbiAgLyotLS0tLS0tIEZvbnQgQ29sb3IgVmFyaWFibGUgLS0tLS0tLSovXFxuICAtLW1haW4tZm9udC1jb2xvcjogI2Y1ZjVlZDtcXG4gIC0tc3ViLWZvbnQtY29sb3I6ICM4Nzg4ODg7XFxuICAtLWRheS1mb250LWNvbG9yOiAjMDExNjI3O1xcbiAgLS1kYXktc3ViLWZvbnQtY29sb3I6ICMwNzI2M2RlYTtcXG4gIC8qLS0tLS0tLSBGb250IFZhcmlhYmxlIC0tLS0tLS0qL1xcbiAgLS1tYWluLWZvbnQ6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyotLS0tLS0tIE5pZ2h0IFRoZW1lIC0tLS0tLS0qL1xcblxcbmh0bWwsXFxuYm9keSB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi8qLS0tLS0tLSBIZWFkZXIgLS0tLS0tLSovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13cmFwLWJnLWNvbG9yKTtcXG59XFxuXFxuLnRoZW1lVG9nZ2xlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogLTZweCAxcHggMCAzcHggIzI3NWU4ZTtcXG4gIGJvcmRlci1sZWZ0OjNweCBzb2xpZCAjMjc0NzZEO1xcbiAgYm9yZGVyLXJhZGl1czo1MCU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1sZWZ0OjhweDtcXG4gIG1hcmdpbi10b3A6MHB4O1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcblxcbi5zdW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDQ2MjtcXG4gIGJveC1zaGFkb3c6IDJweCAwcHggMHB4IDFweCAjRDE5QzI5O1xcbiAgYm9yZGVyLXJhZGl1czo1MCU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2YmFySXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLm5hdmJhckl0ZW1zID4gbGk6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4ubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5hOnZpc2l0ZWQsIGE6bGluaywgYTphY3RpdmUge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5kb3dubG9hZFJlc3VtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC44cmVtIDIuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi5kb3dubG9hZFJlc3VtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi8qLS0tLS0tLSBNYWluIC0tLS0tLS0qL1xcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMTByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHJlbTtcXG59XFxuXFxuLyotLS0tLS0tIFJlY3RhbmdsZSAtLS0tLS0tKi9cXG4ucmVjdGFuZ2xlIHtcXG4gIHBhZGRpbmc6IDNyZW0gM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWN0YW5nbGUtY29sb3IpO1xcbn1cXG5cXG4vKi0tLS0tLS0gQ29uc29sZSAtLS0tLS0tKi9cXG5cXG4uY29uc29sZUJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29uc29sZS1jb2xvcik7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYm94LXNoYWRvdzogMTFweCA3cHggMTZweCA1cHggcmdiYSgwLDAsMCwwLjc1KTtcXG59XFxuXFxuLmNvbnNvbGVUb3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ZjU2O1xcbn1cXG5cXG4ueWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJkMmU7XFxufVxcblxcbi5ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdjOTNmO1xcbn1cXG5cXG4uY29uc29sZUJvdHRvbSB7XFxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY29uc29sZUl0ZW1zIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHVycGxlVGV4dCB7XFxuICBjb2xvcjogIzk3NzRiYjtcXG59XFxuXFxuLmJsdWVUZXh0IHtcXG4gIGNvbG9yOiAjNDI4NWY0O1xcbn1cXG5cXG4ub3JhbmdlVGV4dCB7XFxuICBjb2xvcjogI2RiYjE3YTtcXG59XFxuXFxuLyotLS0tLS0tIFBlcnNvbmFsIEluZm8gLS0tLS0tLSovXFxuLmNvbnRhaW5lckluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNzUwcHg7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmNvbnRhaW5lckluZm8gcCB7XFxuICBjb2xvcjogdmFyKC0tc3ViLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY29udGFpbmVySW5mbyBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5jb250YWluZXJJbmZvIGgyIHtcXG4gIGNvbG9yOiAjYzVjNWM0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucGVyc29uYWxJbmZvIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uc29jaWFsSXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKi0tLS0tLS0gU2tpbGwmVG9vbHMgU2VjdGlvbiAtLS0tLS0tKi9cXG4uZGl2aXNpb24ge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDEzcmVtO1xcbn1cXG5cXG4uc2VjdGlvbkRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1zdWItZm9udC1jb2xvcik7XFxuICBtYXJnaW4tdG9wOiAwLjhyZW07XFxufVxcblxcbi8qLS0tLS0tLSBTa2lsbCZUb29scyBTZWN0aW9uIC0gU2xpZGVyIC0tLS0tLS0qL1xcblxcbi5zd2lwZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uLXByZXZ7XFxuICBsZWZ0OiAtNDBweDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1idXR0b24tbmV4dHtcXG4gIHJpZ2h0OiAtNDBweDtcXG59XFxuXFxuLnN3aXBlci1idXR0b24tcHJldixcXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcXG59XFxuXFxuLnN3aXBlciB7XFxuICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnN3aXBlci13cmFwcGVyID4gKiB7XFxuICBhc3BlY3QtcmF0aW86IDQvMztcXG59XFxuXFxuLnN3aXBlci1zbGlkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdyYXAtYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0td3JhcC1ib3JkZXItY29sb3IpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc3dpcGVyLXNsaWRlIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbn1cXG5cXG4vKi0tLS0tLS0gUHJvamVjdHMgU2VjdGlvbiAtLS0tLS0tKi9cXG5cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJyZW07XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuXFxuLnByb2plY3RzV3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3JhcC1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS13cmFwLWJvcmRlci1jb2xvcik7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnByb2plY3RzV3JhcHBlciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0c0RhdGEge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzRGF0YSBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKVxcbn1cXG5cXG4ucHJvamVjdHNEYXRhIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLXN1Yi1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ucHJvamVjdHNMaW5rcyB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHNMaW5rcyB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0c0xpbmtzIGxpIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0c0xpbmtzIGEgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qLS0tLS0tLSBDb250YWN0IFNlY3Rpb24gLS0tLS0tLSovXFxuXFxuLmNvbnRhY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tYm90dG9tOiAxNXJlbTtcXG59XFxuXFxuLyogRGF5IFRoZW1lICovXFxuLmRheU1vZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgPiBoZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWRheS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5jb250YWluZXJJbmZvIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXktZm9udC1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLmNvbnRhaW5lckluZm8gcCB7XFxuICBjb2xvcjogdmFyKC0tZGF5LXN1Yi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAuY29udGFpbmVySW5mbyBoMiB7XFxuICBjb2xvcjogIzAxMWIzMDtcXG59XFxuXFxuLmRheU1vZGUgKiAuZGl2aXNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5zd2lwZXItc2xpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5wcm9qZWN0c1dyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5wcm9qZWN0c1dyYXBwZXIgKiBoMiB7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLnByb2plY3RzV3JhcHBlciAqIHNwYW57XFxuICBjb2xvcjogdmFyKC0tZGF5LXN1Yi1mb250LWNvbG9yKTtcXG59XFxuXFxuLmRheU1vZGUgKiAuc2VjdGlvbkRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXktc3ViLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5kb3dubG9hZFJlc3VtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4uZGF5TW9kZSAqIC5kb3dubG9hZFJlc3VtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXktbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogaTpiZWZvcmUgIHtcXG4gIGNvbG9yOiB2YXIoLS1uaWdodC1tYWluLWJnLWNvbG9yKVxcbn1cXG5cXG4uZGF5TW9kZSAqIC5iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmlnaHQtbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5kYXlNb2RlICogLm5hdmJhckl0ZW1zLnNob3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4vKiBNZWRpYSBRdWVyaWVzIGZvciByZXNwb25zaXZlbmVzcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NjBweCl7XFxuICBib2R5IHtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xcbiAgYm9keSB7XFxuICB9XFxuXFxuICAubmF2YmFySXRlbXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pZ2h0LW1haW4tYmctY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td3JhcC1iZy1jb2xvcik7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5uYXZiYXJJdGVtcy5zaG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5uYXZiYXJJdGVtcyBsaSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubmF2YmFySXRlbXMgPiBsaTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGF5LW1haW4tYmctY29sb3IpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubmF2YmFyLXRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iYXIge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbjogN3B4IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5uYXZiYXJJdGVtcy5zaG93IGxpIHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kb3dubG9hZFJlc3VtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgZ2FwOiAwcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcblxcbiAgLm5hdmJhckl0ZW1zLnNob3cge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICB9XFxuXFxuICAucmVjdGFuZ2xlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xcbiAgfVxcblxcbiAgLnN3aXBlci1zbGlkZS1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgfVxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvY2Fyb3VzZWwnO1xuaW1wb3J0ICcuL3NjcmlwdHMvZGF5bmlnaHQnO1xuaW1wb3J0ICcuL3NjcmlwdHMvbmF2YmFyJzsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3dpcGVyIiwiU3dpcGVyIiwiZGlyZWN0aW9uIiwibG9vcCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJwYWdpbmF0aW9uIiwiZWwiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic2Nyb2xsYmFyIiwiY2ljbGUiLCJxdWVyeVNlbGVjdG9yIiwibW9vbiIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NOYW1lIiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm5hdmJhclRvZ2dsZSIsIm5hdmJhckl0ZW1zIiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==