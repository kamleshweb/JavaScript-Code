const employee = [
    {name: "John", id: 100},
    {name: "Jack", id: 101},
    {name: "Dam", id: 102},
    {name: "Porty", id: 103},
    {name: "Kamlesh", id: 101},
    {name: "Ravi", id: 103},
    ]

const uniqueEmployee = employee.filter((obj, index, self) => self.findIndex((o) => o.id === obj.id) === index );
console.log(uniqueEmployee);    
