let imgDisplay=()=>{
    let innerpic = document.querySelector(".innerpic");
    let btnLeft = document.querySelector(".btnl");
    let btnRight = document.querySelector(".btnr")
    let check = 0;
    let img = [
        {
            id:0,
            src: "img/bird.jpg"
        },
        {
            id:1,
            src:"img/cat.jpg"
        },
        {
            id:2,
            src:"img/deers.jpg"
        },
        {
            id:3,
            src:"img/nature.jpg"
        },
        {
            id:4,
            src:"img/sunset.jpg"
        },
        {
            id:5,
            src:"img/tree.jpg"
        }
    ]
    let displayEachImage = ()=>{
        img.forEach((item)=>{
            if (item.id === check){
                innerpic.innerHTML = `<img src=${item.src} class="news"/>`
            }
        })
    }
    // calls initially to show the first img
    displayEachImage();
    
    btnLeft.addEventListener("click",(e)=>{
        e.preventDefault();
        e.stopPropagation();
            if (check >= 0){
                check--
            } 
            if (check < 0){
                check = 5
            }
            console.log("left",check)
            displayEachImage();
        })
    
    btnRight.addEventListener("click", (e)=>{
        e.stopPropagation();
        e.preventDefault();
        if(check >= 0){
            check++
        }
        if (check > 5){
            check =0;
        }
        console.log("right", check)
        displayEachImage();
        })
    
    
    
}

document.addEventListener("DOMContentLoaded", imgDisplay)
