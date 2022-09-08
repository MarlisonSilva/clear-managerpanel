<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('zon_op_days', function (Blueprint $table) {
            $table->id()->unique();
            $table->unsignedBigInteger('zon_id');
            $table->unsignedBigInteger('opd_id');
            $table->foreign('zon_id')->references('id')->on('zones');
            $table->foreign('opd_id')->references('id')->on('operation_days');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('zon_op_days');
    }
};
