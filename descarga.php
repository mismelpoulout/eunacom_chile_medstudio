<?php
$directorio_descargas = "https://www.mediafire.com/file/euqk5b6kjihgrzm/medstudio-eunacom.apk/file";
$contador = 'cuenta.txt';
$cf = fopen($counter, "w+");
fputs($cf, "$_GET['archivo']");
fclose($cf);  
$mi_archivo = $_GET['archivo'];
$fp = fopen($mi_archivo,"rb");
$tamano_archivo = filesize($file);
header("Content-type: application/download ");
header("Content-length: $tamano_archivo ");
fpassthru($fp);
fclose($fp);
?>