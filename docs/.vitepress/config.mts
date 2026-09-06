import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DistantReading",
  base: '/distant-reading/',  // Base URL for GitHub Pages deployment
  description: "Files and documentation for teaching",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Welcome", link: "/pages_welcome" }
    ],

    sidebar: [
      { text: "YouTube Channel", link: "https://www.youtube.com/@digitalhistory7990" },
      { text: "GitHub Repository", link: "https://github.com/MaastrichtUniversityPress/distant-reading-textbook" }
    ],

    // Social links in footer
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MaastrichtUniversityPress/distant-reading-textbook' }
    ],

    // Custom 404 message
    notFound: {
      title: 'Page under construction',
      quote: 'This page is under construction. Go back to the main site or select another case study from the Task Sheets menu.',
      linkText: 'Return to home',
      link: '/'
    }
  }
});
