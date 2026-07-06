# MTA Rush Hour Flow Analysis

Python pipeline that fetches MTA subway origin-destination data from the NY Open Data SODA API, filters weekday rush hours, and produces a five-panel dashboard.

## Files

- `MTA_rush_hour_analysis.py` — main script (pipeline + visualization)
- `mta_rush_hour.png` — dashboard output, 18 x 14 inch at 150 dpi
- `Case_Study.md` — one-page project write-up

## Quick start

```bash
pip install requests pandas numpy matplotlib
python MTA_rush_hour_analysis.py
```

The script writes the output PNG to an absolute Windows path at the bottom of `main()`. Edit the `plt.savefig(...)` line to change the destination.

## Configuration

All tunable parameters are at the top of the file:

| Constant | Purpose |
|---|---|
| `API_URL` | NY Open Data SODA endpoint for MTA OD dataset `jsu2-fbtj` |
| `WEEKDAYS` | Days to include (currently Monday-Friday) |
| `MORNING_HOURS`, `EVENING_HOURS` | Rush-hour windows (7-9 AM, 5-7 PM) |
| `BATCH_SIZE` | Rows per API request (max 50,000) |
| `MAX_RECORDS` | Upper bound on total records fetched (default 200,000) |

## Data source

NY Open Data: MTA Subway Origins and Destinations: Beginning 2023
<https://data.ny.gov/resource/jsu2-fbtj.json>

## Pipeline structure

1. `fetch_rush_hour_data()` builds a compound WHERE clause and paginates through the SODA API in 50K batches.
2. `build_dataframe()` coerces numeric fields, derives an `hour` column, and tags each row as morning or evening rush.
3. Five plotting functions (`plot_flow_map`, `plot_top_stations`, `plot_ridership_by_hour`, `plot_ridership_by_day`, `plot_morning_vs_evening`) each render one panel.
4. `main()` wires them into a 3x2 gridspec, applies the dark title header, and saves the figure.

## Design notes

The palette is tuned for dark-background reporting. Hours before noon are rendered in blue; evenings in purple. The flow map draws each of the top 25 origin-destination routes as a curved arc whose width and opacity scale with ridership.
