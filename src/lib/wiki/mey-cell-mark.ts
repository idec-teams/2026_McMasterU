/**
 * Geometry for the MEYcell mark, recovered from the original animated GIF so
 * the logo can be drawn instead of shipped as a raster.
 *
 * The wordmark is a marching-squares trace of the artwork's static layer. The
 * halftone field turned out to be 21 discs on fixed centres whose radii follow
 * a single plane wave — see `MARK_WAVE`. Every coordinate below is in the
 * source artwork's 500x491 space.
 */

export const MARK_VIEWBOX = "0 0 500 491";

/** Traced outline of "MEY". */
export const WORDMARK_MEY_PATH =
  "M67.6 105.0L69.0 104.5L92.0 104.5L93.5 105.0L94.4 106.0L94.6 109.0L95.4 110.0L95.6 113.0L96.4 114.0L96.6 117.0L97.4 118.0L97.6 121.0L98.4 122.0L98.6 125.0L99.4 126.0L99.6 129.0L100.4 130.0L100.6 133.0L101.4 134.0L101.6 138.0L103.0 138.4L103.4 138.0L103.6 135.0L104.4 134.0L104.6 131.0L105.4 130.0L105.6 126.0L106.4 125.0L106.6 122.0L107.4 121.0L107.6 118.0L108.4 117.0L108.6 114.0L109.4 113.0L109.6 110.0L110.4 109.0L110.6 106.0L111.5 105.0L113.0 104.5L137.0 104.6L137.5 106.0L137.4 164.0L136.0 164.5L123.0 164.5L121.6 164.0L121.5 126.0L121.0 122.7L120.5 125.0L119.6 126.0L119.4 129.0L118.6 130.0L118.4 133.0L117.6 134.0L117.4 136.0L116.6 137.0L116.4 140.0L115.6 141.0L115.4 143.0L114.6 144.0L114.4 147.0L113.6 148.0L113.4 151.0L112.6 152.0L112.4 154.0L111.6 155.0L111.4 158.0L110.6 159.0L110.4 161.0L109.6 162.0L109.4 164.0L108.0 164.5L96.0 164.4L95.6 164.0L95.4 162.0L94.6 161.0L94.4 158.0L93.6 157.0L93.4 155.0L92.6 154.0L92.4 151.0L91.6 150.0L91.4 147.0L90.6 146.0L90.4 144.0L89.6 143.0L89.4 140.0L88.6 139.0L88.4 136.0L87.6 135.0L87.4 133.0L86.6 132.0L86.4 129.0L85.6 128.0L85.4 125.0L84.5 124.0L84.0 121.7L83.5 125.0L83.4 164.0L82.0 164.5L69.0 164.4L67.7 163.0L68.5 161.0L68.5 121.0L67.5 118.0L67.5 106.0ZM155.6 105.0L157.0 104.5L201.0 104.5L202.4 105.0L202.5 118.0L202.0 119.4L174.0 119.5L173.0 119.6L172.5 121.0L172.5 126.0L173.0 127.4L200.0 127.6L200.5 129.0L200.4 140.0L199.0 141.4L198.0 141.5L173.0 141.6L172.5 143.0L172.5 148.0L173.0 149.4L174.0 149.5L202.0 149.6L202.5 151.0L202.5 163.0L202.0 164.4L201.0 164.5L157.0 164.5L155.6 164.0L155.5 106.0ZM214.6 105.0L216.0 104.5L233.0 104.6L234.6 108.0L236.4 110.0L238.6 115.0L240.4 117.0L242.6 122.0L244.5 124.0L245.0 125.3L247.6 120.0L249.4 118.0L252.6 111.0L254.4 109.0L255.6 106.0L257.0 104.6L273.0 104.5L274.4 105.0L274.4 106.0L272.6 108.0L271.4 111.0L269.6 113.0L268.4 116.0L266.6 118.0L264.4 123.0L262.6 125.0L261.4 128.0L259.6 130.0L258.4 133.0L256.6 135.0L255.4 138.0L253.6 140.0L253.5 163.0L253.0 164.4L252.0 164.5L238.0 164.5L236.6 164.0L236.4 142.0L234.4 138.0L232.6 136.0L231.4 133.0L229.6 131.0L228.4 128.0L226.6 126.0L225.4 123.0L223.6 121.0L222.4 118.0L220.6 116.0L219.4 113.0L217.6 111.0L216.4 108.0L214.6 106.0Z";

/**
 * Traced outline of "cell". Needs the even-odd fill rule so the counters of
 * the "c" and "e" punch through.
 *
 * The artwork sets this word as "Cell"; the lowercase "c" here is the original
 * cap scaled to the x-height taken from the "e". That is not a liberty — in
 * this face the round lowercase letters are the caps at that same ratio, so
 * the scaled "C" lands within a pixel of the "e" bowl's stroke weight. "ell"
 * is nudged left to close up the narrower letter, and the whole word is set
 * flush with the left edge of "MEY".
 */
export const WORDMARK_CELL_PATH =
  "M83.1 195.9L84.2 195.5L94.2 195.5L94.9 195.6L95.6 196.1L97.7 196.3L102.4 198.7L107.0 203.3L107.4 204.4L108.7 205.8L108.9 207.3L109.4 208.0L109.6 209.4L110.1 210.1L110.1 211.5L109.9 211.8L98.5 211.8L96.3 208.3L95.6 207.7L94.9 207.5L93.5 206.3L92.0 206.1L91.3 205.5L88.5 205.5L87.8 205.5L87.1 206.1L84.9 206.3L81.8 209.4L80.4 212.2L80.2 215.1L79.6 215.8L79.6 216.5L79.6 219.4L80.2 220.1L80.4 222.9L80.9 223.7L81.1 225.1L84.9 228.9L86.3 229.1L87.1 229.6L90.6 229.7L91.3 229.6L92.0 229.1L93.5 228.9L94.9 228.2L97.3 225.8L98.5 222.7L109.1 222.6L110.1 222.9L110.1 225.1L109.6 225.8L109.4 227.2L107.3 231.5L102.0 236.8L97.7 238.9L96.3 239.0L95.6 239.6L91.3 239.8L90.6 240.3L89.9 240.4L88.5 240.3L87.8 239.8L83.5 239.6L82.8 239.0L80.6 238.9L76.4 236.8L71.4 231.8L70.9 230.8L69.7 229.4L69.5 227.9L68.2 225.8L68.1 223.7L67.5 222.9L67.5 222.2L67.5 212.2L68.1 211.5L68.2 209.4L68.8 208.7L69.0 207.3L70.4 204.4L76.4 198.4L79.2 197.0L80.6 196.9L81.4 196.3L82.8 196.1ZM185.3 180.0L186.7 179.5L198.7 179.5L200.1 180.0L200.2 238.0L199.7 239.4L198.7 239.5L186.7 239.5L185.3 239.0L185.2 181.0ZM216.3 180.0L217.7 179.5L230.7 179.5L232.1 180.0L232.2 238.0L231.7 239.4L230.7 239.5L217.7 239.5L216.3 239.0L216.2 181.0ZM139.2 196.0L140.7 195.5L152.7 195.5L153.7 195.6L154.7 196.4L156.7 196.6L162.2 200.0L165.1 203.0L165.3 204.0L167.1 206.0L168.1 208.0L168.3 210.0L169.1 211.0L169.3 214.0L170.1 215.0L170.2 221.0L169.7 222.4L139.7 222.5L138.3 223.0L138.3 224.0L140.2 227.0L141.7 228.4L144.7 229.5L150.7 229.4L155.7 225.6L167.7 225.6L169.0 227.0L167.1 231.0L160.7 237.4L158.7 238.4L156.7 238.6L155.7 239.4L153.7 239.6L152.7 240.4L140.7 240.4L139.7 239.6L137.7 239.4L136.7 238.6L134.7 238.4L132.7 236.6L131.2 236.0L127.3 232.0L124.3 226.0L124.1 223.0L123.3 222.0L123.3 213.0L124.1 212.0L124.3 210.0L125.1 209.0L125.3 207.0L126.7 204.5L132.7 198.6L136.7 196.6L138.7 196.4ZM142.7 206.6L139.3 210.0L139.1 211.0L138.3 212.0L138.7 213.4L152.7 213.5L153.7 213.4L155.0 212.0L154.1 210.0L150.7 206.6L143.7 206.5Z";

/** A disc in the halftone field: `[x, y, baseRadius]`. Centres never move. */
export type MarkDot = readonly [x: number, y: number, r: number];

export const MARK_DOTS: readonly MarkDot[] = [
  [309.68, 221.06, 14.89],
  [367.99, 222.95, 14.84],
  [426.32, 223.06, 14.86],

  [248.67, 271.99, 7.46],
  [306.54, 272.28, 9.86],
  [367.35, 276.07, 9.9],
  [426.28, 274.82, 14.83],

  [167.45, 323.2, 3.79],
  [208.85, 321.97, 3.79],
  [248.13, 320.08, 7.48],
  [305.27, 322.8, 6.78],
  [365.27, 322.18, 9.86],
  [425.03, 328.69, 14.8],

  [165.58, 367.02, 3.79],
  [207.17, 368.78, 3.78],
  [247.93, 367.86, 7.37],
  [304.65, 368.69, 6.75],
  [362.2, 368.71, 6.81],

  [164, 410.91, 3.71],
  [207.68, 412.77, 3.71],
  [249.92, 414.87, 3.73],
];

/**
 * Every disc pulses as
 *
 *     r(t) = base * (1 + swing * cos(2*PI * (t - delay) / frames))
 *
 * and `delay` is linear in `(y - x)`, which makes the whole field one plane
 * wave whose crest sweeps diagonally toward the upper right. Fitting the
 * source frames recovers this to within 0.02 frames, so nothing here is
 * approximated by eye.
 *
 * `swing` is consumed by CSS (via the `--mey-swing` custom property) rather
 * than by this module, so the keyframes and this description stay in step.
 */
export const MARK_WAVE = {
  frames: 24,
  frameMs: 70,
  swing: 0.25,
  phase: 19.16,
  slope: -0.0532,
} as const;

export const MARK_PERIOD_MS = MARK_WAVE.frames * MARK_WAVE.frameMs;

function mod(value: number, n: number): number {
  return ((value % n) + n) % n;
}

/**
 * A disc's offset into the shared pulse cycle, as a negative CSS
 * `animation-delay` so it starts already part-way through rather than waiting.
 */
export function dotDelayMs([x, y]: MarkDot): number {
  const { frames, frameMs, phase, slope } = MARK_WAVE;
  const offset = mod(phase + slope * (y - x), frames);
  return -Math.round((frames - offset) * frameMs);
}
