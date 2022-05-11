// router.get('/login', (req, res) => {
//     User.find()
//     .then(userInfo => res.send(userInfo));
// })

// router.post("/register", (req, res) => {
//     const { error } = regValidation(req.body);
//     if(error){
//         return res.status(400).send(error); 
//     }

//     User.findOne({ email: req.body.email })
//     .then(existUser => {
//         if(existUser) {
//             return res.send("Email Already Exist.");
//         }
//     })

//     bcrypt.genSalt(10).then((salt) => {
//         console.log(salt);

//         bcrypt.hash(req.body.password, salt).then(hashPass => {
//             console.log("hash pass:  ", hashPass);
//             const user = new User({
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: hashPass
//             })
//             user.save()
//             .then(saveUser => res.send(saveUser))
//             .catch(err => res.send(err))
//         })
//     });
// })

// router.post('/login', (req, res) => {
//     const { error } = loginValidation(req.body);
//     if(error) {
//         return res.status(400).send(error);
//     }
//     User.findOne({ email: req.body.email})
//     .then()
// })