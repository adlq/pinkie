(function(){
  window.Pinkie = {
    watch : function(type, callback){
      document.addEventListener(type, callback, true);
    },

    fire : function(type){
      document.dispatchEvent(new CustomEvent(
          type, false, false));
    },

    unwatch : function(type, callback){
      document.removeEventListener(type, callback, false);
    },
  };
})();
