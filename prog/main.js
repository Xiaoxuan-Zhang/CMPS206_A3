/**
 * Function called when the webpage loads.
 */
 var canvas;
 var gl, g_objects = [],g_colors = [];
 var scene;
function main() {
  //
  // YOUR CODE HERE
  //
  canvas = document.getElementById('myWebGL');
  if (!canvas)
  {
    console.log('Fail to retrieve canvas element');
    return false;
  }
  //Register events
  initEventHandelers(canvas);
  gl = getWebGLContext(canvas);
  if (!gl)
  {
    console.log('Failed to get the webgl context');
    return;
  }
  if (!initShaders(gl, ASSIGN3_VSHADER, ASSIGN3_FSHADER))
  {
    console.log('Failed to initialize shaders');
    return;
  }
  scene = new Scene();
  tick();
}
