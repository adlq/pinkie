window.Pinkie = {
  // This array keeps track of the event handlers, 
  // guaranteeing that there are no duplicates
  list : [],

  // Bind a callback to an event 
  watch : function(type, callback){
    // Compute the list key corresponding to 
    // the event handler we want to add, this involves
    // implicitly converting the callback code to string
    var key = type+callback;

    // If the resulting key exists and contains '1', then
    // this means that the event handler already exists
    if(key in this.list
        && this.list[key] === 1){
      return;
    }

    // Otherwise, add it to the document object
    document.addEventListener(type, callback, true);
    // Update the event handler list
    this.list[key] = 1;
  },

  // Trigger an event 
  fire : function(type){
    document.dispatchEvent(new CustomEvent(
        type, false, false));
  },

  // Unbind a callback from an event
  unwatch : function(type, callback){
    document.removeEventListener(type, callback, true);
    // Update the event handler list
    this.list[type+callback] = 0;
  },
};
