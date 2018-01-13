var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var mouseX = 0, mouseY = 0;

// Rendering the scene
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Resizing the window
window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.updateProjectionMatrix();
});

// Creating a light for the scene
var pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
pointLight.position.set( 5, 5, 5 );
scene.add( pointLight );

// Creating the cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial( { color: 0xFFFFFF } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Position the camera to see the cube
camera.position.z = 5;
var controls = new THREE.OrbitControls( camera );

var guiControls = new function() {
  this.rotationX = 0.001;
  this.rotationY = 0.001;
  this.rotationZ = 0.001;
}

// Models
var model;
var forecastModel;

// Load the JSON files and provide callback functions (modelToScene
var loader = new THREE.JSONLoader();
// loader.load( "models/main_building.json", addModelToScene );
// loader.load( "models/building_right.json", addModelToScene );
// loader.load( "models/building_left.json", addModelToScene );
loader.load( "models/uvSphere.json", addSphereToScene );

// After loading JSON from our file, we add it to the scene
function addModelToScene( geometry, materials ) {
  var material = new THREE.MeshFaceMaterial(materials);
  model = new THREE.Mesh( geometry, material );
  model.scale.set(0.5,0.5,0.5);
  scene.add( model );
}

// Special callback to get a reference to the sphere
function addSphereToScene( geometry, materials ){
  var material = new THREE.MeshFaceMaterial(materials);
  sphereModel = new THREE.Mesh( geometry, material );
  sphereModel.scale.set(0.5,0.5,0.5);
  sphereModel.position.y += 0.5;
  scene.add( sphereModel );
}



// dat GUI control to play with objects
var datGUI = new dat.GUI();
datGUI .add(guiControls, 'rotationX', 0, 0.1);
datGUI .add(guiControls, 'rotationY', 0, 0.1);
datGUI .add(guiControls, 'rotationZ', 0, 0.1);
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
