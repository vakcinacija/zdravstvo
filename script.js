$(function () {
    console.log("ready!");
    debugger
    let url = window.location.href;
    let extraUrl = url.split('?')[1];

    const fNameEl = $('#firstNameElement');
    const lNameEl = $('#lastNameElement')

    if (extraUrl) {
        let firstName = extraUrl.split('.')[0].toUpperCase();
        let lastName = extraUrl.split('.')[1].toUpperCase();

        if (firstName && lastName) {
            fNameEl.html(firstName + " / " + latcyr(firstName));
            lNameEl.html(lastName + " / " + latcyr(lastName));
        }
    }
});

function latcyr(text) {
    if (text) {
        text = text.replace(/h/g, "х");
        text = text.replace(/a/g, "а");
        text = text.replace(/b/g, "б");
        text = text.replace(/v/g, "в");
        text = text.replace(/g/g, "г");
        text = text.replace(/d/g, "д");
        text = text.replace(/ǵ/g, "ѓ");
        text = text.replace(/ѓ/g, "ѓ");
        text = text.replace(/г'/g, "ѓ");
        text = text.replace(/e/g, "е");
        text = text.replace(/ž/g, "ж");
        text = text.replace(/z/g, "з");
        text = text.replace(/зх/g, "ж");
        text = text.replace(/з'/g, "ж");
        text = text.replace(/дз/g, "ѕ");
        text = text.replace(/i/g, "и");
        text = text.replace(/j/g, "ј");
        text = text.replace(/k/g, "к");
        text = text.replace(/l/g, "л");
        text = text.replace(/лј/g, "љ");
        text = text.replace(/m/g, "м");
        text = text.replace(/n/g, "н");
        text = text.replace(/нј/g, "њ");
        text = text.replace(/o/g, "о");
        text = text.replace(/p/g, "п");
        text = text.replace(/r/g, "р");
        text = text.replace(/s/g, "с");
        text = text.replace(/t/g, "т");
        text = text.replace(/ḱ/g, "ќ");
        text = text.replace(/ќ/g, "ќ");
        text = text.replace(/к'/g, "ќ");
        text = text.replace(/u/g, "у");
        text = text.replace(/f/g, "ф");
        text = text.replace(/c/g, "ц");
        text = text.replace(/č/g, "ч");
        text = text.replace(/ц'/g, "ч");
        text = text.replace(/цх/g, "ч");
        text = text.replace(/ѕ'/g, "џ");
        text = text.replace(/ѕх/g, "џ");
        text = text.replace(/š/g, "ш");
        text = text.replace(/с'/g, "ш");
        text = text.replace(/сх/g, "ш");
        text = text.replace(/дж/g, "џ");
        text = text.replace(/è/g, "ѐ");
        text = text.replace(/ì/g, "ѝ");
        text = text.replace(/е'/g, "ѐ");
        text = text.replace(/и'/g, "ѝ");

        text = text.replace(/H/g, "Х");
        text = text.replace(/A/g, "А");
        text = text.replace(/B/g, "Б");
        text = text.replace(/V/g, "В");
        text = text.replace(/G/g, "Г");
        text = text.replace(/D/g, "Д");
        text = text.replace(/Ǵ/g, "Ѓ");
        text = text.replace(/Ѓ/g, "Ѓ");
        text = text.replace(/Г'/g, "Ѓ");
        text = text.replace(/E/g, "Е");
        text = text.replace(/Ž/g, "Ж");
        text = text.replace(/Z/g, "З");
        text = text.replace(/ЗХ/g, "Ж");
        text = text.replace(/Зх/g, "Ж");
        text = text.replace(/З'/g, "Ж");
        text = text.replace(/ДЗ/g, "Ѕ");
        text = text.replace(/Дз/g, "Ѕ");
        text = text.replace(/I/g, "И");
        text = text.replace(/J/g, "Ј");
        text = text.replace(/K/g, "К");
        text = text.replace(/L/g, "Л");
        text = text.replace(/ЛЈ/g, "Љ");
        text = text.replace(/Лј/g, "Љ");
        text = text.replace(/M/g, "М");
        text = text.replace(/N/g, "Н");
        text = text.replace(/НЈ/g, "Њ");
        text = text.replace(/Нј/g, "Њ");
        text = text.replace(/O/g, "О");
        text = text.replace(/P/g, "П");
        text = text.replace(/R/g, "Р");
        text = text.replace(/S/g, "С");
        text = text.replace(/T/g, "Т");
        text = text.replace(/Ḱ/g, "Ќ");
        text = text.replace(/Ќ/g, "Ќ");
        text = text.replace(/К'/g, "Ќ");
        text = text.replace(/U/g, "У");
        text = text.replace(/F/g, "Ф");
        text = text.replace(/C/g, "Ц");
        text = text.replace(/Č/g, "Ч");
        text = text.replace(/Ц'/g, "Ч");
        text = text.replace(/ЦХ/g, "Ч");
        text = text.replace(/Цх/g, "Ч");
        text = text.replace(/Ѕ'/g, "Џ");
        text = text.replace(/ЅХ/g, "Џ");
        text = text.replace(/Ѕх/g, "Џ");
        text = text.replace(/Š/g, "Ш");
        text = text.replace(/С'/g, "Ш");
        text = text.replace(/СХ/g, "Ш");
        text = text.replace(/Сх/g, "Ш");
        text = text.replace(/Дж/g, "Џ");
        text = text.replace(/ДЖ/g, "Џ");
    }
    return text;
}
