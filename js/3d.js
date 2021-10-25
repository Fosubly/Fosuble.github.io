let SCENE;
let CAMERA;
let RENDERER;
let LOADING_MANAGER;
let IMAGE_LOADER;
let OBJ_LOADER;
let GLHF_LOADER;
let CONTROLS;
let MOUSE;
let RAYCASTER;

let TEXTURE;
let OBJECT;
let el = document.getElementById('kost');
let els = {
    
    Width : el.offsetWidth,
    Height: el.offsetHeight 
}
main();

function main(modelInfo) {
    init();
    animate();
}

function init() {
    
    initScene();
    initCamera();
    initRenderer();
    initTexture();
    initLoaders();
    initControls()
    
    

    loadTexture();
    loadModel();
    
   
   
    el.appendChild(RENDERER.domElement);
    
}





function initScene() {
    SCENE = new THREE.Scene();

    initLights();
}

function initLights() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    SCENE.add(ambient);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 1, 1);
    SCENE.add(directionalLight);
}

function initCamera() {
    CAMERA = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    CAMERA.position.z = 100;
}

function initRenderer() {
    RENDERER = new THREE.WebGLRenderer({ alpha: true });
    RENDERER.setPixelRatio(window.devicePixelRatio);
    RENDERER.setSize(els.Width,els.Height);
}

function initLoaders() {
    LOADING_MANAGER = new THREE.LoadingManager();
    IMAGE_LOADER = new THREE.ImageLoader(LOADING_MANAGER);
    OBJ_LOADER = new THREE.OBJLoader(LOADING_MANAGER);
}


function loadModel() {

    OBJ_LOADER.load('./models/BARAB.obj', (object) => {

        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.material.map = TEXTURE;
            }
        });

        object.scale.x = 10;
        object.scale.y =  10;
        object.scale.z = 10;
        object.rotation.x = 0;
        object.rotation.y = Math.PI/2;
        object.position.y = -20;

        OBJECT = object;
        SCENE.add(OBJECT);
    });
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    CAMERA.lookAt(SCENE.position);

    RENDERER.render(SCENE, CAMERA);
}

function initTexture() {
    TEXTURE = new THREE.Texture();
}

function loadTexture() {
    IMAGE_LOADER.load('./models/texture/SteveTX.png', (image) => {

        TEXTURE.image = image;
        TEXTURE.needsUpdate = true;
    });
}

function initControls() {
    CONTROLS = new THREE.OrbitControls(CAMERA,el);
    CONTROLS.minPolarAngle = Math.PI/2;
    CONTROLS.maxPolarAngle = Math.PI/2;
    
    CONTROLS.update();
    CONTROLS.autoRotate = true;
    CONTROLS.autoRotateSpeed = 2;
    CONTROLS.minDistance = 80;
    CONTROLS.maxDistance = 150;
}

function animate() {
    requestAnimationFrame(animate);
    CONTROLS.update();
    render();
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
function enableScrolling(){
    window.onscroll=function(){};
}

/*

function mouseEv(event){
    if(event.type == 'mouseover'){
        console.log("in");
        alert("in")
        disableScrolling();
    }
    if(event.type == 'mouseout'){
        alert("notin")
        console.log("out");
        enableScrolling();
    }
   
}
*/
