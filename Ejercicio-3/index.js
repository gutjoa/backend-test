function searchPalindrome(string) {
    const lengthString = string.length;
    let result = [];

    for (let index = 3; index <= lengthString; index++) {

        let palindromes = chunkString(string, index)
                  .filter(str => str.length > 2)
                  .filter(str => str === str.split('').reverse('').join(''));

        result = result.concat(palindromes)
    }

  return result
}

function chunkString(str, length) {
    const numChunks = Math.ceil(str.length / length);
    const chunks = new Array(numChunks);

    for (let index = 0, aux=0; index < numChunks; index++, aux += length) {
        chunks[index] = str.substr(aux, length);
    }

  return chunks
}

const arg = 'afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstood'

console.log(searchPalindrome(arg))