/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 *
 * Your runtime beats 100.00% of javascriptsubmissions.
 */

var wordBreak = function (str, wordDict, cache) {
  if (!str) {
    return [''];
  }

  if (str.length === 1 && wordDict.has(str)) {
    return [str];
  }

  if (!wordDict || wordDict.length === 0) {
    return [''];
  }

  cache = cache || {};
  if (cache[str] !== undefined) {
    return cache[str];
  }

  var solutions = [];

  for (var i = 1; i <= str.length; i++) {
    if (wordDict.indexOf(str.slice(0, i)) !== -1) {
      // Recursion (Sub problem - Dynamic Programming)
      wordBreak(str.slice(i), wordDict, cache).forEach(function (w) {
        solutions.push(str.slice(0, i) + (w ? (' ' + w) : ''));
      });
    }
  }

  cache[str] = solutions;

  return solutions;
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
// ["cat sand dog", "cats and dog"]