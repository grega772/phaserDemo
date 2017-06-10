
demo.state8 = function(){};

demo.state8.prototype = {
    preload:function(){},
    create:function(){
        console.log('State 8');
        game.stage.backgroundColor = '#99ff66';
        addChangeStateEventListeners();
    },
    update:function(){}
};