export default {
  base: '/DistantReading/',  // Adjust this to match your repo name on GitHub
  title: 'Distant Reading Documentation',
  description: 'Documentation for the DistantReading project',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },  // Links to the homepage (index.md)
      { text: 'Guide', link: '/guide/' },  // Links to docs/guide/index.md
      { text: 'API Reference', link: '/api/' },  // Links to docs/api/index.md
      { text: 'About', link: '/about/' }  // Links to docs/about/index.md
    ],
  }
}
