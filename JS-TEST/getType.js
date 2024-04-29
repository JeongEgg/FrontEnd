export default function (data) {// 함수의 이름이 없어도 상관없음.
  return Object.prototype.toString.call(data).slice(8, -1)
}