<?php 
namespace App\Http\Controllers;
use Mail;

class EmailController extends Controller { 	
    public function email(){
        $data = array(
            'saludo' => "Hola Mundo",
        );
        
        $sent = Mail::send('emails.email', $data, function ($message){
            $message->subject('Test email');
            $message->from('ruralshoponti@gmail.com', 'ruralshoponti');
            $message->to('yomogan@gmail.com');
        });
        if($sent) dd("something wrong"); //var_dump + exit
        
        return response()->json(['message' => 'Request completed']);
        //echo json_encode("Your email has been sent successfully");
        //return "Your email has been sent successfully";
    }
}