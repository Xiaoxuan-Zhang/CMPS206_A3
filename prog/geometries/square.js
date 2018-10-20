/**
 * Specifies a Square. A subclass of Geometry.
 *
 * @author "Zhang Xiaoxuan"
 * @this {Square}
 */
class Square extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   */
  constructor(size, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recommendations: Remember that Square is a subclass of Geometry.
    // "super" keyword can come in handy when minimizing code reuse.
    super();
    this.vertices = this.generateSquareVertices(size, centerX, centerY);
    this.indices = this.generateSquareIndices();
  }

  /**
   * Generates the vertices of the square.
   *
   * @private
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   */
  generateSquareVertices(size, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recommendations: Might want to call this within your Square constructor.
    // Keeps your code clean :)
    var vertices = [
      new Vertex(centerX - size, centerY + size, 0.0),
      new Vertex(centerX + size, centerY + size, 0.0),
      new Vertex(centerX + size, centerY - size, 0.0),
      new Vertex(centerX - size, centerY - size, 0.0)
    ];
    return vertices;
  }
  /**
   * Generates the indices of the square.
   *
   * @private
   */
  generateSquareIndices() {
    var indices = new Uint8Array([
      0, 1, 2,
      0, 2, 3
    ]);
    return indices;
  }
}
