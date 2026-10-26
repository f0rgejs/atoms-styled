// src/index.js
import { colors } from './colors.js';
import { constants } from './constants.js';

// префикс → CSS-свойство. Только то, что легально в RN.
const PROPS = {
  r: 'borderRadius',
  p: 'padding',
  m: 'margin',
  w: 'width',
  h: 'height',
  g: 'gap',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  fs: 'fontSize',
  fw: 'fontWeight',
  lh: 'lineHeight',
  br: 'borderWidth',
  bt: 'borderTopWidth',
  bb: 'borderBottomWidth',
  bl: 'borderLeftWidth',
  brw: 'borderRightWidth',
  op: 'opacity',
  z: 'zIndex',
};

// в RN числа — это dp, строки с 'px' запрещены
const unit = (num) => {
  const n = Number(num);
  return Number.isFinite(n) ? n : undefined;
};

// значения с суффиксом единицы: r_50p -> '50%'
const PERCENT = 'p';

const SPECIAL_VALUES = {
  flex: 1,
  none: 0,
};

export const atoms = new Proxy({}, {
  get(_, key) {
    if (typeof key !== 'string') return undefined;

    // 1. готовые константы: a.flex, a.center, ...
    if (key in constants) return constants[key];

    // 2. цвета из палитры: a.blue_500, a.teal_a2, ...
    if (key in colors) return colors[key];

    // 3. генератор: prefix_значение
    const match = /^([a-z]+)_([\d.]+)(p?)$/.exec(key);
    if (!match) return undefined;

    const [, prefix, num, suffix] = match;
    const cssProp = PROPS[prefix];
    if (!cssProp) return undefined;

    const value = unit(num);
    if (value === undefined) return undefined;

    if (suffix === PERCENT) {
      return { [cssProp]: `${value}%` };
    }
    return { [cssProp]: value };
  },
});
