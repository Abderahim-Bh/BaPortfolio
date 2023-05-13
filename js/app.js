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
let myBackToCertifications = document.querySelector(".backToCertifications");
let myToStudie = document.querySelector(".toStudie");
let myskillsSection = document.querySelector(".skillsSection");
let myCertificationSection = document.querySelector(".certificationsSection");
let myStudieSection = document.querySelector(".studiesSection");
let myShowCertificat = document.querySelector(".showCertificat");
let myCc = document.querySelectorAll(".cc");
let myShowCertificatImg = document.querySelector(".showCertificat img");





// ************************ start projects & skills section ************************
let myProjectTitle = document.querySelectorAll(".projectTitle");
let myProjecsInfo = document.querySelectorAll(".projectInfo");
let myProjectsContainer = document.querySelectorAll(".projectContainer");
let myProjectsContainerImg = document.querySelectorAll(".projectContainer img");
let myProjectImg = document.querySelectorAll(".projectsContainer .projects .projectImg img");
let myRightSliderArrow = document.querySelector(".rightSliderArrow");
let myleftSliderArrow = document.querySelector(".leftSliderArrow");
let myprojectInfoHyperLinks = document.querySelectorAll(".projectInfo a");
let myImageDiv = document.querySelectorAll(".imageDiv");
let myProjectContainerVideo = document.querySelectorAll(".projectContainer video");
// ************************ end projects & skills section ************************




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
let myFaCircleRight = document.querySelectorAll(".fa-circle-right");
let myBioSection = document.querySelector(".bioSection");
let myMenuBtn = document.querySelector(".menuBtn");
let myResponsivNav = document.querySelector(".responsivNav");


// .................................start menu button animation.................................

if (window.innerWidth <= 768) {
    myMenuBtn.style.display = "flex"
} else {
    myMenuBtn.style.display = "none";
}
myMenuBtn.addEventListener("click", function () {
    if (myMenuBtn.innerHTML === "menu") {
        myResponsivNav.style.top = "0%"
        myMenuBtn.innerHTML = "close";
        myMenuBtn.style.backgroundColor = "#FF6969";
    } else {
        myResponsivNav.style.top = "-100%"
        myMenuBtn.innerHTML = "menu";
        myMenuBtn.style.backgroundColor = "#fcd3b9";
    }
    
})

window.onresize = function () {
    if (window.innerWidth <= 768) {
        myMenuBtn.style.display = "flex"
    }
    else {
        myMenuBtn.style.display = "none"
    }
}


// .................................end menu button animation.................................


// .................................showCertificat container animation.................................

for (let i = 0; i < myCc.length; i++){
    myCc[i].addEventListener("click", (e) =>{
        myShowCertificat.style.right = "0%";
        let newValue = e.currentTarget.firstElementChild.firstElementChild.firstElementChild.getAttribute("src")
        myShowCertificatImg.setAttribute("src",newValue)

    })
}






// .................................project container animation.................................
function createVideoElemnt(videoType, target) {
    let counter = 0
    if (target === "Images/FruitsLandingPage.jpg") {
        counter = 0
    } else if (target === "Images/Js-Algo-DataStructureCopy.jpg") {
        counter = 1
    }
    myElement = document.createElement("video");
    myElement.setAttribute("src", "/videos/" + videoType)
    myElement.setAttribute("controls", "controls");
    myImageDiv[counter].append(myElement)
}


for (let i = 0; i <  myprojectInfoHyperLinks.length; i++){
    myprojectInfoHyperLinks[i].addEventListener("click", (e) => {
        if (e.currentTarget.innerHTML === "Live demo") {
            e.currentTarget.parentElement.parentElement.classList.add("projectContainerAnimation")
            e.currentTarget.parentElement.parentElement.style.filter = "saturate(1)";
            e.currentTarget.innerHTML = "Close";
            e.currentTarget.style.backgroundColor = "#FF6969";
            
            let target = e.currentTarget.parentElement.previousElementSibling.firstElementChild.getAttribute("src"); 
            console.log(target)
            if (target === "Images/FruitsLandingPage.jpg") {
                e.currentTarget.parentElement.previousElementSibling.firstElementChild.classList.add("imgAnimate")
                setTimeout(function () {
                    createVideoElemnt("vidOne.mp4", target)
                },500)
            }
            else if (target === "Images/Js-Algo-DataStructureCopy.jpg") {
                e.currentTarget.parentElement.previousElementSibling.firstElementChild.classList.add("imgAnimate")
                setTimeout(function () {
                    createVideoElemnt("vidOne.mp4", target)
                },500)
            }
            
          
        }
        else if (myprojectInfoHyperLinks[i].innerHTML === "Close") {
            e.currentTarget.parentElement.parentElement.classList.remove("projectContainerAnimation")
            e.currentTarget.parentElement.parentElement.style.filter = "saturate(1)";
            myprojectInfoHyperLinks[i].innerHTML = "Live demo";
            myprojectInfoHyperLinks[i].style.backgroundColor = "#FAAB78";
            
            if (myprojectInfoHyperLinks[i].parentElement.previousElementSibling.firstElementChild.getAttribute("src") === "Images/FruitsLandingPage.jpg") {
                myprojectInfoHyperLinks[i].parentElement.previousElementSibling.firstElementChild.classList.remove("imgAnimate");
                clearTimeout(1);
            }
        
        }
        

    })
}



// .................................text animation code.................................

for (let i = 0; i < myProjectsContainer.length; i++){
    myProjectsContainer[i].addEventListener("mouseover", (e) => {
        if (e.currentTarget.firstElementChild.tagName === "IMG") {
            e.currentTarget.firstElementChild.style.filter = "saturate(1)";
        }
    })
    myProjectsContainer[i].addEventListener("mouseout", (e) => {
        if (e.currentTarget.firstElementChild.tagName === "IMG") {
            e.currentTarget.firstElementChild.style.filter = "saturate(0.3)";
        }
    })  
}



window.onscroll = () => {

    if (window.scrollY >= 1170) {
        myMl12.classList.add("animate__animated", "animate__fadeInLeft");
        myFaCircleRight[0].classList.add("fcrAnimationClass");
        
  
    }
    if (window.scrollY >= 1570) {
        myTimeLineTitel.classList.add("animate__animated", "animate__fadeInLeft");
        myFaCircleRight[1].classList.add("fcrAnimationClass");

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


// .................................navigation arrows.................................

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
myBackToCertifications.addEventListener("click", function () {
    myShowCertificat.style.right = "-100%";
    

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



