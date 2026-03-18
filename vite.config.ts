import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  // modeが 'library' の時だけライブラリ用のビルドを行う設定にする
  const isLib = mode === 'library';

  return {
    plugins: [
      react(),
      tailwindcss(),
      // ライブラリビルドの時だけ型定義ファイルを生成する
      isLib && dts({
        insertTypesEntry: true,
        include: ['src'],
        // 型エラーでビルドが止まらないように設定（必要に応じて）
      })
    ].filter(Boolean),

    build: isLib
      ? {
          // 【ライブラリ（npm公開）用ビルド設定】
          lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@natsuto-kun/design-system',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'umd'],
          },
          cssCodeSplit: false,
          rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'react/jsx-runtime': 'jsxRuntime',
              },
            },
          },
          outDir: 'dist',
        }
      : {
          // 【Vercel（カタログサイト）用ビルド設定】
          // 通常のReactアプリとしてビルドされ、index.htmlを起点にする
          outDir: 'dist-site',
        },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})
