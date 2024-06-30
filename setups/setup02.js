const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0x212424
}

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(options.backgroundColor);

const camera = new THREE. PerspectiveCamera(75, options.width/options.height);

camera.position.x = 2.5;
camera.position.y = 6.5;
camera.position.z = 9;

const light = new THREE.AmbientLight( 0xffffff, 0.5);
scene.add(light);

const x3 = new THREEx3({ THREE, OrbitControls: THREE.OrbitControls, camera, renderer, scene});

x3.add(camera, {open: false});
x3.add(light, {helper: {visible: false}});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;