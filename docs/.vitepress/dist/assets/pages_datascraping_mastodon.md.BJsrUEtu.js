import{_ as a,c as t,a0 as n,o}from"./chunks/framework.Ccoi24fT.js";const m=JSON.parse('{"title":"Analysing public Mastodon data","description":"","frontmatter":{},"headers":[],"relativePath":"pages_datascraping_mastodon.md","filePath":"pages_datascraping_mastodon.md"}'),i={name:"pages_datascraping_mastodon.md"};function s(r,e,l,d,c,p){return o(),t("div",null,e[0]||(e[0]=[n('<h1 id="analysing-public-mastodon-data" tabindex="-1">Analysing public Mastodon data <a class="header-anchor" href="#analysing-public-mastodon-data" aria-label="Permalink to &quot;Analysing public Mastodon data&quot;">​</a></h1><h2 id="why-mastodon-can-be-an-interesting-data-source" tabindex="-1">Why Mastodon can be an interesting data source <a class="header-anchor" href="#why-mastodon-can-be-an-interesting-data-source" aria-label="Permalink to &quot;Why Mastodon can be an interesting data source&quot;">​</a></h2><p>As an alternative to Twitter, we also explore Mastodon as a source for public comments on politics, culture and science. Mastodon is a decentralised network in which several local servers connect, and the learning curve for using it is slightly higher than on other social media platforms. This means that the community on Mastodon is rather small and that most users are either very interested in (new) technologies or join for ideological reasons, e.g. because they oppose for-profit networks.</p><p>Mastodon will, therefore, not give you a broad insight into a wide range of societal positions, but it can still be interesting to find out about <em>trending topics</em> in more specialised communities such as higher education and game development.</p><h2 id="technical-requirements" tabindex="-1">Technical requirements <a class="header-anchor" href="#technical-requirements" aria-label="Permalink to &quot;Technical requirements&quot;">​</a></h2><p>The endpoints for collecting public data from Mastodon are explained here in their <a href="https://docs.joinmastodon.org/client/public/" target="_blank" rel="noreferrer">Playing with public data</a> documentation. You can access data for different purposes:</p><ul><li>Endpoint for fetching public timelines: <a href="https://mastodon.example/api/v1/timelines/public" target="_blank" rel="noreferrer">https://mastodon.example/api/v1/timelines/public</a></li><li>With user-defined limits: <a href="https://mastodon.example/api/v1/timelines/public?limit=2" target="_blank" rel="noreferrer">https://mastodon.example/api/v1/timelines/public?limit=2</a></li></ul><p>For a full documentation on querying Mastodon with Python, please read the <a href="https://mastodonpy.readthedocs.io/en/stable/" target="_blank" rel="noreferrer">Mastodonpy documentation</a>.</p>',8)]))}const u=a(i,[["render",s]]);export{m as __pageData,u as default};