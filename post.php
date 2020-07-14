<?php

/* https://api.telegram.org/bot1069582238:AAHw5m8VqA_wJ-ZJEjAe1VP3oddCWmW70vs/getUpdates, */

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "1069582238:AAHw5m8VqA_wJ-ZJEjAe1VP3oddCWmW70vs";
$chat_id = "-370700432";
$arr = array(
  "Ім'я': " => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
header("Location: https://kingdomkids.com.ua/thank-you");
} else {
}
?>
