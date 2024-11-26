// Fetch the data from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.title = `${data.personal.firstname} ${data.personal.lastname}`

        const fullnames = document.querySelectorAll('[id="full-name"]')
        if(fullnames) {
            fullnames.forEach(fullname => {
                fullname.innerHTML = `${data.personal.firstname} ${data.personal.lastname}`;
            });
        }

        const firstnames = document.querySelectorAll('[id="first-name"]')
        if(firstnames) {
            firstnames.forEach(firstname => {
                firstname.innerHTML = data.personal.firstname;
            });
        }

        const navbarList = document.querySelectorAll('[class="navbar"]')
        if(navbarList) {
            navbarList.forEach(navbar => {
                navbar.innerHTML = `
                    <div class="container">
                        <a href="index.html">Home</a>
                        <a href="project.html">Projects</a>
                        <a href="resume.html">Resume</a>
                        <a href="experience.html">Experience</a>
                        <div class="dropdown">
                            <a href="hobbies.html">Hobbies</a>
                            <div class="dropdown-content">
                                <a href="#tennis">Tennis</a>
                                <a href="#rocketleague">Rocket League</a>
                            </div>
                        </div>
                        <a href="hobbies.html">Hobbies</a>
                        <a href="life.html">Life</a>
                    </div>
                `
            });
        }

        // Populate the contact for footer
        const headerInfo = document.getElementById('header-info');
        if(headerInfo) {
            headerInfo.innerHTML = `
                <div class="container">
                    <h1>${data.personal.firstname}'s Website</h1>
                    <h2>${data.personal.job}</h2>
                    <p class="tagline">"Passionate About Technology, Traveling, and Life!"</p>
                </div>
            `;
        }

        // Populate the contact for footer
        const footerInfo = document.getElementById('footer-info');
        if(footerInfo) {
            footerInfo.innerHTML = `
                <p>&copy; 2024 ${data.personal.firstname} ${data.personal.lastname} | <a href=${data.contact.email}>Contact Me</a></p>
                <div class="social-links">
                    <a href=${data.contact.linkedin}>LinkedIn</a>
                    <a href=${data.contact.github}>GitHub</a>
                </div>
            `;
        }

        const navbarButtons = document.getElementsByClassName('navbar');
        navbarButtons.innerHTML = `
        
        `
        
        

        // // Populate the projects list
        // const projectsList = document.getElementById('projects-list');
        // data.projects.forEach(project => {
        //     const listItem = document.createElement('li');
        //     listItem.innerHTML = `
        //         <a href="${project.link}" target="_blank">${project.name}</a>: ${project.description}
        //     `;
        //     projectsList.appendChild(listItem);
        // });
    })
    .catch(error => {
        console.error('Error loading JSON data:', error);
    });

// Activate the current page button on navbar
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
