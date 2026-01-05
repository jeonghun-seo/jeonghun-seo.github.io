import { defineConfig } from 'vitepress'
import Icons from 'unplugin-icons/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './pages',
  title: 'JeongHun Seo',
  description: 'CV and blog',
  vite: {
      plugins: [
        Icons({
          compiler: 'vue3',
          autoInstall: true
        })
      ]
    },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
      }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'CV', link: '/' },
      { text: 'Blog', link: '/blog/' }
    ],

    sidebar: [
      {
        text: 'Blog',
        items: [{ text: 'Overview', link: '/blog/' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jeonghun-seo' }
    ]
  },
})
