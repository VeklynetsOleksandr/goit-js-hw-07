import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = greateGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function greateGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
  onModalOpen(evt);
}

function onModalOpen(evt) {
  const instance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
  addEventListener("keydown", onEscPress);

  function onEscPress(evt) {
    const ESC_KEY_CODE = "Escape";
    const isEscape = evt.code === ESC_KEY_CODE;

    if (isEscape) {
      instance.close();
    }
  }
}
