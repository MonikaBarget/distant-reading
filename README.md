# DistantReading

This repository contains teaching materials for distant reading in the humanities and social sciences.

## Social media analysis with Twitter

Some of the scripts and data shared here relate to social media analysis with Twitter. The Twitter academic API access was used to harvest the data. 

- [Python script for Twitter full archive search](https://github.com/MonikaBarget/DistantReading/blob/main/Twitter_full-archive-search_extended.py)

## Analysing public Mastodon data

As an alternative to Twitter, we also explore Mastodon. The endpoints for collecting public data from Mastodon are explained here: [Playing with public data](https://docs.joinmastodon.org/client/public/)

- Endpoint for fetching public timelines is: https://mastodon.example/api/v1/timelines/public
- With user-defined limits: https://mastodon.example/api/v1/timelines/public?limit=2
- Documentation for querying Mastodon with Python: https://mastodonpy.readthedocs.io/en/stable/

## Analysing Apple Store reviews

This code and data samples highlight the opportunity of using reviews in the Apple Store for data analysis. Such reviews can relate to apps that users downloaded or podcasts that users listen to.

In the academic year of 2022/2023, I started experimenting with podcast reviews because one of my MA DC thesis students at Maastricht University was interested in them. The Apple podcast reviews turned out to be an exciting source because they are normally rich in content and relatively easy to scrape. The HTML of the Apple Store site is well-structured, and some developers have already built specialised Python package to harvest them.

One such useful package is the [App Store Scraper](https://pypi.org/project/app-store-scraper/) for Apple, which was originally developed by Eric Lim under an MIT License (MIT).

Here is my own script using app store scraper to collect podcast reviews and write them to a CSV file: 

https://github.com/MonikaBarget/DigitalHistory/blob/master/JupyterNotebooks/Webscraping_ApplePodcasts.ipynb

Here is a script by Lars Keuris [@R14](https://github.com/14RS) using the same package but already cleaning the data along the way (e.g. by transforming emojis into punctuation marks only):

https://github.com/14RS/ScrapeApplePodcastReviews/blob/main/ScrapeApplePodcastReviewWithApp_Store_Scraper.ipynb/

## Data cleaning

Up to a range of about 50000 social media posts, data can still be cleaned semi-manually in EXCEL or a browser-based cleaning tool. More data usually cause severe performance issues, so cleaning via script is recommended. The following script permits the cleaning of all kinds of social media collected in .txt format, with a special focus on deleting @ signs, hashtags, URLs and emojis:

- [Clean data with Python](https://github.com/MonikaBarget/DistantReading/blob/main/Clean_data.py)

Tool recommended for cleaning plain text in your browser: [TextCleanR]https://www.textcleanr.com/

Tool recommended for cleaning structured data (e.g. in CSV and EXCEL format): [OpenRefine](https://openrefine.org/)

## Overview of collected data sets and task sheets

The [overview](https://github.com/MonikaBarget/DistantReading/blob/main/Overview.md) of the available data sets will be regularly updated. For some data sets, task sheets for student group work can also be found in this repository:

- [Case study 1: Elon Musk's takeover of Twitter](https://github.com/MonikaBarget/DistantReading/blob/main/ElonMusk_task-sheet.md)
- [Case study 2: Miley Cyrus's VMA2013 performance](https://github.com/MonikaBarget/DistantReading/blob/main/MileyCyrus_task-sheet.md)
