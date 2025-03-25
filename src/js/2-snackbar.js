import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    createPromise(delay, state)
        .then(ms => {
            iziToast.success({
                title: '✅ Fulfilled',
                message: `Promise in ${ms}ms`,
                position: 'topRight',
            });
        })
        .catch(ms => {
            iziToast.error({
                title: '❌ Rejected',
                message: `Promise in ${ms}ms`,
                position: 'topRight',
            });
        });

    form.reset(); // Очищення форми після сабміту
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}