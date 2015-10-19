exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var current = 0;
    function uptick() {
      console.log(start++);

      if (start <= end)
        setTimeout(uptick, 100);
    }
    uptick();
  }
};
