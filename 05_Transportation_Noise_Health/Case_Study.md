# Transportation Noise and Self-Reported Health in the US Northeast

**Python spatial regression + cluster analysis | Fall 2025**

**Role:** Sole author
**Course:** MUSA/CPLN Python Programming (University of Pennsylvania)
**Stack:** Python, GeoPandas, rasterio, rasterstats, statsmodels, scikit-learn
**Audience fit:** Data science, public policy

## The question

The US Department of Transportation publishes a national raster of combined road, rail, and aviation noise, and the CDC's PLACES program publishes census-tract and county-level self-reported health outcomes. Does transportation noise exposure predict self-reported depression and cardiovascular risk across Northeast counties, and how does that relationship interact with socioeconomic status?

## The pipeline

The notebook assembles three datasets. DOT CONUS noise rasters are mosaicked across nine Northeast states using `gdalbuildvrt`, then reduced to county-level exposure through `rasterstats.zonal_stats`. CDC PLACES is pulled via the Socrata API, pivoted from long to wide, and joined to county geometries. American Community Survey five-year income, poverty, race, and education variables are pulled via the US Census API and merged on FIPS.

Modeling proceeds in three stages. A multiple linear regression predicts depression prevalence using noise exposure with controls for income, race, age, education, and the full set of PLACES risk-behavior indicators; variance inflation factors guide feature selection. Interaction terms test whether the effect of noise on depression varies with education. A k-means cluster analysis (k chosen from silhouette score) then partitions counties into noise-and-SES profiles.

## What it finds

The headline result is a "diminishing returns" interaction. In lower-education counties, self-reported depression is elevated (~24 percent) regardless of noise exposure; other structural stressors appear to dominate. In higher-education counties, the quietest tracts show meaningfully lower depression (~18 percent), but as noise exposure rises the protective effect of education erodes until outcomes converge with the lower-education group.

The cholesterol model tells a different story: even in lower-education populations where self-reported depression is not elevated by noise, cholesterol prevalence rises with exposure, consistent with a biological stress pathway that persists even where conscious annoyance is suppressed.

Cluster analysis surfaces four stable profiles, with the highest-noise cluster concentrated in older, lower-income, whiter counties.

## Honest limitations

The notebook uses arithmetic mean for zonal statistics on the noise raster. Decibels are logarithmic and the physically correct approach is to convert to acoustic energy, take the zonal mean in energy space, and convert back. The write-up flags this explicitly and discusses the direction of the bias.

## Why it matters for a portfolio

The project demonstrates end-to-end Python geospatial analysis: raster mosaicking, zonal statistics, multi-source API ingestion, defensible regression with diagnostics, interaction-term interpretation, and a discussion that reads as public-health reasoning rather than pure statistics.

## Deliverables

[noise_health_analysis.ipynb](./noise_health_analysis.ipynb) (executable notebook)
[noise_health_analysis.html](./noise_health_analysis.html) (rendered output for web embedding)

## Skills demonstrated

GeoPandas, rasterio, rasterstats, multi-source API ingestion (CDC PLACES Socrata, US Census, DOT), zonal statistics, multiple and interaction-term regression, VIF diagnostics, k-means clustering, public-health interpretation.
