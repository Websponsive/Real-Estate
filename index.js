if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready(){ 
    const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', changeMenuState)
    const whyButton = document.getElementById('why-button');
    whyButton.addEventListener('click', changeWhyState);
    const propertiesButton = document.getElementById('properties-button');
    propertiesButton.addEventListener('click', changePropertiesState);
    const legalButton = document.getElementById('legal-button');
    legalButton.addEventListener('click', changeLegalState);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.invisible');
    hiddenElements.forEach((element) => observer.observe(element));
}
function changeMenuState(){
    const menuButton = document.getElementById('menu-button');
    menuButton.parentElement.parentElement.parentElement.classList.toggle('extended');
    menuButton.parentElement.parentElement.parentElement.classList.toggle('collapsed');
    const navbarList = document.getElementsByClassName('navbar-items')
    for(var i = 0; i < navbarList.length; i++){
        navbarList[i].classList.toggle('hidden');
        navbarList[i].classList.toggle('visible');
    }
}
function changeWhyState(){
    const whySection = document.getElementById('why-section');
    const propertiesSection = document.getElementById('properties-section');
    const legalSection = document.getElementById('legal-section');
    const whyButton = document.getElementById('why-button');
    const propertiesButton = document.getElementById('properties-button');
    const legalButton = document.getElementById('legal-button');
    if(whySection.classList.contains('hidden')){
        whySection.classList.remove('hidden')
        propertiesSection.classList.add('hidden')
        legalSection.classList.add('hidden')
        // console.log('success')
        whyButton.classList.add('active')
        propertiesButton.classList.remove('active')
        legalButton.classList.remove('active')
    }
}
function changePropertiesState(){
    const whySection = document.getElementById('why-section');
    const propertiesSection = document.getElementById('properties-section');
    const legalSection = document.getElementById('legal-section');
    const whyButton = document.getElementById('why-button');
    const propertiesButton = document.getElementById('properties-button');
    const legalButton = document.getElementById('legal-button');
    if(propertiesSection.classList.contains('hidden')){
        whySection.classList.add('hidden')
        propertiesSection.classList.remove('hidden')
        legalSection.classList.add('hidden')
        // console.log('success')
        whyButton.classList.remove('active')
        propertiesButton.classList.add('active')
        legalButton.classList.remove('active')
    }
}  
function changeLegalState(){
    const whySection = document.getElementById('why-section');
    const propertiesSection = document.getElementById('properties-section');
    const legalSection = document.getElementById('legal-section');
    const whyButton = document.getElementById('why-button');
    const propertiesButton = document.getElementById('properties-button');
    const legalButton = document.getElementById('legal-button');
    if(legalSection.classList.contains('hidden')){
        whySection.classList.add('hidden')
        propertiesSection.classList.add('hidden')
        legalSection.classList.remove('hidden')
        // console.log('success')
        whyButton.classList.remove('active')
        propertiesButton.classList.remove('active')
        legalButton.classList.add('active')
    }
} 

// function toggleState(){
//     const navbar = document.getElementsByClassName('navbar')[0];
//     navbar.classList.toggle('extended');
//     navbar.classList.toggle('collapsed');
// }