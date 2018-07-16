export default function pair(keys)  {
    for(let index = keys.length;  index;) {
        let randomGenerator = Math.floor(Math.random() * index--);
        let temp = keys[index];
        keys[index] = keys[randomGenerator];
        keys[randomGenerator] = temp;
    }
    let initialKey = keys.slice(0);
    initialKey.push(initialKey.shift());
    var newPair = [];
    for(let i = 0; i < keys.length; i++) {
        newPair.push([keys[i], initialKey[i]]);
    }
    return newPair;
}
