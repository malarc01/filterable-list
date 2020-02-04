const filterInput = document.querySelector('#filterInput');
const names = [ ...document.querySelectorAll('.letter-group__name a') ];
const form = document.querySelector('.search-form');

filterInput.focus();

function filterName() {
	const value = this.value.toUpperCase();
	names.forEach(
		(name) =>
			name.textContent.toUpperCase().includes(value) ? name.classList.remove('hide') : name.classList.add('hide')
	);
}

filterInput.addEventListener('change', filterName);
filterInput.addEventListener('keyup', filterName);
form.addEventListener('submit', function(e) {
	e.preventDefault();
});

// This is for the second comparsion column
// search column two
const filterInputTwo = document.querySelector('#filterInput-two');
const allVegtables = [ ...document.querySelectorAll('.vegtable a') ];

const formTwo = document.querySelector('.search-form-two');

filterInputTwo.focus();

function filterVegtable() {
	const value = this.value.toUpperCase();
	allVegtables.forEach(
		(vegtable) =>
			vegtable.textContent.toUpperCase().includes(value)
				? vegtable.classList.remove('hide')
				: vegtable.classList.add('hide')
	);
}
filterInputTwo.addEventListener('change', filterVegtable);

filterInputTwo.addEventListener('keyup', filterVegtable);

formTwo.addEventListener('submit', function(e) {
	e.preventDefault();
});

function colorBg() {
	var selectedId = document.getElementById('selectid');
	var bgColor = selectedId.options[selectedId.selectedIndex].value;
	document.body.style.backgroundColor = bgColor;
}
