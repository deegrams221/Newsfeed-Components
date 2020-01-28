/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
*/

window.addEventListener('load', (e) => {

  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.menu-button');

  //function
  const createMenu = (arr) => {

    // define new elements
    const menu = document.createElement('div');
    const menuUl = document.createElement('ul');
    
    // iterate over array to add li to ul
    menuItems.forEach(item => {
      let listItem = document.createElement('li');
      listItem.textContent = item;
      menuUl.appendChild(listItem);
    })

    // structure setup (append elements)
    header.appendChild(menu);
    menu.appendChild(menuUl);

    // set class names
    menu.classList.add('menu');
    
    // button event listener
    menuButton.addEventListener('click', (e) => {
      menu.classList.toggle('menu--open');
      TweenMax.to(menuVar, 1, { x:-350 ,ease:Power1.easeInOut });
    });

    // return
    return menu;
  };

  header.appendChild(createMenu(menuItems));
});