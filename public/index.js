//combinación de objetos con Object.assing

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

const resultado = Object.assign({}, perfil, region, social);

console.log("objeto combinado: ", resultado);
