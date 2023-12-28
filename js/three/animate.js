import * as THREE from '/node_modules/three/build/three.module.js';
import {createRay} from './createRay.js';

// 四元数用于随机平滑旋转射线
let quaternion = new THREE.Quaternion();


let desiredFPS = 60; // 期望的帧数
export function animate(renderer, scene, camera) {
    const { rayLine, rayDirection, rayLength } = createRay(scene);

    let then = performance.now();
    const interval = 1000 / desiredFPS;

    function render() {
        renderer.render(scene, camera);
    }

    function loop(now) {
        requestAnimationFrame(loop);

        const delta = now - then;

        if (delta > interval) {
            then = now - (delta % interval);

            // 生成随机旋转
            const rotationAxis = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
            const rotationAngle = Math.random() * 0.1; // 随机角度
            quaternion.setFromAxisAngle(rotationAxis, rotationAngle);

            // 更新射线方向
            rayDirection.applyQuaternion(quaternion);
            rayLine.position.copy(rayDirection.clone().multiplyScalar(rayLength / 2));
            rayLine.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), rayDirection.clone());

            // 执行渲染函数
            render();
        }
    }

    // 开始动画循环
    loop();
}
