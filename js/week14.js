// problem 1 with employee array inside

let techCompany = {
  "companyName": "Tech Stars",
  "website": "www.techstars.site",
  //problem 2
  "employees": [
    {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseEligible": true,
      "wfh": true // problem 6
    },
    {
      "firstName": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raiseEligible": true,
      "wfh": false
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raiseEligible": false,
      "wfh": false
    }
  ]
}

// problem 3

function addEmployee(obj, name, jobDepart, jobPosit, earnings, raise, wfh) {
  let newbie = {
    "firstName": name,
    "department": jobDepart,
    "designation": jobPosit,
    "salary": earnings,
    "raiseEligible": raise,
    "wfh": wfh
  };

  obj['employees'].push(newbie);

}

addEmployee(techCompany, "Anna", "Tech", "Executive", 25600, false, true);


// problem 3

function populateEmployees(obj) {
  const section = document.querySelector('section');
  const staff = obj['employees'];
  let totalCompensation = 0;

  for (const newbie of staff) {
    // create HTML elements
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myPara4 = document.createElement('p');
    const myPara5 = document.createElement('p');


    // set HTML elements text with employee
    myH2.textContent = newbie.firstName;
    myPara1.textContent = `Department: ${newbie.department}`;
    myPara2.textContent = `Designation: ${newbie.designation}`;
    myPara3.textContent = `Salary: ${newbie.salary}`;
    myPara4.textContent = `Raise Eligible: ${newbie.raiseEligible}`;
    myPara5.textContent = `Work From Home: ${newbie.wfh}`;

    totalCompensation = totalCompensation + newbie.salary;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);

    section.appendChild(myArticle);
  }

// problem 4

  const myH3 = document.querySelector('h3');
  myH3.textContent = 'Company Information';
  const ciArticle = document.createElement('article');
  const tComp = document.createElement('p')
  tComp.textContent = `Total Compensation: ${totalCompensation}`;
  ciArticle.appendChild(tComp)
  myH3.appendChild(ciArticle);
}

checkEmpRaises(techCompany.employees);
populateEmployees(techCompany);

// problem 5

function checkEmpRaises(employees) {
  let raisePercent = 1.10;
  for (const emp of employees) {
    if (emp.raiseEligible == true) {
      emp.raiseEligible = false;
      emp.salary = (emp.salary * raisePercent);
    }
  }
}
