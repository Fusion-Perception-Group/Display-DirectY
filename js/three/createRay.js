import * as THREE from '/node_modules/three/build/three.module.js';

export function createRay(scene) {
    // 创建具有体积的射线
    const rayLength = 10;
    const rayRadius = 0.1; // 射线的半径
    const rayDirection = new THREE.Vector3(1, 0, 0); // 初始方向
    rayDirection.normalize(); // 确保方向向量是单位向量
    const rayGeometry = new THREE.CylinderGeometry(rayRadius, rayRadius, rayLength, 32);
    const rayMaterial = new THREE.MeshBasicMaterial({color: 0xaaa0ff});
    const rayLine = new THREE.Mesh(rayGeometry, rayMaterial);

// 将圆柱体的一个端点定位在原点
    rayLine.position.copy(rayDirection.clone().multiplyScalar(rayLength / 2));
    rayLine.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), rayDirection.clone());
    scene.add(rayLine);
    return {rayLine, rayDirection, rayLength};
}