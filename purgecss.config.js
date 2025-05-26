module.exports = {
  content: [
    './_site/**/*.html',
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './_pages/**/*.md',
    './index.html',
    './_javascript/**/*.js'
  ],
  css: [
    './_site/assets/css/jekyll-theme-chirpy.css'  // 컴파일된 CSS 파일
  ],
  output: './_site/assets/css/',
  safelist: [
    /^hljs/,
    /^language-/,
    'active',
    'show',
    'fade',
    'collapse',
    'collapsing'
  ]
}
