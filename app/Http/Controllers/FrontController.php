<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
/* use Illuminate\Support\Facades\DB; */
use App\Models\Work;
use App\Models\LandingPage;
use App\Models\FAQ;
use App\Models\IntermediatePage;
use App\Models\Client;
use App\Models\Order;
use App\Models\orderWork;

class FrontController extends Controller
{

    public function intermediatePage ($slug) {
        $page = IntermediatePage::where('slug', $slug)->first();

        return inertia('IntermediatePage', ['page' => $page]);
    }

    public function landingPage($slug) {
        $work = Work::where('slug', $slug)->first(); 

        if(!$work)
        return redirect()->route('notFound');

        $articles = LandingPage::where('work_id',$work->id)->get();

        $faqs = FAQ::where('work_id',$work->id)->get();

        return Inertia::render('LandingPage',['work' => $work, 'articles' => $articles, 'faqs' => $faqs]);
    }

    public function getJourney($params = null) {
        if($params != null) {
            $work = Work::where('slug', $params)->first();
        
            if(!$work) return redirect()->route('notFound');
        
            else { $params = $work->id; }
        }

        return Inertia::render('project/index', ['params' => $params ]);
    }

    public function saveJourney(Request $request) {

        $clientExist = Client::where('email', '=', $request->Client['EMail'])->first();

        if(!$clientExist)
            $client = Client::create([
                'lastName' => $request->Client['LastName'],
                'firstName' => $request->Client['FirstName'],
                'gender' => $request->Client['Gender'],
                'phone' => $request->Client['PhoneNumber'],
                'email' => $request->Client['EMail'],
            ]);


        $order = Order::create([
            'client_id' => $clientExist ? $clientExist->id : $client->id,
            'logementType' => $request->LogementType,
            'logementConstruction' => $request->LogementConstruction,
            'logementSurface' => $request->LogementSurface,
            'logementEnergie' => $request->LogementEnergie,
            'logementEnergieType' => $request->LogementEnergieType,
            'currentElectricityBill' => $request->currentElectricityBill,
            'kilowattsPerYear' => $request->kilowattsPerYear,
            'taxIncome' => $request->taxIncome,
            'roofType' => $request->roofType,
            'roofOrientation' => $request->roofOrientation,
            'interieurSurface' => $request->InteriorSurface,
            'exterieurSurface' => $request->ExteriorSurface,
            'exterieurRevetement' => $request->ExterieurRevetement,
            'surfaceChauffee' => $request->SurfaceChauffee,
            'eauChaudeSanitaire' => $request->EauChaudeSanitaire,
            'EspaceExterieur' => $request->EspaceExterior,
            'statusProjet' => $request->StatusProject,
            'travauxAdresse' => $request->TravauxAdresse,
            'utilisateurStatus' => $request->UtilisateurStatus,
            'menageComposition' => $request->MenageComposition,
            'menageRevenus' => $request->MenageRevenus,
        ]);

        for($i = 0; $i < count($request->TravauxIds); $i++) {
            orderWork::create([
                'order_id' => $order->id,
                'work_id' => $request->TravauxIds[$i],
            ]);
        }

    }
}
