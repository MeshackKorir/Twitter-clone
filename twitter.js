 // FEtching users in search input
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


function populateUserDropdown(users) {
    const userDropdown = document.getElementById('users');


    userDropdown.innerHTML = '';


    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.text = user.username;


        userDropdown.appendChild(option);
    });


    userDropdown.dispatchEvent(new Event('click'));
}


function handleUserSelection() {
    const userId = document.getElementById('users').value;
    console.log('Selected User ID:', userId);

}


document.getElementById('users').addEventListener('click', async function () {
    const users = await fetchUsers();
    populateUserDropdown(users);


    const userDropdown = document.getElementById('users');
    userDropdown.style.display = (userDropdown.style.display === 'block') ? 'users' : 'block';
});


document.getElementById('users').addEventListener('click', handleUserSelection);


window.onclick = function (event) {
    const userDropdown = document.getElementById('users');
    if (event.target !== document.getElementById('searchButton') && event.target !== userDropdown) {
        userDropdown.style.display = 'none';
    }
};
