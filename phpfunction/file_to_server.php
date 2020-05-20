<?php 
    // Initialize a file URL to the variable 
    $_url = !empty($_GET['u'])?$_GET['u']:'-';
    $caller = !empty($_GET['action'])?$_GET['action']:'-';
    class file_to_server{
        function download($url) {
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_NOBODY, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
            $output = curl_exec($ch);
            $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            if ($status == 200) {
                file_put_contents(dirname(__FILE__) . '/audio6.mp3', $output);
            }
        }
    }
    
    
    if($caller=="mp3") {
        echo $_url;
        $action_class = new file_to_server();
        $action_class->download($_url);
    }
   
?> 


