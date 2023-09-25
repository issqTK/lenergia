<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Mail;
use App\Mail\increasingSolution;
use App\Models\MailAdress;


class mailController extends Controller
{
    public function index() {

        if(Auth::user()->type == false) return redirect('/dashboard');

        $subject = 'Augmentation de votre facture d\'électricité de 10% - Voici une solution intéressante !';

        $mailAdresses = MailAdress::all();

        foreach($mailAdresses AS $mailAdr) {
            Mail::to($mailAdr->mailAdress)->send(new increasingSolution($subject, $mailAdr->name));
            
            sleep(2);
        }
        
        return back()->with('otherMSG', 'Les messages ont bien été envoyés');
    }

    public function viewMailer() {
        if(Auth::user()->type == false) return redirect('/dashboard');

        $mails = new MailAdress();

        $mailAdress = $mails->orderBy('id', 'desc')->get();

        return Inertia::render('mailer', ['mails' => $mailAdress]);

    }

    public function delete(Request $r) {
        if(Auth::user()->type == false) return redirect('/dashboard');

        $deleted = MailAdress::find($r->mailID);
        
        if(!$deleted) return back();

        $deleted->delete();

        return back()->with(['message' => 'Email a été supprimer avec succès']);
    }

    public function createNew(Request $request) {
        $found = MailAdress::where('mailAdress', $request->email)->first();

        if($found)
        return back()->with(['message'=> 'Email existe déjà!']);

        MailAdress::create([
            'name' => $request->name,
            'mailAdress' => $request->email,
        ]);

        return back()->with(['message' => 'Enregistré avec succès']);
    }
}
