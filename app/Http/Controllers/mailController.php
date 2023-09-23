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

        if(Auth::user()->type == 1) {
            $subject = 'Augmentation de votre facture d\'électricité de 10% - Voici une solution intéressante !';

            //$mailAdresses = MailAdress::first();

            Mail::to('eltakiissam@gmail.com')->send(new increasingSolution($subject, 'Taki Issam'));

            /* foreach($mailAdresses AS $mailAdr) {
                Mail::to($mailAdr->mailAdress)->send(new increasingSolution($subject, $mailAdr->name));
                
                sleep(2);
            } */

            echo '<div class="text-center py-36 text-xl">Les mails ont bien été envoyé</div>';

        } else {
            return redirect('/dashboard');
        }

    }
}
