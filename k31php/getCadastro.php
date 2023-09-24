<link rel="stylesheet"  href="tabelaStyle.css">
<ul class="navbar">
        <li><a class="navbarInactive" href="../k31/cadastroIndex.html">Cadastro</a></li>
        <li><a class="navbarInactive" href="">Listar</a></li>
        <li><a class="navbarInactive" href="../k31php/tabela.php">Tabela</a></li>
        <li><a class="navbarInactive" href="../k31php/date.php">Data</a></li>
        <li><a class="navbarActive" href="">Array</a></li>
        <li><a class="navbarInactive" href="../k31/loginIndex.html">Sair</a></li>
    </ul>
<div class="container">
    <div class="tableContent">
<?php
$text = "CPF§Endereço§Cidade§Email";
$entrada = $_POST['cadastro-login'];

$texts = explode("§", $text);
$entradas=explode("%",$entrada);

for($i = 0; $i < count($entradas); $i++){
    echo $texts{$i}.": ".$entradas{$i}."<br>";
}
?>
</div>
</div>
</div>