function Validation() {
    this.kiemTraRong = function(input, mess) {
        if (input === "") {
            alert(mess);
            return false;
        }
        return true;
    }
    this.filterTextName = function(arr, input, mess) {
        var check = true;
        arr.filter(function(item) {
            if (item.taskName.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
                check &= false;
            }
        });
        if (check == false) {
            alert(mess);
        }
        return check;
    }
}