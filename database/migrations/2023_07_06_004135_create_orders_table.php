<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            DB::statement('SET SESSION sql_require_primary_key=0');
            $table->id();
            $table->foreignId('client_id')->constrained();
            $table->string('logementType')->nullable();
            $table->string('logementConstruction')->nullable();
            $table->string('logementSurface')->nullable();
            $table->string('logementEnergie')->nullable();
            $table->string('logementEnergieType')->nullable();
            $table->string('currentElectricityBill')->nullable();
            $table->string('roofType')->nullable();
            $table->string('roofOrientation')->nullable();
            $table->string('interieurSurface')->nullable();
            $table->string('exterieurSurface')->nullable();
            $table->string('exterieurRevetement')->nullable();
            $table->string('surfaceChauffee')->nullable();
            $table->string('eauChaudeSanitaire')->nullable();
            $table->boolean('EspaceExterieur')->nullable();
            $table->string('statusProjet')->nullable();
            $table->string('travauxAdresse')->nullable();
            $table->string('utilisateurStatus')->nullable();
            $table->integer('menageComposition')->nullable();
            $table->string('menageRevenus')->nullable();
            $table->string('reviewState')->default('en revue');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
