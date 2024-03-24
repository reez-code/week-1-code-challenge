//A function for calculating an employee's net salary per month
//Takes Basic Salary, Allowances and pension pay as inputs
function netSalaryCalculator (basicSalary, allowances, pensionablePay){
    //Calculates gross salary of employee per month
    let grossSalary = basicSalary + allowances;
    
    //checks the gross salary value and does the NHIF deductions
    if (grossSalary <= 5999){
        grossSalary = grossSalary - 150;
        
    } else if (grossSalary >= 6000 && grossSalary <= 7999 ){
        grossSalary = grossSalary - 300;
        
    } else if (grossSalary >= 8000 && grossSalary <= 11999){
        grossSalary = grossSalary - 400;
        
    } else if (grossSalary >= 12000 && grossSalary <= 14999){
        grossSalary = grossSalary - 500;
        
    } else if (grossSalary >= 15000 && grossSalary <= 19999){
        grossSalary = grossSalary - 600;
        
    }else if (grossSalary >= 20000 && grossSalary <= 24999){
        grossSalary = grossSalary - 750
        
    }else if (grossSalary >= 25000 && grossSalary <= 29999){
        grossSalary = grossSalary - 850;
        
    }else if (grossSalary >= 30000 && grossSalary <= 34999){
        grossSalary = grossSalary - 900;
        
    }else if (grossSalary >= 35000 && grossSalary <= 39999){
        grossSalary = grossSalary - 950;
        
    }else if (grossSalary >= 40000 && grossSalary <= 44999){
        grossSalary = grossSalary - 1000;
        
    }else if (grossSalary >= 45000 && grossSalary <= 49999){
        grossSalary = grossSalary - 1100;
        
    }else if (grossSalary >= 50000 && grossSalary <= 59999){
        grossSalary = grossSalary - 1200;
        
    }else if (grossSalary >= 60000 && grossSalary <= 69999){
        grossSalary = grossSalary - 1300;
        
    }else if (grossSalary >= 70000 && grossSalary <= 79999){
        grossSalary = grossSalary - 1400;
        
    }else if (grossSalary >= 80000 && grossSalary <= 89999){
        grossSalary = grossSalary - 1500;
        
    }else if (grossSalary >= 90000 && grossSalary <= 99999){
        grossSalary = grossSalary - 1600;
        
    }else if (grossSalary >= 100000){
        grossSalary = grossSalary - 1700;
        
    }

   //calculates nssf based on Pensionable pay
   let nssf = pensionablePay * 0.06;

   //calculates taxable income
   let taxableIncome = grossSalary - nssf;

   //calculates Tax and returns net salary
   if (taxableIncome < 24000){
      let tax = taxableIncome * 0.1;
      let netSalary = taxableIncome - tax;

      return (`Your Net Salary is: ${netSalary}`);
     
   } else if(taxableIncome === 24000){
    let tax = taxableIncome * 0.1;
    let netSalary = taxableIncome - tax;

    return (`Your Net Salary is: ${netSalary}`);
  
   } else if (taxableIncome >= 24001 && taxableIncome <= 32333){
      let tax = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
      let netSalary = taxableIncome - tax;

      return (`Your Net Salary is: ${netSalary}`); 
   } else if (taxableIncome >= 32334 && taxableIncome <= 500000){
    let firstSlab = 24000;
    let tax = (24000 * 0.1);
    let secondSlab = 32333 - 24000;
    tax = tax + ((32,333 - 24000) * 0.25);  
    tax = (taxableIncome - (firstSlab + secondSlab)) * 0.30;
    let netSalary = taxableIncome - tax;

   return (`Your Net Salary is: ${netSalary}`);
   } else if (taxableIncome >= 500001 && taxableIncome <= 800000){
    let firstSlab = 24000;
    let tax = (24000 * 0.1);
    let secondSlab = 32333 - 24000;
    tax = tax + ((32,333 - 24000) * 0.25); 
    let thirdSlab = 800000 - 500000; 
    tax = (taxableIncome - (firstSlab + secondSlab + thirdSlab)) * 0.325;
    let netSalary = taxableIncome - tax;

    return (`Your Net Salary is: ${netSalary}`);
   } else if (taxableIncome > 800000){
    let tax = (24000 * 0.1);
    tax = tax + ((32,333 - 24000) * 0.25); 
    tax = tax + ((500000 - 32333) * 0.3);
    tax = tax + ((800000 - 50000) * 0.325); 
    let fourthSlab = (taxableIncome - 800000) * 0.35;
    tax = tax + fourthSlab;
    let netSalary = taxableIncome - tax;
    return (`Your Net Salary is: ${netSalary}`);
   }
    
}

console.log(netSalaryCalculator(70000, 3000, 7000))