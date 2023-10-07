const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
	eval(textarea.value);
}

reset.addEventListener("click", function () {
	textarea.value = code;
	userEntry = textarea.value;
	solutionEntry = jsSolution;
	solution.value = "Show solution";
	updateCode();
});

solution.addEventListener("click", function () {
	if (solution.value === "Show solution") {
		textarea.value = solutionEntry;
		solution.value = "Hide solution";
	} else {
		textarea.value = userEntry;
		solution.value = "Show solution";
	}
	updateCode();
});

const jsSolution = `const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  let days = 31;
  if (choice === 'February') {
    days = 28;
  } else if (choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
    days = 30;
  }

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
	if (e.keyCode === 9) {
		e.preventDefault();
		insertAtCaret("\t");
	}

	if (e.keyCode === 27) {
		textarea.blur();
	}
};

function insertAtCaret(text) {
	const scrollPos = textarea.scrollTop;
	let caretPos = textarea.selectionStart;
	const front = textarea.value.substring(0, caretPos);
	const back = textarea.value.substring(
		textarea.selectionEnd,
		textarea.value.length
	);

	textarea.value = front + text + back;
	caretPos += text.length;
	textarea.selectionStart = caretPos;
	textarea.selectionEnd = caretPos;
	textarea.focus();
	textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
	// We only want to save the state when the user code is being shown,
	// not the solution, so that solution is not saved over the user code
	if (solution.value === "Show solution") {
		userEntry = textarea.value;
	} else {
		solutionEntry = textarea.value;
	}

	updateCode();
};
