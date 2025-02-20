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
    deleteBtn.id = 'deleteBtnId'
    deleteBtn.addEventListener("click",()=> li.remove())
    deleteBtn.classList.add("bg-red-500", "px-1" ,"rounded-lg" ,"px-3" ,"text-white")

    div.appendChild(editBtn)
    div.appendChild(deleteBtn)
    li.appendChild(span)
    li.appendChild(div)
    list.appendChild(li)
      
    input.value = ""




}
 addBtn.addEventListener("click",addInputs)
 input.addEventListener("keypress", (e) => { if (e.key === "Enter") addInputs(); })


 function editText(span){
    let currentText = span.textContent;
    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = currentText;
    inputField.classList.add("bg-gray-200", "p-1", "rounded-lg");

    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList.add("bg-blue-500", "px-2", "rounded-lg", "text-white", "ml-2");

    let parent = span.parentElement;
    parent.replaceChild(inputField, span);
    parent.appendChild(saveBtn);


    saveBtn.addEventListener("click", () => {
        let updatedText = inputField.value.trim();
        if (updatedText === "") {
            alert("Text cannot be empty!");
            return;
        }
        
        
        span.textContent = updatedText;
        parent.replaceChild(span, inputField);
        parent.removeChild(saveBtn);
    });


    
    
    inputField.focus();
 }
