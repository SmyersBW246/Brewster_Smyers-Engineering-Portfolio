"""One-time, reproducible migration of verified portfolio and course research.
Routine updates belong in the Markdown files, not this migration script.
Original evidence stays outside this public website source directory.
"""
from pathlib import Path
from html.parser import HTMLParser
from html import unescape
import json, re, shutil
import yaml
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
WORK = ROOT.parent
OLD = WORK / 'portfolio'
RESEARCH = WORK / 'work/coursework-package/Brewster_Smyers_Bucknell_Coursework_Research_Package'

def clean(s):
    return str(s).replace('\u2014', ', ').replace('\u2011', '-').replace(';not', '; not').replace(';course', '; course')

class ToMarkdown(HTMLParser):
    def __init__(self): super().__init__(); self.parts=[]; self.links=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='p': self.parts.append('\n\n')
        elif tag=='strong': self.parts.append('**')
        elif tag=='em': self.parts.append('*')
        elif tag=='li': self.parts.append('\n- ')
        elif tag=='br': self.parts.append('  \n')
        elif tag=='a': self.parts.append('['); self.links.append(a.get('href',''))
        elif tag in ['td','th']: self.parts.append(' ')
        elif tag=='tr': self.parts.append('\n')
    def handle_endtag(self, tag):
        if tag=='p': self.parts.append('\n\n')
        elif tag=='strong': self.parts.append('**')
        elif tag=='em': self.parts.append('*')
        elif tag=='a':
            href=self.links.pop() if self.links else ''
            href=href.replace('https://bucknell.digication.com/brewster-smyers/', '../../projects/')
            self.parts.append(']('+href+')')
    def handle_data(self, data): self.parts.append(data)
    def convert(self, text):
        self.feed(text)
        return clean(re.sub(r'\n{3,}', '\n\n', ''.join(self.parts)).strip())

def write_md(path, data, body):
    path.write_text('---\n'+yaml.safe_dump(data, allow_unicode=True, sort_keys=False, width=1000)+'---\n\n'+clean(body).strip()+'\n')

def asset(name, output=None, crop=None):
    source=OLD/'assets'/name
    output=output or Path(name).stem+'.webp'
    dest=ROOT/'public/images'/output
    if source.suffix.lower()=='.svg':
        dest.write_text(clean(source.read_text())); return '/images/'+output
    im=Image.open(source).convert('RGB')
    if crop: im=im.crop(crop)
    if im.width>1800: im.thumbnail((1800,2400))
    im.save(dest, 'WEBP', quality=90, method=6)
    return '/images/'+output

def figure(src,alt,caption): return {'src':src,'alt':alt,'caption':caption}

portrait=asset('portrait.jpg','portrait.webp')
chair=asset('chair-solidworks-model.jpg','chair-cad.webp')
stress=asset('chair-solidworks-structural-simulation.jpg','chair-stress.webp')
auv=asset('auv-preliminary-hull-geometry.jpg','auv-hull.webp')
flow=asset('auv-qualitative-flow-prediction.jpg','auv-flow.webp')
biplane=asset('biplane-solidworks-views.png','biplane-isometric.webp',(0,318,613,787))
side=asset('biplane-solidworks-views.png','biplane-side.webp',(0,0,745,308))
front=asset('biplane-solidworks-views.png','biplane-front.webp',(0,797,677,1096))
drone=asset('drone-concept.png','drone-concept.webp')
wheel=asset('wheel-concept.png','wheel-concept.webp')
bike=asset('bicycle-mount-preliminary-reference-sketch.png','bicycle-mount-study.webp')
ski=asset('ski-jump-assembled-ramp.jpg','ski-ramp.webp')
ski_frame=asset('ski-jump-timber-frame.jpg','ski-frame.webp')
ski_use=asset('ski-jump-in-use-video-still.jpg','ski-in-use.webp')

settings={
 'outdoor-landmark-chair':dict(shortTitle='Outdoor Landmark Chair',category='Design & build',order=1,featured=True,hero=chair,role='Independent design and fabrication',period='Completed',tools=['SolidWorks','Structural modeling','Carpentry'],facts=[{'value':'2 days','label':'Independent build'},{'value':'~$1,000','label':'Project budget'},{'value':'8 × 8 ft','label':'Approximate footprint'}],figures=[figure(stress,'Archived SolidWorks chair stress plot.','Archived model: maximum von Mises stress approximately 1.78 MPa. Applied force and full study setup are not retained. This is not a certified load rating.')],document='/documents/Outdoor_Chair_Project_Brief.pdf',courses=['mech-353']),
 'aerobatic-biplane':dict(shortTitle='Aerobatic Biplane',category='Aircraft & fluids',order=2,featured=True,hero=biplane,role='CAD development and analysis adaptation',period='Fall 2026 · In development',tools=['SolidWorks','MATLAB','Aircraft geometry'],facts=[{'value':'2 seats','label':'Concept configuration'},{'value':'127.5 ft²','label':'Total wing reference area'},{'value':'10 + 1','label':'MATLAB functions + data file'}],figures=[figure(side,'Actual side view of the SolidWorks biplane concept.','Side view extracted from the supplied CAD screenshot. Geometry remains in development.'),figure(front,'Actual front view of the SolidWorks biplane concept.','Front view showing the biplane configuration. No structural or aerodynamic validation is implied.')],document='/documents/Biplane_Model_Notes.pdf',courses=['mech-438']),
 'autonomous-underwater-vehicle':dict(shortTitle='Underwater Vehicle',category='Aircraft & fluids',order=3,featured=True,hero=auv,role='Individual Phase 1, followed by team development',period='Fall 2026 · In progress',tools=['Hull idealization','Hydrostatics','Technical research'],facts=[{'value':'1.10 m','label':'Concept hull length'},{'value':'27.2 L','label':'Reported idealized displacement'},{'value':'267 N','label':'Preliminary buoyant force'}],figures=[figure(flow,'Qualitative predicted streamlines around the underwater hull.','Qualitative flow prediction from the original portfolio. This is an engineering sketch, not CFD or an experimental measurement.')],document='/documents/AUV_Project_Brief.pdf',courses=['mech-313']),
 'micro-drone-chassis':dict(shortTitle='Micro-Drone Chassis',category='Composite concepts',order=4,featured=True,hero=drone,role='Preliminary mechanical design and test planning',period='In development',tools=['Composite manufacturing','CAD planning','Electronics packaging'],facts=[{'value':'102 mm','label':'Provisional frame footprint'},{'value':'2 routes','label':'Molded carbon and printed polymer'},{'value':'Planned','label':'Fabrication and flight testing'}],figures=[],courses=['mech-355']),
 'automotive-wheel':dict(shortTitle='Automotive Wheel',category='Design & build',order=5,featured=False,hero=wheel,role='Concept geometry and parametric modeling',period='Concept development',tools=['SolidWorks','Rim sections','Hub interfaces'],facts=[{'value':'Mach-E GT','label':'Intended application'},{'value':'Parametric','label':'Geometry approach'},{'value':'Planned','label':'Structural validation'}],figures=[],courses=['mech-202']),
 'bicycle-computer-mount':dict(shortTitle='Bicycle Computer Mount',category='Composite concepts',order=6,featured=False,hero=bike,role='Modular accessory concept and process study',period='Preliminary design',tools=['Product design','Composite manufacturing','Modular interfaces'],facts=[{'value':'Modular','label':'Replaceable retention insert'},{'value':'2 routes','label':'Molded and printed comparison'},{'value':'Planned','label':'Retention and vibration tests'}],figures=[],courses=['mech-355']),
 'backyard-ski-jump':dict(shortTitle='Backyard Ski Jump',category='Design & build',order=7,featured=False,hero=ski_use,role='Independent construction and practical iteration',period='March 2020 · Completed',tools=['Timber construction','Practical testing','Iteration'],facts=[{'value':'2020','label':'Early independent project'},{'value':'~2 days','label':'Build time'},{'value':'Iterated','label':'Angle, approach and access'}],figures=[figure(ski_frame,'Original timber frame for the backyard ski feature.','Initial timber frame, March 2020.'),figure(ski,'Assembled ramp with surface panels.','Assembled ramp with modular surface panels. This predates my formal engineering coursework.')],courses=[]),
}
pages=json.loads((OLD/'pages.json').read_text())
for page in pages:
    slug=page['slug']
    if slug not in settings: continue
    data=settings[slug].copy()
    data.update(title=page['title'],summary=page['intro'],status=page['eyebrow'].split(' · ')[0],concept=slug in ['micro-drone-chassis','automotive-wheel'],heroAlt=page['hero_caption'],heroCaption=page['hero_caption'])
    if data['concept']:
        data['heroCaption']='AI-generated concept illustration. Not final CAD, a manufactured prototype, or validation evidence.'
        data['heroAlt']='Clearly labeled conceptual illustration of '+data['shortTitle'].lower()+'.'
    body=[]
    for section in page['sections']:
        heading=section['heading']
        if heading.lower() in ['supporting files','supporting documentation']: continue
        body.append('## '+heading+'\n\n'+ToMarkdown().convert(section['html']))
    if slug=='aerobatic-biplane':
        body.append('## Reference configuration\n\nSpan, total wing area, length and power are based on the [Aviat Pitts S-2C](https://aviataircraft.com/fusion_element/pitts-specs/). The CAD concept includes project-specific geometry and is not an exact production-aircraft model.')
    if slug=='micro-drone-chassis':
        body.append('## Current documentation\n\nThe 29 October 2026 funding proposal records the latest procurement scope. Earlier design and connection documents provide preliminary background. Fabrication, structural testing and flight performance have not been demonstrated.')
    write_md(ROOT/'src/content/projects'/f'{slug}.md', data, '\n\n'.join(body))

categories={
 'MECH 355':'Materials & manufacturing','ENGR 240':'Materials & manufacturing',
 'MECH 438':'Aircraft design','MECH 313':'Fluids & energy','MECH 213':'Fluids & energy',
 'MECH 202':'Design & mechanics','MECH 220':'Design & mechanics','MECH 252':'Design & mechanics','MECH 353':'Design & mechanics',
 'ENGR 214':'Computing & data','ECEG 205':'Computing & data','ANOP 102':'Computing & data',
 'ENGR 100':'Engineering foundations','CHEM 203':'Engineering foundations','PHYS 211P':'Engineering foundations','PHYS 211':'Engineering foundations',
}
connections={
 'MECH 355':('My lab activities include bronze casting, a ring formed from a quarter, composite pressing and bonding, welding, and CNC work for injection-molding tooling. Visits to Lycoming Engines and a metalworking facility added industrial context.',['micro-drone-chassis','bicycle-computer-mount']),
 'MECH 438':('My course work includes Spitfire and aerobatic-biplane mathematical models and reports. The biplane connects my SolidWorks geometry with a developing MATLAB analysis.',['aerobatic-biplane']),
 'MECH 313':('My individual AUV study applies literature review, hull idealization, hydrostatics and buoyancy reasoning. The team phase is in progress in Fall 2026.',['autonomous-underwater-vehicle']),
}

def sections(text,level='##'):
    chunks=re.split(r'^'+re.escape(level)+r' (.+)\n',text,flags=re.M)
    return [(chunks[i],chunks[i+1].strip()) for i in range(1,len(chunks),2)]

course_records=[]
for folder in sorted((RESEARCH/'01_COURSE_PAGES').iterdir()):
    if not folder.is_dir(): continue
    meta=json.loads((folder/'COURSE_METADATA.json').read_text())
    code=meta['course_code']
    if code in ['ENGR 099','FOUN 098','RELI 100','MECH 205']: continue
    ref=(folder/'TECHNICAL_REFERENCE.md').read_text()
    page=(folder/'PORTFOLIO_PAGE.md').read_text()
    slug=code.lower().replace(' ','-')
    principles=[]
    for h,t in sections(ref,'###'):
        if re.match(r'P\d',h):
            para=t.split('\n\n')[0]
            para=re.sub(r'\s*\[[^\]]+\]', '',para)
            # Keep one meaningful introductory sentence from the reference.
            intro=re.split(r'(?<=[.!?])\s+(?=[A-Z])',para)[0]
            principles.append('**'+re.sub(r'^P\d+[.:]?\s*','',h)+'** '+intro)
    eqs=[]
    for h,t in sections(ref,'###'):
        if not re.match(r'E\d',h): continue
        match=re.search(r'\$\$(.*?)\$\$',t,re.S)
        if not match: continue
        after=t[match.end():].strip().split('\n\n')[0]
        after=re.sub(r'\s*\[[^\]]+\]', '',after)
        eqs.append({'title':clean(re.sub(r'^E\d+[.:]?\s*','',h)),'latex':match.group(1).strip(),'note':clean(after)})
    if len(eqs)>4: eqs=eqs[:4]
    example=''
    for h,t in sections(ref,'###'):
        if re.match(r'D\d|R\d',h) or 'worked' in h.lower() or 'example' in h.lower():
            if len(t)>100:
                example=re.sub(r'\s*\[[^\]]+\]', '',t)
                break
    # Do not publish an unrendered math block or the internal editorial notes.
    example=re.sub(r'\$\$.*?\$\$','',example,flags=re.S).strip()
    example=re.sub(r'\n{3,}','\n\n',example)
    if len(example)>1500: example=example[:1500].rsplit('\n\n',1)[0]
    connection,related=connections.get(code,('',[]))
    data={
        'code':code,'title':meta.get('display_title') or meta['course_title'],
        'summary':clean(meta.get('official_description_paraphrase') or 'Selected principles and applications from the official Bucknell course scope.'),
        'category':categories.get(code,'Mathematics & analysis' if code.startswith('MATH') else 'Engineering foundations'),
        'catalog':meta['official_source_url'],'catalogYear':str(meta.get('catalog_year','2025-2026')),
        'order':{'MECH 355':1,'MECH 438':2,'MECH 313':3}.get(code,10),
        'documented':bool(connection),'connection':connection,'relatedProjects':related,
        'topics':[clean(x) for x in meta.get('documented_subject_areas',[])[:6]],
        'equations':eqs,'figures':[],
        'sources':[{'title':s['title'],'url':s['url']} for s in meta.get('source_records',[]) if s.get('url') and not s['url'].startswith('file:')][:4]
    }
    # Exact explanatory diagrams from the supplied research are optional, labeled teaching aids.
    candidates=[a for a in meta.get('assets',[]) if a.get('filename','').endswith('.svg') and 'illustr' in (a.get('asset_type','')+' '+a.get('evidence_category','')+' '+a.get('filename','')).lower()]
    if candidates:
        a=candidates[0];s=folder/a['filename']
        if s.exists():
            dest=slug+'-illustration.svg'
            (ROOT/'public/images'/dest).write_text(clean(s.read_text()))
            data['figures']=[figure('/images/'+dest,clean(a.get('alt_text') or a.get('caption','Illustrative course diagram')),clean(a.get('caption','Illustrative technical relationship. Not a measured student result.')))]
    body='## Core ideas\n\n'+'\n\n'.join(principles[:4])
    if example: body+='\n\n## Representative example\n\nThis is a worked teaching example using assumed inputs, separate from my project results.\n\n'+example
    body+='\n\n## Engineering context\n\n'+(' '.join(data['topics'][:5]).capitalize()+'.' if data['topics'] else data['summary'])
    write_md(ROOT/'src/content/coursework'/f'{slug}.md',data,body)
    course_records.append({'code':code,'slug':slug,'documented':bool(connection),'personalStatus':meta.get('completion_status') or meta.get('enrollment_status'),'artifact':meta.get('recommended_authentic_artifact')})

# This review record stays outside the public repository and deployment.
review=WORK/'work/migration-review';review.mkdir(exist_ok=True)
(review/'course-status-review.json').write_text(json.dumps(course_records,ensure_ascii=False,indent=2))
(review/'ASSET_PROVENANCE.md').write_text('# Asset provenance\n\nProject figures are extracted from the student-supplied portfolio and CAD screenshot. The three biplane crops separate the original side, isometric and front views without changing their geometry. Drone and wheel illustrations are labeled conceptual. Course diagrams are exact explanatory assets from the supplied research package, with their illustrative captions. No grades, degree-audit screenshots or complete academic reports are included in the public site.\n')
print(f'Prepared {len(settings)} projects, {len(course_records)} course notes and {len(list((ROOT/"public/images").glob("*")))} image assets.')
