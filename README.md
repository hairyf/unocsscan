# vite-plugin-unocsscan

[![NPM version](https://img.shields.io/npm/v/vite-plugin-unocsscan?color=a1b858&label=)](https://www.npmjs.com/package/pkg-name)

## Install

```bash
npm i unocss vite-plugin-unocsscan -D
```

## Usage

```ts
import { defineConfig } from 'vite'
import unocsscan from '@unocsscan/vite'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    unocss(),
    unocsscan()
  ]
})
```

Add `virtual:uno.css` and `virtual:unocsscan` to your main entry:

```ts
import 'virtual:uno.css'
import 'virtual:unocsscan'
```

## License

[MIT](./LICENSE) License © 2022 [Anthony Fu](https://github.com/antfu)
