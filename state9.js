
demo.state9 = function(){};

demo.state9.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 9');
        game.stage.backgroundColor = '#f4b942';
        addChangeStateEventListeners();
    },
    update:function(){}
};