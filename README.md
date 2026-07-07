# Jason Fan Portfolio Assets

Master of City Planning, University of Pennsylvania
Updated: July 2026

This repository holds the twelve portfolio pieces featured on the site, each with a case-study write-up and its deliverable. Three projects link out to live pages instead of hosting a file here.

## The twelve pieces

| # | Project | Format | Folder / Link |
|---|---|---|---|
| 1 | PhillyStat360: Vacant Property Indicator | Live site | [11_PhillyStat360_Vacant_Property](./11_PhillyStat360_Vacant_Property/) · [Live page](https://jasonfan28.github.io/Philly_vacant_property_indicator/Vacancy%20Risk%20Landing%20Page.html) |
| 2 | Understanding Pennsylvania's Creative Workforce | 88-page published research study | [08_PA_Creative_Workforce](./08_PA_Creative_Workforce/) |
| 3 | Philadelphia CAMA Reviewer | Live site | [13_Philly_CAMA_Reviewer](./13_Philly_CAMA_Reviewer/) · [Live page](https://weitzman-musa-geocloud.github.io/s26-team3-cama/reviewer/) |
| 4 | Reimagining Market East | Vision plan book | [07_Market_East_Studio2](./07_Market_East_Studio2/) |
| 5 | Bristol 2050 Plan | Studio plan book | [02_Bristol_Climate_Resilience](./02_Bristol_Climate_Resilience/) |
| 6 | Transportation Noise and its Impact on Health Outcomes in the Northeast | Live site + notebook | [05_Transportation_Noise_Health](./05_Transportation_Noise_Health/) · [Live page](https://jasonfan28.github.io/MUSA550-Final-Noise_on_health/) |
| 7 | Beyond Borrowing: Land Value Capture for HCMC | 8-page policy brief | [01_HCMC_Land_Value_Capture](./01_HCMC_Land_Value_Capture/) |
| 8 | Philadelphia Housing: OLS to Spatial Regression | Two-report methodological sequence | [09_Philly_Housing_Spatial_Regression](./09_Philly_Housing_Spatial_Regression/) |
| 9 | The Penntrification of Spruce Hill | Neighborhood portrait | [06_Penntrification_Spruce_Hill](./06_Penntrification_Spruce_Hill/) |
| 10 | Logistic Regression on Alcohol-Induced Car Crashes | Team report | [10_Alcohol_Crashes_Logistic_Regression](./10_Alcohol_Crashes_Logistic_Regression/) |
| 11 | 35 Years of Arctic Sea Ice Melt | Map poster | [12_Arctic_Sea_Ice_Map](./12_Arctic_Sea_Ice_Map/) |
| 12 | Carson River Relative Elevation Model | Map poster | [14_Carson_River_REM](./14_Carson_River_REM/) |

Folders `03_Tampa_Urban_Growth_Model` and `04_MTA_Rush_Hour` are retained as archive and are not featured on the site.

## One-paragraph blurbs

**1. PhillyStat360: Vacant Property Indicator.** A parcel-level vacancy risk model across Philadelphia's 520,000+ residential parcels, built to find vacant properties that enforcement records miss. The final model blends calibrated logistic regression and random forest into a 50/50 ensemble validated with ZIP- and tract-grouped spatial cross-validation, using 34 features from six city data systems. It reaches an AUC of 0.940 with 84.0 percent sensitivity and 89.8 percent specificity, and pairs the scores with an equity audit across poverty quintiles before deployment. The output is a prioritized list that helps the city target structural inspections.

**2. Understanding Pennsylvania's Creative Workforce.** An 88-page research study by a Weitzman School of Design team (Michael Fichman, Jamaal Green, Dyan Castro, Xiaxin Tang, Jason Fan), published October 2025 by Pennsylvania Creative Industries, powered by the Pennsylvania Council on the Arts. The report combines Census occupational analysis, Data Axle industrial analysis, a statewide survey, and seven subject interviews to size the roughly 245,000-person creative workforce, describe its geography and precarity, and identify focus areas for state policy.

**3. Philadelphia CAMA Reviewer.** A cloud-native computer-assisted mass appraisal system for Philadelphia, built as a team course project on Google Cloud Platform. Cloud Functions orchestrate a pipeline that pulls OPA assessments, PWD stormwater parcels, transfers, and permits from OpenDataPhilly into BigQuery, trains models predicting parcel-level assessed values, and publishes vector tiles and charts. The public reviewer dashboard maps assessed values across the tax base and lets users look up any property's current, prior, and model-predicted values.

**4. Reimagining Market East.** A Studio 2 vision plan for Philadelphia's Market East corridor (Census Tract 5), organized around existing conditions, alternatives, four guiding values (Human-Centered, Diverse, Central, Connected), and nine strategies. My contribution centered on existing-conditions data work, including Advan foot-traffic analysis via Dewey Data and the demographic baseline. The full book is included, compressed for web.

**5. Bristol 2050 Plan.** A long-range plan for Bristol Borough, Pennsylvania, produced by a six-person team in the first-year studio. Building on the borough's 2006 Comprehensive Plan, the book diagnoses existing conditions across demographics, land use, housing, transportation, and environment, then lays out four pillars (Resilient, Accessible, Vibrant, Equitable), five goals, and ten strategies with twelve sub-strategies. My contributions concentrated on environmental analysis and cartography.

**6. Transportation Noise and its Impact on Health Outcomes in the Northeast.** A Python geospatial study linking DOT transportation noise rasters to CDC PLACES self-reported health outcomes across Northeast counties, with Census socioeconomic controls. Zonal statistics reduce road, rail, and aviation noise to county-level exposure, and regression and cluster analysis surface three patterns in how depression and cholesterol prevalence track noise, income, and education. Published as a live project site.

**7. Land Value Capture for HCMC.** An 8-page policy brief prepared for the Ho Chi Minh City People's Committee recommending Resilience-Linked Betterment Levies to finance climate-adaptation infrastructure. The brief frames HCMC's USD 50 billion decade-long investment gap against the limits of ODA and one-off land-use fees, and draws on Freetown's points-based property tax reform to show how capacity-constrained cities can implement land value capture quickly.

**8. Philadelphia Housing: OLS to Spatial Regression.** A two-report sequence (with Neil Jean-Baptiste II and Jasmin Sung) predicting median house values across Philadelphia census block groups. Report 1 establishes an OLS baseline with classical diagnostics on 1,720 cleaned block groups. Report 2 tests the residuals with Moran's I against a 999-permutation reference distribution and rebuilds the model with spatial lag, spatial error, and geographically weighted regression.

**9. The Penntrification of Spruce Hill.** A neighborhood portrait of Spruce Hill, West Philadelphia, produced with Maggie Bai, Tyler Maynard, and Chuwen Zhong. The report combines ACS data, historical research, and fieldwork to document how university expansion is reshaping housing, demographics, and the local job base. I led the employment and industries chapter, which tracks a 13.5 percent employment gain from 2012 to 2022 driven by warehousing growth.

**10. Logistic Regression on Alcohol-Induced Car Crashes.** A team report (with Neil Jean-Baptiste II and Jasmin Sung) fitting a logistic regression on 43,364 Philadelphia crash records to separate the 5.73 percent of crashes involving alcohol from the rest, using behavioral, age, and census-tract predictors. The paper works through odds-ratio interpretation, AIC-based model selection, and ROC diagnostics, and ties the result to transportation-safety policy.

**11. 35 Years of Arctic Sea Ice Melt.** A single-sheet polar-projection map poster showing July Arctic sea-ice observations at five-year intervals from 1980 to 2015. Hatched fills step through the historical extents and the 2015 extent reads in solid white, making the 35-year retreat legible at a glance.

**12. Carson River Relative Elevation Model.** A single-sheet relative elevation model of the Carson River in Nevada, built in QGIS following Dan Coe's IDW-method REM tutorial. A water-surface raster interpolated from points sampled along the channel is subtracted from a lidar DEM, rendering the floodplain in whites and light blues against hillshaded slate and making meander scars and traces of former channels visible across the valley floor.
