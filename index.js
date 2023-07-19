const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

function handleButtonClick(event) {
	// Get the clicked button element
	const clickedButton = event.target;

	// Get the sidebar element
	const sidebar = document.querySelector(".sidebar");

	// Get the currently active button (if any)
	const activeButton = sidebar.querySelector(".active");

	// Remove the active class from the previously active button
	if (activeButton) {
		activeButton.classList.remove("active");
	}

	// Add the active class to the clicked button
	clickedButton.classList.add("active");
}

// Add click event listeners to each button
const buttons = document.querySelectorAll(".sidebar a");
buttons.forEach((button) => {
	button.addEventListener("click", handleButtonClick);
});