const submitForm = document.getElementById("submitButton");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("number");
var occupationInputs = document.getElementById('dropdown');
const front = document.getElementById("frontend");
const back = document.getElementById("backend");
const full = document.getElementById("full-stack");
const technologies = document.querySelectorAll('[type="checkbox"]:checked');


const textAreaInput = document.getElementById("infomations");




submitForm.addEventListener("click", function (event) {
    event.preventDefault();

    // form validation

    // getting the paticipant data
    const participantName = nameInput.value;
    const participantEmail = emailInput.value;
    const participantAge = ageInput.value;
    let participantOccupation = occupationInputs.options[occupationInputs.selectedIndex].value;
    let participantStack;

    const extraInformations = textAreaInput.value;

    if (front.checked == true) {
        participantStack = front.value;
    };
    if (back.checked == true) {
        participantStack = back.value;
    };
    if (full.checked == true) {
        participantStack = full.value;
    };

    var participantTechnologies = [];
    function gettingTheTechnologies() {
        var cboxes = document.getElementsByName('technologies[]');
        var len = cboxes.length;
        for (var i = 0; i < len; i++) {
            if (cboxes[i].checked == true) {
                participantTechnologies.push(cboxes[i].value);
            }
            else {
            }
        }
    }

    gettingTheTechnologies();

    console.log(participantName);
    console.log(participantEmail);
    console.log(participantAge);
    console.log(participantOccupation);
    console.log(participantStack);
    console.log(participantTechnologies);
    console.log(extraInformations);

    // dispalying the data.






});