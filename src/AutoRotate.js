var ThisButton = document.getElementById( 'RotateButton' )

ThisButton.addEventListener( "click", ButtonClicked );

ThisButton.style.background = '#ff2a00';

export var ShouldRotate = false;

function ButtonClicked() {
    ShouldRotate = !ShouldRotate;

    if( ShouldRotate ) {
        ThisButton.style.background = '#00ff2f';
    } else {
        ThisButton.style.background = '#ff2a00';
    }
}


function SceneRotator() {
    SceneShouldRotate = !SceneShouldRotate;

    if( SceneShouldRotate ) {
        SceneRotateButton.style.background = '#00ff2f';
    } else {
        SceneRotateButton.style.background = '#ff2a00';
    }
}


var SceneRotateButton = document.getElementById( 'RotateSceneButton' );
SceneRotateButton.addEventListener( "click", SceneRotator );
export var SceneShouldRotate = false;
SceneRotateButton.style.background = '#ff2a00';



/*

function ButtonClicked() {
    console.log( '================================' );
    console.log( ButtonToggled );
    console.log( 'P-X = ' + PLight.position.x );
    console.log( 'P-Y = ' + PLight.position.y );
    console.log( 'P-Z = ' + PLight.position.z );
    console.log( 'P-L = ' + PLight.intensity );
    console.log( '------' );
    console.log( 'A-X = ' + ALight.position.x );
    console.log( 'A-Y = ' + ALight.position.y );
    console.log( 'A-Z = ' + ALight.position.z );
    console.log( 'A-L = ' + ALight.intensity );
    console.log( '================================' );
}

*/