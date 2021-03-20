<?php
/* https://api.telegram.org/bot1690876248:AAElikUKRilawmEFl9r9Pe8pMZfY_5LZ85w/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */


$name = $_GET['user_name'];
$phone = $_GET['user_phone'];
$email = $_GET['user_email'];
$text = $_GET['user_text'];
$token = "1690876248:AAElikUKRilawmEFl9r9Pe8pMZfY_5LZ85w";
$chat_id = "-534208471";
$txt="";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email' => $email,
    'Text' => $text,
    'Дата заказа: ' => date("m.d.Y")
);
    $txt = implode("%0A",$arr);
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
    header("Location: /write/sent"); /* Redirect browser */
    exit();
} else {
    echo "Error";
}
?>