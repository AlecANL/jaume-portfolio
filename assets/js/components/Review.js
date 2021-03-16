export function Review({ image, quote, author }) {
  return `
            <div class="review-content">
              <blockquote class="project__review">
                <img src="${image}" alt="user icon" />
                <p class="quote">${quote}</p>
                <p>${author}</p>
              </blockquote>
              <i class="border"></i>
            </div>
    `;
}
