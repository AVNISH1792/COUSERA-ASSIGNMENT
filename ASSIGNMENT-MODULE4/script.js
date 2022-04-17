(function () {

    var names = ["AVNISH", "YASH", "BEN", "ITACHI", "RAM", "BENIMARU", "ALEX", "KIA", "LUFFY", "TENJIRO"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        bye(names[i]);
      }
      else {
        helloS(names[i]);
      }
    }
    
    })();