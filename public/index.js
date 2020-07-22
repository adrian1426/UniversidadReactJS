//Spread operator

const perfil = {
  nombre: 'Adrian',
  info: {
    nacionalidad: 'brasil'
  }
};

const region = {
  pais: 'Mexico',
  info: {
    municipio: 'naucalpan'
  }
};

const social = {
  facebook: 'adrian.facebook'
};

const resultado = {
  ...perfil,
  ...region,
  ...social,
  info: {
    ...perfil.info,
    ...region.info
  }
};

console.log("objeto combinado: ", resultado);
