// 수정코드
let container = document.querySelector(".main-container");
let banners = document.querySelectorAll(".main-container > div");
let bannerCount = banners.length; // = 3
let position = 0;
let currentIndex = 0;

container.style.transition = 'transform 1s ease';

const firstBannerClone = banners[0].cloneNode(true); // banners의 첫번째 요소 복사
container.appendChild(firstBannerClone); // 복제된 요소 container의 자식으로 추가
firstBannerClone.style.backgroundColor = "#3e3"; // 복제된 요소에 스타일값 추가가

function moveCarousel(){
    currentIndex++;
    position = -100 * currentIndex;

    container.style.transform = `translateX(${position}%)`;

    if(currentIndex >= (bannerCount)){
        setTimeout(() => {
            container.style.transition = 'none';
            currentIndex = 0;
            position = 0;
            container.style.transform = `translateX(${position}%)`;

            setTimeout(() => {
                container.style.transition = 'transform 1s ease';
            }, 50);
        }, 1000);
    }
}


setInterval(moveCarousel, 3000);




















// 이전코드
// let container = document.querySelector(".main-container");
// let banner = document.querySelectorAll(".main-container > div");
// let position = 0;
// let movingPosition = 0;

// container.style.transition = 'transform 1s ease';

// function moveCarousel(){
//     position -= 100;
//     container.style.transform = `translateX(${position}%)`
//     if(position < -200){
//         banner[0].style.transform = 'translateX(300%)'
//         banner[1].style.transform = 'translateX(300%)'
//     }
//     if(position < -400){
//         banner[0].style.transform = 'translateX(300%)'
//         banner[1].style.transform = 'translateX(300%)'
//         banner[2].style.transform = 'translateX(300%)'
//     }
// }
// setInterval(moveCarousel,3000);