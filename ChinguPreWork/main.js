//clock

let clock = document.getElementsByClassName('clock')[0];
let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let month = now.getMonth()+1;
let time = 0;

clock.innerHTML = `${hour} : ${min}`;

if (3 <= hour && hour <= 12){
  let clock2 = document.getElementsByClassName('clock-message')[0];
  clock2.innerHTML = "Good Morning,";
  time = 1;
} else if (12 < hour && hour <= 17) {
  let clock2 = document.getElementsByClassName('clock-message')[0];
  clock2.innerHTML = "Good Afternoon,";
  time = 2;
} else {
  let clock2 = document.getElementsByClassName('clock-message')[0];
  clock2.innerHTML = "Good Night,";
  time = 3;
};

//season
let season = '';
if((1 <= month && month <3) || (11 <= month && month <= 12)){
  season = 'fuyu';
} else if(3 <= month && month <= 5) {
  season = 'haru';
} else if (6 <= month && month <= 8) {
  season = 'natu';
} else {
  season = 'aki';
};

let background = document.getElementsByClassName('background')[0];
background.classList.add(`${season}-${time}`);



let textmessage = document.getElementsByClassName('task-message')[0];
textmessage.textContent = 'What is your main focus today?';

function namesubmit() {
  let name ='';
  name = document.forms.form1.nameInput.value;
  document.getElementsByClassName('name')[0].textContent = name;
  document.getElementsByClassName('nameInput')[0].classList.add('hidden');
  document.getElementsByClassName('submit')[0].classList.add('hidden');
  document.getElementById('display').classList.add('flex');
  document.getElementsByClassName('namelabel')[0].classList.add('hidden');
};

function tasksubmit() {
  let task = '';
  task = document.forms.form2.taskinput.value;
  document.getElementsByClassName('taskshow')[0].textContent = task;
  document.getElementsByClassName('task-message')[0].textContent = 'TODAY: click task to done';
  document.getElementsByClassName('taskinput')[0].classList.add('hidden');
  document.getElementsByClassName('submit')[1].classList.add('hidden');
  document.getElementsByClassName('taskcheck')[0].classList.remove('hidden');
  document.getElementsByClassName('taskcheck')[0].classList.add('flex');
  document.getElementsByClassName('taskform')[0].classList.add('hidden');
};

let niceword = ['Nice work!', 'Great Work!', 'Way to go!', 'Nice.'];

function checkedbox() {
  document.getElementsByClassName('taskshow')[0].classList.add('line');
  let num = Math.ceil(Math.random()*niceword.length);
  document.getElementsByClassName('niceword')[0].textContent = niceword[num];
  setTimeout(function() {
    document.getElementsByClassName('niceword')[0].textContent = '';
  }, 3000)
};

let taskshow = document.getElementsByClassName('taskshow')[0];
let count = 0;
taskshow.addEventListener('click', function() {
  taskshow.classList.toggle('line');
  count++;
  if(count%2 !== 0 || count == 1) {
    let num = Math.ceil(Math.random()*niceword.length);
    document.getElementsByClassName('niceword')[0].textContent = niceword[num];
    setTimeout(()=> {
      document.getElementsByClassName('niceword')[0].textContent = '';
    },2000);
  }
}, false);

function taskzero() {
  document.forms.form2.taskinput.value = '';
  document.getElementsByClassName('task-message')[0].textContent = 'What is your main focus today?';
  document.getElementsByClassName('taskinput')[0].classList.remove('hidden');
  document.getElementsByClassName('submit')[1].classList.remove('hidden');
  document.getElementsByClassName('taskcheck')[0].classList.add('hidden');
  document.getElementsByClassName('taskcheck')[0].classList.remove('flex');
  document.getElementsByClassName('taskform')[0].classList.remove('hidden');
}