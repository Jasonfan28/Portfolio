# Predicting Philadelphia Median House Values: OLS to Spatial Regression

**Two-report sequence | February to April 2025**

**Role:** Co-author (shared authorship across both reports)
**Team:** Jason Fan, Neil Jean-Baptiste II, Jasmin Sung
**Course:** CPLN 671 / MUSA 500 (University of Pennsylvania, Prof. Eugene Brusilovsky)
**Audience fit:** Housing and real estate, data science, public policy

## The arc

This piece is a methodological progression on a single housing question. Both reports predict median house values across Philadelphia census block groups from neighborhood characteristics: share of residents with at least a bachelor's degree, vacancy rate, single-family share, households in poverty, and median household income. Report 1 establishes the baseline with Ordinary Least Squares. Report 2 diagnoses the spatial autocorrelation OLS ignores and rebuilds the model with spatial lag, spatial error, and geographically weighted regression.

## Report 1: OLS baseline (February 2025)

Starts from a 2000 Census block group dataset of 1,816 observations, applies a documented cleaning protocol that leaves 1,720 block groups, runs exploratory analysis, checks the OLS assumptions with standard diagnostics, and interprets the fitted coefficients in planning terms. Vacancy is negatively associated with value, and educational attainment and income carry strong positive effects.

## Report 2: Spatial lag, spatial error, and GWR (April 2025)

Tests the OLS residuals for spatial autocorrelation with Moran's I against a spatial weights matrix, using a 999-permutation reference distribution for significance. Finding spatial dependence, the report fits two global spatial models (spatial lag and spatial error) and a geographically weighted regression that lets coefficients vary across Philadelphia. The comparison section contrasts model fit and the neighborhood-level variation the GWR surface reveals.

## Why the two reports belong together

The pair demonstrates the spatial-statistics core curriculum end to end. It shows why global OLS fails on geographic data, what Moran's I actually tests, and how spatial lag, spatial error, and GWR extend the toolkit. Keeping them side by side lets a reviewer see both the baseline and the progression.

## Deliverables

[1_OLS_Regression_Philly_Housing.pdf](./1_OLS_Regression_Philly_Housing.pdf) (Report 1)
[2_Spatial_Regression_GWR_Philly_Housing.pdf](./2_Spatial_Regression_GWR_Philly_Housing.pdf) (Report 2)

## Skills demonstrated

OLS regression with assumption checking, Moran's I, spatial weights matrices, spatial lag and spatial error modeling, geographically weighted regression, permutation-based hypothesis testing, collaborative technical writing.
