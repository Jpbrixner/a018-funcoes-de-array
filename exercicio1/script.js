const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

//Crie duas funcões que recebem como parâmetro um objeto.
//1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

function caixaAlta(objeto1) {
  let maiuscula = [];
  for (let i in objeto1) {
    maiuscula.push(objeto1[i].toUpperCase());
  }
  return maiuscula;
}

//2. A segunda deve retornar os valores do objeto como texto corrido.

function textoCorrido(objeto2) {
  let texto = "";
  for (let i in objeto2) {
    texto += `${objeto2[i]}, `;
  }
  return texto.trim();
}

//3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

function ojtCallBack(obj, callback) {
  console.log(callback(obj));
}

//Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.

ojtCallBack(objeto, caixaAlta);

//Repita o processo para a funcão 2

ojtCallBack(objeto, textoCorrido);
