function toggleDescription(arrow) {
    // Знаходимо батьківський блок для стрілочки
    const parentRow = arrow.parentNode;
    // Знаходимо блок опису, який пов'язаний з цим рядком
    const descriptionContent = parentRow.nextElementSibling;

    // Перевіряємо, чи відкритий опис
    if (descriptionContent.style.display === "none") {
        // Відкриваємо опис
        descriptionContent.style.display = "block";
        // Змінюємо стрілочку на відкритий стан
        arrow.innerHTML = "&#9650;"; // Можливо, символ стрілки змінити на "&#9650;" або інший, який вам подобається
    } else {
        // Закриваємо опис
        descriptionContent.style.display = "none";
        // Змінюємо стрілочку на закритий стан
        arrow.innerHTML = "&#9660;";
    }
}
