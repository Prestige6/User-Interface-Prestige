var SectionHome = document.getElementById('SectionHome')
var SectionServices = document.getElementById('SectionServices')
var SectionPortfolio = document.getElementById('SectionPortfolio')
var SectionReviews = document.getElementById('SectionReviews')
var SectionPricing = document.getElementById('SectionPricing')
const SectionsDisplayContainer = [SectionHome, SectionServices, SectionPortfolio, SectionReviews, SectionPricing]
var Content = document.querySelector('.Content')
var menu = document.querySelector('.fa-bars')
let isMenuVisible = false;
function Menu() {
    if (isMenuVisible) {
        Content.style.display = "none"
    } else {
        Content.style.display = "grid"
    }
    isMenuVisible = !isMenuVisible
}
function HideSection(Id) {
    console.log(`The Button Is Called: ${Id}`)
    const Section = document.getElementById(Id)
    //Hides the other sections
    for (let i = 0; i < SectionsDisplayContainer.length; i++) {
        SectionsDisplayContainer[i].style.display = "none";
    }
    Section.style.display = "grid"
}
var Year = document.getElementById("Year")
var Project = document.getElementById("Project")
function NumberTally() {
    let Second = 1;
    let Twenty = 1
    const Interval = setInterval(() => {
        if (Second < 2) {
            Second++;
            Year.innerHTML = `${Second}+ <span>Years of Experience</span>`
        } else {
            clearInterval(Interval)
        }
    }, 1000);
    const Interval2 = setInterval(() => {
        if (Twenty < 50) {
            Twenty++;
            Project.innerHTML = `${Twenty}+ <span>Projects Completed</span>`
        } else {
            clearInterval(Interval2)
        }
    }, 50);
}
function makeFullscreen(TagId) {
    const image = document.getElementById(TagId); // Assuming your image has an id of 'image'

    if (image.requestFullscreen) {
        image.requestFullscreen();
    } else if (image.mozRequestFullScreen) { // For Firefox
        image.mozRequestFullScreen();
    } else if (image.webkitRequestFullscreen) { // For Chrome, Safari and Opera
        image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) { // For IE/Edge
        image.msRequestFullscreen();
    }
}
NumberTally();

