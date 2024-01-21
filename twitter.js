async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

// Function to populate the user dropdown with fetched users
function populateUserDropdown(users) {
    const userDropdown = document.getElementById('users');

    // Clear previous options
    userDropdown.innerHTML = '';

    // Create dropdown options for each user
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.text = user.username;

        // Append the option to the select element
        userDropdown.appendChild(option);
    });

    // Trigger the change event to update the content based on the default selected user
    userDropdown.dispatchEvent(new Event('change'));
}

// Function to handle the user selection (update content, etc.)
function handleUserSelection() {
    const userId = document.getElementById('users').value;
    console.log('Selected User ID:', userId);
    // Add logic here to handle the selected user (e.g., fetch posts).
}

// Event listener for click on the 'users' element
document.getElementById('users').addEventListener('click', async function () {
    const users = await fetchUsers();
    populateUserDropdown(users);

    // Toggle the display of the user dropdown
    const userDropdown = document.getElementById('users');
    userDropdown.style.display = (userDropdown.style.display === 'block') ? 'none' : 'block';
});

// Event listener for user selection
document.getElementById('users').addEventListener('change', handleUserSelection);

// Close the user dropdown when clicking outside of it
window.onclick = function (event) {
    const userDropdown = document.getElementById('users');
    if (event.target !== document.getElementById('searchButton') && event.target !== userDropdown) {
        userDropdown.style.display = 'none';
    }
};
