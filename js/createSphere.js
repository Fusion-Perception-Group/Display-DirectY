import * as THREE from '/node_modules/three/build/three.module.js';

export function createSphere(scene) {
    const sphereGeometry = new THREE.SphereGeometry(8, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({color: 0x0000d1, transparent: true, opacity: 0.5});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
}