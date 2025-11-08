'use strict'

const AccessService = require("../services/access.service")

class AccessController{
    signUp = async (req,res,next)=>{
        try {
            console.log("[P] ::signUp::: ", req.body)
            
            // Kiểm tra req.body có tồn tại không
            if (!req.body) {
                return res.status(400).json({
                    code: 'xxx',
                    message: 'Request body is required'
                })
            }
            
            const result = await AccessService.signUp(req.body)
            
            const statusCode = result.code === 201 ? 201 : 400
            return res.status(statusCode).json(result)
        } catch(error) {
            next(error)
        }
    }
}

module.exports = new AccessController()