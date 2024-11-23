// Fetch the data from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.title = `${data.personal.firstname} ${data.personal.lastname}`
        document.getElementById('full-name').innerHTML = `${data.personal.firstname} ${data.personal.lastname}`

        // // Populate the contact info
        // const contactInfo = document.getElementById('contact-info');
        // contactInfo.innerHTML = `
        //     <strong>Email:</strong> ${data.contact.email}<br>
        //     <strong>Phone:</strong> ${data.contact.phone}<br>
        //     <strong>Email:</strong> ${data.contact.linkedin}<br>
        //     <strong>Email:</strong> ${data.contact.github}
        // `;

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
