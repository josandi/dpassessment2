import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './../service/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  pageEmployees: any[] = [];
  public errorMsg;
  constructor( private _employeeService: EmployeesService ) { }

	public pagination = {
      currentPage: 1,
      numPerPage: 15,
      maxSize: 5
  	};
  	public empPositions = [];
  	public selectedPosition = {};

  	activate() {
	    //this.getAllEmployees();
	    //this.getEmployeePositionList();
	}

	getAllEmployees() {
	    this._employeeService.getAllEmployees()
      .subscribe(data =>
      			this.pageEmployees = data, 
            	error => this.errorMsg = error);
	}

	/*getEmployeePositionList() {
	    EmployeesService.getPositionList().then(function(data){
	        if(data.success!==false){
	            vm.empPositions = data;
	        }
	    });
	}

	deleteEmployee(employee) {
	    console.log("deleteEmployee clicked!");
	}

	getEmployeeAssessments(empId) {
	    EmployeesService.getEmployeeAssessments(empId).then(function(data){
	        if(data.success!==false){
	            vm.assessments = data;
	        }
	    });
	}

	showUserAssessment(assessment) {
	    console.log("showUserAssessment: " + assessment.assessment_name);
	}

	getPageEmployees(){
	    if(vm.employees){
	        var begin = ((vm.pagination.currentPage - 1) * vm.pagination.numPerPage);
	        var end = begin + vm.pagination.numPerPage;
	        vm.pageEmployees = vm.employees.slice(begin, end);
	    }
	}

	concatWithSpace(str1, str2) {
	    var strConcat = str1 + ' ' + str2;
	    return strConcat.trim();
	}

	getFullName(employee) {
	    var concatLname = concatWithSpace(employee.middlename, employee.lastname);
	    return concatWithSpace(employee.firstname, concatLname);
	}

	getPosition(posId) {
	    return $filter('filter')(vm.empPositions, {position_id: posId })[0]
	}

	// modal display

	showEmployee(employee) {
	    vm.isShowOnly = true;
	    vm.employee = employee;
	    vm.selectedPosition = getPosition(employee.position_id);
	    getEmployeeAssessments(vm.employee.employee_id);

	    $ngConfirm({
	        title: '',
	        scope: $scope,
	        contentUrl: 'admin/employees/employee-show.html',
	        type: 'orange',
	        closeIcon: true,
	        escapeKey: true,
	        backgroundDismiss: true,
	        buttons: {
	            btn: {
	                text: 'Close',
	                btnClass: 'btn-warning',
	                action: function(scope, button){
	                    
	                }
	            }
	        }
	    });
	}

	showEdit(employee) {
	    vm.isShowOnly = false;
	    vm.employee = employee;
	    vm.selectedPosition = (employee) ? getPosition(employee.position_id) : vm.empPositions[0];

	    $ngConfirm({
	        title: '',
	        scope: $scope,
	        contentUrl: 'admin/employees/employee-edit.html',
	        type: 'orange',
	        closeIcon: true,
	        escapeKey: true,
	        backgroundDismiss: true,
	        buttons: {
	            btn: {
	                text: (employee) ? 'Update' : 'Save',
	                btnClass: 'btn-warning',
	                action: function(scope, button){
	                    vm.employee.position_id = vm.selectedPosition.position_id;
	                    vm.employee.position = vm.selectedPosition.position;
	                    console.log(vm.employee)
	                }
	            }
	        }
	    });
	}*/

  ngOnInit() {
  	this.getAllEmployees();
  }

}
