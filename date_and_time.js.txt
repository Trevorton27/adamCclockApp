function date_and_time() {
    var date = new Date();
    var second = date.getSeconds();
    var minuet = date.getMinutes();
    var hour = date.getHours();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day_of_week = days[date.getDay()];
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
  
  
    day = (day < 10) ? "0" + day : day
  
    var date = day_of_week + ", " + month + " " + day + ", " + year;
    document.getElementById("date").innerText = date;
  
  
    var suffix = "AM";
  
    if (hour == 0) {hour = 12;}
    if (hour > 12) {hour = hour - 12; suffix = "PM";}
  
    hour = (hour < 10) ? "0" + hour : hour;
    minuet = (minuet < 10) ? "0" + minuet : minuet;
    second = (second < 10) ? "0" + second : second;
    
    var time = hour + ":" + minuet + ":" + second + " " + suffix;
    document.getElementById("time").innerText = time;
    
  }
  setInterval(date_and_time, 1000);
  date_and_time();