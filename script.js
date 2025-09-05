document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-now');
    buyButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            alert('This is a demo. No real purchase will be made!');
        });
    });

    const sellForm = document.querySelector('#sell form');
    sellForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thanks for listing your item! (This is a demo)');
        sellForm.reset();
    });
});
