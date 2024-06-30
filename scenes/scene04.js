const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshPhongMaterial(
        {color: 0xffffff}
    ));
 cube.position.x = 1;
 cube.position.y = 1; 
 cube.castShadow = true;
 scene.add(cube);

 const chao = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshPhongMaterial(
        {color: 0xffffff, side: THREE.DoubleSide}
    ));
chao.rotation.x = THREE.MathUtils.degToRad(-90);
chao.receiveShadow = true;
scene.add(chao);


//ponto de luz 
const shadowlight = new THREE.DirectionalLight(0xff0000);
shadowlight.position.y = 4;
shadowlight.castShadow = true;
scene.add(shadowlight);

x3.add(shadowlight);

renderer.setAnimationLoop( () =>{
    x3.tick();

    x3.fps(()=> {
        renderer.render(scene, camera)});
});