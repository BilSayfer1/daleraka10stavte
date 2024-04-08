let form = document.createElement('form');
form.name = 'vorzakonka';
let shaytanDiv = document.createElement('div');
shaytanDiv.className = 'shaytan';
let nameDiv = document.createElement('div');
nameDiv.className = 'name';
let nameLabel = document.createElement('h4');
nameLabel.textContent = 'Имя';
let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Имя и Фамилия';
nameInput.name = 'name';
nameDiv.appendChild(nameLabel);
nameDiv.appendChild(nameInput);

let ageDiv = document.createElement('div');
ageDiv.className = 'age';
let ageLabel = document.createElement('h4');
ageLabel.textContent = 'Возраст';
let ageInput = document.createElement('input');
ageInput.type = 'text';
ageInput.placeholder = 'Возраст';
ageInput.name = 'age';
let seeButton = document.createElement('button');
seeButton.className = 'see';
seeButton.textContent = 'Показать';
ageDiv.appendChild(ageLabel);
ageDiv.appendChild(ageInput);
ageDiv.appendChild(seeButton)

shaytanDiv.appendChild(nameDiv);
shaytanDiv.appendChild(ageDiv);
document.body.appendChild(form);
form.appendChild(shaytanDiv);



form.onsubmit = (event) => {
    event.preventDefault()
    
}


seeButton.addEventListener('click', function() {
    let enteredName = nameInput.value;
    let enteredAge = ageInput.value;

    if (!enteredName || !enteredAge) {
        alert('Fill all fields');
        return; 
    }

    let displayDiv = document.createElement('div');
    displayDiv.className = 'box'

    let age_box = document.createElement('div')
    age_box.className = 'age_box'
    let displayText = document.createTextNode(enteredName);
    let age_text = document.createTextNode( new Date().getFullYear() - parseInt(enteredAge))
    displayDiv.appendChild(displayText);
    age_box.appendChild(age_text)
    let deleteButton = document.createElement('button');
    deleteButton.className = 'del_btn'
    

    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function() {
        displayDiv.remove();
    });
displayDiv.appendChild(age_box)
    displayDiv.appendChild(deleteButton);

    form.appendChild(displayDiv);
});
