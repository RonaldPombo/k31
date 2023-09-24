<link rel="stylesheet"  href="tabelaStyle.css">
<ul class="navbar">
        <li><a class="navbarInactive" href="../k31/cadastroIndex.html">Cadastro</a></li>
        <li><a class="navbarInactive" href="">Listar</a></li>
        <li><a class="navbarActive" href="">Tabela</a></li>
        <li><a class="navbarInactive" href="../k31php/date.php">Data</a></li>
        <li><a class="navbarInactive" href="../k31php/array.php">Array</a></li>
        <li><a class="navbarInactive" href="../k31/loginIndex.html">Sair</a></li>
    </ul>
<div class="container">
    <table class="tableContent">
        <tr>
            <th class="rowHeader">ID</th>
            <th class="rowHeader">Usuário</th>
            <th class="rowHeader">CNPJ</th>
        </tr>
<?php
        $id = array(1, 2, 3, 4);
        $user = array('user1', 'user2', 'user3', 'user4');
        $cnpj = array('231223', '23122', '56453', '23123');
        for($i = 0; $i<count($id); $i++){
            echo "<tr class='rowContent'>";
            echo '<td class="rowItems">'.$id[$i].'</td>';
            echo '<td class="rowItems">'.$user[$i].'</td>';
            echo '<td class="rowItems">'.$cnpj[$i].'</td>';
            echo "</tr>";
        }
?>
</table>
</div>