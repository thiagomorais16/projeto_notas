    
    // PEGAR O FORMULARIO
    const form = document.getElementById("addCard")

const showForm = () =>{
   
    // MOSTRAR O FORMULARIO
    form.classList.toggle("hidden");
    // ESCONDER OS CARD (ESTÃO NA MAIN)
    const main = document.getElementsByTagName("main")[0];
    main.classList.toggle("hidden");
}
 const addCard = (event) => {
    event.preventDefault();
   //PEGAR OS ELEMENTOS DO FORMULARIO
   // [0 TÍTULO, 1- TEXTAREA, 2- DIV]

    //PEGAR OS ELEMENTOS DO FORMULARIO

    //PEGAR OS VALORES DESSES ELEMENTOS
    const title = form.children[0].value;
    const description = form.children[1].value;
    const date = form.children[2].children[0].value;

    const newTask = {
        title,
        description,
        date,
        status : "todo",
    };
    //localStorage.getItem("tasks") || RETORNA STRING
    // TRANSFORMA EM OBJETO -> JSON.parse -> transforma string em objeto
    //não colocar valor numa const mas no let
    let allTasks = [newTask];
    const oldTasks = JSON.parse(localStorage.getItem("tasks"));

    if (oldTasks) {
        allTasks = [...oldTasks, newTask];
    }

    // PERSISTIR ESTES VALORES NO LOCALSTORAGE
    
    localStorage.setItem("tasks", JSON.stringify(allTask));
     
    //Pegar seção TODOSECTION
    const todoSection = document.getElementById("todolist");

   
    // criar div card container
    const cardContainer = document.createElement("div");
    // criar div class info
    const cardInfo = document.createElement("div");
    //criar titulo do class info
    const cardTitle = document.createElement("h3");
    // criar descrição
    const cardDescription = document.createElement("p");

    //crio a data
    const cardDate = document.createElement("span");

    cardTitle.innerHTML = newTask.title;
    cardDescription.innerHTML = newTask.description;
    cardDate.innerHTML = newTask.date;
  

    //estilizo, dando classes para cada um
    cardInfo.classList.add("info");
    cardDate.classList.add("date");
    cardContainer.classList.add("card","card_todo")
    //inserir um elemento dentro do outro
    cardInfo.append(cardTitle, cardDescription);
    cardInfo.append(cardInfo, cardDate);
    cardInfo.append(cardContainer);

    showForm();

};