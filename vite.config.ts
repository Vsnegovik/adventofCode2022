import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { readdirSync, readFileSync } from 'fs'
import { resolve, parse } from 'path'

const inputs = {}
readdirSync(resolve(__dirname, 'src/assets/inputs'), { encoding: 'utf8' }).forEach((fileName) => {
  inputs[parse(fileName).name] = readFileSync(resolve('src/assets/inputs', fileName), {
    encoding: 'utf8',
  })
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
    }),
  ],
  resolve: {
    // configure the path alias
    alias: {
      '@': '/src',
    },
  },
  define: {
    inputs,
  },
})
