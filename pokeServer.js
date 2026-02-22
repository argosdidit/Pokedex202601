
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Pokedex server running");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});



//connection.connect((err) => {
//  if (err) throw err;
//  console.log('Connected to the database!');
//});

app.get("/", (req, res) => {
  res.send("Pokedex server running");
});


// =======================
// API 定義
// =======================

/*NoのMin値を取得*/
/*http://127.0.0.1:3001/api/poke/minNO*/
app.get('/api/poke/minNo', (req, res) => {
  const AUTONUM = req.query.AUTONUM;
  const query =
  `
  SELECT
  Min(AUTONUM) AS min
  FROM
  POKEDB202601.pokédex0
  `
  connection.query(query, [AUTONUM], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'POKÉMON is not found' });
    } else {
      res.json(results[0]);
    }
  });
});

/*NoのMax値を取得*/
/*http://127.0.0.1:3001/api/poke/maxNO*/
app.get('/api/poke/maxNo', (req, res) => {
  const AUTONUM = req.query.AUTONUM;
  const query =
  `
  SELECT
  Max(AUTONUM) AS max
  FROM
  POKEDB202601.pokédex0
  `
  connection.query(query, [AUTONUM], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'POKÉMON is not found' });
    } else {
      res.json(results[0]);
    }
  });
});

/*タイプ全体の取得*/
/*http://127.0.0.1:3001/api/poke/type*/
app.get('/api/poke/type', (req, res) => {
  const query =
  `
  SELECT
  TYPEID,
  TAIPU,
  TYPE,
  PATHTYPE
  FROM
  POKEDB202601.TYPE
  ORDER BY TYPEID
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});


/*特性全体の取得*/
/*http://127.0.0.1:3001/api/poke/ability*/
app.get('/api/poke/ability', (req, res) => {
  const query =
  `
  SELECT
  ABILITYID,
  TOKUSEI,
  ABILITY
  FROM
  POKEDB202601.ABILITY
  ORDER BY ABILITYID
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});

/*性別全体の取得*/
/*http://127.0.0.1:3001/api/poke/gender*/
app.get('/api/poke/gender', (req, res) => {
  const query =
  `
  SELECT
  GENDERID,
  GENDER
  FROM
  POKEDB202601.GENDER
  ORDER BY GENDERID
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});

/*タマゴグループ全体の取得*/
/*http://127.0.0.1:3001/api/poke/egg_group*/
app.get('/api/poke/egg_group', (req, res) => {
  const query =
  `
  SELECT
  EGG_GROUPID,
  TAMAGO_GROUP,
  EGG_GROUP
  FROM
  POKEDB202601.EGG_GROUP
  ORDER BY EGG_GROUPID
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});


/*地方全体の取得*/
/*http://127.0.0.1:3001/api/poke/region*/
app.get('/api/poke/region', (req, res) => {
  const query =
  `
  SELECT
  REGIONID,
  CHIHO,
  REGION
  FROM
  POKEDB202601.REGION
  ORDER BY REGIONID
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});

/*世代全体の取得*/
/*http://127.0.0.1:3001/api/poke/generation*/
app.get('/api/poke/generation', (req, res) => {
  const query =
  `
  SELECT
  GENERATIONID,
  SEDAI,
  GENERATION
  FROM
  POKEDB202601.GENERATION
  ORDER BY GENERATIONID
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});

/*種族値の取得*/
/*http://127.0.0.1:3001/api/poke/min_max_value*/
app.get('/api/poke/min_max_value', (req, res) => {
  const query =
  `
  SELECT
  MIN(HP) AS MinHP,
  MAX(HP) AS MaxHP,
  MIN(ATTACK) AS MinATTACK,
  MAX(ATTACK) AS MaxATTACK,
  MIN(DEFENSE) AS MinDEFENSE,
  MAX(DEFENSE) AS MaxDEFENSE,
  MIN(SP_ATK) AS MinSP_ATK,
  MAX(SP_ATK) AS MaxSP_ATK,
  MIN(SP_DEF) AS MinSP_DEF,
  MAX(SP_DEF) AS MaxSP_DEF,
  MIN(SPEED) AS MinSPEED,
  MAX(SPEED) AS MaxSPEED,
  MIN(SUM) AS MinSUM,
  MAX(SUM) AS MaxSUM
  FROM
  POKEDB202601.pokédex0
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});


/*PokeのAutonumから全Poke情報を返す*/
// 基本情報取得(1件)
app.get("/api/poke", (req, res) => {
  const AUTONUM = Number(req.query.AUTONUM ?? 1);

  connection.query(
    `
    SELECT
    *
    FROM
    POKEDB202601.pokédex0
    WHERE
    AUTONUM = ?
    `,
    [AUTONUM],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ message: "Pokemon is not found" });
      } else {
        res.json(results[0]);
      }
    }
  );
});



/*Pokeの画像リストを返す*/
app.get("/api/pokelist", (req, res) => {
  connection.query(
    `
    SELECT
    AUTONUM,
    PATH_NORMAL_FRONT,
    PATH_SHINY_FRONT
    FROM
    POKEDB202601.pokédex0
    ORDER BY
    AUTONUM
    `,
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
        return;
      }

      res.json(results); // ← mysql2 は results が rows に相当
    }
  );
});


/*タイプ検索*/
app.post('/api/search/type', (req, res) => {
  const { name, types, region, generation } = req.body;

  let sql = `
    SELECT
    *
    FROM
    POKEDB202601.pokédex0
    WHERE
    1=1
  `;
  const params = [];

  // 名前
  if (name)
  {
    sql += ` AND NAMAE LIKE ?`;
    params.push(`%${name}%`);
  }

  // タイプ(複数)
  if (types && types.length > 0)
  {
    const placeholders = types.map(() => '?').join(',');
    sql +=
    `
    AND
    (
    TYPE1 IN
      (
      SELECT
      TYPE
      FROM
      POKEDB202601.TYPE
      WHERE
      TYPEID IN (${placeholders})
      )
    OR
    TYPE2 IN
      (
      SELECT
      TYPE
      FROM
      POKEDB202601.TYPE
      WHERE
      TYPEID IN (${placeholders})
      )
    )
    `;
    params.push(...types);
    params.push(...types);
  }

  // 地方
  if (region)
  {
    sql +=
    `
    AND REGION =
      (
      SELECT
      REGION
      FROM
      POKEDB202601.REGION
      WHERE
      REGIONID = ?
      )
    `;
    params.push(region);
  }

  // 世代
  if (generation)
  {
    sql +=
    `
    AND GENERATION =
      (
      SELECT
      GENERATION
      FROM
      POKEDB202601.GENERATION
      WHERE
      GENERATIONID = ?
      )
    `;
    params.push(generation);
  }

  sql += ` ORDER BY AUTONUM`;

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});


/*特性検索*/
app.post('/api/search/ability', (req, res) => {
  const { name, abilities, region, generation } = req.body;

  let sql = `
    SELECT
    *
    FROM
    POKEDB202601.pokédex0
    WHERE
    1=1
  `;
  const params = [];

  // 名前
  if (name)
  {
    sql += ` AND NAMAE LIKE ?`;
    params.push(`%${name}%`);
  }

  // 特性(複数)
  if (abilities && abilities.length > 0)
  {
    const placeholders = abilities.map(() => '?').join(',');
    sql +=
    `
    AND
    (
    ABILITY1 IN
      (
      SELECT
      ABILITY
      FROM
      POKEDB202601.ABILITY
      WHERE
      ABILITYID IN (${placeholders})
      )
    OR
    ABILITY2 IN
      (
      SELECT
      ABILITY
      FROM
      POKEDB202601.ABILITY
      WHERE
      ABILITYID IN (${placeholders})
      )
    OR
    HIDDEN_ABILITY IN
      (
      SELECT
      ABILITY
      FROM
      POKEDB202601.ABILITY
      WHERE
      ABILITYID IN (${placeholders})
      )
    )
    `;
    params.push(...abilities);
    params.push(...abilities);
    params.push(...abilities);
  }

  // 地方
  if (region)
  {
    sql +=
    `
    AND REGION =
      (
      SELECT
      REGION
      FROM
      POKEDB202601.REGION
      WHERE
      REGIONID = ?
      )
    `;
    params.push(region);
  }

  // 世代
  if (generation)
  {
    sql +=
    `
    AND GENERATION =
      (
      SELECT
      GENERATION
      FROM
      POKEDB202601.GENERATION
      WHERE
      GENERATIONID = ?
      )
    `;
    params.push(generation);
  }

  sql += ` ORDER BY AUTONUM`;

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});


/*性別検索*/
app.post('/api/search/gender', (req, res) => {
  const { name, genders, region, generation } = req.body;

  let sql = `
    SELECT
    *
    FROM
    POKEDB202601.pokédex0
    WHERE
    1=1
  `;
  const params = [];

  // 名前
  if (name)
  {
    sql += ` AND NAMAE LIKE ?`;
    params.push(`%${name}%`);
  }

  // 性別
  if (genders && genders.length > 0)
  {
    const placeholders = genders.map(() => '?').join(',');
    sql +=
    `
    AND
    (
    GENDER IN
      (
      SELECT
      GENDER
      FROM
      POKEDB202601.GENDER
      WHERE
      GENDERID IN (${placeholders})
      )
    )
    `;
    params.push(...genders);
  }

  // 地方
  if (region)
  {
    sql +=
    `
    AND REGION =
      (
      SELECT
      REGION
      FROM
      POKEDB202601.REGION
      WHERE
      REGIONID = ?
      )
    `;
    params.push(region);
  }

  // 世代
  if (generation)
  {
    sql +=
    `
    AND GENERATION =
      (
      SELECT
      GENERATION
      FROM
      POKEDB202601.GENERATION
      WHERE
      GENERATIONID = ?
      )
    `;
    params.push(generation);
  }

  sql += ` ORDER BY AUTONUM`;

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});

/*タマゴグループ検索*/
app.post('/api/search/egg_group', (req, res) => {
  const { name, egg_groups, region, generation } = req.body;

  let sql = `
    SELECT
    *
    FROM
    POKEDB202601.pokédex0
    WHERE
    1=1
  `;
  const params = [];

  // 名前
  if (name)
  {
    sql += ` AND NAMAE LIKE ?`;
    params.push(`%${name}%`);
  }

  // タマゴグループ(複数)
  if (egg_groups && egg_groups.length > 0)
  {
    const placeholders = egg_groups.map(() => '?').join(',');
    sql +=
    `
    AND
    (
    EGG_GROUP1 IN
      (
      SELECT
      EGG_GROUP
      FROM
      POKEDB202601.EGG_GROUP
      WHERE
      EGG_GROUPID IN (${placeholders})
      )
    OR
    EGG_GROUP2 IN
      (
      SELECT
      EGG_GROUP
      FROM
      POKEDB202601.EGG_GROUP
      WHERE
      EGG_GROUPID IN (${placeholders})
      )
    )
    `;
    params.push(...egg_groups);
    params.push(...egg_groups);
  }

  // 地方
  if (region)
  {
    sql +=
    `
    AND REGION =
      (
      SELECT
      REGION
      FROM
      POKEDB202601.REGION
      WHERE
      REGIONID = ?
      )
    `;
    params.push(region);
  }

  // 世代
  if (generation)
  {
    sql +=
    `
    AND GENERATION =
      (
      SELECT
      GENERATION
      FROM
      POKEDB202601.GENERATION
      WHERE
      GENERATIONID = ?
      )
    `;
    params.push(generation);
  }

  sql += ` ORDER BY AUTONUM`;

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});

/*種族値検索*/
app.post('/api/search/value', (req, res) => {
  const { name, values, region, generation } = req.body;

  let sql = `
    SELECT
    *
    FROM
    POKEDB202601.pokédex0
    WHERE
    1=1
  `;
  const params = [];

  // 名前
  if (name)
  {
    sql += ` AND NAMAE LIKE ?`;
    params.push(`%${name}%`);
  }

  // HP
  if (values[0] !== null && values[1] !== null) {
    const min = Number(values[0]);
    const max = Number(values[1]);
    
    if (Number.isFinite(min) && Number.isFinite(max)) {
      sql += ` AND HP BETWEEN ? AND ?`;
      params.push(min, max);
    }
  }
  
  // ATTACK
  if (values[2] !== null && values[3] !== null) {
    const min = Number(values[2]);
    const max = Number(values[3]);
    if (Number.isFinite(min) && Number.isFinite(max)) {
      sql += ` AND ATTACK BETWEEN ? AND ?`;
      params.push(min, max);
    }
  }
  
  // DEFENSE
  if (values[4] !== null && values[5] !== null) {
    const min = Number(values[4]);
    const max = Number(values[5]);
    if (Number.isFinite(min) && Number.isFinite(max)) {
      sql += ` AND DEFENSE BETWEEN ? AND ?`;
      params.push(min, max);
    }
  }
  
  // SP_ATK
  if (values[6] !== null && values[7] !== null) {
    const min = Number(values[6]);
    const max = Number(values[7]);
    if (Number.isFinite(min) && Number.isFinite(max)) {
      sql += ` AND SP_ATK BETWEEN ? AND ?`;
      params.push(min, max);
    }
  }
  
  // SP_DEF
  if (values[8] !== null && values[9] !== null) {
    const min = Number(values[8]);
    const max = Number(values[9]);
    if (Number.isFinite(min) && Number.isFinite(max)) {
      sql += ` AND SP_DEF BETWEEN ? AND ?`;
      params.push(min, max);
    }
  }
  
  // SPEED
  if (values[10] !== null && values[11] !== null) {
    const min = Number(values[10]);
    const max = Number(values[11]);
    if (Number.isFinite(min) && Number.isFinite(max)) {
      sql += ` AND SPEED BETWEEN ? AND ?`;
      params.push(min, max);
    }
  }
  
  // SUM
  if (values[12] !== null && values[13] !== null) {
    const min = Number(values[12]);
    const max = Number(values[13]);
    if (Number.isFinite(min) && Number.isFinite(max)) {
      sql += ` AND SUM BETWEEN ? AND ?`;
      params.push(min, max);
    }
  }


  // 地方
  if (region)
  {
    sql +=
    `
    AND REGION =
      (
      SELECT
      REGION
      FROM
      POKEDB202601.REGION
      WHERE
      REGIONID = ?
      )
    `;
    params.push(region);
  }

  // 世代
  if (generation)
  {
    sql +=
    `
    AND GENERATION =
      (
      SELECT
      GENERATION
      FROM
      POKEDB202601.GENERATION
      WHERE
      GENERATIONID = ?
      )
    `;
    params.push(generation);
  }

  sql += ` ORDER BY AUTONUM`;

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});

/*フォルム検索*/
app.post('/api/search/form', (req, res) => {
  const { name, forms, region, generation } = req.body;

  let sql = `
    SELECT
    *
    FROM
    POKEDB202601.pokédex0
    WHERE
    1=1
    AND
    FORM IS NOT NULL
  `;
  const params = [];

  // 名前
  if (name)
  {
    sql += ` AND NAMAE LIKE ?`;
    params.push(`%${name}%`);
  }

  // フォルム(複数)
  if (forms && forms.length > 0) {
    const conditions = [];

    forms.forEach(f => {
      switch (f) {
        case 'kindGender':
          conditions.push(`
            (
              SUGATA LIKE '%オスのすがた%'
              OR
              SUGATA LIKE '%メスのすがた%'
            )
          `);
          break;

        case 'kindRegion':
          conditions.push(`
            (
              SUGATA LIKE '%アローラのすがた%'
              OR
              SUGATA LIKE '%ガラルのすがた%'
              OR
              SUGATA LIKE '%ヒスイのすがた%'
              OR
              SUGATA LIKE '%パルデアのすがた%'
            )
          `);
          break;

        case 'kindMegaPrimal':
          conditions.push(`
            (
              SUGATA LIKE 'メガ%'
              OR
              SUGATA LIKE 'ゲンシ%'
            )
          `);
          break;

        case 'kindMax':
          conditions.push(`
            (
              SUGATA LIKE 'キョダイマックス%'
              OR
              SUGATA LIKE 'ムゲンダイマックス%'
            )
          `);
          break;

        case 'kindForm':
          conditions.push(`
            (
              SUGATA NOT LIKE '%オスのすがた%'
              AND
              SUGATA NOT LIKE '%メスのすがた%'
              AND
              SUGATA NOT LIKE 'メガ%'
              AND
              SUGATA NOT LIKE 'ゲンシ%'
              AND
              SUGATA NOT LIKE 'キョダイマックス%'
              AND
              SUGATA NOT LIKE 'ムゲンダイマックス'
              AND
              SUGATA NOT LIKE '%アローラのすがた%'
              AND
              SUGATA NOT LIKE '%ガラルのすがた%'
              AND
              SUGATA NOT LIKE '%ヒスイのすがた%'
              AND
              SUGATA NOT LIKE '%パルデアのすがた%'
            )
          `);
          break;
      }
    });

    if (conditions.length > 0) {
      sql += ` AND ( ${conditions.join(' OR ')} )`;
    }
  }

  // 地方
  if (region)
  {
    sql +=
    `
    AND REGION =
      (
      SELECT
      REGION
      FROM
      POKEDB202601.REGION
      WHERE
      REGIONID = ?
      )
    `;
    params.push(region);
  }

  // 世代
  if (generation)
  {
    sql +=
    `
    AND GENERATION =
      (
      SELECT
      GENERATION
      FROM
      POKEDB202601.GENERATION
      WHERE
      GENERATIONID = ?
      )
    `;
    params.push(generation);
  }

  sql += ` ORDER BY AUTONUM`;

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});

/***********************************************************************/



/*MoveのAutonumから全Move情報を返す*/
app.get('/api/move', (req, res) => {
  const AUTONUM = req.query.AUTONUM;
  const query = 'SELECT * FROM POKEDB202601.movedex0 WHERE AUTONUM = ?';
  connection.query(query, [AUTONUM], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'Move is not found' });
    } else {
      res.json(results[0]);
    }
  });
});

/*MoveのAutonumから全Move情報を返す*/
app.get('/api/ability', (req, res) => {
  const ABILITYID = req.query.ABILITYID;
  const query = 'SELECT ABILITYID, TOKUSEI, ABILITY FROM POKEDB202601.ABILITY WHERE ABILITYID = ?';
  connection.query(query, [ABILITYID], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'Move is not found' });
    } else {
      res.json(results[0]);
    }
  });
});

/*全Pokeの種族値の最大値を返す*/
app.get('/api/individual_max', (req, res) => {
  const query ='SELECT MAX(HP), MAX(ATTACK), MAX(DEFENSE),MAX(SP_ATK), MAX(SP_DEF), MAX(SPEED), MAX(SUM) FROM POKEDB202601.pokédex0;';
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const value = results[0].value;
      res.json({ value });
    }
  });
});

/*全PokeのCountを返す*/
app.get('/api/poke_count', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM POKEDB202601.pokédex0';
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const count = results[0].count;
      res.json({ count });
    }
  });
});

/*全MoveのCountを返す*/
app.get('/api/move_count', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM POKEDB202601.movedex';
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const count = results[0].count;
      res.json({ count });
    }
  });
});

/*全Ability1のCountを返す*/
app.get('/api/ability_count', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM POKEDB202601.ABILITY';
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const count = results[0].count;
      res.json({ count });
    }
  });
});

/*TYPEよりMove(TYPE別)のCountを返す*/
app.get('/api/move_type_count', (req, res) => {
  const TYPE = req.query.TYPE;
  const query = 'SELECT COUNT(*) AS count FROM POKEDB202601.movedex WHERE TYPE = ?';
  connection.query(query, [TYPE], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const count = results[0].count;
      res.json({ count });
    }
  });
});

//AUTONUM(POKE)より画像だけを返す
app.get('/api/poke_image', (req, res) => {
  const AUTONUM = req.query.AUTONUM; // クエリパラメータからAUTONUMを取得

  // AUTONUMが存在しない場合や数値でない場合はエラーを返す
  if (!AUTONUM || isNaN(AUTONUM))
  {
    return res.status(400).json({ message: 'Invalid AUTONUM parameter' });
  }
  const query =
  `
  SELECT POKEID, AUTONUM,
  PATH_NORMAL_FRONT, PATH_SHINY_FRONT,
  TYPE1, TYPE2
  FROM POKEDB202601.pokédex0
  WHERE AUTONUM = ?
  `;
  connection.query(query, [AUTONUM], (err, results) =>
  { // AUTONUMをクエリにバインド
    if(err)
    {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ message: 'Internal server error', error: err });
    }
    if(results.length === 0)
    {
      return res.status(404).json({ message: 'POKÉMON not found', AUTONUM: AUTONUM });
    }
    res.json(results[0]);
  });
});

app.get('/api/move_type_start_autonum', (req, res) => {
  const TYPE = req.query.TYPE;
  const query = 'SELECT * FROM POKEDB202601.MOVEDEX WHERE CATEGORY = 1 AND NO = 1 AND TYPE = ?';
  connection.query(query, [TYPE], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const start_autonum = results[0].AUTONUM;
      res.json({ start_autonum });
    }
  });
});



app.get('/api/move_type', (req, res) => {
  const TYPE = req.query.TYPE;
  const query = 'SELECT * FROM MOVEDEX WHERE TYPE = ?';
  connection.query(query, [TYPE], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'Move is not found' });
    } else {
      res.json(results[0]);
    }
  });
});

app.get('/api/show_relation', (req, res) => {
  const MOVEID = req.query.MOVEID;
  const query = 'SELECT * FROM POKEDB202601.RELATION WHERE MOVEID = ?';
  connection.query(query, [MOVEID], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'MOVE is not found' });
    } else {
      res.json(results); // 全ての行を返す
    }
  });
});

app.get('/api/show_relation_pokeid', (req, res) => {
  const POKEID = req.query.POKEID;
  const query = 'SELECT * FROM POKEDB202601.RELATION WHERE POKEID = ?';
  connection.query(query, [POKEID], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'Pokeimon is not found' });
    } else {
      res.json(results); // 全ての行を返す
    }
  });
});

app.get('/api/move_to_poke', (req, res) => {
  const MOVEID = req.query.MOVEID;
  const query =
  `
    SELECT MOVEID, RELATION.POKEID, 
    POKÉDEX3.PATH_NORMAL_FRONT, POKÉDEX3.PATH_SHINY_FRONT,
    RELATION.POKE_AUTONUM
    FROM RELATION
    LEFT JOIN POKÉDEX3
    ON RELATION.POKEID = POKÉDEX3.POKEID
    WHERE MOVEID = ?;
  `;
  connection.query(query, [MOVEID], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'Pokemon is not found' });
    } else {
      res.json(results); // 全ての行を返す
    }
  });
});

app.get('/api/poke_to_move', (req, res) => {
  const POKEID = req.query.POKEID;
  const query =
  `
  SELECT POKEID, RELATION.MOVEID,
  MOVEDEX0.MOVE, MOVEDEX0.WAZA,
  TYPE.TYPEID, MOVEDEX0.TAIPU, MOVEDEX0.TYPE,
  MOVEDEX0.BUNRUI, MOVEDEX0.CATEGORY,
  MOVEDEX0.PP, MOVEDEX0.POWER, MOVEDEX0.ACCURACY,
  MOVEDEX0.GENERATION, MOVEDEX0.SEDAI,
  RELATION.MOVE_AUTONUM
  FROM RELATION
  LEFT JOIN MOVEDEX0
  ON RELATION.MOVEID = MOVEDEX0.MOVEID
  LEFT JOIN TYPE
  ON TYPE.TYPE = MOVEDEX0.TYPE
  WHERE POKEID = ?;
  `;
  connection.query(query, [POKEID], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'Move is not found' });
    } else {
      res.json(results); // 全ての行を返す
    }
  });
});



// POSTリクエストを処理するエンドポイント
app.post('/api/insert_relation', (req, res) => {
  const { POKEID, POKE_AUTONUM, MOVEID, MOVE_AUTONUM, RELATION } = req.body;

  if (!POKEID || !POKE_AUTONUM || !MOVEID || !MOVE_AUTONUM || RELATION === undefined) {
    return res.status(400).json({ message: 'Invalid request body' });
  }

  const query = `INSERT INTO RELATION (POKEID, POKE_AUTONUM, MOVEID, MOVE_AUTONUM, RELATION) VALUES (?, ?, ?, ?, ?)`;
  const values = [POKEID, POKE_AUTONUM, MOVEID, MOVE_AUTONUM, RELATION];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into RELATION table:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'Data inserted into RELATION table successfully' });
  });
});


// RELATIONテーブルからデータを削除するエンドポイント
app.delete('/api/delete_relation', (req, res) => {
  const { POKEID, MOVEID } = req.body; // リクエストボディからデータを取得

  // 必要なデータが提供されていない場合はエラーを返す
  if (!POKEID || !MOVEID) {
    return res.status(400).json({ message: 'Invalid request body' });
  }

  // SQLクエリを作成
  const query = `DELETE FROM RELATION WHERE POKEID = ? AND MOVEID = ?`;
  const values = [POKEID, MOVEID];

  // クエリを実行してデータを削除
  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error deleting data from RELATION table:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ message: 'Data deleted from RELATION table successfully' });
  });
});

//検索エリア
app.get('/api/search/type/single', (req, res) => {
  let TYPE = (req.query.TYPE || '').trim();
  TYPE = TYPE.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除

  console.log('Received TYPE:', TYPE); // デバッグ用にログを出力

  const query =
  `
  SELECT * FROM POKEDB202601.pokédex0
  WHERE
  TYPE1 = ?
  AND
  TYPE2 IS NULL;
  `;
  connection.query(query, [TYPE], (err, results) => {
    if (err) {
      console.error('Database query error:', err); // デバッグ用にエラーを出力
      res.status(500).json({ message: 'Database query error' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Pokemon is not found' });
      } else {
        res.json(results); // 全ての行を返す
      }
    }
  });
});



app.get('/api/search/type/dual', (req, res) => {
  let TYPE1 = (req.query.TYPE1 || '').trim();
  TYPE1 = TYPE1.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除
  let TYPE2 = (req.query.TYPE2 || '').trim();
  TYPE2 = TYPE2.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除

  const query =
  `
  SELECT * FROM POKEDB202601.pokédex0
  WHERE
  TYPE1 = ?
  OR
  TYPE2 = ?;
  `;
  connection.query(query, [TYPE1, TYPE2], (err, results) => {
    if (err) {
      console.error('Database query error:', err); // デバッグ用にエラーを出力
      res.status(500).json({ message: 'Database query error' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Pokemon is not found' });
      } else {
        res.json(results); // 全ての行を返す
      }
    }
  });
});

app.get('/api/search/type/combination', (req, res) => {
  let TYPE1 = (req.query.TYPE1 || '').trim();
  TYPE1 = TYPE1.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除
  let TYPE2 = (req.query.TYPE2 || '').trim();
  TYPE2 = TYPE2.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除

  const query =
  `
  SELECT * FROM POKEDB202601.pokédex0
  WHERE
  TYPE1 = ?
  AND
  TYPE2 = ?;
  `;
  connection.query(query, [TYPE1, TYPE2], (err, results) => {
    if (err) {
      console.error('Database query error:', err); // デバッグ用にエラーを出力
      res.status(500).json({ message: 'Database query error' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Pokemon is not found' });
      } else {
        res.json(results); // 全ての行を返す
      }
    }
  });
});


app.get('/api/search/ability', (req, res) => {
  let ABILITY1 = (req.query.ABILITY1 || '').trim();
  ABILITY1 = ABILITY1.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除
  let ABILITY2 = (req.query.ABILITY2 || '').trim();
  ABILITY2 = ABILITY2.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除
  let HIDDEN_ABILITY = (req.query.HIDDEN_ABILITY || '').trim();
  HIDDEN_ABILITY = HIDDEN_ABILITY.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除
  
  const query =
  `
  SELECT * FROM POKEDB202601.pokédex0
  WHERE
  ABILITY1 = ?
  OR
  ABILITY2 = ?
  OR
  HIDDEN_ABILITY = ?
  `;
  connection.query(query, [ABILITY1, ABILITY2, HIDDEN_ABILITY], (err, results) => {
    if (err) {
      console.error('Database query error:', err); // デバッグ用にエラーを出力
      res.status(500).json({ message: 'Database query error' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Pokemon is not found' });
      } else {
        res.json(results); // 全ての行を返す
      }
    }
  });
});


app.get('/api/search/gender', (req, res) => {
  let GENDER = (req.query.GENDER || '').trim();
  GENDER = GENDER.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除

  console.log('Received GENDER:', GENDER); // デバッグ用にログを出力

  const query =
  `
  SELECT * FROM POKEDB202601.pokédex0
  WHERE GENDER = ?
  `;
  connection.query(query, [GENDER], (err, results) => {
    if (err) {
      console.error('Database query error:', err); // デバッグ用にエラーを出力
      res.status(500).json({ message: 'Database query error' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Pokemon is not found' });
      } else {
        res.json(results); // 全ての行を返す
      }
    }
  });
});


app.get('/api/search/egg_group', (req, res) => {
  let EGG_GROUP = (req.query.EGG_GROUP || '').trim();
  EGG_GROUP = EGG_GROUP.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除

  console.log('Received EGG_GROUP:', EGG_GROUP); // デバッグ用にログを出力

  const query =
  `
  SELECT * FROM POKEDB202601.pokédex0
  WHERE
  EGG_GROUP1 = ?
  OR
  EGG_GROUP2 = ?
  `;
  connection.query(query, [EGG_GROUP, EGG_GROUP], (err, results) => {
    if (err) {
      console.error('Database query error:', err); // デバッグ用にエラーを出力
      res.status(500).json({ message: 'Database query error' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Pokemon is not found' });
      } else {
        res.json(results); // 全ての行を返す
      }
    }
  });
});


app.get('/api/search/region', (req, res) => {
  let REGION = (req.query.REGION || '').trim();
  REGION = REGION.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除

  console.log('Received REGION:', REGION); // デバッグ用にログを出力

  const query =
  `
  SELECT * FROM POKEDB202601.pokédex0
  WHERE REGION = ?
  `;
  connection.query(query, [REGION], (err, results) => {
    if (err) {
      console.error('Database query error:', err); // デバッグ用にエラーを出力
      res.status(500).json({ message: 'Database query error' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Pokemon is not found' });
      } else {
        res.json(results); // 全ての行を返す
      }
    }
  });
});


app.get('/api/search/generation', (req, res) => {
  let GENERATION = (req.query.GENERATION || '').trim();
  GENERATION = GENERATION.replace(/^"|"$/g, ''); // 先頭と末尾のダブルクォーテーションを削除

  console.log('Received GENERATION:', GENERATION); // デバッグ用にログを出力

  const query =
  `
  SELECT * FROM POKEDB202601.pokédex0
  WHERE GENERATION = ?
  `;
  connection.query(query, [GENERATION], (err, results) => {
    if (err) {
      console.error('Database query error:', err); // デバッグ用にエラーを出力
      res.status(500).json({ message: 'Database query error' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Pokemon is not found' });
      } else {
        res.json(results); // 全ての行を返す
      }
    }
  });
});

app.get('/api/search/individual', (req, res) => {
  const MOVEID = req.query.MOVEID;
  const query =
  `
    SELECT MOVEID, RELATION.POKEID, 
    POKÉDEX3.PATH_NORMAL_FRONT, POKÉDEX3.PATH_SHINY_FRONT,
    RELATION.POKE_AUTONUM
    FROM RELATION
    LEFT JOIN POKÉDEX3
    ON RELATION.POKEID = POKÉDEX3.POKEID
    WHERE MOVEID = ?;
  `;
  connection.query(query, [MOVEID], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'Pokemon is not found' });
    } else {
      res.json(results); // 全ての行を返す
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
