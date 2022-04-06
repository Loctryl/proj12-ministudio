var cursor;
var moveok;
var dude;
var hp;
var reticle = null;
var playerBullets = null;
var time = 0;
var timer = 0;
var Maxbullets = 100;
var Maxzombies = 10;//max amunition. there's still not a realoading system so keep this var with high number so we don't run out of ammo
var enemy = [];
var isoX;
var isoY;
var ground;

const DUDE_KEY = 'dude'
var touch;

//set Score variables
var score = 0;
var scoreText;

var text;
var timerEvents = [];
var scoreMultiplicator = 1;

var damaged = [];
var shoot = [];
var voiceline = [];
var szomb = [];

class Map extends Phaser.Scene {
  constructor() {
    super({ key: "Map" });
    this.playerBullets
    this.ZombiesGroup;
  }


  updateCounter() {
    this.ZombiesGroup.ZombiesSpwan(Math.random() * 800, Math.random() * 500);
  }

  preload() {
    this.load.image('carac', 'src/assets/sprite/cara.png');
    this.load.image('zomb', 'src/assets/sprite/zomb.png');
    this.load.image('bullet', 'src/assets/sprite/uwu.png');
    this.load.image('arche', 'src/assets/sprite/archeeliza.png');
    this.load.image('wheel', 'src/assets/sprite/wheel.png');
    this.load.image('target', 'src/assets/sprite/crossAim.png');
    this.load.image('house', 'src/assets/sprite/house.png');
    this.load.audio('cparti', ['src/assets/SFX/cparti.mp3']);
    this.load.audio('cperdu', ['src/assets/SFX/cperdu.mp3']);
    this.load.audio('damaged1', ['src/assets/SFX/damaged1.mp3']);
    this.load.audio('damaged2', ['src/assets/SFX/damaged2.mp3']);
    this.load.audio('damaged3', ['src/assets/SFX/damaged3.mp3']);
    this.load.audio('damaged4', ['src/assets/SFX/damaged4.mp3']);
    this.load.audio('damaged5', ['src/assets/SFX/damaged5.mp3']);
    this.load.audio('damaged6', ['src/assets/SFX/damaged6.mp3']);
    this.load.audio('forain', ['src/assets/SFX/forain.mp3']);
    this.load.audio('kill', ['src/assets/SFX/kill.mp3']);
    this.load.audio('onepiece', ['src/assets/SFX/onepiece.mp3']);
    this.load.audio('piscine', ['src/assets/SFX/piscine.mp3']);
    this.load.audio('shoot1', ['src/assets/SFX/shoot1.mp3']);
    this.load.audio('shoot2', ['src/assets/SFX/shoot2.mp3']);
    this.load.audio('shoot3', ['src/assets/SFX/shoot3.mp3']);
    this.load.audio('shoot4', ['src/assets/SFX/shoot4.mp3']);
    this.load.audio('shoot5', ['src/assets/SFX/shoot5.mp3']);
    this.load.audio('voiceline1', ['src/assets/SFX/voiceline1.mp3']);
    this.load.audio('voiceline2', ['src/assets/SFX/voiceline2.mp3']);
    this.load.audio('voiceline3', ['src/assets/SFX/voiceline3.mp3']);
    this.load.audio('voiceline4', ['src/assets/SFX/voiceline4.mp3']);
    this.load.audio('voiceline5', ['src/assets/SFX/voiceline5.mp3']);
    this.load.audio('voiceline6', ['src/assets/SFX/voiceline6.mp3']);
    this.load.audio('walking', ['src/assets/SFX/walking.mp3']);
    this.load.audio('zomb1', ['src/assets/SFX/zomb1.mp3']);
    this.load.audio('zomb2', ['src/assets/SFX/zomb2.mp3']);
    this.load.audio('zomb3', ['src/assets/SFX/zomb3.mp3']);
    this.load.audio('zomb4', ['src/assets/SFX/zomb4.mp3']);
    this.load.spritesheet(DUDE_KEY, 'src/assets/sprite/dude.png', { frameWidth: 33, frameHeight: 56 });
    this.load.spritesheet('zombi', 'src/assets/sprite/animZ.png', { frameWidth: 33, frameHeight: 56 });
    this.load.image('base_tiles', 'src/assets/tiles/assets01.png');
    this.load.tilemapTiledJSON('map', 'src/assets/map.json');
  }

  create() {
    //Map
    var map = this.add.tilemap('map');
    
    var tileset1 = map.addTilesetImage('assets', 'base_tiles');
    map.createLayer('ground', [tileset1]);
    map.createLayer('walls', [tileset1]);
    map.createLayer('road', [tileset1]);
    map.createLayer('building', [tileset1]);
    map.createLayer('building2', [tileset1]);
    const col = map.createStaticLayer('col', [tileset1]);


    /*for (let i = 2; i < 8; i++) {
      map.createLayer('Tile Layer ' + i, [tileset1]);
    }*/

    //Sound part
    this.sound.pauseOnBlur = false;
    this.cparti = this.sound.add('cparti');
    this.cperdu = this.sound.add('cperdu');
    damaged.push(this.sound.add('damaged1'));
    damaged.push(this.sound.add('damaged2'));
    damaged.push(this.sound.add('damaged3'));
    damaged.push(this.sound.add('damaged4'));
    damaged.push(this.sound.add('damaged5'));
    damaged.push(this.sound.add('damaged6'));
    this.forain = this.sound.add('forain');
    this.kill = this.sound.add('kill');
    this.onepiece = this.sound.add('onepiece');
    this.piscine = this.sound.add('piscine');
    this.walking = this.sound.add('walking');
    shoot.push(this.sound.add('shoot1'));
    shoot.push(this.sound.add('shoot2'));
    shoot.push(this.sound.add('shoot3'));
    shoot.push(this.sound.add('shoot4'));
    shoot.push(this.sound.add('shoot5'));
    voiceline.push(this.sound.add('voiceline1'));
    voiceline.push(this.sound.add('voiceline2'));
    voiceline.push(this.sound.add('voiceline3'));
    voiceline.push(this.sound.add('voiceline4'));
    voiceline.push(this.sound.add('voiceline5'));
    voiceline.push(this.sound.add('voiceline6'));
    szomb.push(this.sound.add('zomb1'));
    szomb.push(this.sound.add('zomb2'));
    szomb.push(this.sound.add('zomb3'));
    szomb.push(this.sound.add('zomb4'));
    
    
    

    //Spawn player
    dude = this.physics.add.sprite(500, 500, DUDE_KEY)
    CreatePlayer()

    //bullets settings
    playerBullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });
    this.input.on('pointerdown', function (pointer, time, lastFired) {
      if (dude.active === false)
        return;
      // Get bullet from bullets group
      var bullet = playerBullets.get().setActive(true).setVisible(true);
      if (bullet) {
        bullet.fire(dude, reticle);
        shoot[Math.floor(Math.random() * 5)].play();
        this.physics.add.collider(this.ZombiesGroup, bullet, function () { });
      }
    }, this);
    reticle = this.physics.add.sprite(700, 500, 'target');
    cursor = this.input.keyboard.createCursorKeys();
    reticle.setDepth(1);

    //world collider
    this.physics.add.collider(dude, col);
    col.setCollisionByProperty({collides:true});
    col.setCollision([4]);
    
    
    
    


    //Zombies settings
    touch = 1;
    this.ZombiesGroup = new ZombiesGroup(this, dude); //create a zombie group
    this.ZombiesGroup.setDepth(1);

    for (let i = 0; i < Maxzombies; i++) {
      enemy[i] = this.physics.add.sprite(Math.random() * 500, Math.random() * 500, 'zombi').setDepth(1);

      this.physics.moveToObject(enemy[i], dude, 100)
    }
    this.physics.add.collider(dude, enemy, function () {
      if (touch == 1) {
        hp--;
        console.log(hp);
        touch = 0;
        damaged[Math.floor(Math.random() * 6)].play();
      }
    });
    this.physics.add.collider(enemy, enemy, function () { }); //collide between zombies

    //Collide between Zombies and bullets
    this.physics.add.overlap(enemy, playerBullets, function (enemy, playerBullets) {
      playerBullets.destroy();
      enemy.destroy();

      //update score
      score += 10 * scoreMultiplicator;
      scoreText.setText('Score: ' + score);
    });


    //Camera settings
    this.cameras.main.startFollow(dude, true, 0.09, 0.09);
    this.cameras.main.setZoom(1.7);


    //Print Score & Timer
    score = 0;
    timerEvents = [];
    scoreMultiplicator = 1;

    var style = { font: "bold 25px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    scoreText = this.add.text(250, 165, 'Score: 0', style).setScrollFactor(0);
    scoreText.setDepth(99)
    text = this.add.text(1080 / 2 - 120, 165, '', style).setScrollFactor(0);
    timerEvents.push(this.time.addEvent({ delay: Phaser.Math.Between(10000, 10000), loop: true }));
    timerEvents.push(this.time.addEvent({ delay: Phaser.Math.Between(3000, 3000), loop: true }));
    text.setDepth(99);

    // Pointer lock will only work after mousedown
    game.canvas.addEventListener('mousedown', function () {
      game.input.mouse.requestPointerLock();
    });

    // Exit pointer lock when Q or escape (by default) is pressed.
    this.input.keyboard.on('keydown_Q', function (event) {
      if (game.input.mouse.locked)
        game.input.mouse.releasePointerLock();
    }, 0, this);

    this.input.on('pointermove', function (pointer) {
      if (this.input.mouse.locked) {
        reticle.x += pointer.movementX;
        reticle.y += pointer.movementY;
      }
    }, this);
  }

  update() {
    // Constrain position of constrainReticle
    //constrainReticle(reticle);

    //movement
    const speedWalk = 200;
    let dudeVelocity = new Phaser.Math.Vector2();

    if (cursor.left.isDown) {
      this.walking.play();
      dudeVelocity.x = -1;
      //dude.anims.play('left', true)
    }
    else if (cursor.right.isDown) {
      this.walking.play();
      dudeVelocity.x = 1;
      //dude.anims.play('right', true)
    }
    if (cursor.up.isDown) {
      this.walking.play();
      dudeVelocity.y = -1;
    }
    else if (cursor.down.isDown) {
      this.walking.play();
      dudeVelocity.y = 1;
    }
    dudeVelocity.scale(speedWalk);
    dude.setVelocity(dudeVelocity.x, dudeVelocity.y);

    //timer reinitialize
    var output = [];
    output.push('Event.progress: ' + timerEvents[0].getProgress().toString().substr(0, 4));
    if (timerEvents[0].getProgress().toString().substr(0, 4) == 0.9) {
      console.log("+15 multiplicator");
      scoreMultiplicator += 1;
    }
    if (timerEvents[1].getProgress().toString().substr(0, 4) == 0.9) {
      touch = 1;
    }
    text.setText(output);

    if (hp == 0) {
      this.onepiece.play();
      this.scene.start("GameOver");
    }
    //this.walking.stop();
    for (let i = 0; i < Maxzombies; i++) {
      if (enemy[i].active == true) {
        this.physics.moveToObject(enemy[i], dude, 100);
      }
    }
    //this.physics.moveToObject(enemy, dude, 100);
    //this.ZombiesGroup.update(dude.x, dude.y);   
  }
}

function CreatePlayer() {
  hp = 5;
  dude.setDepth(1);

  dude.anims.create({
    key: 'idle',
    frames: [{ key: DUDE_KEY, frame: 0 }],
    frameRate: 20
  })

  dude.anims.create({
    key: 'left',
    frames: dude.anims.generateFrameNumbers(DUDE_KEY, { start: 4, end: 5 }),
    frameRate: 10,
    repeat: -1
  })

  dude.anims.create({
    key: 'right',
    frames: dude.anims.generateFrameNumbers(DUDE_KEY, { start: 6, end: 7 }),
    frameRate: 10,
    repeat: -1
  })
}
/*

function zombAnim(){
  for (let i = 0; i < Maxzombies; i++) {
    enemy[i].anims.create({
      key: 'idle',
      frames: [{ key: 'zombi', frame: 6 }],
      frameRate: 20
    })

    enemy[i].anims.create({
      key: 'left',
      frames: enemy[i].anims.generateFrameNumbers('zombi', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1
    })

    enemy[i].anims.create({
      key: 'right',
      frames: enemy[i].anims.generateFrameNumbers("zombi", { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1
    })
}
} */