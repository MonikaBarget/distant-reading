# get reviews for selected countries
import pandas as pd
from app_store_scraper import Podcast # @Arnoud: we can also still try the more general App module: see documentation
from pprint import pprint

def scrape_reviews(countries_reviewed, app_name, app_id):
    all_reviews = []
    for c in countries_reviewed:
        print(f"Scraping reviews for {app_name} in country {c}")
        
        try:
            # Initialize the Podcast object
            sysk = Podcast(country=c, app_name=app_name, app_id=app_id)
            sysk.review()
            
            print(f"No. of reviews found for country {c}: {sysk.reviews_count}")

            if sysk.reviews_count > 0:
                podcastdf = pd.DataFrame.from_dict(sysk.reviews)
                print(f"Retrieved {len(podcastdf)} reviews for country {c}.")
                all_reviews.append(podcastdf)
            else:
                print(f"No reviews found for country {c}.")
                
        except Exception as e:
            print(f"An error occurred while scraping for country {c}: {e}")
            if isinstance(e, ValueError):
                print(f"Response text: {sysk._response.text}")  # Print response for debugging

    return all_reviews

