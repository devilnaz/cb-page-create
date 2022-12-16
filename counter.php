<?php
include("admin/main/dbdata.inc.php");
$ch = curl_init();
// установка URL и других необходимых параметров
curl_setopt($ch, CURLOPT_URL, "http://manage.clientbase.ru/counter_new.php");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);
// загрузка страницы и выдача её браузеру
$str = curl_exec($ch);
// завершение сеанса и освобождение ресурсов
curl_close($ch);

echo json_encode(explode('|', $str));
?>