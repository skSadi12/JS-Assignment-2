let input = document.querySelector("#inputText")
let addBtn = document.querySelector("#addBtn")
let list = document.querySelector("#ul")

function addInputs(){
    let inputText= input.value.trim();
    if(input.value === ""){
        alert("input field is empty")
        return;
    }
    let li = document.createElement("li")
    li.classList.add("flex","justify-between" )

    let span = document.createElement("span")
    span.textContent=inputText

    let div = document.createElement("div")

    let editBtn = document.createElement("button")
    editBtn.textContent="Edit"
    editBtn.addEventListener("click",()=> editText(span))


    let deleteBtn = document.createElement("button")
    deleteBtn.textContent ="Delete"
    deleteBtn.addEventListener("click",()=> li.remove())


    div.appendChild(deleteBtn)
    div.appendChild(editBtn)
    li.appendChild(span)
    li.appendChild(div)
    list.appendChild(li)
      
    input.value = ""


}
 addBtn.addEventListener("click",addInputs)