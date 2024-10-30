<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'logementType',
        'logementConstruction',
        'logementSurface',
        'logementEnergie',
        'logementEnergieType',
        'currentElectricityBill',
        'roofType',
        'roofOrientation',
        'interieurSurface',
        'exterieurSurface',
        'exterieurRevetement',
        'surfaceChauffee',
        'eauChaudeSanitaire',
        'EspaceExterieur',
        'statusProjet',
        'travauxAdresse',
        'utilisateurStatus',
        'menageComposition',
        'menageRevenus',
    ];

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    public function works():  HasMany
    {
        return $this->hasMany(orderWork::class);
    }
}
