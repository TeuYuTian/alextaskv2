import Phaser from 'phaser'

export default class winscene extends Phaser.Scene {
  constructor() {
    super({
      key: "winscene",});
  }

  preload() {
    // Preload all the assets here
    // Preload any images here
    this.load.image('winscene', 'assets/winscene.png');

  }

  create() {
    console.log("*** winscene scene");

    window.star = 0
    window.heart = 5
    this.add.image(0,0,'winscene').setOrigin(0,0);
    console.log("This is win Scene")

    window.music.stop()

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on("down",
      function () {
        console.log("Jump to main scene");
        let playerPos = {};
        playerPos.x = 1384;
        playerPos.y = 706;
        playerPos.dir = "down",
        
   
        this.scene.start("main", { playerPos: playerPos });
      },
      this
    );

    // Create all the game animations here
  }
}