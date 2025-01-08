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
          { text: 'Meta', link: '/pages_datascraping_Meta.md' },
          { text: 'Reddit', link: '/pages_datascraping_reddit.md' },
          { text: 'Twitter', link: '/pages_datascraping_twitter.md' },
          { text: 'YouTube', link: '/pages_datascraping_youtube.md' },
        ]
      },
      
      // NLP Section with dropdown
      {
        text: 'NLP',
        items: [
          { text: 'Segmentation', link: '/pages_nlp_segmentation.md' },
          { text: 'Topic Models', link: '/pages_nlp_topicmodels.md' },
          { text: 'Plotting Distribution', link: '/pages_nlp_plottingdistribution.md' },
          { text: 'Multiple Languages', link: '/pages_nlp_multiplelanguages.md' },
          { text: 'Spatial Data', link: '/pages_nlp_spatialdata.md' }
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
          { text: 'Body Image', link: '/pages_tasksheet_bodyimage.md' },
          { text: 'Domestic Violence', link: '/pages_tasksheet_domesticviolence.md' },
          { text: 'Elon Musk', link: '/pages_tasksheet_elonmusk.md' },
          { text: 'Girlboss', link: '/pages_tasksheet_girlboss.md' },
          { text: 'Jeffrey Epstein', link: '/pages_tasksheet_epstein.md' },
          { text: 'Menstruation', link: '/pages_tasksheet_menstruation.md' },
          { text: 'Miley Cyrus', link: '/pages_tasksheet_mileycyrus.md' },
          { text: 'Race', link: '/pages_tasksheet_race.md' },
          { text: 'Seretse Khama', link: '/pages_tasksheet_seretsekhama.md' },
          { text: 'Slavery', link: '/pages_tasksheet_slavery.md' },
          { text: 'Soraya Esfandiary', link: '/pages_tasksheet_sorayaesfandiary.md' },
          { text: 'True Crime', link: '/pages_tasksheet_truecrime.md' },
          { text: 'Waste Colonialism', link: '/pages_tasksheet_wastecolonialism.md' },
          { text: 'Witchcraft', link: '/pages_tasksheet_witchcraft.md' }
        ]
      }
    ],

    // Sidebar configuration with new links
    sidebar: [
      {
        text: 'External Links',
        items: [
          { text: 'GitHub Code', link: 'https://github.com/MonikaBarget/distant-reading' },
          { text: 'YouTube Channel', link: 'https://www.youtube.com/@digitalhistory7990' }
        ]
      }
    ],    

    // Social links that appear in the footer
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})