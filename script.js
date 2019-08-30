$(readyNow); 

function readyNow() {
    $('#submitBtn').on('click', activateSubmit);
    //submit button activation
    //delete button activation
}
let employees = [];

function activateSubmit(){
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let salary = $('#salary-input').val();

    let employee = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        salary: salary
    }

    employees.push(employee);
    listOutEmployees();

    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#salary-input').val('');
}

function listOutEmployees(){
    $('#employee-list').empty();
    let totalMonthly = 0;
    employees.forEach(function (employee){
        let $newRow = `<tr><td>`+employee.firstName+`</td><td>`+employee.lastName+`</td><td>`+employee.id+`</td><td>`+employee.title+`</td><td>$`+employee.salary+`</td><td><button class="deleteBtn">Delete</button></td></tr>`;
        $('#employee-list').append($newRow);
        let monthly = employee.salary / 12;
        totalMonthly += monthly;
    })
    $('#total-monthly').empty();
    $('#total-monthly').append('Total Monthly: $'+totalMonthly);
    if (totalMonthly > 20000){
        $('#total-monthly').addClass('red');
    } else {
        $('#total-monthly').removeClass('red');
    }
}

// function listOutFriends() {
//     $('#listFriends').empty();
//     favFoods.forEach(function (person) {
//         let $li = $(
//             `<li data-cohort="Porta">
//                 ${person.name}
//                 <button class='getFood'>${person.favoriteMeal}</button>
//             </li>`
//         )// end $li

//         $li.data('favoriteFood', person.favoriteFood);

//         $('#listFriends').append($li)//end append
//     })//end forEach

//     $('.getFood').on('click', handleClick)
// }//end ListOutFriendss



// if (name != '') {
//     $('#name').removeClass('red-border');
// }
// if (meal != '') {
//     $('#meal').removeClass('red-border');
// }
// if (food != '') {
//     $('#food').removeClass('red-border');
// }
// if (name == '') {
//     $('#name').addClass('red-border');
//     alert('Please fill out the name input');
// } else if (meal == '') {
//     $('#meal').addClass('red-border');
//     alert('Please fill out the meal input');
// } else if (food == '') {
//     $('#food').addClass('red-border');
//     alert('Please fill out the food input');
// } else {


 

// }