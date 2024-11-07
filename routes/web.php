<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\{ ProfileController, FrontController, OrderController, mailController };


Route::get('/', fn() => Inertia::render('Home'))->name('home');
Route::get('/view-mail-content', fn() => view('increasingSolution', ['name' => 'Mohammed']));
Route::get('/about', [FrontController::class, 'aboutUs'])->name('about');
Route::get('/contact', [FrontController::class, 'contactUs'])->name('contact');

// Dashboard Route (Requires both 'auth' and 'verified')
Route::middleware(['auth', 'verified'])->get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');

// Authenticated Routes (Require only 'auth' middleware)
Route::middleware('auth')->group(function () {
    // Profile Routes
    Route::prefix('profile')->name('profile.')->group(function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('destroy');
    });

    // Order Routes
    Route::prefix('orders')->name('orders.')->group(function () {
        Route::get('/', [OrderController::class, 'viewAll'])->name('all');
        Route::post('/update-client/{orderId}', [OrderController::class, 'storeClient']);
        Route::post('/update-order/{orderId}', [OrderController::class, 'storeOrder']);
        Route::post('/create-work/{orderId}', [OrderController::class, 'createWork']);
        Route::get('/delete-work', [OrderController::class, 'deleteWork']);
        Route::post('/review-state/{orderId}', [OrderController::class, 'reviewState']);
    });

    // Mailer Routes
    Route::prefix('mailer')->name('mailer.')->group(function () {
        Route::get('/', [mailController::class, 'viewMailer'])->name('view');
        Route::get('/send', [mailController::class, 'index'])->name('send');
        Route::get('/delete', [mailController::class, 'delete'])->name('delete');
        Route::post('/create', [mailController::class, 'createNew'])->name('createNew');
    });
});

#Maintenance Route
Route::get('down', fn() => \Artisan::call('down') ? 'DONE' : 'Failed');
Route::get('up', fn() => \Artisan::call('up') ? 'DONE' : 'Failed');

#Dynamic Routes
Route::get('/parcour/{params?}', [FrontController::class, 'getJourney'])->name('parcour');
Route::post('/parcour', [FrontController::class, 'saveJourney']);
Route::get('/projet/{slug}', [FrontController::class, 'intermediatePage'])->where('slug', '[a-z0-9-àâçéèêëîïôûùüÿñ]+')->name('intermediate');

Route::inertia('/404', '404')->name('notFound');

require __DIR__.'/auth.php';

Route::get('/{slug}', [FrontController::class, 'landingPage'])->where('slug', '[a-z0-9-àâçéèêëîïôûùüÿñ]+')->name('landing');



