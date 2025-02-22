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
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('agreedToTerms')->default(false);  // Assuming it's a boolean
            $table->integer('riskLevel'); // Assuming it's an integer
            $table->text('requirements')->nullable(); // Assuming it's a text field
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['agreedToTerms', 'riskLevel', 'requirements']);
        });
    }
};
