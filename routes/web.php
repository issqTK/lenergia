<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\OrderController;


Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/test', function () {
    return Inertia::render('test');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/commandes', [OrderController::class, 'viewAll'])->name('orders');
    
    Route::post('/update-client/{idOrder}', [OrderController::class, 'storeClient']);
    
    Route::post('/update-order/{idOrder}', [OrderController::class, 'storeOrder']);
    
    Route::get('/delete-work', [OrderController::class, 'deleteWork']);
    
    Route::post('/create-work/{idOrder}', [OrderController::class, 'createNewWork']);
    
    Route::post('/review-state/{idOrder}', [OrderController::class, 'reviewState']);

});

Route::get('/parcour/{params?}', [FrontController::class, 'getJourney'])->name('parcour');

Route::post('/parcour', [FrontController::class, 'saveJourney']);

require __DIR__.'/auth.php';

Route::inertia('/404', '404')->name('notFound');



Route::get('/projet/{slug}',[FrontController::class, 'intermediatePage'])->where(['slug' => '[a-z0-9-àâçéèêëîïôûùüÿñ]+'])->name('intermediate');
Route::get('/{slug}',[FrontController::class, 'landingPage'])->where(['slug' => '[a-z0-9-àâçéèêëîïôûùüÿñ]+'])->name('landing');




