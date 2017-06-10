
demo.state4 = function(){};

demo.state4.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 4');
        game.stage.backgroundColor = '#f4b942';
        addChangeStateEventListeners();
    },
    update:function(){}
};