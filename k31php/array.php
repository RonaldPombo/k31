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
$text ="n°agentes§aparelhos§cidades§postos§bairro§mês§ano";
$entrada = "12§25§Santos§100§boqueirão§09§2023";

$texts = explode("§", $text);
$entradas=explode("§",$entrada);

for($i = 0; $i < count($entradas); $i++){
    echo $texts{$i}.": ".$entradas{$i}."<br>";
}
?>
</div>
<br>
<div class="tableContent2">
<?php
$text = "n°agentes§aparelhos§cidades§postos§bairro§mês§ano";
$entrada = "15§20§Carlos§130§boqueirão§02§2003";

$texts = explode("§", $text);
$entradas=explode("§",$entrada);
$i = 0;
foreach ($entradas as $value){
    echo $texts{$i}.": ".$value."<br>";
    $i++;
}
?>
</div>
</div>