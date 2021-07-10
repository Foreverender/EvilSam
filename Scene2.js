class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }


  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.rain = this.add.sprite(config.width / 2, config.height / 2, "rain");


    this.anims.create({
      key: "rain_anim",
      frames: this.anims.generateFrameNumbers("rain"),
      framerate: 12,
      repeat: -1
    });

    this.rain.play("rain_anim");



    //this.add.text(20, 20, "Seek shelter in cave", {
    //  font: "25px Arial",
    //  fill: "white"
    //});

    this.startButton = this.add.text(20, 20, 'Enter the lair of Evil Sam', { fill: 'white' })
          this.startButton.setInteractive({ useHandCursor: true })
          this.input.on('gameobjectdown', this.changeScene, this);


  }


    changeScene(pointer, gameObject) {
        this.scene.start("Cavescene");
        }


}
