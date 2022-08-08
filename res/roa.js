const menuBtn = document.querySelector('.menu-btn')

const menuItems = document.querySelector(".menu-items"); 
const menuItem = document.querySelectorAll(".menut-item") 




menuBtn.addEventListener('click' , () => {
    toggle();
})

menuItem.forEach(item => {
    item.addEventListener("click" , () => {
        if(menuBtn.classList.contains('open')){
            toggle();
        }

    })
})

function toggle(){
    menuBtn.classList.toggle('open')
    menuItems.classList.toggle('open')
}













// let ProductImg = document.getElementById("#product-img");
// let smallImg = document.getElementsByClassName(".small-img");

// smallImg[0].onclick = () =>
// {
//     ProductImg.src = smallImg[0].src;
// }
// smallImg[1].onclick =  () =>
// {   ProductImg.src = smallImg[1].src;
// }
// smallImg[2].onclick = () =>
// {
//     ProductImg.src = smallImg[2].src;
// }
// smallImg[3].onclick = () =>
// {
//     ProductImg.src = smallImg[3].src;
// }
 


// js for toggle form 

let LoginForm = document.getElementById("LoginForm")
let RegForm = document.getElementById("RegForm")
let Indicator = document.getElementById("indicator")

function register(){
    RegForm.style.transform = "translateX(0)";
    LoginForm.style.transform = "translateX(0)";
    Indicator.style.transform= "translateX(100px)";
    LoginForm.style.transition= ".5s";
 
}
function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform= "translateX(0px)";
    RegForm.style.transition= ".5s";
 
}