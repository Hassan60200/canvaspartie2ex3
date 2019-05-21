var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


// Corps
ctx.beginPath();
ctx.fillStyle = ('#976f16');
ctx.fillRect(160,100,80,180);

//bras droit
ctx.fillRect(80,100,120,30);

//bras gauche
ctx.fillRect(200,100,120,30);

//jambe droite
ctx.fillRect(160,250,30,80);

//jambe gauche
ctx.fillRect(210,250,30,80);

//tête
ctx.beginPath();
ctx.fillStyle= "#976f16";
ctx.arc(200,80,45,0, Math.PI * 2, true);
ctx.fill();

//oeil droit
ctx.beginPath();
ctx.fillStyle= "white";
ctx.arc(180,70,8,0, Math.PI * 2, true);
ctx.fill();

//oeil gauche
ctx.beginPath();
ctx.fillStyle= "white";
ctx.arc(222,70,8,0, Math.PI * 2, true);
ctx.fill();

//sourcil droite
ctx.beginPath();
ctx.fillStyle= "white";
ctx.arc(222,50,4,0, Math.PI , true);
ctx.fill();

// sourcil gauche
ctx.beginPath();
ctx.fillStyle= "white";
ctx.arc(180,50,4,0, Math.PI , true);
ctx.fill();

//bouche
ctx.beginPath();
ctx.moveTo(180,90);
ctx.quadraticCurveTo(200,110,220,90);
ctx.fillStyle = 'red';
ctx.fill();

//bouton haut
ctx.beginPath();
ctx.moveTo(180,190);
ctx.arc(200,150,9,0, Math.PI * 2, true);
ctx.fillStyle = 'purple';
ctx.fill();

//bouton bas
ctx.beginPath();
ctx.moveTo(180,190);
ctx.arc(200,200,9,0, Math.PI * 2, true);
ctx.fillStyle = 'purple';
ctx.fill();

//main gauche
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.moveTo(80, 100);
ctx.quadraticCurveTo(20, 115, 80, 130) // quadraticCurveTo(cp1x, cp1y, x, y)
ctx.fill();
ctx.closePath();

// Main droite
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.moveTo(320, 100);
ctx.quadraticCurveTo(375, 115, 320, 130) // quadraticCurveTo(cp1x, cp1y, x, y)
ctx.fill();

//entrejambe
//  Entre-jambe (courbe)
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.moveTo(210, 250);
    ctx.quadraticCurveTo(200, 225, 190, 240);
    ctx.fill();

    // entre-jambe (rectangle)
       ctx.fillStyle = 'black';
       ctx.fillRect(190, 250, 20, 30); // x, y, largeur, hauteur


       ctx.fillStyle = "red";
       // function etoiles() {
           for(var i = 0; i < 50; i++) {
           let x = Math.random() * 400;
           let y = Math.random() * 400;
           let s = Math.random() * 3;
           ctx.beginPath();
           ctx.arc(x, y, s, 1, Math.PI * 2);
           ctx.fill();
          }
