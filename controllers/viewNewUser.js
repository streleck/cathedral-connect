module.exports = (req, res, next) => {
  res.render('newUser', {
    pageName: 'newUser',
  });
}