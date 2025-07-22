const editProfileBtn = document.querySelector(".profile__edit-container");
const editProfileForm = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileForm.querySelector(".modal__close-btn");
const newPostBtn = document.querySelector(".profile__new-post");
const newPostForm = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostForm.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileForm.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileForm.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostForm.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostForm.classList.remove("modal_is-opened");
});
