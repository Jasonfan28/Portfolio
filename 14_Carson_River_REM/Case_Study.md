# Carson River Relative Elevation Model

**Map poster | Cartography | November 2025**

**Role:** Sole author, following Dan Coe's relative elevation model tutorial
**Audience fit:** Cartography, environmental communication

## The map

A single-sheet relative elevation model (REM) of the Carson River in Nevada. An REM detrends a digital elevation model to the river's water surface, so every pixel shows height above the river rather than height above sea level. The floodplain reads in whites and light blues, the active channel in dark blue, and the surrounding terrain in hillshaded slate. Meander scars, oxbows, and traces of former channel paths become visible across the valley floor.

## Method and attribution

The workflow follows cartographer Dan Coe's tutorial [Creating REMs in QGIS: The IDW Method](https://dancoecarto.com/creating-rems-in-qgis-the-idw-method), as credited on the sheet. Starting from a bare-earth lidar DEM and a digitized river centerline, the Qchainage plugin generates evenly spaced points along the channel, the Point Sampling tool extracts DEM elevations at those points, and IDW interpolation builds a raster representing the river's water surface. Subtracting that surface from the DEM in the raster calculator yields the REM, rendered with a color ramp and hillshade in QGIS. The final layout was produced in Adobe InDesign.

## Deliverable

[Carson_River_REM.pdf](./Carson_River_REM.pdf)

## Skills demonstrated

Lidar DEM processing in QGIS, IDW interpolation, raster algebra, terrain detrending, hillshade and color-ramp design, fluvial landform visualization, map layout.
