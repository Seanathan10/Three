import * as THREE from 'three';

import { MainScene } from "../main";

export function AddStars() {
    const StarGeo = new THREE.SphereGeometry( 0.15, 24, 24 );
    const StarMat = new THREE.MeshStandardMaterial( { color: 0xffffff } );
    const Star = new THREE.Mesh( StarGeo, StarMat );
  
    const [ X, Y, Z ] = Array( 3 ).fill().map( () => THREE.MathUtils.randFloatSpread( 100 ) );
  
    Star.position.set( X, Y, Z );
    MainScene.add( Star );
}
