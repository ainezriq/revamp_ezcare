<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('policies', function (Blueprint $table) {
        $table->id();
        $table->string('plate_number');
        $table->string('phone');
        $table->string('policy_no');
        $table->string('status_code');
        $table->dateTime('activated_at')->nullable();
        $table->dateTime('expired_at')->nullable();
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('policies');
    }
};
