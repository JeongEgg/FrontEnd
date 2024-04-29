/* signin 경로의 index.html 파일과 디폴트 경로의 index.html에서
   공통적으로 사용할 js 소스코드들을 여기에 추가하고 사용함. 
   
   이후에 각각의 html 파일에서 common.js 파일에 접근할 수 있도록
   추가해야 한다. 
   
   main의 모든 js 소스코드들에 대해 signin 경로의 html 파일에서
   접근하게 될 때, html에서 사용할 수 없는 js 코드들이 있다.
   이로 인해 발생할 수 있는 에러를 위와 같은 방법으로 해결할 수 있다. */

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

// html footer의 this-year 클래스의 요소 앞에 현재 년도를 넣어줌.
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2024