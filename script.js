// Get form and list elements
const form = document.getElementById('machineForm');
const machineList = document.getElementById('machineList');

// Listen for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload

  // Get values from inputs
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const contact = document.getElementById('contact').value;

  // Create a new list item
  const li = document.createElement('li');
  li.textContent = `${name} - ${price} ETB/hour - Contact: ${contact}`;

  // Add to the list
  machineList.appendChild(li);

  // Clear form
  form.reset();
});
