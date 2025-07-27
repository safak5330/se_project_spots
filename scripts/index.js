const editProfileBtn = document.querySelector(".profile__edit-container");
const editProfileForm = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileForm.querySelector(".modal__close-btn");
const newPostBtn = document.querySelector(".profile__new-post");
const newPostForm = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostForm.querySelector(".modal__close-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__role");
const editProfileName = editProfileForm.querySelector("#profile-name-input");
const editProfileDescription = editProfileForm.querySelector(
  "#profile-description-input"
);
const submitBtn = editProfileForm.querySelector(".modal__form");
const linkInput = newPostForm.querySelector("#image-link");
const captionInput = newPostForm.querySelector("#image-caption");
const saveBtn = newPostForm.querySelector(".modal__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileName.value;
  profileDescription.textContent = editProfileDescription.value;
  closeModal(editProfileForm);
}

function handleImageFormSubmit(evt) {
  evt.preventDefault();
  console.log(linkInput.value);
  console.log(captionInput.value);
  closeModal(newPostForm);
  evt.target.reset();
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  openModal(editProfileForm);
  editProfileName.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;
});

editProfileCloseBtn.addEventListener("click", () => {
  closeModal(editProfileForm);
});

submitBtn.addEventListener("submit", handleProfileFormSubmit);

newPostBtn.addEventListener("click", () => {
  openModal(newPostForm);
});

newPostCloseBtn.addEventListener("click", () => {
  closeModal(newPostForm);
});

saveBtn.addEventListener("submit", handleImageFormSubmit);
