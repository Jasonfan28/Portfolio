# Jason Fan Portfolio Assets

Master of City Planning, University of Pennsylvania
Updated: July 2026

Source for [the portfolio site](https://jasonfan28.github.io/portfolio/). Ten selected works plus the site itself, each with a case-study write-up and its deliverable.

The published URL is lowercase. The repository was renamed and GitHub Pages
paths are case-sensitive, so the old capitalised `/Portfolio/` address returns
a 404 and must not be used in applications.

Pages:

- `index.html` — the illustrated work index, and the URL to share
- `explore.html` — the 3D scroll portfolio, listed on the index as entry 11
- `11_PhillyStat360_Vacant_Property/index.html` — a long-form case study
- `work.html` — a redirect stub left behind when the index moved to root

The index is the front door because it puts every project in front of a reader
immediately, which matters more for hiring than the 3D scene does. The 3D scene
is credited on it as its own piece of work rather than treated as decoration.

## The ten pieces

Numbered strongest first. The site groups them into the four sections below and
the numbering runs across all of them, so a section holds a non-contiguous set.

### Models and pipelines

| # | Project | Format | Folder / Link |
|---|---|---|---|
| 1 | PhillyStat360: Vacant Property Indicator | Case study + live dashboard | [11_PhillyStat360_Vacant_Property](./11_PhillyStat360_Vacant_Property/) · [Live page](https://jasonfan28.github.io/Philly_vacant_property_indicator/Vacancy%20Risk%20Landing%20Page.html) |
| 3 | Philadelphia CAMA Reviewer | Live site | [13_Philly_CAMA_Reviewer](./13_Philly_CAMA_Reviewer/) · [Live page](https://weitzman-musa-geocloud.github.io/s26-team3-cama/reviewer/) |
| 4 | Missoula Infill Suitability | Poster + memo + interactive web map | [15_Missoula_Infill](./15_Missoula_Infill/) |
| 7 | Transportation Noise and Health Outcomes in the Northeast | Live site + notebook | [05_Transportation_Noise_Health](./05_Transportation_Noise_Health/) · [Live page](https://jasonfan28.github.io/MUSA550-Final-Noise_on_health/) |

### Plans and policy

| # | Project | Format | Folder / Link |
|---|---|---|---|
| 2 | Understanding Pennsylvania's Creative Workforce | 88-page published research study | [08_PA_Creative_Workforce](./08_PA_Creative_Workforce/) |
| 5 | Reimagining Market East | Vision plan book | [07_Market_East_Studio2](./07_Market_East_Studio2/) |
| 6 | Bristol 2050 Plan | Studio plan book | [02_Bristol_Climate_Resilience](./02_Bristol_Climate_Resilience/) |
| 8 | Beyond Borrowing: Land Value Capture for HCMC | 8-page policy brief | [01_HCMC_Land_Value_Capture](./01_HCMC_Land_Value_Capture/) |

### Cartography

| # | Project | Format | Folder |
|---|---|---|---|
| 9 | 35 Years of Arctic Sea Ice Melt | Map poster | [12_Arctic_Sea_Ice_Map](./12_Arctic_Sea_Ice_Map/) |
| 10 | Carson River Relative Elevation Model | Map poster | [14_Carson_River_REM](./14_Carson_River_REM/) |

### Built for this

| # | Project | Format | File |
|---|---|---|---|
| 11 | The portfolio you walk through | three.js / WebGL | [explore.html](./explore.html) |

Folders `03_Tampa_Urban_Growth_Model`, `04_MTA_Rush_Hour`, `06_Penntrification_Spruce_Hill`, `09_Philly_Housing_Spatial_Regression`, and `10_Alcohol_Crashes_Logistic_Regression` are retained as archive and are not featured on the site.

## One-paragraph blurbs

**1. PhillyStat360: Vacant Property Indicator.** A parcel-level vacancy risk model across Philadelphia's 520,000 residential parcels, built to find vacant properties that enforcement records miss. The final model blends calibrated logistic regression and random forest into a 50/50 ensemble validated with ZIP- and tract-grouped spatial cross-validation, using 34 features from six city data systems. It reaches an AUC of 0.940 with 84.0 percent sensitivity and 89.8 percent specificity, and pairs the scores with an equity audit across poverty quintiles before deployment.

**2. Understanding Pennsylvania's Creative Workforce.** An 88-page research study by a Weitzman School of Design team, published October 2025 by Pennsylvania Creative Industries, powered by the Pennsylvania Council on the Arts. The report combines Census occupational analysis, Data Axle industrial analysis, a statewide survey, and seven subject interviews to size the roughly 245,000-person creative workforce.

**3. Philadelphia CAMA Reviewer.** A cloud-native computer-assisted mass appraisal system built on Google Cloud Platform. Cloud Functions orchestrate a pipeline that pulls OPA assessments, PWD stormwater parcels, transfers, and permits from OpenDataPhilly into BigQuery, trains models predicting parcel-level assessed values, and publishes vector tiles and charts to a public review dashboard.

**4. Missoula Infill Suitability.** A three-part hiring exercise for the City of Missoula. A suitability model scores 18,864 taxlots for infill housing after screening floodway, steep slopes, and 1,255 historic structures, pairing each parcel with an action. A poster presents the bivariate results, a memo plans the countywide scaling pipeline, and an interactive MapLibre web map lets anyone filter and query the scored parcels.

**5. Reimagining Market East.** A Studio 2 vision plan for Philadelphia's Market East corridor (Census Tract 5), organized around four guiding values and nine strategies. My contribution centered on existing-conditions data work, including Advan foot-traffic analysis via Dewey Data and the demographic baseline.

**6. Bristol 2050 Plan.** A long-range plan for Bristol Borough, Pennsylvania, produced by a six-person team in the first-year studio. Building on the borough's 2006 Comprehensive Plan, it lays out four pillars, five goals, and ten strategies with twelve sub-strategies. My contributions concentrated on environmental analysis and cartography.

**7. Transportation Noise and Health Outcomes in the Northeast.** A Python geospatial study linking DOT transportation noise rasters to CDC PLACES self-reported health outcomes across Northeast counties, with Census socioeconomic controls. Published as a live project site.

**8. Land Value Capture for HCMC.** An 8-page policy brief prepared for the Ho Chi Minh City People's Committee recommending Resilience-Linked Betterment Levies to finance climate-adaptation infrastructure, drawing on Freetown's points-based property tax reform.

**9. 35 Years of Arctic Sea Ice Melt.** A single-sheet polar-projection map poster showing July Arctic sea-ice observations at five-year intervals from 1980 to 2015.

**10. Carson River Relative Elevation Model.** A single-sheet relative elevation model of the Carson River in Nevada, built in QGIS following Dan Coe's IDW-method tutorial.

**11. The portfolio you walk through.** A scroll-driven three.js city where each section is pinned to the face of a building and the camera travels down the street as you read. The scene is baked into merged per-material buffers with vertex colours, which takes it from roughly 2,600 draw calls a frame to about ten.
