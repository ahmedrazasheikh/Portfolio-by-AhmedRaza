 document.querySelector(".fa-bars").addEventListener("click", ()=>{
document.querySelector(".realnav").classList.toggle("vaer")

} )

document.querySelector(".fa-times").addEventListener("click", ()=>{
    document.querySelector(".realnav").classList.toggle("vaer")
} )




// window.addEventListener('resize', function(event){

//     console.log(window.innerWidth)

//     if(window.innerWidth >   "627"){
//         let ul = document.getElementById("evl")
// ul.style.display ="flex"


//     }
//     if(window.innerWidth <  "627"){
//         let ul = document.getElementById("evl")
// ul.style.display ="block"
//     }
// } )



// document.querySelector(".fa-times").addEventListener("click", ()=> {

//         let ul = document.getElementById("evl")
//         ul.style.display = "none"

  
// })

document.getElementById("bt-1-Project").addEventListener("click",()=> {
    window.location.href="./index2.html"
})
