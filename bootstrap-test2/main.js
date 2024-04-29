// 라이브러리의 js를 연결함.
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'



// https://getbootstrap.kr/docs/5.3/components/dropdowns/#javascript-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
import Dropdown from 'bootstrap/js/dist/dropdown'

const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
dropdownElementList.map(
  dropdownToggleEl => new Dropdown(dropdownToggleEl)
)


// https://getbootstrap.kr/docs/5.3/components/modal/#javascript-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
import Modal from 'bootstrap/js/dist/modal'
new Modal(document.querySelector('exampleModal'), {
  backdrop: 'static'
})