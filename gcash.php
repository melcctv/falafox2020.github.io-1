<?php
require_once 'routeros_api.class.php';


$API = new RouterosAPI();
if( $_SERVER['REQUEST_METHOD'] == 'GET'){
    
$phone = $_GET['num'];
$number = "+63".$phone;
$reference = $_GET['ref'];
$prefix = "GCASH";
$amount = $_GET['amount'];
$uptime = $_GET['uptime'];
$validity = $_GET['validity'];
$ssid = $_GET['ssid'];
$mtip = $_GET['mtip'];
$mtuser = $_GET['mtuser'];
$mtpass = $_GET['mtpass'];
$profile = $_GET['profile'];
$vendo = "GCash";
$str = substr(sha1(mt_rand()),17,5);
$vc = $prefix.strtoupper($str);

	if ($API->connect($mtip, $mtuser, $mtpass)) {
			$API->comm('/ip/hotspot/user/add', array(
			"name" => "$vc",
			"limit-uptime" => "$uptime",
			"profile" => "$profile",
			"comment" => "{$validity}m,$amount,0,$vendo",
		));
	}    
 
  $message = [
      "secret" => "753abbea868c388d5a6dc470cfbb7c58e41f2030",
      "mode" => "devices",
      "device" => "00000000-0000-0000-ab96-2a3d1ec4e52f",
      "sim" => 1,
      "priority" => 1,
      "phone" => $number,
      "message" => "Thank you for your purchased!\nhere's your voucher code.\n\n$vc\n\nConnect to \"$ssid\" then tap on this link http://10.0.0.1/login?username=$vc to activate.\n$reference\nThank you!"
  ];

  $cURL = curl_init("https://www.cloud.smschef.com/api/send/sms");
  curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($cURL, CURLOPT_POSTFIELDS, $message);
  $response = curl_exec($cURL);
  curl_close($cURL);

}
