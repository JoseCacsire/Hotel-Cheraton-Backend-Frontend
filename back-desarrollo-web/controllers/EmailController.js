import nodemailer from 'nodemailer'


// Controlador para enviar correos electrónicos
export const enviarCorreo = async (req, res) => {
    const correo = req.body.correo;
    console.log("Correo2", correo)
    const contrasena = req.body.contrasena;
    console.log("Contrasena2", contrasena)
    // Configura el transportador de nodemailer
    let transporter = nodemailer.createTransport({
        // Aquí debes proporcionar la configuración de tu servidor de correo
        service: "gmail",
        //Para poder usar recuperar contraseña,modificar esto en EMAILCONTROLLER.JS:
        //El password se crea entrando a verificacion de dos pasos de seguridad en tu cuenta de google(gmail)
        //luego en contraseñas de apliaciones creas el password,para nodemail-demo.
        auth: {
            user: "tu_correo",
            pass: "tu_password_originado_desde_google",
        }
    })
    // Envía el correo electrónico
    try {
        await transporter.sendMail({
            from: '"Hotel cheraton" <cacsire1torres2@gmail.com>',
            to: correo,
            subject: 'Firjoleando',
            text: `Tu contraseña es: ${contrasena}`,
        });
        res.json({
            message: 'Correo enviado correctamente'
        });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({
            message: 'Error al enviar el correo'
        });
    }


}