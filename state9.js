
demo.state9 = function(){};

demo.state9.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 9');
        game.stage.backgroundColor = '#6600ff';
        addChangeStateEventListeners();
    },
    update:function(){}
};