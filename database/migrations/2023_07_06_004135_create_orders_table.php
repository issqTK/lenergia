<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained();
            $table->string('logementType');
            $table->string('logementConstruction');
            $table->string('logementSurface');
            $table->string('logementEnergie');
            $table->string('logementEnergieType')->nullable();
            $table->string('currentElectricityBill')->nullable();
            $table->string('kilowattsPerYear')->nullable();
            $table->string('taxIncome')->nullable();
            $table->string('roofType')->nullable();
            $table->string('roofOrientation')->nullable();
            $table->string('interieurSurface')->nullable();
            $table->string('exterieurSurface')->nullable();
            $table->string('exterieurRevetement')->nullable();
            $table->string('surfaceChauffee')->nullable();
            $table->string('eauChaudeSanitaire')->nullable();
            $table->boolean('EspaceExterieur')->nullable();
            $table->string('statusProjet');
            $table->string('travauxAdresse');
            $table->string('utilisateurStatus');
            $table->integer('menageComposition');
            $table->string('menageRevenus');
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
