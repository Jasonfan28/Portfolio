# Philadelphia CAMA Reviewer

**Course project | Cloud computing and mass appraisal | Spring 2026**

**Role:** Team member (Team 3)
**Course:** MUSA 5090 (University of Pennsylvania)
**Live site:** [Philadelphia CAMA Assessment Reviewer](https://weitzman-musa-geocloud.github.io/s26-team3-cama/reviewer/)
**Repository:** [weitzman-musa-geocloud/s26-team3-cama](https://github.com/weitzman-musa-geocloud/s26-team3-cama)
**Audience fit:** Data science, public policy, housing and real estate

## The project

A cloud-native computer-assisted mass appraisal (CAMA) system for Philadelphia, ending in a public-facing dashboard for reviewing parcel-level assessed values across the city's tax base. The reviewer lets a user search any property by address or OPA/BRT number, see its current and prior year assessed values next to the CAMA model's predicted value, and explore citywide assessment analytics.

## The pipeline

The system runs on Google Cloud Platform. Extraction tasks download property data from OpenDataPhilly, including OPA assessments and assessment history, PWD stormwater billing parcels, real estate transfers, and building permits. Preparation stages transform the raw files, and loading steps create BigQuery external and core tables. Cloud Functions orchestrate the workflow across Cloud Storage, BigQuery, and Cloud Run. The pipeline outputs assessment distribution charts, vector map tiles for the dashboard, and predictive models estimating current property values.

## The dashboard

The reviewer maps every parcel as a choropleth of assessed value over a Leaflet basemap, served from the pipeline's own vector tiles. Sidebar panels show property details on search, and analytics panels chart the tax year distribution and current model assessments.

## Why it matters for a portfolio

The project demonstrates production-style data engineering. It moves open city data through a scheduled cloud pipeline into a warehouse, trains a valuation model on it, and serves the results to the public through a live tool.

## Deliverable

[Live reviewer dashboard](https://weitzman-musa-geocloud.github.io/s26-team3-cama/reviewer/)

## Skills demonstrated

Google Cloud Platform (BigQuery, Cloud Storage, Cloud Functions, Cloud Run), data pipeline design, mass appraisal modeling, vector tile generation, Leaflet dashboard development, open data integration.
