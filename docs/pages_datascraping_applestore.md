## Analysing Apple Store reviews

This code and data samples highlight the opportunity of using reviews in the Apple Store for data analysis. Such reviews can relate to apps that users downloaded or podcasts that users listen to.

In the academic year of 2022/2023, I started experimenting with podcast reviews because one of my MA DC thesis students at Maastricht University was interested in them. The Apple podcast reviews turned out to be an exciting source because they are normally rich in content and relatively easy to scrape. The HTML of the Apple Store site is well-structured, and some developers have already built specialised Python package to harvest them.

One such useful package is the [App Store Scraper](https://pypi.org/project/app-store-scraper/) for Apple, which was originally developed by Eric Lim under an MIT License (MIT).

Here is my own script using app store scraper to collect podcast reviews and write them to a CSV file: 

https://github.com/MonikaBarget/DigitalHistory/blob/master/JupyterNotebooks/Webscraping_ApplePodcasts.ipynb

Here is a script by Lars Keuris [@R14](https://github.com/14RS) using the same package but already cleaning the data along the way (e.g. by transforming emojis into punctuation marks only):

https://github.com/14RS/ScrapeApplePodcastReviews/blob/main/ScrapeApplePodcastReviewWithApp_Store_Scraper.ipynb/

