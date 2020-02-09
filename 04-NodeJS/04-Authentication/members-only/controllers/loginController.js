// Display Log In on GET
exports.loginGet = (req, res) => {
  res.render('login', { title: 'Log In' });
};

// Display Log In form on POST
