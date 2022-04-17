const jwt = require('jsonwebtoken');
var im = require('imagemagick');
var nodemailer = require('nodemailer');

// const verifyToken = (req, res, next) => {
//   const token =
//     req.body.token || req.query.token || req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, "verySecretKey", function(err, decoded) {
//         if (err) {
//             return res.status(401).send(err);
//         }
//       });
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
//   return next();
// };



// order: [['id', 'ASC']],
// – { offset: 3, limit: 2 }: skip first 3 items, fetch 4th and 5th items.

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const isOwner = req.user.user_id === id;
  
        if (!isOwner) return res.status(500).send('Something broke!');
  
        const user = await User.findOne({ where: { id } });
        const newUserData = { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, age: req.body.age };
  
        if (user) {
            const updatedUser = await User.update(newUserData, { where: { id: user.id } });
            res.send(updatedUser);
        } else {
            res.status(500).send('Something broke!');
        }
    } catch (e) {
        res.status(500).send('Something broke!');
    }
};

const resetPassword = async (req, res) => {
    const { email } = req.body;

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
          user: testAccount.user,
          pass: testAccount.pass, 
        },
      });

      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to: email,
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
      });

      res.status(200).json("");

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log("Message sent: %s", info.messageId);
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      const arePasswordsMatch = await bcrypt.compare(password, user.password);
      const authorized = user && arePasswordsMatch;
  
      if (authorized)
      {
        const token = jwt.sign({ user_id: user.id, email }, "verySecretKey", { expiresIn: "1d" });
        user.token = token;
  
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
        res.status(500).send('Something broke!');
    }
};

const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const oldUser = User.findOne({ email });

        if (oldUser) 
        {
            return res.status(409).send("User Already Exist. Please Login");
        }
        
        const passwordHash = await User.generateHash(password);
        const createdUser = await User.create({ email, password: passwordHash });

        const token = jwt.sign({ user_id: createdUser.id, email: req.body.email }, "verySecretKey", { expiresIn: "1d" });
        createdUser.token = token;
  
        res.status(201).json(createdUser);
    } catch (e) {
        res.status(500).send('Something broke!');
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.send(users);
    } catch (e) {
        res.status(500).send('Something broke!');
    }
};

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ where: { id } });

        res.send(user);
    } catch (e) {
        res.status(500).send('Something broke!');
    }
};

const uploadAvatr = async (req, res) => {
    // console.log(req.file, req.body);
    // res.send(`http://localhost:${PORT}/` + req.file.path);

    // im.resize({
    //     srcPath: 'kittens.jpg',
    //     dstPath: 'kittens-small.jpg',
    //     width:   256
    //   }, function(err, stdout, stderr){
    //     if (err) throw err;
    //     console.log('resized kittens.jpg to fit within 256x256px');
    //   });
}