class Scene3 extends Phaser.Scene {
  constructor() {
    super("Cavescene");
  }

  create() {
    this.inside = this.add.image(0, 0, "inside");
    this.inside.setOrigin(0, 0);

    this.scrollbox = this.add.image(175, 220, "scrollbox");

    const samspeaks = this.add.sprite(config.width - 225, config.height - 225, "samtalk");
    samspeaks.setScale(3);

    const scrollmove = this.add.sprite(config.width - 550, config.height - 75, "openscroll");
    scrollmove.setScale(3);

    var blessed = false;

    var graphics = this.make.graphics();
    graphics.fillRect(152, 133, 320, 250);

    var mask = new Phaser.Display.Masks.GeometryMask(this, graphics);

    var blessings = ["Maybe you SHOULD extend your cars warranty!",
                     "Smells like wrongdog in here.",
                     "Why do they call it oven when you of in the cold food of out hot eat the food.",
                     "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?",
                     "Have you considered investing in a timeshare?",
                     "Every day is a fresh opportunity to waste.",
                     "You can't have everything. I mean where would you even put it?",
                     "If you give a man a fish... You're just out here giving away fish? Who does that?",
                     "In the human kingdom, the rule is, yeet or be yeeten.",
                     "Life is uncertain. \n \n \n That's all there's no reassurance here.",
                     "An apple a day can keep almost anybody away if you can throw it hard enough.",
                     "Sometimes your dumbest ideas are the best ones.",
                     "I want a story about that corn cob. How did she die? What was her life like? What is her name?",
                     "Do you think God stays in heaven because he, too, lives in fear of what he's created here on earth?"];

    var num = Math.floor(Math.random() * Math.floor(blessings.length));

    var theblessing = this.add.text(50, 60, "Greetings, my dude!", { fontFamily: 'Arial', fontSize: '24px', color: '#000000', wordWrap: { width: 250 } }).setOrigin(0);

    this.anims.create({
      key: "samtalking_anim",
      frames: this.anims.generateFrameNumbers("samtalk"),
      frameRate: 12,
      repeat: 2,
    });

    this.anims.create({
      key: "openscroll_anim",
      frames: this.anims.generateFrameNumbers("openscroll"),
      frameRate: 12,
      repeat: 0,
    });


    this.acceptblessing = this.add.text(20, 20, 'Accept blessing from Evil Sam', { fill: 'white' })
    this.acceptblessing.setInteractive({ useHandCursor: true })

      this.input.on('gameobjectdown', function () {
            if (blessed != 0)
            {
              samspeaks.play('samtalking_anim');
              scrollmove.playReverse('openscroll_anim');
              scrollmove.playAfterDelay('openscroll_anim', 2000);
               var num = Math.floor(Math.random() * Math.floor(blessings.length));
              theblessing.setText(blessings[num]);
            }
            else {
             samspeaks.play('samtalking_anim');
             scrollmove.play('openscroll_anim');
             blessed = 1;
              var num = Math.floor(Math.random() * Math.floor(blessings.length));
             theblessing.setText(blessings[num]);
           }

            });
// console.log(theblessing);
  }

  update(){

  }



}
