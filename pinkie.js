window.Pinkie = {
  // This array keeps track of the event handlers, 
  // guaranteeing that there are no duplicates
  list : [],

  /**
   * Bind a callback to an event
   * @param string type The event type
   * @param function callback The associated callback function
   */
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

  /**
   * Trigger an event
   * @param string type The event type
   * @param object detail Additional information
   * about the event as an object
   */
  fire : function(type, detail){
    // The second argument is optional
    detail = detail || {};
    try{
      // This should work on other browsers than IE
      var e = new CustomEvent(type, {
        "bubles": false,
        "cancelable": false,
        "detail": detail});
    }catch(x){
      // Handle the IE case
      var e = document.createEvent('e');
      e.initEvent(type, false, false);
      e.detail = detail;
    }
    // Actual triggering of the event
    document.dispatchEvent(e);
  },

  /**
   * Unbind a callback from an event
   * @param string type The event type
   * @param function callback The associated callback function
   */
  unwatch : function(type, callback){
    document.removeEventListener(type, callback, true);
    // Update the event handler list
    this.list[type+callback] = 0;
  },
};
