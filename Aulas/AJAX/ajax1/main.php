<?php
// Retorna as boas-vindas ao utilizador com nome e apelido
if(isset($_GET['n']) and isset($_GET['a'])){
    $n = $_GET['n'];
    $a = $_GET['a'];
    $frase_final = "Seja bem-vindo ao servidor, Sr(a). $n $a.";
    echo $frase_final;
}
?>
