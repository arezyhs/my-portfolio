document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'C++ Data Structur and Algorithm: Tree Topology Network', description: 'Simple program about "Network Traffic Monitoring and Simulation of Tree Topology Network" using C++ to learn about Data Structure and Algorithm', url: 'https://github.com/arezyhs/cplusplus-network-traffic-monitoring-and-tree-topology-network' },
        { title: 'C++ Fundamental: Text-Based RPG Game', description: 'This project is a simple text-based RPG game written in C++. Players navigate through a fantasy world, encountering enemies and making choices to progress in the game.', url: 'https://github.com/arezyhs/cplusplus-final-project-rpg-game' },
        { title: 'Project 3', description: 'Description of project 3', url: 'https://github.com/arezyhs/project3' },
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

    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    gridViewButton.addEventListener('click', () => {
        projectList.classList.add('grid-view');
        projectList.classList.remove('list-view');
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
    });

    listViewButton.addEventListener('click', () => {
        projectList.classList.add('list-view');
        projectList.classList.remove('grid-view');
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
    });
});