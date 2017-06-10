var demo = {};
demo.state0 = function(){};

demo.state0.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 0');
        game.stage.backgroundColor = '#f4b942';
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        
        addChangeStateEventListeners();
        
    },
    update:function(){}
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






























