// import path from 'path'
// import { loadEnv } from 'vite'
// Plugins
import { ViteAliases } from 'vite-aliases'
// import { injectHtml, minifyHtml } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr'
import react from 'vite-preset-react'

export default ({ mode }) => {
  // const env = loadEnv(mode, process.cwd())
  return {
    build: {
      // rollupOptions: {
      //   input: glob.sync(path.resolve(__dirname, 'public', '*.html')),
      // },
    },
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, 'src'),
    //   },
    // },
    plugins: [
      react({ removeDevtoolsInProd: true, injectReact: true }),
      svgr(),
      ViteAliases(),
      // minifyHtml(),
      // injectHtml({
      //   injectData: {
      //     title: env.VITE_SITE_TITLE || 'App',
      //   },
      // }),
    ],
  }
}
