//替换three路径为相对路径
import * as THREE from '/node_modules/three/build/three.module.js';
import { createAxes } from './createAxes.js';
import { createRay } from './createRay.js';
import { animate } from './animate.js';

// 创建场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x6e2c3f);

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(10, 15, 15);
camera.lookAt(0, 0, 0);

// 创建渲染器并设置高分辨率
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 添加轴和射线到场景
createAxes(scene);
createRay(scene);

// 启动动画循环
animate(renderer, scene, camera);
