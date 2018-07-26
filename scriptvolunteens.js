function openTab(event, tab_info){
    var i, tabcontent, tablinks;
    tabcontent = documents.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
      tabcontent[i].style.display = "none";
    }
    tablinks = documents.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
      tablinks[i].className = tablinks.[i].className.replace("active", " ")
    }
    document.getElementById(tab_info).style.display = "block";
    evt.currentTarget.className += " active";
  }
