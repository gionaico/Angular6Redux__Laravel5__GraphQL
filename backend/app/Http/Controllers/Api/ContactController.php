<?php

namespace App\Http\Controllers\Api;
//namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Tag;
use Mail;
use App\RealWorld\Transformers\TagTransformer;
use App\Http\Requests\Api\DataContact;

class ContactController extends ApiController
{
    /**
     * TagController constructor.
     *
     * @param TagTransformer $transformer
     */
    public function __construct(TagTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    /**
     * Get all the tags.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function email(DataContact $request)
    {

        $data = array(
            'subject' => $request->input("contact.subject"),
            'comment' => $request->input("contact.comment")
            
        );
        //$sent = Mail::raw('Now I know how to send emails with Laravel', function($message){
        $sent = Mail::send('emails.email', $data, function ($message){
            $message->subject('Test Laravel');
            $message->from(config('mail.from.address'), config("app.name"));
            $message->to("joanmodaw@gmail.com");
        });

        if($sent) dd("something wrong");
        
        return response()->json(['message' => 'Request completed']);
        
    }
}
