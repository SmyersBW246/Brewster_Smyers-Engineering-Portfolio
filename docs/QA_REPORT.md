# QA report · 30 October 2026

## Result

Private review build passes. Public launch has not occurred. The functional website has 36 generated pages: home, indexes, eight project studies, 21 course notes, About, Resume, Contact and 404.

## Automated validation

- Root deployment: 36 pages, 602 internal references, 43 image references, 185 rendered math expressions; zero errors.
- Repository-prefix deployment at /portfolio: same 36 pages and 602 references; zero errors. Rebuilt at root afterward for the included local preview.
- All 110 course equation cards render with KaTeX throwOnError=true. Equation definitions retain variables, units, assumptions and use cases. Inline/body math contributes the additional expressions.
- Project and course frontmatter passes schema/build checks. Eight project records and 21 subject notes are present; four selected projects have genuine images. Generated drone/wheel imagery is absent from public assets.
- Local route, fragment, image, PDF, MATLAB and CSS/font references resolve. Each HTML page has one H1, a language and description; images have nonempty alt text; no math-error markers or public em dashes were found.
- Three project briefs rendered and visually inspected at page scale; all are one page with extractable text. MATLAB download is byte-identical to the supplied eleven-file package.
- Node 24.22.1; Astro 7.4.4; npm dependencies and lockfile present. Website build and content checks passed.

## Browser review

Used the managed preview through the supported cloud browser. Homepage desktop composition reviewed at approximately 1348 × 926. Mobile homepage/course reviewed in 390px iframes (375px inner layout excluding scrollbar); tablet homepage reviewed at 768px (753px inner layout). These are responsive viewport simulations, not physical-device tests.

A phone-heading overflow was found and corrected. Final mobile homepage/course and tablet homepage document widths equal their scroll widths. Mobile Menu expanded with the correct five links. Coursework search for MECH 438 returned one note. Composite-concept project filtering returned the drone and bicycle mount. Homepage images and course math were visibly rendered. The temporary QA harness was removed from source/public output.

Accessibility foundation: semantic landmarks, skip link, focus-visible styles, labeled search, keyboard-accessible links/buttons, menu expanded state and Escape handling, reduced-motion rule, print stylesheet, image alt text and KaTeX MathML. No comprehensive assistive-technology audit or Lighthouse score is claimed.

## Content review and limits

Ski jump provisionally replaces the undocumented line-following robot. Chair CAD substitutes for the unavailable finished-chair photograph. Each project separates completed work, preliminary analysis and planned testing. No new aircraft-code runtime, CFD, flight, fatigue or structural proof testing was performed in this run.

Most course enrollment/term/completion remains unconfirmed. Notes are labeled accordingly. The 2025–2026 archived catalog is retained from the research package and cannot establish a student's personal attendance. Four insufficiently verified records remain withheld. Course diagrams and examples are explanatory, not fabricated student results. Course notes retain approximately 610–748 principal words, apart from final targeted editorial refinements that remain 623–746 words.

The resume/contact details match the supplied September 27 PDF, whose currentness requires confirmation. Its PDF contains a phone number and email. No contact form, analytics or server-side account feature is implied.

The official Astro deployment guide source and GitHub workflow documentation were successfully retrieved. The web search service failed and the Astro docs website endpoint returned 403; official GitHub source supplied the guide. All external source links retain researched URLs, but comprehensive live external-link reachability was not tested. No GitHub authentication, remote repository, Actions execution or public Pages URL was verified.

## Launch gates

Resolve docs/REVIEW_QUESTIONS.md, confirm current resume and contact exposure, approve publication explicitly, connect a private GitHub repository and confirm its Pages eligibility, then run the manual publication workflow. Public repository visibility requires separate approval. Before launch, decide whether to remove noindex,nofollow. This tag is not access control.
