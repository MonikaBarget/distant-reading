import{_ as e,c as a,a0 as r,o}from"./chunks/framework.Ccoi24fT.js";const u=JSON.parse('{"title":"Scraping news items via the Google API","description":"","frontmatter":{},"headers":[],"relativePath":"pages_datascraping_googlenews.md","filePath":"pages_datascraping_googlenews.md"}'),s={name:"pages_datascraping_googlenews.md"};function n(i,t,d,l,c,h){return o(),a("div",null,t[0]||(t[0]=[r('<h1 id="scraping-news-items-via-the-google-api" tabindex="-1">Scraping news items via the Google API <a class="header-anchor" href="#scraping-news-items-via-the-google-api" aria-label="Permalink to &quot;Scraping news items via the Google API&quot;">​</a></h1><h2 id="use-cases-and-limitations" tabindex="-1">Use cases and limitations <a class="header-anchor" href="#use-cases-and-limitations" aria-label="Permalink to &quot;Use cases and limitations&quot;">​</a></h2><p>When working on contemporary political and social issues, getting &quot;treding&quot; news via the Google API can be one solution for a relatively fast data collection. Unfortunately, the way in which Google News entries are ranked is not entirely transparent. The <a href="https://support.google.com/news/publisher-center/answer/9606702?hl=en" target="_blank" rel="noreferrer">Google Publisher Help Center</a> states that &quot;ranking in Google News is determined algorithmically&quot; and mentions &quot;relevance of content&quot;, &quot;prominence&quot;, &quot;authoritativeness&quot;, &quot;freshness&quot;, &quot;location&quot; and &quot;language&quot; as the most important factors. However, criteria such as &quot;freshness&quot; are not specified and scraping of news items shows that many articles are ranked highly for several days in a row. This is why working with Google News always requires a critical reflection on the data retrieved.</p><h2 id="overview-of-available-google-news-api-scraper-on-github" tabindex="-1">Overview of available Google News API scraper on Github <a class="header-anchor" href="#overview-of-available-google-news-api-scraper-on-github" aria-label="Permalink to &quot;Overview of available Google News API scraper on Github&quot;">​</a></h2><p>Github has a helpful <a href="https://github.com/topics/google-news-scraper" target="_blank" rel="noreferrer">overview of code and apps</a> that can be used to scrape Google News. Most of these respositories provide information on scraping metadata, but not the actual text behind the articles (see information below). A considerable number of the scripts for extracting news via the Google API are written in Python, a programming language that is very popular in the digital humanities and social sciences. What you have to keep in mind is that most of the scripts are written by developers who are not paid for maintenance and who may therefore abandon the scripts after a while. API changes on the side of Google can then result in depricated code.</p><h2 id="options-to-scrape-content-by-time-or-region" tabindex="-1">options to scrape content by time or region <a class="header-anchor" href="#options-to-scrape-content-by-time-or-region" aria-label="Permalink to &quot;options to scrape content by time or region&quot;">​</a></h2><p>Several forum discussions, e.g. on Stackoverflow, cover the different scraping options for Google News and the challenges they may pose. The parameters that the Google News API allows for data selection are documented <a href="https://serpapi.com/google-news-api" target="_blank" rel="noreferrer">here</a>. One problem is that Google News now only permit a collection of 100 items max. per query, and it is unfortunately not possible to scrape news by the hour (see <a href="https://stackoverflow.com/questions/73072802/web-scraping-articles-from-google-news" target="_blank" rel="noreferrer">this question</a> on Stackoverflow and the relevant responses. The smallest time frame that can be selected is one day. But collecting news across a longer time frame is still possible when looping through a longer period of time. It can also help to combine scraping data per day with scraping data per country as the default setting in Google news is to collect US news.</p><p>To scrape Google news by country, you can iterate through the list of countries in which Google services are supported. The full list of countries is available for download here: <a href="https://serpapi.com/google-countries" target="_blank" rel="noreferrer">https://serpapi.com/google-countries</a></p><p>However, in many cases, all countries across the world are shown the exact same news items, especially where international crises are concerned. Testing data scraping for an MA thesis, the student found that Afghanisatan and Australia, for instance, were shown the exact same top-60 news items for the keyword &quot;Gaza&quot; on October 7, 2023, to October 8, 2023, shortly after the conflict between Israel and Palestine escalated:</p><table tabindex="0"><thead><tr><th>title</th><th>published date</th><th>publisher.title</th></tr></thead><tbody><tr><td>Hamas surprise attack out of Gaza stuns Israel and leaves hundreds dead in fighting, retaliation - The Associated Press</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>The Associated Press</td></tr><tr><td>In focus: The war in Gaza - UN Women</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>UN Women</td></tr><tr><td>Timeline of conflict between Israel and Palestinians in Gaza - Reuters</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Reuters</td></tr><tr><td>Netanyahu says Israel is ‘at war’ after Hamas launches surprise air and ground attack from Gaza - CNN</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>CNN</td></tr><tr><td>Israel-Palestine escalation updates: Gaza under bombardment</td><td>Israel War on Gaza News - Al Jazeera English</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td></tr><tr><td>Israel/OPT: Civilians on both sides paying the price of unprecedented escalation in hostilities between Israel and Gaza ... - amnesty.org</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>amnesty.org</td></tr><tr><td>What is Hamas and why is it fighting with Israel in Gaza? - BBC.com</td><td>Sat, 07 Oct 2023 15:58:40 GMT</td><td>BBC.com</td></tr><tr><td>Israel battles Hamas militants as death toll nears 1,200 - The Associated Press</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>The Associated Press</td></tr><tr><td>Facts and figures: Women and girls during the war in Gaza - UN Women</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>UN Women</td></tr><tr><td>Why this Israel-Gaza conflict is so complicated for Biden - CNN</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>CNN</td></tr><tr><td>Israel retaliates after Hamas attacks, deaths pass 1100 - Reuters</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Reuters</td></tr><tr><td>Israel declares state of war, attacks on Gaza intensify - Al Jazeera English</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>Israel retaliation kills 230 Palestinians after Hamas operation - Al Jazeera English</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>Israel formally declares war against Hamas as it battles to push militants off its soil - CNN</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>CNN</td></tr><tr><td>Israel vows &#39;mighty vengeance&#39; after surprise attack - Reuters</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Reuters</td></tr><tr><td>The history of Gaza in 2 minutes - CNN</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>CNN</td></tr><tr><td>Fears of a ground invasion of Gaza grow as Israel vows ‘mighty vengeance’ - Al Jazeera English</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>Gaza Strip suffers deadliest day in 15 years after Hamas attack - Reuters</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Reuters</td></tr><tr><td>Israel-Hamas war updates: Death toll rises as Israeli jets pound Gaza - Al Jazeera English</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>War grips Israel, Gaza after surprise Hamas attack and Israeli retaliation - PBS NewsHour</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>PBS NewsHour</td></tr><tr><td>Israel-Palestine history: The deep roots of the Israel-Gaza conflict - Vox.com</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Vox.com</td></tr><tr><td>Israel-Gaza Conflict: Air-Raid Sirens in Israel Warn of Continued Strikes on Sunday - The New York Times</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>The New York Times</td></tr><tr><td>Gaza Has Suffered Under 16-Year Blockade - The New York Times</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>The New York Times</td></tr><tr><td>What to know as conflict erupts between Hamas and Israel after deadly attack, retaliation - PBS NewsHour</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>PBS NewsHour</td></tr><tr><td>Desert horror: Music festival goers heard rockets, then Gaza militants fired on them and took hostages - CNN</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>CNN</td></tr><tr><td>What happened in Israel? A breakdown of how Hamas attack unfolded - Al Jazeera English</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>An Attack From Gaza and an Israeli Declaration of War. Now What? - The New York Times</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>The New York Times</td></tr><tr><td>There is nothing surprising about Hamas’s operation - Al Jazeera English</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>Gaza: MSF provides medical care and donates supplies amid intense conflict - Doctors Without Borders (MSF-USA)</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Doctors Without Borders (MSF-USA)</td></tr><tr><td>An Israeli airstrike kills 19 members of the same family in a southern Gaza refugee camp - The Associated Press</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>The Associated Press</td></tr><tr><td>What is Hamas? A simple guide to the armed Palestinian group - Al Jazeera English</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>Israel flattens Palestine Tower amid deadly Gaza bombardment - Al Jazeera English</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>Escalation in the Gaza Strip and Israel</td><td>Flash Update #2 [EN/AR/HE] - occupied Palestinian territory - ReliefWeb</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td></tr><tr><td>Israeli strikes flatten buildings, mosques in Gaza - Al Jazeera English</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>Resources for Educators, Families to Discuss the Events in Israel and Gaza with Students - San Diego County Office of Education</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>San Diego County Office of Education</td></tr><tr><td>Why the Palestinian group Hamas launched an attack on Israel? All to know - Al Jazeera English</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>Netanyahu Bears Responsibility for This Israel-Gaza War - Haaretz Editorial - Haaretz</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Haaretz</td></tr><tr><td>UNRWA Situation Report # 1 on the situation in the Gaza Strip - unrwa</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>unrwa</td></tr><tr><td>Israel faces &#39;long, difficult war&#39; after Hamas attack from Gaza - BBC.com</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>BBC.com</td></tr><tr><td>No place for Gaza residents to flee after Israel declares war, bombs homes - Al Jazeera English</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Al Jazeera English</td></tr><tr><td>What to know about the Gaza Strip - DW (English)</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>DW (English)</td></tr><tr><td>Israel-Gaza conflict: Slideshow - ABC News</td><td>Sat, 07 Oct 2023 18:58:58 GMT</td><td>ABC News</td></tr><tr><td>For years, Netanyahu propped up Hamas. Now it’s blown up in our faces - The Times of Israel</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>The Times of Israel</td></tr><tr><td>Gaza: Everything you need to know about the besieged Palestinian enclave - Middle East Eye</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Middle East Eye</td></tr><tr><td>Maps: Tracking the Attacks in Israel and Gaza - The New York Times</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>The New York Times</td></tr><tr><td>Massive explosion as Gaza high-rises destroyed by jets - BBC.com</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>BBC.com</td></tr><tr><td>Israel attack: PM says Israel at war after 250 killed in attack from Gaza - BBC.com</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>BBC.com</td></tr><tr><td>The West&#39;s hypocrisy towards Gaza&#39;s breakout is stomach-turning - Middle East Eye</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Middle East Eye</td></tr><tr><td>What is Hamas, how does it control the Gaza Strip and why has Israel declared war? - ABC News</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>ABC News</td></tr><tr><td>&#39;The Middle East Region Is Quieter Today Than It Has Been in Two Decades&#39; - The Atlantic</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>The Atlantic</td></tr><tr><td>MAP launches Gaza emergency response amid rapidly escalating violence - Medical Aid for Palestinians</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Medical Aid for Palestinians</td></tr><tr><td>Video shows moment kidnapped woman begs Hamas fighters not to kill her - Business Insider</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Business Insider</td></tr><tr><td>Israel-Gaza: More than 250 bodies found at site of Supernova festival - bbc.co.uk</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>bbc.co.uk</td></tr><tr><td>Just another battle or the Palestinian war of liberation? - The Electronic Intifada</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>The Electronic Intifada</td></tr><tr><td>What is Israel&#39;s first line of defense, the Iron Dome? - Fox News</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>Fox News</td></tr><tr><td>Israel-Hamas war: What to know about the attacks, casualties, hostages and the response - The Globe and Mail</td><td>Sun, 08 Oct 2023 07:00:00 GMT</td><td>The Globe and Mail</td></tr><tr><td>Terrifying video: Woman kidnapped on motorcycle to Gaza - Arutz Sheva</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>Arutz Sheva</td></tr><tr><td>Articles, Videos and More IDF Updates: Hamas War on Israel (Oct 2023) - Announcements, Videos and More - idf.il</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>idf.il</td></tr><tr><td>DEVELOPING: &#39;Diplomatic sensitivities&#39; prevented Israel from a retaliatory strike on Iran: Reports - News24</td><td>Sat, 07 Oct 2023 07:00:00 GMT</td><td>News24</td></tr></tbody></table><h2 id="running-code-on-colab" tabindex="-1">running code on Colab <a class="header-anchor" href="#running-code-on-colab" aria-label="Permalink to &quot;running code on Colab&quot;">​</a></h2><p>Easy to reuse code that runs well on Google Colab if you register for your own Google API:</p><p><a href="https://github.com/topics/google-news-scraper" target="_blank" rel="noreferrer">https://github.com/topics/google-news-scraper</a></p><h2 id="adjusting-code-for-other-environments-jupyterlab" tabindex="-1">adjusting code for other environments (Jupyterlab) <a class="header-anchor" href="#adjusting-code-for-other-environments-jupyterlab" aria-label="Permalink to &quot;adjusting code for other environments (Jupyterlab)&quot;">​</a></h2><p>To run the code in other environments, e.g Jupyterlab, you need to change the first few lines of code relating to Google Colab settings. On the Maastricht University DSRI, you need to import the relevant packages via <code>!pip install</code>, and it may also be necessary to define a specific output directory.</p><p>More detailed documentation will follow...</p><h2 id="extracting-text-for-distant-reading" tabindex="-1">Extracting text for distant reading <a class="header-anchor" href="#extracting-text-for-distant-reading" aria-label="Permalink to &quot;Extracting text for distant reading&quot;">​</a></h2><p>The Google News scraping gives us a JSON file with basic metadata, such as news outlet, date, and URL. However, it does not automatically give us the text content of the articles behind the news. There are several options to proceed:</p><h3 id="exporting-html-pages-to-pdf" tabindex="-1">Exporting HTML pages to PDF <a class="header-anchor" href="#exporting-html-pages-to-pdf" aria-label="Permalink to &quot;Exporting HTML pages to PDF&quot;">​</a></h3><ol><li>use a second script to harvest the HTML files behind the URLs with the <code>selenium</code> package for web crawling, then download the HTML files and batch-convert them to PDF as many distant reading tools such as Voyant process PDF input</li><li>for converting HTML to PDF, Python scripts can also be used but not all packages run smoothly on the UM DSRI (Monika is still working on solutions)</li><li>PDF documents can also be batch-converted with PDF editors such as <a href="https://www.adobe.com/acrobat/hub/how-to-batch-convert-to-pdf.html" target="_blank" rel="noreferrer">Adobe</a>, including browser-based tools such as <a href="https://www.printfriendly.com/" target="_blank" rel="noreferrer">PrintFriendly</a></li></ol><ul><li>option to get content directly from the websites: <a href="https://stackoverflow.com/questions/56829861/how-to-scrape-google-news-articles-content-from-google-news-rss" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/56829861/how-to-scrape-google-news-articles-content-from-google-news-rss</a></li><li>this script has an option to scrape <code>article.text()</code> to CSV: <a href="https://github.com/pratikpv/google_news_scraper_and_sentiment_analyzer/blob/master/google_news_scraper.py" target="_blank" rel="noreferrer">https://github.com/pratikpv/google_news_scraper_and_sentiment_analyzer/blob/master/google_news_scraper.py</a></li></ul><h3 id="extracting-full-text-from-news-urls" tabindex="-1">Extracting full text from news URLs <a class="header-anchor" href="#extracting-full-text-from-news-urls" aria-label="Permalink to &quot;Extracting full text from news URLs&quot;">​</a></h3><p>Newspaper3k is a Python package for article scraping and curation. Compatible with Python3, it leverages lxml and it extracts articles from diverse web sources. Its GitHub integration facilitates collaboration but a deprecated Python2 branch exists.</p><p><a href="https://newspaper.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">https://newspaper.readthedocs.io/en/latest/</a></p><p>Installation information: <a href="https://pypi.org/project/newspaper3k/" target="_blank" rel="noreferrer">https://pypi.org/project/newspaper3k/</a> Newspaper3k can be also be installed on the UM DSRI.</p><p>Getting real URLs hidden behind Google News: <a href="https://stackoverflow.com/questions/51131834/decoding-encoded-google-news-urls" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/51131834/decoding-encoded-google-news-urls</a></p><ul><li></li></ul>',27)]))}const g=e(s,[["render",n]]);export{u as __pageData,g as default};