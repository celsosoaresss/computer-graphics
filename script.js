import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/* Criar cena e configurações da câmera */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Adicionar eixos cartesianos
const axes = new THREE.AxesHelper(1);
scene.add(axes);

camera.position.set(8, 8, 8);
camera.lookAt(scene.position);

/* Render */
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 1); // Cor de fundo
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Habilitar sombras no renderizador
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

/* Configurar controles de câmera */
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

/* Adicionar iluminação */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Luz central (principal)
const pointLightCentral = new THREE.PointLight(0xFF9329, 500);
pointLightCentral.position.set(0, 6, 0);
pointLightCentral.castShadow = true; // Habilitar sombras na luz
pointLightCentral.shadow.mapSize.width = 1024;
pointLightCentral.shadow.mapSize.height = 1024;
scene.add(pointLightCentral);

/*
// Luzes para os pilares
const pointLight = new THREE.PointLight(0xFF9329, 2);
pointLight.position.set(1, 3, 1);
pointLight.castShadow = true;
scene.add(pointLight);

const pointLight1 = new THREE.PointLight(0xFF9329, 2);
pointLight1.position.set(1, 3, -1);
pointLight1.castShadow = true;
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xFF9329, 2);
pointLight2.position.set(-1, 3, 1);
pointLight2.castShadow = true;
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight(0xFF9329, 2);
pointLight3.position.set(-1, 3, -1);
pointLight3.castShadow = true;
scene.add(pointLight3);
*/

/* Adicionar chão com textura de mármore */
const floorGeometry = new THREE.PlaneGeometry(200, 200);
const floorMaterial = new THREE.MeshPhongMaterial({  color: 0x000000 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // 
floor.position.y = 0; // 
floor.receiveShadow = true; // 
scene.add(floor);

/* Criar altares */
const geometry0 = new THREE.BoxGeometry(1, 3, 1);
const material0 = new THREE.MeshPhongMaterial({ color: 0x0366F6 });
const altar0 = new THREE.Mesh(geometry0, material0);
altar0.position.set(1, 1.5, 1);
altar0.castShadow = true; 
altar0.receiveShadow = true; 
scene.add(altar0);

const geometry1 = new THREE.BoxGeometry(1, 3, 1);
const material1 = new THREE.MeshPhongMaterial({ color: 0x836FFF });
const altar1 = new THREE.Mesh(geometry1, material1);
altar1.position.set(-1, 1.5, -1);
altar1.castShadow = true;
altar1.receiveShadow = true;
scene.add(altar1);

const geometry2 = new THREE.BoxGeometry(1, 3, 1);
const material2 = new THREE.MeshPhongMaterial({ color: 0x87CEEB });
const altar2 = new THREE.Mesh(geometry2, material2);
altar2.position.set(1, 1.5, -1);
altar2.castShadow = true;
altar2.receiveShadow = true;
scene.add(altar2);

const geometry3 = new THREE.BoxGeometry(1, 3, 1);
const material3 = new THREE.MeshPhongMaterial({ color: 0x20B2AA });
const altar3 = new THREE.Mesh(geometry3, material3);
altar3.position.set(-1, 1.5, 1);
altar3.castShadow = true;
altar3.receiveShadow = true;
scene.add(altar3);

/* Objetos */
/* Criar cubo */
const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshPhongMaterial({ color: 0xf0ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(1, 4, 1);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);

/* Criar octaedro */
const geometryOct = new THREE.OctahedronGeometry(0.5);
const materialOct = new THREE.MeshPhongMaterial({
    color: 0x90EE90,
    transparent: true, // Permitir transparência
    opacity: 0.9 // Definir nível de opacidade
});
const octaedro = new THREE.Mesh(geometryOct, materialOct);
octaedro.position.set(-1, 4, -1);
octaedro.castShadow = true;
octaedro.receiveShadow = true;
scene.add(octaedro);

/* Adicionar esfera */
const geometryEsfera = new THREE.SphereGeometry(0.4, 32, 16);
const materialEsfera = new THREE.MeshPhongMaterial({ color: 0xA52A2A });
const esfera = new THREE.Mesh(geometryEsfera, materialEsfera);
esfera.position.set(1, 4, -1);
esfera.castShadow = true;
esfera.receiveShadow = true;
scene.add(esfera);

/* Adicionar torus */
const geometryTorus = new THREE.TorusGeometry(10, 3, 16, 100);
const materialTorus = new THREE.MeshPhongMaterial({ color: 0xFF00FF });
const torus = new THREE.Mesh(geometryTorus, materialTorus);
torus.position.set(-1, 4, 1);
torus.scale.set(0.03, 0.03, 0.03);
torus.castShadow = true;
torus.receiveShadow = true;
scene.add(torus);

camera.position.z = 5;

/* Função para animar os objetos */
function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.0001;
    torus.rotation.y += 0.0001;

    octaedro.rotation.y += 0.0001;

    cube.rotation.x += 0.0001;
    cube.rotation.y += 0.0001;

    controls.update(); // Atualizar controles

    renderer.render(scene, camera);
}

/* Ajustando o renderizador e a câmera ao redimensionar a janela */
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
