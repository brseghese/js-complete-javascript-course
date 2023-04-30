'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const clearClassModal = function (e) {
  modal.classList.remove(e);
};

const openModal = function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  const target = e.target.className.split(' ');

  if (target[1] === 'btn--1') {
    clearClassModal('skin--2');
    clearClassModal('skin--3');
    modal.classList.add('skin--1');
  }

  if (target[1] === 'btn--2') {
    clearClassModal('skin--1');
    clearClassModal('skin--3');
    modal.classList.add('skin--2');
  }

  if (target[1] === 'btn--3') {
    clearClassModal('skin--1');
    clearClassModal('skin--2');
    modal.classList.add('skin--3');
  }
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
