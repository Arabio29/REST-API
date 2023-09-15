const mongoose = require("mongoose");

// Conecta a la base de datos MongoDB
mongoose.connect('mongodb://localhost/empleados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;