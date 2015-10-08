var e = document.getElementById('planes-list');

for (var s in xPlanes) {
e.innerHTML += "<div><h2>" + s + "</h2>";
e.innerHTML += "<p>" + xPlanes[s] + "</p>";
e.innerHTML += "<img src='xPlanes/"+ s + ".jpg' style='width:304px;height:228px;'></div>"
}
