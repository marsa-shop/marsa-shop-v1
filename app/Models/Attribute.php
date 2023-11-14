<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
    protected $fillable = [
        'key',
        'lang',
        'value',
        'store_id'
    ];

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        static::saving(function ($model) {
            $model->lang = app()->getLocale();
        });
    }
}