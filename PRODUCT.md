# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four readers, in the order they usually arrive:

1. **Public-agency hiring managers.** City, county, and state planning and data teams evaluating Jason as a candidate. They read the site alongside a resume and a cover letter, often with a specific opening in mind.
2. **Consultancy hiring leads.** Planning, GIS, and civic-tech firms screening for skills they can put on a live project quickly.
3. **A non-specialist screener, then a practitioner.** The first pass is frequently done by someone in HR who needs to grasp the shape of the work fast. The second pass is done by a practitioner who checks the method and wants the deliverable itself.
4. **Network, peers, and professors.** People Jason points at the site directly, who already know who he is and want the work.

The job every one of them is doing is the same: decide whether this person can do the work they need done, using evidence rather than assertion.

## Product Purpose

A portfolio site for Jason Tianchi Fan, Master of City Planning, University of Pennsylvania, May 2026, seeking full-time work in urban data, planning, and spatial analysis. It presents eleven selected works, each with a short account of the work and a link straight to the actual deliverable.

Success is a reader reaching a deliverable. The site is a routing layer to real artifacts, not a destination in itself. A secondary success is the reader emailing or downloading the resume.

## Positioning

A planner who ships working tools. The models end as dashboards, maps, and pipelines an agency can run, not as slide decks about what could be built. PhillyStat360, the Philadelphia CAMA Reviewer, the Missoula web map, and the 3D scene on this site are all live and linkable, which a comparable planning graduate cannot generally claim.

## Operating Context

- Hosted on GitHub Pages at https://jasonfan28.github.io/Portfolio/. That URL is what gets pasted into applications and emails.
- Readers arrive cold from an application, a link in an email, or a resume line. There is no onboarding and no second visit to rely on.
- Reading often happens in a hiring workflow with limited time and many candidates open at once.
- Deliverables are heterogeneous by nature: PDFs, live dashboards on other domains, an interactive map, and a WebGL scene.

## Capabilities and Constraints

- Hand-written static HTML, CSS, and JavaScript. No npm, no bundler, no framework, no build step. Files are edited and committed directly.
- Two surfaces, and the split is durable. `index.html` is the front door and the URL to share. `explore.html` is the scroll-driven three.js city, credited on the index as entry eleven rather than treated as decoration. `work.html` is a redirect stub kept for old links.
- `page.css` styles the index. `style.css` and `main.js` drive the 3D scene. Cache busting is done with a `?v=` query string on the stylesheet links.
- External runtime dependencies are Google Fonts (Cormorant Garamond, Barlow Condensed, DM Mono) and three.js r128 from cdnjs. No analytics, no trackers, no third-party scripts that collect visitor data.
- The site must hold up on a modest laptop, including the WebGL scene. Performance is part of the pitch, so it cannot regress. The scene is batched into merged per-material buffers, taking it from roughly 2,600 draw calls a frame to about ten.
- Five archived project folders (`03`, `04`, `06`, `09`, `10`) are retained in the repository but deliberately not featured on the site.

## Brand Commitments

- Name shown as Jason Tianchi Fan, or Jason T. Fan in navigation.
- Voice is plain declarative prose. No em dashes and no semicolons. Claims are specific and quantified when a number exists.
- Contact is jason.tc.fan@gmail.com. The resume is `Resume_2026.pdf`.

## Evidence on Hand

Eleven works, all with a real artifact behind them:

| # | Work | Artifact |
|---|---|---|
| 01 | PhillyStat360 Vacant Property Indicator | Case study page plus a live dashboard |
| 02 | Understanding Pennsylvania's Creative Workforce | 88-page study published October 2025 by Pennsylvania Creative Industries |
| 03 | Philadelphia CAMA Reviewer | Live dashboard and public source repository |
| 04 | Missoula Infill Suitability | Poster, memo, and an interactive MapLibre map |
| 05 | Reimagining Market East | Vision plan book PDF and overview |
| 06 | Bristol 2050 Plan | Studio plan book PDF |
| 07 | Transportation Noise and Health Outcomes | Live project site and notebook |
| 08 | Beyond Borrowing: Land Value Capture for HCMC | 8-page policy brief PDF |
| 09 | 35 Years of Arctic Sea Ice Melt | Map poster PDF |
| 10 | Carson River Relative Elevation Model | Map poster PDF |
| 11 | The portfolio you walk through | `explore.html`, three.js and WebGL |

Thumbnails live in `thumbs/`. Every figure in the copy traces to the deliverable it describes. There are no testimonials, no client quotes, no employer endorsements, and no traffic or usage numbers. Future work must not invent any of these.

Team credit is stated where the work was a team effort, and Jason's own contribution is named rather than implied.

## Product Principles

1. **The artifact is the argument.** Every entry exists to get a reader to the real deliverable. Anything that delays that is overhead.
2. **Strongest first, and say why.** Order is a judgment about what proves the most, not chronology.
3. **Claims are checkable.** Numbers come from the deliverable. Contribution on team projects is stated honestly.
4. **Nothing is decoration.** The 3D scene earns a numbered slot as a piece of work, or it does not belong.
5. **A cold reader with five minutes must get the whole picture.** The site cannot depend on a second visit or on the reader already knowing the field.

## Accessibility & Inclusion

No formal standard has been mandated. Two product-specific needs are established: a non-specialist must be able to understand every entry without domain vocabulary, and the index must remain fully usable without the WebGL scene, since the scene is a separate surface and not a prerequisite for anything.
