export const findLongestWord = (words) => {
  //  let words = ["farah", "oumezzine", "testerword"];
    
    const wordsWithLength = words.map(word => ({
        mot: word,
        longueur: word.length
    }));

    const longestWordObj = wordsWithLength.reduce((longest, current) => {
        return (current.longueur > longest.longueur) ? current : longest;
    });    

    return {
        mot: longestWordObj.mot,
        longueur: longestWordObj.longueur
    };
};

//console.log(findLongestWord());

export const countOccurrences = (arrays) => {
    const flatArray = arrays.flat();
    
    return flatArray.reduce((acc, current) => {
       
        acc[current] = (acc[current] || 0) + 1;
        return acc;
    }, {});
};

// const input = [["a", "b", "c"], ["c", "d","f"], ["d", "f","g"]];
// console.log(countOccurrences(input)); 

