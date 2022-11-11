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
