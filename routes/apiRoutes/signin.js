const User = require('../../models/edward/user')


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
    res.end({
        success: false,
        message: 'First Name cannot be left blank.'
    });
}
    if (!lastName) {
        res.end({
            success: false,
            message: 'Last Name cannot be left blank.'
        });
    }
        if (!email) {
            res.end({
                success: false,
                message: ' Email cannot be left blank.'
            });
        }
            if (!password) {
                res.end({
                    success: false,
                    message: 'First Name cannot be left blank.'
                });
            }
                if (!location) {
                    res.end({
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
    res.end({
        success:false,
        message: 'server error'
    });
    
} else if (previousUsers.length > 0) {
    res.end({
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
        res.end({
            success:false,
            message: 'server error'
        });
        }
            res.end({
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

    });

});

};



