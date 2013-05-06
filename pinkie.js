window.Pinkie = {
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
      var e = new CustomEvent(type, {"detail": detail});
    }catch(x){
      // Handle the IE case
      var e = document.createEvent('e');
      e.initEvent(type, false, false);
      e.detail = detail;
    }
    // Actual triggering of the event
    document.dispatchEvent(e);
  },
};
