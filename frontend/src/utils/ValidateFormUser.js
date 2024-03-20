function validarEmail(email) {
  // Expressão regular para validação de email
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Retorna true se o email for válido, false caso contrário
  return regexEmail.test(email);
}

export const ValidateFormUser = (data) => {

  const erros = {}

  if(data.name.length < 3){
    erros['name'] = 'mínimo 3 caracteres'
  }

  if(!validarEmail(data.email)){
    erros['email'] = 'Email inválido'
  }

  if(data.password.length < 8){
    erros['password'] = 'mínimo de 8 caracteres'
  }

  if(data.password !== data.confirmPassword){
      erros['confirmPassword'] = "As senhas não coincidem.";
  }

  return erros
}