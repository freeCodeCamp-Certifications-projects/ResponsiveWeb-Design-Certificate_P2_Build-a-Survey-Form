const submitForm = document.getElementById("submitButton");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("number");
var occupationInputs = document.getElementById('dropdown');
const front = document.getElementById("frontend");
const back = document.getElementById("backend");
const full = document.getElementById("full-stack");
var participantStack;
var checkBoxes = document.getElementsByName('technologies[]');
var participantTechnologies = [];
const textAreaInput = document.getElementById("infomations");




submitForm.addEventListener("click", function (event) {
    event.preventDefault();

    // form validation
    function notEmpty() {
        if (nameInput.value === "") {
            const nameLable = document.getElementById('name-label');
            const message = document.createElement("p");
            message.style.backgroundColor = "orange";
            message.style.fontSize = "0.8rem";
            message.style.fontWeight = 200;
            message.style.borderRadius = "0.5rem";
            message.style.padding = "0.3rem";
            message.innerText = "You must provide a name"
            nameLable.appendChild(message);
        }

        if (emailInput.value === "") {
            const nameLable = document.getElementById('email-label');
            const message = document.createElement("p");
            message.style.backgroundColor = "orange";
            message.style.fontSize = "0.8rem";
            message.style.fontWeight = 200;
            message.style.borderRadius = "0.5rem";
            message.style.padding = "0.3rem";
            message.innerText = "You must provide an email"
            nameLable.appendChild(message);
        }

        if (participantTechnologies.length == 0) {
            const nameLable = document.getElementById('checkbox-label');
            const message = document.createElement("p");
            message.style.backgroundColor = "orange";
            message.style.fontSize = "0.8rem";
            message.style.fontWeight = 200;
            message.style.borderRadius = "0.5rem";
            message.style.padding = "0.3rem";
            message.innerText = "You must select atleast one technology"
            nameLable.appendChild(message);
            return false;
        }
    }


    // getting the paticipant data
    const participantName = nameInput.value;
    const participantEmail = emailInput.value;
    const participantAge = ageInput.value;
    let participantOccupation = occupationInputs.options[occupationInputs.selectedIndex].value;
    const extraInformations = textAreaInput.value;
    gettingtheStack()
    gettingTheTechnologies();
    notEmpty();

    // dispalying the data.
    displayData();

    function displayData() {

        const participantData = document.getElementById("participantData");
        const paragraph = document.createElement("p");
        paragraph.innerText = `Hello ${participantName} with the email ${participantEmail}
        you are ${participantOccupation} working as ${participantStack} with these technologies ${participantTechnologies}` 
        participantData.appendChild(paragraph);
    }




});

function gettingtheStack() {
    if (front.checked == true) {
        participantStack = front.value;
    };
    if (back.checked == true) {
        participantStack = back.value;
    };
    if (full.checked == true) {
        participantStack = full.value;
    };
};

function gettingTheTechnologies() {
    var length = checkBoxes.length;
    for (var i = 0; i < length; i++) {
        if (checkBoxes[i].checked == true) {
            participantTechnologies.push(checkBoxes[i].value);
        }
        else {
        }
    }
}