function countTheWords(input) {
    let sentence = input[0];
    let spaces = 0;

    for (let i = 0; i < sentence.length; i++) {
        switch (sentence[i]) {
            case " ": spaces++; break;
        }
    }

    spaces++;
    if (spaces > 10) {
        console.log(`The message is too long to be send! Has ${spaces} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }

}
countTheWords(["This message has ten words and you can send it!"]);