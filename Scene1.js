class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "assets/background.png");
    this.load.image("inside", "assets/inside.png");
    this.load.image("scrollbox", "assets/scrollbox.png");
    this.load.spritesheet("rain", "assets/rain.png", {
      frameWidth: 800,
      frameHeight: 600
    });
    this.load.spritesheet("samtalk", "assets/samtalk.png", {
      frameWidth: 150,
      frameHeight: 150
    });
    this.load.image("samhat", "assets/samsantahat.png");
    this.load.spritesheet("openscroll", "assets/openscroll.png", {
      frameWidth: 100,
      frameHeight: 100
    });

  }

  create() {
    this.add.text(20, 20, "Summoning Evil Sam...");
    this.scene.start("playGame");
  }
}
