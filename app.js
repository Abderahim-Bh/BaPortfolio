let myContainer = document.getElementById("containerId");
let myHeader = document.querySelector("header");
let myImgAside = document.querySelector("main .imgAside");
let myHeaderOne = document.querySelector(".titleAside h1");
let myHyperLink = document.querySelector(".titleAside a");
let myAboutMeSection = document.querySelector(".aboutMeSection");
let myBar = document.querySelector(".theBar");
let myProjectsAndSkillsSection = document.querySelector(".projectsAndSkillsSection");
let myStudiesAndCertificationsSection = document.querySelector(".studiesAndCertificationsSection");
let myContactSection = document.querySelector(".contactSection");
let myNextArrowOne = document.querySelector(".nextArrow");
let myNextArrowTwo = document.querySelector(".pSFa");
let myNextArrowThree = document.querySelector(".sCFa");
let myNextArrowFour = document.querySelector(".cFa");
let myPrevArrowOne = document.querySelector(".previousArrow");
let myPrevArrowTwo = document.querySelector(".cFaP");
let myPrevArrowThree = document.querySelector(".sCFaP");
let myPrevArrowFour = document.querySelector(".pSFaP");


function bioSectionFadeOut() {
    myHeader.classList.add("animate__animated", "animate__slideOutUp", "animate__delay-1s");
    myImgAside.classList.add("animate__animated", "animate__slideOutRight");
    myHeaderOne.classList.add("animate__animated", "animate__slideOutDown");
    myHyperLink.classList.add("animate__animated", "animate__hinge");
}



























// let counter = 0;
// myNextArrowOne.addEventListener("click", function () {
//     setTimeout(function () {
//         if (counter === 0) {
//             myContainer.style.transform = "translateX(-100vw)";
//             counter = 1;
//             console.log(counter);
//         } else if (counter === 1) {
//             myContainer.style.transform = "translateX(-200vw)";
//             counter = 2;
//             console.log(counter);
//         } else if (counter === 2) {
//             myContainer.style.transform = "translateX(-300vw)";
//             counter = 3;
//             console.log(counter);
//         } else if (counter === 3) {
//             myContainer.style.transform = "translateX(-400vw)";
//             console.log(counter);
//         }
//     }
//     , 2000);
// })
// myPrevArrowOne.addEventListener("click", function () {
//     setTimeout(function () {
//         if (counter === 1) {
//             myContainer.style.transform = "translateX(0)";
//         }
//         if (counter === 2) {
//             myContainer.style.transform = "translateX(-100vw)";
//         }
//         if (counter === 3) {
//             myContainer.style.transform = "translateX(-200vw)";
//         }
//     }
//     , 2000);
// })
// function nextContactSection() {
//     setTimeout(function () {
//         myContactSection.classList.add("nextContactSection");
//         myBar.classList.add("contactSectionBar");
//         myNextArrowFour.style.display = "block";
//     },2000)
// }
// function nextStudiesAndCertificationsSection() {
//     setTimeout(function () {
//         myStudiesAndCertificationsSection.classList.add("nextStudiesAndCertificationsSection");
//         myBar.classList.add("studiesAndCertificationsSectionBar");
//         myNextArrowFour.style.display = "block";
//     },2000)
// }
// function nextProjectsAndSkillsSection() {
//     setTimeout(function () {
//         myProjectsAndSkillsSection.classList.add("nextProjectsAndSkillsSection");
//         myBar.classList.add("projectsAndSkillsSectionBar");
//         myNextArrowThree.style.display = "block";
//     },2000)
// }
// function nextAboutMeSection() {
//     setTimeout(function () {
//         myAboutMeSection.classList.add("nextAboutMeSection");
//         myBar.classList.add("aboutMeBar");
//         myNextArrowTwo.style.display = "block";
//     },2000)
// }

// function prevContactSection() {
//     setTimeout(function () {
//         myContactSection.classList.add("prevContactSection");
//         myBar.classList.add("pcontactSectionBar");
//         myPrevArrowTwo.style.display = "block";
//     },2000)
// }
// function prevStudiesAndCertificationsSection() {
//     setTimeout(function () {
//         myStudiesAndCertificationsSection.classList.add("prevStudiesAndCertificationsSection");
//         myBar.classList.add("pstudiesAndCertificationsSectionBar");
//         myPrevArrowThree.style.display = "block";
        
//         console.log("gg");
//     },2000)
// }
// myNextArrowOne.addEventListener("click", bioSectionFadeOut);
// myNextArrowOne.addEventListener("click", nextAboutMeSection);
// myNextArrowTwo.addEventListener("click", nextProjectsAndSkillsSection);
// myNextArrowThree.addEventListener("click", nextStudiesAndCertificationsSection);
// myNextArrowFour.addEventListener("click", nextContactSection);
// myPrevArrowOne.addEventListener("click", prevContactSection);
// myPrevArrowTwo.addEventListener("click", prevStudiesAndCertificationsSection);