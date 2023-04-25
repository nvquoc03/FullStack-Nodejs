require('dotenv').config();
const nodemailer = require("nodemailer");

let sendSimpleEmail = async (dataSend) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'SherlockNguyenDev👻" <quocx2003@gmail.com>', // sender address
        to: dataSend.receiverEmail, // list of receivers
        subject: "Thông tin đặt lịch khám bệnh", // Subject line
        html: `
        <h3>Xin Chào ${dataSend.patientName}</h3>
        <p>Bạn nhận được email này vì đã đặt lịch khám bệnh Online trên SNDdev </p>
        <p>Thông tin đặt lịch khám bênh:</p>
        <p><b>Thời gian: ${dataSend.time}</b></p>
        <p><b>Bác sĩ khám: ${dataSend.doctorName}</b></p>
        <p>
        Nếu thông tin trên là đúng sự thật, vui lòng Click vào đường link bên dướiđể xác nhận và hoàn tất thủ tục đặt lịch khám bệnh
        <p/>
        <div>
            <a href=${dataSend.redirectLink} target="_blank">Click here<a/>
        </div>
        <div>
            Xin chân thành cảm ơn.
        </div>
        `, // html body
    });

}

module.exports = {
    sendSimpleEmail: sendSimpleEmail
}