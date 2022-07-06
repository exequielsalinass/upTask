import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c2f51505aba62f",
      pass: "748ba661ce4f64",
    },
  });

  // Información del email
  // Para agregar estilos: forma linea de styles...

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "Up-Task - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en UpTask",
    html: `<p>Hola: ${nombre}, comprueba tu cuenta en UpTaks</p>
    <p>Tu cuenta ya esta casi lista, solo debes darle 'click' al siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
    </p>
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  //TODO: Mover hacia variables de entorno
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c2f51505aba62f",
      pass: "748ba661ce4f64",
    },
  });

  // Información del email
  // Para agregar estilos: forma linea de styles...

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "Up-Task - Restablece tu contraseña",
    text: "Restablece tu contraseña en UpTask",
    html: `<p>Hola: ${nombre}, restablece tu contraseña en UpTaks</p>
    <p>Para generar un nuevo password, solo debes darle 'click' al siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablece tu contraseña</a>
    </p>
    <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    
    `,
  });
};
