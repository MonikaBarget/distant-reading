import{_ as t,c as a,a0 as r,o as n}from"./chunks/framework.Ccoi24fT.js";const u=JSON.parse('{"title":"Using Reddit for research","description":"","frontmatter":{},"headers":[],"relativePath":"pages_datascraping_reddit.md","filePath":"pages_datascraping_reddit.md"}'),i={name:"pages_datascraping_reddit.md"};function o(s,e,d,l,h,c){return n(),a("div",null,e[0]||(e[0]=[r('<h1 id="using-reddit-for-research" tabindex="-1">Using Reddit for research <a class="header-anchor" href="#using-reddit-for-research" aria-label="Permalink to &quot;Using Reddit for research&quot;">​</a></h1><h1 id="ethical-and-technical-challenges" tabindex="-1">Ethical and technical challenges <a class="header-anchor" href="#ethical-and-technical-challenges" aria-label="Permalink to &quot;Ethical and technical challenges&quot;">​</a></h1><p>Reddit, once seen as a user-driven community space, has recently evolved into a more monetised platform. They have, for instance, entered into an <a href="https://blog.google/inside-google/company-announcements/expanded-reddit-partnership/" target="_blank" rel="noreferrer">&quot;expanded partnership&quot;</a> with Google. This challenges users and researchers alike. One content-related problem in working with Reddit data can now be that ads are integrated in user feeds and that drawing lines between community engagement and profit generation may be difficult. A more technical problem is that the Reddit API has created new barriers for developers and academics as outlined in the <a href="https://support.reddithelp.com/hc/en-us/articles/16160319875092-Reddit-Data-API-Wiki" target="_blank" rel="noreferrer"><strong>API and Developer Terms</strong></a>. When using Reddit, it is important that you use a <strong>registered OAuth token</strong> for authentication. After scraping data, you have to be aware that Reddit requires you to delete content from your own storage if the content (e.g. a post, comment or entire user profile) gets deleted on their site, which means that keeping Reddit data you collected for later reuse or even data sharing is not an option. It’s recommended to delete stored Reddit data every 48 hours to stay compliant. Moreover, the Reddit API limits the number of API requests that you can send per minute. In November 2024, the rate is at <strong>100 requests per minute</strong> for each OAuth client ID.</p><h2 id="pushshift-reddit-documentation" tabindex="-1">Pushshift Reddit documentation <a class="header-anchor" href="#pushshift-reddit-documentation" aria-label="Permalink to &quot;Pushshift Reddit documentation&quot;">​</a></h2><p>One way to access slightly older Reddit data is the <a href="https://www.pullpush.io/" target="_blank" rel="noreferrer">PullPush Reddit API Documentation</a>.</p><p>🛠️ More detailed information to follow! 🛠️</p><h2 id="r-and-python-packages" tabindex="-1">R and Python packages <a class="header-anchor" href="#r-and-python-packages" aria-label="Permalink to &quot;R and Python packages&quot;">​</a></h2><p>For users comfortable with R or Python, the following packages allow data collection from Reddit in compliance with their API policies:</p><ul><li><a href="https://github.com/praw-dev/praw" target="_blank" rel="noreferrer">PRAW (Python Reddit API Wrapper)</a> gathers Reddit posts, comments, and metadata. However, it only scrapes up to 1000 posts or comments in total (according to users).</li><li><a href="https://github.com/ivan-rivera/RedditExtractor" target="_blank" rel="noreferrer">RedditExtractoR</a> performs Reddit data collection in R.</li></ul><p>🛠️ Test script we used in 2023 and see if it is still functional!</p>',10)]))}const g=t(i,[["render",o]]);export{u as __pageData,g as default};