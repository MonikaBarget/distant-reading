// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './override.css'; // Import your custom CSS file

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // You can add additional enhancements here if needed
  }
};
