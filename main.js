/* ─────────────────────────────────────────────────────────────
   Jason Tianchi Fan — Portfolio (main.js)
   Three.js scroll-camera city (functionally identical to v5)
   + refined micro-interactions
   ───────────────────────────────────────────────────────────── */

let VH = window.innerHeight, VW = window.innerWidth;

const SECTIONS = ['work','experience','contact'];
const LABELS   = ['Selected Work','Experience','About & Contact'];
const LABEL_SHORT = ['Work','Experience','About'];

// Scroll geometry is derived from viewport height, so it has to be rebuilt
// whenever the window resizes or a mobile browser chrome bar slides away.
let DIVE_PX, STOP_PX, TRAVEL_PX, TOTAL_PX;
const spacerEl = document.getElementById('spacer');

function recomputeLayout(){
  VH = window.innerHeight;
  VW = window.innerWidth;
  DIVE_PX   = VH * 1.2;
  STOP_PX   = VH * 0.7;
  TRAVEL_PX = VH * 0.4;
  TOTAL_PX  = DIVE_PX + SECTIONS.length*(STOP_PX+TRAVEL_PX) + VH;
  spacerEl.style.height = TOTAL_PX + 'px';
  document.body.style.minHeight = TOTAL_PX + 'px';
}
recomputeLayout();

// Honour a reduced-motion preference: the scroll-driven camera still works,
// but the smoothing and intro animation are effectively instant.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.jumpTo = function(name){
  const idx = SECTIONS.indexOf(name);
  if(idx<0) return;
  const target = DIVE_PX + idx*(STOP_PX+TRAVEL_PX) + TRAVEL_PX + STOP_PX*0.2;
  window.scrollTo({top:target,behavior:'smooth'});
};

/* ── Cursor ── */
const curEl = document.getElementById('cur');
const curDot = document.getElementById('cur-dot');
const curLabel = document.getElementById('cur-label');
let mx=VW/2,my=VH/2,cx=VW/2,cy=VH/2;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  curDot.style.left=mx+'px';curDot.style.top=my+'px';
  curLabel.style.left=mx+'px';curLabel.style.top=my+'px';
},{passive:true});
(function lerpCur(){
  cx+=(mx-cx)*0.14;cy+=(my-cy)*0.14;
  curEl.style.left=cx+'px';curEl.style.top=cy+'px';
  requestAnimationFrame(lerpCur);
})();
document.querySelectorAll('a,.btn,.contact-link,.proj-item').forEach(el=>{
  const lbl = el.getAttribute('data-cur') || '';
  el.addEventListener('mouseenter',()=>{
    curEl.classList.add('hot');
    if(lbl){ curLabel.textContent=lbl; curLabel.classList.add('show'); }
  });
  el.addEventListener('mouseleave',()=>{
    curEl.classList.remove('hot');
    curLabel.classList.remove('show');
  });
});

/* ── Progress + readout ── */
const progressEl=document.getElementById('progress');
const progressReadout=document.getElementById('progress-readout');
let lastPctText = '';
window.addEventListener('scroll',()=>{
  const pct = clamp(window.scrollY/TOTAL_PX, 0, 1);
  // scaleX instead of width: the bar animates on the compositor and never
  // triggers layout on a handler that fires on every scroll tick.
  progressEl.style.transform = 'scaleX(' + pct + ')';
  if(progressReadout){
    const txt = String(Math.round(pct*100)).padStart(3,'0') + ' / 100';
    if(txt !== lastPctText){ progressReadout.textContent = txt; lastPctText = txt; }
  }
},{passive:true});

/* ── Progress ticks build ── */
(function buildTicks(){
  const wrap = document.getElementById('progress-ticks');
  if(!wrap) return;
  for(let i=0;i<=40;i++){
    const t=document.createElement('div');
    t.className = 'tick '+(i%10===0?'major':'minor');
    wrap.appendChild(t);
  }
})();

/* ──────────────── THREE.JS CITY — eco-brutalist ──────────────── */
const canvas = document.getElementById('city-canvas');
// Batching the city freed enough headroom to afford real antialiasing and a
// retina-resolution buffer, which the hard-edged architecture needs badly.
const renderer = new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(VW,VH);
// Soft overcast sky-blue
const SKY_COL = 0x9bb7c9;
const HORIZON_COL = 0xcfd9dc;
renderer.setClearColor(SKY_COL, 1);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(HORIZON_COL, 70, 210);

const camera = new THREE.PerspectiveCamera(62, VW/VH, 0.5, 400);

const rng = (a,b) => a+Math.random()*(b-a);
const ri  = (a,b) => Math.floor(rng(a,b+1));

// Sky dome — vertical gradient blue→paler horizon
(function addSky(){
  const canv = document.createElement('canvas');
  canv.width = 16; canv.height = 256;
  const ctx = canv.getContext('2d');
  const g = ctx.createLinearGradient(0,0,0,256);
  g.addColorStop(0, '#6d95ae');
  g.addColorStop(0.45, '#9bb7c9');
  g.addColorStop(0.85, '#cfd9dc');
  g.addColorStop(1, '#dcd4c1');
  ctx.fillStyle = g; ctx.fillRect(0,0,16,256);
  const tex = new THREE.CanvasTexture(canv);
  const skyGeo = new THREE.SphereGeometry(260, 24, 16);
  const skyMat = new THREE.MeshBasicMaterial({map:tex, side:THREE.BackSide, fog:false, depthWrite:false});
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.name = 'sky';
  scene.add(sky);
})();

// Raw concrete palette — cool greys with slight warm variation
const MATS = [
  new THREE.MeshLambertMaterial({color:0xb3afa6}),  // warm grey concrete
  new THREE.MeshLambertMaterial({color:0xa8a59d}),
  new THREE.MeshLambertMaterial({color:0x9c9a92}),
  new THREE.MeshLambertMaterial({color:0xbcb7ac}),
  new THREE.MeshLambertMaterial({color:0x8d8b84}),  // darker concrete
];
const CONCRETE_DARK = new THREE.MeshLambertMaterial({color:0x6e6c66});
const CONCRETE_TRIM = new THREE.MeshLambertMaterial({color:0x4a4844});
const FOLIAGE_MATS = [
  new THREE.MeshLambertMaterial({color:0x5c7a3c}),  // planted greens
  new THREE.MeshLambertMaterial({color:0x6e8a46}),
  new THREE.MeshLambertMaterial({color:0x4e6b2e}),
];
const GLASS_MAT = new THREE.MeshLambertMaterial({
  color:0x7ea6b8, transparent:true, opacity:0.55
});
const WIRE_MATS = [
  new THREE.MeshBasicMaterial({color:0x3d3a36,wireframe:true,transparent:true,opacity:0.22}),
];

const buildings = [];

// One stop per section, alternating sides of the street so the camera
// swings back and forth as it travels. Must stay the same length as SECTIONS.
const STOPS = [
  {z:-32,  yaw:-0.50, side:-1, label:'Work'},
  {z:-68,  yaw: 0.48, side:+1, label:'Experience'},
  {z:-104, yaw:-0.52, side:-1, label:'Contact'},
];

const PANEL_ANCHORS = {};

// Add a child mesh that rises together with the parent (for structure + planters)
function addChild(parent, mesh){
  parent.add(mesh);
}

function makeBuildingBlock(cx, cz, side, w, d, h, isWire){
  // Main mass (raw concrete)
  const geo = new THREE.BoxGeometry(w, h, d);
  const mat = isWire ? WIRE_MATS[0] : MATS[ri(0,4)];
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(cx, h/2, cz);
  mesh.userData = {finalY: h/2};
  mesh.scale.y = 0.001;
  scene.add(mesh);
  buildings.push(mesh);

  if(isWire) return mesh;

  // Horizontal slab bands — structural floor plates (eco-brutalist signature)
  const floorH = 2.6;
  const nFloors = Math.max(2, Math.floor(h/floorH));
  for(let f=1; f<nFloors; f++){
    const y = -h/2 + f*floorH;
    // Slab (slightly overhangs the facade)
    const slabGeo = new THREE.BoxGeometry(w+0.22, 0.16, d+0.22);
    const slab = new THREE.Mesh(slabGeo, CONCRETE_DARK);
    slab.position.set(0, y, 0);
    addChild(mesh, slab);
  }

  // Street face is at local x = -side*(w/2) (faces toward x=0 street)
  // Vertical concrete fins / columns on the street face
  const colCount = Math.max(2, Math.floor(d/2.4));
  const colSpacing = d / colCount;
  for(let c=0; c<=colCount; c++){
    const fz = -d/2 + c*colSpacing;
    const fin = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, h-0.3, 0.18),
      CONCRETE_TRIM
    );
    fin.position.set(-side*(w/2 + 0.02), 0, fz);
    addChild(mesh, fin);
  }

  // Recessed glass bands between slabs — interior behind columns
  for(let f=0; f<nFloors; f++){
    const y = -h/2 + f*floorH + floorH/2;
    const glass = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, floorH-0.55, d-0.3),
      GLASS_MAT
    );
    glass.position.set(-side*(w/2 - 0.04), y, 0);
    addChild(mesh, glass);
  }

  // Planting ledges on street face
  for(let f=1; f<nFloors; f++){
    if(f % (2 + ri(0,1)) !== 0) continue;
    const y = -h/2 + f*floorH + 0.16;
    const planter = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.3, d+0.1),
      CONCRETE_DARK
    );
    planter.position.set(-side*(w/2 + 0.28), y+0.15, 0);
    addChild(mesh, planter);
    const clumpCount = Math.max(2, Math.floor(d/1.4));
    for(let k=0; k<clumpCount; k++){
      const cw = rng(0.45, 0.75), ch = rng(0.5, 1.1), cd = rng(0.55, 1.1);
      const foliage = new THREE.Mesh(
        new THREE.BoxGeometry(cw, ch, cd),
        FOLIAGE_MATS[ri(0,2)]
      );
      const pz = -d/2 + 0.6 + k*((d-1.2)/Math.max(1,clumpCount-1)) + rng(-0.2,0.2);
      foliage.position.set(-side*(w/2 + 0.4), y + 0.3 + ch/2, pz);
      addChild(mesh, foliage);
    }
  }

  // Rooftop detail — mechanical/penthouse + green roof suggestion
  if(h > 8){
    const penW = w*rng(0.4,0.7), penD = d*rng(0.4,0.7), penH = rng(0.8,1.8);
    const pen = new THREE.Mesh(
      new THREE.BoxGeometry(penW, penH, penD),
      CONCRETE_TRIM
    );
    pen.position.set(rng(-w/4, w/4), h/2 + penH/2, rng(-d/4, d/4));
    addChild(mesh, pen);
    // Rooftop green patch
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(w*0.6, 0.12, d*0.6),
      FOLIAGE_MATS[0]
    );
    roof.position.set(0, h/2 + 0.06, 0);
    addChild(mesh, roof);
  }

  // Window lights (warm interior glow behind some glass)
  if(h > 5){
    for(let f=0; f<nFloors; f++){
      const cols = Math.max(2, Math.floor(w/1.6));
      for(let c=0;c<cols;c++){
        if(Math.random()>0.35) continue;
        const wg = new THREE.PlaneGeometry(0.38, 0.5);
        const brightness = 0.4+Math.random()*0.4;
        const col = new THREE.Color(0.32*brightness, 0.26*brightness, 0.18*brightness);
        const wm = new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:0.6});
        const wM = new THREE.Mesh(wg,wm);
        const y = -h/2 + f*floorH + floorH/2;
        wM.position.set(
          -side*(w/2 - 0.05),
          y,
          -d/2 + (c+0.5)*(d/cols)
        );
        wM.rotation.y = side>0 ? -Math.PI/2 : Math.PI/2;
        addChild(mesh, wM);
      }
    }
  }

  return mesh;
}

const STREET_HW = 5.5;
const SIDEWALK_W = 1.2;
const SET_BACK = STREET_HW + SIDEWALK_W;

STOPS.forEach((stop, i) => {
  const panelW = 14 + Math.random()*6;
  const panelH = 18 + Math.random()*10;
  const panelD = 12 + Math.random()*6;
  const side = stop.side;
  const bx = side*(SET_BACK + panelW/2 + 0.1);
  const bz = stop.z;

  makeBuildingBlock(bx, bz, side, panelW, panelD, panelH, false);

  const faceX = side*(SET_BACK + 0.12);
  const faceZ1 = bz - panelD/2 + 1;
  const faceZ2 = bz + panelD/2 - 1;
  const faceYT = panelH - 1;
  const faceYB = 0.5;

  PANEL_ANCHORS[SECTIONS[i]] = {
    tl: new THREE.Vector3(faceX, faceYT, faceZ2),
    tr: new THREE.Vector3(faceX, faceYT, faceZ1),
    bl: new THREE.Vector3(faceX, faceYB, faceZ2),
    br: new THREE.Vector3(faceX, faceYB, faceZ1),
    side: side,
    faceX, centerZ: bz,
    panelW, panelH, panelD,
    buildingFaceNormal: new THREE.Vector3(side, 0, 0),
  };

  for(let k=0;k<3;k++){
    const fw = rng(4,9), fh = rng(4,panelH*0.8), fd = rng(5,10);
    const fz = bz + (k===0?-(panelD/2+fd/2+rng(1,3)):panelD/2+fd/2+rng(1,3)+(k>1?fd+rng(2,4):0));
    makeBuildingBlock(side*(SET_BACK+fw/2+0.1), fz, side, fw, fd, fh, Math.random()<0.08);
  }
});

for(let z=20; z>-230; z-=rng(6,16)){
  [-1,1].forEach(side=>{
    const nearStop = STOPS.some(s=>Math.abs(z-s.z)<18 && s.side===side);
    if(nearStop) return;
    const w=rng(3.5,10), h=rng(2,26), d=rng(5,14);
    const cx = side*(SET_BACK+w/2+0.1);
    makeBuildingBlock(cx, z, side, w, d, h, Math.random()<0.07);
  });
}

/* ── Fill the city beyond the main street ──
   Simpler volumes (no planter/fin detail) arranged in grid blocks
   behind the main-street facades, including across cross-streets. */
function makeFillerBlock(cx, cz, w, d, h){
  const geo = new THREE.BoxGeometry(w, h, d);
  const mat = MATS[ri(0,4)];
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(cx, h/2, cz);
  mesh.userData = {finalY: h/2};
  mesh.scale.y = 0.001;
  scene.add(mesh);
  buildings.push(mesh);

  // A couple of horizontal slab bands for architectural texture
  if(h > 6){
    const floorH = 2.8;
    const nFloors = Math.min(4, Math.floor(h/floorH));
    for(let f=1; f<nFloors; f++){
      const y = -h/2 + f*floorH;
      const slab = new THREE.Mesh(
        new THREE.BoxGeometry(w+0.15, 0.12, d+0.15),
        CONCRETE_DARK
      );
      slab.position.set(0, y, 0);
      mesh.add(slab);
    }
  }
  // Occasional rooftop green
  if(h > 8 && Math.random() < 0.4){
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(w*0.55, 0.1, d*0.55),
      FOLIAGE_MATS[ri(0,2)]
    );
    roof.position.set(rng(-w/6, w/6), h/2+0.05, rng(-d/6, d/6));
    mesh.add(roof);
  }
  return mesh;
}

// Deep blocks behind the main street facades (both sides)
// Main street facade buildings sit at ~|x|=7 to ~|x|=18; we fill from x=20 outward.
const CITY_FAR_X = 120;
const CITY_Z_MIN = -240, CITY_Z_MAX = 30;

// Cross-streets cut through at certain Z (gaps in the block grid)
const CROSS_STREETS_Z = [-12, -45, -75, -110, -145, -180, -215];
const CROSS_W = 6;
function nearCrossStreet(z){
  return CROSS_STREETS_Z.some(cz => Math.abs(z-cz) < CROSS_W/2 + 1);
}

// Block grid — fill each side from the "back" of the main-street buildings outward
[-1,1].forEach(side => {
  for(let bx = 22; bx < CITY_FAR_X; bx += rng(14, 22)){
    // depth of this "block" from street — decreasing detail with distance
    const distance = bx;
    const heightRange = Math.max(6, 30 - distance*0.15);
    for(let bz = CITY_Z_MAX; bz > CITY_Z_MIN; bz -= rng(10, 20)){
      if(nearCrossStreet(bz)) { bz -= CROSS_W; continue; }
      const w = rng(5, 14);
      const d = rng(6, 16);
      const h = rng(3, heightRange);
      const cx = side * (bx + w/2 + rng(-1.5, 1.5));
      const cz = bz - d/2;
      makeFillerBlock(cx, cz, w, d, h);
    }
  }
});

// Perpendicular (cross-street) buildings — small volumes along cross axes behind the main row
CROSS_STREETS_Z.forEach(cz => {
  [-1,1].forEach(side => {
    for(let bx = 22; bx < CITY_FAR_X; bx += rng(11, 16)){
      if(Math.random() < 0.35) continue;
      const w = rng(4, 9), d = rng(3.5, 7), h = rng(4, Math.max(8, 22 - bx*0.12));
      const cx = side * (bx + w/2);
      makeFillerBlock(cx, cz + (Math.random()<0.5 ? -CROSS_W/2 - d/2 - 0.5 : CROSS_W/2 + d/2 + 0.5), w, d, h);
    }
  });
});

// Far-distance silhouette layer — tall abstract masses on the horizon
for(let bx = 60; bx < 180; bx += rng(14, 28)){
  [-1,1].forEach(side => {
    for(let bz = 10; bz > -260; bz -= rng(20, 40)){
      const w = rng(8, 22), d = rng(8, 22), h = rng(12, 38);
      const cx = side * (bx + w/2);
      makeFillerBlock(cx, bz - d/2, w, d, h);
    }
  });
}

// Distant cross-street ends — low blocks at far ends of Z
for(let bx = -CITY_FAR_X; bx < CITY_FAR_X; bx += rng(9, 15)){
  [CITY_Z_MIN + 10, CITY_Z_MAX - 10, -260, 40].forEach(bz => {
    const w = rng(5, 14), d = rng(5, 12), h = rng(4, 20);
    makeFillerBlock(bx, bz, w, d, h);
  });
}

const groundGeo = new THREE.PlaneGeometry(400,400);
const groundMat = new THREE.MeshLambertMaterial({color:0x8a8478});
const ground = new THREE.Mesh(groundGeo,groundMat);
ground.rotation.x=-Math.PI/2; ground.position.y=0;
scene.add(ground);

const roadGeo = new THREE.PlaneGeometry(STREET_HW*2,260);
const roadMat = new THREE.MeshLambertMaterial({
  color:0x3a3835,
  polygonOffset:true, polygonOffsetFactor:-1, polygonOffsetUnits:-1
});
const road = new THREE.Mesh(roadGeo,roadMat);
road.rotation.x=-Math.PI/2; road.position.set(0,0.05,-100);
scene.add(road);

[-1,1].forEach(side=>{
  const swGeo=new THREE.PlaneGeometry(SIDEWALK_W,260);
  const swMat=new THREE.MeshLambertMaterial({
    color:0x9e9a90,
    polygonOffset:true, polygonOffsetFactor:-2, polygonOffsetUnits:-2
  });
  const sw=new THREE.Mesh(swGeo,swMat);
  sw.rotation.x=-Math.PI/2;
  sw.position.set(side*(STREET_HW+SIDEWALK_W/2),0.08,-100);
  scene.add(sw);
});

for(let z=10;z>-220;z-=6){
  const dg=new THREE.PlaneGeometry(0.1,3.5);
  const dm=new THREE.MeshBasicMaterial({
    color:0xe8dfc8,transparent:true,opacity:0.75,
    polygonOffset:true, polygonOffsetFactor:-3, polygonOffsetUnits:-3
  });
  const d=new THREE.Mesh(dg,dm);
  d.rotation.x=-Math.PI/2; d.position.set(0,0.12,z);
  scene.add(d);
}

// Street trees — slim trunks + boxy foliage, eco-brutalist greening
for(let z=8;z>-215;z-=11){
  [-1,1].forEach(side=>{
    if(Math.random()<0.3) return;
    const tx = side*(STREET_HW + 0.6);
    const trunkH = rng(3.8, 5.2);
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.1, trunkH, 6),
      CONCRETE_TRIM
    );
    trunk.position.set(tx, trunkH/2, z);
    scene.add(trunk);
    const canopy = new THREE.Mesh(
      new THREE.BoxGeometry(rng(1.4,2.0), rng(1.6,2.4), rng(1.4,2.0)),
      FOLIAGE_MATS[ri(0,2)]
    );
    canopy.position.set(tx, trunkH + 0.8, z);
    scene.add(canopy);
  });
}

for(let z=5;z>-210;z-=22){
  [-1,1].forEach(side=>{
    const pg=new THREE.CylinderGeometry(0.06,0.08,5.5,8);
    const pm=new THREE.MeshLambertMaterial({color:0x3d3a36});
    const pole=new THREE.Mesh(pg,pm);
    pole.position.set(side*(STREET_HW+0.5),2.75,z);
    scene.add(pole);
    const ag=new THREE.CylinderGeometry(0.04,0.04,1.8,6);
    const am=new THREE.Mesh(ag,pm);
    am.rotation.z=side>0?-Math.PI/2:Math.PI/2;
    am.position.set(side*(STREET_HW+0.5+side*0.9),5.5,z);
    scene.add(am);
    const gg=new THREE.SphereGeometry(0.12,6,6);
    const gm=new THREE.MeshBasicMaterial({color:0xfff4d0});
    const globe=new THREE.Mesh(gg,gm);
    globe.position.set(side*(STREET_HW+0.5+side*1.8),5.5,z);
    scene.add(globe);
  });
}

/* ── Static geometry batching ──────────────────────────────────
   The city is ~3,400 small meshes spread over ~450 materials, which
   costs ~2,600 draw calls a frame. Nothing in it moves on its own —
   the intro is one uniform rise — so every mesh is baked into merged
   buffers grouped by material signature, with the per-material colour
   carried as a vertex attribute. Draw calls drop to roughly a dozen. */

function materialKey(m){
  return [
    m.type,
    m.transparent ? 1 : 0,
    m.opacity,
    m.side,
    m.depthWrite ? 1 : 0,
    m.fog ? 1 : 0,
    m.wireframe ? 1 : 0,
    m.polygonOffset ? m.polygonOffsetFactor + ':' + m.polygonOffsetUnits : 'n'
  ].join('|');
}

function mergeMeshes(meshList){
  const buckets = new Map();
  meshList.forEach(mesh => {
    const mat = mesh.material;
    if(!mat || Array.isArray(mat) || mat.map) return;
    const key = materialKey(mat);
    let b = buckets.get(key);
    if(!b){ b = {source: mat, pos: [], norm: [], col: []}; buckets.set(key, b); }

    const src = mesh.geometry;
    const geo = src.index ? src.toNonIndexed() : src.clone();
    geo.applyMatrix4(mesh.matrixWorld);

    const p = geo.attributes.position.array;
    const n = geo.attributes.normal ? geo.attributes.normal.array : null;
    const r = mat.color.r, g = mat.color.g, bl = mat.color.b;
    for(let i = 0; i < p.length; i += 3){
      b.pos.push(p[i], p[i+1], p[i+2]);
      if(n) b.norm.push(n[i], n[i+1], n[i+2]); else b.norm.push(0, 1, 0);
      b.col.push(r, g, bl);
    }
    geo.dispose();
  });

  const merged = [];
  buckets.forEach(b => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(b.pos, 3));
    g.setAttribute('normal',   new THREE.Float32BufferAttribute(b.norm, 3));
    g.setAttribute('color',    new THREE.Float32BufferAttribute(b.col, 3));
    g.computeBoundingSphere();
    const m = b.source.clone();
    m.vertexColors = true;
    m.color.setRGB(1, 1, 1);
    merged.push(new THREE.Mesh(g, m));
  });
  return merged;
}

// Group holding the merged city. Scaling it on Y reproduces the original
// per-building rise exactly, because every building shared one scale factor.
const cityGroup = new THREE.Group();
cityGroup.scale.y = 0.001;
scene.add(cityGroup);

(function batchScene(){
  try {
    const buildingSet = new Set(buildings);
    // Put the buildings at their final transform so the bake captures full height.
    buildings.forEach(b => { b.scale.y = 1; b.position.y = b.userData.finalY; });
    scene.updateMatrixWorld(true);

    const cityMeshes = [], propMeshes = [], originals = [];
    scene.children.forEach(child => {
      if(child === cityGroup || child.name === 'sky' || child.isLight) return;
      const target = buildingSet.has(child) ? cityMeshes : propMeshes;
      child.traverse(o => { if(o.isMesh) target.push(o); });
      originals.push(child);
    });

    const mergedCity  = mergeMeshes(cityMeshes);
    const mergedProps = mergeMeshes(propMeshes);
    if(!mergedCity.length && !mergedProps.length) throw new Error('nothing merged');

    originals.forEach(o => {
      o.traverse(n => { if(n.isMesh && n.geometry) n.geometry.dispose(); });
      scene.remove(o);
    });

    mergedCity.forEach(m => cityGroup.add(m));
    mergedProps.forEach(m => scene.add(m));
    buildings.length = 0;
  } catch(err){
    // Fall back to the unbatched scene rather than shipping a blank canvas.
    console.warn('Scene batching skipped:', err);
    buildings.forEach(b => { b.scale.y = 0.001; b.position.y = 0; });
  }
})();

// Lighting — clean overcast / afternoon blue-sky daylight
scene.add(new THREE.AmbientLight(0xbccadb, 1.4));
const key=new THREE.DirectionalLight(0xfff4d8, 1.25);
key.position.set(20,40,15); scene.add(key);
const fill=new THREE.DirectionalLight(0x8faebf, 0.55);
fill.position.set(-15,22,-8); scene.add(fill);
const rim=new THREE.DirectionalLight(0xdfe8f2, 0.35);
rim.position.set(0, 30, -40); scene.add(rim);

/* Camera path */
const CAM_AERIAL_POS  = new THREE.Vector3(0, 90, 80);
const CAM_AERIAL_LOOK = new THREE.Vector3(0, 0, -10);
const CAM_ENTRY_POS  = new THREE.Vector3(0, 3.0, 20);
const CAM_ENTRY_LOOK = new THREE.Vector3(0, 3.0, 8);

function getStopCamera(idx) {
  const stop = STOPS[idx];
  const camX = -stop.side * 2.5;
  const pos = new THREE.Vector3(camX, 3.0, stop.z + 5);
  const lookX = stop.side * (STREET_HW * 0.7);
  const look = new THREE.Vector3(lookX, 4.0, stop.z - 3);
  return {pos, look};
}

function getTravelCamera(fromIdx, toIdx, t){
  const from = fromIdx < 0 ? {pos:CAM_ENTRY_POS.clone(), look:CAM_ENTRY_LOOK.clone()} : getStopCamera(fromIdx);
  const to   = getStopCamera(toIdx);
  const eased = easeInOut(t);
  return {
    pos:  new THREE.Vector3().lerpVectors(from.pos,  to.pos,  eased),
    look: new THREE.Vector3().lerpVectors(from.look, to.look, eased),
  };
}

function lerp(a,b,t){return a+(b-a)*t}
function clamp(v,lo,hi){return Math.max(lo,Math.min(hi,v))}
function easeInOut(t){return t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2}
function easeOut3(t){return 1-Math.pow(1-t,3)}

/* UI refs */
const heroOverlay  = document.getElementById('hero-overlay');
const scrollHint   = document.getElementById('scroll-hint');
const sectionLabel = document.getElementById('section-label');
const sectionLabelText = document.getElementById('section-label-text');
const sectionLabelNum = document.getElementById('section-label-num');
const sectionNum   = document.getElementById('section-num');
const sectionNumText = document.getElementById('section-num-text');
const navDots = document.querySelectorAll('#section-num .nav-dot');
const footerBar    = document.getElementById('footer-bar');
const footerMid    = document.getElementById('footer-mid');
const footerTime   = document.getElementById('footer-time');

if(footerTime){
  const updateTime = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2,'0');
    const mm = String(now.getMinutes()).padStart(2,'0');
    footerTime.textContent = hh+':'+mm+' EST';
  };
  updateTime();
  setInterval(updateTime, 30000);
}

const PANELS = {
  work:       document.getElementById('bp-work'),
  experience: document.getElementById('bp-exp'),
  contact:    document.getElementById('bp-contact'),
};

const workGallery = document.getElementById('work-gallery');
const wgTrack     = workGallery ? workGallery.querySelector('.wg-track') : null;
const WORK_IDX    = SECTIONS.indexOf('work');

if(wgTrack){
  const wgPrev = workGallery.querySelector('.wg-prev');
  const wgNext = workGallery.querySelector('.wg-next');
  const wgRail = workGallery.querySelector('.wg-rail-fill');
  const wgMax  = () => Math.max(0, wgTrack.scrollWidth - wgTrack.clientWidth);

  // Cards snap to their start edge, so each child's resting scrollLeft puts
  // its left edge at the track's content edge. Measured rather than assumed,
  // because the contents rail and section divider are narrower than a card.
  function wgSnapTargets(){
    const padLeft = parseFloat(getComputedStyle(wgTrack).paddingLeft) || 0;
    const max = Math.max(0, wgTrack.scrollWidth - wgTrack.clientWidth);
    return Array.from(wgTrack.children)
      .map(el => clamp(el.offsetLeft - padLeft, 0, max));
  }

  // Own tween rather than scrollTo({behavior:'smooth'}), which Chrome
  // cancels on this element. Direct scrollLeft assignment is reliable.
  let wgAnim = null;
  function wgStopGlide(){
    if(wgAnim){ cancelAnimationFrame(wgAnim); wgAnim = null; }
  }
  function wgGlide(dest){
    wgStopGlide();
    const start = wgTrack.scrollLeft;
    const delta = dest - start;
    if(Math.abs(delta) < 1) return;
    const dur = 420;
    let t0 = null;
    (function frame(ts){
      if(t0 === null) t0 = ts;
      const k = clamp((ts - t0) / dur, 0, 1);
      wgTrack.scrollLeft = start + delta * (1 - Math.pow(1 - k, 3));
      wgAnim = k < 1 ? requestAnimationFrame(frame) : null;
    })(performance.now());
  }

  function wgStep(dir){
    const cur = wgTrack.scrollLeft;
    const max = Math.max(0, wgTrack.scrollWidth - wgTrack.clientWidth);
    const targets = wgSnapTargets();
    let dest;
    if(dir > 0){
      dest = targets.find(t => t > cur + 6);
    } else {
      const behind = targets.filter(t => t < cur - 6);
      dest = behind[behind.length - 1];
    }
    if(dest === undefined) dest = dir > 0 ? max : 0;
    wgGlide(clamp(dest, 0, max));
  }

  function wgSync(){
    const max = wgTrack.scrollWidth - wgTrack.clientWidth;
    const at  = wgTrack.scrollLeft;
    if(wgPrev) wgPrev.disabled = at <= 2;
    if(wgNext) wgNext.disabled = at >= max - 2;
    if(wgRail) wgRail.style.transform = 'scaleX(' + (max > 0 ? clamp(at / max, 0, 1) : 0) + ')';
  }

  // Fade the hint once the reader has moved the strip by any means
  let wgTouched = false;
  function wgUsed(){
    if(wgTouched) return;
    wgTouched = true;
    workGallery.classList.add('touched');
  }

  /* Ordinary vertical scrolling drives the strip while the work section is
     up, and hands control back to the page once it reaches either end.
     This previously listened on the strip itself, so it only responded when
     the pointer happened to sit over the bottom of the window. Anywhere
     else, which is most of the screen, a scroll skipped past the work
     entirely. Reading it at the window means any wheel, trackpad, or
     scrollbar drag moves through the projects with no aiming required. */
  window.addEventListener('wheel', (e) => {
    if(!workGallery.classList.contains('active')) return;
    const max = wgMax();
    if(max <= 0) return;
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if(!d) return;
    const at = wgTrack.scrollLeft;
    const room = d > 0 ? at < max - 0.5 : at > 0.5;
    if(!room) return;   // at the end: let the page carry on to the next section
    e.preventDefault();
    wgStopGlide();
    wgTrack.scrollLeft = clamp(at + d, 0, max);
    wgUsed();
  }, {passive: false});

  /* Drag to pan, the same gesture as panning a map. */
  let dragOn = false, dragMoved = false, dragX = 0, dragFrom = 0, swallowClick = false;
  wgTrack.addEventListener('pointerdown', (e) => {
    // Mouse only. Touch already gets native momentum panning, and handling
    // both would move the strip twice as far as the finger.
    if(e.pointerType !== 'mouse' || e.button !== 0) return;
    dragOn = true; dragMoved = false; swallowClick = false;
    dragX = e.clientX; dragFrom = wgTrack.scrollLeft;
    wgStopGlide();
  });
  window.addEventListener('pointermove', (e) => {
    if(!dragOn) return;
    const dx = e.clientX - dragX;
    if(!dragMoved && Math.abs(dx) > 4){
      dragMoved = true;
      workGallery.classList.add('dragging');
      wgUsed();
    }
    if(dragMoved) wgTrack.scrollLeft = clamp(dragFrom - dx, 0, wgMax());
  });
  window.addEventListener('pointerup', () => {
    if(!dragOn) return;
    dragOn = false;
    workGallery.classList.remove('dragging');
    swallowClick = dragMoved;
    dragMoved = false;
  });
  // A drag that finishes on top of a card must not also open it
  wgTrack.addEventListener('click', (e) => {
    if(!swallowClick) return;
    swallowClick = false;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  if(wgPrev) wgPrev.addEventListener('click', () => { wgStep(-1); wgUsed(); });
  if(wgNext) wgNext.addEventListener('click', () => { wgStep(1); wgUsed(); });
  wgTrack.addEventListener('scroll', wgSync, {passive: true});
  window.addEventListener('resize', wgSync);
  wgSync();

  // Arrow keys drive the strip while it is the active section
  window.addEventListener('keydown', (e) => {
    if(!workGallery.classList.contains('active')) return;
    if(e.key === 'ArrowRight'){ e.preventDefault(); wgStep(1); wgUsed(); }
    else if(e.key === 'ArrowLeft'){ e.preventDefault(); wgStep(-1); wgUsed(); }
  });
}

let camPos  = CAM_AERIAL_POS.clone();
let camLook = CAM_AERIAL_LOOK.clone();
let targetPos  = CAM_AERIAL_POS.clone();
let targetLook = CAM_AERIAL_LOOK.clone();

let mouseNX = 0, mouseNY = 0;
document.addEventListener('mousemove',e=>{mouseNX=(e.clientX/VW-0.5)*2;mouseNY=(e.clientY/VH-0.5)*2;},{passive:true});

function parseScroll(sy){
  if(sy < DIVE_PX){
    return {phase:'dive', t: sy/DIVE_PX, sectionIdx:-1, localT:0};
  }
  const walkSy = sy - DIVE_PX;
  const sectionLen = STOP_PX + TRAVEL_PX;
  const rawIdx = walkSy / sectionLen;
  const flooredIdx = Math.floor(rawIdx);
  const sectionIdx = clamp(flooredIdx, 0, SECTIONS.length-1);
  const localT = clamp(rawIdx - flooredIdx + Math.max(0, flooredIdx - sectionIdx), 0, 1);

  const travelFrac = TRAVEL_PX / sectionLen;
  if(localT < travelFrac){
    const travelT = localT / travelFrac;
    return {phase:'travel', sectionIdx, t: travelT};
  } else {
    return {phase:'dwell', sectionIdx, t: (localT - travelFrac)/(1 - travelFrac)};
  }
}

let lastLabelIdx = -1;
function setSectionLabel(idx){
  if(idx === lastLabelIdx) return;   // called every frame; only touch the DOM on change
  lastLabelIdx = idx;
  if(sectionLabelText) sectionLabelText.textContent = LABELS[idx];
  if(sectionLabelNum)  sectionLabelNum.textContent  = '§ '+String(idx+1).padStart(2,'0');
  if(sectionNumText)   sectionNumText.textContent   = String(idx+1).padStart(2,'0')+' / '+String(SECTIONS.length).padStart(2,'0');
  navDots.forEach((d,i)=> d.classList.toggle('on', i===idx));
  if(footerMid) footerMid.textContent = LABEL_SHORT[idx];
}

function updateScene(sy){
  const state = parseScroll(sy);

  if(state.phase==='dive'){
    const t  = easeOut3(state.t);
    targetPos.lerpVectors(CAM_AERIAL_POS,  CAM_ENTRY_POS,  t);
    targetLook.lerpVectors(CAM_AERIAL_LOOK, CAM_ENTRY_LOOK, t);
    targetPos.x += mouseNX * (1-t) * 4;

    scene.fog.near = lerp(80, 50, t);
    scene.fog.far  = lerp(220, 160, t);

    heroOverlay.style.opacity = Math.max(0, 1 - state.t*2.5).toString();
    scrollHint.style.opacity  = Math.max(0, 1 - state.t*4).toString();
    sectionLabel.style.opacity = '0';
    sectionNum.style.opacity   = '0';
    footerBar.classList.remove('show');
    Object.values(PANELS).forEach(p=>p.classList.remove('active'));
    if(workGallery){ workGallery.classList.remove('active'); PANELS.work.classList.remove('gallery-mode'); }

  } else if(state.phase==='travel'){
    const fromIdx = state.sectionIdx - 1;
    const cam = getTravelCamera(fromIdx, state.sectionIdx, state.t);
    targetPos.copy(cam.pos);
    targetLook.copy(cam.look);
    targetLook.x += mouseNX * 0.8;
    targetLook.y += mouseNY * (-0.3);

    scene.fog.near = 60; scene.fog.far = 160;
    heroOverlay.style.opacity = '0';
    scrollHint.style.opacity  = '0';
    Object.values(PANELS).forEach(p=>p.classList.remove('active'));

    const labelT = clamp((state.t-0.6)/0.4, 0, 1);
    sectionLabel.style.opacity = labelT.toString();
    sectionNum.style.opacity   = labelT.toString();
    setSectionLabel(state.sectionIdx);
    footerBar.classList.add('show');
    if(workGallery){ workGallery.classList.remove('active'); PANELS.work.classList.remove('gallery-mode'); }

  } else {
    const cam = getStopCamera(state.sectionIdx);
    targetPos.copy(cam.pos);
    targetLook.copy(cam.look);
    targetLook.x += mouseNX * 1.2;
    targetLook.y += mouseNY * (-0.5);

    scene.fog.near = 60; scene.fog.far = 160;
    heroOverlay.style.opacity = '0';
    scrollHint.style.opacity  = '0';
    sectionLabel.style.opacity = '1';
    sectionNum.style.opacity   = '1';
    setSectionLabel(state.sectionIdx);
    footerBar.classList.add('show');

    SECTIONS.forEach((name, i)=>{
      const panel = PANELS[name];
      if(i===state.sectionIdx){
        panel.classList.add('active');
        positionPanel(panel, name, state.sectionIdx);
      } else {
        panel.classList.remove('active');
      }
    });

    if(workGallery){
      const workActive = (state.sectionIdx === WORK_IDX);
      workGallery.classList.toggle('active', workActive);
      PANELS.work.classList.toggle('gallery-mode', workActive);
    }
  }
}

/* Panel projection */
const _vec3 = new THREE.Vector3();

function projectToScreen(v3){
  _vec3.copy(v3);
  _vec3.project(camera);
  return {
    x: ( _vec3.x * 0.5 + 0.5) * VW,
    y: (-_vec3.y * 0.5 + 0.5) * VH,
    z: _vec3.z,
  };
}

function positionPanel(panel, name, idx){
  const anch = PANEL_ANCHORS[name];
  if(!anch) return;

  // Below tablet width the projected building face is far too narrow to read
  // in (roughly 195px on a phone), so the panel becomes a plain centred card.
  if(VW <= 768){
    panel.style.left   = '4vw';
    panel.style.width  = '92vw';
    panel.style.top    = '9vh';
    panel.style.height = '78vh';
    flagScrollable(panel);
    return;
  }

  const tl = projectToScreen(anch.tl);
  const tr = projectToScreen(anch.tr);
  const bl = projectToScreen(anch.bl);
  const br = projectToScreen(anch.br);
  if(tl.z > 1.0) return;
  const xs = [tl.x, tr.x, bl.x, br.x];
  const ys = [tl.y, tr.y, bl.y, br.y];
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const screenW = maxX - minX;
  const screenH = maxY - minY;
  const margin = 16;
  const panW  = clamp(screenW, VW*0.34, VW*0.52);
  // Floor raised so the denser panels show most of their content without
  // relying on a scroll the hidden scrollbars never advertise.
  const panH  = clamp(screenH, VH*0.72, VH*0.86);
  let panelLeft, panelTop;
  if(anch.side > 0){
    panelLeft = clamp(minX - 10, VW/2 - 40, VW - panW - margin);
  } else {
    panelLeft = clamp(margin, margin, VW/2 - panW + 40);
  }
  panelTop = clamp(minY + 10, 80, VH - panH - 60);
  panel.style.left   = panelLeft + 'px';
  panel.style.top    = panelTop  + 'px';
  panel.style.width  = panW + 'px';
  panel.style.height = panH + 'px';

  flagScrollable(panel);
}

// Scrollbars are hidden by design, so flag panels whose content runs past the
// fold and let CSS draw a fade cue.
function flagScrollable(panel){
  const inner = panel.querySelector('.bp-inner');
  if(!inner) return;
  const overflowing = inner.scrollHeight - inner.clientHeight > 8;
  if(overflowing !== (panel.dataset.scrollable === '1')){
    panel.dataset.scrollable = overflowing ? '1' : '0';
    panel.classList.toggle('is-scrollable', overflowing);
  }
}

/* Animation loop */
let buildStart = null;
let buildDone = false;
const BUILD_DUR = 2600;
const SMOOTH = 0.06;

// Once the camera has settled and the intro is over, nothing in the scene
// changes until the next scroll or pointer move. Tracking that lets the loop
// idle instead of re-rendering an identical frame sixty times a second.
const SETTLE_EPS = 0.0015;
let lastSy = -1, lastMx = 0, lastMy = 0;
let needsRender = true;

function animate(ts){
  requestAnimationFrame(animate);

  if(!buildStart) buildStart = ts;
  if(!buildDone){
    const bt = prefersReducedMotion ? 1 : clamp((ts-buildStart)/BUILD_DUR,0,1);
    const be = easeOut3(bt);
    cityGroup.scale.y = Math.max(0.001, be);
    buildings.forEach(b=>{
      b.scale.y = Math.max(0.001, be);
      b.position.y = b.userData.finalY * be;
    });
    if(bt >= 1){
      cityGroup.scale.y = 1;
      buildings.forEach(b=>{ b.scale.y = 1; b.position.y = b.userData.finalY; });
      buildDone = true;
      cityGroup.updateMatrixWorld(true);
      cityGroup.matrixAutoUpdate = false;
    }
    needsRender = true;
  }

  const sy = window.scrollY;
  if(sy !== lastSy || mouseNX !== lastMx || mouseNY !== lastMy){
    lastSy = sy; lastMx = mouseNX; lastMy = mouseNY;
    needsRender = true;
  }

  if(!needsRender) return;

  updateScene(sy);

  const smooth = prefersReducedMotion ? 1 : SMOOTH;
  camPos.x  += (targetPos.x  - camPos.x)  * smooth;
  camPos.y  += (targetPos.y  - camPos.y)  * smooth;
  camPos.z  += (targetPos.z  - camPos.z)  * smooth;
  camLook.x += (targetLook.x - camLook.x) * smooth;
  camLook.y += (targetLook.y - camLook.y) * smooth;
  camLook.z += (targetLook.z - camLook.z) * smooth;

  camera.position.copy(camPos);
  camera.lookAt(camLook);
  camera.updateMatrixWorld();

  renderer.render(scene, camera);

  const state = parseScroll(sy);
  if(state.phase==='dwell' && state.sectionIdx>=0){
    const name = SECTIONS[state.sectionIdx];
    positionPanel(PANELS[name], name, state.sectionIdx);
  }

  // Keep rendering only while the camera is still easing toward its target.
  const settled =
    Math.abs(targetPos.x - camPos.x) + Math.abs(targetPos.y - camPos.y) +
    Math.abs(targetPos.z - camPos.z) + Math.abs(targetLook.x - camLook.x) +
    Math.abs(targetLook.y - camLook.y) + Math.abs(targetLook.z - camLook.z) < SETTLE_EPS;
  needsRender = !(settled && buildDone);
}
requestAnimationFrame(animate);

let resizeRaf = 0;
window.addEventListener('resize',()=>{
  cancelAnimationFrame(resizeRaf);
  resizeRaf = requestAnimationFrame(()=>{
    // Preserve the reader's place in the narrative rather than snapping
    // them to a different section when the viewport height changes.
    const frac = TOTAL_PX ? window.scrollY / TOTAL_PX : 0;
    recomputeLayout();
    renderer.setSize(VW, VH);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    camera.aspect = VW/VH;
    camera.updateProjectionMatrix();
    window.scrollTo(0, frac * TOTAL_PX);
    lastSy = -1;
    needsRender = true;
  });
});
