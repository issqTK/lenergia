<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\Models\Work;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('landing_pages', function (Blueprint $table) {
            DB::statement('SET SESSION sql_require_primary_key=0');
            $table->id();
            $table->foreignIdFor(Work::class);
            $table->string('title');
            $table->string('link_id');
            $table->text('article');
            $table->string('btnText')->nullable();
            $table->string('img_src')->nullable();
            $table->string('img_alt')->nullable();
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('landing_pages');
    }
};
