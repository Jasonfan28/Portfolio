"""
MTA Subway Passenger Flow — Weekday Rush Hours
Fetches origin-destination ridership data from NY Open Data SODA API,
filters for weekday rush hours, and produces visualizations.
"""

import matplotlib
matplotlib.use("Agg")

import requests
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import numpy as np

# ── Config ───────────────────────────────────────────────
API_URL = "https://data.ny.gov/resource/jsu2-fbtj.json"
WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
MORNING_HOURS = [7, 8, 9]
EVENING_HOURS = [17, 18, 19]
RUSH_HOURS = MORNING_HOURS + EVENING_HOURS
BATCH_SIZE = 50000
MAX_RECORDS = 200000

# ── Fetch data ───────────────────────────────────────────
def fetch_rush_hour_data():
    """Fetch weekday rush-hour O-D records from SODA API."""
    day_filter = " OR ".join(f"day_of_week='{d}'" for d in WEEKDAYS)
    hour_filter = " OR ".join(f"hour_of_day='{h}'" for h in RUSH_HOURS)
    where = f"({day_filter}) AND ({hour_filter})"

    all_rows = []
    offset = 0
    batch = 1

    while offset < MAX_RECORDS:
        print(f"  Fetching batch {batch} (offset {offset:,})...", flush=True)
        params = {
            "$where": where,
            "$limit": BATCH_SIZE,
            "$offset": offset,
            "$order": "estimated_average_ridership DESC",
        }
        resp = requests.get(API_URL, params=params, timeout=60)
        resp.raise_for_status()
        rows = resp.json()
        if not rows:
            break
        all_rows.extend(rows)
        if len(rows) < BATCH_SIZE:
            break
        offset += BATCH_SIZE
        batch += 1

    print(f"  Total records fetched: {len(all_rows):,}", flush=True)
    return all_rows


def build_dataframe(raw):
    """Convert raw JSON to a clean DataFrame."""
    df = pd.DataFrame(raw)
    df["ridership"] = pd.to_numeric(df["estimated_average_ridership"], errors="coerce")
    df["hour"] = pd.to_numeric(df["hour_of_day"], errors="coerce").astype(int)
    df["origin_lat"] = pd.to_numeric(df["origin_latitude"], errors="coerce")
    df["origin_lng"] = pd.to_numeric(df["origin_longitude"], errors="coerce")
    df["dest_lat"] = pd.to_numeric(df["destination_latitude"], errors="coerce")
    df["dest_lng"] = pd.to_numeric(df["destination_longitude"], errors="coerce")
    df["rush_period"] = df["hour"].apply(
        lambda h: "Morning (7-9 AM)" if h in MORNING_HOURS else "Evening (5-7 PM)"
    )
    return df


# ── Visualization ────────────────────────────────────────
# Dark theme colours
BG = "#0c0f1a"
CARD_BG = "#151929"
TEXT = "#e4e8f1"
DIM = "#8892a8"
BLUE = "#6c8cff"
PURPLE = "#c084fc"
GREEN = "#34d399"
PINK = "#f472b6"
ORANGE = "#fbbf24"
PALETTE = [BLUE, PURPLE, GREEN, ORANGE, PINK,
           "#60a5fa", "#a78bfa", "#4ade80", "#fb923c", "#f87171"]


def apply_dark_style(ax, title, subtitle=""):
    """Apply consistent dark styling to an axis."""
    ax.set_facecolor(CARD_BG)
    ax.set_title(title, color=TEXT, fontsize=13, fontweight="bold", pad=12, loc="left")
    if subtitle:
        ax.text(0, 1.01, subtitle, transform=ax.transAxes,
                fontsize=8, color=DIM, va="bottom")
    ax.tick_params(colors=DIM, labelsize=9)
    for spine in ax.spines.values():
        spine.set_visible(False)
    ax.grid(axis="y", color="white", alpha=0.04, linewidth=0.5)


def plot_top_stations(ax, df, n=15):
    """Horizontal bar chart of top origin stations by total ridership."""
    top = (
        df.groupby("origin_station_complex_name")["ridership"]
        .sum()
        .nlargest(n)
        .sort_values()
    )
    colors = [PALETTE[i % len(PALETTE)] for i in range(len(top))]
    bars = ax.barh(range(len(top)), top.values, color=colors, height=0.65, zorder=3)
    ax.set_yticks(range(len(top)))
    ax.set_yticklabels([s[:30] for s in top.index], fontsize=8, color=DIM)
    apply_dark_style(ax, "Top Origin Stations", "Total estimated outbound ridership")
    ax.grid(axis="x", color="white", alpha=0.04)
    ax.grid(axis="y", visible=False)


def plot_ridership_by_hour(ax, df):
    """Bar chart of average ridership per route by rush hour."""
    hourly = df.groupby("hour")["ridership"].mean().reindex(RUSH_HOURS, fill_value=0)
    colors = [BLUE if h in MORNING_HOURS else PURPLE for h in RUSH_HOURS]
    labels = [f"{h} AM" if h < 12 else f"{h-12} PM" for h in RUSH_HOURS]
    ax.bar(labels, hourly.values, color=colors, width=0.6, zorder=3)
    apply_dark_style(ax, "Average Ridership by Hour", "Mean passengers per O-D pair")


def plot_ridership_by_day(ax, df):
    """Bar chart of total ridership by weekday."""
    daily = df.groupby("day_of_week")["ridership"].sum().reindex(WEEKDAYS, fill_value=0)
    day_colors = [BLUE, "#818cf8", "#a78bfa", PURPLE, "#e879f9"]
    ax.bar([d[:3] for d in WEEKDAYS], daily.values, color=day_colors, width=0.55, zorder=3)
    apply_dark_style(ax, "Total Ridership by Day", "Summed across all rush-hour routes")
    ax.yaxis.set_major_formatter(mticker.FuncFormatter(lambda x, _: f"{x/1000:.0f}k"))


def plot_morning_vs_evening(ax, df):
    """Grouped bar comparing morning vs evening rush by day."""
    pivot = (
        df.groupby(["day_of_week", "rush_period"])["ridership"]
        .sum()
        .unstack(fill_value=0)
        .reindex(WEEKDAYS)
    )
    x = np.arange(len(WEEKDAYS))
    w = 0.35
    if "Morning (7-9 AM)" in pivot.columns:
        ax.bar(x - w / 2, pivot["Morning (7-9 AM)"], w, label="Morning", color=BLUE, zorder=3)
    if "Evening (5-7 PM)" in pivot.columns:
        ax.bar(x + w / 2, pivot["Evening (5-7 PM)"], w, label="Evening", color=PURPLE, zorder=3)
    ax.set_xticks(x)
    ax.set_xticklabels([d[:3] for d in WEEKDAYS])
    ax.legend(facecolor=CARD_BG, edgecolor="none", labelcolor=DIM, fontsize=8)
    apply_dark_style(ax, "Morning vs Evening Rush", "Total ridership comparison")
    ax.yaxis.set_major_formatter(mticker.FuncFormatter(lambda x, _: f"{x/1000:.0f}k"))


def plot_flow_map(ax, df, n=25):
    """Scatter + line map of top O-D routes on lat/lng axes."""
    routes = (
        df.groupby(
            ["origin_station_complex_name", "destination_station_complex_name",
             "origin_lat", "origin_lng", "dest_lat", "dest_lng"],
            as_index=False,
        )["ridership"]
        .sum()
        .nlargest(n, "ridership")
    )
    max_r = routes["ridership"].max()

    ax.set_facecolor(CARD_BG)
    for _, row in routes.iterrows():
        alpha = 0.3 + 0.6 * (row["ridership"] / max_r)
        lw = 0.8 + 3.5 * (row["ridership"] / max_r)
        # Draw curved line via midpoint offset
        mid_lat = (row["origin_lat"] + row["dest_lat"]) / 2 + (row["origin_lng"] - row["dest_lng"]) * 0.1
        mid_lng = (row["origin_lng"] + row["dest_lng"]) / 2 + (row["dest_lat"] - row["origin_lat"]) * 0.1
        ax.plot(
            [row["origin_lng"], mid_lng, row["dest_lng"]],
            [row["origin_lat"], mid_lat, row["dest_lat"]],
            color=BLUE, alpha=alpha, linewidth=lw, zorder=2,
        )
    # Plot all origin stations as dots
    origins = df.drop_duplicates("origin_station_complex_name")
    ax.scatter(origins["origin_lng"], origins["origin_lat"],
               s=3, color=PURPLE, alpha=0.35, zorder=1)
    # Highlight top route endpoints
    ax.scatter(routes["origin_lng"], routes["origin_lat"], s=18, color=GREEN, zorder=4, edgecolors="white", linewidths=0.3)
    ax.scatter(routes["dest_lng"], routes["dest_lat"], s=18, color=PINK, zorder=4, edgecolors="white", linewidths=0.3)

    apply_dark_style(ax, f"Top {n} O-D Routes", "Green = origin, Pink = destination")
    ax.set_xlabel("Longitude", color=DIM, fontsize=8)
    ax.set_ylabel("Latitude", color=DIM, fontsize=8)
    ax.set_aspect("equal")
    ax.grid(visible=False)


def main():
    print("Fetching MTA rush-hour data...")
    raw = fetch_rush_hour_data()
    df = build_dataframe(raw)

    n_stations = df["origin_station_complex_name"].nunique()
    total_riders = df["ridership"].sum()
    print(f"  {len(df):,} records | {n_stations} stations | {total_riders:,.0f} total riders\n", flush=True)

    # ── Create figure ────────────────────────────────────
    fig = plt.figure(figsize=(18, 14), facecolor=BG)
    fig.suptitle(
        "MTA Subway Passenger Flow — Weekday Rush Hours",
        color=TEXT, fontsize=18, fontweight="bold", y=0.98,
    )
    fig.text(0.5, 0.955, f"{len(df):,} records  ·  {n_stations} stations  ·  {total_riders:,.0f} estimated riders",
             ha="center", color=DIM, fontsize=10)

    gs = fig.add_gridspec(3, 2, hspace=0.38, wspace=0.28,
                          left=0.06, right=0.97, top=0.92, bottom=0.04)

    # Row 1: Flow map + Top stations
    ax_map = fig.add_subplot(gs[0, 0])
    plot_flow_map(ax_map, df, n=25)

    ax_stations = fig.add_subplot(gs[0, 1])
    plot_top_stations(ax_stations, df, n=15)

    # Row 2: By hour + By day
    ax_hours = fig.add_subplot(gs[1, 0])
    plot_ridership_by_hour(ax_hours, df)

    ax_days = fig.add_subplot(gs[1, 1])
    plot_ridership_by_day(ax_days, df)

    # Row 3: Morning vs Evening (wide)
    ax_compare = fig.add_subplot(gs[2, :])
    plot_morning_vs_evening(ax_compare, df)

    plt.savefig("F:\\Graduate School Stuff\\Cool maps\\mta_rush_hour.png", dpi=150, facecolor=BG)
    print("Saved → F:\\Graduate School Stuff\\Cool maps\\mta_rush_hour.png", flush=True)


if __name__ == "__main__":
    main()

