/*  getting numbers from 0 to 1*/
function createRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

// tellMeAjoke var storing 3 arrays containing words or phrases that will make up the randomised jokes
const tellMeAJoke = {
    whoseThere: ['Honey bee', 'Woo', 'Leaf', 'Nana', 'Canoe', 'Boo'],
    jokePhrase: ['Honey bee a dear and get that bottle for me please!', 'Glad you are excisted, too', 'Leaf me alone!', 'Nana your business', 'Canoe come out now?', 'Dont cry it is just a joke!'],
    theLaugh: ['hahahaha', 'huehuehuehue', 'jajajajajaja', 'hehehehehehe', 'mwahahahuehueheehee', 'waahahahahawaa']
};

let aFunny = [];

let jokeID = createRandomNumber(6);

for (let knock in tellMeAJoke) {
    switch(knock) {
        case 'whoseThere':
            aFunny.push(`Knock knock, Whose there? "${tellMeAJoke[knock][jokeID]}".`);
            aFunny.push(`"${tellMeAJoke[knock][jokeID]} ", who?`);
            break;
        case 'jokePhrase':
            aFunny.push(`"${tellMeAJoke[knock][jokeID]}"`);
            break;
        case 'theLaugh':
            aFunny.push(`${tellMeAJoke[knock][jokeID]}`);
            break;
    }
};

function formatJoke(knock) {
    const addJoke = aFunny.join('\n')
    console.log(addJoke)
};

formatJoke(aFunny);