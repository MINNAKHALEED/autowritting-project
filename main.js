
const h1 = document.getElementById("h1")
console.log(h1)


let i = 1;

const autoWritting = setInterval(() => {



const title = "Courses 4 Arab"

h1.innerText = title.slice(0, i)

i++

if(i > title.length){
  // clearInterval(autoWritting)
  i = 1
}
  
}, 400)









