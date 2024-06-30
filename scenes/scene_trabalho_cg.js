// Carregar texturas
const loader = new THREE.TextureLoader();

const textura_cilindro= new THREE.MeshPhysicalMaterial({
    //displacementMap: loader.load('imagens_texturas/Metal012_1K-JPG/Metal012_1K-JPG_Displacement.jpg'),
    map: loader.load('imagens_texturas/Metal012_1K-JPG/Metal012_1K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/Metal012_1K-JPG/Metal012_1K-JPG_NormalGL.jpg'),
    roughnessMap: loader.load('imagens_texturas/Metal012_1K-JPG/Metal012_1K-JPG_Roughness.jpg'),
    metalnessMap: loader.load('imagens_texturas/Metal012_1K-JPG/Metal012_1K-JPG_Metalness.jpg')
});

const textura_cubo= new THREE.MeshPhysicalMaterial({
    //displacementMap: loader.load('imagens_texturas/Facade004_1K-JPG/Facade004_1K-JPG_Displacement.jpg'),
    map: loader.load('imagens_texturas/Facade004_1K-JPG/Facade004_1K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/Facade004_1K-JPG/Facade004_1K-JPG_NormalGL.jpg'),
    roughnessMap: loader.load('imagens_texturas/Facade004_1K-JPG/Facade004_1K-JPG_Roughness.jpg')
});

const textura_esfera= new THREE.MeshPhysicalMaterial({
    //displacementMap: loader.load('imagens_texturas/DiamondPlate008C_1K-JPG/DiamondPlate008C_1K-JPG_Displacement.jpg'),
    map: loader.load('imagens_texturas/DiamondPlate008C_1K-JPG/DiamondPlate008C_1K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/DiamondPlate008C_1K-JPG/DiamondPlate008C_1K-JPG_NormalGL.jpg'),
    roughnessMap: loader.load('imagens_texturas/DiamondPlate008C_1K-JPG/DiamondPlate008C_1K-JPG_Roughness.jpg')
});

const textura_cone= new THREE.MeshPhysicalMaterial({
    //displacementMap: loader.load('imagens_texturas/DiamondPlate008C_1K-JPG/DiamondPlate008C_1K-JPG_Displacement.jpg'),
    map: loader.load('imagens_texturas/Rock021_1K-JPG/Rock021_1K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/Rock021_1K-JPG/Rock021_1K-JPG_NormalGL.jpg'),
    roughnessMap: loader.load('imagens_texturas/Rock021_1K-JPG/Rock021_1K-JPG_Roughness.jpg')
});

const textura_teto = new THREE.MeshPhongMaterial({
    map: loader.load('imagens_texturas/Wood090A_1K-JPG/Wood090A_1K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/Wood090A_1K-JPG/Wood090A_1K-JPG_NormalGL.jpg'),
    side: THREE.DoubleSide
});

const textura_parede = new THREE.MeshPhongMaterial({
    map: loader.load('imagens_texturas/Wallpaper001A_1K-JPG/Wallpaper001A_1K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/Wallpaper001A_1K-JPG/Wallpaper001A_1K-JPG_NormalGL.jpg')
});

const textura_chao = new THREE.MeshPhongMaterial({
    displacementMap: loader.load('imagens_texturas/Planks037A_1K-JPG/Planks037A_1K-JPG_Displacement.jpg'),
    map: loader.load('imagens_texturas/Planks037A_1K-JPG/Planks037A_1K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/Planks037A_1K-JPG/Planks037A_1K-JPG_NormalGL.jpg'),
    side: THREE.DoubleSide
});

const textura_chao_asfato = new THREE.MeshPhongMaterial({
    displacementMap: loader.load('imagens_texturas/Asphalt016_2K-JPG/Asphalt016_2K-JPG_Displacement.jpg'),
    map: loader.load('imagens_texturas/Asphalt016_2K-JPG/Asphalt016_2K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/Asphalt016_2K-JPG/Asphalt016_2K-JPG_NormalGL.jpg'),
    side: THREE.DoubleSide
});

const textura_telha = new THREE.MeshPhysicalMaterial({
    aoMap: loader.load('imagens_texturas/RoofingTiles014C_1K-JPG/RoofingTiles014C_1K-JPG_AmbientOcclusion.jpg'),
    map: loader.load('imagens_texturas/RoofingTiles014C_1K-JPG/RoofingTiles014C_1K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/RoofingTiles014C_1K-JPG/RoofingTiles014C_1K-JPG_NormalGL.jpg'),
    alphaMap: loader.load('imagens_texturas/RoofingTiles014C_1K-JPG/RoofingTiles014C_1K-JPG_Opacity.jpg'),
    roughnessMap: loader.load('imagens_texturas/RoofingTiles014C_1K-JPG/RoofingTiles014C_1K-JPG_Roughness.jpg')
});

const textura_chao_grama = new THREE.MeshPhongMaterial({
    displacementMap: loader.load('imagens_texturas/Planks037A_1K-JPG/Ground037_4K-JPG/Ground037_4K-JPG_Displacement.jpg'),
    map: loader.load('imagens_texturas/Planks037A_1K-JPG/Ground037_4K-JPG/Ground037_4K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/Planks037A_1K-JPG/Ground037_4K-JPG/Ground037_4K-JPG_NormalGL.jpg'),
    side: THREE.DoubleSide
});

const textura_chao_grama_alta = new THREE.MeshPhongMaterial({
    displacementMap: loader.load('imagens_texturas/Grass001_8K-JPG/Grass001_8K-JPG_Displacement.jpg'),
    map: loader.load('imagens_texturas/Grass001_8K-JPG/Grass001_8K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/Grass001_8K-JPG/Grass001_8K-JPG_NormalGL.jpg'),
    side: THREE.DoubleSide
});

const textura_areia = new THREE.MeshPhysicalMaterial({
    aoMap: loader.load('imagens_texturas/Ground062S_2K-JPG/Ground062S_2K-JPG_AmbientOcclusion.jpg'),
    map: loader.load('imagens_texturas/Ground062S_2K-JPG/Ground062S_2K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/Ground062S_2K-JPG/Ground062S_2K-JPG_NormalDX.jpg'),
    roughnessMap: loader.load('imagens_texturas/Ground062S_2K-JPG/Ground062S_2K-JPG_Roughness.jpg')
});

const textura_muro = new THREE.MeshPhysicalMaterial({
    aoMap: loader.load('imagens_texturas/PavingStones138_1K-JPG/PavingStones138_1K-JPG_AmbientOcclusion.jpg'),
    map: loader.load('imagens_texturas/PavingStones138_1K-JPG/PavingStones138_1K-JPG_Color.jpg'), 
    normalMap: loader.load('imagens_texturas/PavingStones138_1K-JPG/PavingStones138_1K-JPG_NormalGL.jpg'),
    roughnessMap: loader.load('imagens_texturas/PavingStones138_1K-JPG/PavingStones138_1K-JPG_Roughness.jpg')
});

// Parede com janela
const paredeJanela = new THREE.Mesh(
    new THREE.BoxBufferGeometry(3, 20, 8),
    textura_parede
);
paredeJanela.position.set(15, 10, 11);
paredeJanela.castShadow = true;
paredeJanela.receiveShadow = true;
scene.add(paredeJanela);

const paredeJanela2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(3, 20, 8),
    textura_parede
);
paredeJanela2.position.set(15, 10, -12);
paredeJanela2.castShadow = true;
paredeJanela2.receiveShadow = true;
scene.add(paredeJanela2);

const paredeJanelaB = new THREE.Mesh(
    new THREE.BoxBufferGeometry(3, 8, 16),
    textura_parede
);
paredeJanelaB.position.set(15, 4, 0);
paredeJanelaB.castShadow = true;
paredeJanelaB.receiveShadow = true;
scene.add(paredeJanelaB);

const paredeJanelaC = new THREE.Mesh(
    new THREE.BoxBufferGeometry(3, 3, 16),
    textura_parede
);
paredeJanelaC.position.set(15, 18, 0);
paredeJanelaC.castShadow = true;
paredeJanelaC.receiveShadow = true;
scene.add(paredeJanelaC);

// Parede lateral 2
const paredeLateral2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(3, 20, 30),
    textura_parede
);
paredeLateral2.position.set(-15, 10, 0);
paredeLateral2.castShadow = true;
paredeLateral2.receiveShadow = true;
scene.add(paredeLateral2);

// Parede com porta
const paredePorta = new THREE.Mesh(
    new THREE.BoxBufferGeometry(15, 20, 3),
    textura_parede
);
paredePorta.position.set(9, 10, -15);
paredePorta.castShadow = true;
paredePorta.receiveShadow = true;
scene.add(paredePorta);

const paredePorta2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(10, 20, 3),
    textura_parede
);
paredePorta2.position.set(-11.5, 10, -15);
paredePorta2.castShadow = true;
paredePorta2.receiveShadow = true;
scene.add(paredePorta2);

const paredePorta3 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(8, 3, 3),
    textura_parede
);
paredePorta3.position.set(-2.5, 18, -15);
paredePorta3.castShadow = true;
paredePorta3.receiveShadow = true;
scene.add(paredePorta3);

// Parede de trás
const paredeTras = new THREE.Mesh(
    new THREE.BoxBufferGeometry(30, 20, 3),
    textura_parede
);
paredeTras.position.set(0, 10, 13.5);
paredeTras.castShadow = true;
paredeTras.receiveShadow = true;
scene.add(paredeTras);

// chão 
const plano = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(30, 30, 100, 100), // seg do displacementMap
    textura_chao
);
plano.rotation.x = THREE.MathUtils.degToRad(-90);
plano.receiveShadow = true;
plano.castShadow = true;
scene.add(plano);

// teto
const teto = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(30, 30), 
    textura_teto
);
teto.position.y = 19;
teto.rotation.x = THREE.MathUtils.degToRad(-90);
teto.receiveShadow = true;
teto.castShadow = true;
scene.add(teto);

// pirâmide que serve de teto 
const geometriaPiramide = new THREE.ConeGeometry(25, 11, 4); // baseWidth, height, segments
const piramide = new THREE.Mesh(geometriaPiramide, textura_telha);
piramide.position.set(0, 25, 0); // Ajustar altura para centralizar
piramide.rotation.y = THREE.MathUtils.degToRad(45); // Rotacionar para alinhar corretamente
piramide.castShadow = true;
piramide.receiveShadow = true;
scene.add(piramide);

// "Lampada" na casa 
const material = new THREE.MeshPhongMaterial({color: 0xffffff, side: THREE.DoubleSide}); 

const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(0.9,5, 0.9), material);
cube.position.set(0, 18, 0);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);

const esfera = new THREE.Mesh(new THREE.SphereBufferGeometry(0.3, 20, 50), new THREE.MeshLambertMaterial({color: 0xffff00})); // raio, seguimentos de largura e altura
esfera.position.y = 15.5;
esfera.castShadow = true;
esfera.receiveShadow = true;
scene.add(esfera);

// aro da lampada 
const points = [];
for (let i = 0; i < 5; i++) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 5 + 3, (i - 3) * 1));
}
const geometry = new THREE.LatheGeometry(points);
const lathe = new THREE.Mesh(geometry, material);

const escala = 0.3 / 2; 
lathe.scale.set(escala, escala, escala);
lathe.rotation.x = Math.PI;
lathe.position.y = 15.3;
lathe.castShadow = true;
lathe.receiveShadow = true;

// Adicionar lathe à cena
scene.add(lathe);

// Objetos na casa
const centro = new THREE.Mesh(new THREE.SphereBufferGeometry(1, 20, 50), textura_esfera); // raio, seguimentos de largura e altura
centro.position.set(-3, 10, 3);
centro.castShadow = true;
centro.receiveShadow = true;
scene.add(centro);

const cone = new THREE.Mesh(new THREE.ConeBufferGeometry(1, 2), textura_cone); // raio, altura e segmentos
cone.position.set(3, 10, -3);
cone.castShadow = true;
cone.receiveShadow = true;
scene.add(cone);

const cilindro = new THREE.Mesh(new THREE.CylinderBufferGeometry(1, 1, 2, 50), textura_cilindro); // raio de cima. raio de baixo e altura
cilindro.position.set(3, 10, 3);
cilindro.castShadow = true;
cilindro.receiveShadow = true;
scene.add(cilindro);

const cubo = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), textura_cubo);
cubo.position.set(-3, 10, -3);
cubo.castShadow = true;
cubo.receiveShadow = true;
scene.add(cubo);

// Função para criar o caminho de pedra
function criarCaminhoDePedra(offsetZ = 0) {
    const asfalto = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(20, 20, 100, 100), // Adicione mais segmentos para o displacementMap
        textura_chao_asfato
    );
    asfalto.rotation.x = THREE.MathUtils.degToRad(-90);
    asfalto.position.set(-2, 0, -20 + offsetZ);
    asfalto.receiveShadow = true;
    asfalto.castShadow = true; // Garantir que o caminho também projeta sombras
    scene.add(asfalto);
}
criarCaminhoDePedra(-4.5);
criarCaminhoDePedra(-20);

// Circulo de asfalto
const circle = new THREE.Mesh(new THREE.CircleBufferGeometry(10, 200, 100, 100), textura_chao_asfato); // raios e segmentos
circle.position.set(-2, 0.3, -50);
circle.rotation.x = THREE.MathUtils.degToRad(-90);
circle.receiveShadow = true;
circle.castShadow = true;
scene.add(circle);

// Função para criar a grama
function criarCirculoDeGrama(offsetX = 0, offsetZ = 0) {
    const planeGrama = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(30, 30, 100, 100), // dimensões do plano
        textura_chao_grama
    );
    planeGrama.position.set(-25 + offsetX, 0, -30 + offsetZ);
    planeGrama.rotation.x = THREE.MathUtils.degToRad(-90);
    planeGrama.receiveShadow = true;
    planeGrama.castShadow = true;
    scene.add(planeGrama);
}

// Criar o primeiro círculo de grama na posição padrão
criarCirculoDeGrama();
criarCirculoDeGrama(-5, 30);
criarCirculoDeGrama(-5, 60);
criarCirculoDeGrama(25, 60);
criarCirculoDeGrama(55, 60);
criarCirculoDeGrama(55, 30);
criarCirculoDeGrama(45, 0);
criarCirculoDeGrama(45, -30);
criarCirculoDeGrama(20, -40);
criarCirculoDeGrama(0, -30);

// Função para criar terreno
function criarTerreno(offsetX = 0, offsetZ = 0) {
    const planeGramaAlta = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(100, 100, 200, 200), 
        textura_chao_grama_alta
    );
    planeGramaAlta.position.set(offsetX, 0.1, offsetZ);
    planeGramaAlta.rotation.x = THREE.MathUtils.degToRad(-90);
    planeGramaAlta.receiveShadow = true;
    planeGramaAlta.castShadow = true;
    scene.add(planeGramaAlta);
}

// Chamar a função para criar o terreno
criarTerreno(80, 80);
criarTerreno(-60, -120);
criarTerreno(30, -120);
criarTerreno(-80, -20);
criarTerreno(-80, 80);
criarTerreno(0, 80);
criarTerreno(80, -20);

// Função para criar areia
function criarAreia(offsetX = 0, offsetZ = 0) {
    const planeAreia = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(200, 200, 100, 100), 
        textura_chao_grama_alta
    );
    planeAreia.position.set(offsetX, -0.1, offsetZ);
    planeAreia.rotation.x = THREE.MathUtils.degToRad(-90);
    planeAreia.receiveShadow = true;
    planeAreia.castShadow = true;
    scene.add(planeAreia);
}

// Chamar a função para criar areia
criarAreia(200, 200);
criarAreia(0, 200);
criarAreia(-200, 200);
criarAreia(200, -250);
criarAreia(0, -250);
criarAreia(-200, -250);
criarAreia(-200, 0);
criarAreia(200, 0);
criarAreia(200, -100);
criarAreia(100, -100);
criarAreia(-200, -100);

//chao maior -y
const chaoMenor = new THREE.Mesh(new THREE.PlaneBufferGeometry(100, 100), textura_chao_grama_alta) // altura e largura
chaoMenor.rotation.x = THREE.MathUtils.degToRad(-90);
chaoMenor.position.y = -0.1;
scene.add(chaoMenor);

// Ponto de luz 1
const shadowlight = new THREE.DirectionalLight(0xffffff, 2); // Definir a intensidade da luz para 2.0
shadowlight.position.set(70, 25, -40);
shadowlight.castShadow = true;

// Configurações de sombras para shadowlight
shadowlight.shadow.mapSize.width = 2048;
shadowlight.shadow.mapSize.height = 2048;
shadowlight.shadow.camera.near = 0.5;
shadowlight.shadow.camera.far = 500;
shadowlight.shadow.camera.left = -50;
shadowlight.shadow.camera.right = 50;
shadowlight.shadow.camera.top = 50;
shadowlight.shadow.camera.bottom = -50;
scene.add(shadowlight);

x3.add(shadowlight);

// Substituir luz de vela por uma luz de holofote
const holofote = new THREE.SpotLight(0xff9329, 2); // Definir a intensidade da luz para 1.0
holofote.position.set(0, 15, 0);
holofote.castShadow = true;
holofote.angle = Math.PI / 4; // Ângulo do cone de luz
holofote.penumbra = 0.1; // Penumbra do holofote
holofote.decay = 2; // Decaimento da luz
holofote.distance = 50; // Distância máxima da luz

// Configurações de sombras para o holofote
holofote.shadow.mapSize.width = 2048;
holofote.shadow.mapSize.height = 2048;
holofote.shadow.camera.near = 0.5;
holofote.shadow.camera.far = 500;
scene.add(holofote);

x3.add(holofote);

// Habilitar sombras no renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setAnimationLoop(() => {

    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;
    cubo.rotation.z += 0.01;

    cilindro.rotation.x += 0.01;
    cilindro.rotation.y += 0.01;
    cilindro.rotation.z += 0.01;

    centro.rotation.x += 0.01;
    centro.rotation.y += 0.01;
    centro.rotation.z += 0.01;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.z += 0.01;

    renderer.render(scene, camera);
});
