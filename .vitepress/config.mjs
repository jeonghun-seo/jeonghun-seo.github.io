import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './pages',
  title: 'Jeonghun Seo',
  description: 'CV and blog',
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
  }
})
