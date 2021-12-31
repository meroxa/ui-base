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
