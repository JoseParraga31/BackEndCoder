class ProductManager {
    static id = 0;
    Nombre;
    products;
    constructor(Nombre){
        this.Nombre;
        this.products = [];   
    }
    productsConstructor(title, description, price, thumbnail,stock){
        const NuevoProducts = {
            id: ProductManager.id,
            title, 
            description, 
            price, 
            thumbnail,
            stock
        };

        this.products.push(NuevoProducts)
        ProductManager.id++;
        return NuevoProducts;
    };
    getProducts(){
        return this.products
    };
    getById(id){
        return this.products.find((prod)=> prod.id === id)||"Product Not found"
    }

}
const Producto = new ProductManager("Tienda chino")
const nuevoProducto = Producto.productsConstructor( "Crema Corporal", "jashdanlwedihqliwhjdnñqkwhjdiqhwiopdh", 2500, "linkDeLaImagen", "12345a", 25 ) 
const nuevoProducto2 = Producto.productsConstructor( "Crema Corporal2", "jashdanlwedihqliwhjdnñqkwhjdiqhwiopdh", 2500, "linkDeLaImagen", "12345a", 25 ) 
console.log(Producto.getById(5))

