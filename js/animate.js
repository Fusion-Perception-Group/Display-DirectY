import * as THREE from '/node_modules/three/build/three.module.js';
import {createRay} from './createRay.js';

// 四元数用于随机平滑旋转射线
let quaternion = new THREE.Quaternion();

export function animate(renderer, scene, camera) {
    const {rayLine, rayDirection, rayLength} = createRay(scene);

    function loop() {
        requestAnimationFrame(loop);

        // 生成随机旋转
        const rotationAxis = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
        const rotationAngle = Math.random() * 0.02; // 随机角度
        quaternion.setFromAxisAngle(rotationAxis, rotationAngle);

        // 更新射线方向
        rayDirection.applyQuaternion(quaternion);
        rayLine.position.copy(rayDirection.clone().multiplyScalar(rayLength / 2));
        rayLine.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), rayDirection.clone());

        renderer.render(scene, camera);
    }

    loop();
}
