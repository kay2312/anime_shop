const list = document.querySelector('.links'),
    items = document.querySelectorAll('.pro'),
    listItems = document.querySelectorAll('.underline');

// Функція для налаштування видимості елементів за класом
function setVisibilityByClass(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function setInitialVisibility() {
    setVisibilityByClass('one-page');
}


setInitialVisibility();

// Функція фільтрації
function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id;
        const target = event.target;
        
        if(target.classList.contains('underline')) {
            listItems.forEach(listItems => listItems.classList.remove('section'));
            target.classList.add('section');
        }

        switch(targetId) {
            case 'one-page':
                setVisibilityByClass('one-page');
                break;
            case 'two-page':
                setVisibilityByClass('two-page');
                break;
            case 'three-page':
                setVisibilityByClass('three-page');
                break;
            default:
                break;
        }
    });
}

filter();
