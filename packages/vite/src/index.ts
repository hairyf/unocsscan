import type { Plugin } from 'vite'
import type { UserConfigDefaults } from '@unocss/core'
import { sourceObjectFields, sourcePluginFactory } from 'unconfig/presets'

import presetUno from '@unocss/preset-uno'
import type { Options } from './types'
import { createContext } from './integration'

function UnocsscanPlugin(options: Options = {}): Plugin[] {
  const defaultUnocssConfig: UserConfigDefaults = {
    presets: [presetUno()],
  }
  const dir = process.cwd()
  const context = createContext(
    dir,
    defaultUnocssConfig,
    [
      sourcePluginFactory({
        files: [
          'vite.config',
          'svelte.config',
          'iles.config',
        ],
        targetModule: 'unocss/vite',
        parameters: [{ command: 'serve', mode: 'development' }],
      }),
      sourcePluginFactory({
        files: [
          'astro.config',
        ],
        targetModule: 'unocss/astro',
      }),
      sourceObjectFields({
        files: 'nuxt.config',
        fields: 'unocss',
      }),
    ],
  )

  async function load() {
    const config = await context.updateRoot(dir)
    console.log(config)
  }

  load()

  return [
    {
      name: '@unocsscan/vite',
    },
  ]
}

export default UnocsscanPlugin
