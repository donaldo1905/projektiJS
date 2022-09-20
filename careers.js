let div1 = document.getElementById('div1');
div1.style.display = 'none';
let div2 = document.getElementById('div2');
div2.style.display = 'none';
let div3 = document.getElementById('div3');
div3.style.display = 'none';
let div4 = document.getElementById('div4');
div4.style.display = 'none'; 
let p1 = document.getElementById('p1');
let file1 = document.getElementById('file1');
let p2 = document.getElementById('p2');
let file2 = document.getElementById('file2');
let p3 = document.getElementById('p3');
let file3 = document.getElementById('file3');
let p4 = document.getElementById('p4');
let file4 = document.getElementById('file4');

let showDiv1 = () => {
    if (div1.style.display === 'none') {
        div1.style.display = 'block'
    } else {
        div1.style.display = 'none'
    }
}

let showDiv2 = () => {
    if (div2.style.display === 'none') {
        div2.style.display = 'block'
    } else {
        div2.style.display = 'none'
    }
}

let showDiv3 = () => {
    if (div3.style.display === 'none') {
        div3.style.display = 'block'
    } else {
        div3.style.display = 'none'
    }
}

let showDiv4 = () => {
    if (div4.style.display === 'none') {
        div4.style.display = 'block'
    } else {
        div4.style.display = 'none'
    }
}   

let submit1 = () => {
    if(file1.files.length === 0 ){
     p1.innerHTML = 'Please upload a file.'
    }else{
        p1.innerHTML = 'Your request was successfully submitted.'
    }
}

let submit2 = () => {
    if(file2.files.length === 0 ){
     p2.innerHTML = 'Please upload a file.'
    }else{
        p2.innerHTML = 'Your request was successfully submitted.'
    }
}

let submit3 = () => {
    if(file3.files.length === 0 ){
     p3.innerHTML = 'Please upload a file.'
    }else{
        p3.innerHTML = 'Your request was successfully submitted.'
    }
}

let submit4 = () => {
    if(file4.files.length === 0 ){
     p4.innerHTML = 'Please upload a file.'
    }else{
        p4.innerHTML = 'Your request was successfully submitted.'
    }
}