function ListToDo() {
    this.arr = [];

    this.addTask = function(task) {
        this.arr.push(task);
    }

    this.searchLocated = function(id) {
        return this.arr.findIndex(function(item) {
            return id == item.id;
        });
    }
    this.DeleTask = function(id) {
        var local = this.searchLocated(id);
        if (local !== -1) {
            this.arr.splice(local, 1);
        }
        console.log(local);
    }
    this.GetInfo = function(id) {
        var local = this.searchLocated(id);
        if (local !== -1) {
            return this.arr[local];
        }
    }
}

function getRndInteger() {
    return Math.floor(Math.random() * 101);
}

ListToDo.prototype.createId = function() {
    var id = getRndInteger();
    this.arr.map(function(item) {
        if (id == item.id) {
            id = getRndInteger();
        }
    });
    return id;
};
// ListToDo.prototype.CheckTask = function(text) {
//     return this.arr.filter(function(item) {
//         return (item.taskName.indexOf(text) !== -1);
//     })
// }
ListToDo.prototype.updateTask = function(task) {
    var local = this.searchLocated(task.id);
    if (local !== -1) {
        this.arr[vitri] = task;
    }
};