const submitForm = document.getElementById("submitButton");
const participantName = document.getElementById("name").value;
const participantEmail = document.getElementById("email").value;
const participantAge = document.getElementById("number").value;
// const participantOccupation = document.getElementById("name");
// const participantStack = document.getElementById("name"); 
// const participantUsedTechnologies = document.getElementById("name");
const extraInformations = document.getElementById("infomations").value;
console.log(participantEmail);
console.log(participantEmail);
console.log(participantAge);


submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(participantEmail);
    console.log(participantEmail);
    console.log(participantAge);
});