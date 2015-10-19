exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item)
        return i;
    }
    return -1;
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function(value) {
      total += value;
    });
    return total;
  },

  remove : function(arr, item) {
    var result = [];
    arr.forEach(function(element) {
      if (element !== item)
        result.push(element);
    });
    return result;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var total = 0;
    arr.forEach(function(value) {
      if (value === item)
        total++;
    });
    return total;
  },

  duplicates : function(arr) {
    var dupes = [];
    var items = {};
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (items[arr[i]] = items[arr[i]])
        items[arr[i]] += 1;
      else
        items[arr[i]] = 1;
    }

    for (var prop in items) {
      if (items.hasOwnProperty(prop) && items[prop] > 1)
        dupes.push(prop);
    }

    for (var i = 0; i < dupes.length; i++) {
      result.push(parseInt(dupes[i]));
    }
    return result;

  },

  square : function(arr) {
    var squares = arr.map(function(num) {
      return num * num;
    });
    return squares;
  },

  findAllOccurrences : function(arr, target) {
    var found = [];
    arr.forEach(function(item, index) {
      if (item === target)
        found.push(index);
    });
    return found;
  }
};
