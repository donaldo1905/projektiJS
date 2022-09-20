let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
p1.style.display = 'none';
p2.style.display = 'none';
p3.style.display = 'none';
p4.style.display = 'none';
p5.style.display = 'none';

let answer1 = () => {
    if(p1.style.display === 'none'){
        p1.style.display = 'block';
    }else{
        p1.style.display = 'none';
    }
}

let answer2 = () => {
    if(p2.style.display === 'none'){
        p2.style.display = 'block'
    }else{
        p2.style.display = 'none'
    }
}

let answer3 = () => {
    if(p3.style.display === 'none'){
        p3.style.display = 'block'
    }else{
        p3.style.display = 'none'
    }
}

let answer4 = () => {
    if(p4.style.display === 'none'){
        p4.style.display = 'block'
    }else{
        p4.style.display = 'none'
    }
}

let answer5 = () => {
    if(p5.style.display === 'none'){
        p5.style.display = 'block'
    }else{
        p5.style.display = 'none'
    }
}
