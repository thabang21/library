let mylibrary=[]

function Book(name,author, type){

    this.name=name,
    this.author=author,
    this.type=type
}

function Display(){

}


let addBook = document.getElementById("addBook")
addBook.addEventListener("click",SubmitBook)

function SubmitBook(e){
    e.preventDefault()

    let name =document.getElementById("name").value ;
    let author =document.getElementById("author").value ;

    let type;
    let fiction=document.getElementById("fiction")
    let computer=document.getElementById("computer")
    let cooking=document.getElementById("cooking")

    if(fiction.checked){
        type=fiction.value
    }else if(computer.checked){
        type=computer.value
    }else if (cooking.checked){
        type=cooking.value
    }
    

    let book = new Book(name, author, type)

    console.log(mylibrary)



    let display =new Display()

    if(display.validate(book)){
        mylibrary.push(book)
        saveBook()
        display.show("sucess","book added")
    }else{
        display.show("alert","enter correct data")
    }  

    display.add()
  

}


Display.prototype.add= function(){
    document.getElementById("library").innerHTML="";

    mylibrary.map(book =>{

        const{name ,author, type}= book
        
        let div=document.createElement("div")
        div.setAttribute("class","displayBook")

        let ui=`
            <p>${name}</p>
            <p>${author}</p>
            <p>${type}</p>
            <button  class="delete">Delete</button>      
        `
        div.innerHTML=ui
        let library =document.getElementById("library")
        library.append(div)
    })
}

Display.prototype.validate= function(book){

    if(book.name.length<2 || book.author.length< 2){
        return false
    }else{
        return true
    }
}

Display.prototype.show= function(message, info){
    let Dmessage= document.getElementById("message")
    Dmessage.innerHTML= `
    <p class="${message}"> ${info}</p>
    `

    setTimeout(function(){
        Dmessage.innerHTML=""
    },3000)

}


Display.prototype.removeBook = function(e) {
    if(e.classList.contains("delete")){
        e.parentElement.remove();
    }
    }
    

let library = document.querySelector("#library");
library.addEventListener("click", (e)=>{

    let display = new Display();
   display.removeBook(e.target)

})

let saveBook=()=>{
    localStorage.setItem("library", JSON.stringify(mylibrary))
}





	