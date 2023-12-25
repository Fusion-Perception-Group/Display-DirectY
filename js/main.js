//替换three路径为相对路径
import * as THREE from '/node_modules/three/build/three.module.js';
import { createAxes } from './createAxes.js';
import { createRay } from './createRay.js';
import { animate } from './animate.js';
import { createSphere } from './createSphere.js';
import { createLight} from "./createLight.js";
// 创建场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// 创建相机
const camera =
    new THREE.PerspectiveCamera(50, 1920 / 1080, 0.1, 2000);
camera.position.set(15, 15, 15);
camera.lookAt(0, 0, 0);
// 创建渲染器并设置高分辨率
export const renderer = new THREE.WebGLRenderer({ antialias: true });
//由CSS确定大小
renderer.setSize(1920, 1080);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 添加到场景
createRay(scene);
createAxes(scene);
createSphere(scene);
createLight(scene);

// 启动动画循环
animate(renderer, scene, camera);
