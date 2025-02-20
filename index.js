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
    li.classList.add("flex","justify-between","bg-gray-300", "rounded-lg", "p-2" )

    let span = document.createElement("span")
    span.textContent=inputText

    let div = document.createElement("div")
    div.classList.add("flex","gap-3")

    let editBtn = document.createElement("button")
    editBtn.textContent="Edit"
    editBtn.addEventListener("click",()=> editText(span))
    editBtn.classList.add("bg-green-500", "px-1" ,"rounded-lg" ,"px-3" ,"text-white")

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent ="Delete"
    deleteBtn.addEventListener("click",()=> li.remove())
    deleteBtn.classList.add("bg-red-500", "px-1" ,"rounded-lg" ,"px-3" ,"text-white")

    div.appendChild(deleteBtn)
    div.appendChild(editBtn)
    li.appendChild(span)
    li.appendChild(div)
    list.appendChild(li)
      
    input.value = ""


}
 addBtn.addEventListener("click",addInputs)