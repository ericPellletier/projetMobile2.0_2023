class ClassementDAO{
    
    constructor(){
      this.listeClassement = [];
    }
    
    lister(actionReceptionClassement)
    {
            var xhttp = new XMLHttpRequest();
  
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                //document.getElementById("demo").innerHTML = xhttp.responseText;
                console.log(xhttp.responseText);
  
                actionReceptionClassement(JSON.parse(xhttp.responseText));
              }
            };
            xhttp.open("GET", "https://blog.piedplat.com/listerJoueurJSON.php", true);
            xhttp.send();
    }
}