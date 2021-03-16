import { dataProjects } from './data.js';
import { Project } from './components/Project.js';

const $navList = document.querySelector('.list'),
  $iconMenu = document.querySelector('.icon-menu'),
  $projectsContainer = document.getElementById('projects-content');

function toggleMenu() {
  $iconMenu.classList.toggle('active');
  $navList.classList.toggle('active');
}

function loadComponent(project, component) {
  const el = document.createElement('div');
  el.innerHTML = component(project);
  return el.firstElementChild;
}

function renderDOM() {
  render(dataProjects, $projectsContainer);
}

function render(listProjects, $container) {
  listProjects.forEach(project => {
    $container.appendChild(loadComponent(project, Project));
  });
}

$iconMenu.addEventListener('click', toggleMenu);
document.addEventListener('DOMContentLoaded', renderDOM);
