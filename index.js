document.addEventListener('DOMContentLoaded', function() {
    const addItemForm = document.getElementById('addItemForm');
    const itemList = document.getElementById('itemList');
    const clearListBtn = document.getElementById('clearListBtn');
    const itemNameInput = document.getElementById('itemName');

    let items = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // Load existing items from local storage
    items.forEach(item => {
        addItemToDOM(item);
    });

    // Event listener for adding items
    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const itemName = itemNameInput.value.trim();
        if (itemName === '') {
            alert('Please enter an item name.');
            return;
        }

        const item = { name: itemName, purchased: false };
        items.push(item);
        addItemToDOM(item);
        saveToLocalStorage();
        itemNameInput.value = ''; // Clear the input field
    });

    // Event listener for clearing the list
    clearListBtn.addEventListener('click', function() {
        items = []; // Clear the array
        itemList.innerHTML = ''; // Clear the displayed list
        localStorage.removeItem('shoppingList'); // Remove from local storage
    });

    // Function to add items to the DOM
    function addItemToDOM(item) {
        const newItem = document.createElement('li');
        newItem.classList.add('item');

        const itemNameSpan = document.createElement('span');
        itemNameSpan.classList.add('name');
        itemNameSpan.textContent = item.name;
        newItem.appendChild(itemNameSpan);

        // Button to mark item as purchased
        const markPurchasedBtn = document.createElement('button');
        markPurchasedBtn.textContent = 'Mark Purchased';
        markPurchasedBtn.classList.add('mark-btn');

        markPurchasedBtn.addEventListener('click', function() {
            item.purchased = !item.purchased; // Toggle purchased status
            newItem.classList.toggle('purchased'); // Update visual state
            markPurchasedBtn.textContent = item.purchased ? 'Unmark' : 'Mark Purchased';
            saveToLocalStorage(); // Save changes to local storage
        });

        newItem.appendChild(markPurchasedBtn);
        itemList.appendChild(newItem); // Append the new item to the list
    }

    // Function to save items to local storage
    function saveToLocalStorage() {
        localStorage.setItem('shoppingList', JSON.stringify(items));
    }
});