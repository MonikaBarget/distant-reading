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

The reviews which the script then collects include the star-ratings, dates, and reviewer names. 
All the information is written into a table format and saved as a CSV file for further processing. 
CSV files can easily be imported into Open Refine (see additional instructions) for data filtering.
