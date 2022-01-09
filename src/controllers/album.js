const getDb = require('../services/db')

  exports.create = async (req, res) => {
      const db = await getDb();
      const { name, year } = req.body;
     // const artistId = req.params.id;


      try {
        await db.query(`INSERT INTO Album (name, year) VALUES (?,?)`, [
            name,
            year,
          //  artistId
    
        ]);
    
        res.sendStatus(201);
      } catch (err) {
        res.sendStatus(500).json(err);
      }
    
      db.close();
    };

  exports.read = async (_, res) => {
    const db = await getDb();
  
    try {
      const [albums] = await db.query(`SELECT * FROM Album`);
  
      res.status(200).json(albums);
    } catch (err) {
      res.status(500).json(err);
    }
  
    db.close();
  };

  exports.readById = async (req, res) => {
    const db = await getDb();
    const { artistId } = req.params;
    
      const [[artist]] = await db.query(`SELECT * FROM Album WHERE id = ?`, [
          artistId,
      ]);
  
      if (!artist) {
        res.sendStatus(404);
      } else {
          res.status(200).json(artist);
      }

      db.close();
  };

  exports.update = async (req, res) => {
    const db = await getDb();
    const data = req.body;
    const { artistId } = req.params;
    

    try {
        const [
          { affectedRows },
        ] = await db.query('UPDATE Album SET ? WHERE id = ?', [
            data, 
            artistId
        ]);
 
        
        if (!affectedRows) {
          res.sendStatus(404);
        } else {
          res.status(200).send();
        }
      } catch (err) {
        res.sendStatus(500);
      }

      db.close();
  };


  exports.destroy = async (req, res) => {
    const db = await getDb();
    const { artistId } = req.params;
    

    try {
        const [
          { affectedRows },
        ] = await db.query('DELETE FROM Album WHERE id = ?', [
            artistId
        ]);
 
        
        if (!affectedRows) {
          res.sendStatus(404);
        } else {
          res.status(200).send();
        }
      } catch (err) {
        res.sendStatus(500);
      }

      db.close();
  };

