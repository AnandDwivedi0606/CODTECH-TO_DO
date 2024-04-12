function addTask(){
    const input = document.getElementById('input');
    const inputValue = input.value.trim()

    if (inputValue) {
    

    const todoList = document.getElementById("todoList")
    
    const todoItems = document.createElement("li")

    
    const spanText = document.createElement("span")
    spanText.innerHTML = `<p>${inputValue}</p>`
    spanText.className = "text"
    
    
    const doneButton = document.createElement("button")
    doneButton.innerHTML = `<span class='material-symbols-outlined'>
    done
    </span>`
    doneButton.onclick = ()=>{
        spanText.classList.toggle("complete")
    }
    

    const removeButton = document.createElement("button")
    removeButton.innerHTML = `<span class="material-symbols-outlined">
    close
    </span>`
    removeButton.onclick = ()=>{
        todoList.removeChild(todoItems)
    }
    

    const spanButton = document.createElement("span")
    spanButton.classList = "done_cut"


    spanButton.appendChild(doneButton)
    spanButton.appendChild(removeButton)
    
    
    todoItems.appendChild(spanText)
    todoItems.appendChild(spanButton)
    

    todoList.appendChild(todoItems)

    input.value = ""
}
else{
    alert("Please Enter A To DO")
}


}