/**
 * Specifies a geometric object.
 *
 * @author "Your Name Here"
 * @this {Geometry}
 */
class Geometry {
  /**
   * Constructor for Geometry.
   *
   * @constructor
   */
  constructor() {
    this.vertices = []; // Vertex objects. Each vertex has x-y-z.
    this.indices = [];
    this.color = [];  // The color of your geometric object
    this.modelMatrix = new Matrix4(); // Model matrix applied to geometric object

  }

  /**
   * Renders this Geometry within your webGL scene.
   */
  render() {
    //
    // YOUR CODE HERE
    //

    // Recommendations: sendUniformVec4ToGLSL(), tellGLSLToDrawCurrentBuffer(),
    // and sendAttributeBufferToGLSL() are going to be useful here.
    var data = [];
    for (var i = 0; i < this.vertices.length; i++)
    {
      data = data.concat(this.vertices[i].points);
    }
    sendAttributeBufferToGLSL(new Float32Array(data), 3, "a_position");
    sendUniformVec4ToGLSL(this.color, "u_color");
    sendUniformMatToGLSL(this.modelMatrix, "u_model");

    if (this.indices.length == 0)
    {
      tellGLSLToDrawArrays(this.vertices.length);
    } else {
      setIndexBuffer(this.indices);
      tellGLSLToDrawCurrentBuffer(this.indices.length);
    }


  }

  /**
   * Responsible for updating the geometry's modelMatrix for animation.
   * Does nothing for non-animating geometry.
   */
  updateAnimation() {
    return;

    // NOTE: This is just in place so you'll be able to call updateAnimation()
    // on geometry that don't animate. No need to change anything.
  }
}
