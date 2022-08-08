import * as THREE from 'three';

import { MainScene } from "../main";
import { TotalStars } from '../main';
import { StarCount } from '../main';


var AddingStars = true;

export function AddStars() {

    const StarGeo = new THREE.SphereGeometry( 0.15, 24, 24 );
    const StarMat = new THREE.MeshStandardMaterial( { color: 0xffffff } );
    const Star = new THREE.Mesh( StarGeo, StarMat );
    Star.name = 'Star';
  
    const [ X, Y, Z ] = Array( 3 ).fill().map( () => THREE.MathUtils.randFloatSpread( 100 ) );
  
    Star.position.set( X, Y, Z );
    MainScene.add( Star );
}

var ClearButton = document.getElementById( 'ClearButton' );

ClearButton.addEventListener( "click", () => {
    // MainScene.remove( Star );

    var i = 0;

    while( i < TotalStars ) {
        try {
            const Object = MainScene.getObjectByName( "Star" );
            Object.geometry.dispose();
            Object.material.dispose();
            MainScene.remove( Object );
            i++;
        } catch( Error ) {
            // alert( "No stars to clear." );
            // break;
        }
    }
    
    TotalStars = 0;
    
} )
