// 일단 저거를 애니메이션으로 css를 통해서 주는게 아니라
// js로 html dom요소의 translate를 건드려서 마치 계속 롤링해서 돌아가는거처럼 구현

let banner = document.querySelector(".main-container");

banner.setInterval(rolling, 1000);

function rolling(el){
    console.log(el)
}