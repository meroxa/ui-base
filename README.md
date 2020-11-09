# Meroxa UI Base 

A [TailwindCSS](https://tailwindcss.com) plugin that provides Meroxa's base UI configuration

## Installation

### Prerequisites
Make sure you have [TailwindCSS](https://tailwindcss.com) installed in your project, then:
```
yarn add ssh://git@github.com:meroxa/ui-base.git
```

### Plug It In 🔌
In your project, in your `tailwind.config.js`:
```js
module.exports = {
  // ...
  plugins: [
    require('@meroxa/ui-base')
  ]
}
```

Alternatively, you could just pull `dist/css/ui-base.css` or `dist/css/ui-base.min.css` into your project. Note that this will include Tailwind with it.

## Development

### Plugin Development
Link from this project's directory
```
yarn link
```

Then within whatever project you want to pull the package into
```
yarn link "@meroxa/ui-base"
```

### Building
If you just want to build the CSS
```
yarn run build
```
CSS will be outputted to `dist/css`
