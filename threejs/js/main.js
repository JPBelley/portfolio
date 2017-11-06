var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var mouseX = 0, mouseY = 0;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
var controls = new THREE.OrbitControls( camera );

var guiControls = new function() {
  this.rotationX = 0.001;
  this.rotationY = 0.001;
  this.rotationZ = 0.001;
}

var datGUI = new dat.GUI();
datGUI .add(guiControls, 'rotationX', 0, 0.1);
datGUI .add(guiControls, 'rotationY', 0, 0.1);
datGUI .add(guiControls, 'rotationZ', 0, 0.1);

var animate = function () {
  requestAnimationFrame( animate );

  // camera.position.x += ( mouseX - camera.position.x ) * 0.05;
  // camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

  cube.rotation.x += guiControls.rotationX;
  cube.rotation.y += guiControls.rotationY;
  cube.rotation.z += guiControls.rotationZ;

  renderer.render(scene, camera);
};


animate();
