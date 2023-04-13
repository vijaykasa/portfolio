let menu = document.getElementById("menu")
let menu_bar= document.getElementById("menu_bar")

menu.addEventListener("click", ()=>{
    console.log("work")
    menu_bar.classList.toggle("active")
})

window.onscroll=()=>{
    menu_bar.classList.remove("active")
}

window.onload=()=>{
    home_left.classList.add("show")
    setTimeout( btn.classList.add("slidup"),1000)   
}

li.forEach(Element=>{
   
    Element.addEventListener("click",(e)=>{
        li.forEach(ele=>ele.classList.remove("active"))

        e.target.classList.add("active")
    })
})

window.addEventListener("scroll",()=>{

        let value=window.scrollY
        if(value>690 && value<800){
        
        }
})
