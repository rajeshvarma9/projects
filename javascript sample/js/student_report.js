var message = '';
var student;

function print() {
  document.getElementById("load").style.display = 'none';
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
}

document.getElementById("load").addEventListener("click", print);








