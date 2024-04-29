// babel을 통해 모든 js문법을 ES5에서도 적용이 되도록 함.
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}