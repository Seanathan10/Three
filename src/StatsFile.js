import Stats from 'stats.js';

export var FramerateCounter = new Stats();
FramerateCounter.showPanel( 0 );

export var MSCounter = new Stats();
MSCounter.showPanel( 1 );

export var MBCounter = new Stats();
MBCounter.showPanel( 2 );

document.getElementById( 'Monitors' ).appendChild( FramerateCounter.domElement );
document.getElementById( 'Monitors' ).appendChild( MSCounter.domElement );
document.getElementById( 'Monitors' ).appendChild( MBCounter.domElement );


var AllStats = document.getElementById( 'Monitors' ).querySelectorAll( "canvas" );

for( var i = 0; i < AllStats.length; i++ ) {
  AllStats[ i ].style.position = "absolute";
  AllStats[ i ].style.bottom = "10px";
}


FramerateCounter.dom.style.position = "absolute";
FramerateCounter.dom.style.bottom = "10px";
FramerateCounter.dom.style.left = "0px";

MSCounter.dom.style.position = 'absolute';
MSCounter.dom.style.bottom = '10px';
MSCounter.dom.style.left = '-80px';

MBCounter.dom.style.position = 'absolute';
MBCounter.dom.style.bottom = '10px';
MBCounter.dom.style.left = '-160px';