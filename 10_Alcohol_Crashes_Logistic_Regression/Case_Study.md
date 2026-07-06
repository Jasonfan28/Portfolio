# Logistic Regression on Alcohol-Induced Car Crashes in Philadelphia

**Team report | 29 pages | April 2025**

**Role:** Co-author
**Team:** Jason Fan, Neil Jean-Baptiste II, Jasmin Sung
**Course:** CPLN 671 / MUSA 500 Statistical and Data Mining Methods for Urban Data Analysis (Prof. Eugene Brusilovsky)
**Audience fit:** Data science, public policy

## The question

The US Department of Transportation reports that a person dies in an alcohol-impaired motor-vehicle crash every 51 minutes, and the direct economic impact is valued at roughly USD 59 billion annually. For a city-level transportation-safety team, the operational question is: given a reported crash, what combination of observable characteristics flags alcohol involvement? A model that separates alcohol-related crashes from the rest of the crash population can direct enforcement, education, and infrastructure investments to the settings where the marginal return is highest.

## The model

The report fits a logistic regression on Philadelphia crash records with a binary outcome (alcohol-involved or not) against three predictor groups:

- **Crash-related:** fatality (FATAL_OR_M), rollover (OVERTURNED), cell-phone use (CELL_PHONE), speeding (SPEEDING), aggressive driving (AGGRESSIVE)
- **Age-related:** driver aged 16-17 (DRIVER1617), driver aged 65 or older (DRIVER65PLUS)
- **Census-tract-level:** share with at least a bachelor's degree (PCTBACHMOR), median household income (MEDHHINC)

The paper grounds each feature choice in a behavioral or socioeconomic hypothesis, discusses the logit transformation and the interpretation of odds ratios, and assesses fit through AIC, pseudo-R-squared, and classification metrics (sensitivity, specificity, and ROC-curve analysis).

## What it finds

The fitted model separates alcohol-induced crashes from the rest with substantively interpretable coefficients. Rollover and speeding carry the largest positive odds-ratio shifts, consistent with the loss of vehicle control associated with impairment. The two age bands (teen drivers and older drivers) move in opposite directions, with the teen band showing the elevated alcohol-crash probability described in the traffic-safety literature. Cell-phone use adds predictive value as a proxy for compounded risk-taking, and the census-tract predictors capture the socioeconomic geography of the crash set.

## Why it matters for a portfolio

This is a clean, end-to-end logistic regression case: feature engineering with theoretical justification, correct use of logit diagnostics, ROC and classification-threshold interpretation, and a policy-relevant dependent variable (alcohol involvement in crashes) that an urban-analytics or public-safety team would actually deploy.

## Deliverable

[Philly_Alcohol_Crashes_Logistic_Regression.pdf](./Philly_Alcohol_Crashes_Logistic_Regression.pdf) (29 pages)

## Skills demonstrated

Logistic regression, odds-ratio interpretation, AIC and pseudo-R-squared model selection, sensitivity/specificity/ROC diagnostics, binary-outcome feature engineering, crash-data cleaning, collaborative technical writing.
