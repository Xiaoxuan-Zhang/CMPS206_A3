var color_red = 1.0, color_green = 0.3, color_blue = 0.1, shape_size = 0.1, segment_counts = 10;
var isMousedown = false;
var object_shape = 0;
var object;
/**
 * Responsible for initializing buttons, sliders, radio buttons, etc. present
 * within your HTML document.
 */
function initEventHandelers() {
  canvas.onmouseup = function(ev){
    isMousedown = false;
  };
  canvas.onmousedown = function(ev){
    isMousedown = true;
    click(ev)
  };
  canvas.onmousemove = function(ev){
    if (isMousedown)
    {
      click(ev);
    }
    var x = ev.clientX;
    var y = ev.clientY;
    var rect = ev.target.getBoundingClientRect();
    x = (x - rect.left) * 2.0/canvas.width - 1.0;
    y = (y - rect.top) * -2.0/canvas.height + 1.0;
    sendTextToHTML(x.toFixed(2), 'x_value');
    sendTextToHTML(y.toFixed(2), 'y_value');
  };
  var slider_red = document.getElementById("color_red");
  var slider_green = document.getElementById("color_green");
  var slider_blue = document.getElementById("color_blue");
  var slider_shapesize = document.getElementById("shape_size");
  var slider_segments = document.getElementById("seg_count");
  slider_red.value = color_red;
  slider_green.value = color_green;
  slider_blue.value = color_blue;
  slider_shapesize.value = shape_size;
  slider_segments.value = segment_counts;
  slider_red.oninput = function(){ color_red = this.value};
  slider_green.oninput = function(){ color_green = this.value};
  slider_blue.oninput = function(){ color_blue = this.value};
  slider_shapesize.oninput = function(){ shape_size = parseFloat(this.value)};
  slider_segments.oninput =  function(){ segment_counts = parseFloat(this.value)};

  /*File upload*/
  //var btn_file = document.getElementById('myObjFile');
  //btn_file.addEventListener("change", handleFiles, false);
}

/**
 * Function called upon mouse click or mouse drag. Computes position of cursor,
 * pushes cursor position as GLSL coordinates, and draws.
 *
 * @param {Object} ev The event object containing the mouse's canvas position
 */
function click(ev) {
  //
  // YOUR CODE HERE
  //
  var x = ev.clientX;
  var y = ev.clientY;
  var rect = ev.target.getBoundingClientRect();
  x = (x - rect.left) * 2.0/canvas.width - 1.0;
  y = (y - rect.top) * -2.0/canvas.height + 1.0;
  var geo;
  switch (object_shape) {
    case 0:
      geo = new FluctuatingTriangle(shape_size, x, y)
      break;
    case 1:
      geo = new SpinningSquare(shape_size, x, y);
      break;
    case 2:
      geo = new RandomCircle(shape_size, segment_counts, x, y);
      break;
    case 3:
      geo = new TiltedCube(shape_size, x, y);
      break;
    case 4:
      geo = new MovingObject(object, shape_size, x, y);
      break;
  }
  geo.color = new Float32Array([color_red, color_green, color_blue, 1.0]);
  scene.addGeometry(geo);

}

/**
 * Renders the scene on the HTML canvas.
 */
function render() {
  //
  // YOUR CODE HERE
  //
  // Clear <canvas>
  scene.render();
}

/**
 * Clears the HTML canvas.
 */
function clearCanvas() {
  scene.clearGeometry();
  gl.clear(gl.COLOR_BUFFER_BIT);
}

/**
 * Changes the size of the points drawn on HTML canvas.
 *
 * @param {float} size Real value representing the size of the point.
 */
function changePointSize(size) {
  //
  // YOUR CODE HERE
  //
}

/**
 * Changes the color of the points drawn on HTML canvas.
 *
 * @param {float} color Color value from 0.0 to 1.0.
 */
function changePointColor(color) {
  //
  // YOUR CODE HERE
  //
}
/**
 * Changes the shape drawn on HTML canvas to triangles.
 */
function selectTriangles() {
  object_shape = 0;
}
/**
 * Changes the shape drawn on HTML canvas to squares.
 */
function selectSquares() {
  object_shape = 1;
}
/**
 * Changes the shape drawn on HTML canvas to circles.
 */
function selectCircles() {
  object_shape = 2;
}
/**
 * Changes the shape drawn on HTML canvas to cubes.
 */
function selectCubes() {
  object_shape = 3;
}
/**
 * Changes the shape drawn on HTML canvas to obj file.
 */
function selectObjects() {
  object_shape = 4;
}
function load_handle(text)
{
  object = new LoadedOBJ(text);
}
function handleFiles(files){
  var filename = files[0];
  if (filename) {

      //loadFile(filename, load_handle);
      var reader = new FileReader();
      reader.onload = function(e) {
	      var obj_text = e.target.result;
        object = new LoadedOBJ(obj_text);
      };
      reader.readAsText(filename);
  } else {
      alert("Failed to load file");
  }
}
