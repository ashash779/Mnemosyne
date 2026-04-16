/**
 * Health stages for Shelly, indexed by orange count (0–5).
 * Each stage drives SVG colour, scale, eyes, cheeks, mouth variant, under-eye bags, shell line treatment, and sparkles.
 *
 * @typedef {'frown' | 'weak_smile' | 'neutral' | 'small_smile' | 'smile' | 'big_smile'} MouthType
 * @typedef {'faded' | 'normal' | 'vibrant'} ShellPattern
 *
 * @typedef {object} ShellyHealthStage
 * @property {string} label
 * @property {string} bodyColor
 * @property {string} shellColor
 * @property {number} eyeSize
 * @property {number} eyeOpenness
 * @property {number} cheekOpacity
 * @property {MouthType} mouthType
 * @property {boolean} hasBags
 * @property {number} bagOpacity
 * @property {number} bodyScale
 * @property {ShellPattern} shellPattern
 * @property {boolean} sparkles
 */

/** @type {ShellyHealthStage[]} */
export const shellyHealthStages = [
  {
    label: 'Exhausted',
    bodyColor: '#8f9e82',
    shellColor: '#6a7c6a',
    eyeSize: 0.6,
    eyeOpenness: 0.3,
    cheekOpacity: 0,
    mouthType: 'frown',
    hasBags: true,
    bagOpacity: 0.8,
    bodyScale: 0.88,
    shellPattern: 'faded',
    sparkles: false,
  },
  {
    label: 'Very Tired',
    bodyColor: '#9aaa8a',
    shellColor: '#5d7560',
    eyeSize: 0.68,
    eyeOpenness: 0.42,
    cheekOpacity: 0.18,
    mouthType: 'weak_smile',
    hasBags: true,
    bagOpacity: 0.4,
    bodyScale: 0.91,
    shellPattern: 'faded',
    sparkles: false,
  },
  {
    label: 'Tired',
    bodyColor: '#aec578',
    shellColor: '#4e8058',
    eyeSize: 0.76,
    eyeOpenness: 0.56,
    cheekOpacity: 0.42,
    mouthType: 'neutral',
    hasBags: false,
    bagOpacity: 0,
    bodyScale: 0.94,
    shellPattern: 'normal',
    sparkles: false,
  },
  {
    label: 'Recovering',
    bodyColor: '#bcd462',
    shellColor: '#46724e',
    eyeSize: 0.84,
    eyeOpenness: 0.72,
    cheekOpacity: 0.68,
    mouthType: 'small_smile',
    hasBags: false,
    bagOpacity: 0,
    bodyScale: 0.97,
    shellPattern: 'normal',
    sparkles: false,
  },
  {
    label: 'Almost There',
    bodyColor: '#c4df64',
    shellColor: '#3f6848',
    eyeSize: 0.92,
    eyeOpenness: 0.88,
    cheekOpacity: 0.86,
    mouthType: 'smile',
    hasBags: false,
    bagOpacity: 0,
    bodyScale: 0.99,
    shellPattern: 'vibrant',
    sparkles: false,
  },
  {
    label: 'Thriving',
    bodyColor: '#c8e86a',
    shellColor: '#4a8c5c',
    eyeSize: 1,
    eyeOpenness: 1,
    cheekOpacity: 1,
    mouthType: 'big_smile',
    hasBags: false,
    bagOpacity: 0,
    bodyScale: 1,
    shellPattern: 'vibrant',
    sparkles: true,
  },
]
