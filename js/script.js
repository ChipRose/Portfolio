/* -------slider buttons------- */
/* slider bullets */
const sliderControls=document.querySelector(".slider-controls");
const sliderItems=document.querySelectorAll(".slider-item");
let addNewElement=function(elem, cls, motherElem){
	let newElem=document.createElement(elem);
	newElem.classList.add(cls);
	motherElem.appendChild(newElem);
}
addNewElement("ul", "slider-bullets-list", sliderControls);
const bulletsList=document.querySelector(".slider-bullets-list");
for(let numBullets=0; numBullets < sliderItems.length; numBullets++){
	addNewElement("li","slider-bullet-item",bulletsList);
}
console.log(sliderControls);
/* slider button next and prev*/
const buttonPrev = document.querySelector(".button-prev");
const buttonNext = document.querySelector(".button-next");
const slider = document.querySelectorAll(".slider-item");
const sliderBullets = document.querySelectorAll(".slider-bullet-item");
let addActive=function(slideIndex){
	slider[slideIndex].classList.add("active");
	sliderBullets[slideIndex].classList.add("active-bullet");
}
let removeActive=function(slideIndex){
	slider[slideIndex].classList.remove("active");
	sliderBullets[slideIndex].classList.remove("active-bullet");
}
let slideIndex=0;
slider[slideIndex].classList.add("active");
sliderBullets[slideIndex].classList.add("active-bullet");
buttonNext.addEventListener('click',function(){
	if(slideIndex===sliderItems.length-1){
		removeActive(slideIndex);
		slideIndex=0;
		addActive(slideIndex);
		return;
	}
	removeActive(slideIndex);
	slideIndex++;
	addActive(slideIndex);
	});
buttonPrev.addEventListener("click", function () {
	if (slideIndex === 0) {
		removeActive(slideIndex);
		slideIndex = sliderItems.length-1;
		addActive(slideIndex);
		return;
	}
	removeActive(slideIndex);
	slideIndex--;
	addActive(slideIndex);
});
