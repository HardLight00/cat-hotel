export {};
// import { Color, ColorRGB, FilterRGB } from '@/types';
//
// const solveNarrow = () => {
// };
//
// const solveWide = () => {
// };
//
// const toCSS = (filters: FilterRGB) => {
//   const applyMultiplier = (idx: number, multiplier = 1) => Math.round(filters[idx] * multiplier);
//
//   return `filter:
//               invert(${applyMultiplier(0)}%)
//               sepia(${applyMultiplier(1)}%)
//               saturate(${applyMultiplier(2)}%)
//               hue-rotate(${applyMultiplier(3, 3.6)}deg)
//               brightness(${applyMultiplier(4)}%)
//               contrast(${applyMultiplier(5)}%);
//   `;
// };
//
// class Solver {
//   solve() {
//     const result = this.solveNarrow(this.solveWide());
//     return {
//       values: result.values,
//       loss: result.loss,
//       filter: this.css(result.values),
//     };
//   }
//
//   solveWide() {
//     const A = 5;
//     const c = 15;
//     const a = [60, 180, 18000, 600, 1.2, 1.2];
//
//     let best = { loss: Infinity };
//     for (let i = 0; best.loss > 25 && i < 3; i++) {
//       const initial = [50, 20, 3750, 50, 100, 100];
//       const result = this.spsa(A, a, c, initial, 1000);
//       if (result.loss < best.loss) {
//         best = result;
//       }
//     }
//     return best;
//   }
//
//   solveNarrow(wide) {
//     const A = wide.loss;
//     const c = 2;
//     const A1 = A + 1;
//     const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
//     return this.spsa(A, a, c, wide.values, 500);
//   }
//
//   spsa(A, a, c, values, iters) {
//     const alpha = 1;
//     const gamma = 0.16666666666666666;
//
//     let best = null;
//     let bestLoss = Infinity;
//     const deltas = new Array(6);
//     const highArgs = new Array(6);
//     const lowArgs = new Array(6);
//
//     for (let k = 0; k < iters; k++) {
//       const ck = c / Math.pow(k + 1, gamma);
//       for (let i = 0; i < 6; i++) {
//         deltas[i] = Math.random() > 0.5 ? 1 : -1;
//         highArgs[i] = values[i] + ck * deltas[i];
//         lowArgs[i] = values[i] - ck * deltas[i];
//       }
//
//       const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
//       for (let i = 0; i < 6; i++) {
//         const g = lossDiff / (2 * ck) * deltas[i];
//         const ak = a[i] / Math.pow(A + k + 1, alpha);
//         values[i] = fix(values[i] - ak * g, i);
//       }
//
//       const loss = this.loss(values);
//       if (loss < bestLoss) {
//         best = values.slice(0);
//         bestLoss = loss;
//       }
//     }
//     return { values: best, loss: bestLoss };
//
//     function fix(value, idx) {
//       let max = 100;
//       if (idx === 2 /* saturate */) {
//         max = 7500;
//       } else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
//         max = 200;
//       }
//
//       if (idx === 3 /* hue-rotate */) {
//         if (value > max) {
//           value %= max;
//         } else if (value < 0) {
//           value = max + value % max;
//         }
//       } else if (value < 0) {
//         value = 0;
//       } else if (value > max) {
//         value = max;
//       }
//       return value;
//     }
//   }
//   loss(filters) {
//     // Argument is array of percentages.
//     const color = this.reusedColor;
//     color.set(0, 0, 0);
//
//     color.invert(filters[0] / 100);
//     color.sepia(filters[1] / 100);
//     color.saturate(filters[2] / 100);
//     color.hueRotate(filters[3] * 3.6);
//     color.brightness(filters[4] / 100);
//     color.contrast(filters[5] / 100);
//
//     const colorHSL = color.hsl();
//     return (
//       Math.abs(color.r - this.target.r) +
//       Math.abs(color.g - this.target.g) +
//       Math.abs(color.b - this.target.b) +
//       Math.abs(colorHSL.h - this.targetHSL.h) +
//       Math.abs(colorHSL.s - this.targetHSL.s) +
//       Math.abs(colorHSL.l - this.targetHSL.l)
//     );
//   }
// }
//
// export const hexToRGB = (hexColor: Color): ColorRGB | null => {
//   // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
//   const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//
//   const hex = hexColor
//     .toString()
//     .replace(shorthandRegex, (_, r, g, b) => (2 * (r + g + b)).toString());
//
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//
//   return result
//     ? [
//       parseInt(result[1], 16),
//       parseInt(result[2], 16),
//       parseInt(result[3], 16),
//     ]
//     : null;
// }
//
// export const solveColorFilter = (color: ColorRGB) => {
//
// };
//
// export const mapColorToFilter = (hexColor: Color) => {
//   const colorRGB = hexToRGB(hexColor);
//   if (colorRGB?.length !== 3) {
//     return;
//   }
//
//   return solveColorFilter(colorRGB);
// };
