exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(otherStr) {
      return str + ", " + otherStr;
    }
  },

  makeClosures : function(arr, fn) {
    var result = [];

    var getValue = function(value) {
      return function() {
        return fn(value);
      }
    }

    for (var i = 0; i < arr.length; i++) {
      result.push(getValue(arr[i]))
    }
    return result;
  },

  partial : function(fn, str1, str2) {
    return function(punc) {
      return fn(str1, str2, punc);
    }
  },

  useArguments : function() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      var otherArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, otherArgs);
    }
  },

  curryIt : function(fn) {

  }
};
