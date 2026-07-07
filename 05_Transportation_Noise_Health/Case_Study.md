# Transportation Noise and its Impact on Health Outcomes in the Northeast

**Python geospatial analysis | Fall 2025**

**Role:** Sole author
**Course:** MUSA 5500 (University of Pennsylvania)
**Live site:** [Project page](https://jasonfan28.github.io/MUSA550-Final-Noise_on_health/)
**Stack:** Python, GeoPandas, rasterio, rasterstats, statsmodels, scikit-learn
**Audience fit:** Data science, public policy

## The question

Does the roar of a highway or the rumble of a train affect physical and mental health? The project links transportation noise exposure to self-reported health outcomes across counties in the US Northeast and asks how that relationship varies with income and education.

## The pipeline

The analysis joins three sources. DOT National Transportation Noise Map rasters covering road, rail, and aviation noise are mosaicked across the Northeast and reduced to county-level exposure through zonal statistics. CDC PLACES supplies self-reported health outcomes. US Census data supplies income, education, race, and age controls. Regression models test the association between noise and health outcomes with socioeconomic controls, and a cluster analysis groups counties into noise and socioeconomic profiles.

## What it finds

The live site presents three findings.

The expectation of quiet. High-income, high-education groups report the highest depression rates, around 24 percent, despite living in the quietest areas.

The cosmopolitan buffer. Dense urban counties report the lowest depression, around 15 percent, yet carry the highest cholesterol prevalence, around 36 percent.

The body tax. In lower-education populations, noise exposure correlates strongly with high cholesterol, consistent with cumulative physiological stress even where reported psychological distress is low.

## Honest limitations

The zonal statistics use an arithmetic mean on the noise raster. Decibels are logarithmic, and the physically correct approach is to average in acoustic energy space and convert back. The write-up flags this and discusses the direction of the bias.

## Deliverables

[Live project site](https://jasonfan28.github.io/MUSA550-Final-Noise_on_health/) (primary deliverable)
[noise_health_analysis.ipynb](./noise_health_analysis.ipynb) (executable notebook)
[noise_health_analysis.html](./noise_health_analysis.html) (rendered notebook)

## Skills demonstrated

Raster mosaicking and zonal statistics, multi-source API ingestion (CDC PLACES, US Census, DOT), regression with socioeconomic controls, cluster analysis, public-health interpretation, web publication of analysis.
