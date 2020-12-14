window.onload = function () {
    let items = document.querySelectorAll('.item-counter');

    items.forEach(el => {
        el.innerText = '0';
        let counter = () => {
            const num = +el.getAttribute('data-count');
            const target = +el.innerText;

            const inc = num / 200;
            if (target < num) {
                el.innerText = target + inc;
                setTimeout(counter, 1)
            } else {
                el.innerText = target;
            }
        };
        counter();
    });
};
