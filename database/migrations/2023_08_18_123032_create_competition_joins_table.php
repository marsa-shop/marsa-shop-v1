<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompetitionJoinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('competition_joins', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("competition_id");
            $table->foreign("competition_id")->on("competitions")->references("id")->onDelete("cascade");
            $table->string("mobile");
            $table->string('code');
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
        Schema::dropIfExists('competition_joins');
    }
}
