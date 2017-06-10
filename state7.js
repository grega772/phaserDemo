
demo.state7 = function(){};

demo.state7.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 7');
        game.stage.backgroundColor = '#ff5050';
        addChangeStateEventListeners();
    },
    update:function(){}
};