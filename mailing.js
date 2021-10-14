// https://ethereal.email/
module.exports = {
    service: {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        user: 'shayna.padberg95@ethereal.email',
        password: 'XsW2t5aUbrPuMG6U2E'
    },
    registerVerification: {
        from: 'Exercise <noreply@exercise.com>',
        subject: 'Email Confirmation',
        htmlBodyTemplate:
            `<div style="background-color: #2C2E43;color: white">
                <h1 style="text-align: center;">
                    <strong style="color: #FFD523;">Bienvenido a <span style="color: #FFD523;">Entrenapp</span></strong>
                </h1>
                <p style="text-align: center;">
                    <span>Válido hasta <%EXPIRATION_DATE%></span>
                </p>
                <div style="text-align: center;">
                    <a href="<%CONFIRM_LINK%>">Click para confirmar</a>
                <div>
                <h1 style="text-align: center;">
                    <strong>Tu código es: <span style="color: #FFD523;"><%CODE%></span></strong>
                </h1>
            </div>`,
        confirmationLink: 'http://localhost:8081/verification?email=<%EMAIL%>&code=<%CODE%>',
        codeExpirationInterval: 24 * 60 * 60 * 1000
    }
}