import './styles.css'

import * as THREE from 'three';

import { Animator } from './src/Animator';
import { ALight } from './src/SceneLight';
import { PLight } from './src/SceneLight';
import { Torus } from './src/Torus';
import { AddStars } from './src/AddStars';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import Stats from 'stats.js';

import { FramerateCounter } from './src/StatsFile';
import { MBCounter } from './src/StatsFile';
import { MSCounter }from './src/StatsFile';
import { SceneGridHelper } from './src/Grid';



document.getElementById( 'Monitors' ).appendChild( FramerateCounter.domElement );
document.getElementById( 'Monitors' ).appendChild( MSCounter.domElement );
document.getElementById( 'Monitors' ).appendChild( MBCounter.domElement );






const MainScene = new THREE.Scene();

const FieldOfView = 75;
const AspectRatio = window.innerWidth / window.innerHeight;
const NearFrustum = 0.1;
const FarFrustum = 1000;

const PCamera = new THREE.PerspectiveCamera( FieldOfView, AspectRatio, NearFrustum, FarFrustum );

const SceneRenderer = new THREE.WebGLRenderer(
  {
    canvas: document.querySelector( '#Background' )
  }
);

SceneRenderer.autoClearColor = false;

SceneRenderer.setPixelRatio( window.devicePixelRatio );
SceneRenderer.setSize( window.innerWidth, window.innerHeight );

PCamera.position.setZ( 30 );


var RenderButton = document.getElementById( "RenderStarsButton" );

export var StarCount = 0;
export var TotalStars = 0;

export function ResetTotalStars() {
  TotalStars = 0;
}

RenderButton.addEventListener( "click", () => {
  StarCount = parseInt( document.getElementById( "StarsInputBox" ).value );
  Array( StarCount ).fill().forEach( AddStars );
  TotalStars += StarCount;
} )


const GridCheck = document.getElementById( 'ShowGridCheckBox' );

GridCheck.addEventListener( 'click', () => {
  if( GridCheck.checked ) {
    MainScene.add( SceneGridHelper );
  } else {
    MainScene.remove( SceneGridHelper );
  }
} )


MainScene.add( Torus );
MainScene.add( ALight );
MainScene.add( PLight );
// MainScene.add( SceneGridHelper );

export const MouseController = new OrbitControls( PCamera, SceneRenderer.domElement );


export { MainScene, PCamera, SceneRenderer, FramerateCounter, MSCounter, MBCounter };


Animator();
