<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Work;
use App\Models\Client;
use App\Models\Order;
use App\Models\orderWork;

class OrderController extends Controller
{

    public function createNewWork(Request $r, $idOrder) {
        $exist = orderWork::where('order_id',$idOrder)->where('work_id', $r->work)->first();
        $exceed =  orderWork::where('order_id', $idOrder)->count();

        if($exceed == 5)
            return back()->with(['error' => 'Veuillez ne pas dépasser 5 travaux!']);

        if($exist)
            return back()->with(['error' => 'Travaux déjà existant!']);

        $order = Order::find($idOrder);

        if($r->work == 1) {
            $order->currentElectricityBill = $r->currentElectricityBill;
            $order->kilowattsPerYear = $r->kilowattsPerYear;
            $order->taxIncome = $r->taxIncome;
            $order->roofType = $r->roofType;
            $order->roofOrientation = $r->roofOrientation;
        }
        elseif($r->work == 8)
            $order->interieurSurface = $r->interieurSurface;
        elseif($r->work == 9) {
            $order->exterieurSurface = $r->exterieurSurface;
            $order->exterieurRevetement = $r->exterieurRevetement;

        }
        elseif($r->work == 5) {
            $order->surfaceChauffee = $r->surfaceChauffee;
            $order->eauChaudeSanitaire = $r->eauChaudeSanitaire;
            $order->EspaceExterieur = $r->EspaceExterieur;
        }

        $order->save();
        

        orderWork::create([
            'order_id' => $idOrder,
            'work_id' => $r->work
        ]);

        return back()->with(['message' => 'Travaux a été créé avec succès']);
    }

    public function deleteWork(Request $r) {
        $work = orderWork::where('order_id', $r->orderID)->where('work_id', $r->workID)->first();

        $order = Order::find($r->orderID);


        if($work->work_id == 1) {
            $order->currentElectricityBill = null;
            $order->kilowattsPerYear = null;
            $order->taxIncome = null;
            $order->roofType = null;
            $order->roofOrientation = null;
        }
        elseif($work->work_id == 8)
            $order->interieurSurface = null;
        elseif($work->work_id == 9) {
            $order->exterieurSurface = null;
            $order->exterieurRevetement = null;

        }
        elseif($work->work_id == 5) {
            $order->surfaceChauffee = null;
            $order->eauChaudeSanitaire = null;
        }

        $order->save();

        $work->delete();

        return back()->with(['message' => 'Travaux a été supprimer avec succès']);
    }

    public function viewAll() {
        $orders = Order::orderBy('id', 'DESC')->get();

        $data = array();
        $works = array();
  
        for($i = 0; $i < count($orders); $i++) {
            $data[$i]['id'] = $orders[$i]['id'];
            $data[$i]['logementType'] = $orders[$i]['logementType'];
            $data[$i]['logementConstruction'] = $orders[$i]['logementConstruction'];
            $data[$i]['logementSurface'] = $orders[$i]['logementSurface'];
            $data[$i]['logementEnergie'] = $orders[$i]['logementEnergie'];
            $data[$i]['logementEnergieType'] = $orders[$i]['logementEnergieType'];
            $data[$i]['currentElectricityBill'] = $orders[$i]['currentElectricityBill'];
            $data[$i]['kilowattsPerYear'] = $orders[$i]['kilowattsPerYear'];
            $data[$i]['taxIncome'] = $orders[$i]['taxIncome'];
            $data[$i]['roofType'] = $orders[$i]['roofType'];
            $data[$i]['roofOrientation'] = $orders[$i]['roofOrientation'];
            $data[$i]['interieurSurface'] = $orders[$i]['interieurSurface'];
            $data[$i]['exterieurSurface'] = $orders[$i]['exterieurSurface'];
            $data[$i]['exterieurRevetement'] = $orders[$i]['exterieurRevetement'];
            $data[$i]['surfaceChauffee'] = $orders[$i]['surfaceChauffee'];
            $data[$i]['eauChaudeSanitaire'] = $orders[$i]['eauChaudeSanitaire'];
            $data[$i]['EspaceExterieur'] = $orders[$i]['EspaceExterieur'];
            $data[$i]['statusProjet'] = $orders[$i]['statusProjet'];
            $data[$i]['travauxAdresse'] = $orders[$i]['travauxAdresse'];
            $data[$i]['utilisateurStatus'] = $orders[$i]['utilisateurStatus'];
            $data[$i]['menageComposition'] = $orders[$i]['menageComposition'];
            $data[$i]['menageRevenus'] = $orders[$i]['menageRevenus'];
            $data[$i]['reviewState'] = $orders[$i]['reviewState'];

            $data[$i]['client'] = $orders[$i]->client;

            foreach($orders[$i]->works as $work)
                array_push($works, Work::where('id', '=', $work->work_id)->select('id', 'name')->first());

            $data[$i]['works'] = $works;

            $works = [];
            
        }

        return Inertia::render('Orders', ['data' => $data]);
    }

    /* update client */

    public function storeClient(Request $request, $idOrder)
    {
        #validation
        $validated = $request->validate([
            "lastName" => "required|max:120",
            "firstName" => "required|max:120",
            "phone" => "required|max:10",
            "email" => "required|max:120",
            "logementSurface" => "required",
        ]);

        $order = Order::where('id', $idOrder)->first();

        $client = Client::where('id', $order->client_id)->first();

        $client->gender = $request->gender;
        $client->lastName = $request->lastName;
        $client->firstName = $request->firstName;
        $client->phone = '0'. $request->phone;
        $client->email = $request->email;

        $client->save();

        

        $order->logementType = $request->logementType;
        $order->logementConstruction = $request->logementConstruction;
        $order->logementSurface = $request->logementSurface;
        $order->logementEnergie = $request->logementEnergie;

        if(in_array($request->logementEnergie, ['Chauffage au fioul', 'Chauffage électrique', 'Chauffage au gaz']))
            $order->logementEnergieType = $request->logementEnergieType;
        else $order->logementEnergieType = null;

        $order->save();

        return back();
    }

    /* update order */

    public function storeOrder(Request $request, $idOrder)
    {
        $order = Order::where('id', $idOrder)->first();

        $order->update([
            'currentElectricityBill' => $request->currentElectricityBill,
            'kilowattsPerYear' => $request->kilowattsPerYear,
            'taxIncome' => $request->taxIncome,
            'roofType' => $request->roofType,
            'roofOrientation' => $request->roofOrientation,
            'interieurSurface' => $request->interieurSurface,
            'exterieurSurface' => $request->exterieurSurface,
            'exterieurRevetement' => $request->exterieurRevetement,
            'surfaceChauffee' => $request->surfaceChauffee,
            'eauChaudeSanitaire' => $request->eauChaudeSanitaire,
            'EspaceExterieur' => (int)$request->EspaceExterieur,
            'statusProjet' => $request->statusProjet,
            'travauxAdresse' => $request->travauxAdresse,
            'utilisateurStatus' => $request->utilisateurStatus,
            'menageComposition' => $request->menageComposition,
            'menageRevenus' => $request->menageRevenus,
        ]);
        
        return back();
    }

    /*  */

    public function reviewState(Request $r, $idOrder) {
        $order = Order::where('id', $idOrder)->first();

        $order->reviewState = $r->state;

        $order->save();

        return back();
    }
}
