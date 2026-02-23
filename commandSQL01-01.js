// commandSQL00.js
import pkg from 'pg';
import dotenv from "dotenv";
dotenv.config();

const { Client } = pkg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function dropTables() {
  try {
    await client.connect();
    console.log("DB接続成功");

    // --- 依存関係のある順に削除 ---
    await client.query(`DROP VIEW IF EXISTS pokedex0;`);
    console.log("pokedex0 削除完了");

    await client.query(`DROP VIEW IF EXISTS pokedex1;`);
    console.log("pokedex1 削除完了");

    await client.query(`DROP VIEW IF EXISTS pokedex2;`);
    console.log("pokedex2 削除完了");

    await client.query(`DROP VIEW IF EXISTS pokedex3;`);
    console.log("pokedex3 削除完了");

    await client.query(`DROP VIEW IF EXISTS pokedex4;`);
    console.log("pokedex4 削除完了");

    await client.query(`DROP TABLE IF EXISTS ability;`);
    console.log("ability 削除完了");

    await client.query(`DROP TABLE IF EXISTS generation;`);
    console.log("generation 削除完了");

    await client.query(`DROP TABLE IF EXISTS type;`);
    console.log("type 削除完了");

    await client.query(`DROP TABLE IF EXISTS gender;`);
    console.log("gender 削除完了");

    await client.query(`DROP TABLE IF EXISTS egg_group;`);
    console.log("egg_group 削除完了");

    await client.query(`DROP TABLE IF EXISTS region;`);
    console.log("region 削除完了");

    console.log("すべてのテーブル・ビュー削除が完了しました！");
  } catch (err) {
    console.error("DROP 実行エラー:", err);
  } finally {
    await client.end();
    console.log("DB接続終了");
  }
}

dropTables();
