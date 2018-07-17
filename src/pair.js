/**
 * Fisher-Yates shuffling algorithm.
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * 
 * The Fisher–Yates shuffle is an algorithm for generating a random permutation of a finite sequence—in plain terms, 
 * the algorithm shuffles the sequence. The algorithm effectively puts all the elements into a hat; it continually determines the next element by randomly drawing an element from the hat until no elements remain. 
 * The algorithm produces an unbiased permutation: every permutation is equally likely. 
 * The modern version of the algorithm is efficient: it takes time proportional to the number of items being shuffled and shuffles them in place.
 * 
 * Code Reference to implement the above algorithm: https://bost.ocks.org/mike/shuffle/
 * https://www.frankmitchell.org/2015/01/fisher-yates/
 * 
 * @param keys 
 */
export default function pair(keys) {
    for (let index = keys.length; index;) {
        let randomGenerator = Math.floor(Math.random() * index--);
        let temp = keys[index];
        keys[index] = keys[randomGenerator];
        keys[randomGenerator] = temp;
    }
    let initialKey = keys.slice(0);
    initialKey.push(initialKey.shift());
    var newPair = [];
    for (let i = 0; i < keys.length; i++) {
        newPair.push([keys[i], initialKey[i]]);
    }
    return newPair;
}
