const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modalContainer = document.querySelector('.modal');

openModal.addEventListener('click', function () {
    modalContainer.classList.add('open')
})

closeModal.addEventListener('click', function () {
    modalContainer.classList.remove('open')
})