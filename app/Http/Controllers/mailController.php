<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Mail;
use App\Models\MailAdress;
use App\Mail\increasingSolution;


class mailController extends Controller
{
    public function index() {

        if(Auth::user()) {
            $subject = 'Augmentation de votre facture d\'électricité de 10% - Voici une solution intéressante !';

            //$mailAdresses = MailAdress::first();

            Mail::to('eltakiissam@gmail.com')->send(new increasingSolution($subject, 'Taki Issam'));
            Mail::to('issq.tk.91@gmail.com')->send(new increasingSolution($subject, 'TK Issam'));

            /* foreach($mailAdresses AS $mailAdr) {
                Mail::to($mailAdr->mailAdress)->send(new increasingSolution($subject, $mailAdr->name));
                
                sleep(2);
            } */

            echo '<div class="text-center py-36 text-xl">Les mails ont bien été envoyé</div>';
            
            return;

        } else {
            return redirect('/dashboard');
        }

    }
}
