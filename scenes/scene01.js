const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial({color: 0x9758e8}); 

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

x3.add(cube, {label: 'cubo'}) ;

renderer.setAnimationLoop( () =>{
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    x3.tick();

    x3.fps(()=> { renderer.render(scene, camera)});

    renderer.render(scene, camera);
});

renderer.render(scene, camera);