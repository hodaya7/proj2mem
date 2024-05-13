//נגריל מספרי התמונות
var a = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
x = 3, y = 4;
function randomImage() {
 
    var max = 11;
    var temp;
    for (i = 0; i < a.length; i++) {
        var r = Math.floor(Math.random() * max);
       // arrImage[a[r]] =a[i];
        //ככה כדי שלא ישים אותה תמונה  שהיתה כבר-במיקום הזה,
        //נעביר את התמונה שיצאה עכשיו לסוף המערך ונקטין גודלו
        temp = a[r];
        a[r] = a[max];
        a[max] = temp;
        max--;

    }
    
    var tbl = document.createElement("table");
    var mone = 0;
    for (var i = 0; i < x; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < y; j++) {
            var td = document.createElement("td");
            //var div = document.createElement("div");
            //div.style.backgroundImage ="url('1.JPG')";
            var img = document.createElement("img");
            img.setAttribute("src", "image/CS_pinksnow_paper6.JPG");
            img.setAttribute("width", "100px");
            img.setAttribute("height", "100px");
            img.setAttribute("id",mone++);
            img.addEventListener("click", check);
            td.appendChild(img);
            tr.appendChild(td);
        }
        tbl.appendChild(tr);

    }
   
    document.getElementById("board").appendChild(tbl);
}
var id,prev_id
var flag = 0

function check() {
    id = event.target.id;
    flag++;
    event.target.setAttribute("src", "image/" + a[id] + ".JPG");
    if (flag == 1)
        prev_id = id
    if (flag == 2) {
        flag = 0;
        if (a[id] != a[prev_id])
           setTimeout(cover,1000);
    }
    
}

function cover() {
    document.getElementById("" + id).src = "image/CS_pinksnow_paper6.JPG";
    document.getElementById("" + prev_id).src = "image/CS_pinksnow_paper6.JPG";
}