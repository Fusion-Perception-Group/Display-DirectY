import * as THREE from '/node_modules/three/build/three.module.js';

export function createLight(scene) {
    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.decay = 1;//设置光源不随距离衰减
    pointLight.intensity = 10000.0;//光照强度
    // pointLight.intensity = 50000.0;//光照强度
    pointLight.position.set(40 , 40, 0);
    scene.add(pointLight);
}