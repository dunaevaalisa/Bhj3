const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');

(function loadModalOnStart (modalMain) {
    modalMain.addEventListener('load', showModal(modalMain));
})(modalMain);

function showModal(modal) {
    modal.classList.add('modal_active');
};

function changeModal(modal) {
    modal.classList.remove('modal_active');
};


function closeModal (modalClose, modalMain, modalSuccess) {
    
    for (let i = 0; i < modalClose.length; i++) {

        modalClose[i].addEventListener('click', function() {

            if(modalMain.classList.contains('modal_active')) {
                changeModal(modalMain);
            } else {
                changeModal(modalSuccess);
            }
        });
    };
};
closeModal(modalClose, modalMain, modalSuccess);

function showSuccess (modalSuccess) {
    const successBtn = document.getElementsByClassName('show-success');

    successBtn.item(0).addEventListener('click', function() {
        showModal(modalSuccess);
    });
};
showSuccess(modalSuccess);
