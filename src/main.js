import Phaser from 'phaser'

import preload from './scenes/preload'
import story from './scenes/story'
import control from './scenes/control'
import gameover from './scenes/gameover'
import hunterroom from './scenes/hunterroom'
import room1 from './scenes/room1'
import room2 from './scenes/room2'
import room3 from './scenes/room3'
import room4 from './scenes/room4'
import room5 from './scenes/room5'
import room6 from './scenes/room6'
import rules from './scenes/rules'
import task from './scenes/task'
import winscene from './scenes/winscene'
import world from './scenes/world'
var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 25,
    height: 32 * 17,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, story, task, rules, control, world, room1 ,room2 ,room3, room4, room5, room6, hunterroom, gameover, winscene]
};



export default new Phaser.Game(config)
window.heart = 5;
window.star = 0;
