window.Pinkie = {
  eventList : [],
  watch : function(type, callback){
    var key = type+callback;
    if(key in this.eventList
        && this.eventList[key] === 1){
      return;
    }
    document.addEventListener(type, callback, true);
    this.eventList[key] = 1;
  },

  fire : function(type){
    document.dispatchEvent(new CustomEvent(
        type, false, false));
  },

  unwatch : function(type, callback){
    document.removeEventListener(type, callback, true);
    this.eventList[type+callback] = 0;
  },
};
