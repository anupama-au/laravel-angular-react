<?php
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\AuthController;

Route::apiResource('employees', EmployeeController::class);

Route::get('/employees/{id}', [EmployeeController::class, 'show']);
Route::put('/employees/{id}', [EmployeeController::class, 'update']);

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('employees', EmployeeController::class);
});