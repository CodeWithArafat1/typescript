"use strict";
//* union and Intersection
Object.defineProperty(exports, "__esModule", { value: true });
const getAdminDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User Dashboard";
    }
    else {
        return "Guest Dashboard";
    }
};
getAdminDashboard("user");
const chowdhuryShaheb = {
    id: 10,
    name: "Arafat",
    phone: "018392048284",
    designation: "manager",
    teamSize: 20,
};
//# sourceMappingURL=unionAndIntersection.js.map