//Burger
const navigation = document.querySelector(".navigation");
const burger = document.querySelector(".navigation__toggle");
const navigationItems = document.querySelectorAll(".navigation__item");
const pageBody = document.querySelector(".page__body");

navigation.classList.remove("navigation--nojs");

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


