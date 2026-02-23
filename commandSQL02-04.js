// commandSQL02.js
import pkg from 'pg';
import dotenv from "dotenv";
dotenv.config();

const { Client } = pkg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function insertPokedex4() {
  try {
    await client.connect();
    console.log("DB接続成功");

    await client.query(
    `
    INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00010101', '0001', 'フシギダネ', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00020101', '0002', 'フシギソウ', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00030101', '0003', 'フシギバナ', 'オスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00030102', '0003', 'フシギバナ', 'メスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00030201', '0003', 'フシギバナ', 'メガフシギバナ', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00030301', '0003', 'フシギバナ', 'キョダイマックスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00040101', '0004', 'ヒトカゲ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00050101', '0005', 'リザード', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00060101', '0006', 'リザードン', 'type-chart/bright/02-10.html', 'type-chart/dark/02-10.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00060201', '0006', 'リザードン', 'メガリザードンX', 'type-chart/bright/02-15.html', 'type-chart/dark/02-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00060301', '0006', 'リザードン', 'メガリザードンY', 'type-chart/bright/02-10.html', 'type-chart/dark/02-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00060401', '0006', 'リザードン', 'キョダイマックスのすがた', 'type-chart/bright/02-10.html', 'type-chart/dark/02-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00070101', '0007', 'ゼニガメ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00080101', '0008', 'カメール', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00090101', '0009', 'カメックス', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00090201', '0009', 'カメックス', 'メガカメックス', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00090301', '0009', 'カメックス', 'キョダイマックスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00100101', '0010', 'キャタピー', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00110101', '0011', 'トランセル', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00120101', '0012', 'バタフリー', 'オスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00120102', '0012', 'バタフリー', 'メスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00120201', '0012', 'バタフリー', 'キョダイマックスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00130101', '0013', 'ビードル', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00140101', '0014', 'コクーン', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00150101', '0015', 'スピアー', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00150201', '0015', 'スピアー', 'メガスピアー', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00160101', '0016', 'ポッポ', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00170101', '0017', 'ピジョン', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00180101', '0018', 'ピジョット', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00180201', '0018', 'ピジョット', 'メガピジョット', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00190101', '0019', 'コラッタ', 'オスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00190102', '0019', 'コラッタ', 'メスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00190201', '0019', 'コラッタ', 'アローラのすがた', 'type-chart/bright/01-16.html', 'type-chart/dark/01-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00200101', '0020', 'ラッタ', 'オスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00200102', '0020', 'ラッタ', 'メスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00200201', '0020', 'ラッタ', 'アローラのすがた', 'type-chart/bright/01-16.html', 'type-chart/dark/01-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00210101', '0021', 'オニスズメ', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00220101', '0022', 'オニドリル', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00230101', '0023', 'アーボ', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00240101', '0024', 'アーボック', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00250101', '0025', 'ピカチュウ', 'オスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00250102', '0025', 'ピカチュウ', 'メスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00250201', '0025', 'ピカチュウ', 'キョダイマックスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00260101', '0026', 'ライチュウ', 'オスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00260102', '0026', 'ライチュウ', 'メスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00260201', '0026', 'ライチュウ', 'アローラのすがた', 'type-chart/bright/05-11.html', 'type-chart/dark/05-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00260301', '0026', 'ライチュウ', 'メガライチュウX', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00260401', '0026', 'ライチュウ', 'メガライチュウY', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00270101', '0027', 'サンド', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00270201', '0027', 'サンド', 'アローラのすがた', 'type-chart/bright/06-17.html', 'type-chart/dark/06-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00280101', '0028', 'サンドパン', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00280201', '0028', 'サンドパン', 'アローラのすがた', 'type-chart/bright/06-17.html', 'type-chart/dark/06-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00290101', '0029', 'ニドラン♀', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00300101', '0030', 'ニドリーナ', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00310101', '0031', 'ニドクイン', 'type-chart/bright/08-09.html', 'type-chart/dark/08-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00320101', '0032', 'ニドラン♂', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00330101', '0033', 'ニドリーノ', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00340101', '0034', 'ニドキング', 'type-chart/bright/08-09.html', 'type-chart/dark/08-09.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00350101', '0035', 'ピッピ', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00360101', '0036', 'ピクシー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00360201', '0036', 'ピクシー', 'メガピクシー', 'type-chart/bright/10-18.html', 'type-chart/dark/10-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00370101', '0037', 'ロコン', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00370201', '0037', 'ロコン', 'アローラのすがた', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00380101', '0038', 'キュウコン', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00380201', '0038', 'キュウコン', 'アローラのすがた', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00390101', '0039', 'プリン', 'type-chart/bright/01-18.html', 'type-chart/dark/01-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00400101', '0040', 'プクリン', 'type-chart/bright/01-18.html', 'type-chart/dark/01-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00410101', '0041', 'ズバット', 'オスのすがた', 'type-chart/bright/08-10.html', 'type-chart/dark/08-10.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00410102', '0041', 'ズバット', 'メスのすがた', 'type-chart/bright/08-10.html', 'type-chart/dark/08-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00420101', '0042', 'ゴルバット', 'オスのすがた', 'type-chart/bright/08-10.html', 'type-chart/dark/08-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00420102', '0042', 'ゴルバット', 'メスのすがた', 'type-chart/bright/08-10.html', 'type-chart/dark/08-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00430101', '0043', 'ナゾノクサ', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00440101', '0044', 'クサイハナ', 'オスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00440102', '0044', 'クサイハナ', 'メスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00450101', '0045', 'ラフレシア', 'オスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00450102', '0045', 'ラフレシア', 'メスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00460101', '0046', 'パラス', 'type-chart/bright/04-12.html', 'type-chart/dark/04-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00470101', '0047', 'パラセクト', 'type-chart/bright/04-12.html', 'type-chart/dark/04-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00480101', '0048', 'コンパン', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00490101', '0049', 'モルフォン', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00500101', '0050', 'ディグダ', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00500201', '0050', 'ディグダ', 'アローラのすがた', 'type-chart/bright/09-17.html', 'type-chart/dark/09-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00510101', '0051', 'ダグトリオ', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00510201', '0051', 'ダグトリオ', 'アローラのすがた', 'type-chart/bright/09-17.html', 'type-chart/dark/09-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00520101', '0052', 'ニャース', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00520201', '0052', 'ニャース', 'アローラのすがた', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00520301', '0052', 'ニャース', 'ガラルのすがた', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00520401', '0052', 'ニャース', 'キョダイマックスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00530101', '0053', 'ペルシアン', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00530201', '0053', 'ペルシアン', 'アローラのすがた', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00540101', '0054', 'コダック', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00550101', '0055', 'ゴルダック', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00560101', '0056', 'マンキー', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00570101', '0057', 'オコリザル', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00580101', '0058', 'ガーディ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00580201', '0058', 'ガーディ', 'ヒスイのすがた', 'type-chart/bright/02-13.html', 'type-chart/dark/02-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00590101', '0059', 'ウインディ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00590201', '0059', 'ウインディ', 'ヒスイのすがた', 'type-chart/bright/02-13.html', 'type-chart/dark/02-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00600101', '0060', 'ニョロモ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00610101', '0061', 'ニョロゾ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00620101', '0062', 'ニョロボン', 'type-chart/bright/03-07.html', 'type-chart/dark/03-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00630101', '0063', 'ケーシィ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00640101', '0064', 'ユンゲラー', 'オスのすがた', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00640102', '0064', 'ユンゲラー', 'メスのすがた', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00650101', '0065', 'フーディン', 'オスのすがた', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00650102', '0065', 'フーディン', 'メスのすがた', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00650201', '0065', 'フーディン', 'メガフーディン', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00660101', '0066', 'ワンリキー', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00670101', '0067', 'ゴーリキー', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00680101', '0068', 'カイリキー', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00680201', '0068', 'カイリキー', 'キョダイマックスのすがた', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00690101', '0069', 'マダツボミ', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00700101', '0070', 'ウツドン', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00710101', '0071', 'ウツボット', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00710201', '0071', 'ウツボット', 'メガウツボット', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00720101', '0072', 'メノクラゲ', 'type-chart/bright/03-08.html', 'type-chart/dark/03-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00730101', '0073', 'ドククラゲ', 'type-chart/bright/03-08.html', 'type-chart/dark/03-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00740101', '0074', 'イシツブテ', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00740201', '0074', 'イシツブテ', 'アローラのすがた', 'type-chart/bright/05-13.html', 'type-chart/dark/05-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00750101', '0075', 'ゴローン', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00750201', '0075', 'ゴローン', 'アローラのすがた', 'type-chart/bright/05-13.html', 'type-chart/dark/05-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00760101', '0076', 'ゴローニャ', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00760201', '0076', 'ゴローニャ', 'アローラのすがた', 'type-chart/bright/05-13.html', 'type-chart/dark/05-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00770101', '0077', 'ポニータ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00770201', '0077', 'ポニータ', 'ガラルのすがた', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00780101', '0078', 'ギャロップ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00780201', '0078', 'ギャロップ', 'ガラルのすがた', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00790101', '0079', 'ヤドン', 'type-chart/bright/03-11.html', 'type-chart/dark/03-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00790201', '0079', 'ヤドン', 'ガラルのすがた', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00800101', '0080', 'ヤドラン', 'type-chart/bright/03-11.html', 'type-chart/dark/03-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00800201', '0080', 'ヤドラン', 'メガヤドラン', 'type-chart/bright/03-11.html', 'type-chart/dark/03-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00800301', '0080', 'ヤドラン', 'ガラルのすがた', 'type-chart/bright/08-11.html', 'type-chart/dark/08-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00810101', '0081', 'コイル', 'type-chart/bright/05-17.html', 'type-chart/dark/05-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00820101', '0082', 'レアコイル', 'type-chart/bright/05-17.html', 'type-chart/dark/05-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00830101', '0083', 'カモネギ', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00830201', '0083', 'カモネギ', 'ガラルのすがた', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00840101', '0084', 'ドードー', 'オスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00840102', '0084', 'ドードー', 'メスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00850101', '0085', 'ドードリオ', 'オスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00850102', '0085', 'ドードリオ', 'メスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00860101', '0086', 'パウワウ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00870101', '0087', 'ジュゴン', 'type-chart/bright/03-06.html', 'type-chart/dark/03-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00880101', '0088', 'ベトベター', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00880201', '0088', 'ベトベター', 'アローラのすがた', 'type-chart/bright/08-16.html', 'type-chart/dark/08-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00890101', '0089', 'ベトベトン', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00890201', '0089', 'ベトベトン', 'アローラのすがた', 'type-chart/bright/08-16.html', 'type-chart/dark/08-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00900101', '0090', 'シェルダー', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00910101', '0091', 'パルシェン', 'type-chart/bright/03-06.html', 'type-chart/dark/03-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00920101', '0092', 'ゴース', 'type-chart/bright/08-14.html', 'type-chart/dark/08-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00930101', '0093', 'ゴースト', 'type-chart/bright/08-14.html', 'type-chart/dark/08-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00940101', '0094', 'ゲンガー', 'type-chart/bright/08-14.html', 'type-chart/dark/08-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00940201', '0094', 'ゲンガー', 'メガゲンガー', 'type-chart/bright/08-14.html', 'type-chart/dark/08-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00940301', '0094', 'ゲンガー', 'キョダイマックスのすがた', 'type-chart/bright/08-14.html', 'type-chart/dark/08-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00950101', '0095', 'イワーク', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00960101', '0096', 'スリープ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00970101', '0097', 'スリーパー', 'オスのすがた', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00970102', '0097', 'スリーパー', 'メスのすがた', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00980101', '0098', 'クラブ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00990101', '0099', 'キングラー', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('00990201', '0099', 'キングラー', 'キョダイマックスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01000101', '0100', 'ビリリダマ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01000201', '0100', 'ビリリダマ', 'ヒスイのすがた', 'type-chart/bright/04-05.html', 'type-chart/dark/04-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01010101', '0101', 'マルマイン', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01010201', '0101', 'マルマイン', 'ヒスイのすがた', 'type-chart/bright/04-05.html', 'type-chart/dark/04-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01020101', '0102', 'タマタマ', 'type-chart/bright/04-11.html', 'type-chart/dark/04-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01030101', '0103', 'ナッシー', 'type-chart/bright/04-11.html', 'type-chart/dark/04-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01030201', '0103', 'ナッシー', 'アローラのすがた', 'type-chart/bright/04-15.html', 'type-chart/dark/04-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01040101', '0104', 'カラカラ', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01050101', '0105', 'ガラガラ', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01050201', '0105', 'ガラガラ', 'アローラのすがた', 'type-chart/bright/02-14.html', 'type-chart/dark/02-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01060101', '0106', 'サワムラー', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01070101', '0107', 'エビワラー', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01080101', '0108', 'ベロリンガ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01090101', '0109', 'ドガース', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01100101', '0110', 'マタドガス', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01100201', '0110', 'マタドガス', 'ガラルのすがた', 'type-chart/bright/08-18.html', 'type-chart/dark/08-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01110101', '0111', 'サイホーン', 'オスのすがた', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01110102', '0111', 'サイホーン', 'メスのすがた', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01120101', '0112', 'サイドン', 'オスのすがた', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01120102', '0112', 'サイドン', 'メスのすがた', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01130101', '0113', 'ラッキー', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01140101', '0114', 'モンジャラ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01150101', '0115', 'ガルーラ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01150201', '0115', 'ガルーラ', 'メガガルーラ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01160101', '0116', 'タッツー', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01170101', '0117', 'シードラ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01180101', '0118', 'トサキント', 'オスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01180102', '0118', 'トサキント', 'メスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01190101', '0119', 'アズマオウ', 'オスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01190102', '0119', 'アズマオウ', 'メスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01200101', '0120', 'ヒトデマン', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01210101', '0121', 'スターミー', 'type-chart/bright/03-11.html', 'type-chart/dark/03-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01210201', '0121', 'スターミー', 'メガスターミー', 'type-chart/bright/03-11.html', 'type-chart/dark/03-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01220101', '0122', 'バリヤード', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01220201', '0122', 'バリヤード', 'ガラルのすがた', 'type-chart/bright/06-11.html', 'type-chart/dark/06-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01230101', '0123', 'ストライク', 'オスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01230102', '0123', 'ストライク', 'メスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01240101', '0124', 'ルージュラ', 'type-chart/bright/06-11.html', 'type-chart/dark/06-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01250101', '0125', 'エレブー', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01260101', '0126', 'ブーバー', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01270101', '0127', 'カイロス', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01270201', '0127', 'カイロス', 'メガカイロス', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01280101', '0128', 'ケンタロス', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01280201', '0128', 'ケンタロス', 'パルデアのすがた・コンバットしゅ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01280301', '0128', 'ケンタロス', 'パルデアのすがた・ブレイズしゅ', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01280401', '0128', 'ケンタロス', 'パルデアのすがた・ウォーターしゅ', 'type-chart/bright/03-07.html', 'type-chart/dark/03-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01290101', '0129', 'コイキング', 'オスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01290102', '0129', 'コイキング', 'メスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01300101', '0130', 'ギャラドス', 'オスのすがた', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01300102', '0130', 'ギャラドス', 'メスのすがた', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01300201', '0130', 'ギャラドス', 'メガギャラドス', 'type-chart/bright/03-16.html', 'type-chart/dark/03-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01310101', '0131', 'ラプラス', 'type-chart/bright/03-06.html', 'type-chart/dark/03-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01310201', '0131', 'ラプラス', 'キョダイマックスのすがた', 'type-chart/bright/03-06.html', 'type-chart/dark/03-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01320101', '0132', 'メタモン', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01330101', '0133', 'イーブイ', 'オスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01330102', '0133', 'イーブイ', 'メスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01330201', '0133', 'イーブイ', 'キョダイマックスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01340101', '0134', 'シャワーズ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01350101', '0135', 'サンダース', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01360101', '0136', 'ブースター', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01370101', '0137', 'ポリゴン', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01380101', '0138', 'オムナイト', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01390101', '0139', 'オムスター', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01400101', '0140', 'カブト', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01410101', '0141', 'カブトプス', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01420101', '0142', 'プテラ', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01420201', '0142', 'プテラ', 'メガプテラ', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01430101', '0143', 'カビゴン', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01430201', '0143', 'カビゴン', 'キョダイマックスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01440101', '0144', 'フリーザー', 'type-chart/bright/06-10.html', 'type-chart/dark/06-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01440201', '0144', 'フリーザー', 'ガラルのすがた', 'type-chart/bright/10-11.html', 'type-chart/dark/10-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01450101', '0145', 'サンダー', 'type-chart/bright/05-10.html', 'type-chart/dark/05-10.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01450201', '0145', 'サンダー', 'ガラルのすがた', 'type-chart/bright/07-10.html', 'type-chart/dark/07-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01460101', '0146', 'ファイヤー', 'type-chart/bright/02-10.html', 'type-chart/dark/02-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01460201', '0146', 'ファイヤー', 'ガラルのすがた', 'type-chart/bright/10-16.html', 'type-chart/dark/10-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01470101', '0147', 'ミニリュウ', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01480101', '0148', 'ハクリュー', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01490101', '0149', 'カイリュー', 'type-chart/bright/10-15.html', 'type-chart/dark/10-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01490201', '0149', 'カイリュー', 'メガカイリュー', 'type-chart/bright/10-15.html', 'type-chart/dark/10-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01500101', '0150', 'ミュウツー', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01500201', '0150', 'ミュウツー', 'メガミュウツーX', 'type-chart/bright/07-11.html', 'type-chart/dark/07-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01500301', '0150', 'ミュウツー', 'メガミュウツーY', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01510101', '0151', 'ミュウ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');






INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01520101', '0152', 'チコリータ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01530101', '0153', 'ベイリーフ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01540101', '0154', 'メガニウム', 'オスのすがた', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01540201', '0154', 'メガニウム', 'メガメガニウム', 'type-chart/bright/04-18.html', 'type-chart/dark/04-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01540102', '0154', 'メガニウム', 'メスのすがた', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01550101', '0155', 'ヒノアラシ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01560101', '0156', 'マグマラシ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01570101', '0157', 'バクフーン', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01570201', '0157', 'バクフーン', 'ヒスイのすがた', 'type-chart/bright/02-14.html', 'type-chart/dark/02-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01580101', '0158', 'ワニノコ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01590101', '0159', 'アリゲイツ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01600101', '0160', 'オーダイル', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01600201', '0160', 'オーダイル', 'メガオーダイル', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01610101', '0161', 'オタチ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01620101', '0162', 'オオタチ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01630101', '0163', 'ホーホー', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01640101', '0164', 'ヨルノズク', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01650101', '0165', 'レディバ', 'オスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01650102', '0165', 'レディバ', 'メスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01660101', '0166', 'レディアン', 'オスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01660102', '0166', 'レディアン', 'メスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01670101', '0167', 'イトマル', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01680101', '0168', 'アリアドス', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01690101', '0169', 'クロバット', 'type-chart/bright/08-10.html', 'type-chart/dark/08-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01700101', '0170', 'チョンチー', 'type-chart/bright/03-05.html', 'type-chart/dark/03-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01710101', '0171', 'ランターン', 'type-chart/bright/03-05.html', 'type-chart/dark/03-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01720101', '0172', 'ピチュー', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01730101', '0173', 'ピィ', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01740101', '0174', 'ププリン', 'type-chart/bright/01-18.html', 'type-chart/dark/01-18.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01750101', '0175', 'トゲピー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01760101', '0176', 'トゲチック', 'type-chart/bright/10-18.html', 'type-chart/dark/10-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01770101', '0177', 'ネイティ', 'type-chart/bright/10-11.html', 'type-chart/dark/10-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01780101', '0178', 'ネイティオ', 'オスのすがた', 'type-chart/bright/10-11.html', 'type-chart/dark/10-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01780102', '0178', 'ネイティオ', 'メスのすがた', 'type-chart/bright/10-11.html', 'type-chart/dark/10-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01790101', '0179', 'メリープ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01800101', '0180', 'モココ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01810101', '0181', 'デンリュウ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01810201', '0181', 'デンリュウ', 'メガデンリュウ', 'type-chart/bright/05-15.html', 'type-chart/dark/05-15.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01820101', '0182', 'キレイハナ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01830101', '0183', 'マリル', 'type-chart/bright/03-18.html', 'type-chart/dark/03-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01840101', '0184', 'マリルリ', 'type-chart/bright/03-18.html', 'type-chart/dark/03-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01850101', '0185', 'ウソッキー', 'オスのすがた', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01850102', '0185', 'ウソッキー', 'メスのすがた', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01860101', '0186', 'ニョロトノ', 'オスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01860102', '0186', 'ニョロトノ', 'メスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01870101', '0187', 'ハネッコ', 'type-chart/bright/04-10.html', 'type-chart/dark/04-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01880101', '0188', 'ポポッコ', 'type-chart/bright/04-10.html', 'type-chart/dark/04-10.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01890101', '0189', 'ワタッコ', 'type-chart/bright/04-10.html', 'type-chart/dark/04-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01900101', '0190', 'エイパム', 'オスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01900102', '0190', 'エイパム', 'メスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01910101', '0191', 'ヒマナッツ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01920101', '0192', 'キマワリ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01930101', '0193', 'ヤンヤンマ', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01940101', '0194', 'ウパー', 'オスのすがた', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01940102', '0194', 'ウパー', 'メスのすがた', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01940201', '0194', 'ウパー', 'パルデアのすがた', 'type-chart/bright/08-09.html', 'type-chart/dark/08-09.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01950101', '0195', 'ヌオー', 'オスのすがた', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01950102', '0195', 'ヌオー', 'メスのすがた', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01960101', '0196', 'エーフィ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01970101', '0197', 'ブラッキー', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01980101', '0198', 'ヤミカラス', 'オスのすがた', 'type-chart/bright/10-16.html', 'type-chart/dark/10-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01980102', '0198', 'ヤミカラス', 'メスのすがた', 'type-chart/bright/10-16.html', 'type-chart/dark/10-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01990101', '0199', 'ヤドキング', 'type-chart/bright/03-11.html', 'type-chart/dark/03-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('01990201', '0199', 'ヤドキング', 'ガラルのすがた', 'type-chart/bright/08-11.html', 'type-chart/dark/08-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02000101', '0200', 'ムウマ', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02010101', '0201', 'アンノーン', 'A', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02010201', '0201', 'アンノーン', 'B', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02010301', '0201', 'アンノーン', 'C', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02010401', '0201', 'アンノーン', 'D', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02010501', '0201', 'アンノーン', 'E', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02010601', '0201', 'アンノーン', 'F', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02010701', '0201', 'アンノーン', 'G', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02010801', '0201', 'アンノーン', 'H', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02010901', '0201', 'アンノーン', 'I', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02011001', '0201', 'アンノーン', 'J', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02011101', '0201', 'アンノーン', 'K', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02011201', '0201', 'アンノーン', 'L', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02011301', '0201', 'アンノーン', 'M', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02011401', '0201', 'アンノーン', 'N', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02011501', '0201', 'アンノーン', 'O', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02011601', '0201', 'アンノーン', 'P', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02011701', '0201', 'アンノーン', 'Q', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02011801', '0201', 'アンノーン', 'R', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02011901', '0201', 'アンノーン', 'S', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02012001', '0201', 'アンノーン', 'T', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02012101', '0201', 'アンノーン', 'U', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02012201', '0201', 'アンノーン', 'V', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02012301', '0201', 'アンノーン', 'W', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02012401', '0201', 'アンノーン', 'X', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02012501', '0201', 'アンノーン', 'Y', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02012601', '0201', 'アンノーン', 'Z', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02012701', '0201', 'アンノーン', '!', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02012801', '0201', 'アンノーン', '?', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02020101', '0202', 'ソーナンス', 'オスのすがた', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02020102', '0202', 'ソーナンス', 'メスのすがた', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02030101', '0203', 'キリンリキ', 'オスのすがた', 'type-chart/bright/01-11.html', 'type-chart/dark/01-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02030102', '0203', 'キリンリキ', 'メスのすがた', 'type-chart/bright/01-11.html', 'type-chart/dark/01-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02040101', '0204', 'クヌギダマ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02050101', '0205', 'フォレトス', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02060101', '0206', 'ノコッチ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02070101', '0207', 'グライガー', 'オスのすがた', 'type-chart/bright/09-10.html', 'type-chart/dark/09-10.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02070102', '0207', 'グライガー', 'メスのすがた', 'type-chart/bright/09-10.html', 'type-chart/dark/09-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02080101', '0208', 'ハガネール', 'オスのすがた', 'type-chart/bright/09-17.html', 'type-chart/dark/09-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02080102', '0208', 'ハガネール', 'メスのすがた', 'type-chart/bright/09-17.html', 'type-chart/dark/09-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02080201', '0208', 'ハガネール', 'メガハガネール', 'type-chart/bright/09-17.html', 'type-chart/dark/09-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02090101', '0209', 'ブルー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02100101', '0210', 'グランブル', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02110101', '0211', 'ハリーセン', 'type-chart/bright/03-08.html', 'type-chart/dark/03-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02110201', '0211', 'ハリーセン', 'ヒスイのすがた', 'type-chart/bright/08-16.html', 'type-chart/dark/08-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02120101', '0212', 'ハッサム', 'オスのすがた', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02120102', '0212', 'ハッサム', 'メスのすがた', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02120201', '0212', 'ハッサム', 'メガハッサム', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02130101', '0213', 'ツボツボ', 'type-chart/bright/12-13.html', 'type-chart/dark/12-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02140101', '0214', 'ヘラクロス', 'オスのすがた', 'type-chart/bright/07-12.html', 'type-chart/dark/07-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02140102', '0214', 'ヘラクロス', 'メスのすがた', 'type-chart/bright/07-12.html', 'type-chart/dark/07-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02140201', '0214', 'ヘラクロス', 'メガヘラクロス', 'type-chart/bright/07-12.html', 'type-chart/dark/07-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02150101', '0215', 'ニューラ', 'オスのすがた', 'type-chart/bright/06-16.html', 'type-chart/dark/06-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02150102', '0215', 'ニューラ', 'メスのすがた', 'type-chart/bright/06-16.html', 'type-chart/dark/06-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02150201', '0215', 'ニューラ', 'ヒスイのすがた・オスのすがた', 'type-chart/bright/07-08.html', 'type-chart/dark/07-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02150202', '0215', 'ニューラ', 'ヒスイのすがた・メスのすがた', 'type-chart/bright/07-08.html', 'type-chart/dark/07-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02160101', '0216', 'ヒメグマ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02170101', '0217', 'リングマ', 'オスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02170102', '0217', 'リングマ', 'メスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02180101', '0218', 'マグマッグ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02190101', '0219', 'マグカルゴ', 'type-chart/bright/02-13.html', 'type-chart/dark/02-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02200101', '0220', 'ウリムー', 'type-chart/bright/06-09.html', 'type-chart/dark/06-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02210101', '0221', 'イノムー', 'オスのすがた', 'type-chart/bright/06-09.html', 'type-chart/dark/06-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02210102', '0221', 'イノムー', 'メスのすがた', 'type-chart/bright/06-09.html', 'type-chart/dark/06-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02220101', '0222', 'サニーゴ', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02220201', '0222', 'サニーゴ', 'ガラルのすがた', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02230101', '0223', 'テッポウオ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02240101', '0224', 'オクタン', 'オスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02240102', '0224', 'オクタン', 'メスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02250101', '0225', 'デリバード', 'type-chart/bright/06-10.html', 'type-chart/dark/06-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02260101', '0226', 'マンタイン', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02270101', '0227', 'エアームド', 'type-chart/bright/10-17.html', 'type-chart/dark/10-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02270201', '0227', 'エアームド', 'メガエアームド', 'type-chart/bright/10-17.html', 'type-chart/dark/10-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02280101', '0228', 'デルビル', 'type-chart/bright/02-16.html', 'type-chart/dark/02-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02290101', '0229', 'ヘルガー', 'オスのすがた', 'type-chart/bright/02-16.html', 'type-chart/dark/02-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02290102', '0229', 'ヘルガー', 'メスのすがた', 'type-chart/bright/02-16.html', 'type-chart/dark/02-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02290201', '0229', 'ヘルガー', 'メガヘルガー', 'type-chart/bright/02-16.html', 'type-chart/dark/02-16.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02300101', '0230', 'キングドラ', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02310101', '0231', 'ゴマゾウ', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02320101', '0232', 'ドンファン', 'オスのすがた', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02320102', '0232', 'ドンファン', 'メスのすがた', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02330101', '0233', 'ポリゴン2', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02340101', '0234', 'オドシシ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02350101', '0235', 'ドーブル', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02360101', '0236', 'バルキー', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02370101', '0237', 'カポエラー', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02380101', '0238', 'ムチュール', 'type-chart/bright/06-11.html', 'type-chart/dark/06-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02390101', '0239', 'エレキッド', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02400101', '0240', 'ブビィ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02410101', '0241', 'ミルタンク', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02420101', '0242', 'ハピナス', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02430101', '0243', 'ライコウ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02440101', '0244', 'エンテイ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02450101', '0245', 'スイクン', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02460101', '0246', 'ヨーギラス', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02470101', '0247', 'サナギラス', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02480101', '0248', 'バンギラス', 'type-chart/bright/13-16.html', 'type-chart/dark/13-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02480201', '0248', 'バンギラス', 'メガバンギラス', 'type-chart/bright/13-16.html', 'type-chart/dark/13-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02490101', '0249', 'ルギア', 'type-chart/bright/10-11.html', 'type-chart/dark/10-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02500101', '0250', 'ホウオウ', 'type-chart/bright/02-10.html', 'type-chart/dark/02-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02510101', '0251', 'セレビィ', 'type-chart/bright/04-11.html', 'type-chart/dark/04-11.html');






INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02520101', '0252', 'キモリ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02530101', '0253', 'ジュプトル', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02540101', '0254', 'ジュカイン', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02540201', '0254', 'ジュカイン', 'メガジュカイン', 'type-chart/bright/04-15.html', 'type-chart/dark/04-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02550101', '0255', 'アチャモ', 'オスのすがた', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02550102', '0255', 'アチャモ', 'メスのすがた', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02560101', '0256', 'ワカシャモ', 'オスのすがた', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02560102', '0256', 'ワカシャモ', 'メスのすがた', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02570101', '0257', 'バシャーモ', 'オスのすがた', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02570102', '0257', 'バシャーモ', 'メスのすがた', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02570201', '0257', 'バシャーモ', 'メガバシャーモ', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02580101', '0258', 'ミズゴロウ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02590101', '0259', 'ヌマクロー', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02600101', '0260', 'ラグラージ', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02600201', '0260', 'ラグラージ', 'メガラグラージ', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02610101', '0261', 'ポチエナ', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02620101', '0262', 'グラエナ', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02630101', '0263', 'ジグザグマ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02630201', '0263', 'ジグザグマ', 'ガラルのすがた', 'type-chart/bright/01-16.html', 'type-chart/dark/01-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02640101', '0264', 'マッスグマ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02640201', '0264', 'マッスグマ', 'ガラルのすがた', 'type-chart/bright/01-16.html', 'type-chart/dark/01-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02650101', '0265', 'ケムッソ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02660101', '0266', 'カラサリス', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02670101', '0267', 'アゲハント', 'オスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02670102', '0267', 'アゲハント', 'メスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02680101', '0268', 'マユルド', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02690101', '0269', 'ドクケイル', 'オスのすがた', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02690102', '0269', 'ドクケイル', 'メスのすがた', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02700101', '0270', 'ハスボー', 'type-chart/bright/03-04.html', 'type-chart/dark/03-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02710101', '0271', 'ハスブレロ', 'type-chart/bright/03-04.html', 'type-chart/dark/03-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02720101', '0272', 'ルンパッパ', 'オスのすがた', 'type-chart/bright/03-04.html', 'type-chart/dark/03-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02720102', '0272', 'ルンパッパ', 'メスのすがた', 'type-chart/bright/03-04.html', 'type-chart/dark/03-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02730101', '0273', 'タネボー', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02740101', '0274', 'コノハナ', 'オスのすがた', 'type-chart/bright/04-16.html', 'type-chart/dark/04-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02740102', '0274', 'コノハナ', 'メスのすがた', 'type-chart/bright/04-16.html', 'type-chart/dark/04-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02750101', '0275', 'ダーテング', 'オスのすがた', 'type-chart/bright/04-16.html', 'type-chart/dark/04-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02750102', '0275', 'ダーテング', 'メスのすがた', 'type-chart/bright/04-16.html', 'type-chart/dark/04-16.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02760101', '0276', 'スバメ', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02770101', '0277', 'オオスバメ', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02780101', '0278', 'キャモメ', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02790101', '0279', 'ペリッパー', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02800101', '0280', 'ラルトス', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02810101', '0281', 'キルリア', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02820101', '0282', 'サーナイト', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02820201', '0282', 'サーナイト', 'メガサーナイト', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02830101', '0283', 'アメタマ', 'type-chart/bright/03-12.html', 'type-chart/dark/03-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02840101', '0284', 'アメモース', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02850101', '0285', 'キノココ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02860101', '0286', 'キノガッサ', 'type-chart/bright/04-07.html', 'type-chart/dark/04-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02870101', '0287', 'ナマケロ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02880101', '0288', 'ヤルキモノ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02890101', '0289', 'ケッキング', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02900101', '0290', 'ツチニン', 'type-chart/bright/09-12.html', 'type-chart/dark/09-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02910101', '0291', 'テッカニン', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02920101', '0292', 'ヌケニン', 'type-chart/bright/12-14.html', 'type-chart/dark/12-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02930101', '0293', 'ゴニョニョ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02940101', '0294', 'ドゴーム', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02950101', '0295', 'バクオング', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02960101', '0296', 'マクノシタ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02970101', '0297', 'ハリテヤマ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02980101', '0298', 'ルリリ', 'type-chart/bright/01-18.html', 'type-chart/dark/01-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('02990101', '0299', 'ノズパス', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03000101', '0300', 'エネコ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03010101', '0301', 'エネコロロ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03020101', '0302', 'ヤミラミ', 'type-chart/bright/14-16.html', 'type-chart/dark/14-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03020201', '0302', 'ヤミラミ', 'メガヤミラミ', 'type-chart/bright/14-16.html', 'type-chart/dark/14-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03030101', '0303', 'クチート', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03030201', '0303', 'クチート', 'メガクチート', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03040101', '0304', 'ココドラ', 'type-chart/bright/13-17.html', 'type-chart/dark/13-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03050101', '0305', 'コドラ', 'type-chart/bright/13-17.html', 'type-chart/dark/13-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03060101', '0306', 'ボスゴドラ', 'type-chart/bright/13-17.html', 'type-chart/dark/13-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03060201', '0306', 'ボスゴドラ', 'メガボスゴドラ', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03070101', '0307', 'アサナン', 'オスのすがた', 'type-chart/bright/07-11.html', 'type-chart/dark/07-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03070102', '0307', 'アサナン', 'メスのすがた', 'type-chart/bright/07-11.html', 'type-chart/dark/07-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03080101', '0308', 'チャーレム', 'オスのすがた', 'type-chart/bright/07-11.html', 'type-chart/dark/07-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03080102', '0308', 'チャーレム', 'メスのすがた', 'type-chart/bright/07-11.html', 'type-chart/dark/07-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03080201', '0308', 'チャーレム', 'メガチャーレム', 'type-chart/bright/07-11.html', 'type-chart/dark/07-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03090101', '0309', 'ラクライ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03100101', '0310', 'ライボルト', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03100201', '0310', 'ライボルト', 'メガライボルト', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03110101', '0311', 'プラスル', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03120101', '0312', 'マイナン', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03130101', '0313', 'バルビート', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03140101', '0314', 'イルミーゼ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03150101', '0315', 'ロゼリア', 'オスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03150102', '0315', 'ロゼリア', 'メスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03160101', '0316', 'ゴクリン', 'オスのすがた', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03160102', '0316', 'ゴクリン', 'メスのすがた', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03170101', '0317', 'ゴクリン', 'オスのすがた', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03170102', '0317', 'マルノーム', 'メスのすがた', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03180101', '0318', 'キバニア', 'type-chart/bright/03-16.html', 'type-chart/dark/03-16.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03190101', '0319', 'サメハダー', 'type-chart/bright/03-16.html', 'type-chart/dark/03-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03190201', '0319', 'サメハダー', 'メガサメハダー', 'type-chart/bright/03-16.html', 'type-chart/dark/03-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03200101', '0320', 'ホエルコ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03210101', '0321', 'ホエルオー', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03220101', '0322', 'ドンメル', 'オスのすがた', 'type-chart/bright/02-09.html', 'type-chart/dark/02-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03220102', '0322', 'ドンメル', 'メスのすがた', 'type-chart/bright/02-09.html', 'type-chart/dark/02-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03230101', '0323', 'バクーダ', 'オスのすがた', 'type-chart/bright/02-09.html', 'type-chart/dark/02-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03230102', '0323', 'バクーダ', 'メスのすがた', 'type-chart/bright/02-09.html', 'type-chart/dark/02-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03230201', '0323', 'バクーダ', 'メガバクーダ', 'type-chart/bright/02-09.html', 'type-chart/dark/02-09.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03240101', '0324', 'コータス', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03250101', '0325', 'バネブー', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03260101', '0326', 'ブーピッグ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03270101', '0327', 'パッチール', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03280101', '0328', 'ナックラー', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03290101', '0329', 'ビブラーバ', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03300101', '0330', 'フライゴン', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03310101', '0331', 'サボネア', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03320101', '0332', 'ノクタス', 'オスのすがた', 'type-chart/bright/04-16.html', 'type-chart/dark/04-16.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03320102', '0332', 'ノクタス', 'メスのすがた', 'type-chart/bright/04-16.html', 'type-chart/dark/04-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03330101', '0333', 'チルット', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03340101', '0334', 'チルタリス', 'type-chart/bright/10-15.html', 'type-chart/dark/10-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03340201', '0334', 'チルタリス', 'メガチルタリス', 'type-chart/bright/15-18.html', 'type-chart/dark/15-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03350101', '0335', 'ザングース', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03360101', '0336', 'ハブネーク', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03370101', '0337', 'ルナトーン', 'type-chart/bright/11-13.html', 'type-chart/dark/11-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03380101', '0338', 'ソルロック', 'type-chart/bright/11-13.html', 'type-chart/dark/11-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03390101', '0339', 'ドジョッチ', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03400101', '0340', 'ナマズン', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03410101', '0341', 'ヘイガニ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03420101', '0342', 'シザリガー', 'type-chart/bright/03-16.html', 'type-chart/dark/03-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03430101', '0343', 'ヤジロン', 'type-chart/bright/09-11.html', 'type-chart/dark/09-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03440101', '0344', 'ネンドール', 'type-chart/bright/09-11.html', 'type-chart/dark/09-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03450101', '0345', 'リリーラ', 'type-chart/bright/04-13.html', 'type-chart/dark/04-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03460101', '0346', 'ユレイドル', 'type-chart/bright/04-13.html', 'type-chart/dark/04-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03470101', '0347', 'アノプス', 'type-chart/bright/12-13.html', 'type-chart/dark/12-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03480101', '0348', 'アーマルド', 'type-chart/bright/12-13.html', 'type-chart/dark/12-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03490101', '0349', 'ヒンバス', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03500101', '0350', 'ミロカロス', 'オスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03500102', '0350', 'ミロカロス', 'メスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03510101', '0351', 'ポワルン', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03510201', '0351', 'ポワルン', 'たいようのすがた', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03510301', '0351', 'ポワルン', 'あまみずのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03510401', '0351', 'ポワルン', 'ゆきぐものすがた', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03520101', '0352', 'カクレオン', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03530101', '0353', 'カゲボウズ', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03540101', '0354', 'ジュペッタ', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03540201', '0354', 'ジュペッタ', 'メガジュペッタ', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03550101', '0355', 'ヨマワル', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03560101', '0356', 'サマヨール', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03570101', '0357', 'トロピウス', 'type-chart/bright/04-10.html', 'type-chart/dark/04-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03580101', '0358', 'チリーン', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03580201', '0358', 'チリーン', 'メガチリーン', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03590101', '0359', 'アブソル', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03590201', '0359', 'アブソル', 'メガアブソル', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03590301', '0359', 'アブソル', 'メガアブソルZ', 'type-chart/bright/14-16.html', 'type-chart/dark/14-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03600101', '0360', 'ソーナノ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03610101', '0361', 'ユキワラシ', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03620101', '0362', 'オニゴーリ', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03620201', '0362', 'オニゴーリ', 'メガオニゴーリ', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03630101', '0363', 'タマザラシ', 'type-chart/bright/03-06.html', 'type-chart/dark/03-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03640101', '0364', 'トドグラー', 'type-chart/bright/03-06.html', 'type-chart/dark/03-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03650101', '0365', 'トドゼルガ', 'type-chart/bright/03-06.html', 'type-chart/dark/03-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03660101', '0366', 'パールル', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03670101', '0367', 'ハンテール', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03680101', '0368', 'サクラビス', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03690101', '0369', 'ジーランス', 'オスのすがた', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03690102', '0369', 'ジーランス', 'メスのすがた', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03700101', '0370', 'ラブカス', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03710101', '0371', 'タツベイ', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03720101', '0372', 'コモルー', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03730101', '0373', 'ボーマンダ', 'type-chart/bright/10-15.html', 'type-chart/dark/10-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03730201', '0373', 'ボーマンダ', 'メガボーマンダ', 'type-chart/bright/10-15.html', 'type-chart/dark/10-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03740101', '0374', 'ダンバル', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03750101', '0375', 'メタング', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03760101', '0376', 'メタグロス', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03760201', '0376', 'メタグロス', 'メガメタグロス', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03770101', '0377', 'レジロック', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03780101', '0378', 'レジアイス', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03790101', '0379', 'レジスチル', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03800101', '0380', 'ラティアス', 'type-chart/bright/11-15.html', 'type-chart/dark/11-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03800201', '0380', 'ラティアス', 'メガラティアス', 'type-chart/bright/11-15.html', 'type-chart/dark/11-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03810101', '0381', 'ラティオス', 'type-chart/bright/11-15.html', 'type-chart/dark/11-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03810201', '0381', 'ラティオス', 'メガラティオス', 'type-chart/bright/11-15.html', 'type-chart/dark/11-15.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03820101', '0382', 'カイオーガ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03820201', '0382', 'カイオーガ', 'ゲンシカイオーガ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03830101', '0383', 'グラードン', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03830201', '0383', 'グラードン', 'ゲンシグラードン', 'type-chart/bright/02-09.html', 'type-chart/dark/02-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03840101', '0384', 'レックウザ', 'type-chart/bright/10-15.html', 'type-chart/dark/10-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03840201', '0384', 'レックウザ', 'メガレックウザ', 'type-chart/bright/10-15.html', 'type-chart/dark/10-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03850101', '0385', 'ジラーチ', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03860101', '0386', 'デオキシス', 'ノーマルフォルム', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03860201', '0386', 'デオキシス', 'アタックフォルム', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03860301', '0386', 'デオキシス', 'ディフェンスフォルム', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03860401', '0386', 'デオキシス', 'スピードフォルム', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');


INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03870101', '0387', 'ナエトル', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03880101', '0388', 'ハヤシガメ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03890101', '0389', 'ドダイトス', 'type-chart/bright/04-09.html', 'type-chart/dark/04-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03900101', '0390', 'ヒコザル', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03910101', '0391', 'モウカザル', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03920101', '0392', 'ゴウカザル', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03930101', '0393', 'ポッチャマ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03940101', '0394', 'ポッタイシ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03950101', '0395', 'エンペルト', 'type-chart/bright/03-17.html', 'type-chart/dark/03-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03960101', '0396', 'ムックル', 'オスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03960102', '0396', 'ムックル', 'メスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03970101', '0397', 'ムクバード', 'オスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03970102', '0397', 'ムクバード', 'メスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03980101', '0398', 'ムクホーク', 'オスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03980102', '0398', 'ムクホーク', 'メスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03980201', '0398', 'ムクホーク', 'メガムクホーク', 'type-chart/bright/07-10.html', 'type-chart/dark/07-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03990101', '0399', 'ビッパ', 'オスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('03990102', '0399', 'ビッパ', 'メスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04000101', '0400', 'ビーダル', 'オスのすがた', 'type-chart/bright/01-03.html', 'type-chart/dark/01-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04000102', '0400', 'ビーダル', 'メスのすがた', 'type-chart/bright/01-03.html', 'type-chart/dark/01-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04010101', '0401', 'コロボーシ', 'オスのすがた', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04010102', '0401', 'コロボーシ', 'メスのすがた', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04020101', '0402', 'コロトック', 'オスのすがた', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04020102', '0402', 'コロトック', 'メスのすがた', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04030101', '0403', 'コリンク', 'オスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04030102', '0403', 'コリンク', 'メスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04040101', '0404', 'ルクシオ', 'オスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04040102', '0404', 'ルクシオ', 'メスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04050101', '0405', 'レントラー', 'オスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04050102', '0405', 'レントラー', 'メスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04060101', '0406', 'スボミー', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04070101', '0407', 'ロズレイド', 'オスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04070102', '0407', 'ロズレイド', 'メスのすがた', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04080101', '0408', 'ズガイドス', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04090101', '0409', 'ラムパルド', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04100101', '0410', 'タテトプス', 'type-chart/bright/13-17.html', 'type-chart/dark/13-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04110101', '0411', 'トリデプス', 'type-chart/bright/13-17.html', 'type-chart/dark/13-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04120101', '0412', 'ミノムッチ', 'くさきのミノ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04120201', '0412', 'ミノムッチ', 'すなちのミノ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04120301', '0412', 'ミノムッチ', 'ゴミのミノ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04130101', '0413', 'ミノマダム', 'くさきのミノ', 'type-chart/bright/04-12.html', 'type-chart/dark/04-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04130201', '0413', 'ミノマダム', 'すなちのミノ', 'type-chart/bright/09-12.html', 'type-chart/dark/09-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04130301', '0413', 'ミノマダム', 'ゴミのミノ', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04140101', '0414', 'ガーメイル', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04150101', '0415', 'ミツハニー', 'オスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04150102', '0415', 'ミツハニー', 'メスのすがた', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04160101', '0416', 'ビークイン', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04170101', '0417', 'パチリス', 'オスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04170102', '0417', 'パチリス', 'メスのすがた', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04180101', '0418', 'ブイゼル', 'オスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04180102', '0418', 'ブイゼル', 'メスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04190101', '0419', 'フローゼル', 'オスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04190102', '0419', 'フローゼル', 'メスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04200101', '0420', 'チェリンボ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04210101', '0421', 'チェリム', 'ネガフォルム', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04210201', '0421', 'チェリム', 'ポジフォルム', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04220101', '0422', 'カラナクシ', 'にしのうみ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04220201', '0422', 'カラナクシ', 'ひがしのうみ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04230101', '0423', 'トリトドン', 'にしのうみ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04230201', '0423', 'トリトドン', 'ひがしのうみ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04240101', '0424', 'エテボース', 'オスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04240102', '0424', 'エテボース', 'メスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04250101', '0425', 'フワンテ', 'type-chart/bright/10-14.html', 'type-chart/dark/10-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04260101', '0426', 'フワライド', 'type-chart/bright/10-14.html', 'type-chart/dark/10-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04270101', '0427', 'ミミロル', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04280101', '0428', 'ミミロップ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04280201', '0428', 'ミミロップ', 'メガミミロップ', 'type-chart/bright/01-07.html', 'type-chart/dark/01-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04290101', '0429', 'ムウマージ', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04300101', '0430', 'ドンカラス', 'type-chart/bright/10-16.html', 'type-chart/dark/10-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04310101', '0431', 'ニャルマー', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04320101', '0432', 'ブニャット', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04330101', '0433', 'リーシャン', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04340101', '0434', 'スカンプー', 'type-chart/bright/08-16.html', 'type-chart/dark/08-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04350101', '0435', 'スカタンク', 'type-chart/bright/08-16.html', 'type-chart/dark/08-16.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04360101', '0436', 'ドーミラー', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04370101', '0437', 'ドータクン', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04380101', '0438', 'ウソハチ', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04390101', '0439', 'マネネ', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04400101', '0440', 'ピンプク', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04410101', '0441', 'ペラップ', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04420101', '0442', 'ミカルゲ', 'type-chart/bright/14-16.html', 'type-chart/dark/14-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04430101', '0443', 'フカマル', 'オスのすがた', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04430102', '0443', 'フカマル', 'メスのすがた', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04440101', '0444', 'ガバイト', 'オスのすがた', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04440102', '0444', 'ガバイト', 'メスのすがた', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04450101', '0445', 'ガブリアス', 'オスのすがた', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04450102', '0445', 'ガブリアス', 'メスのすがた', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04450201', '0445', 'ガブリアス', 'メガガブリアス', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04450301', '0445', 'ガブリアス', 'メガガブリアスZ', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04460101', '0446', 'ゴンベ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04470101', '0447', 'リオル', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04480101', '0448', 'ルカリオ', 'type-chart/bright/07-17.html', 'type-chart/dark/07-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04480201', '0448', 'ルカリオ', 'メガルカリオ', 'type-chart/bright/07-17.html', 'type-chart/dark/07-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04480301', '0448', 'ルカリオ', 'メガルカリオZ', 'type-chart/bright/07-17.html', 'type-chart/dark/07-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04490101', '0449', 'ヒポポタス', 'オスのすがた', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04490102', '0449', 'ヒポポタス', 'メスのすがた', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04500101', '0450', 'ガバルドン', 'オスのすがた', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04500102', '0450', 'ガバルドン', 'メスのすがた', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04510101', '0451', 'スコルピ', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04520101', '0452', 'ドラピオン', 'type-chart/bright/08-16.html', 'type-chart/dark/08-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04530101', '0453', 'グレッグル', 'オスのすがた', 'type-chart/bright/07-08.html', 'type-chart/dark/07-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04530102', '0453', 'グレッグル', 'メスのすがた', 'type-chart/bright/07-08.html', 'type-chart/dark/07-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04540101', '0454', 'ドクロッグ', 'オスのすがた', 'type-chart/bright/07-08.html', 'type-chart/dark/07-08.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04540102', '0454', 'ドクロッグ', 'メスのすがた', 'type-chart/bright/07-08.html', 'type-chart/dark/07-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04550101', '0455', 'マスキッパ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04560101', '0456', 'ケイコウオ', 'オスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04560102', '0456', 'ケイコウオ', 'メスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04570101', '0457', 'ネオラント', 'オスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04570102', '0457', 'ネオラント', 'メスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04580101', '0458', 'タマンタ', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04590101', '0459', 'ユキカブリ', 'オスのすがた', 'type-chart/bright/04-06.html', 'type-chart/dark/04-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04590102', '0459', 'ユキカブリ', 'メスのすがた', 'type-chart/bright/04-06.html', 'type-chart/dark/04-06.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04600101', '0460', 'ユキノオー', 'オスのすがた', 'type-chart/bright/04-06.html', 'type-chart/dark/04-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04600102', '0460', 'ユキノオー', 'メスのすがた', 'type-chart/bright/04-06.html', 'type-chart/dark/04-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04600201', '0460', 'ユキノオー', 'メガユキノオー', 'type-chart/bright/04-06.html', 'type-chart/dark/04-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04610101', '0461', 'マニューラ', 'オスのすがた', 'type-chart/bright/06-16.html', 'type-chart/dark/06-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04610102', '0461', 'マニューラ', 'メスのすがた', 'type-chart/bright/06-16.html', 'type-chart/dark/06-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04620101', '0462', 'ジバコイル', 'type-chart/bright/05-17.html', 'type-chart/dark/05-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04630101', '0463', 'ベロベルト', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04640101', '0464', 'ドサイドン', 'オスのすがた', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04640102', '0464', 'ドサイドン', 'メスのすがた', 'type-chart/bright/09-13.html', 'type-chart/dark/09-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04650101', '0465', 'モジャンボ', 'オスのすがた', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04650102', '0465', 'モジャンボ', 'メスのすがた', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04660101', '0466', 'エレキブル', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04670101', '0467', 'ブーバーン', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04680101', '0468', 'トゲキッス', 'type-chart/bright/10-18.html', 'type-chart/dark/10-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04690101', '0469', 'メガヤンマ', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04700101', '0470', 'リーフィア', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04710101', '0471', 'グレイシア', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04720101', '0472', 'グライオン', 'type-chart/bright/09-10.html', 'type-chart/dark/09-10.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04730101', '0473', 'マンムー', 'オスのすがた', 'type-chart/bright/06-09.html', 'type-chart/dark/06-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04730102', '0473', 'マンムー', 'メスのすがた', 'type-chart/bright/06-09.html', 'type-chart/dark/06-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04740101', '0474', 'ポリゴンZ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04750101', '0475', 'エルレイド', 'type-chart/bright/07-11.html', 'type-chart/dark/07-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04750201', '0475', 'エルレイド', 'メガエルレイド', 'type-chart/bright/07-11.html', 'type-chart/dark/07-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04760101', '0476', 'ダイノーズ', 'type-chart/bright/13-17.html', 'type-chart/dark/13-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04770101', '0477', 'ヨノワール', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04780101', '0478', 'ユキメノコ', 'type-chart/bright/06-14.html', 'type-chart/dark/06-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04780201', '0478', 'ユキメノコ', 'メガユキメノコ', 'type-chart/bright/06-14.html', 'type-chart/dark/06-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04790101', '0479', 'ロトム', 'type-chart/bright/05-14.html', 'type-chart/dark/05-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04790201', '0479', 'ロトム', 'ヒートロトム', 'type-chart/bright/02-05.html', 'type-chart/dark/02-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04790301', '0479', 'ロトム', 'ウォッシュロトム', 'type-chart/bright/03-05.html', 'type-chart/dark/03-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04790401', '0479', 'ロトム', 'フロストロトム', 'type-chart/bright/05-06.html', 'type-chart/dark/05-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04790501', '0479', 'ロトム', 'スピンロトム', 'type-chart/bright/05-10.html', 'type-chart/dark/05-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04790601', '0479', 'ロトム', 'カットロトム', 'type-chart/bright/04-05.html', 'type-chart/dark/04-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04800101', '0480', 'ユクシー', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04810101', '0481', 'エムリット', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04820101', '0482', 'アグノム', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04830101', '0483', 'ディアルガ', 'type-chart/bright/15-17.html', 'type-chart/dark/15-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04830201', '0483', 'ディアルガ', 'オリジンフォルム', 'type-chart/bright/15-17.html', 'type-chart/dark/15-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04840101', '0484', 'パルキア', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04840201', '0484', 'パルキア', 'オリジンフォルム', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04850101', '0485', 'ヒードラン', 'type-chart/bright/02-17.html', 'type-chart/dark/02-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04850201', '0485', 'ヒードラン', 'メガヒードラン', 'type-chart/bright/02-17.html', 'type-chart/dark/02-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04860101', '0486', 'レジギガス', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04870101', '0487', 'ギラティナ', 'アナザーフォルム', 'type-chart/bright/14-15.html', 'type-chart/dark/14-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04870201', '0487', 'ギラティナ', 'オリジンフォルム', 'type-chart/bright/14-15.html', 'type-chart/dark/14-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04880101', '0488', 'クレセリア', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04890101', '0489', 'フィオネ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04900101', '0490', 'マナフィ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04910101', '0491', 'ダークライ', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04910201', '0491', 'ダークライ', 'メガダークライ', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04920101', '0492', 'シェイミ', 'ランドフォルム', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04920201', '0492', 'シェイミ', 'スカイフォルム', 'type-chart/bright/04-10.html', 'type-chart/dark/04-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04930101', '0493', 'アルセウス', 'ノーマルタイプ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04930201', '0493', 'アルセウス', 'ほのおタイプ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04930301', '0493', 'アルセウス', 'みずタイプ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04930401', '0493', 'アルセウス', 'くさタイプ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04930501', '0493', 'アルセウス', 'でんきタイプ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04930601', '0493', 'アルセウス', 'こおりタイプ', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04930701', '0493', 'アルセウス', 'かくとうタイプ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04930801', '0493', 'アルセウス', 'どくタイプ', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04930901', '0493', 'アルセウス', 'じめんタイプ', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04931001', '0493', 'アルセウス', 'ひこうタイプ', 'type-chart/bright/10-10.html', 'type-chart/dark/10-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04931101', '0493', 'アルセウス', 'エスパータイプ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04931201', '0493', 'アルセウス', 'むしタイプ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04931301', '0493', 'アルセウス', 'いわタイプ', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04931401', '0493', 'アルセウス', 'ゴーストタイプ', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04931501', '0493', 'アルセウス', 'ドラゴンタイプ', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04931601', '0493', 'アルセウス', 'あくタイプ', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04931701', '0493', 'アルセウス', 'はがねタイプ', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04931801', '0493', 'アルセウス', 'フェアリータイプ', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04940101', '0494', 'ビクティニ', 'type-chart/bright/02-11.html', 'type-chart/dark/02-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04950101', '0495', 'ツタージャ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04960101', '0496', 'ジャノビー', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04970101', '0497', 'ジャローダ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04980101', '0498', 'ポカブ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('04990101', '0499', 'チャオブー', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05000101', '0500', 'エンブオー', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05000201', '0500', 'エンブオー', 'メガエンブオー', 'type-chart/bright/02-07.html', 'type-chart/dark/02-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05010101', '0501', 'ミジュマル', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05020101', '0502', 'フタチマル', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05030101', '0503', 'ダイケンキ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05030201', '0503', 'ダイケンキ', 'ヒスイのすがた', 'type-chart/bright/03-16.html', 'type-chart/dark/03-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05040101', '0504', 'ミネズミ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05050101', '0505', 'ミルホッグ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05060101', '0506', 'ヨーテリー', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05070101', '0507', 'ハーデリア', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05080101', '0508', 'ムーランド', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05090101', '0509', 'チョロネコ', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05100101', '0510', 'レパルダス', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05110101', '0511', 'ヤナップ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05120101', '0512', 'ヤナッキー', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05130101', '0513', 'バオップ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05140101', '0514', 'バオッキー', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05150101', '0515', 'ヒヤップ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05160101', '0516', 'ヒヤッキー', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05170101', '0517', 'ムンナ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05180101', '0518', 'ムシャーナ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05190101', '0519', 'マメパト', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05200101', '0520', 'ハトーボー', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05210101', '0521', 'ケンホロウ', 'オスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05210102', '0521', 'ケンホロウ', 'メスのすがた', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05220101', '0522', 'シママ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05230101', '0523', 'ゼブライカ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05240101', '0524', 'ダンゴロ', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05250101', '0525', 'ガントル', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05260101', '0526', 'ギガイアス', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05270101', '0527', 'コロモリ', 'type-chart/bright/10-11.html', 'type-chart/dark/10-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05280101', '0528', 'ココロモリ', 'type-chart/bright/10-11.html', 'type-chart/dark/10-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05290101', '0529', 'モグリュー', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05300101', '0530', 'ドリュウズ', 'type-chart/bright/09-17.html', 'type-chart/dark/09-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05300201', '0530', 'ドリュウズ', 'メガドリュウズ', 'type-chart/bright/09-17.html', 'type-chart/dark/09-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05310101', '0531', 'タブンネ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05310201', '0531', 'タブンネ', 'メガタブンネ', 'type-chart/bright/01-18.html', 'type-chart/dark/01-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05320101', '0532', 'ドッコラー', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05330101', '0533', 'ドテッコツ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05340101', '0534', 'ローブシン', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05350101', '0535', 'オタマロ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05360101', '0536', 'ガマガル', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05370101', '0537', 'ガマゲロゲ', 'type-chart/bright/03-09.html', 'type-chart/dark/03-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05380101', '0538', 'ナゲキ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05390101', '0539', 'ダゲキ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05400101', '0540', 'クルミル', 'type-chart/bright/04-12.html', 'type-chart/dark/04-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05410101', '0541', 'クルマユ', 'type-chart/bright/04-12.html', 'type-chart/dark/04-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05420101', '0542', 'ハハコモリ', 'type-chart/bright/04-12.html', 'type-chart/dark/04-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05430101', '0543', 'フシデ', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05440101', '0544', 'ホイーガ', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05450101', '0545', 'ペンドラー', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05450201', '0545', 'ペンドラー', 'メガペンドラー', 'type-chart/bright/08-12.html', 'type-chart/dark/08-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05460101', '0546', 'モンメン', 'type-chart/bright/04-18.html', 'type-chart/dark/04-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05470101', '0547', 'エルフーン', 'type-chart/bright/04-18.html', 'type-chart/dark/04-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05480101', '0548', 'チュリネ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05490101', '0549', 'ドレディア', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05490201', '0549', 'ドレディア', 'ヒスイのすがた', 'type-chart/bright/04-07.html', 'type-chart/dark/04-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05500101', '0550', 'バスラオ', 'あかすじのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05500201', '0550', 'バスラオ', 'あおすじのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05500301', '0550', 'バスラオ', 'しろすじのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05510101', '0551', 'メグロコ', 'type-chart/bright/09-16.html', 'type-chart/dark/09-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05520101', '0552', 'ワルビル', 'type-chart/bright/09-16.html', 'type-chart/dark/09-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05530101', '0553', 'ワルビアル', 'type-chart/bright/09-16.html', 'type-chart/dark/09-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05540101', '0554', 'ダルマッカ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05540201', '0554', 'ダルマッカ', 'ガラルのすがた', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05550101', '0555', 'ヒヒダルマ', 'ノーマルモード', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05550201', '0555', 'ヒヒダルマ', 'ダルマモード', 'type-chart/bright/02-06.html', 'type-chart/dark/02-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05550301', '0555', 'ヒヒダルマ', 'ガラルのすがた・ノーマルモード', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05550401', '0555', 'ヒヒダルマ', 'ガラルのすがた・ダルマモード', 'type-chart/bright/02-06.html', 'type-chart/dark/02-06.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05560101', '0556', 'マラカッチ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05570101', '0557', 'イシズマイ', 'type-chart/bright/12-13.html', 'type-chart/dark/12-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05580101', '0558', 'イワパレス', 'type-chart/bright/12-13.html', 'type-chart/dark/12-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05590101', '0559', 'ズルッグ', 'type-chart/bright/07-16.html', 'type-chart/dark/07-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05600101', '0560', 'ズルズキン', 'type-chart/bright/07-16.html', 'type-chart/dark/07-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05600201', '0560', 'ズルズキン', 'メガズルズキン', 'type-chart/bright/07-16.html', 'type-chart/dark/07-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05610101', '0561', 'シンボラー', 'type-chart/bright/10-11.html', 'type-chart/dark/10-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05620101', '0562', 'デスマス', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05620201', '0562', 'デスマス', 'ガラルのすがた', 'type-chart/bright/09-14.html', 'type-chart/dark/09-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05630101', '0563', 'デスカーン', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05640101', '0564', 'プロトーガ', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05650101', '0565', 'アバゴーラ', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05660101', '0566', 'アーケン', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05670101', '0567', 'アーケオス', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05680101', '0568', 'ヤブクロン', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05690101', '0569', 'ダストダス', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05690201', '0569', 'ダストダス', 'キョダイマックスのすがた', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05700101', '0570', 'ゾロア', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05700201', '0570', 'ゾロア', 'ヒスイのすがた', 'type-chart/bright/01-14.html', 'type-chart/dark/01-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05710101', '0571', 'ゾロアーク', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05710201', '0571', 'ゾロアーク', 'ヒスイのすがた', 'type-chart/bright/01-14.html', 'type-chart/dark/01-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05720101', '0572', 'チラーミィ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05730101', '0573', 'チラチーノ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05740101', '0574', 'ゴチム', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05750101', '0575', 'ゴチミル', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05760101', '0576', 'ゴチルゼル', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05770101', '0577', 'ユニラン', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05780101', '0578', 'ダブラン', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05790101', '0579', 'ランクルス', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05800101', '0580', 'コアルヒー', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05810101', '0581', 'スワンナ', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05820101', '0582', 'バニプッチ', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05830101', '0583', 'バニリッチ', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05840101', '0584', 'バイバニラ', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05850101', '0585', 'シキジカ', 'はるのすがた', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05850201', '0585', 'シキジカ', 'なつのすがた', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05850301', '0585', 'シキジカ', 'あきのすがた', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05850401', '0585', 'シキジカ', 'ふゆのすがた', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05860101', '0586', 'メブキジカ', 'はるのすがた', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05860201', '0586', 'メブキジカ', 'なつのすがた', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05860301', '0586', 'メブキジカ', 'あきのすがた', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05860401', '0586', 'メブキジカ', 'ふゆのすがた', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05870101', '0587', 'エモンガ', 'type-chart/bright/05-10.html', 'type-chart/dark/05-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05880101', '0588', 'カブルモ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05890101', '0589', 'シュバルゴ', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05900101', '0590', 'タマゲタケ', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05910101', '0591', 'モロバレル', 'type-chart/bright/04-08.html', 'type-chart/dark/04-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05920101', '0592', 'プルリル', 'オスのすがた', 'type-chart/bright/03-14.html', 'type-chart/dark/03-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05920102', '0592', 'プルリル', 'メスのすがた', 'type-chart/bright/03-14.html', 'type-chart/dark/03-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05930101', '0593', 'ブルンゲル', 'オスのすがた', 'type-chart/bright/03-14.html', 'type-chart/dark/03-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05930102', '0593', 'ブルンゲル', 'メスのすがた', 'type-chart/bright/03-14.html', 'type-chart/dark/03-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05940101', '0594', 'ママンボウ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05950101', '0595', 'バチュル', 'type-chart/bright/05-12.html', 'type-chart/dark/05-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05960101', '0596', 'デンチュラ', 'type-chart/bright/05-12.html', 'type-chart/dark/05-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05970101', '0597', 'テッシード', 'type-chart/bright/04-17.html', 'type-chart/dark/04-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05980101', '0598', 'ナットレイ', 'type-chart/bright/04-17.html', 'type-chart/dark/04-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('05990101', '0599', 'ギアル', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06000101', '0600', 'ギギアル', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06010101', '0601', 'ギギギアル', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06020101', '0602', 'シビシラス', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06030101', '0603', 'シビビール', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06040101', '0604', 'シビルドン', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06040201', '0604', 'シビルドン', 'メガシビルドン', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06050101', '0605', 'リグレー', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06060101', '0606', 'オーベム', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06070101', '0607', 'ヒトモシ', 'type-chart/bright/02-14.html', 'type-chart/dark/02-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06080101', '0608', 'ランプラー', 'type-chart/bright/02-14.html', 'type-chart/dark/02-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06090101', '0609', 'シャンデラ', 'type-chart/bright/02-14.html', 'type-chart/dark/02-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06090201', '0609', 'シャンデラ', 'メガシャンデラ', 'type-chart/bright/02-14.html', 'type-chart/dark/02-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06100101', '0610', 'キバゴ', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06110101', '0611', 'オノンド', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06120101', '0612', 'オノノクス', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06130101', '0613', 'クマシュン', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06140101', '0614', 'ツンベアー', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06150101', '0615', 'フリージオ', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06160101', '0616', 'チョボマキ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06170101', '0617', 'アギルダー', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06180101', '0618', 'マッギョ', 'type-chart/bright/05-09.html', 'type-chart/dark/05-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06180201', '0618', 'マッギョ', 'ガラルのすがた', 'type-chart/bright/09-17.html', 'type-chart/dark/09-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06190101', '0619', 'コジョフー', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06200101', '0620', 'コジョンド', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06210101', '0621', 'クリムガン', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06220101', '0622', 'ゴビット', 'type-chart/bright/09-14.html', 'type-chart/dark/09-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06230101', '0623', 'ゴルーグ', 'type-chart/bright/09-14.html', 'type-chart/dark/09-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06230201', '0623', 'ゴルーグ', 'メガゴルーグ', 'type-chart/bright/09-14.html', 'type-chart/dark/09-14.html');





INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06240101', '0624', 'コマタナ', 'type-chart/bright/16-17.html', 'type-chart/dark/16-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06250101', '0625', 'キリキザン', 'type-chart/bright/16-17.html', 'type-chart/dark/16-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06260101', '0626', 'バッフロン', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06270101', '0627', 'ワシボン', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06280101', '0628', 'ウォーグル', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06280201', '0628', 'ウォーグル', 'ヒスイのすがた', 'type-chart/bright/10-11.html', 'type-chart/dark/10-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06290101', '0629', 'バルチャイ', 'type-chart/bright/10-16.html', 'type-chart/dark/10-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06300101', '0630', 'バルジーナ', 'type-chart/bright/10-16.html', 'type-chart/dark/10-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06310101', '0631', 'クイタラン', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06320101', '0632', 'アイアント', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06330101', '0633', 'モノズ', 'type-chart/bright/15-16.html', 'type-chart/dark/15-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06340101', '0634', 'ジヘッド', 'type-chart/bright/15-16.html', 'type-chart/dark/15-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06350101', '0635', 'サザンドラ', 'type-chart/bright/15-16.html', 'type-chart/dark/15-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06360101', '0636', 'メラルバ', 'type-chart/bright/02-12.html', 'type-chart/dark/02-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06370101', '0637', 'ウルガモス', 'type-chart/bright/02-12.html', 'type-chart/dark/02-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06380101', '0638', 'コバルオン', 'type-chart/bright/07-17.html', 'type-chart/dark/07-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06390101', '0639', 'テラキオン', 'type-chart/bright/07-13.html', 'type-chart/dark/07-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06400101', '0640', 'ビリジオン', 'type-chart/bright/04-07.html', 'type-chart/dark/04-07.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06410101', '0641', 'トルネロス', 'けしんフォルム', 'type-chart/bright/10-10.html', 'type-chart/dark/10-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06410201', '0641', 'トルネロス', 'れいじゅうフォルム', 'type-chart/bright/10-10.html', 'type-chart/dark/10-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06420101', '0642', 'ボルトロス', 'けしんフォルム', 'type-chart/bright/05-10.html', 'type-chart/dark/05-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06420201', '0642', 'ボルトロス', 'れいじゅうフォルム', 'type-chart/bright/05-10.html', 'type-chart/dark/05-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06430101', '0643', 'レシラム', 'type-chart/bright/02-15.html', 'type-chart/dark/02-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06440101', '0644', 'ゼクロム', 'type-chart/bright/05-15.html', 'type-chart/dark/05-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06450101', '0645', 'ランドロス', 'けしんフォルム', 'type-chart/bright/09-10.html', 'type-chart/dark/09-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06450201', '0645', 'ランドロス', 'れいじゅうフォルム', 'type-chart/bright/09-10.html', 'type-chart/dark/09-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06460101', '0646', 'キュレム', 'type-chart/bright/06-15.html', 'type-chart/dark/06-15.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06460201', '0646', 'キュレム', 'ホワイトキュレム', 'type-chart/bright/06-15.html', 'type-chart/dark/06-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06460301', '0646', 'キュレム', 'ブラックキュレム', 'type-chart/bright/06-15.html', 'type-chart/dark/06-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06470101', '0647', 'ケルディオ', 'いつものすがた', 'type-chart/bright/03-07.html', 'type-chart/dark/03-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06470201', '0647', 'ケルディオ', 'かくごのすがた', 'type-chart/bright/03-07.html', 'type-chart/dark/03-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06480101', '0648', 'メロエッタ', 'ボイスフォルム', 'type-chart/bright/01-11.html', 'type-chart/dark/01-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06480201', '0648', 'メロエッタ', 'ステップフォルム', 'type-chart/bright/01-07.html', 'type-chart/dark/01-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06490101', '0649', 'ゲノセクト', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06490201', '0649', 'ゲノセクト', 'ブレイズカセット', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06490301', '0649', 'ゲノセクト', 'アクアカセット', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06490401', '0649', 'ゲノセクト', 'イナズマカセット', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06490501', '0649', 'ゲノセクト', 'フリーズカセット', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06500101', '0650', 'ハリマロン', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06510101', '0651', 'ハリボーグ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06520101', '0652', 'ブリガロン', 'type-chart/bright/04-07.html', 'type-chart/dark/04-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06520201', '0652', 'ブリガロン', 'メガブリガロン', 'type-chart/bright/04-07.html', 'type-chart/dark/04-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06530101', '0653', 'フォッコ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06540101', '0654', 'テールナー', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06550101', '0655', 'マフォクシー', 'type-chart/bright/02-11.html', 'type-chart/dark/02-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06550201', '0655', 'マフォクシー', 'メガマフォクシー', 'type-chart/bright/02-11.html', 'type-chart/dark/02-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06560101', '0656', 'ケロマツ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06570101', '0657', 'ゲコガシラ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06580101', '0658', 'ゲッコウガ', 'type-chart/bright/03-16.html', 'type-chart/dark/03-16.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06580201', '0658', 'ゲッコウガ', 'サトシゲッコウガ', 'type-chart/bright/03-16.html', 'type-chart/dark/03-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06580301', '0658', 'ゲッコウガ', 'メガゲッコウガ', 'type-chart/bright/03-16.html', 'type-chart/dark/03-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06590101', '0659', 'ホルビー', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06600101', '0660', 'ホルード', 'type-chart/bright/01-09.html', 'type-chart/dark/01-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06610101', '0661', 'ヤヤコマ', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06620101', '0662', 'ヒノヤコマ', 'type-chart/bright/02-10.html', 'type-chart/dark/02-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06630101', '0663', 'ファイアロー', 'type-chart/bright/02-10.html', 'type-chart/dark/02-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06640101', '0664', 'コフキムシ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06650101', '0665', 'コフーライ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06660101', '0666', 'ビビヨン', 'ひょうせつのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06660201', '0666', 'ビビヨン', 'ゆきぐにのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06660301', '0666', 'ビビヨン', 'せつげんのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06660401', '0666', 'ビビヨン', 'たいりくのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06660501', '0666', 'ビビヨン', 'ていえんのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06660601', '0666', 'ビビヨン', 'みやびなもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06660701', '0666', 'ビビヨン', 'はなぞののもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06660801', '0666', 'ビビヨン', 'モダンなもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06660901', '0666', 'ビビヨン', 'マリンのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06661001', '0666', 'ビビヨン', 'ぐんとうのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06661101', '0666', 'ビビヨン', 'こうやのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06661201', '0666', 'ビビヨン', 'さじんのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06661301', '0666', 'ビビヨン', 'たいがのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06661401', '0666', 'ビビヨン', 'スコールのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06661501', '0666', 'ビビヨン', 'サバンナのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06661601', '0666', 'ビビヨン', 'たいようのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06661701', '0666', 'ビビヨン', 'オーシャンのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06661801', '0666', 'ビビヨン', 'ジャングルのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06661901', '0666', 'ビビヨン', 'ファンシーのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06662001', '0666', 'ビビヨン', 'ボールのもよう', 'type-chart/bright/10-12.html', 'type-chart/dark/10-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06670101', '0667', 'シシコ', 'type-chart/bright/01-02.html', 'type-chart/dark/01-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06680101', '0668', 'カエンジシ', 'オスのすがた', 'type-chart/bright/01-02.html', 'type-chart/dark/01-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06680102', '0668', 'カエンジシ', 'メスのすがた', 'type-chart/bright/01-02.html', 'type-chart/dark/01-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06680201', '0668', 'カエンジシ', 'メガカエンジシ', 'type-chart/bright/01-02.html', 'type-chart/dark/01-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06690101', '0669', 'フラベベ', 'あかいはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06690201', '0669', 'フラベベ', 'きいろのはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06690301', '0669', 'フラベベ', 'オレンジいろのはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06690401', '0669', 'フラベベ', 'あおいはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06690501', '0669', 'フラベベ', 'しろいはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06700101', '0670', 'フラエッテ', 'あかいはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06700201', '0670', 'フラエッテ', 'きいろのはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06700301', '0670', 'フラエッテ', 'オレンジいろのはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06700401', '0670', 'フラエッテ', 'あおいはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06700501', '0670', 'フラエッテ', 'しろいはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06700601', '0670', 'フラエッテ', 'えいえんのはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06700701', '0670', 'フラエッテ', 'メガフラエッテ', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06710101', '0671', 'フラージェス', 'あかいはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06710201', '0671', 'フラージェス', 'きいろのはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06710301', '0671', 'フラージェス', 'オレンジいろのはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06710401', '0671', 'フラージェス', 'あおいはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06710501', '0671', 'フラージェス', 'しろいはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06720101', '0672', 'メェークル', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06730101', '0673', 'ゴーゴート', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06740101', '0674', 'ヤンチャム', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06750101', '0675', 'ゴロンダ', 'type-chart/bright/07-16.html', 'type-chart/dark/07-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06760101', '0676', 'トリミアン', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06760201', '0676', 'トリミアン', 'ハートカット', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06760301', '0676', 'トリミアン', 'スターカット', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06760401', '0676', 'トリミアン', 'ダイヤカット', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06760501', '0676', 'トリミアン', 'クイーンカット', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06760601', '0676', 'トリミアン', 'カブキカット', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06760701', '0676', 'トリミアン', 'キングダムカット', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06760801', '0676', 'トリミアン', 'レディカット', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06760901', '0676', 'トリミアン', 'マダムカット', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06761001', '0676', 'トリミアン', 'ジェントルカット', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06770101', '0677', 'ニャスパー', 'type-chart/bright/11-14.html', 'type-chart/dark/11-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06780101', '0678', 'ニャオニクス', 'オスのすがた', 'type-chart/bright/11-14.html', 'type-chart/dark/11-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06780102', '0678', 'ニャオニクス', 'メスのすがた', 'type-chart/bright/11-14.html', 'type-chart/dark/11-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06780201', '0678', 'ニャオニクス', 'メガニャオニクス', 'type-chart/bright/11-14.html', 'type-chart/dark/11-14.html');





INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06790101', '0679', 'ヒトツキ', 'type-chart/bright/14-17.html', 'type-chart/dark/14-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06800101', '0680', 'ニダンギル', 'type-chart/bright/14-17.html', 'type-chart/dark/14-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06810101', '0681', 'ギルガルド', 'シールドフォルム', 'type-chart/bright/14-17.html', 'type-chart/dark/14-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06810201', '0681', 'ギルガルド', 'ブレードフォルム', 'type-chart/bright/14-17.html', 'type-chart/dark/14-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06820101', '0682', 'シュシュプ', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06830101', '0683', 'フレフワン', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06840101', '0684', 'ペロッパフ', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06850101', '0685', 'ペロリーム', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06860101', '0686', 'マーイーカ', 'type-chart/bright/11-16.html', 'type-chart/dark/11-16.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06870101', '0687', 'カラマネロ', 'type-chart/bright/11-16.html', 'type-chart/dark/11-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06870201', '0687', 'カラマネロ', 'メガカラマネロ', 'type-chart/bright/11-16.html', 'type-chart/dark/11-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06880101', '0688', 'カメテテ', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06890101', '0689', 'ガメノデス', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06890201', '0689', 'ガメノデス', 'メガガメノデス', 'type-chart/bright/07-13.html', 'type-chart/dark/07-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06900101', '0690', 'クズモー', 'type-chart/bright/03-08.html', 'type-chart/dark/03-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06910101', '0691', 'ドラミドロ', 'type-chart/bright/08-15.html', 'type-chart/dark/08-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06910201', '0691', 'ドラミドロ', 'メガドラミドロ', 'type-chart/bright/08-15.html', 'type-chart/dark/08-15.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06920101', '0692', 'ウデッポウ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06930101', '0693', 'ブロスター', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06940101', '0694', 'エリキテル', 'type-chart/bright/01-05.html', 'type-chart/dark/01-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06950101', '0695', 'エレザード', 'type-chart/bright/01-05.html', 'type-chart/dark/01-05.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06960101', '0696', 'チゴラス', 'type-chart/bright/13-15.html', 'type-chart/dark/13-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06970101', '0697', 'ガチゴラス', 'type-chart/bright/13-15.html', 'type-chart/dark/13-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06980101', '0698', 'アマルス', 'type-chart/bright/06-13.html', 'type-chart/dark/06-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('06990101', '0699', 'アマルルガ', 'type-chart/bright/06-13.html', 'type-chart/dark/06-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07000101', '0700', 'ニンフィア', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07010101', '0701', 'ルチャブル', 'type-chart/bright/07-10.html', 'type-chart/dark/07-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07010201', '0701', 'ルチャブル', 'メガルチャブル', 'type-chart/bright/07-10.html', 'type-chart/dark/07-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07020101', '0702', 'デデンネ', 'type-chart/bright/05-18.html', 'type-chart/dark/05-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07030101', '0703', 'メレシー', 'type-chart/bright/13-18.html', 'type-chart/dark/13-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07040101', '0704', 'ヌメラ', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07050101', '0705', 'ヌメイル', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07050201', '0705', 'ヌメイル', 'ヒスイのすがた', 'type-chart/bright/15-17.html', 'type-chart/dark/15-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07060101', '0706', 'ヌメルゴン', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07060201', '0706', 'ヌメルゴン', 'ヒスイのすがた', 'type-chart/bright/15-17.html', 'type-chart/dark/15-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07070101', '0707', 'クレッフィ', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07080101', '0708', 'ボクレー', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07090101', '0709', 'オーロット', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07100101', '0710', 'バケッチャ', 'ちゅうだましゅ(ふつうのサイズ)', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07100201', '0710', 'バケッチャ', 'こだましゅ(ちいさいサイズ)', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07100301', '0710', 'バケッチャ', 'おおだましゅ(おおきいサイズ)', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07100401', '0710', 'バケッチャ', 'ギガだましゅ(とくだいサイズ)', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07110101', '0711', 'パンプジン', 'ちゅうだましゅ(ふつうのサイズ)', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07110201', '0711', 'パンプジン', 'こだましゅ(ちいさいサイズ)', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07110301', '0711', 'パンプジン', 'おおだましゅ(おおきいサイズ)', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07110401', '0711', 'パンプジン', 'ギガだましゅ(とくだいサイズ)', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07120101', '0712', 'カチコール', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07130101', '0713', 'クレベース', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07130201', '0713', 'クレベース', 'ヒスイのすがた', 'type-chart/bright/06-13.html', 'type-chart/dark/06-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07140101', '0714', 'オンバット', 'type-chart/bright/10-15.html', 'type-chart/dark/10-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07150101', '0715', 'オンバーン', 'type-chart/bright/10-15.html', 'type-chart/dark/10-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07160101', '0716', 'ゼルネアス', 'リラックスモード', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07160201', '0716', 'ゼルネアス', 'アクティブモード', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07170101', '0717', 'イベルタル', 'type-chart/bright/10-16.html', 'type-chart/dark/10-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07180101', '0718', 'ジガルデ', '50%フォルム', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07180201', '0718', 'ジガルデ', '10%フォルム', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07180301', '0718', 'ジガルデ', '100%フォルム', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07180401', '0718', 'ジガルデ', 'メガジガルデ', 'type-chart/bright/09-15.html', 'type-chart/dark/09-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07190101', '0719', 'ディアンシー', 'type-chart/bright/13-18.html', 'type-chart/dark/13-18.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07190201', '0719', 'ディアンシー', 'メガディアンシー', 'type-chart/bright/13-18.html', 'type-chart/dark/13-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07200101', '0720', 'フーパ', 'いましめられしフーパ', 'type-chart/bright/11-14.html', 'type-chart/dark/11-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07200201', '0720', 'フーパ', 'ときはなたれしフーパ', 'type-chart/bright/11-16.html', 'type-chart/dark/11-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07210101', '0721', 'ボルケニオン', 'type-chart/bright/02-03.html', 'type-chart/dark/02-03.html');


INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07220101', '0722', 'モクロー', 'type-chart/bright/04-10.html', 'type-chart/dark/04-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07230101', '0723', 'フクスロー', 'type-chart/bright/04-10.html', 'type-chart/dark/04-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07240101', '0724', 'ジュナイパー', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07240201', '0724', 'ジュナイパー', 'ヒスイのすがた', 'type-chart/bright/04-07.html', 'type-chart/dark/04-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07250101', '0725', 'ニャビー', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07260101', '0726', 'ニャヒート', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07270101', '0727', 'ガオガエン', 'type-chart/bright/02-16.html', 'type-chart/dark/02-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07280101', '0728', 'アシマリ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07290101', '0729', 'オシャマリ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07300101', '0730', 'アシレーヌ', 'type-chart/bright/03-18.html', 'type-chart/dark/03-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07310101', '0731', 'ツツケラ', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07320101', '0732', 'ケララッパ', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07330101', '0733', 'ドデカバシ', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07340101', '0734', 'ヤングース', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07350101', '0735', 'デカグース', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07360101', '0736', 'アゴジムシ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07370101', '0737', 'デンヂムシ', 'type-chart/bright/05-12.html', 'type-chart/dark/05-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07380101', '0738', 'クワガノン', 'type-chart/bright/05-12.html', 'type-chart/dark/05-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07390101', '0739', 'マケンカニ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07400101', '0740', 'ケケンカニ', 'type-chart/bright/06-07.html', 'type-chart/dark/06-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07400201', '0740', 'ケケンカニ', 'メガケケンカニ', 'type-chart/bright/06-07.html', 'type-chart/dark/06-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07410101', '0741', 'オドリドリ', 'めらめらスタイル', 'type-chart/bright/02-10.html', 'type-chart/dark/02-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07410201', '0741', 'オドリドリ', 'ぱちぱちスタイル', 'type-chart/bright/05-10.html', 'type-chart/dark/05-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07410301', '0741', 'オドリドリ', 'ふらふらスタイル', 'type-chart/bright/10-11.html', 'type-chart/dark/10-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07410401', '0741', 'オドリドリ', 'まいまいスタイル', 'type-chart/bright/10-14.html', 'type-chart/dark/10-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07420101', '0742', 'アブリー', 'type-chart/bright/12-18.html', 'type-chart/dark/12-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07430101', '0743', 'アブリボン', 'type-chart/bright/12-18.html', 'type-chart/dark/12-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07440101', '0744', 'イワンコ', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07450101', '0745', 'ルガルガン', 'まひるのすがた', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07450201', '0745', 'ルガルガン', 'まよなかのすがた', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07450301', '0745', 'ルガルガン', 'たそがれのすがた', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07460101', '0746', 'ヨワシ', 'たんどくのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07460201', '0746', 'ヨワシ', 'むれたすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07470101', '0747', 'ヒドイデ', 'type-chart/bright/03-08.html', 'type-chart/dark/03-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07480101', '0748', 'ドヒドイデ', 'type-chart/bright/03-08.html', 'type-chart/dark/03-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07490101', '0749', 'ドロバンコ', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07500101', '0750', 'バンバドロ', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07510101', '0751', 'シズクモ', 'type-chart/bright/03-12.html', 'type-chart/dark/03-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07520101', '0752', 'オニシズクモ', 'type-chart/bright/03-12.html', 'type-chart/dark/03-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07530101', '0753', 'カリキリ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07540101', '0754', 'ラランテス', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07550101', '0755', 'ネマシュ', 'type-chart/bright/04-18.html', 'type-chart/dark/04-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07560101', '0756', 'マシェード', 'type-chart/bright/04-18.html', 'type-chart/dark/04-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07570101', '0757', 'ヤトウモリ', 'type-chart/bright/02-08.html', 'type-chart/dark/02-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07580101', '0758', 'エンニュート', 'type-chart/bright/02-08.html', 'type-chart/dark/02-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07590101', '0759', 'ヌイコグマ', 'type-chart/bright/01-07.html', 'type-chart/dark/01-07.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07600101', '0760', 'キテルグマ', 'type-chart/bright/01-07.html', 'type-chart/dark/01-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07610101', '0761', 'アマカジ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07620101', '0762', 'アママイコ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07630101', '0763', 'アマージョ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07640101', '0764', 'キュワワー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07650101', '0765', 'ヤレユータン', 'type-chart/bright/01-11.html', 'type-chart/dark/01-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07660101', '0766', 'ナゲツケサル', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07670101', '0767', 'コソクムシ', 'type-chart/bright/03-12.html', 'type-chart/dark/03-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07680101', '0768', 'グソクムシャ', 'type-chart/bright/03-12.html', 'type-chart/dark/03-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07680201', '0768', 'グソクムシャ', 'メガグソクムシャ', 'type-chart/bright/12-17.html', 'type-chart/dark/12-17.html');




INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07690101', '0769', 'スナバァ', 'type-chart/bright/09-14.html', 'type-chart/dark/09-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07700101', '0770', 'シロデスナ', 'type-chart/bright/09-14.html', 'type-chart/dark/09-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07710101', '0771', 'ナマコブシ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07720101', '0772', 'タイプ：ヌル', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07730101', '0773', 'シルヴァディ', 'タイプ：ノーマル', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07730201', '0773', 'シルヴァディ', 'タイプ：ファイヤー', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07730301', '0773', 'シルヴァディ', 'タイプ：ウォーター', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07730401', '0773', 'シルヴァディ', 'タイプ：グラス', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07730501', '0773', 'シルヴァディ', 'タイプ：エレクトロ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07730601', '0773', 'シルヴァディ', 'タイプ：アイス', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07730701', '0773', 'シルヴァディ', 'タイプ：ファイト', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07730801', '0773', 'シルヴァディ', 'タイプ：ポイズン', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07730901', '0773', 'シルヴァディ', 'タイプ：グラウンド', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07731001', '0773', 'シルヴァディ', 'タイプ：フライング', 'type-chart/bright/10-10.html', 'type-chart/dark/10-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07731101', '0773', 'シルヴァディ', 'タイプ：サイキック', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07731201', '0773', 'シルヴァディ', 'タイプ：バグ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07731301', '0773', 'シルヴァディ', 'タイプ：ロック', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07731401', '0773', 'シルヴァディ', 'タイプ：ゴースト', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07731501', '0773', 'シルヴァディ', 'タイプ：ドラゴン', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07731601', '0773', 'シルヴァディ', 'タイプ：ダーク', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07731701', '0773', 'シルヴァディ', 'タイプ：スチール', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07731801', '0773', 'シルヴァディ', 'タイプ：フェアリー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07740101', '0774', 'メテノ', 'りゅうせいのすがた', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07740201', '0774', 'メテノ', 'あかいろのコア', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07740301', '0774', 'メテノ', 'だいだいいろのコア', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07740401', '0774', 'メテノ', 'きいろのコア', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07740501', '0774', 'メテノ', 'みどりいろのコア', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07740601', '0774', 'メテノ', 'みずいろのコア', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07740701', '0774', 'メテノ', 'あおいろのコア', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07740801', '0774', 'メテノ', 'むらさきいろのコア', 'type-chart/bright/10-13.html', 'type-chart/dark/10-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07750101', '0775', 'ネッコアラ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07760101', '0776', 'バクガメス', 'type-chart/bright/02-15.html', 'type-chart/dark/02-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07770101', '0777', 'トゲデマル', 'type-chart/bright/05-17.html', 'type-chart/dark/05-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07780101', '0778', 'ミミッキュ', 'ばけたすがた', 'type-chart/bright/14-18.html', 'type-chart/dark/14-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07780201', '0778', 'ミミッキュ', 'ばれたすがた', 'type-chart/bright/14-18.html', 'type-chart/dark/14-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07790101', '0779', 'ハギギシリ', 'type-chart/bright/03-11.html', 'type-chart/dark/03-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07800101', '0780', 'ジジーロン', 'type-chart/bright/01-15.html', 'type-chart/dark/01-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07800201', '0780', 'ジジーロン', 'メガジジーロン', 'type-chart/bright/01-15.html', 'type-chart/dark/01-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07810101', '0781', 'ダダリン', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07820101', '0782', 'ジャラコ', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07830101', '0783', 'ジャランゴ', 'type-chart/bright/07-15.html', 'type-chart/dark/07-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07840101', '0784', 'ジャラランガ', 'type-chart/bright/07-15.html', 'type-chart/dark/07-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07850101', '0785', 'カプ・コケコ', 'type-chart/bright/05-18.html', 'type-chart/dark/05-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07860101', '0786', 'カプ・テテフ', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07870101', '0787', 'カプ・ブルル', 'type-chart/bright/04-18.html', 'type-chart/dark/04-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07880101', '0788', 'カプ・レヒレ', 'type-chart/bright/03-18.html', 'type-chart/dark/03-18.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07890101', '0789', 'コスモッグ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07900101', '0790', 'コスモウム', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07910101', '0791', 'ソルガレオ', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07920101', '0792', 'ルナアーラ', 'type-chart/bright/11-14.html', 'type-chart/dark/11-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07930101', '0793', 'ウツロイド', 'type-chart/bright/08-13.html', 'type-chart/dark/08-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07940101', '0794', 'マッシブーン', 'type-chart/bright/07-12.html', 'type-chart/dark/07-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07950101', '0795', 'フェローチェ', 'type-chart/bright/07-12.html', 'type-chart/dark/07-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07960101', '0796', 'デンジュモク', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07970101', '0797', 'テッカグヤ', 'type-chart/bright/10-17.html', 'type-chart/dark/10-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07980101', '0798', 'カミツルギ', 'type-chart/bright/04-17.html', 'type-chart/dark/04-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('07990101', '0799', 'アクジキング', 'type-chart/bright/15-16.html', 'type-chart/dark/15-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08000101', '0800', 'ネクロズマ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08000201', '0800', 'ネクロズマ', 'たそがれのたてがみ', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08000301', '0800', 'ネクロズマ', 'あかつきのつばさ', 'type-chart/bright/11-14.html', 'type-chart/dark/11-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08000401', '0800', 'ネクロズマ', 'ウルトラネクロズマ', 'type-chart/bright/11-15.html', 'type-chart/dark/11-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08010101', '0801', 'マギアナ', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08010201', '0801', 'マギアナ', '500ねんまえのいろ', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08010301', '0801', 'マギアナ', 'メガマギアナ', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08010401', '0801', 'マギアナ', 'メガマギアナ・500ねんまえのいろ', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08020101', '0802', 'マーシャドー', 'type-chart/bright/07-14.html', 'type-chart/dark/07-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08030101', '0803', 'ベベノム', 'type-chart/bright/08-08.html', 'type-chart/dark/08-08.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08040101', '0804', 'アーゴヨン', 'type-chart/bright/08-15.html', 'type-chart/dark/08-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08050101', '0805', 'ツンデツンデ', 'type-chart/bright/13-17.html', 'type-chart/dark/13-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08060101', '0806', 'ズガドーン', 'type-chart/bright/02-14.html', 'type-chart/dark/02-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08070101', '0807', 'ゼラオラ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08070201', '0807', 'ゼラオラ', 'メガゼラオラ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08080101', '0808', 'メルタン', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08090101', '0809', 'メルメタル', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08090201', '0809', 'メルメタル', 'キョダイマックスのすがた', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');




INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08100101', '0810', 'サルノリ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08110101', '0811', 'バチンキー', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08120101', '0812', 'ゴリランダー', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08120201', '0812', 'ゴリランダー', 'キョダイマックスのすがた', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08130101', '0813', 'ヒバニー', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08140101', '0814', 'ラビフット', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08150101', '0815', 'エースバーン', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08150201', '0815', 'エースバーン', 'キョダイマックスのすがた', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08160101', '0816', 'メッソン', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08170101', '0817', 'ジメレオン', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08180101', '0818', 'インテレオン', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08180201', '0818', 'インテレオン', 'キョダイマックスのすがた', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08190101', '0819', 'ホシガリス', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08200101', '0820', 'ヨクバリス', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08210101', '0821', 'ココガラ', 'type-chart/bright/10-10.html', 'type-chart/dark/10-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08220101', '0822', 'アオガラス', 'type-chart/bright/10-10.html', 'type-chart/dark/10-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08230101', '0823', 'アーマーガア', 'type-chart/bright/10-17.html', 'type-chart/dark/10-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08230201', '0823', 'アーマーガア', 'キョダイマックスのすがた', 'type-chart/bright/10-17.html', 'type-chart/dark/10-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08240101', '0824', 'サッチムシ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08250101', '0825', 'レドームシ', 'type-chart/bright/11-12.html', 'type-chart/dark/11-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08260101', '0826', 'イオルブ', 'type-chart/bright/11-12.html', 'type-chart/dark/11-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08260201', '0826', 'イオルブ', 'キョダイマックスのすがた', 'type-chart/bright/11-12.html', 'type-chart/dark/11-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08270101', '0827', 'クスネ', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08280101', '0828', 'フォクスライ', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08290101', '0829', 'ヒメンカ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08300101', '0830', 'ワタシラガ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08310101', '0831', 'ウールー', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08320101', '0832', 'バイウールー', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08330101', '0833', 'カムカメ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08340101', '0834', 'カジリガメ', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08340201', '0834', 'カジリガメ', 'キョダイマックスのすがた', 'type-chart/bright/03-13.html', 'type-chart/dark/03-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08350101', '0835', 'ワンパチ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08360101', '0836', 'パルスワン', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08370101', '0837', 'タンドン', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08380101', '0838', 'トロッゴン', 'type-chart/bright/02-13.html', 'type-chart/dark/02-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08390101', '0839', 'セキタンザン', 'type-chart/bright/02-13.html', 'type-chart/dark/02-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08390201', '0839', 'セキタンザン', 'キョダイマックスのすがた', 'type-chart/bright/02-13.html', 'type-chart/dark/02-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08400101', '0840', 'カジッチュ', 'type-chart/bright/04-15.html', 'type-chart/dark/04-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08410101', '0841', 'アップリュー', 'type-chart/bright/04-15.html', 'type-chart/dark/04-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08410201', '0841', 'アップリュー', 'キョダイマックスのすがた', 'type-chart/bright/04-15.html', 'type-chart/dark/04-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08420101', '0842', 'タルップル', 'type-chart/bright/04-15.html', 'type-chart/dark/04-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08420201', '0842', 'タルップル', 'キョダイマックスのすがた', 'type-chart/bright/04-15.html', 'type-chart/dark/04-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08430101', '0843', 'スナヘビ', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08440101', '0844', 'サダイジャ', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08440201', '0844', 'サダイジャ', 'キョダイマックスのすがた', 'type-chart/bright/09-09.html', 'type-chart/dark/09-09.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08450101', '0845', 'ウッウ', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08450201', '0845', 'ウッウ', 'うのみのすがた', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08450301', '0845', 'ウッウ', 'まるのみのすがた', 'type-chart/bright/03-10.html', 'type-chart/dark/03-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08460101', '0846', 'サシカマス', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08470101', '0847', 'カマスジョー', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08480101', '0848', 'エレズン', 'type-chart/bright/05-08.html', 'type-chart/dark/05-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08490101', '0849', 'ストリンダー', 'ハイなすがた', 'type-chart/bright/05-08.html', 'type-chart/dark/05-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08490201', '0849', 'ストリンダー', 'ローなすがた', 'type-chart/bright/05-08.html', 'type-chart/dark/05-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08490301', '0849', 'ストリンダー', 'ハイなすがた・キョダイマックスのすがた', 'type-chart/bright/05-08.html', 'type-chart/dark/05-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08490401', '0849', 'ストリンダー', 'ローなすがた・キョダイマックスのすがた', 'type-chart/bright/05-08.html', 'type-chart/dark/05-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08500101', '0850', 'ヤクデ', 'type-chart/bright/02-12.html', 'type-chart/dark/02-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08510101', '0851', 'マルヤクデ', 'type-chart/bright/02-12.html', 'type-chart/dark/02-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08510201', '0851', 'マルヤクデ', 'キョダイマックスのすがた', 'type-chart/bright/02-12.html', 'type-chart/dark/02-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08520101', '0852', 'タタッコ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08530101', '0853', 'オトスパス', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08540101', '0854', 'ヤバチャ', 'がんさくフォルム', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08540201', '0854', 'ヤバチャ', 'しんさくフォルム', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08550101', '0855', 'ポットデス', 'がんさくフォルム', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08550201', '0855', 'ポットデス', 'しんさくフォルム', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08560101', '0856', 'ミブリム', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08570101', '0857', 'テブリム', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08580101', '0858', 'ブリムオン', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08580201', '0858', 'ブリムオン', 'キョダイマックスのすがた', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08590101', '0859', 'ベロバー', 'type-chart/bright/16-18.html', 'type-chart/dark/16-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08600101', '0860', 'ギモー', 'type-chart/bright/16-18.html', 'type-chart/dark/16-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08610101', '0861', 'オーロンゲ', 'type-chart/bright/16-18.html', 'type-chart/dark/16-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08610201', '0861', 'オーロンゲ', 'キョダイマックスのすがた', 'type-chart/bright/16-18.html', 'type-chart/dark/16-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08620101', '0862', 'タチフサグマ', 'type-chart/bright/01-16.html', 'type-chart/dark/01-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08630101', '0863', 'ニャイキング', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08640101', '0864', 'サニゴーン', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08650101', '0865', 'ネギガナイト', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08660101', '0866', 'バリコオル', 'type-chart/bright/06-11.html', 'type-chart/dark/06-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08670101', '0867', 'デスバーン', 'type-chart/bright/09-14.html', 'type-chart/dark/09-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08680101', '0868', 'マホミル', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');




INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08690101', '0869', 'マホイップ', 'ミルキティバニラ・いちご', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08690201', '0869', 'マホイップ', 'ミルキティバニラ・ベリー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08690301', '0869', 'マホイップ', 'ミルキティバニラ・ハート', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08690401', '0869', 'マホイップ', 'ミルキティバニラ・スター', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08690501', '0869', 'マホイップ', 'ミルキティバニラ・よつば', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08690601', '0869', 'マホイップ', 'ミルキティバニラ・おはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08690701', '0869', 'マホイップ', 'ミルキティバニラ・リボン', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');




INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08690801', '0869', 'マホイップ', 'ミルキティルビー・いちご', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08690901', '0869', 'マホイップ', 'ミルキティルビー・ベリー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08691001', '0869', 'マホイップ', 'ミルキティルビー・ハート', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08691101', '0869', 'マホイップ', 'ミルキティルビー・スター', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08691201', '0869', 'マホイップ', 'ミルキティルビー・よつば', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08691301', '0869', 'マホイップ', 'ミルキティルビー・おはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08691401', '0869', 'マホイップ', 'ミルキティルビー・リボン', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');









INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08691501', '0869', 'マホイップ', 'ミルキティまっちゃ・いちご', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08691601', '0869', 'マホイップ', 'ミルキティまっちゃ・ベリー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08691701', '0869', 'マホイップ', 'ミルキティまっちゃ・ハート', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08691801', '0869', 'マホイップ', 'ミルキティまっちゃ・スター', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08691901', '0869', 'マホイップ', 'ミルキティまっちゃ・よつば', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08692001', '0869', 'マホイップ', 'ミルキティまっちゃ・おはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08692101', '0869', 'マホイップ', 'ミルキティまっちゃ・リボン', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08692201', '0869', 'マホイップ', 'ミルキティミント・いちご', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08692301', '0869', 'マホイップ', 'ミルキティミント・ベリー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08692401', '0869', 'マホイップ', 'ミルキティミント・ハート', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08692501', '0869', 'マホイップ', 'ミルキティミント・スター', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08692601', '0869', 'マホイップ', 'ミルキティミント・よつば', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08692701', '0869', 'マホイップ', 'ミルキティミント・おはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08692801', '0869', 'マホイップ', 'ミルキティミント・リボン', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');


INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08692901', '0869', 'マホイップ', 'ミルキティレモン・いちご', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08693001', '0869', 'マホイップ', 'ミルキティレモン・ベリー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08693101', '0869', 'マホイップ', 'ミルキティレモン・ハート', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08693201', '0869', 'マホイップ', 'ミルキティレモン・スター', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08693301', '0869', 'マホイップ', 'ミルキティレモン・よつば', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08693401', '0869', 'マホイップ', 'ミルキティレモン・おはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08693501', '0869', 'マホイップ', 'ミルキティレモン・リボン', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');


INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08693601', '0869', 'マホイップ', 'ミルキティソルト・いちご', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08693701', '0869', 'マホイップ', 'ミルキティソルト・ベリー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08693801', '0869', 'マホイップ', 'ミルキティソルト・ハート', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08693901', '0869', 'マホイップ', 'ミルキティソルト・スター', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08694001', '0869', 'マホイップ', 'ミルキティソルト・よつば', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08694101', '0869', 'マホイップ', 'ミルキティソルト・おはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08694201', '0869', 'マホイップ', 'ミルキティソルト・リボン', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');


INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08694301', '0869', 'マホイップ', 'ルビーミックス・いちご', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08694401', '0869', 'マホイップ', 'ルビーミックス・ベリー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08694501', '0869', 'マホイップ', 'ルビーミックス・ハート', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08694601', '0869', 'マホイップ', 'ルビーミックス・スター', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08694701', '0869', 'マホイップ', 'ルビーミックス・よつば', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08694801', '0869', 'マホイップ', 'ルビーミックス・おはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08694901', '0869', 'マホイップ', 'ルビーミックス・リボン', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');


INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08695001', '0869', 'マホイップ', 'キャラメルミックス・いちご', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08695101', '0869', 'マホイップ', 'キャラメルミックス・ベリー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08695201', '0869', 'マホイップ', 'キャラメルミックス・ハート', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08695301', '0869', 'マホイップ', 'キャラメルミックス・スター', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08695401', '0869', 'マホイップ', 'キャラメルミックス・よつば', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08695501', '0869', 'マホイップ', 'キャラメルミックス・おはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08695601', '0869', 'マホイップ', 'キャラメルミックス・リボン', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08695701', '0869', 'マホイップ', 'トリプルミックス・いちご', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08695801', '0869', 'マホイップ', 'トリプルミックス・ベリー', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08695901', '0869', 'マホイップ', 'トリプルミックス・ハート', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08696001', '0869', 'マホイップ', 'トリプルミックス・スター', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08696101', '0869', 'マホイップ', 'トリプルミックス・よつば', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08696201', '0869', 'マホイップ', 'トリプルミックス・おはな', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08696301', '0869', 'マホイップ', 'トリプルミックス・リボン', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');




INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08696401', '0869', 'マホイップ', 'キョダイマックスのすがた', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08700101', '0870', 'タイレーツ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08700201', '0870', 'タイレーツ', 'メガタイレーツ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08710101', '0871', 'バチンウニ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08720101', '0872', 'ユキハミ', 'type-chart/bright/06-12.html', 'type-chart/dark/06-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08730101', '0873', 'モスノウ', 'type-chart/bright/06-12.html', 'type-chart/dark/06-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08740101', '0874', 'イシヘンジン', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08750101', '0875', 'コオリッポ', 'アイスフェイス', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08750201', '0875', 'コオリッポ', 'ナイスフェイス', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08760101', '0876', 'イエッサン', 'オスのすがた', 'type-chart/bright/01-11.html', 'type-chart/dark/01-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08760102', '0876', 'イエッサン', 'メスのすがた', 'type-chart/bright/01-11.html', 'type-chart/dark/01-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08770101', '0877', 'モルペコ', 'まんぷくもよう', 'type-chart/bright/05-16.html', 'type-chart/dark/05-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08770201', '0877', 'モルペコ', 'はらぺこもよう', 'type-chart/bright/05-16.html', 'type-chart/dark/05-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08780101', '0878', 'ゾウドウ', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08790101', '0879', 'ダイオウドウ', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08790201', '0879', 'ダイオウドウ', 'キョダイマックスのすがた', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08800101', '0880', 'バッチラゴン', 'type-chart/bright/05-15.html', 'type-chart/dark/05-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08810101', '0881', 'バッチルドン', 'type-chart/bright/05-06.html', 'type-chart/dark/05-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08820101', '0882', 'ウオノラゴン', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08830101', '0883', 'ウオチルドン', 'type-chart/bright/03-06.html', 'type-chart/dark/03-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08840101', '0884', 'ジュラルドン', 'type-chart/bright/15-17.html', 'type-chart/dark/15-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08840201', '0884', 'ジュラルドン', 'キョダイマックスのすがた', 'type-chart/bright/15-17.html', 'type-chart/dark/15-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08850101', '0885', 'ドラメシヤ', 'type-chart/bright/14-15.html', 'type-chart/dark/14-15.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08860101', '0886', 'ドロンチ', 'type-chart/bright/14-15.html', 'type-chart/dark/14-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08870101', '0887', 'ドラパルト', 'type-chart/bright/14-15.html', 'type-chart/dark/14-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08880101', '0888', 'ザシアン', 'れきせんのゆうしゃ', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08880201', '0888', 'ザシアン', 'けんのおう', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08890101', '0889', 'ザマゼンタ', 'れきせんのゆうしゃ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08890201', '0889', 'ザマゼンタ', 'たてのおう', 'type-chart/bright/07-17.html', 'type-chart/dark/07-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08900101', '0890', 'ムゲンダイナ', 'type-chart/bright/08-15.html', 'type-chart/dark/08-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08900201', '0890', 'ムゲンダイナ', 'ムゲンダイマックス', 'type-chart/bright/08-15.html', 'type-chart/dark/08-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08910101', '0891', 'ダクマ', 'type-chart/bright/07-07.html', 'type-chart/dark/07-07.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08920101', '0892', 'ウーラオス', 'いちげきのかた', 'type-chart/bright/07-16.html', 'type-chart/dark/07-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08920201', '0892', 'ウーラオス', 'れんげきのかた', 'type-chart/bright/03-07.html', 'type-chart/dark/03-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08920301', '0892', 'ウーラオス', 'いちげきのかた・キョダイマックスのすがた', 'type-chart/bright/07-16.html', 'type-chart/dark/07-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08920401', '0892', 'ウーラオス', 'れんげきのかた・キョダイマックスのすがた', 'type-chart/bright/03-07.html', 'type-chart/dark/03-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08930101', '0893', 'ザルード', 'type-chart/bright/04-16.html', 'type-chart/dark/04-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08930201', '0893', 'ザルード', 'とうちゃんザルード', 'type-chart/bright/04-16.html', 'type-chart/dark/04-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08940101', '0894', 'レジエレキ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08950101', '0895', 'レジドラゴ', 'type-chart/bright/15-15.html', 'type-chart/dark/15-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08960101', '0896', 'ブリザポス', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08970101', '0897', 'レイスポス', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08980101', '0898', 'バトレックス', 'type-chart/bright/04-11.html', 'type-chart/dark/04-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08980201', '0898', 'バトレックス', 'はくばじょうのすがた', 'type-chart/bright/04-11.html', 'type-chart/dark/04-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08980301', '0898', 'バトレックス', 'こくばじょうのすがた', 'type-chart/bright/04-11.html', 'type-chart/dark/04-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('08990101', '0899', 'アヤシシ', 'type-chart/bright/01-11.html', 'type-chart/dark/01-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09000101', '0900', 'バサギリ', 'type-chart/bright/12-13.html', 'type-chart/dark/12-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09010101', '0901', 'ガチグマ', 'type-chart/bright/01-09.html', 'type-chart/dark/01-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09010201', '0901', 'ガチグマ', 'アカツキ', 'type-chart/bright/01-09.html', 'type-chart/dark/01-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09020101', '0902', 'イダイトウ', 'オスのすがた', 'type-chart/bright/03-14.html', 'type-chart/dark/03-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09020102', '0902', 'イダイトウ', 'メスのすがた', 'type-chart/bright/03-14.html', 'type-chart/dark/03-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09030101', '0903', 'オオニューラ', 'type-chart/bright/07-08.html', 'type-chart/dark/07-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09040101', '0904', 'ハリーマン', 'type-chart/bright/08-16.html', 'type-chart/dark/08-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09050101', '0905', 'ラブトロス', 'けしんフォルム', 'type-chart/bright/10-18.html', 'type-chart/dark/10-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09050201', '0905', 'ラブトロス', 'れいじゅうフォルム', 'type-chart/bright/10-18.html', 'type-chart/dark/10-18.html');








INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09060101', '0906', 'ニャオハ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09070101', '0907', 'ニャローテ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09080101', '0908', 'マスカーニャ', 'type-chart/bright/04-16.html', 'type-chart/dark/04-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09090101', '0909', 'ホゲータ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09100101', '0910', 'アチゲータ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09110101', '0911', 'ラウドボーン', 'type-chart/bright/02-14.html', 'type-chart/dark/02-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09120101', '0912', 'クワッス', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09130101', '0913', 'ウェルカモ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09140101', '0914', 'ウェーニバル', 'type-chart/bright/03-07.html', 'type-chart/dark/03-07.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09150101', '0915', 'グルトン', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09160101', '0916', 'パフュートン', 'オスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09160102', '0916', 'パフュートン', 'メスのすがた', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09170101', '0917', 'タマンチュラ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09180101', '0918', 'ワナイダー', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09190101', '0919', 'マメバッタ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09200101', '0920', 'エクスレッグ', 'type-chart/bright/12-16.html', 'type-chart/dark/12-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09210101', '0921', 'パモ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09220101', '0922', 'パモット', 'type-chart/bright/05-07.html', 'type-chart/dark/05-07.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09230101', '0923', 'パーモット', 'type-chart/bright/05-07.html', 'type-chart/dark/05-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09240101', '0924', 'ワッカネズミ', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09250101', '0925', 'イッカネズミ', '3びきかぞく', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09250201', '0925', 'イッカネズミ', '4びきかぞく', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09260101', '0926', 'パピモッチ', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09270101', '0927', 'パウッツェル', 'type-chart/bright/18-18.html', 'type-chart/dark/18-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09280101', '0928', 'ミニーブ', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09290101', '0929', 'オリーニョ', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09300101', '0930', 'オリーヴァ', 'type-chart/bright/01-04.html', 'type-chart/dark/01-04.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09310101', '0931', 'イキリンコ', 'グリーンフェザー', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09310201', '0931', 'イキリンコ', 'ブルーフェザー', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09310301', '0931', 'イキリンコ', 'イエローフェザー', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09310401', '0931', 'イキリンコ', 'ホワイトフェザー', 'type-chart/bright/01-10.html', 'type-chart/dark/01-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09320101', '0932', 'コジオ', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09330101', '0933', 'ジオヅム', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09340101', '0934', 'キョジオーン', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09350101', '0935', 'カルボウ', 'type-chart/bright/02-02.html', 'type-chart/dark/02-02.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09360101', '0936', 'グレンアルマ', 'type-chart/bright/02-14.html', 'type-chart/dark/02-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09370101', '0937', 'ソウブレイズ', 'type-chart/bright/02-14.html', 'type-chart/dark/02-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09380101', '0938', 'ズピカ', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09390101', '0939', 'ハラバリー', 'type-chart/bright/05-05.html', 'type-chart/dark/05-05.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09400101', '0940', 'カイデン', 'type-chart/bright/05-10.html', 'type-chart/dark/05-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09410101', '0941', 'タイカイデン', 'type-chart/bright/05-10.html', 'type-chart/dark/05-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09420101', '0942', 'オラチフ', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09430101', '0943', 'マフィンティフ', 'type-chart/bright/16-16.html', 'type-chart/dark/16-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09440101', '0944', 'シルシュルー', 'type-chart/bright/01-08.html', 'type-chart/dark/01-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09450101', '0945', 'タギングル', 'type-chart/bright/01-08.html', 'type-chart/dark/01-08.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09460101', '0946', 'アノクサ', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09470101', '0947', 'アノホラグサ', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09480101', '0948', 'ノノクラゲ', 'type-chart/bright/04-09.html', 'type-chart/dark/04-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09490101', '0949', 'リククラゲ', 'type-chart/bright/04-09.html', 'type-chart/dark/04-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09500101', '0950', 'ガケガニ', 'type-chart/bright/13-13.html', 'type-chart/dark/13-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09510101', '0951', 'カプサイジ', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09520101', '0952', 'スコヴィラン', 'type-chart/bright/02-04.html', 'type-chart/dark/02-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09520201', '0952', 'スコヴィラン', 'メガスコヴィラン', 'type-chart/bright/02-04.html', 'type-chart/dark/02-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09530101', '0953', 'シガロコ', 'type-chart/bright/12-12.html', 'type-chart/dark/12-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09540101', '0954', 'ベラカス', 'type-chart/bright/11-12.html', 'type-chart/dark/11-12.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09550101', '0955', 'ヒラヒナ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09560101', '0956', 'クエスパトラ', 'type-chart/bright/11-11.html', 'type-chart/dark/11-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09570101', '0957', 'カヌチャン', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09580101', '0958', 'ナカヌチャン', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09590101', '0959', 'デカヌチャン', 'type-chart/bright/17-18.html', 'type-chart/dark/17-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09600101', '0960', 'ウミディグダ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09610101', '0961', 'ウミトリオ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09620101', '0962', 'オトシドリ', 'type-chart/bright/10-16.html', 'type-chart/dark/10-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09630101', '0963', 'ナミイルカ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');



INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09640101', '0964', 'イルカマン', 'ナイーブフォルム', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09640201', '0964', 'イルカマン', 'マイティフォルム', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09650101', '0965', 'ブロロン', 'type-chart/bright/08-17.html', 'type-chart/dark/08-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09660101', '0966', 'ブロロローム', 'type-chart/bright/08-17.html', 'type-chart/dark/08-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09670101', '0967', 'モトトカゲ', 'type-chart/bright/01-15.html', 'type-chart/dark/01-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09680101', '0968', 'ミミズズ', 'type-chart/bright/17-17.html', 'type-chart/dark/17-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09690101', '0969', 'キラーメ', 'type-chart/bright/08-13.html', 'type-chart/dark/08-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09700101', '0970', 'キラフロル', 'type-chart/bright/08-13.html', 'type-chart/dark/08-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09700201', '0970', 'キラフロル', 'メガキラフロル', 'type-chart/bright/08-13.html', 'type-chart/dark/08-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09710101', '0971', 'ボチ', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09720101', '0972', 'ハカドッグ', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09730101', '0973', 'カラミンゴ', 'type-chart/bright/07-10.html', 'type-chart/dark/07-10.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09740101', '0974', 'アルクジラ', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09750101', '0975', 'ハルクジラ', 'type-chart/bright/06-06.html', 'type-chart/dark/06-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09760101', '0976', 'ミガルーサ', 'type-chart/bright/03-11.html', 'type-chart/dark/03-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09770101', '0977', 'ヘイラッシャ', 'type-chart/bright/03-03.html', 'type-chart/dark/03-03.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09780101', '0978', 'シャリタツ', 'そったすがた', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09780201', '0978', 'シャリタツ', 'たれたすがた', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09780301', '0978', 'シャリタツ', 'のびたすがた', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09780401', '0978', 'シャリタツ', 'メガシャリタツ・そったすがた', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09780501', '0978', 'シャリタツ', 'メガシャリタツ・たれたすがた', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09780601', '0978', 'シャリタツ', 'メガシャリタツ・のびたすがた', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');





INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09790101', '0979', 'コノヨザル', 'type-chart/bright/07-14.html', 'type-chart/dark/07-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09800101', '0980', 'ドオー', 'type-chart/bright/08-09.html', 'type-chart/dark/08-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09810101', '0981', 'リキキリン', 'type-chart/bright/01-11.html', 'type-chart/dark/01-11.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09820101', '0982', 'ノココッチ', 'ふたふしフォルム', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09820201', '0982', 'ノココッチ', 'みつふしフォルム', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09830101', '0983', 'ドドゲザン', 'type-chart/bright/16-17.html', 'type-chart/dark/16-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09840101', '0984', 'イダイナキバ', 'type-chart/bright/07-09.html', 'type-chart/dark/07-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09850101', '0985', 'サケブシッポ', 'type-chart/bright/11-18.html', 'type-chart/dark/11-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09860101', '0986', 'アラブルタケ', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09870101', '0987', 'ハバタクカミ', 'type-chart/bright/14-18.html', 'type-chart/dark/14-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09880101', '0988', 'チヲハウハネ', 'type-chart/bright/07-12.html', 'type-chart/dark/07-12.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09890101', '0989', 'スナノケガワ', 'type-chart/bright/05-09.html', 'type-chart/dark/05-09.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09900101', '0990', 'テツノワダチ', 'type-chart/bright/09-17.html', 'type-chart/dark/09-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09910101', '0991', 'テツノツツミ', 'type-chart/bright/03-06.html', 'type-chart/dark/03-06.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09920101', '0992', 'テツノカイナ', 'type-chart/bright/05-07.html', 'type-chart/dark/05-07.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09930101', '0993', 'テツノコウベ', 'type-chart/bright/10-16.html', 'type-chart/dark/10-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09940101', '0994', 'テツノドクガ', 'type-chart/bright/02-08.html', 'type-chart/dark/02-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09950101', '0995', 'テツノイバラ', 'type-chart/bright/05-13.html', 'type-chart/dark/05-13.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09960101', '0996', 'セビエ', 'type-chart/bright/06-15.html', 'type-chart/dark/06-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09970101', '0997', 'セゴール', 'type-chart/bright/06-15.html', 'type-chart/dark/06-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09980101', '0998', 'セグレイブ', 'type-chart/bright/06-15.html', 'type-chart/dark/06-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09980201', '0998', 'セグレイブ', 'メガセグレイブ', 'type-chart/bright/06-15.html', 'type-chart/dark/06-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09990101', '0999', 'コレクレー', 'はこフォルム', 'type-chart/bright/14-14.html', 'type-chart/dark/14-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('09990201', '0999', 'コレクレー', 'とほフォルム', 'type-chart/bright/14-17.html', 'type-chart/dark/14-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10000101', '1000', 'サーフゴー', 'type-chart/bright/14-17.html', 'type-chart/dark/14-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10010101', '1001', 'チオンジェン', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10020101', '1002', 'パオジアン', 'type-chart/bright/06-16.html', 'type-chart/dark/06-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10030101', '1003', 'ディンルー', 'type-chart/bright/08-16.html', 'type-chart/dark/08-16.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10040101', '1004', 'イーユイ', 'type-chart/bright/02-16.html', 'type-chart/dark/02-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10050101', '1005', 'トドロクツキ', 'type-chart/bright/15-16.html', 'type-chart/dark/15-16.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10060101', '1006', 'テツノブジン', 'type-chart/bright/07-18.html', 'type-chart/dark/07-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10070101', '1007', 'コライドン', 'type-chart/bright/07-18.html', 'type-chart/dark/07-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10080101', '1008', 'ミライドン', 'type-chart/bright/05-15.html', 'type-chart/dark/05-15.html');






INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10090101', '1009', 'ウネルミナモ', 'type-chart/bright/03-15.html', 'type-chart/dark/03-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10100101', '1010', 'テツノイサハ', 'type-chart/bright/04-11.html', 'type-chart/dark/04-11.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10110101', '1011', 'カミッチュ', 'type-chart/bright/04-15.html', 'type-chart/dark/04-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10120101', '1012', 'チャデス', 'マガイモノのすがた', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10120201', '1012', 'チャデス', 'タカイモノのすがた', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10130101', '1013', 'ヤバソチャ', 'マガイモノのすがた', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10130201', '1013', 'ヤバソチャ', 'タカイモノのすがた', 'type-chart/bright/04-14.html', 'type-chart/dark/04-14.html');



INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10140101', '1014', 'イイネイヌ', 'type-chart/bright/07-08.html', 'type-chart/dark/07-08.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10150101', '1015', 'マシマシラ', 'type-chart/bright/08-11.html', 'type-chart/dark/08-11.html');


INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10160101', '1016', 'キチキギス', 'type-chart/bright/08-18.html', 'type-chart/dark/08-18.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10170101', '1017', 'オーガポン', 'みどりのかめん', 'type-chart/bright/04-04.html', 'type-chart/dark/04-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10170201', '1017', 'オーガポン', 'いどのかめん', 'type-chart/bright/03-04.html', 'type-chart/dark/03-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10170301', '1017', 'オーガポン', 'かまどのかめん', 'type-chart/bright/02-04.html', 'type-chart/dark/02-04.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10170401', '1017', 'オーガポン', 'いしずえのかめん', 'type-chart/bright/04-13.html', 'type-chart/dark/04-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10180101', '1018', 'ブリジュラス', 'type-chart/bright/15-17.html', 'type-chart/dark/15-17.html');


INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10190101', '1019', 'カミツオロチ', 'type-chart/bright/04-15.html', 'type-chart/dark/04-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10200101', '1020', 'ウガツホムラ', 'type-chart/bright/02-15.html', 'type-chart/dark/02-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10210101', '1021', 'タケルライコ', 'type-chart/bright/05-15.html', 'type-chart/dark/05-15.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10220101', '1022', 'テツノイワオ', 'type-chart/bright/11-13.html', 'type-chart/dark/11-13.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10230101', '1023', 'テツノカシラ', 'type-chart/bright/11-17.html', 'type-chart/dark/11-17.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10240101', '1024', 'テラパゴス', 'ノーマルフォルム', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10240201', '1024', 'テラパゴス', 'テラスタルフォルム', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, FORM, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10240301', '1024', 'テラパゴス', 'ステラフォルム', 'type-chart/bright/01-01.html', 'type-chart/dark/01-01.html');

INSERT INTO pokedex4(POKEID, NO, NAME, PATH_TYPECHART_BRIGHT, PATH_TYPECHART_DARK)
VALUES('10250101', '1025', 'モモワロウ', 'type-chart/bright/08-14.html', 'type-chart/dark/08-14.html');
    `);

    console.log("pokedex4 へのデータ挿入が完了しました！");
  } catch (err) {
    console.error("SQL実行エラー:", err);
  } finally {
    await client.end();
    console.log("DB接続終了");
  }
}

insertPokedex4();
