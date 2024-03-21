$(document).ready(function() {
    $('#form-tarefa').submit(function(event) {
        event.preventDefault();
        var nomeTarefa = $('#nome-tarefa').val();
        if (nomeTarefa  !== '') {
            var novaTarefa = $('<li>').text(nomeTarefa);
            $('#lista-tarefas').append(novaTarefa);
            $('#nome-tarefa').val('');
        }
    });

    // Marcar/desmarcar tarefa como completa
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).css('text-decoration', function(_, textDecoration) {
            return textDecoration === 'line-through' ? 'none' : 'line-through';
        });
    });
});