$(document).ready(function () {
    // Dummy data for demonstration
    var usersData = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User" }
    ];

    var menusData = [
        { id: 1, name: "Spaghetti Bolognese", description: "Spaghetti with meat sauce", price: 12.99 },
        { id: 2, name: "Caesar Salad", description: "Fresh romaine lettuce with Caesar dressing", price: 8.99 }
    ];

    // Function to populate users table
    function populateUsersTable() {
        var tableBody = $('#userTableBody');
        tableBody.empty(); // Clear existing table rows
        usersData.forEach(function (user) {
            var row = `<tr>
                           <td>${user.id}</td>
                           <td>${user.name}</td>
                           <td>${user.email}</td>
                           <td>${user.role}</td>
                           <td>
                               <button class="btn btn-sm btn-danger btn-delete-user" data-user-id="${user.id}">Delete</button>
                           </td>
                       </tr>`;
            tableBody.append(row);
        });
    }

    // Function to add a new user
    function addUser(name, email, role) {
        var userId = usersData.length + 1;
        var newUser = { id: userId, name: name, email: email, role: role };
        usersData.push(newUser);
        populateUsersTable();
    }

    // Event listener to trigger adding user
    $('#btnAddUser').click(function () {
        var userName = prompt("Enter user name:");
        var userEmail = prompt("Enter user email:");
        var userRole = prompt("Enter user role:");
        addUser(userName, userEmail, userRole);
    });

    // Event listener to trigger user deletion
    $('#userTableBody').on('click', '.btn-delete-user', function () {
        var userId = $(this).data('user-id');
        var indexToDelete = usersData.findIndex(user => user.id === userId);
        if (indexToDelete !== -1) {
            usersData.splice(indexToDelete, 1);
            populateUsersTable();
        }
    });

    // Function to populate menus table
    function populateMenusTable() {
        var tableBody = $('#menuTableBody');
        tableBody.empty(); // Clear existing table rows
        menusData.forEach(function (menu) {
            var row = `<tr>
                           <td>${menu.id}</td>
                           <td>${menu.name}</td>
                           <td>${menu.description}</td>
                           <td>${menu.price}</td>
                           <td>
                               <button class="btn btn-sm btn-danger btn-delete-menu" data-menu-id="${menu.id}">Delete</button>
                           </td>
                       </tr>`;
            tableBody.append(row);
        });
    }

    // Function to add a new menu item
    function addMenu(name, description, price) {
        var menuId = menusData.length + 1;
        var newMenu = { id: menuId, name: name, description: description, price: price };
        menusData.push(newMenu);
        populateMenusTable();
    }

    // Event listener to trigger adding menu item
    $('#btnAddMenu').click(function () {
        var menuName = prompt("Enter menu name:");
        var menuDescription = prompt("Enter menu description:");
        var menuPrice = prompt("Enter menu price:");
        addMenu(menuName, menuDescription, menuPrice);
    });

    // Event listener to trigger menu deletion
    $('#menuTableBody').on('click', '.btn-delete-menu', function () {
        var menuId = $(this).data('menu-id');
        var indexToDelete = menusData.findIndex(menu => menu.id === menuId);
        if (indexToDelete !== -1) {
            menusData.splice(indexToDelete, 1);
            populateMenusTable();
        }
    });

    // Initial population of tables
    populateUsersTable();
    populateMenusTable();
});
