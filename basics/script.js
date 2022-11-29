const canvas = document.querySelector('.webgl');
const scene = new THREE.Scene();

const box = new THREE.BoxGeometry(1, 1, 1);
const materialRed = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const redBox = new THREE.Mesh(box, materialRed);

const sizes = {
  width: 800,
  height: 600
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 0.5;

scene.add(redBox)
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);