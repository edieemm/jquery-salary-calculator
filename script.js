$(readyNow); 

function readyNow() {
    $('#submitBtn').on('click', activateSubmit);
    $('#employee-list').on('click', '.deleteBtn', activateDelete);
}
let employees = [];

function activateSubmit(){
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let salary = $('#salary-input').val();
    
    if (id == '') {
        alert('Employee ID number required.');
    } else if ( duplicateId(id) ){
        alert('Employee ID already exists. Please enter a unique ID number')
    } else {

        let employee = {
            firstName: firstName,
            lastName: lastName,
            id: id,
            title: title,
            salary: Number(salary).toFixed(2)
        }

        employees.push(employee);
        listOutEmployees();

        $('#first-name-input').val('');
        $('#last-name-input').val('');
        $('#id-input').val('');
        $('#title-input').val('');
        $('#salary-input').val('');

    }
}

function listOutEmployees(){
    $('#employee-list').empty();
    let totalMonthly = 0;

    employees.forEach(function (employee){
        let $newRow = `<tr><td>` + employee.firstName + `</td><td>` + employee.lastName + `</td><td>` + employee.id + `</td><td>` + employee.title + `</td><td>$` + employee.salary + `</td><td><button class="deleteBtn" data-id="` + employee.id +`">Delete</button></td></tr>`;
        $('#employee-list').append($newRow);
        let monthly = employee.salary / 12;
        totalMonthly += monthly;
    })

    $('#total-monthly').empty();
    $('#total-monthly').append('Total Monthly: $' + totalMonthly.toFixed(2));

    if (totalMonthly > 20000){
        $('#total-monthly').addClass('red');
    } else {
        $('#total-monthly').removeClass('red');
    }
}

function activateDelete(){
    let $id = $(this).data('id');
    for (let i=0; i<employees.length; i++){
        if ($id == employees[i].id){
            employees.splice(i, 1);
        }
    }
    listOutEmployees();
    
}

function duplicateId(newId){
    for (i in employees){
        if (employees[i].id == newId){
            return true;
        } else {
            return false;
        }
    }
}