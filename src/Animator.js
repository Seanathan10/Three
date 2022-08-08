import * as THREE from 'three';

import { MainScene, MBCounter, MSCounter } from "../main";
import { PCamera } from "../main";
import { SceneRenderer } from "../main";
import { Torus } from "./Torus";

import { GetLightStrength } from "./LightSlider";
import { GetXSlider } from './LightSlider';
import { GetYSlider } from "./LightSlider";
import { GetZSlider } from "./LightSlider";

import { ButtonToggled } from './LightSlider';

import { MouseController } from "../main";

import { ListenToColorPicker } from "./ColorPicker";


import { ALight } from "./SceneLight";
import { PLight } from './SceneLight';


import { ShouldRotate } from './AutoRotate';
import { SceneShouldRotate } from './AutoRotate';

import { FramerateCounter } from '../main';


const BackgroundScene = new THREE.Scene();
let BackgroundMesh;
{
    const ThreeLoader = new THREE.TextureLoader();
    // const BackgroundTexture = ThreeLoader.load( '/Images/Equi-space.png' );
    const BackgroundTexture = ThreeLoader.load( 'https://i.imgur.com/u8LzIYB.jpeg' );
    
    BackgroundTexture.magFilter = THREE.LinearFilter;
    BackgroundTexture.minFilter = THREE.LinearFilter;

    const Shader = THREE.ShaderLib.equirect;
    const BackgroundMaterial = new THREE.ShaderMaterial(
        {
            fragmentShader: Shader.fragmentShader,
            vertexShader: Shader.vertexShader,
            uniforms: Shader.uniforms,
            depthWrite: false,
            side: THREE.BackSide,
        }
    );
    
    BackgroundMaterial.uniforms.tEquirect.value = BackgroundTexture;
    const Plane = new THREE.BoxBufferGeometry( 2, 2, 2 );
    BackgroundMesh = new THREE.Mesh( Plane, BackgroundMaterial );
    BackgroundScene.add( BackgroundMesh );
}



export function Animator() {
    requestAnimationFrame( Animator );

    FramerateCounter.begin();
    MSCounter.begin();
    MBCounter.begin();

    BackgroundMesh.position.copy( PCamera.position );
    SceneRenderer.render( BackgroundScene, PCamera );
    SceneRenderer.render( MainScene, PCamera );

    MouseController.update();
    
    if( ButtonToggled ) {
        ALight.position.set( GetXSlider(), GetYSlider(), GetZSlider() );
        ALight.intensity = GetLightStrength();
    } else {
        PLight.position.set( GetXSlider(), GetYSlider(), GetZSlider() );
        PLight.intensity = GetLightStrength();
    }

    if( ShouldRotate ) {
        Torus.rotation.x += 0.01;
        Torus.rotation.y += 0.01;
        Torus.rotation.z += 0.01;
    }

    if( SceneShouldRotate ) {
        PCamera.rotation.x += 0.01;
        PCamera.rotation.y += 0.01;
    }

    FramerateCounter.end();
    MSCounter.end();
    MBCounter.end();


    SceneRenderer.renderLists.dispose();

    

    ListenToColorPicker();
}
