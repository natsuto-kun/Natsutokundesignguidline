import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    dts({ insertTypesEntry: true })
  ],
  build: {
    lib: {
      // エントリーポイント（さっき作った index.ts など）
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@natsuto-kun/design-system',
      // 出力ファイル名
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'], // ESMとUMD両方出すのが一般的
    },
    rollupOptions: {
      // ライブラリに含めたくない（利用側に持たせたい）パッケージを指定
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
