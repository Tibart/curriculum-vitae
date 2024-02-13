import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
    rules: [],
    shortcuts: {
        'custom-shortcut': 'text-lg text-orange hover:text-teal'
    },
    presets: [
        presetUno(),
        presetAttributify(),
    ],
})