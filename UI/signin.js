const header = document.querySelector('header');
const menuIcon = document.querySelector('.icon');
const recoverPassButton = document.querySelector('.recover-password');
const recoveryDiv = document.querySelector('.hide');
stickyFrom = header.offsetTop;
recoverPassButton.addEventListener('click' ,() =>{
    recoveryDiv.setAttribute('class' ,'show');
});

window.onscroll =  () =>{
     myFunction ();
}

const myFunction = ()=> {
if (window.pageYOffset > stickyFrom) {
    header.classList.add("sticky");
}
else {
    header.classList.remove("sticky");
}
}


const responsiveNav = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
menuIcon.addEventListener('click' ,responsiveNav);