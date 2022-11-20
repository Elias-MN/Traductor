const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const textareaInput = document.getElementById("textareaInput");
const textareaResult = document.getElementById("textareaResult");

const encodedParams = new URLSearchParams();
encodedParams.append("target", "es");
encodedParams.append("source", "en");

let idRequest = 0;

const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'ffce80d13amsh182e24844bb6d93p1022fbjsn5b91cb065c9c',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    body: encodedParams
};

async function traducir() {
    let textInput = textareaInput.value;
    encodedParams.append("q", textInput);
    await fetch(url, options)
        .then(response => response.json())
        .then(response => showResult(response))
        .catch(err => console.error(err));
}

function showResult(traslateText) {
    textareaResult.value = traslateText.data.translations[idRequest].translatedText;
    idRequest++;
}
