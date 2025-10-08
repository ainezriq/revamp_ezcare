<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PolicyController extends Controller
{
    public function checkPolicy(Request $request)
    {
        $plateNumber = $request->query('plate_number');
        $phone = $request->query('phone');

        if (!$plateNumber || !$phone) {
            return response()->json(['error' => 'Missing parameters'], 400);
        }

        $response = Http::get('https://www.systemmy.ezcare-warranty.com/api/customer/check-policy', [
            'plate_number' => $plateNumber,
            'phone' => $phone,
        ]);

        return $response->json();
    }
}
