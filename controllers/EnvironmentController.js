const Environment = require('../models/EnvironmentModel');

// const createEnvironment = async (req, res, next) => {
//   console.log('Entrou na função createEnvironment');
//   console.log(req.body);
//   try {
//     const userId = req.user._id;
//     const newEnvironment = new Environment({
//       name: req.body.name,
//       user: userId,
//     });

//     const savedEnvironment = await newEnvironment.save();

//     res.status(201).json({ success: true, message: 'Ambiente criado com sucesso!', environment: savedEnvironment });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Erro ao criar o ambiente.', error: error.message });
//   }
// };

const createEnvironment = async (req, res, next) => {
  console.log('Entrou na função createEnvironment');
  console.log('Req Body:', req.body);
  try{
    const userId = req.user._id; 
    const { name } = req.body;
    const existingEnvironment = await Environment.findOne({ name }) 
    const environments = await Environment.find({ user: userId }).populate('room').exec();
    if (existingEnvironment) {
      return res.send({
          success: false,
          message: "User already exists",
        });
      }
        const savedEnvironment = await newEnvironment.save();
        console.log('Saved Environment:', savedEnvironment); 
        
      res.status(201).json({ success: true, message: 'Ambiente criado com sucesso!', environment: savedEnvironment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao criar o ambiente.', error: error.message });
  }
};



const getUserEnvironments = async (req, res, next) => {
  console.log('chegueeei')
  try {
    const userId = req.user._id; 
    const environments = await Environment.find({ user: userId }).populate('room').exec();

    res.status(200).json({ message: 'Ambientes do usuário recuperados com sucesso!', environments });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar ambientes do usuário.' });
  }
};

module.exports ={
  createEnvironment,
  getUserEnvironments,
  // createEnvironmentForTesting
}
