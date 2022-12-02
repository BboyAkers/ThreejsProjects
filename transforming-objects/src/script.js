import './style.css'

import * as THREE from 'three'

const sizes = {
  width: 800,
  height: 600
};

const canvas = document.querySelector('.webgl');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

const box = new THREE.BoxGeometry(1, 1, 1);
const materialRed = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const redBox = new THREE.Mesh(box, materialRed);

redBox.position.set(2, 1, 1);
redBox.scale.set(1, 1, 0.5);
redBox.rotation.reorder('YXZ');
redBox.rotation.set(Math.PI * 0.25, Math.PI * 0.25, 1)

const axesHelper = new THREE.AxesHelper();

camera.position.set(1, 1, 3);

scene.add(redBox)
scene.add(axesHelper);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);