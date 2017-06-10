
demo.state2 = function(){};

demo.state2.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 2');
        game.stage.backgroundColor = '#f4b942';
        addChangeStateEventListeners();
    },
    update:function(){}
};