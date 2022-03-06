import {getConnection , sql, querys }  from '../database';


const getProducts = async (req, res) =>{

   try {
            const pool =  await getConnection();
        const result =  await pool.request().query(querys.getAllProducts);

        res.json(result.recordset);
   } catch (error) {
       return res.status(400).json(error.massage);
   }

}

const newProlduct =  async (req, res)  =>{

 const { name, descripccion } = req.body;
  let { quantity } = req.body;

  // validating
  if (descripccion == null || name == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("descripccion", sql.Text, descripccion)
      .input("quantity", sql.Int, quantity)
      .query(querys.addNewProduct);

    res.json({ name, descripccion, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const getProductById =  async (req, res)  =>{
        const {id} =   req.params
            try {
                        
                    const pool =  await getConnection();
                    const result =   await pool
                            .request()
                            .input("id", id)
                            .query(querys.getProductById)
                    
                    res.json(result.recordset[0]);
            } catch (error) {
                return res.status(400).json({msg:error.massage})
            }
}

const deleteProduct =  async (req, res)  =>{
         const {id} =   req.params;
    try {
        const pool =  await getConnection();
        const result =   await pool
        .request()
        .input("id", id)
        .query(querys.deleteProduct);

        res.json({msg: 'Producto Eliminado Correctamente'});
    } catch (error) {
        return res.status(400).json({msg:error.massage})
    }

}

  const getTotalProducts =  async (req, res)  =>{

            try {
                const pool =  await getConnection();
                const result =   await pool
                .request()
                .query(querys.getTotalProducts);

                res.json(result.recordset[0]['']);
                
            } catch (error) {
                return res.status(400).json({msg:error.massage})
            }


    }

const updateProductById =  async (req, res)  =>{

        const { name, descripccion, quantity } = req.body;
        const {id} =   req.params

  // validating
  if (descripccion == null || name == null || quantity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
      const pool =  await getConnection();
      const result =   await pool
     .request()
      .input("name", sql.VarChar, name)
      .input("descripccion", sql.Text, descripccion)
      .input("quantity", sql.Int, quantity)
      .input("id",sql.Int ,id)
      .query(querys.updateProductById);

      res.json({ name, descripccion , quantity});
  } catch (error) {
      return res.status(400).json({msg:error.massage})
  }


}



export {
    getProducts,
    newProlduct,
    getProductById,
    deleteProduct,
    getTotalProducts,
    updateProductById
}