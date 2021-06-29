
//Creaciones globales de los sigtes elementos
const inputName = document.getElementById("name");
const inputPhone = document.getElementById("phone");
const selectContactType = document.getElementById("contact-type");

function CreateContactType(){
    if(Validate()){

        const valueContact = selectContactType.value;
        const valueName = inputName.value;
        const valuePhone = inputPhone.value;

        const mainContainer = document.getElementById("contact-container");

        const divColMd4 = document.createElement("div");
        divColMd4.setAttribute("class", "col-md-4");

        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card");

        const divCardHeader = document.createElement("div");
        divCardHeader.setAttribute("class", "card-header bg-success text-white");

        const h5Title = document.createElement("h5");
        h5Title.setAttribute("class", "class-title");
        h5Title.innerText = "Contacto -" + valueContact;

        const divCardBody = document.createElement("div");
        divCardBody.setAttribute("class", "card-body");

        const ulListGroup = document.createElement("ul");
        ulListGroup.setAttribute("class", "list-group list-group-flush");

        const liName = document.createElement("li");
        liName.setAttribute("class", "list-group-item");
        liName.innerText = "Nombre -" + valueName;

        const liPhone = document.createElement("li");
        liPhone.setAttribute("class", "list-group-item");
        liPhone.innerText = "Teléfono -" + valuePhone;

        const btnDelete = document.createElement("button");
        btnDelete.setAttribute("class", "btn btn-danger float-end");
        btnDelete.innerText = "Eliminar";
        btnDelete.addEventListener("click", function(){
            if(confirm("¿Deseas eliminar este contacto?")){
                mainContainer.removeChild(divColMd4);
            }
        });
        

    }   
}

function Clear(){

    inputName.value = "";
    inputName.classList.remove("input-error");
    inputName.focus();

    inputPhone.classList.remove("input-error");
    inputPhone.value = "";

    selectContactType.classList.remove("input-error");
    selectContactType.value = "";
}

// Función para la validación del formulario
function Validate(){

    let isValid = true;
    
    //Validación del nombre
    const valueName = inputName.value;

    if(valueName == "" || 
       valueName == null || 
       valueName == undefined) {
        inputName.classList.add("input-error");
        isValid = false;    
    }else{
        inputName.classList.remove("input-error");
    }

    //Validación del número.
    const valuePhone = inputPhone.value;

    if(valuePhone == "" || 
       valuePhone == null || 
       valuePhone == undefined) {
        inputPhone.classList.add("input-error");
        isValid = false
    }else{
        inputPhone.classList.remove("input-error");
    }
     
    //Validación del Validación del tipo de contacto
    const valueContactType = selectContactType.value;


    if( valueContactType == "" || 
        valueContactType == null || 
        valueContactType == undefined){

            selectContactType.classList.add("input-error");
            isValid = false;
        } else{
            selectContactType.remove("inpurt-error");
        }
        return isValid;
}