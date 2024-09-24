const express = require('express');
const api = express();
const{ app } = require("./controller/calculatorController.js")
const calculation = require("./controller/calculatorController.js")
const port = process.env.PORT || 8000;


api.use(express.json());
api.use("/controller/calculate",calculation)
api.get('/', (req,res) => { 
    res.status(200).json({message: "mohad"  })
    }
);

api.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
});



