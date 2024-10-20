# Working with podcast reviews as research data

Podcast reviews provide an interesting source of user-generated content that can help us understand the tastes and opinions of different audiences. This can be relevant for product evaluation and marketing, but also for academic research in media studies, cultural studies, politics, gender studies, etc. Podcast reviews typically cover emotional responses and personal experiences as well as critical reflections. They can give insight into prevailing stereotypes and fears, but also in people's argumentations and knowledge.

# How to collect podcast reviews from the Apple Store

For scraping the podcast reviews from the [Apple Store](https://www.apple.com/apple-podcasts/), we will use a [Python](https://www.python.org/doc/essays/blurb/) script. According to the official website, "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics." You will **not** need to understand the details of programming to run Python code in the [UM DSRI](https://dsri.maastrichtuniversity.nl/). But you will need to know which variables in the code to change for the required output.

In the academic year of 2022/2023, Monika Barget started experimenting with code for downloading podcast reviews because one of the MA DC thesis students was interested in analyzing *True Crime* podcast reviews via distant reading. The Apple podcast reviews turned out to be an exciting source because they are normally rich in content and relatively easy to scrape. The HTML of the Apple Store site is well-structured, and some developers have already built specialized Python packages (collections of code) to harvest them. One such useful package is the [App Store Scraper](https://pypi.org/project/app-store-scraper/) for Apple, which was originally developed by Eric Lim under an MIT License (MIT).

With the help of Lars Keuris ([@R14](https://github.com/14RS)), we adjusted the *App Store Scraper* to our needs, and Arnoud Wils (The Plant) finally made the code available to all MA DC students via the UM Data Science Research Infrastructure.

To run the *App Store Scraper* on reviews for a particular podcast, the script needs the following information provided by you:

- country of podcast
- name of podcast
- official app ID
- number of reviews to be scraped

You will always find the podcast name, the country code, and the app ID in the podcast URL.

Example: [https://podcasts.apple.com/us/podcast/black-girl-gone-a-true-crime-podcast/id1556267741?see-all=reviews](https://podcasts.apple.com/us/podcast/black-girl-gone-a-true-crime-podcast/id1556267741?see-all=reviews)

In the actual script, the information will be structured like this:

```python
app_id = 437299706
app_name = 'last-podcast-on-the-left'
country = 'us'
```

# Output data and how they can be analysed

The reviews which the script then collects include the star-ratings, dates, and reviewer names. 
All the information is written into a table format and saved as a CSV file for further processing. 
CSV files can easily be imported into Open Refine (see additional instructions) for data filtering.
This allows you, for instance, to understand how often certain ratings occur, or when people have left the most reviews.
You can also export the comments as text information and further analyse them using Voyant Tools.

The following YouTube video by Monika explains the process of filtering data in Open Refine and exporting them step-by-step:

![Thumbnail](https://img.youtube.com/vi/oMWIUf5_9jM&t/maxresdefault.jpg)

[Sorting and exporting data in Open Refine](https://www.youtube.com/watch?v=oMWIUf5_9jM&t=287s)

The focus is on using a general text filter to find keywords and using the facet filter to explore rankings. However, OpenRefine has many other
exciting functionalities not covered in this brief introduction! If you want to learn more, check out other videos shared by researchers and librarians on YouTube. One Open Refine tutorial on editing spreadsheets and uploading data easily to Wikidata is this:

https://www.youtube.com/watch?v=wfS1qTKFQoI
