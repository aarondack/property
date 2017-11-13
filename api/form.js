const FormData = require("form-data");
const form = new FormData();

function updateForm(key, value) {
  form.append(key, value);
}

module.exports = {
  form,
  updateForm
};
