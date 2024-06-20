
function dictionaryapi(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Response not found');
            }
            return response.json();
        })
        .then(data => {
            let results = document.getElementById('result');
            results.innerHTML = ''; 
            let i = 0;
            while (i < data.length) {
                let m = data[i].meanings;
                let j = 0;
                while (j < m.length) {
                    let partOfSpeech = m[j].partOfSpeech;
                    let definitions = m[j].definitions;
                    results.innerHTML += `
                    <p class="parts-of-speech"><strong>Part of Speech:</strong> ${partOfSpeech}</p>`;
                    let k = 0;
                    while (k < definitions.length) {
                        let definition = definitions[k].definition;
                        results.innerHTML += `
                        <p class="defi"><strong>Definition:</strong> ${definition}</p>`;
                        k++;
                    }
                    j++;
                }
                i++;
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

let search = function () {
    let word = document.getElementById('search-input').value.trim();
    if (word) {
        dictionaryapi(word);
    } else {
        alert("Please enter a word to search.");
    }
}




























