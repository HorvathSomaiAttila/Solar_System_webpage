function create3DPlanet(canvasId, color) {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({canvas: document.getElementById(canvasId)});
    renderer.setSize(300, 300);

    var geometry = new THREE.SphereGeometry(5, 32, 32);
    var material = new THREE.MeshBasicMaterial({color: color});
    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 10;

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}

create3DPlanet('sunCanvas', 0xffff00);
create3DPlanet('mercuryCanvas', 0xaaaaaa);
create3DPlanet('venusCanvas', 0xffa500);
create3DPlanet('earthCanvas', 0x0000ff);
create3DPlanet('marsCanvas', 0xff4500);
create3DPlanet('jupiterCanvas', 0xffd700);
create3DPlanet('saturnCanvas', 0xffe4b5);
create3DPlanet('uranusCanvas', 0x66ccff);
create3DPlanet('neptuneCanvas', 0x1e90ff);

// JavaScript for tooltips