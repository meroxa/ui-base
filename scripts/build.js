// Mostly borrowed from
// https://github.com/tailwindlabs/tailwindcss-typography/blob/master/scripts/build.js

const fs = require('fs')
const postcss = require('postcss')
const tailwind = require('tailwindcss')
const CleanCSS = require('clean-css')

function buildDistFile(filename) {
  return postcss([
    tailwind({
      corePlugins: true,
      plugins: [require('../lib/index.js')],
    }),
    require('autoprefixer'),
  ])
    .process('@tailwind base; @tailwind components; @tailwind utilities;', {
      from: null,
      to: `./dist/${filename}.css`,
      map: false,
    })
    .then((result) => {
      fs.writeFileSync(`./dist/css/${filename}.css`, result.css)
      return result
    })
    .then((result) => {
      const minified = new CleanCSS().minify(result.css)
      fs.writeFileSync(`./dist/css/${filename}.min.css`, minified.styles)
    })
    .catch((error) => {
      console.log(error)
    })
}

console.info('Building CSS...')

Promise.all([buildDistFile('ui-base')]).then(() => {
  console.log('Finished building CSS.')
})