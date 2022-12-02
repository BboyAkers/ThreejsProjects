import './style.css'

import * as THREE from 'three'

const sizes = {
  width: 800,
  height: 600
};

const canvas = document.querySelector('.webgl');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

const group = new THREE.Group();

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(-1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
)
cube2.position.x = -1;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(-1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
)
cube3.position.x = 1;
group.add(cube3);

const axesHelper = new THREE.AxesHelper();

camera.position.set(1, 1, 3);

group.position.y = 1;
scene.add(group);
scene.add(axesHelper);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);