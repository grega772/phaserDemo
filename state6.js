
demo.state6 = function(){};

demo.state6.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 6');
        game.stage.backgroundColor = '#f4b942';
        addChangeStateEventListeners();
    },
    update:function(){}
};