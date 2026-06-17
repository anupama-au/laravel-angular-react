<?php
use App\Http\Controllers\EmployeeController;

Route::apiResource('employees', EmployeeController::class);

Route::get('/employees/{id}', [EmployeeController::class, 'show']);
Route::put('/employees/{id}', [EmployeeController::class, 'update']);