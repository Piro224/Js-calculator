
//CODE TWO....
//This is more simpler and understanding if you understand the other code

(function(){
     
    let display = document.querySelector('.textbox');
    let btns = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equals = document.querySelector('.btn-equals');

    btns.forEach(function(button){
        button.addEventListener('click', function(e){
            e.preventDefault();
            let value = e.target.dataset.num;
            display.value += value;
           
        })
    });

    equals.addEventListener('click', function(e){
        e.preventDefault();
        if(display.value === ''){
            display.value = "";
        }else{
            let answer = eval(display.value);
            display.value = answer;
        }
    });

    clear.addEventListener('click', function(e){
        e.preventDefault();
        display.value = '';
        // display.value = display.value.slice(0,-1);
    })
    

})();

