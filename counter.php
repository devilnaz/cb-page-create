<?php
include("admin/main/dbdata.inc.php");
$ch = curl_init();
// ��������� URL � ������ ����������� ����������
curl_setopt($ch, CURLOPT_URL, "http://manage.clientbase.ru/counter_new.php");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);
// �������� �������� � ������ � ��������
$str = curl_exec($ch);
// ���������� ������ � ������������ ��������
curl_close($ch);

echo json_encode(explode('|', $str));
?>