const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

// Функція для перевірки стану модального вікна в localStorage
const isModalOpen = () => localStorage.getItem('isModalOpen') === 'true';

// Функція для зміни стану модального вікна в localStorage
const setModalState = (isOpen) => localStorage.setItem('isModalOpen', isOpen);

const toggleModal = () => {
    modal.classList.toggle('is-hidden');
    setModalState(!modal.classList.contains('is-hidden'));
};

// Перевірка стану при завантаженні сторінки
if (isModalOpen()) {
    modal.classList.remove('is-hidden');
}

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);



// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');
// const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => modal.classList.toggle('is-hidden');

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);