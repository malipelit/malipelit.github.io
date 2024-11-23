// Activate the current page button on navbar
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});



// // Get the current page URL path
// const currentPage = window.location.pathname.split('/').pop();
// console.log('Current Page:', currentPage); // Log the current page URL

// // Select all the navigation links in the navbar
// const navLinks = document.querySelectorAll('.navbar a');

// // Loop through each link and check if it matches the current page
// navLinks.forEach(link => {
//     const linkHref = link.getAttribute('href');
//     console.log('Link href:', linkHref); // Log each link href

//     // If the href of the link matches the current page path, add the 'active' class
//     if (linkHref === currentPage) {
//         console.log('Match found for:', linkHref); // Log when a match is found
//         link.classList.add('active');
//     }
// });