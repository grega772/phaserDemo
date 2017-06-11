var demo = {};
var speed = 4;
var centreX = 1500/2;
var centreY = 1000/2;
demo.state0 = function(){};
var adam;

demo.state0.prototype = {
    preload:function(){
        game.load.spritesheet('adam','assets/spritesheets/adamSheet.png',240,370);
        game.load.image('background','assets/backgrounds/treeBG.png');
    },
    create:function(){
        console.log('State 0');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#800080';
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0,0,2813,1000)
        var treeBG = game.add.sprite(0,0,'background');
        adam = game.add.sprite(centreX,centreY,'adam');
        adam.anchor.x = 0.5;
        adam.anchor.y = 0.5;
        adam.scale.setTo(0.7,0.7);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
        
        adam.animations.add('walk',[0,1,2,3,4]);
        adam.animations.add('stop',[0])
        
        
        game.camera.follow(adam);
        game.camera.deadzone = new Phaser.Rectangle(centreX-300,0,600,1000);
        
        
        
        addChangeStateEventListeners();
        
    },
    update:function(){
        
        var flag=false;
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                adam.scale.setTo(0.7,0.7);
                adam.x +=speed;
                adam.animations.play('walk',14,true)
                flag = true;
           }
        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                adam.scale.setTo(-0.7,0.7);
                adam.x -=speed;
                adam.animations.play('walk',14,true)
                flag=true;
            }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
                if(adam.y>395){
                        adam.y-=speed;
                        adam.animations.play('walk',14,true)
                   }
                flag=true;
            }
        if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
                adam.y+=speed;
                adam.animations.play('walk',14,true)
                flag=true;
            }
            if(!flag){
                adam.animations.stop('walk');
                adam.animations.play('stop',14,false);
               }
        
                }
};


function changeState(i,stateNum){
    console.log(i);
    game.state.start('state'+stateNum);
}

function addKeyCallback(key,func,args){
    
    game.input.keyboard.addKey(key).onDown.add(func,null,null,args);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO,changeState,0);
    addKeyCallback(Phaser.Keyboard.ONE,changeState,1);
    addKeyCallback(Phaser.Keyboard.TWO,changeState,2);
    addKeyCallback(Phaser.Keyboard.THREE,changeState,3);
    addKeyCallback(Phaser.Keyboard.FOUR,changeState,4);
    addKeyCallback(Phaser.Keyboard.FIVE,changeState,5);
    addKeyCallback(Phaser.Keyboard.SIX,changeState,6);
    addKeyCallback(Phaser.Keyboard.SEVEN,changeState,7);
    addKeyCallback(Phaser.Keyboard.EIGHT,changeState,8);
    addKeyCallback(Phaser.Keyboard.NINE,changeState,9);
}






























