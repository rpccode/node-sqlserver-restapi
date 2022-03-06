export const querys = {
    getAllProducts:'SELECT * FROM products;',
    addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, descripccion, Quantity) VALUES (@name,@descripccion,@quantity);",
    getProductById: 'SELECT * FROM products where id = @id ;',
    deleteProduct:'DELETE FROM products where id = @id;',
    getTotalProducts:'select COUNT(*) from products;',
    updateProductById:"UPDATE products SET name = @name , descripccion = @descripccion , Quantity = @quantity where id = @id"
}