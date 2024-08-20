const authMiddleware = (req, res, next) => {
    
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).send('Acesso não autorizado');
    }
  };
  
app.use(express.json());


 module.exports = authMiddleware;
  