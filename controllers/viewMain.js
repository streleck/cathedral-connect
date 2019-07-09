module.exports = (req, res, next) => {
  res.render('main', {
    pageName: 'main',
    me: {
      username: 'Woods',
      rating: 1000
    }
  });
}