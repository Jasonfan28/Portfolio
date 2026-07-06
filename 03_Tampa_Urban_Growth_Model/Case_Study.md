# Urban Growth Forecast: Tampa Metro, 2021 to 2031

**Logistic regression + scenario analysis | Spring 2025**

**Role:** Co-author, model build + write-up
**Collaborator:** Grace Nelson
**Course:** CPLN 6710 Land Use and Environmental Modeling (University of Pennsylvania)
**Audience fit:** Data science, housing & real estate, public policy

## The question

The Tampa metropolitan statistical area spans three counties and a rapidly growing coastal footprint. A long-discussed St. Petersburg to Ruskin bridge across Tampa Bay has resurfaced as a serious infrastructure proposal. If built, where would it accelerate suburban conversion over the following decade, and which unbuilt parcels would shift from "unlikely to develop" to "high probability"?

## The model

We built a logistic regression that predicts whether a cell converts from undeveloped to developed between 2011 and 2021, then applied the fitted probabilities forward to 2031 under two scenarios (no bridge, bridge operational). Features include 2011 land cover, existing highway proximity, distance to nearest developed edge, population density, and an aerially-weighted census interpolation that reconciles boundary changes.

Model performance was evaluated on a held-out sample of 2011 to 2021 conversions. The scenario map layers the bridge's predicted probability uplift onto the regional development surface.

## What it shows

In the no-bridge scenario, growth concentrates along the existing I-75 and US-301 corridors north of Tampa and east of Brandon. Under the bridge scenario, a corridor of previously low-probability cells along the southern Pinellas and northern Manatee county edge reclassifies to high probability, consistent with the classic "highway-induced development" pattern from the urban economics literature.

The write-up closes with three implications for regional planning: the timing gap between bridge construction and regulatory response, the risk of displacing existing agricultural land in Manatee, and the opportunity to precommit conservation easements in the most exposed subbasins.

## Why it matters for a portfolio

It combines the analytic core of quantitative planning (feature engineering, model evaluation, scenario application) with the translation layer that makes that analysis useful to a decision-maker.

## Deliverable

[Tampa_Urban_Growth_Model_Writeup.pdf](./Tampa_Urban_Growth_Model_Writeup.pdf)

## Skills demonstrated

Logistic regression, raster + vector integration, aerially-weighted census interpolation, scenario modeling, R Markdown reproducibility, planning interpretation of statistical output.
