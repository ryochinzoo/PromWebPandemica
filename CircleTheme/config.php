<?php

//自分のメールアドレスの設定 -- 複数指定したい場合は各アドレスを半角カンマで区切って記述 --
$send_address = 'info@circlepandemica.com';
//$send_address = 'info@circlepandemica.com, info@circlepandemica.com';




//メールの差出人名に表示される自分の名前
$send_name = '円環のパンデミカお問い合わせ窓口';




//スパム対策機能 -- オフの場合は0、オンの場合は1にしてください。 --
$spam_check = 1;




//メールフォームを設置するサイトのドメイン -- スパム機能がオンの場合にのみ設定する必要があります。 --
$domain_name = 'circlepandemica.com';




//相手に届くメールの内容(上部) -- EOMからEOM;までの間の文章を自分に合わせて変更してください。 --
$thanks_body_head = <<<EOM

この度はお問い合わせをいただき、ありがとうございました。
折り返し担当者から返信が行きますので、しばらくお待ちください。
以下の内容でお問い合わせをお受けしました。

EOM;




//相手に届くメールの内容(下部) -- EOMからEOM;までの間の文章を自分に合わせて変更してください。 --
$thanks_body_foot = <<<EOM

────────────────────────────────────

　　円環のパンデミカ運営

────────────────────────────────────
EOM;




//サンクスページのURL -- mailform.phpからの相対パス、またはhttp://からの絶対パス --
$thanks_page_url = 'thanks.html';


