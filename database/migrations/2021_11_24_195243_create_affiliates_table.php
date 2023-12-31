<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAffiliatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('affiliates', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('inviter_id')->unsigned();
            $table->foreign('inviter_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('code_affiliate')->required();
            $table->integer('status')->default(1)->comment('1 -> working , 0 -> stopped');
            $table->integer('status_affiliate_rate')->default(0)->comment('0 -> continue');
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
        Schema::dropIfExists('affiliates');
    }
}
