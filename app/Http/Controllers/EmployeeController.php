<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        //return Employee::all();
         return Employee::latest()->paginate(5);
    }

    public function store(Request $request)
    {
        $employee = Employee::create(
            $request->validate([
                'name' => 'required',
                'email' => 'required|email',
                'phone' => 'nullable',
                'department' => 'nullable',
                'position' => 'nullable'
            ])
        );

        return response()->json($employee, 201);
    }

    public function show($id)
    {
        return Employee::findOrFail($id);
    }

    public function update(Request $request, Employee $employee)
    {
        $employee->update($request->all());

        return $employee;
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();

        return response()->json([
            'message' => 'Deleted successfully'
        ]);
    }
}
