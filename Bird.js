class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.trayectoria = [];
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   
    super.display();
    var posicion = [this.body.position.x, this.body.position.y];
    this.trayectoria.push(posicion);
    
    for (var i = 0; i< this.trayectoria.lenght; i++){
      image(this.smoke, this.trayectoria[i][0], this.trayectoria[i][1]);
    }
  }
}
