/**
 * Remove todos os valores "falsy" da lista de itens. Lembrando que false, 0, '',
 * null e undefined são valores falsy.
 * 
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
 export function compact (arr:unknown[]) {
  arr = arr.filter(function (n) { 
      return (n !== undefined && n !== null && n !== false && n !== 0 && n !== ""); });
    return arr;
  }