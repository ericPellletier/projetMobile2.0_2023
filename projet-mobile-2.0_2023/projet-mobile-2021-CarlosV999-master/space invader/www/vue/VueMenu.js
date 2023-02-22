class VueMenu{
    constructor(){
      this.html = document.getElementById("html-vue-menu").innerHTML;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        //this.pan();
      }


    pan(){
        
        var zingTouch = new ZingTouch.Region(document.getElementById("parent"));
        //console.log(document.getElementById("parent").innerHTML);
        var myElement = document.getElementById("body-menu");
        zingTouch.bind(myElement, "pan", function(e) {
          let angle = e.detail.data[0].directionFromOrigin;
          if ((angle >= 135 && angle <= 225)) 
          {
            (e.detail.events).forEach(_e => _e.originalEvent.preventDefault());
            window.location = "#classement";
            return;
          }
        });
    }


}

