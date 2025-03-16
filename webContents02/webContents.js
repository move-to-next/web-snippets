let nav = document.querySelectorAll(".category-nav > ul > li");
let city = document.querySelectorAll(".category-contents > ul");

// nav.forEach(item => {
//     item.addEventListener("click", function(){
//         item.classList.forEach(e => {
//             if(item.classList.contains("action")){
//                 item.classList.remove("action");
//                 클릭한 리스트중에 action클래스가 있다면 찾아서 지우려고 했는데 아닌가보다.
//             }
//             else{
//                 this.classList.add("action");
//             }
//         })
// })
// })
// => 애초에 classList.forEach는 성립되지 않는다. 왜냐하면 classList는 forEach메서드를 가진 배열
//    이 아닌 DOMTokenList객체이기 때문이다.

nav.forEach(function(item){                     // 배열 nav의 각 요소인 item을 순회하면서 함수실행함.
    item.addEventListener("click", function(){  // item(nav의 요소) 클릭하면 함수실행함.
        nav.forEach(function(el){               // 배열 nav의 각 요소인 el을 순회하면서 함수실행함.
            el.classList.remove("action");      // el(nav의 요소)의 클래스인 active 삭제
        });
        this.classList.add("action");           // this(이벤트함수를 발생시킨애 = item)의 클래스를 action으로 한다.
    })
})

// => 과제 : 위에 코드 다시한번 어떻게 실행되는지 설명안보고 생각해서 적어볼 것.





















































// nav.classList.forEach(item =>
//     item.addEventListener("click", function(){
//         item.classList.forEach(event => {
//             if(item.classList.contains("action")){
//                 item.classList.remove("action")
//             }
//             else{
//                 this.classList.add("action");
//             }
//         })
//     })
// )