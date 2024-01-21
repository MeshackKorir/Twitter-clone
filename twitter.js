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


async function handleUserSelection() {
    const userId = document.getElementById('users').value;
    console.log('Selected User ID:', userId);

    
    const posts = await fetchPosts(userId);
    displayPosts(posts);
}


document.getElementById('users').addEventListener('click', async function () {
    const users = await fetchUsers();
    populateUserDropdown(users);


    const userDropdown = document.getElementById('users');
    userDropdown.style.display = (userDropdown.style.display === 'block') ? 'users' : 'block';
});


document.getElementById('users').addEventListener('change', handleUserSelection);


window.onclick = function (event) {
    const userDropdown = document.getElementById('users');
    if (event.target !== document.getElementById('searchButton') && event.target !== userDropdown) {
        userDropdown.style.display = 'none';
    }
};


 // Posts fetch function

 async function fetchPosts(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

  // Function for displaying posts
 function displayPosts(posts) {
    const productDiv = document.querySelector(".product");
    productDiv.innerHTML = '';

    if (posts.length === 0) {
        productDiv.innerHTML = '<p>No posts yet</p>';
        return;
    }

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post')

        const titleElement = document.createElement('h4');
        titleElement.textContent = post.title;

        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;

        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);

        productDiv.appendChild(postElement);
    })
 }