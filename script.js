const traits = [
    { name: "Мизофобия", flags: ["Психическое расстройство", "Потенциально опасен для себя"] },
    { name: "Окр в любом из возможных проявлений", flags: ["Психическое расстройство"] },
    { name: "Алкоголик", flags: ["Зависимость"] },
    { name: "Курильщик", flags: ["Зависимость"] },
    { name: "Селфхарм", flags: ["Психическое расстройство", "Потенциально опасен для себя"] },
    { name: "РПП", flags: ["Психическое расстройство", "Потенциально опасен для себя"] },
    { name: "Ленивый, апатичный", flags: [] },
    { name: "Трусливый, боязливый", flags: [] },
    { name: "Суеверный", flags: [] },
    { name: "Мнительный, параноидальный, тревожный", flags: ["Психическое расстройство"] },
    { name: "Злопамятный, мстительный", flags: [] },
    { name: "Жадный, собственник, ревнивый", flags: [] },
    { name: "Постоянно перебивает, не может дослушать до конца, делает выводы быстрее, чем дослушает", flags: [] },
    { name: "Неряха, грязнула, бесконечный срач везде", flags: [] },
    { name: "Постоянно врет, намеренно или нет", flags: [] },
    { name: "Никому не доверяет", flags: [] },
    { name: "Часто жалуется", flags: [] },
    { name: "Злобный опоздун", flags: [] },
    { name: "Обещает и не выполняет", flags: [] },
    { name: "Обожает споры, иногда спорит ради самого спора, а не ради того, чтобы что-то доказать", flags: [] },
    { name: "Любит комплименты, выуживает их, очень хвастливый", flags: [] },
    { name: "Обожает слушать сплетни и обсуждать других", flags: [] },
    { name: "Лицемер, с каждым у него своя личность", flags: [] },
    { name: "Подхалим, никогда не говорит своего настоящего мнения", flags: [] },
    { name: "Не умеет говорить 'спасибо', 'пожалуйста' и 'извини'", flags: [] },
    { name: "Раздражающий тик (стучит ручкой по столу, рвет бумажки, когда нервничает, грызёт карандаши)", flags: [] },
    { name: "Циничный", flags: [] },
    { name: "Жестокий", flags: ["Потенциально опасен для других"] },
    { name: "Надменный", flags: [] },
    { name: "Глупый", flags: [] },
    { name: "Самоуверенный", flags: [] },
    { name: "Самовлюбленный", flags: [] },
    { name: "Эгоистичный", flags: [] },
    { name: "Истеричный", flags: ["Потенциально опасен для других"] },
    { name: "Гедонист/адреналиновый наркоман", flags: ["Вредная привычка"] },
    { name: "Жажда власти", flags: ["Потенциально опасен для других"] },
    { name: "Честолюбие", flags: [] },
    { name: "Импульсивность", flags: ["Потенциально опасен для других", "Потенциально опасен для себя"] },
    { name: "Непредусмотрительность", flags: [] },
    { name: "Клептомания", flags: ["Психическое расстройство", "Потенциально опасен для других"] },
    { name: "Выражение эмоций посредством драк/разрушений", flags: ["Потенциально опасен для других"] },
    { name: "Обесценивание окружающих", flags: [] },
    { name: "Отсутствие эмпатии", flags: [] },
    { name: "Прокрастинация", flags: [] },
    { name: "Лудомания", flags: ["Зависимость"] },
    { name: "Трусость", flags: [] },
    { name: "Ковыряние в носу/ушах", flags: [] },
    { name: "Харкание на пол", flags: [] },
    { name: "Перебор с матом", flags: [] },
    { name: "Нежелание меняться", flags: [] },
    { name: "Перебивание при разговоре", flags: [] },
    { name: "Похотливость", flags: [] },
    { name: "Порнозависимость", flags: ["Зависимость"] },
    { name: "Пренебрежительность к определённым группам людей", flags: [] },
    { name: "Бесконечное осуждение", flags: [] },
    { name: "Стереотипизация", flags: [] },
    { name: "Патологическая экономия", flags: [] },
    { name: "Уподобление большинству", flags: [] },
    { name: "Чинопочитание", flags: [] },
    { name: "Транжирство", flags: [] },
    { name: "Зависть", flags: [] },
    { name: "Необходимость доказать свою исключительность в любой ситуации", flags: [] },
    { name: "Непреодолимая тяга оставлять последнее слово за собой в любом разговоре", flags: [] },
    { name: "Замалчивание обид", flags: [] },
    { name: "Абсолютная убежденность что все всегда обманывают именно его", flags: [] },
    { name: "Необъяснимая одержимость коллекционированием чего-то незначительного в ущерб всем остальным аспектам жизни", flags: [] },
    { name: "Неспособность просить прощение", flags: [] },
    { name: "Постоянно говорит рифмами и стихами, но у него плохо получается, чем он всех раздражает", flags: [] },
    { name: "Тяжело принимает решения", flags: [] },
    { name: "Лезет в чужие дела", flags: [] },
    { name: "Составляет стишки о себе", flags: [] },
    { name: "Составляет странные песни для пьянок", flags: [] },
    { name: "Любит шутки, начинающиеся с 'угадайте кто?'", flags: [] },
    { name: "Не любит отрывать зад от постели", flags: [] },
    { name: "Не любит покидать свою лабораторию", flags: [] },
    { name: "Клал на социальный статус", flags: [] },
    { name: "Легко вовлекается в работу", flags: [] },
    { name: "Влюбчив", flags: [] },
    { name: "Потерял веру в себя", flags: ["Психическое расстройство"] },
    { name: "Не уважает коллег", flags: [] },
    { name: "Знает, что невезуч", flags: [] },
    { name: "Не участвует в социальной жизни", flags: [] },
    { name: "Постоянно бездельничает", flags: [] },
    { name: "Горжится своим умением читать", flags: [] },
    { name: "Трезвенник", flags: [] },
    { name: "Говорит с животными", flags: [] },
    { name: "Не признает, что у него плохой слух", flags: [] },
    { name: "Пытается вести себя как джентльмен", flags: [] }
];

document.getElementById("generateBtn").addEventListener("click", () => {
    const numTraits = document.getElementById("numTraits").value;
    const selectedTraits = getRandomTraits(numTraits);

    displayTraits(selectedTraits);
});

function getRandomTraits(count) {
    let selected = [];
    let availableTraits = [...traits];

    while (selected.length < count) {
        const randomIndex = Math.floor(Math.random() * availableTraits.length);
        const randomTrait = availableTraits.splice(randomIndex, 1)[0];
        selected.push(randomTrait);
    }

    return selected;
}

function displayTraits(selectedTraits) {
    const container = document.getElementById("selectedTraits");
    container.innerHTML = '';

    const redFlaggedCount = selectedTraits.filter(trait =>
        trait.flags.some(flag =>
            flag === "Психическое расстройство" ||
            flag === "Потенциально опасен для себя" ||
            flag === "Зависимость" ||
            flag === "Потенциально опасен для других"
        )
    ).length;

    selectedTraits.forEach((trait, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = trait.name;

        const flagsContainer = document.createElement("div");
        flagsContainer.classList.add("flags");

        trait.flags.forEach(flag => {
            const flagElement = document.createElement("div");
            flagElement.classList.add("flag");
            flagElement.textContent = flag;
            flagsContainer.appendChild(flagElement);
        });

        card.appendChild(title);
        card.appendChild(flagsContainer);

        // Добавляем задержку через класс
        card.classList.add("delay");
        card.style.animationDelay = `${0.2 * index}s`; // Задержка для каждой карточки

        container.appendChild(card);
    });

    setTimeout(() => {
        const warningElement = document.getElementById("warningModal");
        if (redFlaggedCount > 1) {
            warningElement.style.display = "flex";
        } else {
            warningElement.style.display = "none";
        }
    }, selectedTraits.length * 200 + 300);
}

// Закрытие модального окна
document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("warningModal").style.display = "none";
});
