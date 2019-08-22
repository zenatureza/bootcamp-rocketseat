// setting up server
const express = require('express');
const server = express();
server.use(express.json());

const projects = [
  {
    id: "1",
    title: "projeto default",
    tasks: ["tarefa1", "tarefa2"]
  },
];
var numRequests = 0;


// global middleware
server.use((req, res, next) => {
  console.log(`> NEW REQUEST! method: ${req.method} - url: ${req.url}`);
  numRequests++;
  console.log(`# requests made: ${numRequests}`);

  return next();
});

// used by routes with route params
function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const projectDB = projects.find(item => item.id === id);
  if (!projectDB) {
    return res.status(400).json({ error: 'this project doest not exist!' });
  }

  req.projectDB = projectDB;
  next();
}


// insomnia['get-projects'] => e.g.: localhost:3000/projects
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// insomnia['create-project'] => e.g.: localhost:3000/projects with json body
server.post('/projects', (req, res) => {
  const project = req.body;

  if (projects.some(item => item.id === project.id)) {
    console.log(`project id ${project.id} already exists!`);
  }
  else {
    console.log(`creating new project with id ${project.id}`);
    projects.push(project);
  }

  return res.json(projects);
});

// insomnia['update-project'] => e.g.: localhost:3000/projects/1 with json body
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const project = req.body;

  const { projectDB } = req;
  projectDB.title = project.title;
  projectDB.tasks = project.tasks;

  return res.json(projects);
});

// insomnia['delete-project'] => e.g.: localhost:3000/projects/1
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { projectDB } = req;
  const projectDBindex = projects.indexOf(projectDB);
  projects.splice(projectDBindex, 1);

  return res.json(projects);
});

// insomnia['create-task-inside-project'] => e.g.: localhost:3000/projects with json body
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { title } = req.body;
  const { projectDB } = req;

  projectDB.tasks.push(title);

  return res.json(projectDB);
});

server.listen(3000);