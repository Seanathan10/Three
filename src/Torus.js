import * as THREE from 'three';

const Geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
// const Material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
// const Material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
// const Material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
const Material = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
export const Torus = new THREE.Mesh( Geometry, Material );

// see Animator.js for Torus movement