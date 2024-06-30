const loader = new THREE.TextureLoader();

const polyester = new THREE.MeshStandardMaterial({
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg'), //cor base
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg') //normal 
});

const wood = new THREE.MeshStandardMaterial({
    map: loader.load('Texturelabs_Brick_120S.jpg'),
});

const paredes_da_casa = new THREE.MeshStandardMaterial({
    map: loader.load('imagens_texturas/tijolos/Bricks092_1K-PNG_Color.png'),
    normalMpa: loader.load('imagens_texturas/tijolos/Bricks092_1K-PNG_NormalDX.png')
});

const chao_da_cena = new THREE.MeshStandardMaterial({
    map: loader.load('imagens_texturas/PavingStones138_1K-JPG/PavingStones138_1K-JPG_Color.jpg'),
    normalMpa: loader.load('imagens_texturas/PavingStones138_1K-JPG/PavingStones138_1K-JPG_NormalGL.jpg'),
    normalMpa: loader.load('imagens_texturas/PavingStones138_1K-JPG/PavingStones138_1K-JPG_NormalDX.jpg')
});

const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial({color: 0x2c0c9, side: THREE.DoubleSide}); 

//chao da cena
const radius = 50;  // Raio de 50 unidades
const planeSize = 1;  // Tamanho de cada plano (1x1)
const diameter = radius * 2;  // Diâmetro da área a ser preenchida
const numberOfPlanesPerAxis = Math.ceil(diameter / planeSize);  // Número de planos necessários por eixo

for (let i = 0; i < numberOfPlanesPerAxis; i++) {
    for (let j = 0; j < numberOfPlanesPerAxis; j++) {
        const x = (i * planeSize) - radius;  // Calcula a posição X
        const z = (j * planeSize) - radius;  // Calcula a posição Z
        
        // Verifica se o plano está dentro do círculo de raio 50
        if (Math.sqrt(x * x + z * z) <= radius) {
            // Criação do plano
            const plano = new THREE.Mesh(new THREE.PlaneBufferGeometry(planeSize, planeSize), chao_da_cena);
            plano.rotation.x = THREE.MathUtils.degToRad(-90);
            plano.position.set(x, 0, z);
            scene.add(plano);
        }
    }
}


/* Adicionar chão dentro da casa */
const innerFloorGeometry = new THREE.PlaneGeometry(4, 4);
const innerFloor = new THREE.Mesh(innerFloorGeometry, wood);
innerFloor.rotation.x = -Math.PI / 2;
innerFloor.position.set(0, 0.01, 0); // Eleve ligeiramente para evitar z-fighting
innerFloor.receiveShadow = true;
scene.add(innerFloor);

/* Criar paredes */
// Parede direita
const geometryParede1 = new THREE.BoxGeometry(0.3, 5, 1);
const materialParede1 = new THREE.MeshPhongMaterial({ paredes_da_casa });
const parede1 = new THREE.Mesh(geometryParede1, materialParede1);
parede1.position.set(2, 2, 1.5);
parede1.castShadow = true;
parede1.receiveShadow = true;
scene.add(parede1);

const parede1_2 = new THREE.Mesh(geometryParede1, materialParede1);
parede1_2.position.set(2, 2, -1.5);
parede1_2.castShadow = true;
parede1_2.receiveShadow = true;
scene.add(parede1_2);

const geometry_chao = new THREE.BoxGeometry(0.3, 2, 2);
const parede_chao = new THREE.Mesh(geometry_chao, materialParede1);
parede_chao.position.set(2, 0.5, 0);
parede_chao.castShadow = true;
parede_chao.receiveShadow = true;
scene.add(parede_chao);

const geometry_teto = new THREE.BoxGeometry(0.3, 2, 2);
const parede_teto = new THREE.Mesh(geometry_chao, materialParede1);
parede_teto.position.set(2, 4, 0);
parede_teto.castShadow = true;
parede_teto.receiveShadow = true;
scene.add(parede_teto);

// Parede esquerda
const geometryParede2 = new THREE.BoxGeometry(0.3, 5, 1);
const materialParede2 = new THREE.MeshPhongMaterial({ color: 0x836FFF });
const parede2 = new THREE.Mesh(geometryParede2, materialParede2);
parede2.position.set(-2, 2, 1.5);
parede2.castShadow = true;
parede2.receiveShadow = true;
scene.add(parede2);

const parede2_2 = new THREE.Mesh(geometryParede2, materialParede2);
parede2_2.position.set(-2, 2, -1.5);
parede2_2.castShadow = true;
parede2_2.receiveShadow = true;
scene.add(parede2_2);

const geometry_chao2 = new THREE.BoxGeometry(0.3, 2, 2);
const parede_chao2 = new THREE.Mesh(geometry_chao2, materialParede2);
parede_chao2.position.set(-2, 0.5, 0);
parede_chao2.castShadow = true;
parede_chao2.receiveShadow = true;
scene.add(parede_chao2);

const geometry_teto2 = new THREE.BoxGeometry(0.3, 2, 2);
const parede_teto2 = new THREE.Mesh(geometry_chao2, materialParede2);
parede_teto2.position.set(-2, 4, 0);
parede_teto2.castShadow = true;
parede_teto2.receiveShadow = true;
scene.add(parede_teto2);

// Parede traseira
const geometryFundo = new THREE.BoxGeometry(4, 5, 0.3);
const materialFundo = new THREE.MeshPhongMaterial({ paredes_da_casa });
const fundo = new THREE.Mesh(geometryFundo, materialFundo);
fundo.position.set(0, 2, -2);
fundo.castShadow = true;
fundo.receiveShadow = true;
scene.add(fundo);

// Parede frontal
const geometryFrente = new THREE.BoxGeometry(2, 5, 0.3);
const materialFrente = new THREE.MeshPhongMaterial({ color: 0x20B2AA });
const frente = new THREE.Mesh(geometryFrente, materialFrente);
frente.position.set(-1, 2, 2);
frente.castShadow = true;
frente.receiveShadow = true;
scene.add(frente);

const geometry_parede_frente = new THREE.BoxGeometry(0.5, 5, 0.3);
const parede_frente = new THREE.Mesh(geometry_parede_frente, materialFrente);
parede_frente.position.set(1.8, 2, 2);
parede_frente.castShadow = true;
parede_frente.receiveShadow = true;
scene.add(parede_frente);

const geometry_parede_frente_cima = new THREE.BoxGeometry(3, 2, 0.3);
const parede_frente_cima = new THREE.Mesh(geometry_parede_frente_cima, materialFrente);
parede_frente_cima.position.set(0.5, 4, 2);
parede_frente_cima.castShadow = true;
parede_frente_cima.receiveShadow = true;
scene.add(parede_frente_cima);

// Teto
const teto = new THREE.Mesh(new THREE.ConeGeometry(4, 3,4), paredes_da_casa)
teto.position.set(0, 6, 0);
teto.rotation.y = Math.PI / 4;
scene.add(teto);


/*
const plano = new THREE.Mesh(new THREE.PlaneBufferGeometry(150, 150), material) // altura e largura
plano.rotation.x = 2;
plano.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(plano);
*/

renderer.setAnimationLoop( () =>{
    x3.tick();

    x3.fps(()=> { renderer.render(scene, camera)});

    renderer.render(scene, camera);
});

renderer.render(scene, camera);