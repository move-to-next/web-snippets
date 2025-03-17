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

//nav.forEach(function(item){                     // 배열 nav의 각 요소인 item을 순회하면서 함수실행함.
//    item.addEventListener("click", function(){  // item(nav의 요소) 클릭하면 함수실행함.
//        nav.forEach(function(el){               // 배열 nav의 각 요소인 el을 순회하면서 함수실행함.
//            el.classList.remove("action");      // el(nav의 요소)의 클래스인 active 삭제
//        });
//        this.classList.add("action");           // this(이벤트함수를 발생시킨애 = item)의 클래스를 action으로 한다.
//    })
//})

// => 과제 : 위에 코드 다시한번 어떻게 실행되는지 설명안보고 생각해서 적어볼 것.


nav.forEach(function(item){
    item.addEventListener("click", function(){  
        nav.forEach(function(el){
            el.classList.remove("action");
        });

        this.classList.add("action");

        city.forEach(function(el){
            el.classList.remove("action");
        });
        let navActIndex = Array.from(nav).findIndex(element => element.classList.contains("action"));
        let cityActIndex = city[navActIndex];
        cityActIndex.classList.add("action");
    })
})

// 위에 목록 클릭시 밑에 리스트들도 전환
// 인덱스는 같으니까 인덱스로 목록과 리스트를 연결하고
// nav, city객체를 순회해서 action클래스를 지운다음 nav쪽에서 클릭이 된 요소의 index를 구하고
// city쪽에서 같은 index의 요소를 구해서 해당 요소들에 action을 추가
// nav객체내부 요소중에서 action클래스를 가지고 있는 요소의 인덱스값을 구할까


// 1. nav에서 action클래스가 있는 요소의 인덱스를 찾습니다.
// let navActIndex = Array.from(nav).findIndex(element => element.classList.contains("action"));

// 2. navActIndex를 사용해서 city 배열의 동일한 위치 요소에 접근합니다.
// let cicyActIndex = city[navActIndex]

// 3. 해당 city요소에 action 클래스를 추가합니다.
// cicyActIndex.classList.add("action");