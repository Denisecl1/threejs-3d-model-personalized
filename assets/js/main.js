import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

let camera, scene, renderer, stats;
let mixer;
let clock = new THREE.Clock();

let character;
let actions = {};
let activeAction;

init();
animate();

function init() {

    const container = document.createElement('div');
    document.body.appendChild(container);

    // Cámara
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.set(100, 200, 300);

    // Escena
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);
    scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

    // Luces
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2);
    hemiLight.position.set(0, 200, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(0, 200, 100);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Piso
    const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2000, 2000),
        new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add(mesh);

    const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Controles
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 100, 0);
    controls.update();

    window.addEventListener('resize', onWindowResize);

    // Stats
    stats = new Stats();
    container.appendChild(stats.dom);

    // Cargar personaje
    loadCharacter();

    // Teclado
    window.addEventListener('keydown', onKeyDown);
}

// ----------------------------
// CARGAR PERSONAJE BASE
// ----------------------------

function loadCharacter() {

    const loader = new FBXLoader();

    loader.load('models/fbx/Arissa.fbx', function (fbx) {

        character = fbx;
        character.scale.setScalar(1);

        character.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        scene.add(character);

        mixer = new THREE.AnimationMixer(character);

        // Cargar animaciones
        loadAnimation('caminado', '1');
        loadAnimation('golpe', '2');
        loadAnimation('impacto', '3');
        loadAnimation('agachado', '4');
        loadAnimation('aris', '5');

    });
}

// ----------------------------
// CARGAR ANIMACIONES
// ----------------------------

function loadAnimation(name, key) {

    const loader = new FBXLoader();

    loader.load('models/fbx/' + name + '.fbx', function (anim) {

        const clip = anim.animations[0];
        const action = mixer.clipAction(clip);

        actions[key] = action;

    });

}

// ----------------------------
// CONTROL DE TECLADO
// ----------------------------

function onKeyDown(event) {

    const key = event.key;

    if (actions[key]) {

        const newAction = actions[key];

        if (activeAction !== newAction) {

            if (activeAction) {
                activeAction.fadeOut(0.3);
            }

            newAction
                .reset()
                .setEffectiveTimeScale(1)
                .setEffectiveWeight(1)
                .fadeIn(0.3)
                .play();

            activeAction = newAction;
        }
    }
}

// ----------------------------
// RENDER LOOP
// ----------------------------

function animate() {

    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    if (mixer) mixer.update(delta);

    renderer.render(scene, camera);
    stats.update();
}

// ----------------------------
// RESIZE
// ----------------------------

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}