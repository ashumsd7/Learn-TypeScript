// ENUMS

enum Role {ADMIN, READ_ONLY, AUTHOR};
// behind the scenes it receives 
        //{  0         1          2}




        let user={
            role: Role.ADMIN
        }

if(user.role){
    console.log("YES IT IS ADMIN");
}