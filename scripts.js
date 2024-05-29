document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'DSA Project', description: 'Simple program about "Network Traffic Monitoring and Simulation of Tree Topology Network" using C++ to learn about Data Structure and Algorithm', url: 'https://github.com/arezyhs/cplusplus-network-traffic-monitoring-and-tree-topology-network' },
        { title: 'C++ Fundamental', description: 'This project is a simple text-based RPG game written in C++. Players navigate through a fantasy world, encountering enemies and making choices to progress in the game.', url: 'https://github.com/arezyhs/cplusplus-final-project-rpg-game' },
        { title: 'Project 3', description: 'Description of project 3', url: 'https://github.com/arezyhs/project3' },
        { title: 'Project 3', description: 'Description of project 3', url: 'https://github.com/arezyhs/project3' },
        { title: 'Project 3', description: 'Description of project 3', url: 'https://github.com/arezyhs/project3' },
        { title: 'Project 3', description: 'Description of project 3', url: 'https://github.com/arezyhs/project3' },

        // proyek baru tambah ke sini
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
