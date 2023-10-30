import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const router = Router()

router.get('/getMats', async (req, res) => {
    try {
        const materiales = await prisma.materiales.findMany({})
        return res.send(materiales)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})
router.get('/mat/:idmat', async (req, res) => {
    try {
        const matFound = await prisma.materiales.findFirst({
            where: {
                idmat: parseInt(req.params.idmat)
            }
        })
        return res.json(matFound)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
)
router.put('/mat/:idmat', async (req, res) => {
    try {
        const matFound = await prisma.materiales.update({
            where: {
                idmat: parseInt(req.params.idmat)
            }, data: req.body
        })
        return res.json(matFound)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
)
router.delete('/mat/:idmat', async (req, res) => {
    try {
        const result = await prisma.materiales.delete({
            where: { 
                idmat: parseInt(req.params.idmat) 
            }
        })
        return res.json("mateedor eliminado con exito!!")
    } catch (error) {

    }
})



router.post('/mat',async(req,res)=>{
    try {
        const newmat = await prisma.mateedor.create({
            data: req.body
        })
        return res.json(newmat)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

export default router
