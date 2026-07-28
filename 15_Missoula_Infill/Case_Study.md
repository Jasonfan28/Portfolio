# Missoula Infill Suitability: Where to Build, Where to Preserve

**Hiring exercise | Taxlot analysis, memo, and interactive web map | July 2026**

**Role:** Sole author
**Context:** Three-part hiring exercise for the City of Missoula, Montana
**Audience fit:** Data science, public policy, housing

## The question

Where does infill housing fit in Missoula, and where would redevelopment do more harm than good? The analysis scores every taxlot in the city and pairs each with an action: Preserve, Build + Protect, or Build First.

## Part 1: The analysis and poster

The model scores 18,864 parcels after screening out floodway, steep slopes, and 1,255 contributing or listed historic structures. Suitability combines under-utilization, capacity, Growth Policy density, and network walk access, drawing on Missoula's 2024 taxlots, city historic preservation data, Census ACS, and OpenStreetMap.

The headline finding is that Missoula's best infill land is already doing affordability work, so the move is targeted growth and preservation rather than a blanket upzone. About 1,900 parcels sit in the top suitability decile, 62 percent of flagged stock is historic, mobile-home, or naturally affordable housing marked for preservation, and 717 parcels are net build-ready (471 Build First and 246 Build + Protect, the latter paired with tenant protections for high renter cost burden). A single-sheet poster presents the results as a bivariate map, with suitability in light-to-dark and the recommended action in color.

## Part 2: The scaling memo

A one-page project management memo lays out how to extend the model countywide, where zoning, future land use, and servicing live in systems that do not align. The plan is a documented schema crosswalk feeding a scripted, version-controlled pipeline: inventory every source layer, define one target schema, automate the harmonization so monthly refreshes re-run without rework, recalibrate factors that do not travel, and publish the scored layer as a dashboard with per-jurisdiction filters.

## Part 3: The interactive map

The [Missoula Housing Land Explorer](./web_map/index.html) is a MapLibre GL web map of all 18,864 scored parcels plus 8,121 context parcels. Users filter by action and suitability tier with a live parcel count, click any parcel for its action, suitability percentile, land value per potential home, and preserve reason, and can type questions into an "Ask the map" panel. The natural-language layer runs entirely client-side, reading the question, setting the filters, and answering with real counts and medians computed from the filtered parcels, so it embeds anywhere with no API key.

## Deliverables

[Interactive web map](./web_map/index.html) (live on this site)
[Missoula_Infill_Suitability.pdf](./Missoula_Infill_Suitability.pdf) (poster and memo, compressed for web)

## Skills demonstrated

Parcel-level suitability modeling, multi-criteria scoring, GIS screening and network analysis, bivariate cartography, MapLibre GL web mapping, client-side natural-language interfaces, data pipeline and schema-crosswalk planning, policy framing for housing decisions.
