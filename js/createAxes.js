import * as THREE from '/node_modules/three/build/three.module.js';

export function createAxes(scene) {
    // 创建具有体积的XYZ轴辅助线并添加箭头
    const axesLength = 10;  // 轴的长度
    const axesRadius = 0.1; // 轴的半径
    const arrowHeight = 1; // 箭头的高度
    const arrowRadius = 0.5; // 箭头的半径

// 创建X轴（红色）
    const xAxisGeometry = new THREE.CylinderGeometry(axesRadius, axesRadius, axesLength, 32);
    const xAxisMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
    const xAxis = new THREE.Mesh(xAxisGeometry, xAxisMaterial);
    xAxis.rotation.z = -Math.PI / 2;
    xAxis.position.x = axesLength / 2;

    const xArrowGeometry = new THREE.ConeGeometry(arrowRadius, arrowHeight, 32);
    const xArrow = new THREE.Mesh(xArrowGeometry, xAxisMaterial);
    xArrow.position.x = axesLength;
    xArrow.rotation.z = -Math.PI / 2;

// 创建Y轴（绿色）
    const yAxisGeometry = new THREE.CylinderGeometry(axesRadius, axesRadius, axesLength, 32);
    const yAxisMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const yAxis = new THREE.Mesh(yAxisGeometry, yAxisMaterial);
    yAxis.position.y = axesLength / 2;

    const yArrowGeometry = new THREE.ConeGeometry(arrowRadius, arrowHeight, 32);
    const yArrow = new THREE.Mesh(yArrowGeometry, yAxisMaterial);
    yArrow.position.y = axesLength;

// 创建Z轴（蓝色）
    const zAxisGeometry = new THREE.CylinderGeometry(axesRadius, axesRadius, axesLength, 32);
    const zAxisMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff});
    const zAxis = new THREE.Mesh(zAxisGeometry, zAxisMaterial);
    zAxis.rotation.x = Math.PI / 2;
    zAxis.position.z = axesLength / 2;

    const zArrowGeometry = new THREE.ConeGeometry(arrowRadius, arrowHeight, 32);
    const zArrow = new THREE.Mesh(zArrowGeometry, zAxisMaterial);
    zArrow.position.z = axesLength;
    zArrow.rotation.x = Math.PI / 2;

// 将轴和箭头添加到场景
    scene.add(xAxis, xArrow, yAxis, yArrow, zAxis, zArrow);
    scene.add(xAxis, xArrow, yAxis, yArrow, zAxis, zArrow);
}