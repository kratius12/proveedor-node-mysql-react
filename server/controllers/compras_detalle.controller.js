import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router()
const prisma = new PrismaClient()

router.get('/getDetComs', async (req, res) => {
    try {
        const detalleCompras = await prisma.compras_detalle.findMany({})
        return res.json(detalleCompras)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
})
router.get('/getDetCom',async(req,res)=>{
    try{
        const detalleCompra = await prisma.compras_detalle.findFirst({
            where:{id: req.params.id}
        })
        return res.json(detalleCompra)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
})
router.post('/createDetCom',async(req,res)=>{
    try{
        const newDetCom = await prisma.compras_detalle.create({
            data: req.body
        })
        return res.json(newDetCom)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
})
router.put('/editDetCom',async(req,res)=>{
    try{
        const result = await prisma.compras_detalle.update({
            where:{id: req.params.id},
            data: req.body
        })
        return res.json('detalle de compra editado con exito!!')
    }catch(error){
        return res.status(500).json({message: error.message})
    }
})
router.delete('/deleteDetCom',async(req,res)=>{
    try{
        const result = await prisma.compras_detalle.delete({
            where:{id: req.params.id}
        })
        return res.json('detalle de compra eliminado con exito!!')
    }catch(error){
        return res.status(500).json({message: error.message})
    }
})

export default router