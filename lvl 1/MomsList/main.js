
//button to add new string value
const form = document.addItem
console.log(form)
form.addEventListener("submit", (e) =>{
    //page can NOT refresh when values are  input
    e.preventDefault()
    const name = form.title.value
    form.title.value = " "
    //add values to pre-built [ul] using pre-built form
    //new list items should have the same format as the [li] that comes with the git repo
  
    //step one create the element which in this case is just a empty<li><li>
  const listItem = document.createElement("li")
  //step two edit the content which in this cse is the <li><li>
  listItem.textContent = name
  //step three is to show it on the page or append it to the DOM
  document.getElementsByTagName("ul")[0].append(listItem)
  console.log(listItem)
  //button [x] to delete values
const deletebtn = document.createElement("button")
deletebtn.textContent = "X"
listItem.append(deletebtn)


deletebtn.addEventListener("click", ()=>{
    listItem.remove("li")
})
})