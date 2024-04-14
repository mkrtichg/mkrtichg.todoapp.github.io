

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

    if(!completnes.isDone){
        notDoneImg.addEventListener("click",()=>{
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