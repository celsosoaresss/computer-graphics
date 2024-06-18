import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/*criar cena e configurações da câmera*/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// adicionar eixos cartesianos
var axes = new THREE.AxesHelper(10);
scene.add(axes);

camera.position.set(5, 5, 5);
camera.lookAt(scene.position);

/*render*/
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 1); // cor de fundo
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

/* Configurar controles de órbita */
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

/* CRIAR CUBO*/
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//criar triangulos
const triangleGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0, 0, 0,
    2, 0, 0,
    2, 2, 0
]);

triangleGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

const triangleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
const triangle = new THREE.Mesh(triangleGeometry, triangleMaterial);
scene.add(triangle);

camera.position.z = 5;

//função para animar os objetos
function animate() {

	triangle.rotation.x += 0.06;
	triangle.rotation.y += 0.06;

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}

 // Ajustando o renderizador e a câmera ao redimensionar a janela --- reutilizado
 window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
});