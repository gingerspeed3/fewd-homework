// Initial Count of ToDo items
var count = 0;

// Listeners

// Here, we attach certain function to certain events
// Below, we elaborate on what each function does

// When the #new form is submitted, add the new item
$('#new').on('submit', addNewItem);

// When an item gets clicked, mark as complete or incomplete
// Code goes here to call switchStatus
$('#todos').on('click', '.item', switchStatus);

// When a remove link is clicked, remove that item
// Code goes here to call removeItem
$('#todos').on('click', '.remove', removeItem);

// When an edit link is clicked, go into edit mode
// Code goes here to call editItem
$('#todos').on('click', '.edit', editItem);

// When an item editor is submitted, save the changes
// Code goes here to call saveItem
$('#todos').on('submit', '.editor', saveItem);

// When a user leaves an item editor form, save the changes
// Code goes here to call saveItem
$('#todos').on('blur', '.editor', saveItem);

// When the Clear List button is clicked, clear out the items
// Code goes here to call clearList
$('#clear').on('click', clearList);

// When the Clear Completed button is clicked, clear out the completed items
// Code goes here to call clearCompleted
$('#clearCompleted').on('click', clearCompleted);

// Functions
// See above for when these are used

function updateCount() {
	var listLength = $('#todos li').not('.done').length;
	$('#count').text(listLength);
};

function addNewItem(event) {
	event.preventDefault();
	var item = $('#newItem').val();
	console.log(item);
	$('#todos').append('<li><span class="item">' + item + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
	updateCount();
	$('#new')[0].reset();
};

function removeItem(event) {
	event.preventDefault();
	$(this).parent().remove();
	updateCount();
};

function editItem(event) {
	// ADVANCED/Optional:
	// Prevent page reload
	event.preventDefault();
	// Get the text of the to-do item; it's a sibling of the clicked link
	var itemText = $(this).siblings('.item').html();
	// Get the parent <li>
	var listItem = $(this).parent();
	// Replace the parent <li> contents with an edit form '<form class="editor"><input value="' + itemText + '"></form>'
  listItem.html('<li><form class="editor"><input value="' + itemText + '"></form></li>');
	// Focus the keyboard on the input that was just added
  listItem.find('input').focus();
};

function saveItem(event) {
	//ADVANCED/Optional - only if you made the edit in place using editItem()
	// Prevent page reload
	event.preventDefault();
	// Get the new text from the editor
	var itemText = $(this).children('input').val();
	// Get the parent <li>
	var listItem = $(this).parent();
	// Replace the parent <li> contents with the updated item and controls
  listItem.html('<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>');
};

function switchStatus() {
	var listItem = $(this).parent();
	console.log(listItem);
	$(listItem).toggleClass('done');
	// The list has been changed, so update the count
	updateCount();
};

function clearList() {
	// Find all the items and remove them
  $('#todos li').remove();
	// The list has been changed, so update the count
  updateCount();
};

function clearCompleted() {
	// Find all the items that are done, and remove them
  $('.done').remove();
	// The list has been changed, so update the count
  updateCount();
};
