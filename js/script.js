function salve() {
    var description = document.getElementById('description').value;
    var responsible = document.getElementById('responsible').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;

    if (description === '' || responsible === '' || startDate === '' || endDate === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
}

