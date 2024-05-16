// Отримуємо чекбокси 
const items = document.querySelectorAll('.pro');
const priceCheckboxes = document.querySelectorAll('.price-filter input[type="checkbox"]');
const typeCheckboxes = document.querySelectorAll('.product-type-filter input[type="checkbox"]');

// Змінні для зберігання стану фільтрації
let selectedPrice = [];
let selectedTypes = [];

// Функція для фільтрації за ціною
function filterByPrice(priceValue, isChecked) {
    if (isChecked) {
        selectedPrice.push(priceValue);
    } else {
        const index = selectedPrice.indexOf(priceValue);
        if (index !== -1) {
            selectedPrice.splice(index, 1);
        }
    }
    filterItems();
}

// Функція для фільтрації за типом продукції
function filterByType(typeValue, isChecked) {
    if (isChecked) {
        selectedTypes.push(typeValue);
    } else {
        const index = selectedTypes.indexOf(typeValue);
        if (index !== -1) {
            selectedTypes.splice(index, 1);
        }
    }
    filterItems();
}

// Функція для фільтрації елементів
function filterItems() {
    items.forEach(item => {
        const priceClasses = selectedPrice.length === 0 || selectedPrice.some(price => item.classList.contains(`price-${price}`));
        const typeClasses = selectedTypes.length === 0 || selectedTypes.some(type => item.classList.contains(`type-${type}`));
        if (priceClasses && typeClasses) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Налаштовуємо обробники подій для чекбоксів з фільтрами
priceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const priceValue = checkbox.value;
        const isChecked = checkbox.checked;
        filterByPrice(priceValue, isChecked);
    });
});

typeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const typeValue = checkbox.value;
        const isChecked = checkbox.checked;
        filterByType(typeValue, isChecked);
    });
});
