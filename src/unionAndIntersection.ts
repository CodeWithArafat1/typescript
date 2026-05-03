//* union and Intersection

//? union type
type UserRole = "admin" | "user";

const getAdminDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

getAdminDashboard("user");

//? Intersection

type Employee = {
  id: number;
  name: string;
  phone: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const chowdhuryShaheb: EmployeeManager = {
  id: 10,
  name: "Arafat",
  phone: "018392048284",
  designation: "manager",
  teamSize: 20,
};
