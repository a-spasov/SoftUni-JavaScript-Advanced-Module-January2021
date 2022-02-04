function solve() {
    let text = document.querySelector('#input').value;
    text = text.split('.');
    let counter = 0;
    let result = [];
    let finalResult = [];
    for (let sentence of text) {
      if (sentence.length >= 1) {
        counter++;
        if (counter % 3 == 0) {
          result.push(sentence);
          finalResult.push(`<p>${result.join('. ')}.</p>`);
          result = [];
        } else {
          result.push(sentence);
        }
      }
    }
    if (counter % 3 != 0) {
      finalResult.push(`<p>${result.join('. ')}.</p>`);
    }
    document.querySelector('#output').innerHTML = finalResult.join('\n');
}