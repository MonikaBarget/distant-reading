# Scraping news items via the Google API

## Use cases and limitations

When working on contemporary political and social issues, getting "treding" news via the Google API can be one solution for a relatively fast data collection. Unfortunately, the way in which Google News entries are ranked is not entirely transparent. The [Google Publisher Help Center](https://support.google.com/news/publisher-center/answer/9606702?hl=en) states that "ranking in Google News is determined algorithmically" and mentions "relevance of content", "prominence", "authoritativeness", "freshness", "location" and "language" as the most important factors. However, criteria such as "freshness" are not specified and scraping of news items shows that many articles are ranked highly for several days in a row. This is why working with Google News always requires a critical reflection on the data retrieved.
 
## options to scrape content by time or region

Several forum discussions, e.g. on Stackoverflow, cover the different scraping options for Google News and the challenges they may pose. The parameters that the Google News API allows for data selection are documented [here](https://serpapi.com/google-news-api). One problem is that Google News now only permit a collection of 100 items max. per query, and it is unfortunately not possible to scrape news by the hour (see [this question](https://stackoverflow.com/questions/73072802/web-scraping-articles-from-google-news) on Stackoverflow and the relevant responses. The smallest time frame that can be selected is one day. But collecting news across a longer time frame is still possible when looping through a longer period of time. It can also help to combine scraping data per day with scraping data per country as the default setting in Google news is to collect US news.

To scrape Google news by country, you can iterate through the list of countries in which Google services are supported. The full list of countries is available for download here: [https://serpapi.com/google-countries](https://serpapi.com/google-countries)

## running code on Colab

Easy to reuse code that runs well on Google Colab if you register for your own Google API: 

https://github.com/topics/google-news-scraper

## adjusting code for other environments (Jupyterlab)

To run the code in other environments, e.g Jupyterlab, you need to change the first few lines of code relating to Google Colab settings. On the Maastricht University DSRI, you need to import the relevant packages via <code>!pip install</code>, and it may also be necessary to define a specific output directory. 

More detailed documentation will follow...

## Extracting text for distant reading

The Google News scraping gives us a JSON file with basic metadata, such as news outlet, date, and URL. However, it does not automatically give us the text content of the articles behind the news. There are several options to proceed:

1) use a second script to harvest the HTML files behind the URLs with the <code>selenium</selenium> package for web crawling, then download the HTML files and batch-convert them to PDF as many distant reading tools such as Voyant process PDF input
2) for converting HTML to PDF, Python scripts can also be used but not all packages run smoothly on the UM DSRI (Monika is still working on solutions)
3) PDF documents can also be batch-converted with PDF editors, including browser-based tools such as 
