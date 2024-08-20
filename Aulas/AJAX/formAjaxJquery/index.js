$(document).ready(function() {
    $('#enviarBtn').on('click', function() {
        EnviarFormulario('minhaForm');
    });
});

function EnviarFormulario(id_form) {
    let frm = $('#' + id_form);

    // impede o envio do form de forma tradicional
    frm.on('submit', function(e) {
        e.preventDefault();

        // submissão do formulario em ajax
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            // sucesso
            success: function(response) {
                console.log('Dados enviados com sucesso');
                console.log(response);
            },
            // error
            error: function() {
                console.log('Aconteceu um erro.');
            }
        });
    });

    // Força a submissão do formulário via AJAX
    frm.submit();
}
