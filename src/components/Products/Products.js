const Products = [
  {
    descripcion: "Caja tapa t/zapato	",
    categoria: "fibrofacil",
    detalle: " Medidas  15x15x3,7  	",
    precio: 127.65,
    imagen: `/img/Cajatapatzapato.jpeg`,
    stock: 5,
  },
  {
    descripcion: "Porta taco c/lapicero	",
    categoria: "fibrofacil",
    detalle: "Ideal para la oficina		",
    precio: 253.0,
    imagen: `/img/Portatacoclapicero.jpeg`,
    stock: 10,
  },
  {
    descripcion: "Caja de té x 2	",
    categoria: "fibrofacil",
    detalle: "Medidas 15x15 ",
    precio: 261.05,
    imagen: `/img/Cajadetéx2.jpeg`,
    stock: 4,
  },
  {
    descripcion: "Cajón Botellón x 4 c/destapador	",
    categoria: "pino",
    detalle: " Medidas 23x23x31 ",
    precio: 944.15,
    imagen: `/img/Botellónx4cdestapador.jpeg`,
    stock: 3,
  },
  {
    descripcion: "Perchero x 3 Nordico	",
    categoria: "pino",
    detalle: "Medida : 48 cm de largo	",
    precio: 657.8,
    imagen: `/img/Percherox3Nordico.jpeg`,
    stock: 5,
  },
  {
    descripcion: "Cajón 3 tiras	",
    categoria: "pino",
    detalle: "Medidas 30x40x20	",
    precio: 997.05,
    imagen: `/img/Cajón3tiras30x40x20.jpeg`,
    stock: 10,
  },
];
export const getProductoById = (id) => {
  return Products[id];
};

export default Products;
