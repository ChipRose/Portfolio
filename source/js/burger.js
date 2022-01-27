//Burger
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");
const burger = document.querySelector(".navigation__toggle");
const navigationItems = document.querySelectorAll(".navigation__item");
const page = document.querySelector(".page");

navigation.classList.remove("navigation--nojs");
page.classList.remove("page--nojs");

burger.addEventListener ("click", function(){
  if (navigation.classList.contains("navigation--closed")) {
    navigation.classList.remove("navigation--closed");
    navigation.classList.add("navigation--opened");
  } else {
    navigation.classList.add("navigation--closed");
    navigation.classList.remove("navigation--opened");
  }
});

const closeBurger = (item) => {
  item.addEventListener("click", () => {
    navigation.classList.add("navigation--closed");
    navigation.classList.remove("navigation--opened");
  })
};

navigationItems.forEach((item)=>{
  closeBurger(item);
})
