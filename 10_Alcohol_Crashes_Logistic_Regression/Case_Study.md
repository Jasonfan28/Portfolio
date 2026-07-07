# Logistic Regression on Alcohol-Induced Car Crashes in Philadelphia

**Team report | April 2025**

**Role:** Co-author
**Team:** Jason Fan, Neil Jean-Baptiste II, Jasmin Sung
**Course:** CPLN 671 / MUSA 500 Statistical and Data Mining Methods for Urban Data Analysis (Prof. Eugene Brusilovsky)
**Audience fit:** Data science, public policy

## The question

The US Department of Transportation reports that someone dies in a motor-vehicle crash involving an alcohol-impaired driver every 51 minutes, with externalities valued at USD 59 billion in economic impact. In Philadelphia's crash dataset of 43,364 records, 5.73 percent of crashes (2,485) involved alcohol, roughly one in every 17. Given a reported crash, what observable characteristics flag alcohol involvement?

## The model

The report fits a logistic regression on Philadelphia crash records with a binary alcohol-involvement outcome against three predictor groups.

Crash-related predictors: fatality (FATAL_OR_M), rollover (OVERTURNED), cell-phone use (CELL_PHONE), speeding (SPEEDING), and aggressive driving (AGGRESSIVE).

Age-related predictors: driver aged 16 to 17 (DRIVER1617) and driver aged 65 or older (DRIVER65PLUS).

Census-tract predictors: share with at least a bachelor's degree (PCTBACHMOR) and median household income (MEDHHINC).

The paper grounds each feature in a behavioral or socioeconomic hypothesis, works through the logit transformation and odds-ratio interpretation, and assesses fit through AIC, cross-tabulations with chi-square tests, sensitivity, specificity, and ROC-curve analysis.

## Why it matters for a portfolio

This is a clean end-to-end logistic regression case. It pairs feature choices that have theoretical justification with correct diagnostics and a policy-relevant outcome that a transportation-safety team could act on when directing enforcement and education resources.

## Deliverable

[Philly_Alcohol_Crashes_Logistic_Regression.pdf](./Philly_Alcohol_Crashes_Logistic_Regression.pdf)

## Skills demonstrated

Logistic regression, odds-ratio interpretation, AIC-based model selection, sensitivity and specificity analysis, ROC diagnostics, crash-data cleaning, collaborative technical writing.
