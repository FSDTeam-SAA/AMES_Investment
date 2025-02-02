<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void {
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone_number')->nullable()->after('email'); 
            $table->boolean('terms_accepted')->default(false)->after('password');
            $table->string('api_key')->nullable()->after('terms_accepted');
            $table->string('secret_key')->nullable()->after('api_key');
            
            // Optional: Remove email_id if not required
            $table->dropColumn('email_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['phone_number', 'terms_accepted', 'api_key', 'secret_key']);
            $table->string('email_id')->nullable(); // Revert `email_id` if needed
        });
    }
};
