import { Torus } from "./Torus";

var ColourPicker = document.getElementById( 'ColourPicker' );

ColourPicker.addEventListener( "change", ListenToColorPicker, false );

export function ListenToColorPicker() {

    var Color = "0x" + document.getElementById( 'ColourPicker' ).value.replace( "#", "" );

    Torus.material.color.setHex( Color );
}
