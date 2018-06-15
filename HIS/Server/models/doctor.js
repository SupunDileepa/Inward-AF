const mongoose = require("mongoose");
autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose.connection);

const DoctorSchema = mongoose.Schema({
  docId: {
    type: Number,
    required: true
  },
  docName: {
    type: Number,
    required: true
  },
  patients: {
    type: Schema.Types.ObjectId,ref="Patient"
  }
  // addmittedTime: {
  //   type: Time,
  //   required: true
  // }
});
DoctorSchema.plugin(autoIncrement.plugin, { model: "Doctor", field: "docId" });
module.exports = mongoose.model("Doctor", DoctorSchema);
