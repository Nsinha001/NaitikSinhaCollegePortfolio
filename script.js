var M=[
{id:"design",n:"Design",lcd:"DESIGN  f/2.8  1/60  ISO100",lede:"I’m a first-year Mechanical Engineering student in the CU Boulder honors program (class of 2030). I like to model a thing in CAD before anyone builds it.",h:"Things I model before they’re built.",
 cards:[["LEGO Technic F1 W14 E Pull-Back","MCEN 1026 · SOLIDWORKS","My individual project: modeling the Mercedes-AMG F1 pull-back (set 42165) as parts and an assembly.","Why: a pull-back motor is a clean lesson in stored energy turning into motion."],["Asteroid mining project","Colorado Space Business Roundtable","As a Student Ambassador I worked on an asteroid mining project.","Why: space engineering only happens if the business case holds up."],["Lockheed Martin / CSBR internship","Summer 2024","A summer internship through the Colorado Space Business Roundtable.","Why: my first look at how aerospace teams work."],["Rocky Mountain Case Competition","McKinsey / Leeds","A market-entry case for The Brick Oven’s West Coast expansion.","Why: engineers also need structured thinking under a deadline."]],
 tools:"Tools: SOLIDWORKS · CAD · technical drawing"},
{id:"projects",n:"Projects",lcd:"PROJECTS  f/5.6  1/90  ISO200",h:"Cases and builds.",lede:"Problems with a deadline and a client, even when the client is fictional.",cards:[],tools:"",extra:`<section class="case"><small>Case competition · 2026</small><h2>The Brick Oven goes west</h2>
<p>At the Rocky Mountain Case Competition, run by McKinsey and Leeds, our team of five got a market-entry case. A fictional pizza chain, The Brick Oven, wanted to expand to the West Coast. We had a ten-minute slot: about eight minutes to present and two for questions.</p>
<div class="steps"><article class="card"><h2>1. Phase the rollout</h2><p>Open a few restaurants in safer areas first, study the data, then expand into larger and more competitive towns.</p></article>
<article class="card"><h2>2. Screen the suburbs</h2><p>We compared 13 candidate suburbs against a Colorado benchmark: household income of $95K–$150K and a median age of 34.6–45.6, the profile of towns like Golden and Evergreen.</p></article>
<article class="card"><h2>3. Shortlist sites</h2><p>Our working shortlist included Hood River, Issaquah, Sherwood, and Gig Harbor.</p></article></div>
<p><b>Candidate suburbs</b> (pick a state)</p><div class="sbar"><button class="sb" data-s="CA">California</button><button class="sb" data-s="OR">Oregon</button><button class="sb" data-s="WA">Washington</button></div><div class="chips" id="chips"></div></section>
<p class="more"><button data-g="design">More builds: LEGO F1 pull-back and asteroid mining ▶</button></p>`},
{id:"research",n:"Research",lcd:"RESEARCH  f/8  1/250  ISO100",lede:"I like asking why something works, then measuring it.",h:"Asking why, then measuring.",
 cards:[["CASE @ MSU Denver","Research intern · Summer 2024","Worked under Dr. Michael Jacobs on energy drinks and sunscreen, using UV-Vis spectrophotometry and pH analysis.","Why: light absorbance turns an invisible property into a number."],["Denver Museum of Nature and Science","Docent volunteer · Jan 2024–now","Explaining exhibits to visitors.","Why: explaining a thing is the best test of understanding it."],["Academics","Peak to Peak Charter School","4.3 GPA, Dean’s List all four years, AP Scholar, Peak Scholar with Distinction.",""]],tools:""},
{id:"photo",n:"Photo",lcd:"PHOTO  f/2.0  1/1000  ISO400",lede:"Soccer is what I play and what I shoot. I’ve gone from the school yearbook to a team sideline.",h:"The soccer club’s photographer.",
 cards:[["ALBION SC Boulder County","Media and Marketing Intern · Jun 2026–now","Team photographer for the USL2, USLA, and USLW squads.","Why: game days are unpredictable, so I learn to anticipate."],["World of Sports Photography","Photographer · Dec 2025–now","Sports coverage as part of a working photo team.",""],["SinhaShoots","Founder · Aug 2023–Jul 2026","A student photography business I started and ran through high school.",""],["Yearbook","Photo Editor","Edited the photo section and earned a Yearbook Excellence Award in 10th grade.",""]],
 tools:"Tools: Lightroom · Photoshop · Premiere Pro",
 sheet:[["ALBION SC · match day","#27567a","#0f2236"],["Corner kick","#2c6b4b","#0f2a1d"],["Warm-up","#7a4a2c","#2a170d"],["Yearbook spread","#6a3a7a","#22112b"],["Golden hour","#a1692a","#3a2208"],["Sideline","#2c5d6b","#0e2329"]]},
{id:"speech",n:"Speech",lcd:"SPEECH  f/1.4  1/125  ISO800",lede:"In extemporaneous speaking you get a question, prepare quickly, and make an argument out loud. It taught me to think clearly while people are watching.",h:"Thinking out loud, on a clock.",
 cards:[["NSDA 4A State Champion, 2026","Extemporaneous Speaking","Won the Colorado 4A state title in Extemp.",""],["NSDA Degree of Distinction","Peak to Peak Charter School","Recognized for sustained competition and service.",""],["Speech Captain","Peak to Peak","Led our team’s practice and prep.",""],["Presidents Leadership Class","CU Boulder · PRLC 1810","Leadership coursework, including speeches and essays on big ideas.",""],["National Art Honor Society","Publicity Lead · Aug 2023–now","Ran publicity for the chapter.",""]],tools:"Languages: English · Hindi · Oriya · Spanish (limited)"},
{id:"contact",n:"Contact",lcd:"CONTACT  f/1.8  1/30  ISO1600",h:"Let’s make a frame together.",lede:"Whether it’s a design problem, a game to shoot, or a speech to prep, I’d like to hear about it.",
 cards:[["LinkedIn","The best way to reach me","Message me at <a href=\"https://www.linkedin.com/in/naitiksinha\" target=\"_blank\" rel=\"noopener\">linkedin.com/in/naitiksinha</a>.",""],["Studying at","CU Boulder · Mechanical Engineering, Honors","Class of 2030.",""]],tools:""}
];
var cur=0,ang=0,busy=false,$=function(i){return document.getElementById(i)};
var modes=$("modes");
M.forEach(function(m,i){var b=document.createElement("button");b.textContent=m.n;b.onclick=function(){set(i)};modes.appendChild(b)});
function set(i){var n=(i+M.length)%M.length,d=n-cur;if(d>M.length/2)d-=M.length;if(d<-M.length/2)d+=M.length;ang-=d*60;cur=n;$("dr").style.transform="rotate("+ang+"deg)";$("lcd").textContent=M[cur].lcd;
 $("hint").textContent="Dial: "+M[cur].n+". Press the red shutter to open it.";$("shut").setAttribute("aria-label","Shutter: open "+M[cur].n);
 modes.querySelectorAll("button").forEach(function(b,k){b.setAttribute("aria-pressed",k==cur)})}
$("dialhit").onclick=function(){set(cur+1)};
function shoot(){if(busy)return;busy=true;var c=$("cam"),f=$("flash");c.classList.add("snap");setTimeout(function(){f.classList.add("go")},180);
 setTimeout(function(){location.hash=M[cur].id;c.classList.remove("snap");f.classList.remove("go");busy=false},560)}
$("shut").onclick=shoot;
$("shut").onkeydown=function(e){if(e.key=="Enter"||e.key==" "){e.preventDefault();shoot()}};
document.addEventListener("keydown",function(e){if(!document.body.classList.contains("on-scene"))return;if(e.key=="ArrowRight")set(cur+1);if(e.key=="ArrowLeft")set(cur-1)});
var imgs={},lk=0;
function photoChapter(){return M.find(function(m){return m.id=="photo"})}
function paint(el,k){var s=photoChapter().sheet[k];el.style.setProperty("--a",s[1]);el.style.setProperty("--b",s[2]);el.style.backgroundImage=imgs[k]?"url("+imgs[k]+")":""}
function openLb(k){lk=k;$("lbt").textContent=photoChapter().sheet[k][0]+" · frame "+(k+1)+"A";paint($("lbf"),k);$("lb").classList.add("open");$("lbx").focus()}
function closeLb(){$("lb").classList.remove("open")}
$("lbx").onclick=closeLb;$("lb").onclick=function(e){if(e.target==this)closeLb()};
document.addEventListener("keydown",function(e){if(e.key=="Escape")closeLb()});
$("lbu").onclick=function(){$("lbi").click()};
$("lbi").onchange=function(){var f=this.files[0];if(!f)return;imgs[lk]=URL.createObjectURL(f);paint($("lbf"),lk);var b=document.querySelector('.fr[data-k="'+lk+'"]');if(b)paint(b,lk);this.value=""};
function toggleTheme(){var r=document.documentElement,d=r.dataset.theme?r.dataset.theme=="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark"}
var SUB={CA:["Roseville","Folsom","Rocklin","Lincoln","Elk Grove"],OR:["Bend","Happy Valley","Hillsboro","Beaverton"],WA:["Camas","Ridgefield","Lake Stevens","Liberty Lake"]};
function st(c){var el=$("chips");if(!el)return;el.innerHTML=SUB[c].map(function(n){return '<span class="chip">'+n+'</span>'}).join('');document.querySelectorAll(".sb").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.s==c)})}
function pad(n){return (n<10?"0":"")+n}
function render(i){var m=M[i],p=$("page");
 var h='<div class="ph"><button id="bk">◀ Camera</button><span>Frame '+pad(i+1)+' / '+pad(M.length)+' · '+m.n+'</span><button id="tg" aria-label="Toggle light or dark">◐</button></div><h1>'+m.h+'</h1><p class="lede">'+m.lede+'</p><div class="grid">';
 m.cards.forEach(function(c){h+='<article class="card"><h2>'+c[0]+'</h2><small>'+c[1]+'</small><p>'+c[2]+'</p>'+(c[3]?'<p class="why">'+c[3]+'</p>':'')+'</article>'});
 h+='</div>';if(m.extra)h+=m.extra;if(m.tools)h+='<p class="tools">'+m.tools+'</p>';
 if(m.sheet){h+='<div class="sheet" role="group" aria-label="Contact sheet. Open a frame to enlarge it or add your photo.">';m.sheet.forEach(function(s,k){h+='<button class="fr" data-k="'+k+'" style="--a:'+s[1]+';--b:'+s[2]+'"><i>'+(k+1)+'A</i>'+s[0]+'</button>'});h+='</div>'}
 var pv=M[(i+M.length-1)%M.length],nx=M[(i+1)%M.length];
 h+='<nav class="pn"><button data-g="'+pv.id+'">◀ '+pv.n+'</button><button data-g="'+nx.id+'">'+nx.n+' ▶</button></nav><p class="ct">Say hi on <a href="https://www.linkedin.com/in/naitiksinha" target="_blank" rel="noopener">LinkedIn</a>.</p>';
 p.innerHTML=h;$("bk").onclick=function(){location.hash=""};$("tg").onclick=toggleTheme;
 p.querySelectorAll(".fr").forEach(function(b){var k=+b.dataset.k;paint(b,k);b.onclick=function(){openLb(k)}});if(m.id=="projects"){p.querySelectorAll(".sb").forEach(function(b){b.onclick=function(){st(b.dataset.s)}});st("CA")}
 p.querySelectorAll("[data-g]").forEach(function(b){b.onclick=function(){location.hash=b.dataset.g}});window.scrollTo(0,0)}
function route(){var id=location.hash.replace("#",""),i=M.findIndex(function(m){return m.id==id});
 if(i<0){document.body.classList.add("on-scene");return}
 cur=i;ang=-i*60;document.body.classList.remove("on-scene");render(i)}
window.addEventListener("hashchange",function(){route();if(document.body.classList.contains("on-scene"))set(cur)});
set(0);route();if(document.body.classList.contains("on-scene"))set(cur);
