module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_sass/**/*.scss',
    './_posts/**/*.md',
    './_pages/**/*.md',
    './index.html',
    './_javascript/**/*.js'
  ],
  css: [
    './assets/css/jekyll-theme-chirpy.scss'
  ],
  output: './assets/css/',
  safelist: [
    // 필요한 CSS 클래스들을 여기에 추가
    /^hljs/,
    /^language-/,
    'active',
    'show',
    'fade',
    'collapse',
    'collapsing'
  ]
}
