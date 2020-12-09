var list = new ListToDo();
var listComlplete = new ListToDo();
var validation = new Validation();

getLocalStorage();

/**
 * thêm việc
 */
document.getElementById("addItem").addEventListener("click", function() {
    var text = getEle("newTask").value;
    var status = "todo";

    var isValid = true;

    isValid &= validation.kiemTraRong(text, "Mang nhap vao rong");
    isValid &= validation.filterTextName(list.arr, text, "Trung cong viec");

    if (!isValid) return;

    var id = list.createId();
    // console.log(list.CheckTask(text));
    var Task = new task(text, status, id);
    list.addTask(Task);
    console.log(list.arr);
    taoBang(list.arr);

    localStorage.setItem("ToDo", JSON.stringify(list.arr));
})

/**
 * tạo bảng
 */
function taoBang(arr) {
    var content = "";
    arr.map(function(item, i) {
        content += `
        <li>
            <span>${item.taskName}</span>
            <div class="buttons">
                <button class="remove" onclick="deleteTask('${item.id}')"><i class="fa fa-trash-alt"></i></button>
                <button class="complete" onclick="clickTask('${item.id}')"><i class="far fa-check-circle"></i></button>
            </div>
        </li>
        `
    })
    getEle("todo").innerHTML = content;
}

function taoBangHT(arr) {
    var content = "";
    arr.map(function(item, i) {
        content += `
        <li>
            <span>${item.taskName}</span>
            <div class="buttons">
                <button class="remove" onclick="deleteTaskC('${item.id}')"><i class="fa fa-trash-alt"></i></button>
                <button class="complete" disabled onclick="clickTaskC('${item.id}')"><i class="fas fa-check-circle"></i></button>
            </div>
        </li>
        `
    })
    getEle("completed").innerHTML = content;
}

/**
 * xóa task
 */
function deleteTask(id) {
    list.DeleTask(id);
    taoBang(list.arr);
    localStorage.setItem("ToDo", JSON.stringify(list.arr));
}

function deleteTaskC(id) {
    listComlplete.DeleTask(id);
    taoBangHT(listComlplete.arr);
    localStorage.setItem("Complete", JSON.stringify(listComlplete.arr));
}


/**
 * Hoàn thành task
 */
function clickTask(id) {
    listComlplete.addTask(list.GetInfo(id));
    // saveLocalStrageCP();
    localStorage.setItem("Complete", JSON.stringify(listComlplete.arr));
    deleteTask(id);
    taoBangHT(listComlplete.arr);
}

/**
 * làm gọn phần getelementById
 */


function getLocalStorage() {
    if (localStorage.getItem("ToDo")) {
        list.arr = JSON.parse(localStorage.getItem("ToDo"));
        taoBang(list.arr);
    }
    if (localStorage.getItem("Complete")) {
        listComlplete.arr = JSON.parse(localStorage.getItem("Complete"));
        taoBangHT(listComlplete.arr);
    }
}

// function saveLocalStrage() {
//     localStorage.saveItem("todo", JSON.stringify(list.arr));
// }

// function saveLocalStrageCP() {
//     localStorage.saveItem("Complete", JSON.stringify(listComlplete.arr));
// }



function getEle(id) {
    return document.getElementById(id);
}