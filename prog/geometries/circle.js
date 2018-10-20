/**
 * Specifies a Circle. A subclass of Geometry.
 *
 * @author "Zhang Xiaoxuan"
 * @this {Circle}
 */
class Circle extends Geometry {
  /**
   * Constructor for Circle.
   *
   * @constructor
   * @param {Number} radius The radius of the circle being constructed
   * @param {Integer} segments The number of segments composing the circle
   * @param {Number} centerX The central x-position of the circle
   * @param {Number} centerY The central y-position of the circle
   */
  constructor(radius, segments, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recommendations: Remember that Circle is a subclass of Geometry.
    // "super" keyword can come in handy when minimizing code reuse.
    super();
    this.segments = segments;
    this.vertices = this.generateCircleVertices(radius, segments, centerX, centerY);
    this.indices = this.generateCircleIndices();
  }

  /**
   * Generates the vertices of the Circle.
   *
   * @private
   * @param {Number} radius The radius of the circle being constructed
   * @param {Integer} segments The number of segments composing the circle
   * @param {Number} centerX The central x-position of the circle
   * @param {Number} centerY The central y-position of the circle
   */
  generateCircleVertices(radius, segments, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recommendations: Might want to call this within your Circle constructor.
    // Keeps your code clean :)
    var vertices = [];
    var offset = 360.0/segments;
    vertices.push(new Vertex(centerX, centerY, 0.0));
    for (var i = 0 ; i < segments; i ++)
    {
      vertices.push(new Vertex(centerX + radius * Math.cos( Math.PI * offset * i/180.0),
                                centerY + radius * Math.sin( Math.PI * offset * i/180.0), 0.0));
    }
    return vertices;
  }
  /**
   * Generates the indices of the Circle.
   */
  generateCircleIndices()
  {
    var indices = [];
    var i;
    for (i = 1; i < this.segments; i++)
    {
      indices.push( i, i + 1, 0 );
    }
    indices.push( i, 1, 0 );
    return new Uint8Array(indices);
  }
}
