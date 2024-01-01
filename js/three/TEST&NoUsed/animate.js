import * as THREE from '/node_modules/three/build/three.module.js';



let desiredFPS = 60; // 期望的帧数
export function animate(renderer, scene, camera) {
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
            render();
        }
    }

    // 开始动画循环
    loop();
}
