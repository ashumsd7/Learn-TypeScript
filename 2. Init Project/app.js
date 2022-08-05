// ENUMS
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// behind the scenes it receives 
//{  0         1          2}
var user = {
    role: Role.ADMIN
};
if (user.role) {
    console.log("YES IT IS ADMIN");
}
