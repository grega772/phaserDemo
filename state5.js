
demo.state5 = function(){};

demo.state5.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 5');
        game.stage.backgroundColor = '#f4b942';
        addChangeStateEventListeners();
    },
    update:function(){}
};