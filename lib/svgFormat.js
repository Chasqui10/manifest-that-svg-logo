class svgFormat {
  constructor() {
    this.shapeEl = '';
    this.textEl = ''; 
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
  }

  setText( message, color ) {
    if (message.length > 3) {
      throw new Error('Text must not exceed 3 characters');
    }
    this.textEl = `<text x="150" y="100" text-anchor="middle" font-size="60" fill="${color}">${message}</text>`;
  }

  setShape( shape ) {
    this.shapeEl = shape.render();
  }
}

module.exports = svgFormat;