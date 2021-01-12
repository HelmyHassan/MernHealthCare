const mongoose = require('mongoose');

const VaccinationSchema = new mongoose.Schema({
  vaccination: {
    type: Object
  },
  children: {
    type: mongoose.Schema.ObjectId,
    ref: 'Children',
    required: true
  }
});

module.exports = mongoose.model('Vaccination', VaccinationSchema);
