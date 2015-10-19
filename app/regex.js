exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter : function(str) {
    return (/\[A-Za-z]{2,}/).test(str);
  },

  endsWithVowel : function(str) {
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers : function(str) {
    var match = (/\d{3}/).exec(str);
    if (match)
      return match[0];
    else
      return false;
  },

  matchesPattern : function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },
  isUSD : function(str) {
    return (/^\$\d+(\.\d{2})|(,\d+)/).test(str);
  }
};
