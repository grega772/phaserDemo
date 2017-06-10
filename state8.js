
demo.state8 = function(){};

demo.state8.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 8');
        game.stage.backgroundColor = '#f4b942';
        addChangeStateEventListeners();
    },
    update:function(){}
};