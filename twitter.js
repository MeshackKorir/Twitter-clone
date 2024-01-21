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
  
    // Create dropdown items for each user
    users.forEach(user => {
      const dropdownItem = document.createElement('a');
      dropdownItem.href = '#';
      dropdownItem.setAttribute('data-userid', user.id);
      dropdownItem.innerText = user.username;
  
      // Event listener for user selection
      dropdownItem.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedUserId = this.getAttribute('data-userid');
        handleUserSelection(selectedUserId);
      });
  
      userDropdown.appendChild(dropdownItem);
    });
  }
  
  // Function to handle the user selection (update content, etc.)
  function handleUserSelection(userId) {
    // You can add logic here to handle the selected user.
    // For example, fetch posts or other data related to the selected user.
  
    // For now, let's log the selected user ID to the console.
    console.log('Selected User ID:', userId);
  
    // You can update the content or perform additional actions based on the selected user.
  }
  
  // Event listener for search button
  document.getElementById('searchButton').addEventListener('click', async function() {
    const users = await fetchUsers();
    populateUserDropdown(users);
  
    // Toggle the display of the user dropdown
    const userDropdown = document.getElementById('userDropdown');
    userDropdown.style.display = (userDropdown.style.display === 'block') ? 'none' : 'block';
  });
  
  // Close the user dropdown when clicking outside of it
  window.onclick = function(event) {
    const userDropdown = document.getElementById('userDropdown');
    if (event.target !== document.getElementById('searchButton') && event.target !== userDropdown) {
      userDropdown.style.display = 'none';
    }
  };