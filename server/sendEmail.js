const nodemailer = require("nodemailer");

// const sendEmail = async (email, subject, text) => {
    // try {
        const transporter = nodemailer.createTransport({
            // host: process.env.HOST,
            service: 'gmail',
            // port: 587,
            // secure: true,
            auth: {
                user: 'dhananjayydv.it@gmail.com',
                pass: 'ranmzudziwjfolqb',
            },
        });

        var mailOptions = {
            from: 'dhananjayydv.it@gmail.com',
            to: 'yadavshilpa2020@gmail.com',
            subject: 'Sending email using nodemailer',
            text: 'hi there this is Dhananjay. How are you doing, hope you are doing quite well. I am sending this mail using nodemailer',
        };
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }
            else{
                console.log('Email sent: ' + info.response);
            }
        })

    //     console.log("email sent sucessfully");
    // } catch (error) {
    //     console.log(error, "email not sent");
    // }
// };

// module.exports = sendEmail;