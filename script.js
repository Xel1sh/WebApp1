const tg = window.Telegram.WebApp;

// ��������� ����
tg.expand();

// ���������� ��� ������������, ���� ����
if (tg.initDataUnsafe?.user) {
    document.getElementById("user-name").textContent =
        tg.initDataUnsafe.user.first_name;
}

// ���������� ������
document.getElementById("send-btn").addEventListener("click", () => {
    const data = {
        action: "clicked_button",
        user: tg.initDataUnsafe?.user || null,
    };

    tg.sendData(JSON.stringify(data)); // �������� ������ � Telegram-����
    tg.close(); // �������� WebApp (�����������)
});
