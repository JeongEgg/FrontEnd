const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();    
});
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
  /* html 속성 지정 
     placeholder : input 요소에 추가할 수 있는 속성 */
});
searchInputEl.addEventListener('blur', function () {
  /* blur : 해당요소의 focus가 해제되었을 때를 의미 */
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


/** 스크롤 할 때, badge를 올라가도록 함 */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
/* 아래에서 버튼 보임,숨김을 수행하는 쪽의 코드와 해당 id에 대한 요소의 클릭시
   스크롤하는 함수에서 요소를 접근할 때, 요소를 찾아오는 부분이 중복되기 때문에
   앞에 선언하여 중복적으로 사용한다. */

window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 500){
    // badge 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });/** gsap 라이브러리를 이용해, to라는 메서드로 애니메이션을 동작시킴
           위의 badgeEl 요소가 0.6초 동안 사라짐(opacity: 0)*/

    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }else {
    // badge 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100 // x축으로 100px만큼 이동함. 
    });
  }
}, 300));
/** 300은 0.3초를 의미. 여기서 스크롤을 하여 함수가 실행될 때,
 *  함수를 0.3초 간격으로 실행하도록 함. 함수가 엄청나게 많이
 *  실행되는 것을 방지함. 스크롤한 경우 badge를 숨기도록 함 
 *  
 *  위의 방법은 badge를 눈으로 볼 때만, 사라지게 한 것이며,
 *  실제로는 클릭이 가능하기도 하다*/


toTopEl.addEventListener('click',function () {
  gsap.to(window, .7, {
    scrollTo: 0
    /* 스크롤(화면)의 위치를 0px 지점으로 옮김.
       여기서 html에 추가한 ScrollToPlugin 라이브러리가 사용된다. */
  });
  /* 여기서 window 객체는 웹페이지에서 출력되고 있는 화면 자체를 의미한다. */
});

/** fade-in 요소를 화면에 나타나도록 구현. */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7, 
    /* 딜레이를 걸어서 index가 변함에 따라 순차적으로 아래의 opacity 설정을 적용한다.
     단순히 .7만 입력하면 모든 fadeEl 요소가 0.7초 뒤에 아래의 opacity 설정이 적용된다.
     순차적으로 나타나는 효과를 적용하기 위해, index 번호에 따라 딜레이 시간이 늘어나도록
     (0.7, 1.4, 2.1) 한다. */
    opacity: 1 // 위에서 opacity: 0으로 설정된 fadeEl 각 요소를 opacity: 1로 만들어준다.
  });
});


/** notice 부분의 swiper 적용 */
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical', // 수직방향으로 슬라이ㅡ
  autoplay: true, // 자동으로 슬라이드 재생
  loop: true // 마지막 슬라이드로 내려왔을 때, 다시 첫번째 요소로 슬라이드 되도록 설정
});

/** promotion 부분의 swiper 적용 */
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 // 자동 슬라이드 딜레이
  },/** autoplay에 대한 값을 객체형태로 할당하면 옵션을 추가할 수 있다 */
  pagination: {
    el: '.promotion .swiper-pagination',// 페이지 번호 요소 선택자
    /* swiper-pagination 클래스로 선언된 div 객체를 페이지번호로 사용하도록 설정한다는 의미 */
    clickable: true // 사용자의 페이지 번호 요소 제어를 가능하도록 설정
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
    /* 여기서 명시한 선택자 .swiper-prev, .swiper-next를 각각
       내비게이션 버튼과 같이 사용함 */
  }

  // direction: 'horizontal',
  /** swiper 기능에서 direction은 기본적으로 horizontal 값이 들어가 있기 때문에
   *  생략해주어도 된다. */
});


new Swiper('.awards .swiper-container', {
  // direction: 'horizontal'
  autoplay: true,
  loop: true,
  spaceBetween: 30, // 슬라이드 사이사이의 여백을 30으로 설정
  slidesPerView: 5, // 화면에 표시되는 슬라이드의 개수
  navigation: {
    prevEl: '.awards .swiper-prev', // 이전 버튼으로 지정하는 선택자
    nextEl: '.awards .swiper-next', // 다음 버튼으로 지정하는 선택자
  }
});


/** html에서 .toggle-promotion(스타벅스 프로모션 부분)에 선언된 아이콘을 클릭하면,
 * 아래에 표현된 .promotion 요소의 부분을 전체적으로 닫거나 열도록 함. */
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function() {
  isHidePromotion = !isHidePromotion
  /* 아이콘이 클릭될 때마다, isHidePromotion 값을 항상 반대값으로 전환함 */
  if(isHidePromotion){
    // promotion 숨김 처리
    promotionEl.classList.add('hide');
    /* .promotion 클래스에 'hide' 클래스를 추가함.
       클래스명이 class='promotion'에서 class='promotion hide'로 변경됨.
       css에서는 hide 클래스가 추가되어 있는 요소를 안보이도록 처리해야 함 */
  }else {
    // promotion 나타내는 처리
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    // 위에서 생성한 random 함수의 반환값을 gsap 함수의 시간으로 사용

    y: size, // y: 20, // y축 방향으로 20만큼 내려옴
    repeat: -1, // 무한반복이 되도록 설정

    yoyo: true,
    /* 한번 재생된 애니메이션을 다시 뒤로 재생. 위에서 요소가 20만큼 내려오는 
       애니메이션을 재생하였기 때문에, 이를 역으로 재생하여 역으로 올라가는
       애니메이션 효과를 적용함 */

    ease: "power1.inOut",
    /* https://gsap.com/docs/v3/Eases/
       위의 애니메이션에서는 튀는 느낌이었다.
       ease 함수를 적용하여 끝에 튀는 느낌을 자연스럽게 연결되도록 
       애니메이션 효과를 변경 */

    delay: random(0, delay)
    /* 최초 애니메이션 실행시 지연시간 설정 
       위에서 파라미터로 받은 delay 값을 사용하여 0~1초, 0~0.5초, 0~1.5초
       범위에서 지연시간을 주어 애니메이션을 실행하도록 설정*/
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);
// .floating 클래스명을 가지는 요소들을 넘겨주어서 gsap실행


// ScrollMagic
// 화면에 특정 요소들이 보이기 시작할 때, 애니메이션 효과를 넣어준다.
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  /* Scene : ScrollMagic 라이브러리를 이용하여 특정한 요소를 
     감시하는 옵션을 지정하는 함수.
     특정 요소들이 화면에 보이는지, 보이지 않는지를 감시함. 
     
     setClassToggle : html의 클래스 토글을 지정. */
  new ScrollMagic
      .Scene({
        triggerElement: spyEl,
        /* scroll-spy가 붙어있은 요소들 중 하나를 할당함.
           보여짐 여부를 감시할 요소를 지정. */
        triggerHook: .8
        /* ScrollMagic 라이브러리에서 화면이 나타나는 전체 영역의
           시작부분과 끝나는 부분을 0,1이라는 값으로 판단함. 
           화면이 스크롤되어 특정요소의 위치가 0.8위치까지 스크롤 되었을 때
           트리거를 실행하도록 하는 설정. */
      })
      .setClassToggle(spyEl, 'show')// 토글을 시킬 요소 지정, 토글할 클래스의 이름을 지정.
      .addTo(new ScrollMagic.Controller());
});
/* season-product, reserve-coffee, pick-your-favorite, find-store의 section에 scroll-spy 추가
   스크롤을 하다가 해당 section 요소가 0.8지점에 나타나게 될 때,
   해당 클래스명의 뒤에 'show'가 클래스명으로 추가됨.
   이제 css에서 .show라는 클래스명이 있는 경우와 없는 경우에 대해 애니메이션 효과를 적용할 수 있음
*/

// html footer의 this-year 클래스의 요소 앞에 현재 년도를 넣어줌.
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2024