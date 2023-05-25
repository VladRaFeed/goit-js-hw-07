import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryObj = document.querySelector(".gallery");

galleryObj.addEventListener("click", onGalleryContainerClick);

const imagesMarkup = createImageItemMarkup(galleryItems);

galleryObj.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageItemMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `;
    })
    .join("");
}

function onGalleryContainerClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const largeImgSource = e.target.dataset.source;

  const modalImg = `
        <img src = '${largeImgSource}', alt = 'LargeImage'>
    `;

  const instanceModal = basicLightbox.create(modalImg);

  instanceModal.show();
}
