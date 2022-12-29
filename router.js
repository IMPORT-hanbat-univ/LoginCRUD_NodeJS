const db = require('../db/config')

const bcrypt=require('bcrypt')
const saltRounds=10

router.post('/register', (req, res, next)=>{
    const param=[req.body.id, req.body.pw, req.body.name]

    bcrypt.hash(param[1], saltRounds, (error, hash)=> {
        param[1]=hash
        db.query('INSERT INTO member(`id`, `pw`, `name`) VALUE (?, ?, ?)', param, (err, row)=>{
            if(err)console.log(err)
        })
        res.end()
    })

})