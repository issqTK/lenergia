<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LandingPage extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'article',
        'btnText',
        'img_src',
        'img_alt',
        'created_at'
    ];
    
}
