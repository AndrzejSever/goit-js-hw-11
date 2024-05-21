import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const createMarkupItem = images => {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
    <div class="small-content">
        <small class="text-body-likes">Likes: ${likes}</small>
        <small class="text-body-views">Views: ${views}</small>
        <small class="text-body-comments">Comments: ${comments}</small>
        <small class="text-body-downloads">Dowloads: ${downloads}</small>
    </div>
 
    </li>s
`;
      }
    )
    .join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});