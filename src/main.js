"use strict";

// document객체의 querySelector()함수 사용하여 해당 클래스에 접근(class,id,tag전부 중 제일 첫요소)
const header = document.querySelector(".header");

//.getBoundingClientRect => 해당요소의 높이를 측정하는 메소드
//이후 height반환
const headerHeight = header.getBoundingClientRect().height;

//Header에 페이지 아래로 스타일시 다크 스타일링 적용
document.addEventListener("scroll", () => {
  //스크롤 되는 Y좌표가 headerHeight보다 크다면 다른 스타일링!
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Arrow up버튼을 아래로 스크롤시 투명하게 처리
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY <= homeHeight / 2) {
    arrowUp.style.opacity = 0;
  } else {
    arrowUp.style.opacity = 1;
  }
});

//Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

//Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
