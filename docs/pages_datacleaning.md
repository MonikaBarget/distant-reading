# Advice for data cleaning

## Semi-manual data cleaning

Up to a range of about 50000 social media posts, data can still be cleaned semi-manually in EXCEL, Open Refine or a browser-based cleaning tool. 

- EXCEL and similar software have many in-built cleaning functionalities that you may want to explore. You can, for instance, use the *Remove Duplicates* feature (found under the Data tab) to delete any duplicate entries. You can use functions like UPPER(), LOWER(), or PROPER() to standardise text formats. Similarly, EXCEL has a TRIM() function to remove extra spaces before or after text entries. EXCEL also permits filtering and conditional formatting to highlight special features. Last but not least, EXCEL can be used to create simple charts (such as bar graphs) to visualise data. Check out the Microsoft documentation for more information or find some tutorial videos on YouTube.
  
- [Text cleaner](https://textcleaner.net/?utm_content=cmp-true) is a browser-based, all-in-one text cleaning and text formatting online tool that can perform many simple and complex text operations including format text, clean text, remove line breaks, strip HTML, convert case, and find and replace text online. You can copy and paste text to the input box on the website and select the cleaning operations.
  
- [OpenRefine](https://openrefine.org/), which you can directly run on the UM DSRI, is a powerful free, open source tool for working with messy data in spreadsheets. Open Refines helps you clean data but also has options for exporting them into new formats. Please check out the [Skills 1.3 Open Refine](https://monikabarget.github.io/distant-reading/pages_skills1_3_OpenRefine.html) page for more details!

## Cleaning (larger) data sets with scripts

Large data sets can cause severe performance issues when opened in tools like EXCEL, so cleaning via script is recommended. The following script permits the cleaning of all kinds of social media collected in .txt format, with a special focus on deleting @ signs, hashtags, URLs and emojis:

- [Clean data with Python](https://github.com/MonikaBarget/distant-reading/tree/main/python/Clean_data.py)
