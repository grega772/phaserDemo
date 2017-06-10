
demo.state1 = function(){};

demo.state1.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 1');
        game.stage.backgroundColor = '#DDD';
        addChangeStateEventListeners();
    },
    update:function(){}
};