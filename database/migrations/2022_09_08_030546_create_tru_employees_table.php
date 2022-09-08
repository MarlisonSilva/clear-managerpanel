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
        Schema::create('tru_employees', function (Blueprint $table) {
            $table->id()->unique();
            $table->unsignedBigInteger('emp_id');
            $table->unsignedBigInteger('tru_id');
            
            $table->foreign('emp_id')->references('id')->on('employees');
            $table->foreign('tru_id')->references('id')->on('trucks');

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
        Schema::dropIfExists('tru_employees');
    }
};
