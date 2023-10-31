import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


const router = Router()

router.get('/provs', async (req, res) => {
    try {
        const proveedores = await prisma.proveedor.findMany({})
        return res.send(proveedores)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})
router.get('/prov/:idProv', async (req, res) => {
    try {
        const provFound = await prisma.proveedor.findFirst({
            where: {
                idProv: parseInt(req.params.idProv)
            }
        })
        return res.json(provFound)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
)
router.put('/prov/:idProv', async (req, res) => {
    try {
        const provFound = await prisma.proveedor.update({
            where: {
                idProv: parseInt(req.params.idProv)
            }, data: req.body
        })
        return res.json(provFound)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
)
router.delete('/prov/:idProv', async (req, res) => {
    try {
        const result = await prisma.proveedor.delete({
            where: { 
                idProv: parseInt(req.params.idProv) 
            }
        })
        return res.json("proveedor eliminado con exito!!")
    } catch (error) {

    }
})



router.post('/newprov',async(req,res)=>{
    try {
        const newProv = await prisma.proveedor.create({
            data: req.body
        })
        return res.json(newProv)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

export default router
