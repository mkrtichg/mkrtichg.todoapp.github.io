



// debugger;


//Carousel section

const imageArea = document.getElementById('images');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const leftBTN = document.getElementById('leftBTN');
const rightBTN = document.getElementById('rightBTN');
const playPauseBTN = document.getElementById('playPause');

img1.classList.add('hidden');
img2.classList.add('hidden');
img3.classList.add('hidden');
img4.classList.add('hidden');
img5.classList.add('hidden');
let currentSlide = img5;
currentSlide.classList.remove('hidden');


let nextSlide;
let previousSlide;

const s = 1500;
let i = 0;
let timerID;


playPauseBTN.addEventListener('click', () => {

    if (timerID) {
        clearInterval(timerID);
        playPauseBTN.value = "Play";
        timerID = null;

    } else {
        playPauseBTN.value = "Pause";
        timerID = setInterval(() => slideShow(), s);

    }


    imageArea.addEventListener('mousemove', () => {
       if(playPauseBTN.value === "Pause"){
        clearInterval(timerID);
        timerID = null;
       }
    });

    imageArea.addEventListener('mouseleave', () => {
        if(playPauseBTN.value === "Pause"){
            timerID = setInterval(() => slideShow(), s);
        }


    });




    // playPauseBTN.addEventListener('click', () =>{
    //     clearInterval(timerId);
    // })

})



leftBTN.addEventListener('click', () => {
    // debugger;

    slide();
    iDecrement();

})

rightBTN.addEventListener('click', () => {

    // debugger;
    slide();
    iIncrement();

})



function slideShow() {
    // debugger;
    slide();
    iIncrement();
}


function slide() {

    currentSlide.classList.remove('hidden');
    previousSlide = currentSlide;
    previousSlide.classList.add('hidden');
    switch (i) {
        // case 0:
        //     currentSlide = img1;
        //     break;
        case 1:
            currentSlide = img2;
            break;
        case 2:
            currentSlide = img3;
            break;
        case 3:
            currentSlide = img4;
            break;
        case 4:
            currentSlide = img5;
            break;

        default:
            currentSlide = img1;
            break;
    }


    currentSlide.classList.remove('hidden');
}


function iIncrement() {
    if (i === 4) {
        return i = 0
    } else {
        return i++
    }
}

function iDecrement() {
    if (i === 0) {
        return i = 4
    } else {
        return i--
    }
}



//  -----------------------------------------------------------------------------------------------------------------------------------

// ToDo list section


const table = document.getElementById('list');
const button = document.getElementById('inputButton');
const inpText = document.getElementById('textarea');
const taskDate = document.getElementById('endDate');



button.addEventListener("click", () => {

    // debugger;
    const tableRow = document.createElement("tr");
    tableRow.id = "content";

    const currentDate = document.createElement("td");
    tableRow.className = "inputDate";

    const toDoDate = document.createElement("td");
    toDoDate.className = "dueDate";

    const task = document.createElement("td");
    task.className = "task";

    const completnes = document.createElement("td");
    completnes.className = "completnes";
    completnes.isDone = false;
    let i = 1;
    completnes.number = i;
    i++;

    const date = new Date();
    const inpDate = parseDay(date);
    currentDate.append(inpDate);
    tableRow.append(currentDate);

    const dueDate = taskDate.value;
    toDoDate.append(dueDate);
    tableRow.append(toDoDate);

    const taskText = inpText.value;
    task.append(taskText);
    tableRow.append(task);

    const notDoneImg = document.createElement('img');
    notDoneImg.src = "./Images/exMark.png";
    notDoneImg.alt = "exMark"
    notDoneImg.style = "width: 30%";


    completnes.append(notDoneImg);
    tableRow.append(completnes);

    table.append(tableRow);

    if (!completnes.isDone) {
        notDoneImg.addEventListener("click", () => {
            completnes.isDone = true
            doneImg = document.createElement('img');
            notDoneImg.src = "./Images/checkMarkWithRing.png";
            notDoneImg.alt = "checkMarkWithRing"
            notDoneImg.style = "width: 30%";
        })
    }

})

function parseDay(arg) {

    const year = arg.getFullYear();
    const day = arg.getDate();
    const dateMonth = arg.getMonth();
    let month;
    let toDay;


    switch (dateMonth) {
        case 0: month = 'Jan';
            break;
        case 1: month = 'Feb';
            break;
        case 2: month = 'Mar';
            break;
        case 3: month = 'Apr';
            break;
        case 4: month = 'May';
            break;
        case 5: month = 'Jun';
            break;
        case 6: month = 'Jul';
            break;
        case 7: month = 'Aug';
            break;
        case 8: month = 'Sep';
            break;
        case 9: month = 'Oct';
            break;
        case 10: month = 'Nov';
            break;
        case 11: month = 'Dec';
            break;
    };

    return toDay = `${year} ${month} ${day}`;

}







