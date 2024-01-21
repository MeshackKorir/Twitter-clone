let products = document.querySelector(".products")

let product = []

// function to fetch users info
function fetchProducts(callback) {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            const usersSelect = document.getElementById("users")
            const userDropdown = document.getElementById("userDropdown")
        })
}