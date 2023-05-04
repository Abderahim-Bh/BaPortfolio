let myContainer = document.querySelector(".container");
let myHeader = document.querySelector("header");
let myImgAside = document.querySelector("main .imgAside");
let myHeaderOne = document.querySelector(".titleAside h1");
let myHyperLink = document.querySelector(".titleAside a");
let myAboutMeSection = document.querySelector(".aboutMeSection");
let myBar = document.querySelector(".theBar");
let myProjectsAndSkillsSection = document.querySelector(".projectsAndSkillsSection");
let myStudiesAndCertificationsSection = document.querySelector(".studiesAndCertificationsSection");
let myContactSection = document.querySelector(".contactSection");
let myArrows = document.querySelectorAll(".arrow");
let myLeftArrows = document.querySelectorAll(".leftArrow");
let myRightArrows = document.querySelectorAll(".rightArrow");
let myToSkills = document.querySelector(".toSkills");
let myToProjects = document.querySelector(".toProjects");
let myToCertification = document.querySelector(".toCertification");
let myToStudie = document.querySelector(".toStudie");
let myskillsSection = document.querySelector(".skillsSection");
let myCertificationSection = document.querySelector(".certificationsSection");
let myStudieSection = document.querySelector(".studiesSection");
let myProjectTitle = document.querySelectorAll(".projectTitle");
let myProjecsInfo = document.querySelectorAll(".projectInfo");
let myProjectsContainer = document.querySelectorAll(".projectContainer");
let myProjectsContainerImg = document.querySelectorAll(".projectContainer img");
let myProjectImg = document.querySelectorAll(".projectsContainer .projects .projectImg img");
let myRightSliderArrow = document.querySelector(".rightSliderArrow");
let myleftSliderArrow = document.querySelector(".leftSliderArrow");
let mySkillNames = document.querySelectorAll(".skillName");
let myTheProgress = document.querySelectorAll(".theProgress");
let mySkillProgressSpan = document.querySelectorAll(".skillProgress span");
let myTheBar = document.querySelectorAll(".theBar");
let myMl12 = document.querySelector(".ml12");
let myTimeLineTitel = document.querySelector(".timeLineTitel");
let myTitleHardSkills = document.querySelector(".titleHardSkills");
let myTitleSoft = document.querySelector(".titleSoft");
let myTitleKnowlidge = document.querySelector(".titleKnowlidge");
let myTheTitle = document.querySelector(".theTitle");
let myGetInTouchTitle = document.querySelector(".getInTouchTitle");
let myFaCircleRight = document.querySelector(".fa-circle-right");





// .................................text animation code.................................

for (let i = 0; i < myProjectsContainer.length; i++){
        myProjectsContainer[i].addEventListener("mouseover", (e) => {
        e.currentTarget.firstElementChild.style.filter = "saturate(1)";
    })  
        myProjectsContainer[i].addEventListener("mouseout", (e) => {
        e.currentTarget.firstElementChild.style.filter = "saturate(0.3)";
    })  
}

window.onscroll = () => {
    if (window.scrollY >= 1170) {
        myMl12.classList.add("animate__animated", "animate__fadeInLeft");
        myFaCircleRight.classList.add("fcrAnimationClass");
    }
    if (window.scrollY >= 1570) {
        myTimeLineTitel.classList.add("animate__animated", "animate__fadeInLeft");
    }
 
    
}

function myHardSkillanimation() {
    myTitleHardSkills.classList.add("animate__animated", "animate__fadeInLeft");
}
function myTitleSoftanimation() {
    myTitleSoft.classList.add("animate__animated", "animate__fadeInLeft");
}
function myTitleKnowlidgeanimation() {
    myTitleKnowlidge.classList.add("animate__animated", "animate__fadeInLeft");
}
function myTheTitleanimation() {
    myTheTitle.classList.add("animate__animated", "animate__fadeInLeft");
}

function mybarFunction (){
    myTheBar[0].style.width = "70%";
    mySkillProgressSpan[0].textContent = "70%";
    myTheBar[1].style.width = "90%";
    mySkillProgressSpan[1].textContent = "90%";
    myTheBar[2].style.width = "80%";
    mySkillProgressSpan[2].textContent = "80%";
    myTheBar[3].style.width = "50%";
    mySkillProgressSpan[3].textContent = "50%";
    myTheBar[4].style.width = "50%";
    mySkillProgressSpan[4].textContent = "50%";
    myTheBar[5].style.width = "30%";
    mySkillProgressSpan[5].textContent = "30%";
    myTheBar[6].style.width = "30%";
    mySkillProgressSpan[6].textContent = "30%";
    myTheBar[7].style.width = "30%";
    mySkillProgressSpan[7].textContent = "30%";
    myTheBar[8].style.width = "50%";
    mySkillProgressSpan[8].textContent = "50%";
    myTheBar[9].style.width = "90%";
    mySkillProgressSpan[9].textContent = "90%";
    myTheBar[10].style.width = "70%";
    mySkillProgressSpan[10].textContent = "70%";
    myTheBar[11].style.width = "70%";
    mySkillProgressSpan[11].textContent = "70%";
    myTheBar[12].style.width = "90%";
    mySkillProgressSpan[12].textContent = "90%";
    myTheBar[13].style.width = "100%";
    mySkillProgressSpan[13].textContent = "100%";
    myTheBar[14].style.width = "40%";
    mySkillProgressSpan[14].textContent = "40%";
}

myToSkills.addEventListener("click", function () {
    myskillsSection.style.left = "0%";
    setTimeout(mybarFunction, 1000);
    setTimeout(myHardSkillanimation, 1000);
    setTimeout(myTitleSoftanimation, 1000);
    setTimeout(myTitleKnowlidgeanimation, 1000);
})
myToProjects.addEventListener("click", function () {
    myskillsSection.style.left = "100%";
    
})
myToCertification.addEventListener("click", function () {
    myCertificationSection.style.left = "0%";
    setTimeout(myTheTitleanimation, 1000);

})
myToStudie.addEventListener("click", function () {
    myCertificationSection.style.left = "100%";
})

function bioSectionFadeOut() {
    myHeader.classList.add("animate__animated", "animate__slideOutUp", "animate__delay-1s");
    myImgAside.classList.add("animate__animated", "animate__slideOutRight");
    myHeaderOne.classList.add("animate__animated", "animate__slideOutDown");
    myHyperLink.classList.add("animate__animated", "animate__hinge");
}















for (let i = 0; i < myRightArrows.length; i++){
    myRightArrows[i].addEventListener("click", function (e) {
        if (e.currentTarget.classList.contains("biRight")) {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            })  
        } else if (e.currentTarget.classList.contains("aMRight")) {
            window.scrollTo({
                top: window.innerHeight*2,
                behavior: "smooth"
            })  
        } else if (e.currentTarget.classList.contains("pSRight")) {
            window.scrollTo({
                top: window.innerHeight * 3,
                behavior: "smooth"
            });
        
        } else if (e.currentTarget.classList.contains("sCRight")) {
            window.scrollTo({
                top: window.innerHeight*4,
                behavior: "smooth"
            })  
        }
    })
}



for (let i = 0; i < myLeftArrows.length; i++){
    myLeftArrows[i].addEventListener("click", function (e) {
        if(e.currentTarget.classList.contains("cLeft")){
            window.scrollTo({
                top: (window.innerHeight*4) - window.innerHeight,
                behavior: "smooth"
            })  
        } else if (e.currentTarget.classList.contains("sCLeft")) {
            window.scrollTo({
                top: (window.innerHeight*3) - window.innerHeight,
                behavior: "smooth"
            })   
        } else if (e.currentTarget.classList.contains("pSLeft")) {
            window.scrollTo({
                top: (window.innerHeight*2) - window.innerHeight,
                behavior: "smooth"
            })   
        } else if (e.currentTarget.classList.contains("aMLeft")) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })   
        }
    })
}




// .................................Swiper animation code.................................












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