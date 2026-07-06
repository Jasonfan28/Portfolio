# Predicting Philadelphia Median House Values: OLS to Spatial Regression

**Two-report sequence | ~50 pages combined | February-April 2025**

**Role:** Co-author (shared authorship across both reports)
**Team:** Jason Fan, Neil Jean-Baptiste II, Jasmin Sung
**Course:** CPLN 671 / MUSA 500 Spatial Statistics (University of Pennsylvania, Prof. Eugene Brusilovsky)
**Audience fit:** Housing & real estate, data science, public policy

## The arc

This piece is a methodological progression on a single housing question. Both reports predict median house values across Philadelphia's census block groups using the same four neighborhood-characteristic predictors (share with bachelor's degrees, vacancy rate, single-family share, poverty count, median household income). Report 1 establishes the baseline using Ordinary Least Squares and interprets it through the classical assumptions. Report 2 returns to the same data, diagnoses the spatial autocorrelation that OLS ignores, and rebuilds the model using spatial lag, spatial error, and geographically weighted regression.

## Report 1: OLS baseline (February 2025)

Starts from a 2000 Census block group dataset of 1,816 observations. Defines a cleaning protocol (drops population under 40, zero housing units, median house value under 10,000, and a North Philadelphia outlier), yielding 1,720 final block groups. Runs exploratory data analysis, reports summary statistics, checks the four OLS assumptions with standard diagnostics (residual plots, normality, heteroscedasticity), and reports the fitted regression. Interprets the coefficients in planning terms: vacancy is negatively associated with value, single-family share and poverty shift in expected directions, and median household income carries the strongest positive effect.

## Report 2: Spatial lag, spatial error, and GWR (April 2025)

Takes the OLS fit forward and tests for spatial autocorrelation explicitly. Computes Moran's I for the residuals against a k-nearest-neighbors weight matrix and tests significance with a 999-permutation reference distribution. Finding spatial dependence, the report fits two global spatial models (spatial lag and spatial error) and then a geographically weighted regression that allows the coefficients themselves to vary across Philadelphia. The comparison section contrasts model fit, the behavior of the spatial coefficients, and the neighborhood-level variation the GWR surface reveals.

## Why the two reports belong together

The pair is the cleanest demonstration of the spatial-statistics core curriculum: why "global" OLS fails on geographic data, what Moran's I is actually testing, and how spatial lag, spatial error, and GWR extend the toolkit. Keeping them side by side in the portfolio lets a reviewer see both the baseline and the progression.

## Why it matters for a portfolio

This piece shows quantitative and methodological rigor applied to the core housing-market question that housing and real estate teams care about. The progression narrative ("we did this, found this limitation, responded with this") is itself a portfolio-worthy analytic pattern.

## Deliverables

[1_OLS_Regression_Philly_Housing.pdf](./1_OLS_Regression_Philly_Housing.pdf) (Report 1, 29 pages)
[2_Spatial_Regression_GWR_Philly_Housing.pdf](./2_Spatial_Regression_GWR_Philly_Housing.pdf) (Report 2)

## Skills demonstrated

OLS regression with full assumption-checking, Moran's I and Local Moran's I, k-nearest-neighbors spatial weights, spatial lag and spatial error modeling, geographically weighted regression, hypothesis testing via permutations, collaborative technical writing, census block group spatial joins.
