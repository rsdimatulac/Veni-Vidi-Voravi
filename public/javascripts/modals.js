document.addEventListener("DOMContentLoaded", () => {

    const modalEditButton = document.getElementById("modal__button-edit")
    const modalEdit = document.querySelector(".modal-edit")
    const closeBtnEdit = document.querySelector(".close-btn-edit")
    const modalDeleteButton = document.getElementById("modal__button-delete")
    const modalDelete = document.querySelector(".modal-delete")
    const closeBtnDelete = document.querySelector(".close-btn-delete")

    // if the button exists, do all of these
    if (modalEditButton) {
        modalEditButton.onclick = function () {
            modalEdit.style.display = "block"
        };

        closeBtnEdit.onclick = function () {
            modalEdit.style.display = "none"
        };

        window.onclick = function (e) {
            if (e.target === modalEdit) {
                modalEdit.style.display = "none"
            }
        };
    
        modalDeleteButton.onclick = function () {
            modalDelete.style.display = "block"
        };

        closeBtnDelete.onclick = function () {
            modalDelete.style.display = "none"
        };

        window.onclick = function (e) {
            if (e.target === modalDelete) {
                modalDelete.style.display = "none"
            }
        };
    }
});