let ourForm = document.getElementById('ourForm');
let ourField = document.getElementById('ourField');
let ourList = document.getElementById('ourList');
let toDoForm = document.getElementById('ourForm');

ourForm.addEventListener('submit', e => {
	e.preventDefault();
	createItem(ourField.value);
});

function createItem(x) {
	let ourHTML = `<li>${x} <button onclick="deleteItem(this)" >delete</button> </li>`;
	ourList.insertAdjacentHTML('beforeend', ourHTML);
	ourField.value = '';
	ourField.focus();
}

if (!toDoForm.addEventListener) {
	toDoForm.attachEvent('onsubmit', checkForm);
} else {
	toDoForm.addEventListener('submit', checkForm, false);
}

function checkForm(e) {
	if (toDoForm.elements['toDoInput'].value == '') {
		e.preventDefault();
		alert('Please add an item in the field before clicking the create button!');
	}
}

function deleteItem(elementToDelete) {
	elementToDelete.parentElement.remove();
}
