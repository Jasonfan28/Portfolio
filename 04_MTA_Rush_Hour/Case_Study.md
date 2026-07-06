# MTA Subway Passenger Flow: Weekday Rush Hours

**Python + NY Open Data SODA API | Personal project | 2025**

**Role:** Sole author
**Stack:** Python, requests, pandas, NumPy, matplotlib
**Data:** MTA Subway Origin-Destination Ridership (NY Open Data, dataset jsu2-fbtj)
**Audience fit:** Data science, housing & real estate (network/commute context)

## The question

New York City's subway origin-destination table is publicly available but unwieldy: millions of hourly rows across every station pair in the system. What does weekday rush-hour passenger flow actually look like when you pull it cleanly from source, keep the peak windows (7-9 AM and 5-7 PM Monday through Friday), and reduce it to a single legible dashboard?

## What the pipeline does

The script queries the NY Open Data SODA API with an explicit WHERE filter for weekday rush hours, paginates in 50,000-row batches up to 200,000 records, and constructs a tidy pandas DataFrame with numeric ridership, hour, and latitude/longitude fields. It then produces a five-panel dashboard: a top origin-destination flow map on geographic axes, the top fifteen origin stations, mean ridership by rush hour, total ridership by day of week, and a morning vs. evening comparison.

All visual styling is built from a consistent dark palette so the output reads as one coherent piece rather than a set of stacked charts.

## What the dashboard shows

Manhattan's trunk stations dominate outbound ridership in the morning (Times Square, Grand Central, Penn/34th). The evening pattern mirrors this but spreads demand further north and into the outer boroughs. The flow map makes the trunk-line structure of the system visible at a glance: the Lexington Avenue corridor and the 7 train carry disproportionate share relative to their geographic footprint.

## Why it matters for a portfolio

It shows the full small-scale data engineering loop: calling a paginated API with structured filters, handling the pagination and type conversion defensively, and rendering the result as a publication-ready figure. It also demonstrates comfort with transportation data at operational scale.

## Deliverables

[MTA_rush_hour_analysis.py](./MTA_rush_hour_analysis.py)
[mta_rush_hour.png](./mta_rush_hour.png)
[README.md](./README.md)

## Skills demonstrated

Public-API data extraction, pagination and batching, pandas data cleaning, matplotlib multi-panel dashboards, consistent visual design systems, transportation analytics.
