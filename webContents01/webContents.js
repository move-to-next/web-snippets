let actionList = document.querySelectorAll(".guri-news-menu > ul > li");

actionList.forEach(function(item) {
    item.addEventListener("click", function(){ // 버튼을 클릭 했을 시
        actionList.forEach(function(el){    // actionList를 순회해서,
            el.classList.remove("action");  // action클래스명을 모든요소에서 제거
        });
        this.classList.add("action");   // 그리고 action클래스명 추가
    })
});