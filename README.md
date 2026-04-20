# Jason Fan — Portfolio Assets

Master of City Planning, University of Pennsylvania
Compiled: April 2026 

This folder holds ten curated portfolio pieces, each developed into a polished asset with its own case-study write-up, source deliverable, and supporting files. The ten pieces span three audiences: Senior Housing and Real Estate (SH), Urban Data Science and Analytics (DS), and Public Policy and Planning (PP).

## The ten pieces

| # | Project | Format | Audience | Folder |
|---|---|---|---|---|
| 1 | Beyond Borrowing: Land Value Capture for HCMC | 8-page policy brief | PP, SH | [01_HCMC_Land_Value_Capture](./01_HCMC_Land_Value_Capture/) |
| 2 | Bristol Borough Climate Resilience Plan | 25-page studio plan book | PP, SH | [02_Bristol_Climate_Resilience](./02_Bristol_Climate_Resilience/) |
| 3 | Urban Growth Forecast: Tampa Metro 2021-2031 | Logistic regression + scenario write-up | DS, PP, SH | [03_Tampa_Urban_Growth_Model](./03_Tampa_Urban_Growth_Model/) |
| 4 | MTA Subway Passenger Flow: Weekday Rush Hours | Python pipeline + dashboard | DS | [04_MTA_Rush_Hour](./04_MTA_Rush_Hour/) |
| 5 | Transportation Noise and Self-Reported Health | Jupyter notebook + HTML | DS, PP | [05_Transportation_Noise_Health](./05_Transportation_Noise_Health/) |
| 6 | The Penntrification of Spruce Hill | 29-page neighborhood portrait | PP, SH | [06_Penntrification_Spruce_Hill](./06_Penntrification_Spruce_Hill/) |
| 7 | A Vision for Market East (Studio 2) | 119-slide vision plan + 11-page overview | PP, SH | [07_Market_East_Studio2](./07_Market_East_Studio2/) |
| 8 | Understanding Pennsylvania's Creative Workforce (PCA Report) | 88-page published research study | PP, DS, SH | [08_PA_Creative_Workforce](./08_PA_Creative_Workforce/) |
| 9 | Philadelphia Housing: OLS to Spatial Regression | Two-report methodological sequence, ~50 pp | SH, DS | [09_Philly_Housing_Spatial_Regression](./09_Philly_Housing_Spatial_Regression/) |
| 10 | Logistic Regression on Alcohol-Induced Car Crashes | 29-page team report | DS, PP | [10_Alcohol_Crashes_Logistic_Regression](./10_Alcohol_Crashes_Logistic_Regression/) |

## One-paragraph blurbs

**1. Land Value Capture for HCMC.** An 8-page policy brief prepared for the Ho Chi Minh City People's Committee making the case for Resilience-Linked Betterment Levies as a way to finance climate-adaptation infrastructure. The brief frames HCMC's USD 50 billion decade-long investment gap against the limits of ODA and land-use fees, and draws on Freetown's property tax reform to show how capacity-constrained cities can implement land value capture at speed.

**2. Bristol Climate Resilience Plan.** A 25-page climate resilience plan for Bristol Borough, Pennsylvania, produced in the first-year Master of City Planning studio. The book diagnoses flood, heat, and ecological risk across the Delaware River South watershed and translates findings into a focal plan with three strategies covering watershed repair, marsh protection, and heat mitigation. My contributions concentrated on environmental analysis, watershed mapping, and the focal-plan cartography.

**3. Tampa Urban Growth Model.** A logistic-regression urban growth forecast for the Tampa metropolitan statistical area through 2031, co-authored with Grace Nelson. The model uses 2011 land cover, census population, and existing highway proximity to predict development probability under a proposed St. Petersburg to Ruskin bridge scenario, showing where new infrastructure would accelerate suburban conversion.

**4. MTA Subway Passenger Flow.** A Python data pipeline that queries the MTA origin-destination API, filters weekday morning and evening rush hours, and visualizes passenger flow across the subway system. The script batches 50,000-row requests against the NY Open Data SODA API and produces a five-panel rush-hour dashboard ready for stakeholder reporting.

**5. Transportation Noise and Health.** A Python spatial-regression study linking DOT transportation noise rasters (road, rail, aviation) to self-reported health outcomes from CDC PLACES data across the US Northeast. The notebook uses zonal statistics on county-level decibel exposure and multiple logistic regression with controls for income, race, age, education, and health-risk behaviors, then surfaces a notable "diminishing returns" interaction between education and noise exposure on depression.

**6. The Penntrification of Spruce Hill.** A 29-page neighborhood portrait of Spruce Hill, West Philadelphia, produced with Maggie Bai, Tyler Maynard, and Chuwen Zhong. The report combines ACS and LEHD data, historical research, and local fieldwork to document how university expansion is reshaping housing, demographics, and the small-business base. I led the employment trends analysis and contributed to the housing market section.

**7. A Vision for Market East (Studio 2).** A 119-slide Studio 2 vision plan for Philadelphia's Market East corridor (Census Tract 5) structured around existing conditions, guiding values (human-centered, diverse, central, connected), and ten site-specific strategies. My contribution centered on existing-conditions data work (Dewey visitation, OSM building footprints, Census demographics) that underpinned the diagnostic and corridor-connection chapters. An 11-page overview accompanies the full 752 MB Canva deck.

**8. Understanding Pennsylvania's Creative Workforce.** An 88-page published research study prepared by a Weitzman School of Design team (Michael Fichman, Jamaal Green, Dyan Castro, Xiaxin Tang, Jason Fan) for Pennsylvania Creative Industries, powered by the Pennsylvania Council on the Arts. The report combines US Census occupational analysis, proprietary Data Axle industrial analysis, a statewide survey, and seven subject interviews to size the ~245,000-person creative workforce, describe its geography and precarity, and identify focus areas for state policy intervention.

**9. Philadelphia Housing: OLS to Spatial Regression.** A two-report methodological sequence (co-authored with Neil Jean-Baptiste II and Jasmin Sung) predicting median house values across Philadelphia census block groups. Report 1 establishes an OLS baseline with the classical diagnostics. Report 2 tests for spatial autocorrelation via Moran's I with a 999-permutation reference distribution and upgrades to spatial lag, spatial error, and geographically weighted regression, demonstrating the core spatial-statistics curriculum end-to-end.

**10. Logistic Regression on Alcohol-Induced Car Crashes.** A 29-page team report (co-authored with Neil Jean-Baptiste II and Jasmin Sung) fitting a logistic regression on Philadelphia crash records to separate alcohol-involved crashes from the rest using behavioral, age, and census-tract predictors. The paper works through odds-ratio interpretation, AIC and pseudo-R-squared model selection, and ROC diagnostics, and ties the result to transportation-safety policy.

## Folder structure

```
Portfolio_Assets/
├── README.md                                (this file)
├── Sources/                                 (originals, preserved unchanged)
├── 01_HCMC_Land_Value_Capture/
│   ├── HCMC_Land_Value_Capture_Brief.pdf
│   └── Case_Study.md
├── 02_Bristol_Climate_Resilience/
│   ├── Bristol_Climate_Resilience_Plan.pdf
│   └── Case_Study.md
├── 03_Tampa_Urban_Growth_Model/
│   ├── Tampa_Urban_Growth_Model_Writeup.pdf
│   └── Case_Study.md
├── 04_MTA_Rush_Hour/
│   ├── MTA_rush_hour_analysis.py
│   ├── mta_rush_hour.png
│   ├── README.md
│   └── Case_Study.md
├── 05_Transportation_Noise_Health/
│   ├── noise_health_analysis.ipynb
│   ├── noise_health_analysis.html
│   └── Case_Study.md
├── 06_Penntrification_Spruce_Hill/
│   ├── Penntrification_Spruce_Hill_Report.pdf
│   └── Case_Study.md
├── 07_Market_East_Studio2/
│   ├── Market_East_Vision_Plan_overview.pdf   (11-page compressed overview)
│   ├── thumbnails/                            (per-page JPG previews)
│   └── Case_Study.md
├── 08_PA_Creative_Workforce/
│   ├── PA_Creative_Workforce_Research_Study.pdf
│   └── Case_Study.md
├── 09_Philly_Housing_Spatial_Regression/
│   ├── 1_OLS_Regression_Philly_Housing.pdf
│   ├── 2_Spatial_Regression_GWR_Philly_Housing.pdf
│   └── Case_Study.md
└── 10_Alcohol_Crashes_Logistic_Regression/
    ├── Philly_Alcohol_Crashes_Logistic_Regression.pdf
    └── Case_Study.md
```

## How these pieces work together

For a **housing + real estate application** (SH), lead with piece 9 (spatial regression on Philadelphia median house values), piece 1 (international finance credibility), piece 3 (regression + scenario analysis), and piece 6 (neighborhood-scale housing analysis).

For a **data science / analytics application** (DS), lead with piece 5 (end-to-end Python geospatial), piece 8 (published multi-method research), piece 9 (OLS to spatial regression progression), and piece 10 (logistic regression on crash data).

For a **policy / planning role** (PP), lead with piece 8 (published client-commissioned research), piece 2 (studio plan book), piece 7 (Studio 2 vision plan), and piece 1 (policy brief).

For a **senior-research-assistant or RA application**, piece 8 (the PCA Report, as a published Weitzman deliverable) is the strongest single credential in the set.

## Sources folder

The `Sources/` folder contains the original files as copied from the graduate-school tree, preserved as a provenance reference. The files in each numbered folder are clean copies renamed for portfolio use.

## Provenance and flags

Sources were selected from the Portfolio Inventory compiled on April 20, 2026 (`../Portfolio_Inventory.md`), which rated 22 Strong, 18 Moderate, and 26 Weak candidate clusters across the graduate-school archive. The original Portfolio Inventory surfaced the first six pieces; the subsequent Market East, PCA Report, and Spatial Stats sweep added pieces 7-10. The Market East final PDF is 752 MB (Canva export at full image fidelity); piece 7 ships an 11-page compressed overview and leaves the full-fidelity file in the graduate-school root for reviewers who want it.
