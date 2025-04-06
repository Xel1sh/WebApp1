const tg = window.Telegram.WebApp;

// Расширяем окно
tg.expand();

// Отображаем имя пользователя, если есть
if (tg.initDataUnsafe?.user) {
    document.getElementById("user-name").textContent =
        tg.initDataUnsafe.user.first_name;
}

// Обработчик кнопки
document.getElementById("send-btn").addEventListener("click", () => {
    const data = {
        action: "clicked_button",
        user: tg.initDataUnsafe?.user || null,
    };

    tg.sendData(JSON.stringify(data)); // отправка данных в Telegram-бота
    tg.close(); // закрытие WebApp (опционально)
});
