exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return $.Deferred().resolve(value);
  },

  manipulateRemoteData : function(url) {
    
  }
};
