document.addEventListener('DOMContentLoaded', function() {
    const addItemForm = document.getElementById('addItemForm');
    const itemList = document.getElementById('itemList');
    const addItemBtn = document.getElementById('addItemBtn');
    const markPurchasedBtn = document.getElementById('markPurchasedBtn');
    const clearListBtn = document.getElementById('clearListBtn');
    
    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get the value from the input field
        const itemNameInput = document.getElementById('itemName');
        const itemName = itemNameInput.value.trim(); // Trim to remove leading/trailing whitespace
        
        if (itemName === '') {
            alert('Please enter an item name.');
            return;
        }
        
        // Create a new list item element
        const newItem = document.createElement('li');
        newItem.classList.add('item');
        
        // Create span for item name
        const itemNameSpan = document.createElement('span');
        itemNameSpan.textContent = itemName;
        newItem.appendChild(itemNameSpan);
        
        // Create button for marking item as purchased
        const markPurchasedBtn = document.createElement('button');
        markPurchasedBtn.textContent = 'Mark Purchased';
        markPurchasedBtn.classList.add('mark-btn');
        
        markPurchasedBtn.addEventListener('click', function() {
            // Toggle the purchased class on the list item
            newItem.classList.toggle('purchased');
        });
        
        // Append the button to the list item
        newItem.appendChild(markPurchasedBtn);
        
        // Append the new item to the list
        itemList.appendChild(newItem);
        
        // Clear the input field
        itemNameInput.value = '';
    });
    
    clearListBtn.addEventListener('click', function() {
        // Remove all items from the list
        itemList.innerHTML = '';
    });
});