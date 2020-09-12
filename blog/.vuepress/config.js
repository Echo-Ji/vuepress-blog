module.exports = {
  title: 'Echo Ji',
  description: 'Welcome to my tech world.',

  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'}],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
  ],
  base: '/blogs/',
  markdown: {
    lineNumbers: true, // 代码块显示行号
    extendMarkdown: md => {
      md.set({html: true})
      md.use(require("markdown-it-footnote"))
      md.use(require("markdown-it-katex"))
  },
  },
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#dateformat
     */

    dateFormat: 'YYYY-MM-DD',

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#nav
     */

    // nav: [
    //   {
    //     text: 'Blog',
    //     link: '/',
    //   },
    //   {
    //     text: 'Tags',
    //     link: '/tag/',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/Echo-Ji"
        },
        {
          type: "mail",
          link: "bh1506jjh@gmail.com"
        }
      ],
      copyright: [
        {
          text: "Echo Ji © 2020",
          link: "https://github.com/Echo-Ji"
        }
      ]
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#directories
     */

    // directories:[
    //   {
    //     id: 'post',
    //     dirname: '_posts',
    //     path: '/',
    //     itemPermalink: '/:year/:month/:day/:slug',
    //   },
    //   {
    //     id: 'writing',
    //     dirname: '_writings',
    //     path: '/',
    //     itemPermalink: '/:year/:month/:day/:slug',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#frontmatters
     */

    // frontmatters: [
    //   {
    //     id: "tag",
    //     keys: ['tags'],
    //     path: '/tag/',
    //   },
    //   {
    //     id: "location",
    //     keys: ['location'],
    //     path: '/location/',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#globalpagination
     */

    // globalPagination: {
    //   lengthPerPage: 10,
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#sitemap
     */

    // sitemap: {
    //   hostname: 'https://example.vuepress-theme-blog.ulivz.com/'
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#comment
     */

    comment: {
      service: 'disqus',
      shortname: 'Echo Ji Blog',
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#newsletter
     */

    // newsletter: {
    //   endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#feed
     */

    // feed: {
    //   canonical_base: 'https://example.vuepress-theme-blog.ulivz.com/',
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summary
     */

    // summary:false,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summarylength
     */

    // summaryLength:100,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#pwa
     */

    // pwa:true,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#paginationcomponent
     */

    // paginationComponent: 'SimplePagination'

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#smoothscroll
     */

    smoothScroll: true,

    lastUpdated: 'Last Updated',

    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
  },
  // /**
  //  * Ref: https://vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html
  //  */
  // plugins: ['@vuepress/last-updated'],
}
