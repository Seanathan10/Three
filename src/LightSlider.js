import { ALight, PLight } from "./SceneLight";

var SliderX = document.getElementById( "PLightX" );
var SliderY = document.getElementById( "PLightY" );
var SliderZ = document.getElementById( "PLightZ" );
var SliderL = document.getElementById( "LightStrength" );

// false = PointLight
// true = AmbientLight

export var ButtonToggled;
var PLightIntensity;

ButtonToggled = false;


var ToggleButton = document.getElementById( "ToggleButton" );


ToggleButton.addEventListener( "click", () => {
    if( !ButtonToggled ) {
        PLightIntensity = SliderL.value;PLightIntensity = SliderL.value;
        console.log( PLightIntensity );
        // PLight.intensity = 10;
    }
    
    ButtonToggled = !ButtonToggled;

    if( ButtonToggled ) {  // true = Switching to AmbientLight

        SliderX.value = ALight.position.x;
        SliderY.value = ALight.position.y;
        SliderZ.value = ALight.position.z;
        SliderL.value = ALight.intensity;

        SliderL.setAttribute( "max", 1 );
        
        ToggleButton.innerHTML = "Ambient Light";
        
    } else if( !ButtonToggled ) {  // false = switching to PointLight
        
        SliderX.value = PLight.position.x;
        SliderY.value = PLight.position.y;
        SliderZ.value = PLight.position.z;
        SliderL.value = PLightIntensity;
        
        SliderL.setAttribute( "max", 10 );

        ToggleButton.innerHTML = "Point Light";

        SliderL.value = PLightIntensity;
    }
} );



export function GetXSlider() {
    return SliderX.value;
}

export function GetYSlider() {
    return SliderY.value;
}

export function GetZSlider() {
    return SliderZ.value;
}

export function GetLightStrength() {
    return SliderL.value;
}
