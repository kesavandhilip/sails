/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ContactController.add()`
   */
  add: function (req, res) {
  	var name = req.body.name
  	var email = req.body.email
  	console.log(req);
  	// console.log(email);
    return res.json({
      username: name,
      email: email,
    });
  }
};

