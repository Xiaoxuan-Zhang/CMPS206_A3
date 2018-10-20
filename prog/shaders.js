// Basic Vertex Shader that receives position and size for each vertex (point).
var ASSIGN3_VSHADER =
  `
    precision mediump float;
    uniform vec4 u_color;
    uniform mat4 u_model;
    attribute vec4 a_position;
    void main(){
      gl_Position = u_model * a_position;
    }
  `;

// Basic Fragment Shader that receives a single one color (point).
var ASSIGN3_FSHADER =
  `
  precision mediump float;
  uniform vec4 u_color;

  void main(){
    gl_FragColor = u_color;
  }
  `;
