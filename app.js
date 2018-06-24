var UIcontroller = (function() {
    var DOMString = {
        button: '.add__btn',
        valueTextfield: '.add__value',
        describtionTextfield: '.add__description',
        typeSelector: '.add__type',
        incomeSelector: '.income__list',
        expenseSelector: '.expenses__list',
        typeSelectorID: 'add__typeID'
    };
    
    function getInputData() {
        return {
            sign: document.querySelector(DOMString.typeSelector).value,
            describtion: document.querySelector(DOMString.describtionTextfield).value,
            value: document.querySelector(DOMString.valueTextfield).value
            
        }
    }
    
    
    function addExpenseItem(value, describtion, id) {
        var expenseHtml = '<div class="item clearfix" id="income-%0%"><div class="item__description">%Salary%</div><div class="right clearfix"><div class="item__value">+ %2,100.00%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        
        var new1 = expenseHtml.replace("%0%", id);
        var new2 = new1.replace("%Salary%", describtion);
        var new3 = new2.replace("%2,100.00%", value);
        var element = document.querySelector(DOMString.incomeSelector).insertAdjacentHTML('afterbegin', new3);
        
    }
            
    function addIncomeItem() {
        var expenseHtml = ' <div class="item clearfix" id="expense-%0%"><div class="item__description">%Salary%</div><div class="right clearfix"><div class="item__value">- %2,100.00%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        
        var new1 = expenseHtml.replace("%0%", id);
        var new2 = new1.replace("%Salary%", describtion);
        var new3 = new2.replace("%2,100.00%", value);
        var element = document.querySelector(DOMString.expenseSelector).insertAdjacentHTML('afterbegin', new3);    
    }
    
    function clearInputField() {
//        document.querySelector(DOMString.valueTextfield).value = "";
//        document.querySelector(DOMString.describtionTextfield).value = "";
//        document.getElementById().selectedIndex = "0";
        var fields, fieldsArray;
        fields = document.querySelectorAll(DOMString.valueTextfield + ", " + DOMString.describtionTextfield + ", " + DOMString.typeSelectorID);
        fieldsArray = Array.prototype.slice.call(fields);
        
        fieldsArray.forEach(function(current, index, array) {
            current.value = "";
        });
    }
    
    return {
        DOMString: DOMString,
        getInputFunction: getInputData,
        addexpenseHtmlFunction: addExpenseItem,
        addIncomeHtmlFunction: addIncomeItem,
        clearInputFunction: clearInputField
    }
    
    
})();


var budgetController = (function() {
    var data = {
        incomes: [],
        expenses: [],
        incomeTotal: 0,
        expenseTotal: 0 
    }
   
    //compute total
    function computeTotalIncome(amount) {
        data.incomeTotal += amount;
        return data.ncomeTotal;
    }
    
    function computerTotalExpense(amount) {
        data.expenseTotal += amount;
        return data.expenseTotal;
    }
    
    //function constructor 
     var Expense = function(describtion, value, id) {
         this.describtion = describtion;
         this.value = value;
         this.id = id;
     }
     
     var Income = function(describtion, value, id) {
         this.describtion = describtion;
         this.value = value;
         this.id = id;
     }
    
    function createItem(sign, value, describtion) {
        if (sign === '+') {
            var income;
            if (data.incomes.length == 0) {
                income = new Income(describtion, value, 0);
                data.incomes.pop(income);
            } else {
                income = new Income(describtion, value, data.incomes[incomes.length - 1] + 1);
                data.incomes.pop(income);       
            }
            return income;
        } else {
            var expense;
            if (data.expenses.length == 0) {
                expense = new Expense(describtion, value, 0);
                data.expenses.pop(expense);
            } else {
                expense = new Expense(describtion, value, data.expenses[incomes.length - 1] + 1)
                data.expenses.pop(expense);       
            }
            return expense;
        }
    }
    
    
    
    
    return {
        computeIncome: computeTotalIncome,
        computeExpense: computerTotalExpense,
        createItem: createItem
    }
    
})(); 



var controller = (function(uiController, budgetController) {
    
    //caculate the budget 
    function updateBudget() {
        //1. caculate the budget
        
        //2. return the budget 
        
        //3. display the budget on the UI
        
    }
    
    
    
    
    var clickAddButton = function() {
        
        //input validation 
        if (uiController.getInputFunction().value !== '' || uiController.getInputFunction().describtion !== '') {
                // 1. get the filed input data 
            console.log('value: ' + uiController.getInputFunction().value)
            console.log('describtion: ' + uiController.getInputFunction().describtion)
            console.log('type: ' + uiController.getInputFunction().sign)

            // 2. add the item to the budget controllter
            console.log(budgetController.createItem('-', 0, 'this is my dream'));
            // 3.add the item to the UI
            uiController.addexpenseHtmlFunction('200', 'nishigui', '1');
            // 5. caculate the budget and display the budget on the UI
            updateBudget();


            //clear textfield
            uiController.clearInputFunction(); 
        }
       
    }
    
    
    
    
    
    
    document.querySelector(uiController.DOMString.button).addEventListener("click", clickAddButton);
    
    document.addEventListener('keypress', function(event) {
        console.log(event.keyCode)
        if (event.keyCode === 13) {
            clickButton();
        }
    });
    
    
    
    
})(UIcontroller, budgetController);