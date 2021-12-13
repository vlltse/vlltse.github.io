//Змінна для статусу кнопки
let pagehiden = true;
// Показати або приховати деталі роботи
function hideshow(page) {
    // Приховати або показати потрібний div:
    if (pagehiden) {
        // Показати div, переданий у аргументі функції
        document.querySelector(`#${page}`).style.display = 'none';
   }
   else {
        // Приховати div, переданий у аргументі функції
        document.querySelector(`#${page}`).style.display = 'flex';
        //document.querySelector(`#workwey-head`).style.display = 'flex';    
   }
   document.querySelector(`#${page}`).style.animationPlayState = 'running';
}

// Зачекати завантаження сторінки:
document.addEventListener('DOMContentLoaded', function() {
    pagehiden = true;
    // Обрати всі кнопки
    document.querySelectorAll('button').forEach(button => {
        // Коли кнопку натиснуто, перейти на сторінку
        button.onclick = function() {
            if (this.innerHTML === 'Деталі') {
                this.innerHTML='Приховати';
                pagehiden=false;
            }
            else {
                this.innerHTML='Деталі';
                pagehiden=true;
            }
            hideshow(this.dataset.page);  
        }
    })
});