import express from "express";
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const { Client } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// ★ 静的ファイル配信（listen より前）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

// DB 接続設定（Client を使用）
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => console.log("DB接続成功"))
  .catch(err => console.error("DB接続エラー:", err));

// =======================
// API 定義
// =======================

/*NoのMin値を取得*/
/*http://127.0.0.1:3001/api/poke/minNO*/
app.get('/api/poke/minNo', async (req, res) => {
  try {
    const query =
    `
    SELECT
    MIN(autonum) AS min
    FROM
    public.pokedex0
    `;
    const result = await pool.query(query);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'POKÉMON is not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

/*NoのMax値を取得*/
/*http://127.0.0.1:3001/api/poke/maxNO*/
app.get('/api/poke/maxNo', async (req, res) => {
  try {
    const query =
    `
    SELECT
    MAX(autonum) AS max
    FROM
    public.pokedex0
    `;
    const result = await pool.query(query);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'POKÉMON is not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});




/*タイプ全体の取得*/
/*http://127.0.0.1:3001/api/poke/type*/
// タイプ一覧を取得
app.get('/api/poke/type', async (req, res) => {
  try {
    const query = `
      SELECT
        typeid,
        taipu,
        type,
        pathtype
      FROM public.type
      ORDER BY typeid
    `;

    const result = await pool.query(query);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

/*特性全体の取得*/
/*http://127.0.0.1:3001/api/poke/ability*/
// 特性一覧を取得
app.get('/api/poke/ability', async (req, res) => {
  try {
    const query = `
      SELECT
        abilityid,
        tokusei,
        ability
      FROM public.ability
      ORDER BY abilityid
    `;

    const result = await pool.query(query);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


/*性別全体の取得*/
/*http://127.0.0.1:3001/api/poke/gender*/
// 性別一覧を取得
app.get('/api/poke/gender', async (req, res) => {
  try {
    const query = `
      SELECT
        genderid,
        gender
      FROM public.gender
      ORDER BY genderid
    `;

    const result = await pool.query(query);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


/*タマゴグループ全体の取得*/
/*http://127.0.0.1:3001/api/poke/egg_group*/
// タマゴグループ一覧を取得
app.get('/api/poke/egg_group', async (req, res) => {
  try {
    const query = `
      SELECT
        egg_groupid,
        tamago_group,
        egg_group
      FROM public.egg_group
      ORDER BY egg_groupid
    `;

    const result = await pool.query(query);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



/*地方全体の取得*/
/*http://127.0.0.1:3001/api/poke/region*/
// 地方一覧を取得
app.get('/api/poke/region', async (req, res) => {
  try {
    const query = `
      SELECT
        regionid,
        chiho,
        region
      FROM public.region
      ORDER BY regionid
    `;

    const result = await pool.query(query);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


/*世代全体の取得*/
/*http://127.0.0.1:3001/api/poke/generation*/
// 世代一覧を取得
app.get('/api/poke/generation', async (req, res) => {
  try {
    const query = `
      SELECT
        generationid,
        sedai,
        generation
      FROM public.generation
      ORDER BY generationid
    `;

    const result = await pool.query(query);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


/*種族値の取得*/
/*http://127.0.0.1:3001/api/poke/min_max_value*/
// 各種ステータスの最小値・最大値を取得
app.get('/api/poke/min_max_value', async (req, res) => {
  try {
    const query = `
      SELECT
        MIN(hp) AS minhp,
        MAX(hp) AS maxhp,
        MIN(attack) AS minattack,
        MAX(attack) AS maxattack,
        MIN(defense) AS mindefense,
        MAX(defense) AS maxdefense,
        MIN(sp_atk) AS minsp_atk,
        MAX(sp_atk) AS maxsp_atk,
        MIN(sp_def) AS minsp_def,
        MAX(sp_def) AS maxsp_def,
        MIN(speed) AS minspeed,
        MAX(speed) AS maxspeed,
        MIN(sum) AS minsum,
        MAX(sum) AS maxsum
      FROM public.pokedex0
    `;

    const result = await pool.query(query);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



/*PokeのAutonumから全Poke情報を返す*/
// 基本情報取得(1件)
// AUTONUM を指定してポケモン1件を取得
app.get('/api/poke', async (req, res) => {
  try {
    const autonum = Number(req.query.autonum ?? 1);

    const query = `
      SELECT *
      FROM public.pokedex0
      WHERE autonum = $1
    `;

    const result = await pool.query(query, [autonum]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Pokemon is not found' });
    }

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});




/*Pokeの画像リストを返す*/
// ポケモン一覧（番号・通常/色違い画像パス）を取得
app.get('/api/pokelist', async (req, res) => {
  try {
    const query = `
      SELECT
        autonum,
        path_normal_front,
        path_shiny_front
      FROM public.pokedex0
      ORDER BY autonum
    `;

    const result = await pool.query(query);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



/*タイプ検索*/
// タイプ検索
app.post('/api/search/type', async (req, res) => {
  try {
    const { name, types, selectedOption, region, generation } = req.body;

    let sql = `
      SELECT *
      FROM public.pokedex0
      WHERE 1=1
    `;
    const params = [];
    let paramIndex = 1; // PostgreSQL の $1, $2... を管理

    // 名前検索
    if (name) {
      sql += ` AND namae ILIKE $${paramIndex}`;
      params.push(`%${name}%`);
      paramIndex++;
    }

    // タイプ検索
    if (types && types.length > 0) {
      const placeholders = types.map((_, i) => `$${paramIndex + i}`).join(',');

      const typeSql = `
        SELECT type
        FROM public.type
        WHERE typeid IN (${placeholders})
      `;

      switch (selectedOption) {
        case "combination":
          // type1 用のプレースホルダ
          const typeSql1 = types.map((_, i) => `$${paramIndex + i}`).join(", ");
          paramIndex += types.length;
          
          // type2 用のプレースホルダ
          const typeSql2 = types.map((_, i) => `$${paramIndex + i}`).join(", ");
          paramIndex += types.length;
          
          sql += `
            AND
            (
              (
                type1 IN (
                  SELECT type FROM type WHERE typeid IN (${typeSql1})
                )
              )
              OR
              (
                type2 IN (
                  SELECT type FROM type WHERE typeid IN (${typeSql2})
                )
              )
            )
          `;
          params.push(...types); // type1 用
          params.push(...types); // type2 用
          break;
          
        case "single":
          sql += `
            AND (
              type1 IN (${typeSql})
              AND type2 IS NULL
            )
          `;
          params.push(...types);
          paramIndex += types.length;
          break;

        case "type1":
          sql += `
            AND type1 IN (${typeSql})
          `;
          params.push(...types);
          paramIndex += types.length;
          break;

        case "type2":
          sql += `
            AND type2 IN (${typeSql})
          `;
          params.push(...types);
          paramIndex += types.length;
          break;

        default:
          sql += `
            AND (
              type1 IN (${typeSql})
              OR
              type2 IN (${typeSql})
            )
          `;
          params.push(...types, ...types);
          paramIndex += types.length * 2;
          break;
      }
    }

    // 地方
    if (region) {
      sql += `
        AND region = (
          SELECT region
          FROM public.region
          WHERE regionid = $${paramIndex}
        )
      `;
      params.push(region);
      paramIndex++;
    }

    // 世代
    if (generation) {
      sql += `
        AND generation = (
          SELECT generation
          FROM public.generation
          WHERE generationid = $${paramIndex}
        )
      `;
      params.push(generation);
      paramIndex++;
    }

    sql += ` ORDER BY autonum`;

    const result = await pool.query(sql, params);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



/*特性検索*/
// 特性検索
app.post('/api/search/ability', async (req, res) => {
  try {
    const { name, abilities, region, generation } = req.body;

    let sql = `
      SELECT *
      FROM public.pokedex0
      WHERE 1=1
    `;
    const params = [];
    let paramIndex = 1;

    // 名前検索
    if (name) {
      sql += ` AND namae ILIKE $${paramIndex}`;
      params.push(`%${name}%`);
      paramIndex++;
    }

    // 特性検索（複数）
    if (abilities && abilities.length > 0) {

  // ability1 用
  const abilitySql1 = abilities
    .map((_, i) => `$${paramIndex + i}`)
    .join(',');
  paramIndex += abilities.length;

  // ability2 用
  const abilitySql2 = abilities
    .map((_, i) => `$${paramIndex + i}`)
    .join(',');
  paramIndex += abilities.length;

  // hidden_ability 用
  const abilitySql3 = abilities
    .map((_, i) => `$${paramIndex + i}`)
    .join(',');
  paramIndex += abilities.length;

  sql += `
    AND (
      ability1 IN (
        SELECT ability FROM ability WHERE abilityid IN (${abilitySql1})
      )
      OR
      ability2 IN (
        SELECT ability FROM ability WHERE abilityid IN (${abilitySql2})
      )
      OR
      hidden_ability IN (
        SELECT ability FROM ability WHERE abilityid IN (${abilitySql3})
      )
    )
  `;

  params.push(...abilities); // ability1 用
  params.push(...abilities); // ability2 用
  params.push(...abilities); // hidden_ability 用
}


    // 地方
    if (region) {
      sql += `
        AND region = (
          SELECT region
          FROM public.region
          WHERE regionid = $${paramIndex}
        )
      `;
      params.push(region);
      paramIndex++;
    }

    // 世代
    if (generation) {
      sql += `
        AND generation = (
          SELECT generation
          FROM public.generation
          WHERE generationid = $${paramIndex}
        )
      `;
      params.push(generation);
      paramIndex++;
    }

    sql += ` ORDER BY autonum`;

    const result = await pool.query(sql, params);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



/*性別検索*/
// 性別検索
app.post('/api/search/gender', async (req, res) => {
  try {
    const { name, genders, region, generation } = req.body;

    let sql = `
      SELECT *
      FROM public.pokedex0
      WHERE 1=1
    `;
    const params = [];
    let paramIndex = 1;

    // 名前検索
    if (name) {
      sql += ` AND namae ILIKE $${paramIndex}`;
      params.push(`%${name}%`);
      paramIndex++;
    }

    // 性別検索（複数）
    if (genders && genders.length > 0) {
      const placeholders = genders
        .map((_, i) => `$${paramIndex + i}`)
        .join(',');

      sql += `
        AND gender IN (
          SELECT gender
          FROM public.gender
          WHERE genderid IN (${placeholders})
        )
      `;

      params.push(...genders);
      paramIndex += genders.length;
    }

    // 地方
    if (region) {
      sql += `
        AND region = (
          SELECT region
          FROM public.region
          WHERE regionid = $${paramIndex}
        )
      `;
      params.push(region);
      paramIndex++;
    }

    // 世代
    if (generation) {
      sql += `
        AND generation = (
          SELECT generation
          FROM public.generation
          WHERE generationid = $${paramIndex}
        )
      `;
      params.push(generation);
      paramIndex++;
    }

    sql += ` ORDER BY autonum`;

    const result = await pool.query(sql, params);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


/*タマゴグループ検索*/
// タマゴグループ検索
app.post('/api/search/egg_group', async (req, res) => {
  try {
    const { name, egg_groups, region, generation } = req.body;

    let sql = `
      SELECT *
      FROM public.pokedex0
      WHERE 1=1
    `;
    const params = [];
    let paramIndex = 1;

    // 名前検索
    if (name) {
      sql += ` AND namae ILIKE $${paramIndex}`;
      params.push(`%${name}%`);
      paramIndex++;
    }

    // タマゴグループ検索（複数）
    if (egg_groups && egg_groups.length > 0) {
      const placeholders = egg_groups
        .map((_, i) => `$${paramIndex + i}`)
        .join(',');

      const eggSql = `
        SELECT egg_group
        FROM public.egg_group
        WHERE egg_groupid IN (${placeholders})
      `;

      sql += `
        AND (
          egg_group1 IN (${eggSql})
          OR egg_group2 IN (${eggSql})
        )
      `;

      // egg_group1 と egg_group2 の2回分
      params.push(...egg_groups, ...egg_groups);
      paramIndex += egg_groups.length * 2;
    }

    // 地方
    if (region) {
      sql += `
        AND region = (
          SELECT region
          FROM public.region
          WHERE regionid = $${paramIndex}
        )
      `;
      params.push(region);
      paramIndex++;
    }

    // 世代
    if (generation) {
      sql += `
        AND generation = (
          SELECT generation
          FROM public.generation
          WHERE generationid = $${paramIndex}
        )
      `;
      params.push(generation);
      paramIndex++;
    }

    sql += ` ORDER BY autonum`;

    const result = await pool.query(sql, params);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


/*種族値検索*/
// 種族値レンジ検索
app.post('/api/search/value', async (req, res) => {
  try {
    const { name, values, region, generation } = req.body;

    let sql = `
      SELECT *
      FROM public.pokedex0
      WHERE 1=1
    `;
    const params = [];
    let paramIndex = 1;

    // 名前検索
    if (name) {
      sql += ` AND namae ILIKE $${paramIndex}`;
      params.push(`%${name}%`);
      paramIndex++;
    }

    // 種族値レンジ検索（HP, ATTACK, DEFENSE, SP_ATK, SP_DEF, SPEED, SUM）
    const fields = [
      "hp", "attack", "defense",
      "sp_atk", "sp_def", "speed", "sum"
    ];

    for (let i = 0; i < fields.length; i++) {
      const min = values[i * 2];
      const max = values[i * 2 + 1];

      if (min !== null && max !== null) {
        const minNum = Number(min);
        const maxNum = Number(max);

        if (Number.isFinite(minNum) && Number.isFinite(maxNum)) {
          sql += ` AND ${fields[i]} BETWEEN $${paramIndex} AND $${paramIndex + 1}`;
          params.push(minNum, maxNum);
          paramIndex += 2;
        }
      }
    }

    // 地方
    if (region) {
      sql += `
        AND region = (
          SELECT region
          FROM public.region
          WHERE regionid = $${paramIndex}
        )
      `;
      params.push(region);
      paramIndex++;
    }

    // 世代
    if (generation) {
      sql += `
        AND generation = (
          SELECT generation
          FROM public.generation
          WHERE generationid = $${paramIndex}
        )
      `;
      params.push(generation);
      paramIndex++;
    }

    sql += ` ORDER BY autonum`;

    const result = await pool.query(sql, params);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


/*フォルム検索*/
// フォルム検索
app.post('/api/search/form', async (req, res) => {
  try {
    const { name, forms, region, generation } = req.body;

    let sql = `
      SELECT *
      FROM public.pokedex0
      WHERE 1=1
      AND form IS NOT NULL
    `;
    const params = [];
    let paramIndex = 1;

    // 名前検索
    if (name) {
      sql += ` AND namae ILIKE $${paramIndex}`;
      params.push(`%${name}%`);
      paramIndex++;
    }

    // フォルム検索（複数）
    if (forms && forms.length > 0) {
      const conditions = [];

      forms.forEach(f => {
        switch (f) {
          case 'kindGender':
            conditions.push(`
              (
                sugata ILIKE '%オスのすがた%'
                OR sugata ILIKE '%メスのすがた%'
              )
            `);
            break;

          case 'kindRegion':
            conditions.push(`
              (
                sugata ILIKE '%アローラのすがた%'
                OR sugata ILIKE '%ガラルのすがた%'
                OR sugata ILIKE '%ヒスイのすがた%'
                OR sugata ILIKE '%パルデアのすがた%'
              )
            `);
            break;

          case 'kindMegaPrimal':
            conditions.push(`
              (
                sugata ILIKE 'メガ%'
                OR sugata ILIKE 'ゲンシ%'
              )
            `);
            break;

          case 'kindMax':
            conditions.push(`
              (
                sugata ILIKE 'キョダイマックス%'
                OR sugata ILIKE 'ムゲンダイマックス%'
              )
            `);
            break;

          case 'kindForm':
            conditions.push(`
              (
                sugata NOT ILIKE '%オスのすがた%'
                AND sugata NOT ILIKE '%メスのすがた%'
                AND sugata NOT ILIKE 'メガ%'
                AND sugata NOT ILIKE 'ゲンシ%'
                AND sugata NOT ILIKE 'キョダイマックス%'
                AND sugata NOT ILIKE 'ムゲンダイマックス%'
                AND sugata NOT ILIKE '%アローラのすがた%'
                AND sugata NOT ILIKE '%ガラルのすがた%'
                AND sugata NOT ILIKE '%ヒスイのすがた%'
                AND sugata NOT ILIKE '%パルデアのすがた%'
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
    if (region) {
      sql += `
        AND region = (
          SELECT region
          FROM public.region
          WHERE regionid = $${paramIndex}
        )
      `;
      params.push(region);
      paramIndex++;
    }

    // 世代
    if (generation) {
      sql += `
        AND generation = (
          SELECT generation
          FROM public.generation
          WHERE generationid = $${paramIndex}
        )
      `;
      params.push(generation);
      paramIndex++;
    }

    sql += ` ORDER BY autonum`;

    const result = await pool.query(sql, params);
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


/***********************************************************************/