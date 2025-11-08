'use strict'
const shopmodel = require('../models/shop.model')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const RoleShop = {
    SHOP:"shopdev",
    WRITE:"write",
    EDITOR:"editor",
    ADMIN:"admin",
    

}
class AccessService{     

     static signUp = async({name, email, password}) =>{
          try{
               // Validate input
               if (!name || !email || !password) {
                    return {
                         code: 'xxx',
                         message: 'Missing required fields: name, email, password'
                    }
               }
               
               const holderShop = await shopmodel.findOne({email}).lean()
               if(holderShop){
                    return {
                         code:'xxx',
                         message:"Shop already registered"
                    }
               }
               const passwordHash = await bcrypt.hash(password,10)
               const newshop = await shopmodel.create({
                    name,email,password:passwordHash,roles:[RoleShop.SHOP]

               })

               if(newshop){
                    // Tạo key pair cho shop theo thuat toan RSA
                    const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
                         modulusLength: 2048,
                         publicKeyEncoding: {
                              type: 'spki',//tieu chuan  hoa
                              format: 'pem'//chuan hoa thanh chuoi pemm <3
                         },
                         privateKeyEncoding: {
                              type: 'pkcs8',
                              format: 'pem'
                         },
                    })
                    
             
                 
                    return {
                         code: 201,
                         metadata: {
                              publicKey,
                              privateKey
                            }
                    }
               }
               
               return {
                    code: 'xxx',
                    message: 'Signup failed'
               }
          }catch(error){
          return {
               code: 'xxx',
               message: error.message,
               status: 'error'
          }

          }
          
     }
}
module.exports = AccessService
