/**
 * 
 * @param {*} hex hex string color
 * @param {*} opacity (optional) for opacity, default: 0.5
 * 
 * Can be used as backgroundColor when you want only backgroundColor to have opacity
 */

export const hexToRgbAWithOpacity = (hex, opacity = 0.5) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    const rgba = `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ',',
    )},${opacity})`;
    return rgba;
  }
  return colors.white;
};