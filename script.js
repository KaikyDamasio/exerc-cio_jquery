$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        var taskName = $('#taskInput').val().trim(); // Remove espaços em branco em excesso
        if (taskName !== '') {
            $('#taskList').append('<li>' + taskName + '</li>');
            $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});


