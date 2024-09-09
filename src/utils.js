const getStyle = async (a, b, c) => {
    const d = await a.evaluate(
      (a, b) => {
        const c = document.querySelector(a);
        return b.map((a) => window.getComputedStyle(c).getPropertyValue(a));
      },
      b,
      c,
    );
    return d;
  },
  sortColors = (a) => a.sort((a, b) => a.reduce((a, c, d) => a || c - b[d], 0)),
  rgbaToHex = (r, g, b, a) => {
    const outParts = [
      r.toString(16),
      g.toString(16),
      b.toString(16),
      a === 255 ? "" : a.toString(16).substring(0, 2),
    ];

    outParts.forEach(function (part, i) {
      if (part.length === 1) {
        outParts[i] = "0" + part;
      }
    });

    return "#" + outParts.join("");
  },
  compareColors = (a, b, c = 10) => a.every((a, d) => Math.abs(a - b[d]) <= c);
export { getStyle, sortColors, compareColors, rgbaToHex };
