const loader = document.querySelector('.loader2');
const main = document.querySelector('.house');

function init(a, b) {
    setTimeout(() =>{
        a.style.opacity = 0;
        a.style.display = "none";

        b.style.display = "block";
        setTimeout(() =>  b.style.opacity = 1, 50)
    }, 4000);
}
init(loader,main)