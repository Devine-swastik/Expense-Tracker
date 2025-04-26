let expenseForm = document.getElementById('expense-form');
let expenseList = document.getElementById('expense-list');
let totalDisplay = document.getElementById('total');

let total = 0;

expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let title = document.getElementById('expense-title').value;
    let amount = parseFloat(document.getElementById('expense-amount').value);

    // Create a new list item
    let li = document.createElement('li');
    li.innerHTML = `${title} - ₹${amount.toFixed(2)} <button onclick="deleteExpense(this, ${amount})">Delete</button>`;

    // Add the item to the list
    expenseList.appendChild(li);

    // Update total
    total += amount;
    totalDisplay.textContent = total.toFixed(2);

    // Reset form
    expenseForm.reset();
});

function deleteExpense(element, amount) {
    // Remove the expense from the list
    element.parentElement.remove();

    // Update the total
    total -= amount;
    totalDisplay.textContent = total.toFixed(2);
}
