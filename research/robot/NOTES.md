# Line-following robot page: draft notes (updated 2026-11-17)

Page: src/content/projects/line-following-robot.md. Status: draft, not committed, not published.

## Sources used
- Outlook email "ECEG Robot Photos" (2026-11-17): 3 photos (saved here as email-image0/1/2), plus his notes: use LDR + potentiometer, talk about adjusting values to maximize speed (extra credit).
- Moodle ECEG 205 > Robot Project: "Robot Project - Final ePortfolio Assignment" rubric + prompts, Week 1-4 deliverables (saved in course-files/ECEG 205 - Electronics/07 Robot Project).
- **Code shown on the page (his own):** U:\private\Y3_S1\ECEG 101\Robot Project Code (netspace bws013), four sketches Day1..Day4. Embedded in full as collapsible panels under Evidence > Code, and zipped to public/documents/Robot_Arduino_Code.zip. If he edits a sketch, rerun the fill (replace the code block) and rebuild the zip.
- Dozuki guide PDF "Line Following Robot - Red Chassis".

## 2026-11-17 condense pass
- Page cut from about 1,050 to about 630 words; five sections kept.
- Week 4 application now comes from his Day 4 code: potentiometer (A0) sets speed live, velo = reading x 250/1023; LDR (A1) above 4.0 V = lights off, robot stops.
- Removed: the Python serial logger, tuning changelog and the "9,600 baud ~54 ms" hidden-delay story. That came from course-files/.../Robot Project Code V2 (LineFollowing_Fast.ino, serial_logger.py, TUNING.md), which a Claude session wrote; his final Day 4 sketch does not use it. Brewster confirmed 2026-11-17 he did not use the logger: keep it off the page. The only speed tuning was the potentiometer (Day 4); the page must not imply tuning constants in code.

## To confirm with Brewster before publishing
- Group members and which parts were his (page says he worked on all four stages and designed/printed the sensor bracket).
- Final lap time, whether the group won the speed extra credit.
- The one-line takeaway under Status is drafted, not his words.

## Still to add
- Run video, application write-up after the Nov 18 demo.
