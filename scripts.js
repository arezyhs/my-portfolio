document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'Project 1', description: 'Description of project 1', url: 'https://github.com/arezyhs/project1' },
        { title: 'Project 2', description: 'Description of project 2', url: 'https://github.com/arezyhs/project2' },
        { title: 'Project 3', description: 'Description of project 3', url: 'https://github.com/arezyhs/project3' },
        // Add more projects here
    ];

    const projectList = document.querySelector('.project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectItem);
    });
});
