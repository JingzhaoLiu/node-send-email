'use strict';

const nodemailer = require('nodemailer');
const path = require('path');
const config = require('./config');


let transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    service: "163", // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    // secureConnection: true, // 使用了 SSL
    auth: {
        user: config.user,
        // 这里密码不是qq密码，是你设置的smtp授权码
        pass: config.pass,
    }
});

let mailOptions = {
    from: '"kindel推送"18366626195@163.com', // sender address
    to: '1649541226_c5fc2c@kindle.cn', // list of receivers
    subject: '附件', // Subject line
    // 发送text或者html格式
    // text: 'Hello world?', // plain text body
    // html: '<b>Hello world?</b>', // html body
    attachments: [
        {
            filename: '1.mobi',
            path: path.resolve(__dirname, '1.mobi')
        },
        {
            filename: '查理芒格传.mobi',
            path: path.resolve(__dirname, '查理芒格传.mobi')
        }
    ]
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});