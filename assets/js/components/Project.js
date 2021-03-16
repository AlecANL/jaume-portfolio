import { Review } from './Review.js';

export function Project({ image, name, description, review }) {
  return `
        <article class="project">
            <div class="project__image">
              <img
                src="${image}"
                alt="${name} project"
              />
            </div>
            <div class="project__description">
              <span>${name}</span>
              <p>${description}</p>
              <div class="buttons">
                <button class="btn btn--initial">ver codigo</button>
                <button class="btn btn--dark-blue">ver proyecto</button>
              </div>
            </div>
            ${Review(review)}
          </article>
    `;
}
