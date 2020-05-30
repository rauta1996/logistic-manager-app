var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["orderID"] = document.getElementById("orderID").value;
    formData["productname"] = document.getElementById("productname").value;
    formData["consumername"] = document.getElementById("consumername").value;
    formData["email"] = document.getElementById("email").value;
    formData["orderDate"] = document.getElementById("orderDate").value;
    formData["pincode"] = document.getElementById("pincode").value;
    formData["state"] = document.getElementById("state").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("items").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.orderID;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productname;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.consumername;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.orderDate;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.pincode;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.state;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("orderID").value = "";
    document.getElementById("productname").value = "";
    document.getElementById("consumername").value = "";
    document.getElementById("email").value = "";
    document.getElementById("orderDate").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("state").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("orderID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("consumername").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("orderDate").value = selectedRow.cells[4].innerHTML;
    document.getElementById("pincode").value = selectedRow.cells[5].innerHTML;
    document.getElementById("state").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.orderID;
    selectedRow.cells[1].innerHTML = formData.productname;
    selectedRow.cells[2].innerHTML = formData.consumername;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.orderDate;
    selectedRow.cells[5].innerHTML = formData.pincode;
    selectedRow.cells[6].innerHTML = formData.state;
}

function onDelete(td) {
    if (confirm('Are you sure to delete ordered list ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("items").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("productname").value == "") {
        isValid = false;
        document.getElementById("productValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("productValidationError").classList.contains("hide"))
            document.getElementById("productValidationError").classList.add("hide");
    }
    return isValid;
}