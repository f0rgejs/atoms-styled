// src/constants.js

export const constants = {
  // раскладка
  flex: { flex: 1 },
  row: { flexDirection: 'row' },
  rowR: { flexDirection: 'row-reverse' },
  column: { flexDirection: 'column' },
  columnR: { flexDirection: 'column-reverse' },
  wrap: { flexWrap: 'wrap' },
  nw: { flexWrap: 'nowrap' },

  // выравнивание
  a_center: { alignItems: 'center' },
  a_start: { alignItems: 'flex-start' },
  a_end: { alignItems: 'flex-end' },
  a_stretch: { alignItems: 'stretch' },
  a_baseline: { alignItems: 'baseline' },
  j_center: { justifyContent: 'center' },
  j_start: { justifyContent: 'flex-start' },
  j_end: { justifyContent: 'flex-end' },
  j_between: { justifyContent: 'space-between' },
  j_around: { justifyContent: 'space-around' },
  j_evenly: { justifyContent: 'space-evenly' },

  // комбинированные
  center: { alignItems: 'center', justifyContent: 'center' },

  // позиционирование
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  z: { elevation: 0 }, // см. примечание ниже

  // прочее
  hidden: { overflow: 'hidden' },
  visible: { overflow: 'visible' },
  none: { display: 'none' },
  grow: { flexGrow: 1 },
  shrink: { flexShrink: 0 },
};
