## Describe usage cases

## options to scrape content by time or region

Several forum discussions, e.g. on Stackoverflow, cover the different scraping options for Google News and the challenges they may pose. The parameters that the Google News API allows for data selection are documented [here](https://serpapi.com/google-news-api). One problem is that Google News now only permit a collection of 100 items max. per query, and it is unfortunately not possible to scrape news by the hour (see [this question](https://stackoverflow.com/questions/73072802/web-scraping-articles-from-google-news) on Stackoverflow and the relevant responses. The smallest time frame that can be selected is one day. But collecting news across a longer time frame is still possible when looping through a longer period of time. It can also help to combine scraping data per day with scraping data per country as the default setting in Google news is to collect US news.

To scrape Google news by country, you can iterate through the list of countries in which Google services are supported. The full list of countries is available for download here: [https://serpapi.com/google-countries](https://serpapi.com/google-countries)

## running code on Colab

Easy to reuse code that runs well on Google Colab if you register for your own Google API: 

https://github.com/topics/google-news-scraper

## adjusting code for other environments (Jupyterlab)

To run the code in other environments, e.g Jupyterlab, you need to change the first few lines of code relating to Google Colab settings. On the Maastricht University DSRI, you need to import the relevant packages via <code>!pip install</code>, and it may also be necessary to define a specific output directory. 

More detailed documentation will follow...
