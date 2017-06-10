
demo.state2 = function(){};

demo.state2.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 2');
        game.stage.backgroundColor = '#ff0000';
        addChangeStateEventListeners();
    },
    update:function(){}
};