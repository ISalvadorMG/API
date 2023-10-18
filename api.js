// javascript
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Criar server
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cadastrosPendentes = [];
app.get('/cadastros/pendentes', (req, res) => {
  res.json(cadastrosPendentes);
});
app.get('/cadastros', (req, res) => {
});

app.post('/cadastros', (req, res) => {
  const { nome, sobrenome, idade, pais } = req.body;
  cadastrosPendentes.push({ Nome, Sobrenome, Idade, Pais });
  enviarNotificacaoEmail();
 res.status(201).json({ mensagem: 'Cadastro realizado com sucesso!' });
});

app.patch('/cadastros/:id', (req, res) => {
  const id = req.params.id;

});

app.delete('/cadastros/:id', (req, res) => {
  const id = req.params.id;
 
});


function enviarNotificacaoEmail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'iaramgsk@gmail.com',
      pass: 'sua-senha'
    }
  });

  const mailOptions = {
    from: 'iaramgsk@gmail.com',
    to: 'iaramgs@hotmail.com,
    subject: 'Cadastro pendente',
    text: 'Existem cadastros pendentes!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
}

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

