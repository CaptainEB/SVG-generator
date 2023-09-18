const Shapes = require('./shapes');

describe('Shapes', () => {
  const text = 'Sam';
  const textColor = 'red';
  const shapeColor = 'blue';

  describe('useCircle', () => {
    it('returns a circle SVG with the correct text and colors', () => {
      const shapes = new Shapes({ text, textColor, shapeColor });
      const svg = shapes.useCircle();
      expect(svg).toContain(`<circle r="100" cx="150" cy="100" fill="${shapeColor}"/>`);
      expect(svg).toContain(`<text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="110" fill="${textColor}">${text}</text>`);
    });
  });

  describe('useSquare', () => {
    it('returns a square SVG with the correct text and colors', () => {
      const shapes = new Shapes({ text, textColor, shapeColor });
      const svg = shapes.useSquare();
      expect(svg).toContain(`<rect x='50' width="200" height="200" fill="${shapeColor}" />`);
      expect(svg).toContain(`<text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="100" fill="${textColor}">${text}</text>`);
    });
  });

  describe('useTriangle', () => {
    it('returns a triangle SVG with the correct text and colors', () => {
      const shapes = new Shapes({ text, textColor, shapeColor });
      const svg = shapes.useTriangle();
      expect(svg).toContain(`<polygon points="150,0 0,200 300,200" fill="${shapeColor}" />`);
      expect(svg).toContain(`<text x="150" y="140" text-anchor="middle" alignment-baseline="middle" font-size="100" fill="${textColor}">${text}</text>`);
    });
  });
});