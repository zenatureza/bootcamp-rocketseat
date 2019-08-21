// setting up server
const express = require('express');
const server = express();
server.use(express.json());

const projects = [
  {
    id: "1",
    title: 'projeto default',
    tasks: ['tarefa 1', 'tarefa 2']
  },
];

// TODO: only routes with route params
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  // if (!i)
}

// insomnia['get-projects'] => e.g.: localhost:3000/projects
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// insomnia['create-project'] => e.g.: localhost:3000/projects with json body
server.post('/projects', (req, res) => {
  const project = req.body;
  console.log(project.title);
  return res.json('apenas testando');
});

server.listen(3000);