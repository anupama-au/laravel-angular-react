<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    // public function index()
    // {
    //     //return Employee::all();
    //      return Employee::latest()->paginate(5);
    // }
    public function index(Request $request)
    {
        $search = $request->search;

        $employees = Employee::when($search, function ($query, $search) {
            return $query->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%")
                        ->orWhere('phone', 'like', "%{$search}%")
                        ->orWhere('position', 'like', "%{$search}%")
                        ->orWhere('department', 'like', "%{$search}%");
        })
        ->latest()
        ->paginate(5);

        return response()->json($employees);
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
