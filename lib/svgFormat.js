class svgFormat {
  constructor() {
    this.shape = '';
    this.text = '';
    
  }

  s

  render() {
    return `<svg  version= "1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <${this.shape} style="fill:${this.color} <text x="150" y="150" fill="white text-anchor="middle" font-size="60">${this.text}</text></svg>`
  }

  setShape( shape ) {
    if (shape !== 'circle' && shape !== 'rect' && shape !== 'ellipse') {
      throw new Error('Shape must be either circle, rect, or ellipse');
    }
    this.shape = shape;
  }

  setText( text, color ) {
    if (text.length > 3) {
      throw new Error('Text must not exceed 3 characters');
    }
    this.text = `text x="150" y="100" text-anchor="middle" font-size="60" fill="${color}" text-anchor="middle" font-size="60">${text}`;
  }
}

module.exports = svgFormat;