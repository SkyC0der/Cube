
import * as THREE from './build/three.module.js';
var camera, scene, renderer;
var mesh;
init();
animate();

// USe boxGeometry Function to create shapes
// Material is what our object is made of
// Mesh is the combintion of the two, thus the cube is the mesh of the box and material whew!
function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 400;

    scene = new THREE.Scene();

    var texture = new THREE.TextureLoader().load( 'itachi.jpeg' );

    var geometry = new THREE.BoxBufferGeometry( 150, 150, 150 );
    var material = new THREE.MeshBasicMaterial( { map: texture });

    mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh);

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //

    window.addEventListener( 'resize', onWindowResize, true );

}
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.006;
    mesh.rotation.y += 0.015;

    renderer.render( scene, camera );

}