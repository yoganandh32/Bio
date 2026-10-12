# Image provenance and generation prompts

## Defense figures

Extracted unchanged from the user-supplied `Defense_yoganandh_final.pptx`:

- `images/defense-immersion-setup.jpeg`: slide 14, `ppt/media/image54.jpeg`; immersion ultrasonic experimental method.
- `images/defense-layered-model.png`: slide 25, `ppt/media/image112.png`; unified layered-wave model.
- `images/defense-reference-fixture.jpeg`: slide 37, `ppt/media/image158.jpeg`; experimental reference-method fixture.

The source deck is not distributed with the website. Figures link to their full-resolution originals. Publication status follows the newer CV, rather than the older defense slides.

## Generated illustrations

Created using the built-in image generation tool. These are conceptual illustrations, not measured data, validated simulations, or photographs of proprietary equipment. Captions make this distinction on the website.

### `images/nvh-diagnostics.png`

Use case: scientific-educational. Asset type: landscape 3:2 illustration for a professional acoustics engineer's dark portfolio website. Primary request: illustrate NVH engineering for identifying nicked gears in an electric vehicle axle through experimental vibration measurement and signal-processing software. Scene: elegant dark charcoal-green (#171c1c) studio background, a generic compact EV drive axle housing in three-quarter cutaway revealing realistic meshing steel gears, a small copper-highlighted nick on ONE gear tooth, a mounted accelerometer with a cable leading to an understated measurement instrument, and a floating translucent display with an illustrative vibration waveform and frequency spectrum (no numerical values). Medium: refined technical editorial 3D illustration with realistic metals, warm copper (#d5a583) accents, ivory details, restrained composition. Keep central assembly fully visible with generous margins. Do not depict any real proprietary Ford hardware or software. No logos, no brand names, no words, no watermarks. Conceptual illustration, no claim to be actual test data. High visual clarity, understated academic portfolio aesthetic.

### `images/sea-duct.png`

Use case: scientific-educational. Asset type: landscape 3:2 technical editorial illustration for an acoustics research portfolio. Primary request: illustrate master's research using Statistical Energy Analysis to predict breakout noise from a rectangular HVAC duct and evaluate acoustic lagging. Scene: dark charcoal-green (#171c1c) studio background, a long rectangular sheet-metal HVAC duct in three-quarter isometric view, partially cut away so one can see the internal acoustic space and the thin metal walls, with a section of layered acoustic insulation wrapped around its outside. Visualize acoustic energy in the duct as restrained warm copper wavefronts, structural vibration energy in the duct wall as subtle copper surface lines, and energy transmitted from the vibrating walls to the surrounding air as a few soft radiating arcs. Place a small elegant network of three copper nodes with bidirectional connections near the duct, conceptually representing coupled SEA subsystems (internal sound, wall vibration, surrounding sound). No arrows showing airflow, no fans, no numerical plots, no made-up results. Palette copper #d5a583, warm ivory, steel gray, dark green. Refined realistic 3D engineering illustration, balanced clear composition with full duct visible and generous margins. No text, no labels, no logos, no watermark. A conceptual illustration, not a numerical simulation or experimental result.


## Theme-matched diagram derivatives

- `images/defense-immersion-themed.png`: color-only derivative of the slide 14 figure.
- `images/defense-layered-themed.png`: color-only derivative of the slide 25 figure.

Generated deterministically with `scripts/theme_research_figures.py` (Pillow), not AI regeneration. Each RGB channel uses one monotone lookup table: source white maps to #171c1c and black to #ecebe1. Transparent regions are first composited against the original white slide background. Fill and legend colors receive the same mapping. Dimensions, pixel positions, labels, equations, arrows, and line geometry are unchanged; output is lossless PNG. No measured plots or color scales are transformed. The experimental fixture photograph is unchanged and displayed in a themed frame. Original source files remain available through the figure links.
