/**
 * Sends data to a uniform variable expecting a matrix value.
 *
 * @private
 * @param {Array} val Value being sent to uniform variable
 * @param {String} uniformName Name of the uniform variable recieving data
 */
 function sendUniformMatToGLSL(val, uniformName) {
   //
   // YOUR CODE HERE
   //

   // Recomendations: This is going to be very similar to sending a float/vec.
   var val_loc = gl.getUniformLocation(gl.program, uniformName);
   if (val_loc < 0) {
     console.log('Failed to get the storage location of ' + uniformName);
     return;
   }
   gl.uniformMatrix4fv(val_loc, false, val.elements);
}

/**
 * Sends data to an attribute variable using a buffer.
 *
 * @private
 * @param {Float32Array} data Data being sent to attribute variable
 * @param {Number} dataCount The amount of data to pass per vertex
 * @param {String} attribName The name of the attribute variable
 */
function sendAttributeBufferToGLSL(data, dataCount, attribName) {
  //
  // YOUR CODE HERE
  //

  // Recommendations: This piece of code should do these three things:
  // 1. Create a an attribute buffer
  // 2. Bind data to that buffer
  // 3. Enable the buffer for use
  //
  // Some modifications can be made to this function to improve performance. Ask
  // a TA in lab if you're interested in these modifications.
  // Create a buffer object
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }
  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  var attribLoc = gl.getAttribLocation(gl.program, attribName);
  if (attribLoc < 0) {
    console.log('Failed to get the storage location of' + attribName);
    return -1;
  }
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(attribLoc, dataCount, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(attribLoc);

}
/**
 * set indices buffer
 *
 * @private
 * @param {Uint8Array} indices Data being sent to attribute variable
 */
function setIndexBuffer(indices) {
// Write the indices to the buffer object
  var indexBuffer = gl.createBuffer();
  if (!indexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
}
/**
 * Draws the current buffer loaded. Buffer was loaded by sendAttributeBufferToGLSL.
 * @param {Integer} pointCount The amount of indices being drawn from the buffer.
 */
function tellGLSLToDrawCurrentBuffer(pointCount) {
  //
  // YOUR CODE HERE
  //

  // Recommendations: Should only be one line of code.
  gl.drawElements(gl.TRIANGLES, pointCount, gl.UNSIGNED_BYTE, 0);
}

/**
 * Draws the current buffer loaded. Buffer was loaded by sendAttributeBufferToGLSL.
 * @param {Integer} pointCount The amount of vertices being drawn from the buffer.
 */
function tellGLSLToDrawArrays(pointCount) {
  //
  // YOUR CODE HERE
  //

  // Recommendations: Should only be one line of code.
  gl.drawArrays(gl.TRIANGLES, 0, pointCount);
}
/**
 * Sends a float value to the specified uniform variable within GLSL shaders.
 * Prints an error message if unsuccessful.
 *
 * @param {float} val The float value being passed to uniform variable
 * @param {String} uniformName The name of the uniform variable
 */
function sendUniformFloatToGLSL(val, uniformName) {
  //
  // YOUR CODE HERE
  //
  var val_loc = gl.getUniformLocation(gl.program, uniformName);
  if (val_loc < 0) {
    console.log('Failed to get the storage location of ' + uniformName);
    return;
  }
  gl.uniform1f(val_loc, val);
}

/**
 * Sends an JavaSript array (vector) to the specified uniform variable within
 * GLSL shaders. Array can be of length 2-4.
 *
 * @param {Array} val Array (vector) being passed to uniform variable
 * @param {String} uniformName The name of the uniform variable
 */
function sendUniformVec4ToGLSL(val, uniformName) {
  //
  // YOUR CODE HERE
  //
  var val_loc = gl.getUniformLocation(gl.program, uniformName);
  if (val_loc < 0) {
    console.log('Failed to get the storage location of ' + uniformName);
    return;
  }
  gl.uniform4f(val_loc, val[0], val[1], val[2], val[3]);
}
