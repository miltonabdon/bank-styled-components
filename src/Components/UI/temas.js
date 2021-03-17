import {
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro,
  sombraClaro,
  sombraEscuro,
} from "./variaveis";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
  shadow: sombraClaro,
};
export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)",
  shadow: sombraEscuro,
};
