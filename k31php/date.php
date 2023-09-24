<link rel="stylesheet"  href="tabelaStyle.css">
<ul class="navbar">
        <li><a class="navbarInactive" href="../k31/cadastroIndex.html">Cadastro</a></li>
        <li><a class="navbarInactive" href="">Listar</a></li>
        <li><a class="navbarInactive" href="../k31php/tabela.php">Tabela</a></li>
        <li><a class="navbarActive" href="">Data</a></li>
        <li><a class="navbarInactive" href="../k31php/array.php">Array</a></li>
        <li><a class="navbarInactive" href="../k31/loginIndex.html">Sair</a></li>
    </ul>
<div class="container">
    <div class="tableContent">
<?php
    echo 'Usando date <br>';
    setlocale(LC_ALL, "pt_BR", "pt_BR.iso-8859-1", "pt_BR.utf-8", "portuguese");
    date_default_timezone_set('America/Sao_Paulo');
    $dia = date("d");
    $mes = date("m");
    $ano = date("y");
    $semana = strftime('%A', strtotime('today'));
    $hora = strftime('%H:%M:%S');
    echo 'Data: '.$dia.'/'.$mes.'/'.$ano."<br>";
    echo 'Data MySQL: '.$ano.'/'.$mes.'/'.$dia."<br>";
    echo 'Data Com Hora: '.$dia.'/'.$mes.'/'.$ano.' '.$hora."<br>";
    echo 'Dia da Semana: '.ucwords($semana).'<br>';
?>
    </div>
        <br>
    <div class="tableContent2">
<?php
    echo 'Usando getdate <br>';
    setlocale(LC_ALL, "pt_BR", "pt_BR.iso-8859-1", "pt_BR.utf-8", "portuguese");
    date_default_timezone_set('America/Sao_Paulo');
    $date = getdate();
    echo 'Data: '.$date["mday"].'/'.$date["mon"].'/'.$date["year"]."<br>";
    echo 'Data MySQL: '.$date["year"].'/'.$date["mon"].'/'.$date["mday"]."<br>";
    echo 'Data Com Hora: '.$dia.'/'.$mes.'/'.$ano.' '.$hora."<br>";
    echo 'Dia da Semana: '.ucwords($semana).'<br>';
?>
</div>
</div>