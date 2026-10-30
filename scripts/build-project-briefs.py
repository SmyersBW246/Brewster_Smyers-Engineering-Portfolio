"""Regenerate sanitized project briefs from verified portfolio content.
Requires reportlab, PyYAML and Pillow. No private contact details are included.
"""
from pathlib import Path
from xml.sax.saxutils import escape
import re,yaml
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
ROOT=Path(__file__).resolve().parents[1]
FONT='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
BOLD='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
pdfmetrics.registerFont(TTFont('DejaVu',FONT));pdfmetrics.registerFont(TTFont('DejaVuBold',BOLD))
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='Title2',fontName='DejaVuBold',fontSize=23,leading=28,textColor=HexColor('#142a35'),spaceAfter=12))
styles.add(ParagraphStyle(name='Deck2',fontName='DejaVu',fontSize=10,leading=15,textColor=HexColor('#384f5b'),spaceAfter=15))
styles.add(ParagraphStyle(name='Body2',fontName='DejaVu',fontSize=9,leading=14,spaceAfter=9,textColor=HexColor('#253845')))
styles.add(ParagraphStyle(name='Head2',fontName='DejaVuBold',fontSize=11,leading=16,spaceBefore=13,spaceAfter=6,textColor=HexColor('#142a35')))
styles.add(ParagraphStyle(name='Caption2',fontName='DejaVu',fontSize=8,leading=11,spaceAfter=8,textColor=HexColor('#49616b')))

records={
'outdoor-landmark-chair': ('Outdoor_Chair_Project_Brief.pdf',[
('Design and fabrication','I developed the dimensions and braced frame in SolidWorks, selected pressure-treated lumber, and cut, assembled, sanded and finished the structure independently. The approximately 6 ft 6 in-high, 8 ft-wide and 8 ft-deep chair was built in two days for approximately $1,000.'),
('Analysis and evidence','The archived SolidWorks plot reports approximately 1.78 MPa maximum von Mises stress for the modeled load case. The applied numerical force and full material, connection and mesh setup are unavailable. The plot documents preliminary modeling rather than a verified timber-and-joint load rating.'),
('Outcome','The completed chair remains in fraternity use. It seats four to five people and serves as a backdrop for larger group photographs. Its related engineering principles include load paths, bracing, joint behavior and assembly sequence. This was an independent project, separate from coursework.')]),
'autonomous-underwater-vehicle': ('AUV_Project_Brief.pdf',[
('My contribution','My individual Phase 1 work compared streamlined vehicles, multi-thruster systems and underwater gliders before proposing a symmetric 1.10 m-long hull with a 0.20 m maximum diameter. Rear propulsion, auxiliary thrusters and forward sensing are proposed for navigating confined passages.'),
('Preliminary hydrostatics','For an idealized fully submerged hull in freshwater at 1,000 kg/m³ and a 5 m depth, the archived calculations report 49.1 kPa external gauge pressure, 27.2 L displacement, 267 N buoyant force and 27.2 kg neutral-buoyancy mass. The stated longitudinal center of buoyancy is 0.501 m aft of the nose. The original hull integration files are needed to reproduce its volume and center.'),
('Status and limits','Individual literature review, hull concept and preliminary calculations are complete; the team phase is in progress in Fall 2026. The flow sketch is a qualitative prediction, not CFD or a measurement. No constructed vehicle, autonomous navigation or underwater-test result is claimed.')]),
'aerobatic-biplane': ('Biplane_Model_Notes.pdf',[
('Geometry and shared inputs','The SolidWorks concept is being developed alongside a modular MATLAB analysis adapted from an earlier aircraft workflow. Shared geometry, weights and mission assumptions connect the modules. The reference configuration uses 20 ft span, 127.5 ft² total wing area, 17 ft 9 in overall length and 260 hp sizing power, based on the Aviat Pitts S-2C. The project geometry is not an exact production-aircraft model.'),
('Implemented methods','The ten MATLAB functions and one representative NACA 0012 data file cover wing and tail geometry, analytical section data, finite-wing lift, component drag, phase fuel and weight bookkeeping, power requirements, preliminary takeoff and landing estimates, and longitudinal trim. Internal consistency checks are included. Their presence does not prove that this source review executed or passed them.'),
('Status and next steps','The output is developing CAD geometry and a preliminary analysis workflow. Next steps include reconciling CAD and analysis geometry and replacing estimated mass stations and areas with CAD properties. The section polar is analytical teaching data; no wind-tunnel or flight-test validation, structural substantiation or dynamic flight model is claimed.')])}

def footer(c,doc):
 c.setStrokeColor(HexColor('#d4dfdf'));c.line(48,42,564,42)
 c.setFont('DejaVu',7);c.setFillColor(HexColor('#49616b'))
 c.drawString(48,29,'Brewster Smyers | Engineering portfolio | 30 October 2026')
 c.drawRightString(564,29,f'{doc.page}')

for slug,(name,sections) in records.items():
 text=(ROOT/'src/content/projects'/f'{slug}.md').read_text();_,head,_=text.split('---',2);d=yaml.safe_load(head)
 path=ROOT/'public/documents'/name
 story=[Paragraph('BREWSTER SMYERS / PROJECT BRIEF',styles['Caption2']),Paragraph(escape(d['title']),styles['Title2']),Paragraph(escape(d['period']+' · '+d['role']),styles['Caption2']),Paragraph(escape(d['summary']),styles['Deck2'])]
 image=ROOT/'public'/d['hero'].lstrip('/')
 from PIL import Image as PILImage
 with PILImage.open(image) as im:w,h=im.size
 iw=min(516, w*170/h); ih=iw*h/w
 story.extend([Image(str(image),width=iw,height=ih),Spacer(1,7),Paragraph(escape(d['heroCaption']),styles['Caption2'])])
 for heading,body in sections:story.append(KeepTogether([Paragraph(escape(heading),styles['Head2']),Paragraph(escape(body),styles['Body2'])]))
 source=('Student-supplied engineering portfolio, 27 September 2026; associated résumé.' if slug!='aerobatic-biplane' else 'Student-supplied SolidWorks screenshot and bws013 MATLAB source archive; Aviat Pitts S-2C reference specifications: aviataircraft.com/fusion_element/pitts-specs/.')
 story.append(Paragraph(escape('Evidence basis: '+source),styles['Caption2']))
 doc=SimpleDocTemplate(str(path),pagesize=(612,792),leftMargin=48,rightMargin=48,topMargin=40,bottomMargin=56,title=d['title']+' | Brewster Smyers',author='Brewster Smyers')
 doc.build(story,onFirstPage=footer,onLaterPages=footer)
 print(path.name)
