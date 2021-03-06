/**
 * Specifies a circle which moves randomly.
 *
 * @author "Your Name"
 * @this {RandomCircle}
 */
class RandomCircle extends Circle {
  /**
   * Constructor for RandomCircle.
   *
   * @constructor
   * @param {Number} radius The radius of the random circle being constructed
   * @param {Integer} segements The number of segments composing the circle
   * @param {Number} centerX The x-position of the circle being constructed
   * @param {Number} centerY The y-position of the circle being constructed
   * @returns {RandomCircle} RandomCircle object created
   */
  constructor(radius, segments, centerX, centerY) {
    //
    // YOUR CODE HERE
    //

    // Recomendations: You're going to need a few variables to keep track of
    // information relevant to your animation. For example, a circle is going
    // to need a variable to keep track of the direction the circle is moving.
    super(radius, segments, 0.0, 0.0);
    this.x = centerX;
    this.y = centerY;
    this.offset_x = (Math.random() * 2.0 - 1.0) * 0.0005;
    this.offset_y = (Math.random() * 2.0 - 1.0) * 0.0005;
    this.angle = 0.0;
    this.now = performance.now();
  }

  /**
   * Updates random circle's animation. Changes modelMatrix into a translation
   * matrix translating into a random direction.
   */
  updateAnimation() {
    //
    // YOUR CODE HERE
    //

    // Recomendations: Refer to README.txt for more detalied recommendations
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.
    this.x += this.offset_x ;
    this.y += this.offset_y ;
    this.modelMatrix.setTranslate(this.x, this.y, 0.0);


  }

}
