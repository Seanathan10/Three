import * as THREE from 'three';

var LightLuminance;

export function ChangeLightLuminance( Lum ) {
    LightLuminance = Lum;
}

// export const PLight = new THREE.PointLight( 0x3c00ff, LightLuminance );
// export const PLight = new THREE.DirectionalLight( 0xffffff, LightLuminance );
export const PLight = new THREE.PointLight( 0xffffff, LightLuminance );

PLight.position.set( 0, 0, 0 );
PLight.intensity = 1;




var AmbientLightLum;

export function ChangeAmbientLuminance( Lum ) {
    AmbientLightLum = Lum;
}

export const ALight = new THREE.AmbientLight( 0xffffff, AmbientLightLum );

ALight.position.set( 0, 0, 0 );
ALight.intensity = 0.3;