# PhillyStat360: Vacant Property Indicator

**Practicum | Machine learning | May 2026**

**Role:** Practicum team member
**Client framing:** City of Philadelphia (PhillyStat360)
**Live site:** [Vacancy Risk Landing Page](https://jasonfan28.github.io/Philly_vacant_property_indicator/Vacancy%20Risk%20Landing%20Page.html)
**Audience fit:** Data science, public policy, housing

## The problem

Philadelphia's official vacancy count relies on enforcement history rather than ground truth. Properties with absentee owners, paid utilities, or inactive neighbors never enter the record. The city needs a way to find vacant residential properties that current inspection records miss.

## The model

The project scores Philadelphia's 520,000+ residential parcels for vacancy risk. Four base learners were trained and evaluated: logistic regression, random forest, XGBoost, and LightGBM. The final model blends calibrated logistic regression and random forest into a 50/50 ensemble, validated with ZIP- and tract-grouped spatial cross-validation so performance holds across neighborhoods rather than leaking from them.

The feature set draws 34 predictors from six city data systems: Licenses and Inspections violations, real estate transfers, OPA property records, spatial lag measures, clean and seal actions, and business licenses, with a five-year lookback on utility, permit, and complaint data.

## Performance

The model reaches an AUC of 0.940, with 84.0 percent sensitivity and 89.8 percent specificity. Scores are calibrated probabilities, so a parcel scored 0.8 behaves like an 80 percent vacancy risk rather than an arbitrary rank.

## The equity audit

Before deployment, flag rates were audited across poverty quintiles to check whether the model concentrates enforcement attention on low-income neighborhoods beyond what ground truth supports.

## What it is for

The output is a prioritized parcel list that helps the city target structural inspections, and gives housing organizations, courts, and planners a calibrated starting point instead of a reactive complaint queue.

## Deliverable

[Live landing page](https://jasonfan28.github.io/Philly_vacant_property_indicator/Vacancy%20Risk%20Landing%20Page.html) with model documentation and results.

## Skills demonstrated

Ensemble machine learning, probability calibration, spatial cross-validation, multi-source administrative data integration, model equity auditing, public-sector deployment framing.
