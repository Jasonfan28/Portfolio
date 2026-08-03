---
name: Jason Tianchi Fan Portfolio
description: A planning portfolio drawn as a survey sheet, where the work is the artwork and the interface is the drafting.
colors:
  paper-1: "#f3ead6"
  paper-2: "#ede2c9"
  paper-glass: "rgba(243, 234, 214, 0.94)"
  ink-1: "#1d1710"
  ink-2: "#3a2f20"
  ink-3: "rgba(29, 23, 16, 0.62)"
  ink-4: "rgba(29, 23, 16, 0.55)"
  matting-hover: "#e5d8ba"
  terra: "#b8651e"
  terra-text: "#8a4a14"
  terra-deep: "#8a4a14"
  terra-pressed: "#713c0f"
  label-on-ink: "#fdf7ec"
  label-on-ink-strong: "#fff"
  surface-lift: "rgba(255,252,245,0.5)"
  surface-chip: "rgba(255,252,245,0.55)"
  surface-lift-strong: "rgba(255,252,245,0.95)"
  rule-1: "rgba(110, 58, 26, 0.22)"
  rule-2: "rgba(110, 58, 26, 0.12)"
  rule-print: "#bbb"
typography:
  display:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "clamp(2.4rem, 6vw, 4.2rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.15rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline-band:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline-sm:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.4vw, 1.95rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1.32rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1.22rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  figure-xl:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 300
    lineHeight: 1
    fontFeature: "lnum"
  figure-lg:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1.9rem"
    fontWeight: 300
    lineHeight: 1
    fontFeature: "lnum"
  figure-md:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 300
    lineHeight: 1
    fontFeature: "lnum"
  figure-sm:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1.3rem"
    fontWeight: 300
    lineHeight: 1
    fontFeature: "lnum"
  lede:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  lede-sm:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1.06rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "0.98rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  body-xs:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  aside:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "0.88em"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label-lg:
    fontFamily: "Barlow Condensed, Oswald, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.26em"
  label:
    fontFamily: "Barlow Condensed, Oswald, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
  label-sm:
    fontFamily: "Barlow Condensed, Oswald, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.18em"
  label-xs:
    fontFamily: "Barlow Condensed, Oswald, sans-serif"
    fontSize: "0.66rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
  register:
    fontFamily: "DM Mono, IBM Plex Mono, monospace"
    fontSize: "0.66rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
  register-mark:
    fontFamily: "DM Mono, IBM Plex Mono, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  none: "0"
spacing:
  hair: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "38px"
  section: "54px"
components:
  button-primary:
    backgroundColor: "{colors.terra-deep}"
    textColor: "#fdf7ec"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem"
    height: "46px"
  button-primary-hover:
    backgroundColor: "#713c0f"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "rgba(255,252,245,0.5)"
    textColor: "{colors.ink-1}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem"
    height: "46px"
  chip-link:
    backgroundColor: "rgba(255,252,245,0.55)"
    textColor: "{colors.ink-1}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.42rem 0.8rem"
    height: "40px"
  chip-link-lead:
    backgroundColor: "rgba(255,252,245,0.55)"
    textColor: "{colors.terra-text}"
    rounded: "{rounded.none}"
  tag:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.2rem 0.5rem"
  media-frame:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.none}"
    padding: "0"
  media-frame-sheet:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.none}"
    padding: "12px"
---

# Design System: Jason Tianchi Fan Portfolio

## Overview

**Creative North Star: "The Survey Sheet"**

The system is a drafted plan set rendered as a web page. Every structural decision borrows from the vocabulary of measured drawing: the page sits on aged survey paper, sections open with a drawing register that carries a sheet number and a range, frames are marked with registration brackets at opposing corners, index numerals are set large and pale like sheet callouts, and the one illustration on the site is a one-point perspective with its horizon and vanishing point still drawn in. Nothing here is a generic portfolio chrome tinted beige. The chrome is the discipline the work comes from.

The density is editorial rather than decorative. A serif with real contrast carries every title and every sentence, a condensed sans carries every label, and a monospace carries anything that is a measurement or a register mark. Those three voices never trade jobs. The palette is a single warm paper with one iron-oxide accent, and the accent is rationed so hard that its appearance is always a signal.

The world is flat by construction. There is not one shadow and not one rounded corner in the stylesheet, and both absences are load-bearing. Depth comes from hairline rules, from tonal shifts between two paper tints, and from bracket corners that appear on hover. The anti-reference is the software-product landing page: gradient fills, soft-shadowed cards, pill buttons, and glass panels are all foreign to a sheet of paper and are refused on sight.

**Key Characteristics:**
- Aged survey paper (`#f3ead6`) as the ground, never white
- One iron-oxide accent, split into a drawing ink and a reading ink
- Zero border-radius and zero box-shadow, throughout
- Hairline rules in a rust tint, never grey
- Serif for prose, condensed sans for labels, mono for registers
- Index numerals as sheet callouts, at ranking weight
- Registration brackets as the hover affordance
- The artwork is shown, not decorated

## Colors

Aged survey paper and iron-oxide ink: a stock that has warmed with age, marked with the rust-red of a drafting pen and the pressed graphite of a hard pencil.

### Primary
- **Iron Oxide** (`#b8651e`): the drawing ink. Hairline rules, bracket corners, the vanishing-point crosshair, kicker separators, and lead-chip borders. It measures 3.6:1 on paper, which is why it never sets readable text.
- **Burnt Sienna** (`#8a4a14`): the reading ink. The same hue taken to 5.9:1 for every piece of terra-coloured text, every link, every section label, and the primary button fill. It is the accent whenever the accent has to be read rather than seen.

### Neutral
- **Aged Survey Paper** (`#f3ead6`): the page ground, carrying a fixed 1px horizontal repeating gradient at 0.6 opacity as a paper tooth.
- **Matting Stock** (`#ede2c9`): the darker second paper. Media frame backgrounds and the mat behind every sheet, tag fills, and the illustration ground.
- **Pressed Graphite** (`#1d1710`): titles, headings, and any text that must hold the page.
- **Soft Graphite** (`#3a2f20`): body copy, descriptions, and standfirsts.
- **Pencil Grey** (`rgba(29, 23, 16, 0.62)`): secondary and method text, kickers, register numerals, and visited states.
- **Callout Grey** (`rgba(29, 23, 16, 0.55)`): the large index numerals only. It clears 3:1 at 40px and nothing smaller may use it.
- **Rust Rule** (`rgba(110, 58, 26, 0.22)`) and **Faint Rust Rule** (`rgba(110, 58, 26, 0.12)`): every border and divider on the site. Structural rules take the first, internal subdivisions the second.

### Surfaces and state tones

These are the tones that only ever appear as a surface or a state, never as a text colour.

- **Lifted Paper** (`rgba(255,252,245,0.5)`) and **Chip Paper** (`rgba(255,252,245,0.55)`): the translucent near-white that raises buttons, chips, and the closing band a half-step off the ground. It reads as a lighter patch of the same sheet rather than as a separate material.
- **Lifted Paper Active** (`rgba(255,252,245,0.95)`): the same surface on hover, going nearly opaque.
- **Warm Mat** (`#e5d8ba`): the mat tone a sheet frame shifts to on hover. It is the only hover response a designed sheet gets, because it must not scale.
- **Label on Ink** (`#fdf7ec`) and **Label on Ink, Pressed** (`#fff`): the two paper-white values that sit on a filled terra surface.
- **Terra Pressed** (`#713c0f`): the primary button's hover fill, one step below the reading ink.
- **Print Rule** (`#bbb`): frames in the print stylesheet only, where a rust hairline disappears on a monochrome printer.

### Named Rules

**The Two Inks Rule.** Terra exists twice on purpose. `#b8651e` draws and `#8a4a14` reads. If a terra value is applied to text of any size, it is the reading ink or it is a bug. This single split is what carries the page from seven contrast failures to none.

**The No Grey Lines Rule.** Every rule, border, and divider is a rust tint, never a neutral grey. The lines belong to the drawing, not to a UI kit.

**The Rationed Accent Rule.** Terra never fills a large area. It draws lines a pixel or two wide, marks corners, sets the author line and section names, and fills exactly one button. If an accent block would read as a panel, it is wrong.

**The No Decorative Italic Rule.** A serif italic in the accent colour is not emphasis, it is ornament, and it reads as generic even when everything around it is specific. Headings are set in one weight and one colour. Emphasis comes from size, position, and what the sentence actually says. The `h1 em` and `h2 em` rules survive only for the case study's headline and are not to be reused.

## Typography

**Display Font:** Cormorant Garamond (with EB Garamond, Georgia, serif)
**Body Font:** Cormorant Garamond, the same face
**Label Font:** Barlow Condensed (with Oswald, sans-serif)
**Register Font:** DM Mono (with IBM Plex Mono, monospace)

**Character:** A high-contrast old-style serif set light and large does the speaking, so the page reads like a printed document rather than an interface. Barlow Condensed handles every uppercase label at wide tracking, which is the lettering of a title block. DM Mono appears only where a number is a coordinate: section numerals, sheet ranges, contents numbering. The pairing is a drawing sheet's own hierarchy, not a brand system borrowed onto one.

### Hierarchy

The scale runs in five tiers. Serif carries display, figure, title, and body; condensed sans carries every label; mono carries every register.

- **Display** (300, `clamp(2.4rem, 6vw, 4.2rem)`, 1.02, `-0.02em`): the page headline, once per page, balanced with `text-wrap: balance`. One weight, one colour, no italic. On the index it is the name and nothing else, with the author line carrying the role.
- **Headline** (400, 1.15, `-0.01em`): four fluid steps for the four contexts that need one. Featured entry titles `clamp(1.6rem, 2.6vw, 2.15rem)`, the shared `h2` base `clamp(1.6rem, 3vw, 2.15rem)`, the closing band `clamp(1.5rem, 3vw, 2rem)`, and the colophon `clamp(1.5rem, 2.4vw, 1.95rem)`. They are deliberately near-identical at desktop and diverge only as the viewport narrows.
- **Figure** (300, 1, lining numerals): the numeral tier, four fixed steps. Feature index numerals at 2.5rem, case-study pull figures at 1.9rem, card index numerals at 1.5rem, masthead key figures at 1.3rem.
- **Title** (400, 1.15, `-0.01em`): plate entry titles at 1.32rem, card entry titles at 1.22rem. The two are distinct on purpose, because a plate carries more weight than a card.
- **Body** (400): standfirsts at 1.12rem, featured and colophon descriptions at 1.06rem, base prose at 1rem and 1.7 line-height, contents entries and fact values at 0.98rem, card and plate descriptions and section notes at 0.94rem, and method asides at `0.88em` of their parent. Prose is capped at 62ch for standfirsts and 54ch to 60ch for supporting paragraphs.
- **Label** (500, uppercase, `0.13em` to `0.38em`): four steps. Top bar at 0.72rem, buttons and contents summary at 0.7rem, chips, tags, kickers, and stat labels at 0.68rem, and the tightest metadata at 0.66rem.
- **Register** (400, mono, `0.1em`): sheet numbers, entry lists, and contents numerals at 0.66rem, with the contents disclosure mark at 0.8rem.

### Scope note

`page.css` is shared between the work index and the long-form case study. The `meta-strip`, `stat-row`, `callout`, and `body-list` patterns belong to the case study and are documented here because they are part of the same system, not because they appear on the index.

### Named Rules

**The Three Voices Rule.** Serif speaks, condensed sans labels, mono measures. A voice never takes another's job. A section name is condensed sans, its sheet number is mono, and its entry titles are serif, always in that arrangement.

**The 10.5px Floor Rule.** No text renders below 10.5px, including tracked uppercase labels. The condensed face invites going smaller and it must be refused. Every label on the page currently sits at 10.88px or above.

**The Numeral Rule.** Index numerals are set in the serif at display weight and Callout Grey, and they carry the ranking, not the position. They never renumber to make a section contiguous.

## Layout

A single centred column capped at 1180px with 2.4rem gutters, dropping to 1.2rem below 820px. Content sits on a fixed paper texture layer at `z-index: 0` with everything else above it.

The page is a stack of named sections, each opening with a register row and closing with its content block. Three grid families do all the work. Featured entries are a two-column grid at `1.15fr 1fr` with a 3rem gutter, alternating side by side by flipping the media to `order: 2`. Card grids are `repeat(auto-fit, minmax(290px, 1fr))` at a 2.4rem by 2rem gutter, and cards are flex columns whose link rows pin to the bottom so they align across a row regardless of description length. Plates are `repeat(auto-fit, minmax(400px, 1fr))`, two up at desktop and one up below 880px.

The masthead is a title block: the headline spans the full width, then the standfirst and a stacked figure key sit side by side at `minmax(0, 1.55fr) minmax(250px, 1fr)`. Below 880px it collapses to one column and the key drops beneath the standfirst.

Vertical rhythm runs on a small set of steps: 0.5rem inside a group, 0.9rem to 1rem between a title and its body, 1.8rem to 2rem below a section register, and 3.4rem above one. The first section register on a page is tightened to 1.9rem so the work starts inside the fold.

Breakpoints are 880px, where every two-column grid collapses, and 820px, where gutters and the top bar tighten. There is no third breakpoint and none is needed.

**The Fold Rule.** The first entry's image and title both sit above 800px at a 1280px viewport. Any masthead addition that pushes them below it has to earn the space or be cut.

## Elevation & Depth

There are no shadows. `box-shadow` appears zero times in the stylesheet, and this is a rule rather than an omission. Paper has no drop shadow, so neither does anything here.

Depth is built three ways. Tonal layering separates a media frame or a tag (`#ede2c9`) from the page (`#f3ead6`), and a translucent near-white (`rgba(255,252,245,0.5)`) lifts buttons, chips, and the closing band a half-step above the ground. Hairline rust rules divide everything else. Registration brackets, 15px corner marks in the drawing ink at opposing corners of a frame, fade in at 0.3s on hover and are the only true elevation cue in the system. The sticky top bar is the one exception, using a 6px backdrop blur behind a 0.94-alpha paper, because it genuinely overlaps content.

**The Paper Doesn't Float Rule.** If a surface needs to feel raised, change its tone or draw a rule around it. Never add a shadow, and never add a border-radius to soften the result.

### Motion

One easing curve, `cubic-bezier(.2,.8,.2,1)`, used for the single slow move on the page: a 0.7s contained scale on a photographic thumbnail. Everything else is a 0.18s to 0.3s colour, background, or opacity transition. A `prefers-reduced-motion` block collapses all of it to 0.01ms.

**The Don't Zoom the Map Rule.** Photographs may scale on hover. Designed sheets never do, because resampling a map degrades the exact craft being judged. Sheets shift their mat tone instead.

## Shapes

Square, without exception. `border-radius` appears zero times. Every frame, chip, button, tag, and band is a rectangle with a 1px rust hairline, which is what a drawn box looks like.

Media frames carry fixed aspect ratios by role: 3:2 for featured entries, 4:3 for cards, and 16:10 for plates, relaxing to 4:3 below 880px so a poster keeps its height on a phone. Corner marks are 15px brackets at 1.5px stroke, insetting 7px, on the top-left and bottom-right. The closing band uses the same bracket at 16px, sitting 1px outside its own border so the mark reads as drawn over the edge.

**The Sheet Is Never Cropped Rule.** A poster, a plan cover, or a map sheet is matted on `#ede2c9` at 12px to 14px and shown whole with `object-fit: contain`. Only photographs may be cropped to fill a frame with `object-fit: cover`. Cropping a designed sheet cuts its own headline, which is the one mistake this system exists to prevent.

## Components

### Buttons
- **Shape:** square (0 radius), 1px hairline, 46px minimum height
- **Primary:** Burnt Sienna fill (`#8a4a14`) with `#fdf7ec` label, 0.7rem 1.1rem padding, condensed uppercase at `0.2em`
- **Hover:** primary darkens to `#713c0f`; secondary shifts its background toward opaque and its label and border to the reading ink, over 0.2s
- **Secondary:** translucent near-white fill, Pressed Graphite label, Rust Rule border
- **Trailing glyph:** an arrow (`→` internal, `↗` new tab), always `aria-hidden`

### Chips
- **Style:** the link chip is the workhorse. Square, 1px Rust Rule border, translucent near-white fill, condensed uppercase at 0.68rem, 40px minimum height and 44px on mobile
- **Lead variant:** border in the drawing ink and label in the reading ink, marking the single most important destination in a group; on hover it inverts to a Burnt Sienna fill
- **Visited:** label drops to Pencil Grey and the border switches to dashed, so a returning reader can see where they have been

### Tags
- **Style:** Matting Stock fill, 1px Rust Rule border, Soft Graphite condensed uppercase, pushed to the end of its head row with `margin-left: auto`
- **Role:** names the artifact format in two or three words, so format is readable without reading the description

### Cards and Containers
- **Corner style:** square, always
- **Background:** the page ground; only the media frame and tags take Matting Stock
- **Shadow strategy:** none, per Elevation
- **Border:** a 1px Rust Rule above a section's grid, and around every media frame
- **Internal padding:** cards are unpadded and rely on the column rhythm; the closing band uses 2.4rem 2.2rem

### Navigation
- Sticky, translucent paper at 0.94 alpha with a 6px backdrop blur and a Faint Rust Rule bottom border. Condensed uppercase at 0.72rem, `0.26em` tracking, Soft Graphite, with the wordmark in Pressed Graphite at `0.3em`. Hover moves to the reading ink. Every item carries a 44px minimum height so the padding is the tap target. It wraps rather than collapsing to a menu, because four items fit at 375px.

### Section Register
The signature component. A flex row of a mono sheet number (`§ 01`), a condensed uppercase section name in the reading ink, a hairline rule that fills all remaining space, and a mono entry list on the right (`01 · 03 · 04 · 07`). It is a real `<h2>`, it announces that the collection is ordered and finite, and it is the single most identity-carrying element in the system.

### Author Line
Sits directly under the display name and closes with a full-width hairline, which makes the masthead read as a drawing's title block: sheet title, author, then the scope below the rule. Condensed uppercase at 0.72rem and `0.28em` in the reading ink, with a diamond in the same ink separating role from location. It carries what the headline deliberately does not claim.

### Figure Key
A stacked list of four number and label pairs on hairline dividers, each with a 4px terra corner tick. Set beside the standfirst it reads as a drawing's title block. The numbers are always evidence from the work, never metadata about the page.

## Do's and Don'ts

### Do:
- **Do** split terra by job. `#b8651e` draws, `#8a4a14` reads. Text of any size takes the reading ink.
- **Do** mat every designed sheet on `#ede2c9` and show it whole. Reach for `object-fit: cover` only on a photograph.
- **Do** draw every rule, border, and divider in a rust tint (`rgba(110, 58, 26, 0.22)` or `0.12`).
- **Do** keep the three type voices separate: serif for prose and titles, Barlow Condensed for uppercase labels, DM Mono for numerals and registers.
- **Do** hold every label at 10.5px or above, however tempting the condensed face makes smaller.
- **Do** give a new section a real `<h2>` register with a sheet number, a name, a filling rule, and its entry list.
- **Do** keep the first entry's image and title above 800px at desktop.
- **Do** give interactive controls a 44px minimum hit area, using padding rather than font size.
- **Do** provide a visited state for anything that leaves the page.

### Don't:
- **Don't** add a `box-shadow`. There are none, and depth comes from tone, rules, and bracket corners.
- **Don't** add a `border-radius`. Every corner in this system is square.
- **Don't** scale a map, plan, or poster on hover. Shift its mat tone instead.
- **Don't** set an eyebrow or kicker above the page headline. The headline carries itself.
- **Don't** italicise a phrase inside a heading, in the accent colour or any other. It is ornament pretending to be emphasis.
- **Don't** write a headline that asserts what the work is like. State a fact and let the eleven entries argue the rest.
- **Don't** use a grey border anywhere.
- **Don't** renumber entries so a section reads contiguously. The numeral is the ranking, and a non-contiguous section is the correct result.
- **Don't** introduce a second accent hue. One iron oxide, rationed, is the whole colour argument.
- **Don't** fill a large area with terra. It draws lines and marks corners, and fills exactly one button.
- **Don't** let a stat, badge, or metadata strip take first-viewport space unless its numbers are evidence from the work.
