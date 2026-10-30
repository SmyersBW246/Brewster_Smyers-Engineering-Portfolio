# Project content handoff

Reviewed and updated 30 October 2026.

## Files delivered

- Eight Markdown case studies under `src/content/projects/`.
- Three sanitized one-page supporting PDFs under `public/documents/`: `Outdoor_Chair_Project_Brief.pdf`, `AUV_Project_Brief.pdf`, `Biplane_Model_Notes.pdf`.
- `public/documents/Biplane_MATLAB.zip`, copied byte-for-byte from the previously supplied source archive.
- `scripts/build-project-briefs.py`, the optional PDF regeneration script.

## Editorial decisions

1. The four featured projects are Outdoor Landmark Chair, Aerobatic Biplane, Autonomous Underwater Vehicle and Backyard Ski Jump. The ski jump substitutes for the robot because it has authentic construction photos and a use-video still. The supplied portfolio and recovered sources do not contain a robot photograph, code, report or documented result. Its course association is also unconfirmed. No robot case study was invented.
2. Generated drone and wheel images are removed from all content references. Their `hero`, `heroAlt` and `heroCaption` fields are empty strings. UI must conditionally omit empty hero imagery. They remain accurately labeled preliminary project notes.
3. Bicycle mount imagery is a clearly described preliminary engineering reference sketch, not a fabricated photograph, completed CAD output or manufactured object.
4. Manufacturing is an additional process page based only on user-confirmed activities. It has no image or fabricated process result. Lab participation does not establish machine qualification or independent CNC programming responsibility.
5. Chair is explicitly independent. A related mechanics course link is an engineering connection, not evidence of class assignment.
6. Separate physical evidence from analysis throughout: chair stress plot is preliminary modeling, AUV flow sketch is qualitative, biplane section polar is analytical teaching data, and composite comparison results remain planned.

## Evidence retained and limits

| Project | Source evidence | Limits preserved |
| --- | --- | --- |
| Chair | Supplied engineering portfolio p2; résumé; archived CAD/stress figure | No original study setup or numerical force, finished-chair photo, certified timber/joint load rating or proof-load test |
| AUV | Supplied engineering portfolio p3; preliminary hull and qualitative-flow figures | No original hull integration data or final team report; no fabrication, autonomy or underwater test claim |
| Biplane | Supplied SolidWorks screenshot; source ZIP; earlier complete code review | No complete program execution claimed in this review; no wind-tunnel, flight-test or structural validation |
| Ski jump | Portfolio p4; original frame/assembled photos and video still | Eighth-grade practical build, no structural or instrumented test claim |
| Drone | 27 Oct design study, 28 Oct connection guide, 29 Oct funding proposal | Latest procurement scope is proposal; no fabrication/flight outcome |
| Wheel | Existing modeling objective and supplied project history | No approved fitment, structural, fatigue or impact result |
| Mount | Preliminary design study and reference sketch | Interfaces, process, retention, vibration and fatigue testing remain planned |
| Manufacturing | Direct student statements reproduced in coursework evidence notes | Exact term/status, process parameters, factory identity and lab photos remain unconfirmed |

Source materials were recovered from sibling workspace `dc8b7c97b290`. Its source-audit/engineering-evidence.md, source-audit/biplane-evidence.md and source-audit/content-qa.md preserve the earlier complete document/code review. Do not treat those source reviews as a fresh model execution. Public PDFs are new concise summaries, not the original academic reports or private records. No phone number, transcript, grade or private academic report was copied into these project deliverables.

## Checks performed

- Parsed all eight YAML frontmatters and verified exactly four featured projects.
- Verified every nonempty project hero/figure/document path exists.
- Checked every Markdown local supporting download path against its project route.
- Verified the MATLAB archive is identical by SHA-256 to the supplied archive and contains eleven files.
- Verified each generated PDF is one page and has extractable expected text.
- Rendered and visually inspected all three PDFs at 1,100 px page height. Typography, image proportions, tables/paragraphs, footer and page bounds passed; no clipping or overlap observed.
- Final site build, route checks, responsive review and UI handling of no-image projects belong to the parent implementation.

## Consolidated missing evidence

After implementation, request one grouped response for:

- Finished-chair photograph and original simulation setup, if retained.
- Robot photo/video, control code, role, measured outcome and correct class.
- Manufacturing bronze and ring photographs, optionally starting-pattern/process photos, plus one real challenge/change/result and correct term/status.
- Current wheel CAD screenshot/drawing and drone CAD/physical work when available.
- Original AUV calculation definition and later team results, with individual contribution identified.

Do not let these nonblocking inputs stop the complete private draft.
