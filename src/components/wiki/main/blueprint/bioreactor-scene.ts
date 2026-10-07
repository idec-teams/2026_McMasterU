import type * as THREE_NS from "three";

type Three = typeof THREE_NS;
type V3 = [number, number, number];

/*
 * A generic stirred-tank bioreactor: a solid steel vessel with a dished
 * bottom, headplate and motor, and a glass window cut into the side facing the
 * viewer. Through it you see the yellow yeast culture being stirred — two
 * Rushton impellers turning, the surface dipping into a vortex, bubbles rising
 * from the sparger and suspended cells swirling with the flow.
 *
 * Units are arbitrary (vessel radius = 1). No real dimensions are claimed.
 */

const R = 1; // vessel radius
const DISH = 0.22; // depth of the dished bottom
const WALL_TOP = 2.35;
const LEVEL = 1.72; // culture fill height
const HEAD_R = 1.1;
const HEAD_T = 0.12;
const HEAD_TOP = WALL_TOP + HEAD_T;
const MOTOR_R = 0.22;
const MOTOR_H = 0.5;
const IMPELLERS = [0.62, 1.3];
const SPARGER_Y = 0.32;
const LIQUID_R = R * 0.975;
const VORTEX = 0.1; // how far the surface dips at the centre

/** The window: an opening in the wall centred on the side facing the camera. */
const WIN_HALF = (34 * Math.PI) / 180; // half its angular width
const WIN_BOTTOM = 0.42;
const WIN_TOP = 2.08;

const BUBBLES = 70;
const CELLS = 140; // suspended yeast, swirling with the stir

const STIR = 2.4; // impeller speed, rad/s

/** Vessel profile from the bottom centre up to `top`, as [radius, y]. */
function profile(top: number): [number, number][] {
  const pts: [number, number][] = [];
  for (let i = 0; i <= 12; i++) {
    const a = (i / 12) * (Math.PI / 2);
    pts.push([R * Math.sin(a), DISH * (1 - Math.cos(a))]);
  }
  pts.push([R, top]);
  return pts;
}

/** Builds the scene into `host` and starts it; returns a cleanup function. */
export function mountBioreactor(THREE: Three, host: HTMLElement): () => void {
  const css = getComputedStyle(document.documentElement);
  const token = (name: string, fallback: string) =>
    css.getPropertyValue(name).trim() || fallback;
  const TEAL = new THREE.Color(token("--teal", "#00d4b4"));
  const GOLD = new THREE.Color(token("--gold", "#ffc94d"));
  const DIM = new THREE.Color(token("--text-dim", "#5d8faa"));
  const SURFACE = new THREE.Color(token("--surface", "#0c2540"));

  let renderer: THREE_NS.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    return () => {}; // no WebGL: the panel just stays empty
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  Object.assign(renderer.domElement.style, {
    width: "100%",
    height: "100%",
    display: "block",
  });
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 2.5, 7.6);
  camera.lookAt(0, 1.5, 0);

  // Cool sky light from above, a key light from the front right and a teal
  // rim from behind-left to pick out the vessel's edge against the dark page.
  scene.add(new THREE.HemisphereLight(0xdff4ff, SURFACE, 1.15));
  const key = new THREE.DirectionalLight(0xffffff, 2.1);
  key.position.set(3, 5, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(TEAL, 1.4);
  rim.position.set(-5, 3, -4);
  scene.add(rim);

  /* ---------------------------------------------------------- materials */
  const steel = (color: THREE_NS.Color, metal = 0.6, rough = 0.38) =>
    new THREE.MeshStandardMaterial({
      color,
      metalness: metal,
      roughness: rough,
      side: THREE.DoubleSide,
    });
  // Opaque shell in the brand green; the culture shows only through the window.
  const shellMat = steel(SURFACE.clone().lerp(TEAL, 0.45), 0.35, 0.45);
  const plateMat = steel(SURFACE.clone().lerp(TEAL, 0.3), 0.45, 0.4);
  const partMat = steel(DIM.clone().lerp(new THREE.Color(0xffffff), 0.25));
  const outline = new THREE.LineBasicMaterial({
    color: TEAL,
    transparent: true,
    opacity: 0.55,
  });

  /* ------------------------------------------------------------ helpers */
  const ring = (r: number, y: number, seg = 96) => {
    const pts = Array.from({ length: seg }, (_, i) => {
      const a = (i / seg) * Math.PI * 2;
      return new THREE.Vector3(r * Math.sin(a), y, r * Math.cos(a));
    });
    return new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(pts),
      outline,
    );
  };
  const cylinder = (
    r: number,
    y0: number,
    y1: number,
    mat: THREE_NS.Material,
    [x, z]: [number, number] = [0, 0],
  ) => {
    const m = new THREE.Mesh(
      new THREE.CylinderGeometry(r, r, y1 - y0, 32),
      mat,
    );
    m.position.set(x, (y0 + y1) / 2, z);
    return m;
  };
  const lathe = (
    pts: [number, number][],
    mat: THREE_NS.Material,
    start = 0,
    length = Math.PI * 2,
  ) =>
    new THREE.Mesh(
      new THREE.LatheGeometry(
        pts.map(([r, y]) => new THREE.Vector2(r, y)),
        96,
        start,
        length,
      ),
      mat,
    );
  /** Point on a circle of radius r at angle a, where a = 0 faces the camera. */
  const around = (r: number, a: number, y: number): V3 => [
    r * Math.sin(a),
    y,
    r * Math.cos(a),
  ];

  const rig = new THREE.Group();
  scene.add(rig);

  /* ------------------------------------------------------- vessel shell */
  // Three bands so the middle one can leave the window open.
  const below = profile(WIN_BOTTOM);
  rig.add(lathe(below, shellMat));
  rig.add(
    lathe(
      [
        [R, WIN_BOTTOM],
        [R, WIN_TOP],
      ],
      shellMat,
      WIN_HALF,
      Math.PI * 2 - WIN_HALF * 2,
    ),
  );
  rig.add(
    lathe(
      [
        [R, WIN_TOP],
        [R, WALL_TOP],
      ],
      shellMat,
    ),
  );
  rig.add(ring(R * 1.002, DISH), ring(R * 1.002, WALL_TOP));

  // Glass pane, faintly tinted, and a polished frame round the opening.
  rig.add(
    lathe(
      [
        [R * 1.004, WIN_BOTTOM],
        [R * 1.004, WIN_TOP],
      ],
      new THREE.MeshStandardMaterial({
        color: TEAL.clone().lerp(new THREE.Color(0xffffff), 0.6),
        transparent: true,
        opacity: 0.1,
        roughness: 0.05,
        metalness: 0,
        depthWrite: false,
      }),
      -WIN_HALF,
      WIN_HALF * 2,
    ),
  );
  const framePts: THREE_NS.Vector3[] = [];
  const ARC = 24;
  for (let i = 0; i <= ARC; i++) {
    const a = -WIN_HALF + (2 * WIN_HALF * i) / ARC;
    framePts.push(new THREE.Vector3(...around(R * 1.012, a, WIN_TOP)));
  }
  for (let i = 0; i <= ARC; i++) {
    const a = WIN_HALF - (2 * WIN_HALF * i) / ARC;
    framePts.push(new THREE.Vector3(...around(R * 1.012, a, WIN_BOTTOM)));
  }
  rig.add(
    new THREE.Mesh(
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(framePts, true, "centripetal", 0.2),
        200,
        0.024,
        8,
        true,
      ),
      partMat,
    ),
  );

  /* -------------------------------------------- headplate and motor */
  rig.add(cylinder(HEAD_R, WALL_TOP, HEAD_TOP, plateMat));
  rig.add(ring(HEAD_R * 1.002, WALL_TOP), ring(HEAD_R * 1.002, HEAD_TOP));
  rig.add(cylinder(MOTOR_R, HEAD_TOP, HEAD_TOP + MOTOR_H, shellMat));
  rig.add(
    cylinder(0.13, HEAD_TOP + MOTOR_H, HEAD_TOP + MOTOR_H + 0.12, plateMat),
  );
  rig.add(ring(MOTOR_R * 1.01, HEAD_TOP + MOTOR_H));

  /* ------------------------------------------------------- internals */
  // Baffles against the wall, sparger ring and its feed pipe, two probes.
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + (k * Math.PI) / 2;
    const h = WALL_TOP - 0.1 - (DISH + 0.12);
    const baffle = new THREE.Mesh(
      new THREE.BoxGeometry(0.02, h, 0.11),
      partMat,
    );
    baffle.position.set(...around(0.915, a, DISH + 0.12 + h / 2));
    baffle.rotation.y = a;
    rig.add(baffle);
  }
  const sparger = new THREE.Mesh(
    new THREE.TorusGeometry(0.45, 0.022, 8, 64),
    partMat,
  );
  sparger.rotation.x = Math.PI / 2;
  sparger.position.y = SPARGER_Y;
  rig.add(sparger);
  const feed = Math.PI * 1.25; // behind and to the left
  const [fx, , fz] = around(0.62, feed, 0);
  rig.add(cylinder(0.022, SPARGER_Y, HEAD_TOP + 0.22, partMat, [fx, fz]));
  for (const a of [Math.PI * 0.85, Math.PI * 1.55]) {
    const [px, , pz] = around(0.62, a, 0);
    rig.add(cylinder(0.035, 0.98, HEAD_TOP + 0.24, partMat, [px, pz]));
  }

  // Shaft and the two Rushton impellers, which spin.
  const rotor = new THREE.Group();
  rig.add(rotor);
  rotor.add(cylinder(0.028, IMPELLERS[0] - 0.1, HEAD_TOP, partMat));
  for (const y of IMPELLERS) {
    rotor.add(cylinder(0.3, y - 0.012, y + 0.012, partMat));
    rotor.add(cylinder(0.06, y - 0.05, y + 0.05, partMat));
    for (let j = 0; j < 6; j++) {
      const a = (j * Math.PI) / 3;
      const blade = new THREE.Mesh(
        new THREE.BoxGeometry(0.02, 0.18, 0.22),
        partMat,
      );
      blade.position.set(...around(0.31, a, y));
      blade.rotation.y = a;
      rotor.add(blade);
    }
  }

  /* ------------------------------------------------------------ culture */
  rig.add(
    lathe(
      profile(LEVEL).map(([r, y]) => [r * (LIQUID_R / R), y]),
      new THREE.MeshBasicMaterial({
        color: GOLD,
        transparent: true,
        opacity: 0.68,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    ),
  );

  // Surface: a polar grid whose heights are recomputed every frame.
  const RINGS = 14;
  const SEG = 72;
  const surfPos = new Float32Array((RINGS + 1) * (SEG + 1) * 3);
  const surfIdx: number[] = [];
  for (let i = 0; i < RINGS; i++) {
    for (let j = 0; j < SEG; j++) {
      const a = i * (SEG + 1) + j;
      const b = a + SEG + 1;
      surfIdx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const surfGeo = new THREE.BufferGeometry();
  surfGeo.setAttribute("position", new THREE.BufferAttribute(surfPos, 3));
  surfGeo.setIndex(surfIdx);
  rig.add(
    new THREE.Mesh(
      surfGeo,
      new THREE.MeshBasicMaterial({
        color: GOLD.clone().lerp(new THREE.Color(0xffffff), 0.2),
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    ),
  );
  const surfaceY = (r: number, a: number, t: number) =>
    LEVEL -
    VORTEX * (1 - (r / LIQUID_R) ** 2) +
    0.014 * Math.sin(3 * a - STIR * t + 6 * r);

  // Bubbles rising from the sparger, and suspended cells swirling round.
  const dot = (r: number, color: THREE_NS.Color, opacity: number, n: number) =>
    new THREE.InstancedMesh(
      new THREE.SphereGeometry(r, 8, 6),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        depthWrite: false,
      }),
      n,
    );
  const bubbles = dot(
    0.02,
    GOLD.clone().lerp(new THREE.Color(0xffffff), 0.6),
    0.55,
    BUBBLES,
  );
  const cells = dot(
    0.016,
    GOLD.clone().lerp(new THREE.Color(0x6b4a12), 0.35),
    0.85,
    CELLS,
  );
  rig.add(bubbles, cells);
  // Deterministic scatter, so the scene looks the same on every load. (A
  // plain linear congruence lines neighbouring particles up into chains.)
  const hash = (i: number, k: number) => {
    const s = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453;
    return s - Math.floor(s);
  };
  const bubbleSeeds = Array.from({ length: BUBBLES }, (_, i) => ({
    angle: hash(i, 1) * Math.PI * 2,
    radius: 0.18 + hash(i, 2) * 0.62,
    speed: 0.12 + hash(i, 3) * 0.11,
    phase: hash(i, 4),
  }));
  const cellSeeds = Array.from({ length: CELLS }, (_, i) => ({
    angle: hash(i, 5) * Math.PI * 2,
    radius: 0.2 + hash(i, 6) * 0.72,
    height: 0.34 + hash(i, 7) * (LEVEL - 0.5),
    bob: hash(i, 8) * Math.PI * 2,
  }));
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3();

  /* --------------------------------------------------------- animation */
  const update = (t: number) => {
    rotor.rotation.y = t * STIR;

    for (let i = 0; i <= RINGS; i++) {
      const r = (i / RINGS) * LIQUID_R;
      for (let j = 0; j <= SEG; j++) {
        const a = (j / SEG) * Math.PI * 2;
        const k = (i * (SEG + 1) + j) * 3;
        surfPos[k] = r * Math.sin(a);
        surfPos[k + 1] = surfaceY(r, a, t);
        surfPos[k + 2] = r * Math.cos(a);
      }
    }
    surfGeo.attributes.position.needsUpdate = true;

    bubbleSeeds.forEach((b, i) => {
      const p = (t * b.speed + b.phase) % 1;
      const r = b.radius * (0.7 + 0.3 * Math.sin(p * Math.PI));
      const a = b.angle + t * 1.1 + p * 2;
      const top = surfaceY(r, a, t) - 0.03;
      const fade = p > 0.9 ? (1 - p) / 0.1 : 1;
      pos.set(...around(r, a, SPARGER_Y + p * (top - SPARGER_Y)));
      scl.setScalar(Math.max(fade, 0.001));
      bubbles.setMatrixAt(i, m4.compose(pos, q, scl));
    });
    bubbles.instanceMatrix.needsUpdate = true;

    // Faster near the impellers at the centre, slower out by the wall.
    scl.setScalar(1);
    cellSeeds.forEach((c, i) => {
      const a = c.angle + t * (1.7 - c.radius);
      const y = c.height + 0.05 * Math.sin(t * 0.9 + c.bob);
      pos.set(
        ...around(c.radius, a, Math.min(y, surfaceY(c.radius, a, t) - 0.02)),
      );
      cells.setMatrixAt(i, m4.compose(pos, q, scl));
    });
    cells.instanceMatrix.needsUpdate = true;
  };

  const resize = () => {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };
  const sizer = new ResizeObserver(resize);
  sizer.observe(host);

  // Run only while on screen; a single still frame for reduced motion.
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let raf = 0;
  let t = 0;
  let last = 0;
  const frame = (now: number) => {
    t += Math.min((now - last) / 1000, 0.05);
    last = now;
    update(t);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  };
  const start = () => {
    if (raf || still) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };
  const watcher = new IntersectionObserver(([entry]) =>
    entry.isIntersecting ? start() : stop(),
  );
  watcher.observe(host);

  update(0);
  resize();

  return () => {
    stop();
    watcher.disconnect();
    sizer.disconnect();
    scene.traverse((obj) => {
      const o = obj as THREE_NS.Mesh;
      o.geometry?.dispose();
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) m?.dispose();
    });
    renderer.dispose();
    renderer.domElement.remove();
  };
}
