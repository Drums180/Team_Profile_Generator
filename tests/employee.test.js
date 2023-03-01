const Employee = require("../lib/employee");

describe ("Employee", () => {
    describe("Initialization", () => {
        it("should return an object with the name property when called with the 'new' keyword", () => {
            const obj = new Employee();
    
            expect("name" in obj).toEqual(true);
        });

        it("should return an object with the id property when called with the 'new' keyword", () => {
            const obj = new Employee();
    
            expect("id" in obj).toEqual(true);
        });

        it("should return an object with the email property when called with the 'new' keyword", () => {
            const obj = new Employee();
    
            expect("email" in obj).toEqual(true);
        });

        it("should set name, id and email when created", () => {
            const name = "David";
            const id = 2;
            const email = "daviddomor180@hotmail.com";
            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name)
            expect(obj.id).toEqual(id)
            expect(obj.email).toEqual(email)
        })
    });

    describe("Methods", () => {
        it("should return the employee's name when getName() is called", () => {
            const name = "David";
            const obj = new Employee(name);

            expect(obj.getName()).toEqual(name);
        });

        it("should return the employee's id when getId() is called", () => {
            const id = 2;
            const obj = new Employee("", id);

            expect(obj.getId()).toEqual(id);
        });

        it("should return the employee's email when getEmail() is called", () => {
            const email = "daviddomor180@hotmail.com";
            const obj = new Employee("", 0, email);

            expect(obj.getEmail()).toEqual(email);
        });

        it("should return 'Employee' when getRole() is called", () => {
            const obj = new Employee();

            expect(obj.getRole()).toEqual('Employee');
        });
    });
});
