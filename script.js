const prev_buttom = document.getElementById('prev')
const next_button = document.getElementById('next')
const item = document.querySelectorAll('.item')
const dot = document.querySelectorAll('.dot')
const numbers = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0
const total = item.length
console.log(item.length)
let timer

function update(direction) {
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if (direction === 1) {
        if (active >= total - 1) {
            active = 0;
        } else {
            active++;
        }
    } else if (direction === 0) {
        if (active <= 0) {
            active = total - 1;
        } else {
            active--;
        }
    }

    item[active].classList.add('active')
    dot[active].classList.add('active')
    numbers.textContent = String("0" + (active + 1))

}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 3000)



