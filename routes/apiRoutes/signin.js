const User = require('../../models/edward/user');
const UserSession = require('../../models/edward/userSession');

module.exports = (app) => {




app.post('api/account/signup',(req,res,next) => {

const { body } = req;
const {
    fistName,
    lastName,
  
    password,
    location
} = body;
let {
    email
} = body;

if (!firstName) {
   return  res.send({
        success: false,
        message: 'First Name cannot be left blank.'
    });
}
    if (!lastName) {
        return res.send({
            success: false,
            message: 'Last Name cannot be left blank.'
        });
    }
        if (!email) {
           return res.send({
                success: false,
                message: ' Email cannot be left blank.'
            });
        }
            if (!password) {
               return  res.send({
                    success: false,
                    message: 'First Name cannot be left blank.'
                });
            }
                if (!location) {
                   return res.send({
                        success: false,
                        message: 'location cannot be left blank.'
                    });

                }

                email = email.toLowerCase();

            User.find({
                email: email



            },
        (err,previousUsers) => {
if (err) {
    return res.send({
        success:false,
        message: 'server error'
    });
    
} else if (previousUsers.length > 0) {
    return res.send({
success: false,
        message: 'Account Already Exists.'
    });
}

const newUser = new User();
newUser.email=email;
newUser.firstName = firstName;
newUser.lastName = lastName;
newUser.location = location;
newUser.password= newUser.generateHash(password);
newUser.save((err, user)=> {
    if (err) {
      return  res.send({
            success:false,
            message: 'server error'
        });
        }
         return res.send({
                success:true,
                message: 'Success!'
            });

            });

        });

        
app.post('api/account/signin',(req,res,next) => {

const { body } = req;
const {
    fistName,
    lastName,
  
    password,
    location
} = body;
let {
    email
} = body;



email = email.toLowerCase();

User.find({
    email: email
}, (err, users) =>  {
    if(err) {
return res.send({
    success: false,
    message:'Error: Server Error'
});
    }
});
if(user.length !=1) {
    return res.send({
        success:false,
        message:'Invalid'
    });
}

const user = users[0];
if(!user.validPassword(password)){
    return res.send({
        success:false,
        message:' Password is invalid.'
    });
}

const userSession = new UserSession();
userSession.userId = user._id;
userSession.save((err,doc)=>{
    if(err){
        return res.send({
            success:false,
            message:'server error'
        });
    }
    return res.send({
        success:true,
        message: "Valid Sign in",
        token:  doc._id
    });
});
    });

});

};



