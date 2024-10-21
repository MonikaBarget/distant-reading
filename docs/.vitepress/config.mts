import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DistantReading",
  base: '/distant-reading/',  // Base URL for GitHub Pages deployment
  description: "Files and documentation for teaching",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Data Collection', link: '/pages_datacollection.md' },
      { text: 'Data Cleaning', link: '/pages_datacleaning.md' },
      { text: 'Data Analysis Samples', link: '/pages_dataanalysis_samples.md' },
      { text: 'Datasets Intro', link: '/pages_datasets_intro.md' },
      
      // Data Scraping Section with dropdown
      {
        text: 'Data Scraping',
        items: [
          { text: 'Apple Store', link: '/pages_datascraping_applestore.md' },
          { text: 'Google News', link: '/pages_datascraping_googlenews.md' },
          { text: 'Mastodon', link: '/pages_datascraping_mastodon.md' },
          { text: 'Social Media', link: '/pages_datascraping_socialmedia.md' },
          { text: 'Twitter', link: '/pages_datascraping_twitter.md' },
          { text: 'YouTube', link: '/pages_datascraping_youtube.md' },
        ]
      },
      
      // Skills Section with dropdown
      {
        text: 'Skills',
        items: [
          { text: 'VPN Client', link: '/pages_skills1_0_VPNclient.md' },
          { text: 'DSRI', link: '/pages_skills1_1_DSRI.md' },
          { text: 'Scrape Apple Reviews', link: '/pages_skills1_2a_scrapeAPPLEreviews.md' },
          { text: 'Scrape YouTube Comments', link: '/pages_skills1_2b_scrapeYOUTUBEcomments.md' },
          { text: 'OpenRefine', link: '/pages_skills1_3_OpenRefine.md' },
          { text: 'Batch Download', link: '/pages_skills1_4_batchdownload.md' },
          { text: 'Case Study', link: '/pages_skills2_2_casestudy.md' },
          { text: 'Voyant Tools', link: '/pages_skills2_1_VoyantTools.md' },
          { text: 'Presentations', link: '/pages_skills3_presentations.md' }
        ]
      },
      
      // Task Sheets Section with dropdown
      {
        text: 'Task Sheets',
        items: [
          { text: 'Elon Musk', link: '/pages_tasksheet_elonmusk.md' },
          { text: 'Girlboss', link: '/pages_tasksheet_girlboss.md' },
          { text: 'Menstruation', link: '/pages_tasksheet_menstruation.md' },
          { text: 'Miley Cyrus', link: '/pages_tasksheet_mileycyrus.md' },
          { text: 'Seretse Khama', link: '/pages_tasksheet_seretsekhama.md' },
          { text: 'Slavery', link: '/pages_tasksheet_slavery.md' },
          { text: 'Soraya Esfandiary', link: '/pages_tasksheet_sorayaesfandiary.md' },
          { text: 'True Crime', link: '/pages_tasksheet_truecrime.md' },
          { text: 'Witchcraft', link: '/pages_tasksheet_witchcraft.md' }
        ]
      }
    ],

    // Sidebar configuration with different sections and links
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // Social links that appear in the footer
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

