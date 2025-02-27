import React, { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import './animation.css';

const BoxAnimation = () => {
  useEffect(() => {
    let camera, scene, renderer, clock;
    let uniforms;

    function init() {
      const container = document.getElementById("shader");

      clock = new THREE.Clock();
      camera = new THREE.Camera();
      camera.position.z = 1;

      scene = new THREE.Scene();

      const geometry = new THREE.PlaneBufferGeometry(2, 2);

      uniforms = {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        u_progress: { value: 0 },
        uMouse: { value: { x: 0.5, y: 0.5 } },
      };

      const vertexShader = `
        varying vec2 vUv;
        void main() {
          gl_Position = vec4(position, 1.0);
          vUv = uv;
        }
      `;

      const fragmentShader = `
        precision highp float;

        uniform vec2 u_resolution;
        uniform float u_time;
        varying vec2 vUv;
        uniform vec2 uMouse;
        uniform float u_progress;

        const float PI = 3.1415926535897932384626433832795;

        void main() {
          vec2 uv = (gl_FragCoord.xy - u_resolution * .5) / u_resolution.yy + 0.5;

          float t2 = (u_time *.4) + length(uv - .5);

          vec3 color = vec3(uv.y, 1., .5);
          vec3 color2 = vec3(uv.x, 1., .5);
          vec3 color3 = vec3(1., uv.x, .5);
          vec3 color4 = vec3(1., .5, uv.y);

          color = mix(color, color2, step(length(uv - .5), .5));
          color = mix(color, color3, step(length(uv - .5), .4));
          color = mix(color, color4, step(length(uv - .5), .3));

          color.r += sin(t2);
          color.g += cos(t2);

          gl_FragColor = vec4(color, 1.);
        }
      `;

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      let running = false;

      function finished() {
        running = false;
      }

      window.addEventListener('click', (event) => {
        if (!running) {
          material.uniforms.uMouse.value.x = (event.clientX / window.innerWidth) * 2 - 1;
          material.uniforms.uMouse.value.y = -(event.clientY / window.innerHeight) * 2 + 1;

          running = true;
          gsap.to(material.uniforms.u_progress, {
            duration: 6.5,
            value: material.uniforms.u_progress.value + 10,
            delay: 0,
            onComplete: finished,
          });
        }
      });

      onWindowResize();
      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.u_resolution.value.x = renderer.domElement.width;
      uniforms.u_resolution.value.y = renderer.domElement.height;
    }

    function render() {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    }

    function animate() {
      render();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div id="shader"></div>;
};

export default BoxAnimation;
