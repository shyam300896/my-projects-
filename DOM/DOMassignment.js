
// validation of the form

const form = document.querySelector('form');
const bookname = document.querySelector("#bookname");
const authorname = document.querySelector("#authorname");
const price = document.querySelector("#price");
const bookInventory = document.querySelector(".BookInventory");
const bookstore = document.querySelector(".bookstore");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const bookcheck = bookname.value;
    const authorcheck = authorname.value;
    const pricecheck = price.value;

    if (bookcheck == "") {
        alert("enter the book name ")
        return false;
    }
    if (authorcheck == "") {
        alert("enter the author name ")
        return false;
    }
    if (pricecheck == "") {
        alert("enter the price of  book ")
        return false;
    }

    const booklist =document.createElement("div");
    booklist.classList.add("Booklist");

    const bookdetails= document.createElement("div");
    bookdetails.classList.add("Bookdetails");

    const index =document.createElement("div");
    index.classList.add("index");
    index.classList.add("d-flex");
    
    const name_index = document.createElement("h1");
    name_index.innerHTML="BOOK NAME";
    name_index.classList.add("display-1");

    const author_index = document.createElement("h1");
    author_index.innerHTML="AUTHOR NAME";
    const price_index = document.createElement("h1");
    price_index.innerHTML="PRICE";

    bookdetails.appendChild(index);
    bookdetails.appendChild(name_index);
    bookdetails.appendChild(author_index);
    bookdetails.appendChild(price_index);



    

    const content=document.createElement("div");
    content.classList.add("Content");
    content.classList.add("d-flex");
    content.classList.add("my-3");

    const name_input = document.createElement("input");
    name_input.classList.add("text");
    name_input.classList.add("form-control");
    name_input.classList.add("mx-3");
    name_input.type = "text";
    name_input.value = bookcheck;
    name_input.setAttribute("readonly", "readonly");

    const autor_input = document.createElement("input");
    autor_input.classList.add("text");
    autor_input.classList.add("form-control");
    autor_input.classList.add("mx-3");
    autor_input.type = "text";
    autor_input.value = authorcheck;
    autor_input.setAttribute("readonly", "readonly");

    const price_input = document.createElement("input");
    price_input.classList.add("text");
    price_input.classList.add("form-control");
    price_input.classList.add("mx-3");
    price_input.type = "text";
    price_input.value = pricecheck;
    price_input.setAttribute("readonly","readonly");


    const action = document.createElement('div')
    action.classList.add("action");
    

    const task_edit= document.createElement("button")
    task_edit.classList.add("btn");
    task_edit.classList.add("btn-success");
    task_edit.classList.add("edit");
    task_edit.classList.add("mx-2");
    

    task_edit.innerHTML="edit";

    const task_delete= document.createElement("button")
    task_delete.classList.add("btn");
    task_delete.classList.add("btn-danger");
    task_delete.classList.add("delete");
    task_delete.classList.add("mx-2");
    
    task_delete.innerHTML="delete";


    bookInventory.appendChild(booklist);
    bookstore.appendChild(bookInventory);

    action.appendChild(task_edit);
    action.appendChild(task_delete);

    content.appendChild(name_input);
    content.appendChild(autor_input);
    content.appendChild(price_input);

    bookdetails.appendChild(content);
    bookdetails.appendChild(action);

    booklist.appendChild(bookdetails);

    bookname.value="";
    authorname.value="";
    price.value="";


    task_edit.addEventListener('click',()=>{

            if(task_edit.innerHTML=="edit")
                {
           
                    name_input.removeAttribute("readonly");
            autor_input.removeAttribute("readonly");
            price_input.removeAttribute("readonly");
            
            task_edit.innerHTML="save";


            }else
            { 
                name_input.setAttribute("readonly","readonly");
                autor_input.setAttribute("readonly","readonly");
                price_input.setAttribute("readonly","readonly");
                
                task_edit.innerHTML="edit";
    
            }

    })
    

task_delete.addEventListener('click',()=>{

booklist.removeChild(bookdetails);

    


})
})