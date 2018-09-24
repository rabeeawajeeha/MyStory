module.exports = (app) => {




app.post('api/account/signup',(req,res,next) => {

const { body } = req;
const {
    fistName,
    lastName,
    email,
    password,
    location
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
            });

        };




