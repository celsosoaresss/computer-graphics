const loader = new THREE.TextureLoader();

const polyester = new THREE.MeshStandardMaterial({
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg'), //cor base
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg') //normal 
});

const wood = new THREE.MeshStandardMaterial({
    map: loader.load('Texturelabs_Brick_120S.jpg'),
});

const metal = new THREE.MeshStandardMaterial({
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/basecolor.jpg'),
    normalMpa: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/opacity.jpg')
});

const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial({color: 0x2c0c9, side: THREE.DoubleSide}); 

const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(1,1,1), wood);
scene.add(cube);
x3.add(cube, {label: 'cubo'}) ;

const circle = new THREE.Mesh(new THREE.CircleBufferGeometry(0.5, 20), material); //raios e segmentos
circle.position.x = -2;
scene.add(circle);

const cone = new THREE.Mesh(new THREE.ConeBufferGeometry(0.3, 0.5), metal); //raio, altura e segmentos
cone. position.x = 2;
scene.add(cone);

const cilindro = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.5, 0.5, 1), material) // raio de cima. raio de baixo e altura
cilindro. position.y = 2;
scene.add(cilindro);

const plano = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), material) // altura e largura
plano.rotation.x = 2;
plano.rotation.x = THREE.MathUtils.degToRad(-90);
plano.position.z = -2;
scene.add(plano);

const esfera = new THREE.Mesh(new THREE.SphereBufferGeometry(0.3, 20, 50), polyester) // raio, seguimentos de largura e altura
esfera. position.z = 2;
scene.add(esfera);


renderer.setAnimationLoop( () =>{
    x3.tick();

    x3.fps(()=> { renderer.render(scene, camera)});

    renderer.render(scene, camera);
});

renderer.render(scene, camera);