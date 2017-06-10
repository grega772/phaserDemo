
demo.state3 = function(){};

demo.state3.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 3');
        game.stage.backgroundColor = '#f4b942';
        addChangeStateEventListeners();
    },
    update:function(){}
};