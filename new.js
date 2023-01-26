
 // CODE ONE....

 // This is another way to do your calculator
 // This is to help you get a proper understanding of the other code.

(function(){

    let screen = document.querySelector('.textbox');
    let btn0 = document.querySelector('#btn-0');
    let btn9 = document.querySelector('#btn-9');
    let btn8 = document.querySelector('#btn-8');
    let btn7 = document.querySelector('#btn-7');
    let btn6 = document.querySelector('#btn-6');
    let btn5 = document.querySelector('#btn-5');
    let btn4 = document.querySelector('#btn-4');
    let btn3 = document.querySelector('#btn-3');
    let btn2 = document.querySelector('#btn-2');
    let btn1 = document.querySelector('#btn-1');
    let btnplus = document.querySelector('#btn-add');
    let btnSub = document.querySelector('#btn-subt');
    let btnDiv = document.querySelector('#btn-div');
    let btnMult = document.querySelector('#btn-mult');
    let btnDeci = document.querySelector('#btn-deci');
    let btnmod = document.querySelector('#btn-mod');
    let btnClear = document.querySelector('#btn-clear');
    let equals = document.querySelector('#btn-equals');


    btn0.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + 0;
        }
    })

    btn9.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + 9;
        }
    })

    btn8.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + 8;
        }
    })

    btn7.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + 7;
        }
    })

    btn6.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + 6;
        }
    })

    btn5.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + 5;
        }
    })

    btn4.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + 4;
        }
    })

    btn3.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + 3;
        }
    })
    btn2.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + 2;
        }
    })

    btn1.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + 1;
        }
    })

    btnplus.addEventListener('click', function(e){
        e.preventDefault();
        // let value = e.target.dataset.num;
        // screen.value = value;
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + '+';
        }
    })

    btnSub.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + '-';
        }
    })

    btnMult.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + '*';
        }
    })

    btnDiv.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + '/';
        }
    })

    btnDeci.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + '.';
        }
    })
    
    btnmod.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            let value = e.target.dataset.num;
            screen.value += value;
        }else{
            screen.value = screen.value + '%';
        }
    })

    equals.addEventListener('click', function(e){
        e.preventDefault();
        if(screen.value === ''){
            screen.value = '';
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    btnClear.addEventListener('click', function(e){
        e.preventDefault();
        screen.value = '';
    })


})();