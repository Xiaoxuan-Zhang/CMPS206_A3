/**
 * Specifies a cube. A subclass of Geometry.
 *
 * @author "Zhang Xiaoxuan"
 * @this {Cube}
 */
class Cube extends Geometry {
  /**
   * Constructor for cube.
   *
   * @constructor
   * @param {Number} size The size of the cube drawn
   * @param {Number} centerX The center x-position of the cube
   * @param {Number} centerY The center y-position of the cube
   */
  constructor(size, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recommendations: Remember that cube is a subclass of Geometry.
    // "super" keyword can come in handy when minimizing code reuse.
    super();
    this.vertices = this.generateCubeVertices(size, centerX, centerY, 0.0);
    this.indices =  new Uint8Array([
    0, 1, 2,   0, 2, 3,    // front
    0, 4, 7,   0, 3, 7,    // left
    0, 4, 5,   0, 1, 5,    // up
    1, 5, 6,   1, 2, 6,    // right
    3, 7, 6,   3, 2, 6,    // down
    4, 5, 6,   4, 7, 6     // back
 ]);

  }

  /**
   * Generates the vertices of the cube.
   *
   * @private
   * @param {Number} size The size of the cube drawn
   * @param {Number} centerX The center x-position of the cube
   * @param {Number} centerY The center y-position of the cube
   */
  generateCubeVertices(size, centerX, centerY, centerZ) {
    //
    // YOUR CODE HERE
    //
    var vertices = [
      new Vertex(centerX - size, centerY + size, centerZ + size),
      new Vertex(centerX + size, centerY + size, centerZ + size),
      new Vertex(centerX + size, centerY - size, centerZ + size),
      new Vertex(centerX - size, centerY - size, centerZ + size),
      new Vertex(centerX - size, centerY + size, centerZ - size),
      new Vertex(centerX + size, centerY + size, centerZ - size),
      new Vertex(centerX + size, centerY - size, centerZ - size),
      new Vertex(centerX - size, centerY - size, centerZ - size)
    ];
    return vertices;
  }
}
