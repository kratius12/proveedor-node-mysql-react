import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient()

router.get('/compras', async (req, res) => {
    try {
        const compras = await prisma.compras.findMany({})
        return res.json(compras)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})
router.get('/compra', async (req, res) => {
    try {
        const compra = await prisma.compras.findFirst({
            where: { idCom: req.params.id }
        })
        return res.json(compra)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})
router.post('/compra', async (req, res) => {
    try {
        const newCom = await prisma.compras.create({
            data: req.body
        })
        return res.json(newCom)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
})
router.put('/compra',async(req,res)=>{
    try{
        const result = await prisma.compras.update({
            where:{idCom:req.body.id},
            data:req.body
        })
        return res.json(result)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
})
router.delete('/compra',async(req,res)=>{
    try{
        const result = await prisma.compras.delete({
            where:{idCom:req.body.id}
        })
        return res.json('Compra eliminada con exito')
    }catch(error){
        return res.status(500).json({message:error.message})
    }
})

export default router