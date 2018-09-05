$.ajax({
    url:` https://newsapi.org/v2/everything?sources=cnn&apiKey=d15891a94c814bd9b96d5340939e32cf`,

    success: function(data){
       for(i=0;i<6;i++){
           console.log("news")
           document.querySelector(".news").innerHTML += `
           <div class="card" style="background-image: url(${data.articles[i].urlToImage})">
           <div class="card-body">
           <div class="name">${data.articles[i].source.name}</div>
           <div class="title n1">${data.articles[i].title}</div>
           <a href="${data.articles[i].url}"> <button   class="btn btn-danger">Read More</button></a>
       </div>       
       </div>`
       }
    }

})

$.ajax({
    url:`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=d15891a94c814bd9b96d5340939e32cf`,

    success: function(data){
       for(i=0;i<6;i++){
           console.log("news")
           document.querySelector(".news").innerHTML += `
           <div class="card" style="background-image: url(${data.articles[i].urlToImage})">
           <div class="card-body">
           <div class="name">${data.articles[i].source.name}</div>
           <div class="title n1">${data.articles[i].title}</div>
           <a href="${data.articles[i].url}"> <button   class="btn btn-danger">Read More</button></a>
       </div>       
       </div>`
       }
    }

})

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
