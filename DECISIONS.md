# Decisions
- 2026-10-30: Reuse recovered Astro source at scratch/dc8b7c97b290, rather than rebuilding content. It had dependencies and Markdown, but no page shell or working build.
- Local portable GitHub project, no Sites hosting deployment. User explicitly requires approval before publication.
- Course catalog scope is distinct from personal completion. Most enrollment statuses require confirmation.
- Remove generated wheel/drone artwork from rendered project evidence. Retain these concepts as text-based in-progress pages.
- Exactly four authentic homepage tiles: chair, biplane, AUV and ski jump. Ski jump replaces undocumented robot; user can supply stronger evidence later.
- Use full reviewed course drafts instead of lossy migration summaries. Preserve reference docs separately and withhold insufficient records.
- Manual-only GitHub workflow with explicit publication checkbox; no push-triggered deployment. Pages configuration verified against official sources; no deployment was run.
- Keep source research/progress private and deploy dist only. Noindex retained until launch decision; it is not access control.
- Root and project-prefix builds both validated. Final bundled dist uses root paths for local review.

## Refinement pass, 2026-10-30
- Preserve Astro/GitHub Pages and the no-publication gate. No Sites hosting created.
- Replace generic opening with name and concrete building theme supported by chair CAD.
- Personal narrative grounded in direct directive and supplied resume, without invented anecdotes or exact trail route.
- Six personal photos with neutral captions where occasion/place is unconfirmed; no group/party images.
- Remove bicycle mount from active portfolio; retain mountain biking as an interest.
- Retain ski jump until original robot evidence is supplied.
- 2026-11-08: Wheel project returns as the Mach-E GT Sunburst Wheel page at Brewster's request, using real CAD renders (v1 5-spoke, v2 sunburst) plus one labeled concept render of the wheel on the car. The body in that render is a simplified drawing; captions say so.

## Recruiter-readiness pass, 2026-11-11
- Every project page uses the same five sections, in order: Problem, My role, What I built, Evidence, Status. Sub-headings inside a section use ###. "At a glance" carries exactly three facts. `npm run check:content` enforces both, and its em dash scan covers pages, data and components as well as content.
- Three themes carry the homepage: build, ask why, lead ("I build. I ask why. I lead.").
- The homepage replaces the four featured tiles with six project tiles, strongest first: chair, coaster mold, bronze rook, pipe bracket, underwater vehicle + water tunnel, biplane. The tiles are the `picks` list in src/pages/index.astro. The resume lists the same six in the same order.
- Laptop stand page is visible again: version 2 is printed and photographed.
- Coaster mold and laptop stand pages lead with real photographs, cropped to the part.
- No further wheel data will be added. The wheel stays on the Projects page only. Drone status is "waiting on parts". Chair and water tunnel photographs are still to come.
- Published 2026-11-11 with explicit approval, through the manual workflow.

## Coursework recruiter pass, 2026-11-11
- Courses have a `tier`: featured (hands-on work, own page), core (one row on the index), foundation (one line). Only featured courses get a page: MECH 355, MECH 438, MECH 313. The other 18 notes stay in src/content/coursework as source but are not built.
- Featured pages use the same four sections: The course, What I did, What I learned, Skills and tools, then linked project cards and at most three key equations (`keyEquations`). `npm run check:content` enforces the sections and the tier.
- A term is shown only when confirmed (`term`). Confirmed: MECH 313, 355, 438 and ECEG 205, in progress Fall 2026. Disclaimer box, "requires confirmation" badges, illustrative figures and hypothetical worked examples were removed from the public site.
- Learning page renamed "AI + Learning" in the menu. The "Limits" section folded into a sixth ground rule ("Keep my judgment").
- Terms come from the unofficial transcript (U:\private\Projects LinkedIN_Resume, dated 10-13): every course row shows its term; MATH 201 shows AP credit. Grades and GPA are never published. MECH 205, FOUN 098 and RELI 100 added; ENGR 099 (0-credit audited seminar) left off. Physics is listed as PHYS 211P, as on the transcript. Skills lines follow the 2026-2027 catalog. Research record: research/coursework/TRANSCRIPT_COURSE_RESEARCH.md.
- Mathematics minor line (MATH 211, 212, 227, 303) shown at Brewster's statement; the courses meet the catalog's written minor rules, but the transcript does not list a declared minor.
