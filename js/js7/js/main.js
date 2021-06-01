'use strict';

function showList(uler) {
    let array = [];
    let newArray = [];
    let finalArray = [];
    function traverse(theObject) {

        for (let key in theObject) {
            if (theObject[key] != null && typeof (theObject[key]) == 'object') {
                traverse(theObject[key]);

            } else {

                array.push(theObject[key]);
                newArray = array.map(word => `<li>${word}</li>`);
                finalArray = newArray.join('');
                document.body.children[2].innerHTML = finalArray;
            }
        }
    }
    traverse(uler);

    
}

showList(['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);

