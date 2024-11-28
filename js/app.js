// let menuBar = document.querySelector('.menu-bar');
let menuBar = document.querySelector('.menu-bar i');
let dropDown = document.querySelector('.drop-down');

const getNavs = () => {
	if(menuBar.className === 'fa-solid fa-bars'){
		menuBar.classList.replace('fa-bars', 'fa-xmark');
		dropDown.style.display = "block";
	}else{
		menuBar.classList.replace('fa-xmark', 'fa-bars');
		dropDown.style.display = "none";
	}
}