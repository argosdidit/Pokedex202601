// commandSQL02.js
import pkg from 'pg';
import dotenv from "dotenv";
dotenv.config();

const { Client } = pkg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function insertPokedex3() {
  try {
    await client.connect();
    console.log("DB接続成功");

    await client.query(
    `
    INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00010101', '0001', 'フシギダネ', 'image/normal/01_front/00010101.png', 'image/shiny/01_front/00010101.png ');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00020101', '0002', 'フシギソウ', 'image/normal/01_front/00020101.png', 'image/shiny/01_front/00020101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00030101', '0003', 'フシギバナ', 'オスのすがた', 'image/normal/01_front/00030101.png', 'image/shiny/01_front/00030101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00030102', '0003', 'フシギバナ', 'メスのすがた', 'image/normal/01_front/00030102.png', 'image/shiny/01_front/00030102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00030201', '0003', 'フシギバナ', 'メガフシギバナ', 'image/normal/01_front/00030201.png', 'image/shiny/01_front/00030201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00030301', '0003', 'フシギバナ', 'キョダイマックスのすがた', 'image/normal/01_front/00030301.png', 'image/shiny/01_front/00030301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00040101', '0004', 'ヒトカゲ', 'image/normal/01_front/00040101.png', 'image/shiny/01_front/00040101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00050101', '0005', 'リザード', 'image/normal/01_front/00050101.png', 'image/shiny/01_front/00050101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00060101', '0006', 'リザードン', 'image/normal/01_front/00060101.png', 'image/shiny/01_front/00060101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00060201', '0006', 'リザードン', 'メガリザードンX', 'image/normal/01_front/00060201.png', 'image/shiny/01_front/00060201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00060301', '0006', 'リザードン', 'メガリザードンY', 'image/normal/01_front/00060301.png', 'image/shiny/01_front/00060301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00060401', '0006', 'リザードン', 'キョダイマックスのすがた', 'image/normal/01_front/00060401.png', 'image/shiny/01_front/00060401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00070101', '0007', 'ゼニガメ', 'image/normal/01_front/00070101.png', 'image/shiny/01_front/00070101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00080101', '0008', 'カメール', 'image/normal/01_front/00080101.png', 'image/shiny/01_front/00080101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00090101', '0009', 'カメックス', 'image/normal/01_front/00090101.png', 'image/shiny/01_front/00090101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00090201', '0009', 'カメックス', 'メガカメックス', 'image/normal/01_front/00090201.png', 'image/shiny/01_front/00090201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00090301', '0009', 'カメックス', 'キョダイマックスのすがた', 'image/normal/01_front/00090301.png', 'image/shiny/01_front/00090301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00100101', '0010', 'キャタピー', 'image/normal/01_front/00100101.png', 'image/shiny/01_front/00100101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00110101', '0011', 'トランセル', 'image/normal/01_front/00110101.png', 'image/shiny/01_front/00110101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00120101', '0012', 'バタフリー', 'オスのすがた', 'image/normal/01_front/00120101.png', 'image/shiny/01_front/00120101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00120102', '0012', 'バタフリー', 'メスのすがた', 'image/normal/01_front/00120102.png', 'image/shiny/01_front/00120102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00120201', '0012', 'バタフリー', 'キョダイマックスのすがた', 'image/normal/01_front/00120201.png', 'image/shiny/01_front/00120201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00130101', '0013', 'ビードル', 'image/normal/01_front/00130101.png', 'image/shiny/01_front/00130101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00140101', '0014', 'コクーン', 'image/normal/01_front/00140101.png', 'image/shiny/01_front/00140101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00150101', '0015', 'スピアー', 'image/normal/01_front/00150101.png', 'image/shiny/01_front/00150101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00150201', '0015', 'スピアー', 'メガスピアー', 'image/normal/01_front/00150201.png', 'image/shiny/01_front/00150201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00160101', '0016', 'ポッポ', 'image/normal/01_front/00160101.png', 'image/shiny/01_front/00160101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00170101', '0017', 'ピジョン', 'image/normal/01_front/00170101.png', 'image/shiny/01_front/00170101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00180101', '0018', 'ピジョット', 'image/normal/01_front/00180101.png', 'image/shiny/01_front/00180101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00180201', '0018', 'ピジョット', 'メガピジョット', 'image/normal/01_front/00180201.png', 'image/shiny/01_front/00180201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00190101', '0019', 'コラッタ', 'オスのすがた', 'image/normal/01_front/00190101.png', 'image/shiny/01_front/00190101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00190102', '0019', 'コラッタ', 'メスのすがた', 'image/normal/01_front/00190102.png', 'image/shiny/01_front/00190102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00190201', '0019', 'コラッタ', 'アローラのすがた', 'image/normal/01_front/00190201.png', 'image/shiny/01_front/00190201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00200101', '0020', 'ラッタ', 'オスのすがた', 'image/normal/01_front/00200101.png', 'image/shiny/01_front/00200101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00200102', '0020', 'ラッタ', 'メスのすがた', 'image/normal/01_front/00200102.png', 'image/shiny/01_front/00200102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00200201', '0020', 'ラッタ', 'アローラのすがた', 'image/normal/01_front/00200201.png', 'image/shiny/01_front/00200201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00210101', '0021', 'オニスズメ', 'image/normal/01_front/00210101.png', 'image/shiny/01_front/00210101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00220101', '0022', 'オニドリル', 'image/normal/01_front/00220101.png', 'image/shiny/01_front/00220101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00230101', '0023', 'アーボ', 'image/normal/01_front/00230101.png', 'image/shiny/01_front/00230101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00240101', '0024', 'アーボック', 'image/normal/01_front/00240101.png', 'image/shiny/01_front/00240101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00250101', '0025', 'ピカチュウ', 'オスのすがた', 'image/normal/01_front/00250101.png', 'image/shiny/01_front/00250101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00250102', '0025', 'ピカチュウ', 'メスのすがた', 'image/normal/01_front/00250102.png', 'image/shiny/01_front/00250102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00250201', '0025', 'ピカチュウ', 'キョダイマックスのすがた', 'image/normal/01_front/00250201.png', 'image/shiny/01_front/00250201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00260101', '0026', 'ライチュウ', 'オスのすがた', 'image/normal/01_front/00260101.png', 'image/shiny/01_front/00260101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00260102', '0026', 'ライチュウ', 'メスのすがた', 'image/normal/01_front/00260102.png', 'image/shiny/01_front/00260102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00260201', '0026', 'ライチュウ', 'アローラのすがた', 'image/normal/01_front/00260201.png', 'image/shiny/01_front/00260201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00260301', '0026', 'ライチュウ', 'メガライチュウX', 'image/normal/01_front/00260301.png', 'image/shiny/01_front/00260301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00260401', '0026', 'ライチュウ', 'メガライチュウY', 'image/normal/01_front/00260401.png', 'image/shiny/01_front/00260401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00270101', '0027', 'サンド', 'image/normal/01_front/00270101.png', 'image/shiny/01_front/00270101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00270201', '0027', 'サンド', 'アローラのすがた', 'image/normal/01_front/00270201.png', 'image/shiny/01_front/00270201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00280101', '0028', 'サンドパン', 'image/normal/01_front/00280101.png', 'image/shiny/01_front/00280101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00280201', '0028', 'サンドパン', 'アローラのすがた', 'image/normal/01_front/00280201.png', 'image/shiny/01_front/00280201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00290101', '0029', 'ニドラン♀', 'image/normal/01_front/00290101.png', 'image/shiny/01_front/00290101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00300101', '0030', 'ニドリーナ', 'image/normal/01_front/00300101.png', 'image/shiny/01_front/00300101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00310101', '0031', 'ニドクイン', 'image/normal/01_front/00310101.png', 'image/shiny/01_front/00310101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00320101', '0032', 'ニドラン♂', 'image/normal/01_front/00320101.png', 'image/shiny/01_front/00320101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00330101', '0033', 'ニドリーノ', 'image/normal/01_front/00330101.png', 'image/shiny/01_front/00330101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00340101', '0034', 'ニドキング', 'image/normal/01_front/00340101.png', 'image/shiny/01_front/00340101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00350101', '0035', 'ピッピ', 'image/normal/01_front/00350101.png', 'image/shiny/01_front/00350101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00360101', '0036', 'ピクシー', 'image/normal/01_front/00360101.png', 'image/shiny/01_front/00360101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00360201', '0036', 'ピクシー', 'メガピクシー', 'image/normal/01_front/00360201.png', 'image/shiny/01_front/00360201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00370101', '0037', 'ロコン', 'image/normal/01_front/00370101.png', 'image/shiny/01_front/00370101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00370201', '0037', 'ロコン', 'アローラのすがた', 'image/normal/01_front/00370201.png', 'image/shiny/01_front/00370201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00380101', '0038', 'キュウコン', 'image/normal/01_front/00380101.png', 'image/shiny/01_front/00380101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00380201', '0038', 'キュウコン', 'アローラのすがた', 'image/normal/01_front/00380201.png', 'image/shiny/01_front/00380201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00390101', '0039', 'プリン', 'image/normal/01_front/00390101.png', 'image/shiny/01_front/00390101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00400101', '0040', 'プクリン', 'image/normal/01_front/00400101.png', 'image/shiny/01_front/00400101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00410101', '0041', 'ズバット', 'オスのすがた', 'image/normal/01_front/00410101.png', 'image/shiny/01_front/00410101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00410102', '0041', 'ズバット', 'メスのすがた', 'image/normal/01_front/00410102.png', 'image/shiny/01_front/00410102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00420101', '0042', 'ゴルバット', 'オスのすがた', 'image/normal/01_front/00420101.png', 'image/shiny/01_front/00420101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00420102', '0042', 'ゴルバット', 'メスのすがた', 'image/normal/01_front/00420102.png', 'image/shiny/01_front/00420102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00430101', '0043', 'ナゾノクサ', 'image/normal/01_front/00430101.png', 'image/shiny/01_front/00430101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00440101', '0044', 'クサイハナ', 'オスのすがた', 'image/normal/01_front/00440101.png', 'image/shiny/01_front/00440101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00440102', '0044', 'クサイハナ', 'メスのすがた', 'image/normal/01_front/00440102.png', 'image/shiny/01_front/00440102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00450101', '0045', 'ラフレシア', 'オスのすがた', 'image/normal/01_front/00450101.png', 'image/shiny/01_front/00450101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00450102', '0045', 'ラフレシア', 'メスのすがた', 'image/normal/01_front/00450102.png', 'image/shiny/01_front/00450102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00460101', '0046', 'パラス', 'image/normal/01_front/00460101.png', 'image/shiny/01_front/00460101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00470101', '0047', 'パラセクト', 'image/normal/01_front/00470101.png', 'image/shiny/01_front/00470101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00480101', '0048', 'コンパン', 'image/normal/01_front/00480101.png', 'image/shiny/01_front/00480101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00490101', '0049', 'モルフォン', 'image/normal/01_front/00490101.png', 'image/shiny/01_front/00490101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00500101', '0050', 'ディグダ', 'image/normal/01_front/00500101.png', 'image/shiny/01_front/00500101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00500201', '0050', 'ディグダ', 'アローラのすがた', 'image/normal/01_front/00500201.png', 'image/shiny/01_front/00500201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00510101', '0051', 'ダグトリオ', 'image/normal/01_front/00510101.png', 'image/shiny/01_front/00510101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00510201', '0051', 'ダグトリオ', 'アローラのすがた', 'image/normal/01_front/00510201.png', 'image/shiny/01_front/00510201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00520101', '0052', 'ニャース', 'image/normal/01_front/00520101.png', 'image/shiny/01_front/00520101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00520201', '0052', 'ニャース', 'アローラのすがた', 'image/normal/01_front/00520201.png', 'image/shiny/01_front/00520201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00520301', '0052', 'ニャース', 'ガラルのすがた', 'image/normal/01_front/00520301.png', 'image/shiny/01_front/00520301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00520401', '0052', 'ニャース', 'キョダイマックスのすがた', 'image/normal/01_front/00520401.png', 'image/shiny/01_front/00520401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00530101', '0053', 'ペルシアン', 'image/normal/01_front/00530101.png', 'image/shiny/01_front/00530101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00530201', '0053', 'ペルシアン', 'アローラのすがた', 'image/normal/01_front/00530201.png', 'image/shiny/01_front/00530201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00540101', '0054', 'コダック', 'image/normal/01_front/00540101.png', 'image/shiny/01_front/00540101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00550101', '0055', 'ゴルダック', 'image/normal/01_front/00550101.png', 'image/shiny/01_front/00550101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00560101', '0056', 'マンキー', 'image/normal/01_front/00560101.png', 'image/shiny/01_front/00560101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00570101', '0057', 'オコリザル', 'image/normal/01_front/00570101.png', 'image/shiny/01_front/00570101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00580101', '0058', 'ガーディ', 'image/normal/01_front/00580101.png', 'image/shiny/01_front/00580101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00580201', '0058', 'ガーディ', 'ヒスイのすがた', 'image/normal/01_front/00580201.png', 'image/shiny/01_front/00580201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00590101', '0059', 'ウインディ', 'image/normal/01_front/00590101.png', 'image/shiny/01_front/00590101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00590201', '0059', 'ウインディ', 'ヒスイのすがた', 'image/normal/01_front/00590201.png', 'image/shiny/01_front/00590201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00600101', '0060', 'ニョロモ', 'image/normal/01_front/00600101.png', 'image/shiny/01_front/00600101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00610101', '0061', 'ニョロゾ', 'image/normal/01_front/00610101.png', 'image/shiny/01_front/00610101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00620101', '0062', 'ニョロボン', 'image/normal/01_front/00620101.png', 'image/shiny/01_front/00620101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00630101', '0063', 'ケーシィ', 'image/normal/01_front/00630101.png', 'image/shiny/01_front/00630101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00640101', '0064', 'ユンゲラー', 'オスのすがた', 'image/normal/01_front/00640101.png', 'image/shiny/01_front/00640101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00640102', '0064', 'ユンゲラー', 'メスのすがた', 'image/normal/01_front/00640102.png', 'image/shiny/01_front/00640102.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00650101', '0065', 'フーディン', 'オスのすがた', 'image/normal/01_front/00650101.png', 'image/shiny/01_front/00650101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00650102', '0065', 'フーディン', 'メスのすがた', 'image/normal/01_front/00650102.png', 'image/shiny/01_front/00650102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00650201', '0065', 'フーディン', 'メガフーディン', 'image/normal/01_front/00650201.png', 'image/shiny/01_front/00650201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00660101', '0066', 'ワンリキー', 'image/normal/01_front/00660101.png', 'image/shiny/01_front/00660101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00670101', '0067', 'ゴーリキー', 'image/normal/01_front/00670101.png', 'image/shiny/01_front/00670101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00680101', '0068', 'カイリキー', 'image/normal/01_front/00680101.png', 'image/shiny/01_front/00680101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00680201', '0068', 'カイリキー', 'キョダイマックスのすがた', 'image/normal/01_front/00680201.png', 'image/shiny/01_front/00680201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00690101', '0069', 'マダツボミ', 'image/normal/01_front/00690101.png', 'image/shiny/01_front/00690101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00700101', '0070', 'ウツドン', 'image/normal/01_front/00700101.png', 'image/shiny/01_front/00700101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00710101', '0071', 'ウツボット', 'image/normal/01_front/00710101.png', 'image/shiny/01_front/00710101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00710201', '0071', 'ウツボット', 'メガウツボット', 'image/normal/01_front/00710201.png', 'image/shiny/01_front/00710201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00720101', '0072', 'メノクラゲ', 'image/normal/01_front/00720101.png', 'image/shiny/01_front/00720101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00730101', '0073', 'ドククラゲ', 'image/normal/01_front/00730101.png', 'image/shiny/01_front/00730101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00740101', '0074', 'イシツブテ', 'image/normal/01_front/00740101.png', 'image/shiny/01_front/00740101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00740201', '0074', 'イシツブテ', 'アローラのすがた', 'image/normal/01_front/00740201.png', 'image/shiny/01_front/00740201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00750101', '0075', 'ゴローン', 'image/normal/01_front/00750101.png', 'image/shiny/01_front/00750101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00750201', '0075', 'ゴローン', 'アローラのすがた', 'image/normal/01_front/00750201.png', 'image/shiny/01_front/00750201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00760101', '0076', 'ゴローニャ', 'image/normal/01_front/00760101.png', 'image/shiny/01_front/00760101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00760201', '0076', 'ゴローニャ', 'アローラのすがた', 'image/normal/01_front/00760201.png', 'image/shiny/01_front/00760201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00770101', '0077', 'ポニータ', 'image/normal/01_front/00770101.png', 'image/shiny/01_front/00770101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00770201', '0077', 'ポニータ', 'ガラルのすがた', 'image/normal/01_front/00770201.png', 'image/shiny/01_front/00770201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00780101', '0078', 'ギャロップ', 'image/normal/01_front/00780101.png', 'image/shiny/01_front/00780101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00780201', '0078', 'ギャロップ', 'ガラルのすがた', 'image/normal/01_front/00780201.png', 'image/shiny/01_front/00780201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00790101', '0079', 'ヤドン', 'image/normal/01_front/00790101.png', 'image/shiny/01_front/00790101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00790201', '0079', 'ヤドン', 'ガラルのすがた', 'image/normal/01_front/00790201.png', 'image/shiny/01_front/00790201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00800101', '0080', 'ヤドラン', 'image/normal/01_front/00800101.png', 'image/shiny/01_front/00800101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00800201', '0080', 'ヤドラン', 'メガヤドラン', 'image/normal/01_front/00800201.png', 'image/shiny/01_front/00800201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00800301', '0080', 'ヤドラン', 'ガラルのすがた', 'image/normal/01_front/00800301.png', 'image/shiny/01_front/00800301.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00810101', '0081', 'コイル', 'image/normal/01_front/00810101.png', 'image/shiny/01_front/00810101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00820101', '0082', 'レアコイル', 'image/normal/01_front/00820101.png', 'image/shiny/01_front/00820101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00830101', '0083', 'カモネギ', 'image/normal/01_front/00830101.png', 'image/shiny/01_front/00830101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00830201', '0083', 'カモネギ', 'ガラルのすがた', 'image/normal/01_front/00830201.png', 'image/shiny/01_front/00830201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00840101', '0084', 'ドードー', 'オスのすがた', 'image/normal/01_front/00840101.png', 'image/shiny/01_front/00840101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00840102', '0084', 'ドードー', 'メスのすがた', 'image/normal/01_front/00840102.png', 'image/shiny/01_front/00840102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00850101', '0085', 'ドードリオ', 'オスのすがた', 'image/normal/01_front/00850101.png', 'image/shiny/01_front/00850101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00850102', '0085', 'ドードリオ', 'メスのすがた', 'image/normal/01_front/00850102.png', 'image/shiny/01_front/00850102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00860101', '0086', 'パウワウ', 'image/normal/01_front/00860101.png', 'image/shiny/01_front/00860101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00870101', '0087', 'ジュゴン', 'image/normal/01_front/00870101.png', 'image/shiny/01_front/00870101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00880101', '0088', 'ベトベター', 'image/normal/01_front/00880101.png', 'image/shiny/01_front/00880101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00880201', '0088', 'ベトベター', 'アローラのすがた', 'image/normal/01_front/00880201.png', 'image/shiny/01_front/00880201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00890101', '0089', 'ベトベトン', 'image/normal/01_front/00890101.png', 'image/shiny/01_front/00890101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00890201', '0089', 'ベトベトン', 'アローラのすがた', 'image/normal/01_front/00890201.png', 'image/shiny/01_front/00890201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00900101', '0090', 'シェルダー', 'image/normal/01_front/00900101.png', 'image/shiny/01_front/00900101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00910101', '0091', 'パルシェン', 'image/normal/01_front/00910101.png', 'image/shiny/01_front/00910101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00920101', '0092', 'ゴース', 'image/normal/01_front/00920101.png', 'image/shiny/01_front/00920101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00930101', '0093', 'ゴースト', 'image/normal/01_front/00930101.png', 'image/shiny/01_front/00930101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00940101', '0094', 'ゲンガー', 'image/normal/01_front/00940101.png', 'image/shiny/01_front/00940101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00940201', '0094', 'ゲンガー', 'メガゲンガー', 'image/normal/01_front/00940201.png', 'image/shiny/01_front/00940201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00940301', '0094', 'ゲンガー', 'キョダイマックスのすがた', 'image/normal/01_front/00940301.png', 'image/shiny/01_front/00940301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00950101', '0095', 'イワーク', 'image/normal/01_front/00950101.png', 'image/shiny/01_front/00950101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00960101', '0096', 'スリープ', 'image/normal/01_front/00960101.png', 'image/shiny/01_front/00960101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00970101', '0097', 'スリーパー', 'オスのすがた', 'image/normal/01_front/00970101.png', 'image/shiny/01_front/00970101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00970102', '0097', 'スリーパー', 'メスのすがた', 'image/normal/01_front/00970102.png', 'image/shiny/01_front/00970102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00980101', '0098', 'クラブ', 'image/normal/01_front/00980101.png', 'image/shiny/01_front/00980101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00990101', '0099', 'キングラー', 'image/normal/01_front/00990101.png', 'image/shiny/01_front/00990101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('00990201', '0099', 'キングラー', 'キョダイマックスのすがた', 'image/normal/01_front/00990201.png', 'image/shiny/01_front/00990201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01000101', '0100', 'ビリリダマ', 'image/normal/01_front/01000101.png', 'image/shiny/01_front/01000101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01000201', '0100', 'ビリリダマ', 'ヒスイのすがた', 'image/normal/01_front/01000201.png', 'image/shiny/01_front/01000201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01010101', '0101', 'マルマイン', 'image/normal/01_front/01010101.png', 'image/shiny/01_front/01010101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01010201', '0101', 'マルマイン', 'ヒスイのすがた', 'image/normal/01_front/01010201.png', 'image/shiny/01_front/01010201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01020101', '0102', 'タマタマ', 'image/normal/01_front/01020101.png', 'image/shiny/01_front/01020101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01030101', '0103', 'ナッシー', 'image/normal/01_front/01030101.png', 'image/shiny/01_front/01030101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01030201', '0103', 'ナッシー', 'アローラのすがた', 'image/normal/01_front/01030201.png', 'image/shiny/01_front/01030201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01040101', '0104', 'カラカラ', 'image/normal/01_front/01040101.png', 'image/shiny/01_front/01040101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01050101', '0105', 'ガラガラ', 'image/normal/01_front/01050101.png', 'image/shiny/01_front/01050101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01050201', '0105', 'ガラガラ', 'アローラのすがた', 'image/normal/01_front/01050201.png', 'image/shiny/01_front/01050201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01060101', '0106', 'サワムラー', 'image/normal/01_front/01060101.png', 'image/shiny/01_front/01060101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01070101', '0107', 'エビワラー', 'image/normal/01_front/01070101.png', 'image/shiny/01_front/01070101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01080101', '0108', 'ベロリンガ', 'image/normal/01_front/01080101.png', 'image/shiny/01_front/01080101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01090101', '0109', 'ドガース', 'image/normal/01_front/01090101.png', 'image/shiny/01_front/01090101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01100101', '0110', 'マタドガス', 'image/normal/01_front/01100101.png', 'image/shiny/01_front/01100101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01100201', '0110', 'マタドガス', 'ガラルのすがた', 'image/normal/01_front/01100201.png', 'image/shiny/01_front/01100201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01110101', '0111', 'サイホーン', 'オスのすがた', 'image/normal/01_front/01110101.png', 'image/shiny/01_front/01110101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01110102', '0111', 'サイホーン', 'メスのすがた', 'image/normal/01_front/01110102.png', 'image/shiny/01_front/01110102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01120101', '0112', 'サイドン', 'オスのすがた', 'image/normal/01_front/01120101.png', 'image/shiny/01_front/01120101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01120102', '0112', 'サイドン', 'メスのすがた', 'image/normal/01_front/01120102.png', 'image/shiny/01_front/01120102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01130101', '0113', 'ラッキー', 'image/normal/01_front/01130101.png', 'image/shiny/01_front/01130101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01140101', '0114', 'モンジャラ', 'image/normal/01_front/01140101.png', 'image/shiny/01_front/01140101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01150101', '0115', 'ガルーラ', 'image/normal/01_front/01150101.png', 'image/shiny/01_front/01150101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01150201', '0115', 'ガルーラ', 'メガガルーラ', 'image/normal/01_front/01150201.png', 'image/shiny/01_front/01150201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01160101', '0116', 'タッツー', 'image/normal/01_front/01160101.png', 'image/shiny/01_front/01160101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01170101', '0117', 'シードラ', 'image/normal/01_front/01170101.png', 'image/shiny/01_front/01170101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01180101', '0118', 'トサキント', 'オスのすがた', 'image/normal/01_front/01180101.png', 'image/shiny/01_front/01180101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01180102', '0118', 'トサキント', 'メスのすがた', 'image/normal/01_front/01180102.png', 'image/shiny/01_front/01180102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01190101', '0119', 'アズマオウ', 'オスのすがた', 'image/normal/01_front/01190101.png', 'image/shiny/01_front/01190101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01190102', '0119', 'アズマオウ', 'メスのすがた', 'image/normal/01_front/01190102.png', 'image/shiny/01_front/01190102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01200101', '0120', 'ヒトデマン', 'image/normal/01_front/01200101.png', 'image/shiny/01_front/01200101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01210101', '0121', 'スターミー', 'image/normal/01_front/01210101.png', 'image/shiny/01_front/01210101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01210201', '0121', 'スターミー', 'メガスターミー', 'image/normal/01_front/01210201.png', 'image/shiny/01_front/01210201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01220101', '0122', 'バリヤード', 'image/normal/01_front/01220101.png', 'image/shiny/01_front/01220101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01220201', '0122', 'バリヤード', 'ガラルのすがた', 'image/normal/01_front/01220201.png', 'image/shiny/01_front/01220201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01230101', '0123', 'ストライク', 'オスのすがた', 'image/normal/01_front/01230101.png', 'image/shiny/01_front/01230101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01230102', '0123', 'ストライク', 'メスのすがた', 'image/normal/01_front/01230102.png', 'image/shiny/01_front/01230102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01240101', '0124', 'ルージュラ', 'image/normal/01_front/01240101.png', 'image/shiny/01_front/01240101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01250101', '0125', 'エレブー', 'image/normal/01_front/01250101.png', 'image/shiny/01_front/01250101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01260101', '0126', 'ブーバー', 'image/normal/01_front/01260101.png', 'image/shiny/01_front/01260101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01270101', '0127', 'カイロス', 'image/normal/01_front/01270101.png', 'image/shiny/01_front/01270101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01270201', '0127', 'カイロス', 'メガカイロス', 'image/normal/01_front/01270201.png', 'image/shiny/01_front/01270201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01280101', '0128', 'ケンタロス', 'image/normal/01_front/01280101.png', 'image/shiny/01_front/01280101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01280201', '0128', 'ケンタロス', 'パルデアのすがた・コンバットしゅ', 'image/normal/01_front/01280201.png', 'image/shiny/01_front/01280201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01280301', '0128', 'ケンタロス', 'パルデアのすがた・ブレイズしゅ', 'image/normal/01_front/01280301.png', 'image/shiny/01_front/01280301.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01280401', '0128', 'ケンタロス', 'パルデアのすがた・ウォーターしゅ', 'image/normal/01_front/01280401.png', 'image/shiny/01_front/01280401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01290101', '0129', 'コイキング', 'オスのすがた', 'image/normal/01_front/01290101.png', 'image/shiny/01_front/01290101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01290102', '0129', 'コイキング', 'メスのすがた', 'image/normal/01_front/01290102.png', 'image/shiny/01_front/01290102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01300101', '0130', 'ギャラドス', 'オスのすがた', 'image/normal/01_front/01300101.png', 'image/shiny/01_front/01300101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01300102', '0130', 'ギャラドス', 'メスのすがた', 'image/normal/01_front/01300102.png', 'image/shiny/01_front/01300102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01300201', '0130', 'ギャラドス', 'メガギャラドス', 'image/normal/01_front/01300201.png', 'image/shiny/01_front/01300201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01310101', '0131', 'ラプラス', 'image/normal/01_front/01310101.png', 'image/shiny/01_front/01310101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01310201', '0131', 'ラプラス', 'キョダイマックスのすがた', 'image/normal/01_front/01310201.png', 'image/shiny/01_front/01310201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01320101', '0132', 'メタモン', 'image/normal/01_front/01320101.png', 'image/shiny/01_front/01320101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01330101', '0133', 'イーブイ', 'オスのすがた', 'image/normal/01_front/01330101.png', 'image/shiny/01_front/01330101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01330102', '0133', 'イーブイ', 'メスのすがた', 'image/normal/01_front/01330102.png', 'image/shiny/01_front/01330102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01330201', '0133', 'イーブイ', 'キョダイマックスのすがた', 'image/normal/01_front/01330201.png', 'image/shiny/01_front/01330201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01340101', '0134', 'シャワーズ', 'image/normal/01_front/01340101.png', 'image/shiny/01_front/01340101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01350101', '0135', 'サンダース', 'image/normal/01_front/01350101.png', 'image/shiny/01_front/01350101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01360101', '0136', 'ブースター', 'image/normal/01_front/01360101.png', 'image/shiny/01_front/01360101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01370101', '0137', 'ポリゴン', 'image/normal/01_front/01370101.png', 'image/shiny/01_front/01370101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01380101', '0138', 'オムナイト', 'image/normal/01_front/01380101.png', 'image/shiny/01_front/01380101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01390101', '0139', 'オムスター', 'image/normal/01_front/01390101.png', 'image/shiny/01_front/01390101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01400101', '0140', 'カブト', 'image/normal/01_front/01400101.png', 'image/shiny/01_front/01400101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01410101', '0141', 'カブトプス', 'image/normal/01_front/01410101.png', 'image/shiny/01_front/01410101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01420101', '0142', 'プテラ', 'image/normal/01_front/01420101.png', 'image/shiny/01_front/01420101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01420201', '0142', 'プテラ', 'メガプテラ', 'image/normal/01_front/01420201.png', 'image/shiny/01_front/01420201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01430101', '0143', 'カビゴン', 'image/normal/01_front/01430101.png', 'image/shiny/01_front/01430101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01430201', '0143', 'カビゴン', 'キョダイマックスのすがた', 'image/normal/01_front/01430201.png', 'image/shiny/01_front/01430201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01440101', '0144', 'フリーザー', 'image/normal/01_front/01440101.png', 'image/shiny/01_front/01440101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01440201', '0144', 'フリーザー', 'ガラルのすがた', 'image/normal/01_front/01440201.png', 'image/shiny/01_front/01440201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01450101', '0145', 'サンダー', 'image/normal/01_front/01450101.png', 'image/shiny/01_front/01450101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01450201', '0145', 'サンダー', 'ガラルのすがた', 'image/normal/01_front/01450201.png', 'image/shiny/01_front/01450201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01460101', '0146', 'ファイヤー', 'image/normal/01_front/01460101.png', 'image/shiny/01_front/01460101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01460201', '0146', 'ファイヤー', 'ガラルのすがた', 'image/normal/01_front/01460201.png', 'image/shiny/01_front/01460201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01470101', '0147', 'ミニリュウ', 'image/normal/01_front/01470101.png', 'image/shiny/01_front/01470101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01480101', '0148', 'ハクリュー', 'image/normal/01_front/01480101.png', 'image/shiny/01_front/01480101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01490101', '0149', 'カイリュー', 'image/normal/01_front/01490101.png', 'image/shiny/01_front/01490101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01490201', '0149', 'カイリュー', 'メガカイリュー', 'image/normal/01_front/01490201.png', 'image/shiny/01_front/01490201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01500101', '0150', 'ミュウツー', 'image/normal/01_front/01500101.png', 'image/shiny/01_front/01500101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01500201', '0150', 'ミュウツー', 'メガミュウツーX', 'image/normal/01_front/01500201.png', 'image/shiny/01_front/01500201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01500301', '0150', 'ミュウツー', 'メガミュウツーY', 'image/normal/01_front/01500301.png', 'image/shiny/01_front/01500301.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01510101', '0151', 'ミュウ', 'image/normal/01_front/01510101.png', 'image/shiny/01_front/01510101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01520101', '0152', 'チコリータ', 'image/normal/01_front/01520101.png', 'image/shiny/01_front/01520101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01530101', '0153', 'ベイリーフ', 'image/normal/01_front/01530101.png', 'image/shiny/01_front/01530101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01540101', '0154', 'メガニウム', 'オスのすがた', 'image/normal/01_front/01540101.png', 'image/shiny/01_front/01540101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01540102', '0154', 'メガニウム', 'メスのすがた', 'image/normal/01_front/01540102.png', 'image/shiny/01_front/01540102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01540201', '0154', 'メガニウム', 'メガメガニウム', 'image/normal/01_front/01540201.png', 'image/shiny/01_front/01540201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01550101', '0155', 'ヒノアラシ', 'image/normal/01_front/01550101.png', 'image/shiny/01_front/01550101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01560101', '0156', 'マグマラシ', 'image/normal/01_front/01560101.png', 'image/shiny/01_front/01560101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01570101', '0157', 'バクフーン', 'image/normal/01_front/01570101.png', 'image/shiny/01_front/01570101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01570201', '0157', 'バクフーン', 'ヒスイのすがた', 'image/normal/01_front/01570201.png', 'image/shiny/01_front/01570201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01580101', '0158', 'ワニノコ', 'image/normal/01_front/01580101.png', 'image/shiny/01_front/01580101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01590101', '0159', 'アリゲイツ', 'image/normal/01_front/01590101.png', 'image/shiny/01_front/01590101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01600101', '0160', 'オーダイル', 'image/normal/01_front/01600101.png', 'image/shiny/01_front/01600101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01600201', '0160', 'オーダイル', 'メガオーダイル', 'image/normal/01_front/01600201.png', 'image/shiny/01_front/01600201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01610101', '0161', 'オタチ', 'image/normal/01_front/01610101.png', 'image/shiny/01_front/01610101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01620101', '0162', 'オオタチ', 'image/normal/01_front/01620101.png', 'image/shiny/01_front/01620101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01630101', '0163', 'ホーホー', 'image/normal/01_front/01630101.png', 'image/shiny/01_front/01630101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01640101', '0164', 'ヨルノズク', 'image/normal/01_front/01640101.png', 'image/shiny/01_front/01640101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01650101', '0165', 'レディバ', 'オスのすがた', 'image/normal/01_front/01650101.png', 'image/shiny/01_front/01650101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01650102', '0165', 'レディバ', 'メスのすがた', 'image/normal/01_front/01650102.png', 'image/shiny/01_front/01650102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01660101', '0166', 'レディアン', 'オスのすがた', 'image/normal/01_front/01660101.png', 'image/shiny/01_front/01660101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01660102', '0166', 'レディアン', 'メスのすがた', 'image/normal/01_front/01660102.png', 'image/shiny/01_front/01660102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01670101', '0167', 'イトマル', 'image/normal/01_front/01670101.png', 'image/shiny/01_front/01670101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01680101', '0168', 'アリアドス', 'image/normal/01_front/01680101.png', 'image/shiny/01_front/01680101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01690101', '0169', 'クロバット', 'image/normal/01_front/01690101.png', 'image/shiny/01_front/01690101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01700101', '0170', 'チョンチー', 'image/normal/01_front/01700101.png', 'image/shiny/01_front/01700101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01710101', '0171', 'ランターン', 'image/normal/01_front/01710101.png', 'image/shiny/01_front/01710101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01720101', '0172', 'ピチュー', 'image/normal/01_front/01720101.png', 'image/shiny/01_front/01720101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01730101', '0173', 'ピィ', 'image/normal/01_front/01730101.png', 'image/shiny/01_front/01730101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01740101', '0174', 'ププリン', 'image/normal/01_front/01740101.png', 'image/shiny/01_front/01740101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01750101', '0175', 'トゲピー', 'image/normal/01_front/01750101.png', 'image/shiny/01_front/01750101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01760101', '0176', 'トゲチック', 'image/normal/01_front/01760101.png', 'image/shiny/01_front/01760101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01770101', '0177', 'ネイティ', 'image/normal/01_front/01770101.png', 'image/shiny/01_front/01770101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01780101', '0178', 'ネイティオ', 'オスのすがた', 'image/normal/01_front/01780101.png', 'image/shiny/01_front/01780101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01780102', '0178', 'ネイティオ', 'メスのすがた', 'image/normal/01_front/01780102.png', 'image/shiny/01_front/01780102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01790101', '0179', 'メリープ', 'image/normal/01_front/01790101.png', 'image/shiny/01_front/01790101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01800101', '0180', 'モココ', 'image/normal/01_front/01800101.png', 'image/shiny/01_front/01800101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01810101', '0181', 'デンリュウ', 'image/normal/01_front/01810101.png', 'image/shiny/01_front/01810101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01810201', '0181', 'デンリュウ', 'メガデンリュウ', 'image/normal/01_front/01810201.png', 'image/shiny/01_front/01810201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01820101', '0182', 'キレイハナ', 'image/normal/01_front/01820101.png', 'image/shiny/01_front/01820101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01830101', '0183', 'マリル', 'image/normal/01_front/01830101.png', 'image/shiny/01_front/01830101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01840101', '0184', 'マリルリ', 'image/normal/01_front/01840101.png', 'image/shiny/01_front/01840101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01850101', '0185', 'ウソッキー', 'オスのすがた', 'image/normal/01_front/01850101.png', 'image/shiny/01_front/01850101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01850102', '0185', 'ウソッキー', 'メスのすがた', 'image/normal/01_front/01850102.png', 'image/shiny/01_front/01850102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01860101', '0186', 'ニョロトノ', 'オスのすがた', 'image/normal/01_front/01860101.png', 'image/shiny/01_front/01860101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01860102', '0186', 'ニョロトノ', 'メスのすがた', 'image/normal/01_front/01860102.png', 'image/shiny/01_front/01860102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01870101', '0187', 'ハネッコ', 'image/normal/01_front/01870101.png', 'image/shiny/01_front/01870101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01880101', '0188', 'ポポッコ', 'image/normal/01_front/01880101.png', 'image/shiny/01_front/01880101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01890101', '0189', 'ワタッコ', 'image/normal/01_front/01890101.png', 'image/shiny/01_front/01890101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01900101', '0190', 'エイパム', 'オスのすがた', 'image/normal/01_front/01900101.png', 'image/shiny/01_front/01900101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01900102', '0190', 'エイパム', 'メスのすがた', 'image/normal/01_front/01900102.png', 'image/shiny/01_front/01900102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01910101', '0191', 'ヒマナッツ', 'image/normal/01_front/01910101.png', 'image/shiny/01_front/01910101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01920101', '0192', 'キマワリ', 'image/normal/01_front/01920101.png', 'image/shiny/01_front/01920101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01930101', '0193', 'ヤンヤンマ', 'image/normal/01_front/01930101.png', 'image/shiny/01_front/01930101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01940101', '0194', 'ウパー', 'オスのすがた', 'image/normal/01_front/01940101.png', 'image/shiny/01_front/01940101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01940102', '0194', 'ウパー', 'メスのすがた', 'image/normal/01_front/01940102.png', 'image/shiny/01_front/01940102.png');

INSERT INTO pokedex3(POKEID, NO, FORM, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01940201', '0194', 'ウパー', 'パルデアのすがた', 'image/normal/01_front/01940201.png', 'image/shiny/01_front/01940201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01950101', '0195', 'ヌオー', 'オスのすがた', 'image/normal/01_front/01950101.png', 'image/shiny/01_front/01950101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01950102', '0195', 'ヌオー', 'メスのすがた', 'image/normal/01_front/01950102.png', 'image/shiny/01_front/01950102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01960101', '0196', 'エーフィ', 'image/normal/01_front/01960101.png', 'image/shiny/01_front/01960101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01970101', '0197', 'ブラッキー', 'image/normal/01_front/01970101.png', 'image/shiny/01_front/01970101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01980101', '0198', 'ヤミカラス', 'オスのすがた', 'image/normal/01_front/01980101.png', 'image/shiny/01_front/01980101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01980102', '0198', 'ヤミカラス', 'メスのすがた', 'image/normal/01_front/01980102.png', 'image/shiny/01_front/01980102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01990101', '0199', 'ヤドキング', 'image/normal/01_front/01990101.png', 'image/shiny/01_front/01990101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('01990201', '0199', 'ヤドキング', 'ガラルのすがた', 'image/normal/01_front/01990201.png', 'image/shiny/01_front/01990201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02000101', '0200', 'ムウマ', 'image/normal/01_front/02000101.png', 'image/shiny/01_front/02000101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02010101', '0201', 'アンノーン', 'A', 'image/normal/01_front/02010101.png', 'image/shiny/01_front/02010101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02010201', '0201', 'アンノーン', 'B', 'image/normal/01_front/02010201.png', 'image/shiny/01_front/02010201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02010301', '0201', 'アンノーン', 'C', 'image/normal/01_front/02010301.png', 'image/shiny/01_front/02010301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02010401', '0201', 'アンノーン', 'D', 'image/normal/01_front/02010401.png', 'image/shiny/01_front/02010401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02010501', '0201', 'アンノーン', 'E', 'image/normal/01_front/02010501.png', 'image/shiny/01_front/02010501.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02010601', '0201', 'アンノーン', 'F', 'image/normal/01_front/02010601.png', 'image/shiny/01_front/02010601.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02010701', '0201', 'アンノーン', 'G', 'image/normal/01_front/02010701.png', 'image/shiny/01_front/02010701.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02010801', '0201', 'アンノーン', 'H', 'image/normal/01_front/02010801.png', 'image/shiny/01_front/02010801.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02010901', '0201', 'アンノーン', 'I', 'image/normal/01_front/02010901.png', 'image/shiny/01_front/02010901.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02011001', '0201', 'アンノーン', 'J', 'image/normal/01_front/02011001.png', 'image/shiny/01_front/02011001.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02011101', '0201', 'アンノーン', 'K', 'image/normal/01_front/02011101.png', 'image/shiny/01_front/02011101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02011201', '0201', 'アンノーン', 'L', 'image/normal/01_front/02011201.png', 'image/shiny/01_front/02011201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02011301', '0201', 'アンノーン', 'M', 'image/normal/01_front/02011301.png', 'image/shiny/01_front/02011301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02011401', '0201', 'アンノーン', 'N', 'image/normal/01_front/02011401.png', 'image/shiny/01_front/02011401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02011501', '0201', 'アンノーン', 'O', 'image/normal/01_front/02011501.png', 'image/shiny/01_front/02011501.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02011601', '0201', 'アンノーン', 'P', 'image/normal/01_front/02011601.png', 'image/shiny/01_front/02011601.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02011701', '0201', 'アンノーン', 'Q', 'image/normal/01_front/02011701.png', 'image/shiny/01_front/02011701.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02011801', '0201', 'アンノーン', 'R', 'image/normal/01_front/02011801.png', 'image/shiny/01_front/02011801.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02011901', '0201', 'アンノーン', 'S', 'image/normal/01_front/02011901.png', 'image/shiny/01_front/02011901.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02012001', '0201', 'アンノーン', 'T', 'image/normal/01_front/02012001.png', 'image/shiny/01_front/02012001.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02012101', '0201', 'アンノーン', 'U', 'image/normal/01_front/02012101.png', 'image/shiny/01_front/02012101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02012201', '0201', 'アンノーン', 'V', 'image/normal/01_front/02012201.png', 'image/shiny/01_front/02012201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02012301', '0201', 'アンノーン', 'W', 'image/normal/01_front/02012301.png', 'image/shiny/01_front/02012301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02012401', '0201', 'アンノーン', 'X', 'image/normal/01_front/02012401.png', 'image/shiny/01_front/02012401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02012501', '0201', 'アンノーン', 'Y', 'image/normal/01_front/02012501.png', 'image/shiny/01_front/02012501.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02012601', '0201', 'アンノーン', 'Z', 'image/normal/01_front/02012601.png', 'image/shiny/01_front/02012601.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02012701', '0201', 'アンノーン', '!', 'image/normal/01_front/02012701.png', 'image/shiny/01_front/02012701.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02012801', '0201', 'アンノーン', '?', 'image/normal/01_front/02012801.png', 'image/shiny/01_front/02012801.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02020101', '0202', 'ソーナンス', 'オスのすがた', 'image/normal/01_front/02020101.png', 'image/shiny/01_front/02020101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02020102', '0202', 'ソーナンス', 'メスのすがた', 'image/normal/01_front/02020102.png', 'image/shiny/01_front/02020102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02030101', '0203', 'キリンリキ', 'オスのすがた', 'image/normal/01_front/02030101.png', 'image/shiny/01_front/02030101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02030102', '0203', 'キリンリキ', 'メスのすがた', 'image/normal/01_front/02030102.png', 'image/shiny/01_front/02030102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02040101', '0204', 'クヌギダマ', 'image/normal/01_front/02040101.png', 'image/shiny/01_front/02040101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02050101', '0205', 'フォレトス', 'image/normal/01_front/02050101.png', 'image/shiny/01_front/02050101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02060101', '0206', 'ノコッチ', 'image/normal/01_front/02060101.png', 'image/shiny/01_front/02060101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02070101', '0207', 'グライガー', 'オスのすがた', 'image/normal/01_front/02070101.png', 'image/shiny/01_front/02070101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02070102', '0207', 'グライガー', 'メスのすがた', 'image/normal/01_front/02070102.png', 'image/shiny/01_front/02070102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02080101', '0208', 'ハガネール', 'オスのすがた', 'image/normal/01_front/02080101.png', 'image/shiny/01_front/02080101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02080102', '0208', 'ハガネール', 'メスのすがた', 'image/normal/01_front/02080102.png', 'image/shiny/01_front/02080102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02080201', '0208', 'ハガネール', 'メガハガネール', 'image/normal/01_front/02080201.png', 'image/shiny/01_front/02080201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02090101', '0209', 'ブルー', 'image/normal/01_front/02090101.png', 'image/shiny/01_front/02090101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02100101', '0210', 'グランブル', 'image/normal/01_front/02100101.png', 'image/shiny/01_front/02100101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02110101', '0211', 'ハリーセン', 'image/normal/01_front/02110101.png', 'image/shiny/01_front/02110101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02110201', '0211', 'ハリーセン', 'ヒスイのすがた', 'image/normal/01_front/02110201.png', 'image/shiny/01_front/02110201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02120101', '0212', 'ハッサム', 'オスのすがた', 'image/normal/01_front/02120101.png', 'image/shiny/01_front/02120101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02120102', '0212', 'ハッサム', 'メスのすがた', 'image/normal/01_front/02120102.png', 'image/shiny/01_front/02120102.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02120201', '0212', 'ハッサム', 'メガハッサム', 'image/normal/01_front/02120201.png', 'image/shiny/01_front/02120201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02130101', '0213', 'ツボツボ', 'image/normal/01_front/02130101.png', 'image/shiny/01_front/02130101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02140101', '0214', 'ヘラクロス', 'オスのすがた', 'image/normal/01_front/02140101.png', 'image/shiny/01_front/02140101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02140102', '0214', 'ヘラクロス', 'メスのすがた', 'image/normal/01_front/02140102.png', 'image/shiny/01_front/02140102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02140201', '0214', 'ヘラクロス', 'メガヘラクロス', 'image/normal/01_front/02140201.png', 'image/shiny/01_front/02140201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02150101', '0215', 'ニューラ', 'オスのすがた', 'image/normal/01_front/02150101.png', 'image/shiny/01_front/02150101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02150102', '0215', 'ニューラ', 'メスのすがた', 'image/normal/01_front/02150102.png', 'image/shiny/01_front/02150102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02150201', '0215', 'ニューラ', 'ヒスイのすがた・オスのすがた', 'image/normal/01_front/02150201.png', 'image/shiny/01_front/02150201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02150202', '0215', 'ニューラ', 'ヒスイのすがた・メスのすがた', 'image/normal/01_front/02150202.png', 'image/shiny/01_front/02150202.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02160101', '0216', 'ヒメグマ', 'image/normal/01_front/02160101.png', 'image/shiny/01_front/02160101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02170101', '0217', 'リングマ', 'オスのすがた', 'image/normal/01_front/02170101.png', 'image/shiny/01_front/02170101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02170102', '0217', 'リングマ', 'メスのすがた', 'image/normal/01_front/02170102.png', 'image/shiny/01_front/02170102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02180101', '0218', 'マグマッグ', 'image/normal/01_front/02180101.png', 'image/shiny/01_front/02180101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02190101', '0219', 'マグカルゴ', 'image/normal/01_front/02190101.png', 'image/shiny/01_front/02190101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02200101', '0220', 'ウリムー', 'image/normal/01_front/02200101.png', 'image/shiny/01_front/02200101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02210101', '0221', 'イノムー', 'オスのすがた', 'image/normal/01_front/02210101.png', 'image/shiny/01_front/02210101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02210102', '0221', 'イノムー', 'メスのすがた', 'image/normal/01_front/02210102.png', 'image/shiny/01_front/02210102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02220101', '0222', 'サニーゴ', 'image/normal/01_front/02220101.png', 'image/shiny/01_front/02220101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02220201', '0222', 'サニーゴ', 'ガラルのすがた', 'image/normal/01_front/02220201.png', 'image/shiny/01_front/02220201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02230101', '0223', 'テッポウオ', 'image/normal/01_front/02230101.png', 'image/shiny/01_front/02230101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02240101', '0224', 'オクタン', 'オスのすがた', 'image/normal/01_front/02240101.png', 'image/shiny/01_front/02240101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02240102', '0224', 'オクタン', 'メスのすがた', 'image/normal/01_front/02240102.png', 'image/shiny/01_front/02240102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02250101', '0225', 'デリバード', 'image/normal/01_front/02250101.png', 'image/shiny/01_front/02250101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02260101', '0226', 'マンタイン', 'image/normal/01_front/02260101.png', 'image/shiny/01_front/02260101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02270101', '0227', 'エアームド', 'image/normal/01_front/02270101.png', 'image/shiny/01_front/02270101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02270201', '0227', 'エアームド', 'メガエアームド', 'image/normal/01_front/02270201.png', 'image/shiny/01_front/02270201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02280101', '0228', 'デルビル', 'image/normal/01_front/02280101.png', 'image/shiny/01_front/02280101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02290101', '0229', 'ヘルガー', 'オスのすがた', 'image/normal/01_front/02290101.png', 'image/shiny/01_front/02290101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02290102', '0229', 'ヘルガー', 'メスのすがた', 'image/normal/01_front/02290102.png', 'image/shiny/01_front/02290102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02290201', '0229', 'ヘルガー', 'メガヘルガー', 'image/normal/01_front/02290201.png', 'image/shiny/01_front/02290201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02300101', '0230', 'キングドラ', 'image/normal/01_front/02300101.png', 'image/shiny/01_front/02300101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02310101', '0231', 'ゴマゾウ', 'image/normal/01_front/02310101.png', 'image/shiny/01_front/02310101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02320101', '0232', 'ドンファン', 'オスのすがた', 'image/normal/01_front/02320101.png', 'image/shiny/01_front/02320101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02320102', '0232', 'ドンファン', 'メスのすがた', 'image/normal/01_front/02320102.png', 'image/shiny/01_front/02320102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02330101', '0233', 'ポリゴン2', 'image/normal/01_front/02330101.png', 'image/shiny/01_front/02330101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02340101', '0234', 'オドシシ', 'image/normal/01_front/02340101.png', 'image/shiny/01_front/02340101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02350101', '0235', 'ドーブル', 'image/normal/01_front/02350101.png', 'image/shiny/01_front/02350101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02360101', '0236', 'バルキー', 'image/normal/01_front/02360101.png', 'image/shiny/01_front/02360101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02370101', '0237', 'カポエラー', 'image/normal/01_front/02370101.png', 'image/shiny/01_front/02370101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02380101', '0238', 'ムチュール', 'image/normal/01_front/02380101.png', 'image/shiny/01_front/02380101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02390101', '0239', 'エレキッド', 'image/normal/01_front/02390101.png', 'image/shiny/01_front/02390101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02400101', '0240', 'ブビィ', 'image/normal/01_front/02400101.png', 'image/shiny/01_front/02400101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02410101', '0241', 'ミルタンク', 'image/normal/01_front/02410101.png', 'image/shiny/01_front/02410101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02420101', '0242', 'ハピナス', 'image/normal/01_front/02420101.png', 'image/shiny/01_front/02420101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02430101', '0243', 'ライコウ', 'image/normal/01_front/02430101.png', 'image/shiny/01_front/02430101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02440101', '0244', 'エンテイ', 'image/normal/01_front/02440101.png', 'image/shiny/01_front/02440101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02450101', '0245', 'スイクン', 'image/normal/01_front/02450101.png', 'image/shiny/01_front/02450101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02460101', '0246', 'ヨーギラス', 'image/normal/01_front/02460101.png', 'image/shiny/01_front/02460101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02470101', '0247', 'サナギラス', 'image/normal/01_front/02470101.png', 'image/shiny/01_front/02470101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02480101', '0248', 'バンギラス', 'image/normal/01_front/02480101.png', 'image/shiny/01_front/02480101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02480201', '0248', 'バンギラス', 'メガバンギラス', 'image/normal/01_front/02480201.png', 'image/shiny/01_front/02480201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02490101', '0249', 'ルギア', 'image/normal/01_front/02490101.png', 'image/shiny/01_front/02490101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02500101', '0250', 'ホウオウ', 'image/normal/01_front/02500101.png', 'image/shiny/01_front/02500101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02510101', '0251', 'セレビィ', 'image/normal/01_front/02510101.png', 'image/shiny/01_front/02510101.png');




INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02520101', '0252', 'キモリ', 'image/normal/01_front/02520101.png', 'image/shiny/01_front/02520101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02530101', '0253', 'ジュプトル', 'image/normal/01_front/02530101.png', 'image/shiny/01_front/02530101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02540101', '0254', 'ジュカイン', 'image/normal/01_front/02540101.png', 'image/shiny/01_front/02540101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02540201', '0254', 'ジュカイン', 'メガジュカイン', 'image/normal/01_front/02540201.png', 'image/shiny/01_front/02540201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02550101', '0255', 'アチャモ', 'オスのすがた', 'image/normal/01_front/02550101.png', 'image/shiny/01_front/02550101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02550102', '0255', 'アチャモ', 'メスのすがた', 'image/normal/01_front/02550102.png', 'image/shiny/01_front/02550102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02560101', '0256', 'ワカシャモ', 'オスのすがた', 'image/normal/01_front/02560101.png', 'image/shiny/01_front/02560101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02560102', '0256', 'ワカシャモ', 'メスのすがた', 'image/normal/01_front/02560102.png', 'image/shiny/01_front/02560102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02570101', '0257', 'バシャーモ', 'オスのすがた', 'image/normal/01_front/02570101.png', 'image/shiny/01_front/02570101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02570102', '0257', 'バシャーモ', 'メスのすがた', 'image/normal/01_front/02570102.png', 'image/shiny/01_front/02570102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02570201', '0257', 'バシャーモ', 'メガバシャーモ', 'image/normal/01_front/02570201.png', 'image/shiny/01_front/02570201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02580101', '0258', 'ミズゴロウ', 'image/normal/01_front/02580101.png', 'image/shiny/01_front/02580101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02590101', '0259', 'ヌマクロー', 'image/normal/01_front/02590101.png', 'image/shiny/01_front/02590101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02600101', '0260', 'ラグラージ', 'image/normal/01_front/02600101.png', 'image/shiny/01_front/02600101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02600201', '0260', 'ラグラージ', 'メガラグラージ', 'image/normal/01_front/02600201.png', 'image/shiny/01_front/02600201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02610101', '0261', 'ポチエナ', 'image/normal/01_front/02610101.png', 'image/shiny/01_front/02610101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02620101', '0262', 'グラエナ', 'image/normal/01_front/02620101.png', 'image/shiny/01_front/02620101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02630101', '0263', 'ジグザグマ', 'image/normal/01_front/02630101.png', 'image/shiny/01_front/02630101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02630201', '0263', 'ジグザグマ', 'ガラルのすがた', 'image/normal/01_front/02630201.png', 'image/shiny/01_front/02630201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02640101', '0264', 'マッスグマ', 'image/normal/01_front/02640101.png', 'image/shiny/01_front/02640101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02640201', '0264', 'マッスグマ', 'ガラルのすがた', 'image/normal/01_front/02640201.png', 'image/shiny/01_front/02640201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02650101', '0265', 'ケムッソ', 'image/normal/01_front/02650101.png', 'image/shiny/01_front/02650101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02660101', '0266', 'カラサリス', 'image/normal/01_front/02660101.png', 'image/shiny/01_front/02660101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02670101', '0267', 'アゲハント', 'オスのすがた', 'image/normal/01_front/02670101.png', 'image/shiny/01_front/02670101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02670102', '0267', 'アゲハント', 'メスのすがた', 'image/normal/01_front/02670102.png', 'image/shiny/01_front/02670102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02680101', '0268', 'マユルド', 'image/normal/01_front/02680101.png', 'image/shiny/01_front/02680101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02690101', '0269', 'ドクケイル', 'オスのすがた', 'image/normal/01_front/02690101.png', 'image/shiny/01_front/02690101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02690102', '0269', 'ドクケイル', 'メスのすがた', 'image/normal/01_front/02690102.png', 'image/shiny/01_front/02690102.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02700101', '0270', 'ハスボー', 'image/normal/01_front/02700101.png', 'image/shiny/01_front/02700101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02710101', '0271', 'ハスブレロ', 'image/normal/01_front/02710101.png', 'image/shiny/01_front/02710101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02720101', '0272', 'ルンパッパ', 'オスのすがた', 'image/normal/01_front/02720101.png', 'image/shiny/01_front/02720101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02720102', '0272', 'ルンパッパ', 'メスのすがた', 'image/normal/01_front/02720102.png', 'image/shiny/01_front/02720102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02730101', '0273', 'タネボー', 'image/normal/01_front/02730101.png', 'image/shiny/01_front/02730101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02740101', '0274', 'コノハナ', 'オスのすがた', 'image/normal/01_front/02740101.png', 'image/shiny/01_front/02740101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02740102', '0274', 'コノハナ', 'メスのすがた', 'image/normal/01_front/02740102.png', 'image/shiny/01_front/02740102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02750101', '0275', 'ダーテング', 'オスのすがた', 'image/normal/01_front/02750101.png', 'image/shiny/01_front/02750101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02750102', '0275', 'ダーテング', 'メスのすがた', 'image/normal/01_front/02750102.png', 'image/shiny/01_front/02750102.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02760101', '0276', 'スバメ', 'image/normal/01_front/02760101.png', 'image/shiny/01_front/02760101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02770101', '0277', 'オオスバメ', 'image/normal/01_front/02770101.png', 'image/shiny/01_front/02770101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02780101', '0278', 'キャモメ', 'image/normal/01_front/02780101.png', 'image/shiny/01_front/02780101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02790101', '0279', 'ペリッパー', 'image/normal/01_front/02790101.png', 'image/shiny/01_front/02790101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02800101', '0280', 'ラルトス', 'image/normal/01_front/02800101.png', 'image/shiny/01_front/02800101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02810101', '0281', 'キルリア', 'image/normal/01_front/02810101.png', 'image/shiny/01_front/02810101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02820101', '0282', 'サーナイト', 'image/normal/01_front/02820101.png', 'image/shiny/01_front/02820101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02820201', '0282', 'サーナイト', 'メガサーナイト', 'image/normal/01_front/02820201.png', 'image/shiny/01_front/02820201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02830101', '0283', 'アメタマ', 'image/normal/01_front/02830101.png', 'image/shiny/01_front/02830101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02840101', '0284', 'アメモース', 'image/normal/01_front/02840101.png', 'image/shiny/01_front/02840101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02850101', '0285', 'キノココ', 'image/normal/01_front/02850101.png', 'image/shiny/01_front/02850101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02860101', '0286', 'キノガッサ', 'image/normal/01_front/02860101.png', 'image/shiny/01_front/02860101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02870101', '0287', 'ナマケロ', 'image/normal/01_front/02870101.png', 'image/shiny/01_front/02870101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02880101', '0288', 'ヤルキモノ', 'image/normal/01_front/02880101.png', 'image/shiny/01_front/02880101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02890101', '0289', 'ケッキング', 'image/normal/01_front/02890101.png', 'image/shiny/01_front/02890101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02900101', '0290', 'ツチニン', 'image/normal/01_front/02900101.png', 'image/shiny/01_front/02900101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02910101', '0291', 'テッカニン', 'image/normal/01_front/02910101.png', 'image/shiny/01_front/02910101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02920101', '0292', 'ヌケニン', 'image/normal/01_front/02920101.png', 'image/shiny/01_front/02920101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02930101', '0293', 'ゴニョニョ', 'image/normal/01_front/02930101.png', 'image/shiny/01_front/02930101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02940101', '0294', 'ドゴーム', 'image/normal/01_front/02940101.png', 'image/shiny/01_front/02940101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02950101', '0295', 'バクオング', 'image/normal/01_front/02950101.png', 'image/shiny/01_front/02950101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02960101', '0296', 'マクノシタ', 'image/normal/01_front/02960101.png', 'image/shiny/01_front/02960101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02970101', '0297', 'ハリテヤマ', 'image/normal/01_front/02970101.png', 'image/shiny/01_front/02970101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02980101', '0298', 'ルリリ', 'image/normal/01_front/02980101.png', 'image/shiny/01_front/02980101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('02990101', '0299', 'ノズパス', 'image/normal/01_front/02990101.png', 'image/shiny/01_front/02990101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03000101', '0300', 'エネコ', 'image/normal/01_front/03000101.png', 'image/shiny/01_front/03000101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03010101', '0301', 'エネコロロ', 'image/normal/01_front/03010101.png', 'image/shiny/01_front/03010101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03020101', '0302', 'ヤミラミ', 'image/normal/01_front/03020101.png', 'image/shiny/01_front/03020101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03020201', '0302', 'ヤミラミ', 'メガヤミラミ', 'image/normal/01_front/03020201.png', 'image/shiny/01_front/03020201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03030101', '0303', 'クチート', 'image/normal/01_front/03030101.png', 'image/shiny/01_front/03030101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03030201', '0303', 'クチート', 'メガクチート', 'image/normal/01_front/03030201.png', 'image/shiny/01_front/03030201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03040101', '0304', 'ココドラ', 'image/normal/01_front/03040101.png', 'image/shiny/01_front/03040101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03050101', '0305', 'コドラ', 'image/normal/01_front/03050101.png', 'image/shiny/01_front/03050101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03060101', '0306', 'ボスゴドラ', 'image/normal/01_front/03060101.png', 'image/shiny/01_front/03060101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03060201', '0306', 'ボスゴドラ', 'メガボスゴドラ', 'image/normal/01_front/03060201.png', 'image/shiny/01_front/03060201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03070101', '0307', 'アサナン', 'オスのすがた', 'image/normal/01_front/03070101.png', 'image/shiny/01_front/03070101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03070102', '0307', 'アサナン', 'メスのすがた', 'image/normal/01_front/03070102.png', 'image/shiny/01_front/03070102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03080101', '0308', 'チャーレム', 'オスのすがた', 'image/normal/01_front/03080101.png', 'image/shiny/01_front/03080101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03080102', '0308', 'チャーレム', 'メスのすがた', 'image/normal/01_front/03080102.png', 'image/shiny/01_front/03080102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03080201', '0308', 'チャーレム', 'メガチャーレム', 'image/normal/01_front/03080201.png', 'image/shiny/01_front/03080201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03090101', '0309', 'ラクライ', 'image/normal/01_front/03090101.png', 'image/shiny/01_front/03090101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03100101', '0310', 'ライボルト', 'image/normal/01_front/03100101.png', 'image/shiny/01_front/03100101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03100201', '0310', 'ライボルト', 'メガライボルト', 'image/normal/01_front/03100201.png', 'image/shiny/01_front/03100201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03110101', '0311', 'プラスル', 'image/normal/01_front/03110101.png', 'image/shiny/01_front/03110101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03120101', '0312', 'マイナン', 'image/normal/01_front/03120101.png', 'image/shiny/01_front/03120101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03130101', '0313', 'バルビート', 'image/normal/01_front/03130101.png', 'image/shiny/01_front/03130101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03140101', '0314', 'イルミーゼ', 'image/normal/01_front/03140101.png', 'image/shiny/01_front/03140101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03150101', '0315', 'ロゼリア', 'オスのすがた', 'image/normal/01_front/03150101.png', 'image/shiny/01_front/03150101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03150102', '0315', 'ロゼリア', 'メスのすがた', 'image/normal/01_front/03150102.png', 'image/shiny/01_front/03150102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03160101', '0316', 'ゴクリン', 'オスのすがた', 'image/normal/01_front/03160101.png', 'image/shiny/01_front/03160101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03160102', '0316', 'ゴクリン', 'メスのすがた', 'image/normal/01_front/03160102.png', 'image/shiny/01_front/03160102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03170101', '0317', 'マルノーム', 'オスのすがた', 'image/normal/01_front/03170101.png', 'image/shiny/01_front/03170101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03170102', '0317', 'マルノーム', 'メスのすがた', 'image/normal/01_front/03170102.png', 'image/shiny/01_front/03170102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03180101', '0318', 'キバニア', 'image/normal/01_front/03180101.png', 'image/shiny/01_front/03180101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03190101', '0319', 'サメハダー', 'image/normal/01_front/03190101.png', 'image/shiny/01_front/03190101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03190201', '0319', 'サメハダー', 'メガサメハダー', 'image/normal/01_front/03190201.png', 'image/shiny/01_front/03190201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03200101', '0320', 'ホエルコ', 'image/normal/01_front/03200101.png', 'image/shiny/01_front/03200101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03210101', '0321', 'ホエルオー', 'image/normal/01_front/03210101.png', 'image/shiny/01_front/03210101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03220101', '0322', 'ドンメル', 'オスのすがた', 'image/normal/01_front/03220101.png', 'image/shiny/01_front/03220101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03220102', '0322', 'ドンメル', 'メスのすがた', 'image/normal/01_front/03220102.png', 'image/shiny/01_front/03220102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03230101', '0323', 'バクーダ', 'オスのすがた', 'image/normal/01_front/03230101.png', 'image/shiny/01_front/03230101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03230102', '0323', 'バクーダ', 'メスのすがた', 'image/normal/01_front/03230102.png', 'image/shiny/01_front/03230102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03230201', '0323', 'バクーダ', 'メガバクーダ', 'image/normal/01_front/03230201.png', 'image/shiny/01_front/03230201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03240101', '0324', 'コータス', 'image/normal/01_front/03240101.png', 'image/shiny/01_front/03240101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03250101', '0325', 'バネブー', 'image/normal/01_front/03250101.png', 'image/shiny/01_front/03250101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03260101', '0326', 'ブーピッグ', 'image/normal/01_front/03260101.png', 'image/shiny/01_front/03260101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03270101', '0327', 'パッチール', 'image/normal/01_front/03270101.png', 'image/shiny/01_front/03270101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03280101', '0328', 'ナックラー', 'image/normal/01_front/03280101.png', 'image/shiny/01_front/03280101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03290101', '0329', 'ビブラーバ', 'image/normal/01_front/03290101.png', 'image/shiny/01_front/03290101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03300101', '0330', 'フライゴン', 'image/normal/01_front/03300101.png', 'image/shiny/01_front/03300101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03310101', '0331', 'サボネア', 'image/normal/01_front/03310101.png', 'image/shiny/01_front/03310101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03320101', '0332', 'ノクタス', 'オスのすがた', 'image/normal/01_front/03320101.png', 'image/shiny/01_front/03320101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03320102', '0332', 'ノクタス', 'メスのすがた', 'image/normal/01_front/03320102.png', 'image/shiny/01_front/03320102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03330101', '0333', 'チルット', 'image/normal/01_front/03330101.png', 'image/shiny/01_front/03330101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03340101', '0334', 'チルタリス', 'image/normal/01_front/03340101.png', 'image/shiny/01_front/03340101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03340201', '0334', 'チルタリス', 'メガチルタリス', 'image/normal/01_front/03340201.png', 'image/shiny/01_front/03340201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03350101', '0335', 'ザングース', 'image/normal/01_front/03350101.png', 'image/shiny/01_front/03350101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03360101', '0336', 'ハブネーク', 'image/normal/01_front/03360101.png', 'image/shiny/01_front/03360101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03370101', '0337', 'ルナトーン', 'image/normal/01_front/03370101.png', 'image/shiny/01_front/03370101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03380101', '0338', 'ソルロック', 'image/normal/01_front/03380101.png', 'image/shiny/01_front/03380101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03390101', '0339', 'ドジョッチ', 'image/normal/01_front/03390101.png', 'image/shiny/01_front/03390101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03400101', '0340', 'ナマズン', 'image/normal/01_front/03400101.png', 'image/shiny/01_front/03400101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03410101', '0341', 'ヘイガニ', 'image/normal/01_front/03410101.png', 'image/shiny/01_front/03410101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03420101', '0342', 'シザリガー', 'image/normal/01_front/03420101.png', 'image/shiny/01_front/03420101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03430101', '0343', 'ヤジロン', 'image/normal/01_front/03430101.png', 'image/shiny/01_front/03430101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03440101', '0344', 'ネンドール', 'image/normal/01_front/03440101.png', 'image/shiny/01_front/03440101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03450101', '0345', 'リリーラ', 'image/normal/01_front/03450101.png', 'image/shiny/01_front/03450101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03460101', '0346', 'ユレイドル', 'image/normal/01_front/03460101.png', 'image/shiny/01_front/03460101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03470101', '0347', 'アノプス', 'image/normal/01_front/03470101.png', 'image/shiny/01_front/03470101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03480101', '0348', 'アーマルド', 'image/normal/01_front/03480101.png', 'image/shiny/01_front/03480101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03490101', '0349', 'ヒンバス', 'image/normal/01_front/03490101.png', 'image/shiny/01_front/03490101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03500101', '0350', 'ミロカロス', 'オスのすがた', 'image/normal/01_front/03500101.png', 'image/shiny/01_front/03500101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03500102', '0350', 'ミロカロス', 'メスのすがた', 'image/normal/01_front/03500102.png', 'image/shiny/01_front/03500102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03510101', '0351', 'ポワルン', 'image/normal/01_front/03510101.png', 'image/shiny/01_front/03510101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03510201', '0351', 'ポワルン', 'たいようのすがた', 'image/normal/01_front/03510201.png', 'image/shiny/01_front/03510201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03510301', '0351', 'ポワルン', 'あまみずのすがた', 'image/normal/01_front/03510301.png', 'image/shiny/01_front/03510301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03510401', '0351', 'ポワルン', 'ゆきぐものすがた', 'image/normal/01_front/03510401.png', 'image/shiny/01_front/03510401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03520101', '0352', 'カクレオン', 'image/normal/01_front/03520101.png', 'image/shiny/01_front/03520101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03530101', '0353', 'カゲボウズ', 'image/normal/01_front/03530101.png', 'image/shiny/01_front/03530101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03540101', '0354', 'ジュペッタ', 'image/normal/01_front/03540101.png', 'image/shiny/01_front/03540101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03540201', '0354', 'ジュペッタ', 'メガジュペッタ', 'image/normal/01_front/03540201.png', 'image/shiny/01_front/03540201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03550101', '0355', 'ヨマワル', 'image/normal/01_front/03550101.png', 'image/shiny/01_front/03550101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03560101', '0356', 'サマヨール', 'image/normal/01_front/03560101.png', 'image/shiny/01_front/03560101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03570101', '0357', 'トロピウス', 'image/normal/01_front/03570101.png', 'image/shiny/01_front/03570101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03580101', '0358', 'チリーン', 'image/normal/01_front/03580101.png', 'image/shiny/01_front/03580101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03580201', '0358', 'チリーン', 'メガチリーン', 'image/normal/01_front/03580201.png', 'image/shiny/01_front/03580201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03590101', '0359', 'アブソル', 'image/normal/01_front/03590101.png', 'image/shiny/01_front/03590101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03590201', '0359', 'アブソル', 'メガアブソル', 'image/normal/01_front/03590201.png', 'image/shiny/01_front/03590201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03590301', '0359', 'アブソル', 'メガアブソルZ', 'image/normal/01_front/03590301.png', 'image/shiny/01_front/03590301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03600101', '0360', 'ソーナノ', 'image/normal/01_front/03600101.png', 'image/shiny/01_front/03600101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03610101', '0361', 'ユキワラシ', 'image/normal/01_front/03610101.png', 'image/shiny/01_front/03610101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03620101', '0362', 'オニゴーリ', 'image/normal/01_front/03620101.png', 'image/shiny/01_front/03620101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03620201', '0362', 'オニゴーリ', 'メガオニゴーリ', 'image/normal/01_front/03620201.png', 'image/shiny/01_front/03620201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03630101', '0363', 'タマザラシ', 'image/normal/01_front/03630101.png', 'image/shiny/01_front/03630101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03640101', '0364', 'トドグラー', 'image/normal/01_front/03640101.png', 'image/shiny/01_front/03640101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03650101', '0365', 'トドゼルガ', 'image/normal/01_front/03650101.png', 'image/shiny/01_front/03650101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03660101', '0366', 'パールル', 'image/normal/01_front/03660101.png', 'image/shiny/01_front/03660101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03670101', '0367', 'ハンテール', 'image/normal/01_front/03670101.png', 'image/shiny/01_front/03670101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03680101', '0368', 'サクラビス', 'image/normal/01_front/03680101.png', 'image/shiny/01_front/03680101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03690101', '0369', 'ジーランス', 'オスのすがた', 'image/normal/01_front/03690101.png', 'image/shiny/01_front/03690101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03690102', '0369', 'ジーランス', 'メスのすがた', 'image/normal/01_front/03690102.png', 'image/shiny/01_front/03690102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03700101', '0370', 'ラブカス', 'image/normal/01_front/03700101.png', 'image/shiny/01_front/03700101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03710101', '0371', 'タツベイ', 'image/normal/01_front/03710101.png', 'image/shiny/01_front/03710101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03720101', '0372', 'コモルー', 'image/normal/01_front/03720101.png', 'image/shiny/01_front/03720101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03730101', '0373', 'ボーマンダ', 'image/normal/01_front/03730101.png', 'image/shiny/01_front/03730101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03730201', '0373', 'ボーマンダ', 'メガボーマンダ', 'image/normal/01_front/03730201.png', 'image/shiny/01_front/03730201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03740101', '0374', 'ダンバル', 'image/normal/01_front/03740101.png', 'image/shiny/01_front/03740101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03750101', '0375', 'メタング', 'image/normal/01_front/03750101.png', 'image/shiny/01_front/03750101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03760101', '0376', 'メタグロス', 'image/normal/01_front/03760101.png', 'image/shiny/01_front/03760101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03760201', '0376', 'メタグロス', 'メガメタグロス', 'image/normal/01_front/03760201.png', 'image/shiny/01_front/03760201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03770101', '0377', 'レジロック', 'image/normal/01_front/03770101.png', 'image/shiny/01_front/03770101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03780101', '0378', 'レジアイス', 'image/normal/01_front/03780101.png', 'image/shiny/01_front/03780101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03790101', '0379', 'レジスチル', 'image/normal/01_front/03790101.png', 'image/shiny/01_front/03790101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03800101', '0380', 'ラティアス', 'image/normal/01_front/03800101.png', 'image/shiny/01_front/03800101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03800201', '0380', 'ラティアス', 'メガラティアス', 'image/normal/01_front/03800201.png', 'image/shiny/01_front/03800201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03810101', '0381', 'ラティオス', 'image/normal/01_front/03810101.png', 'image/shiny/01_front/03810101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03810201', '0381', 'ラティオス', 'メガラティオス', 'image/normal/01_front/03810201.png', 'image/shiny/01_front/03810201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03820101', '0382', 'カイオーガ', 'image/normal/01_front/03820101.png', 'image/shiny/01_front/03820101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03820201', '0382', 'カイオーガ', 'ゲンシカイオーガ', 'image/normal/01_front/03820201.png', 'image/shiny/01_front/03820201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03830101', '0383', 'グラードン', 'image/normal/01_front/03830101.png', 'image/shiny/01_front/03830101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03830201', '0383', 'グラードン', 'ゲンシグラードン', 'image/normal/01_front/03830201.png', 'image/shiny/01_front/03830201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03840101', '0384', 'レックウザ', 'image/normal/01_front/03840101.png', 'image/shiny/01_front/03840101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03840201', '0384', 'レックウザ', 'メガレックウザ', 'image/normal/01_front/03840201.png', 'image/shiny/01_front/03840201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03850101', '0385', 'ジラーチ', 'image/normal/01_front/03850101.png', 'image/shiny/01_front/03850101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03860101', '0386', 'デオキシス', 'ノーマルフォルム', 'image/normal/01_front/03860101.png', 'image/shiny/01_front/03860101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03860201', '0386', 'デオキシス', 'アタックフォルム', 'image/normal/01_front/03860201.png', 'image/shiny/01_front/03860201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03860301', '0386', 'デオキシス', 'ディフェンスフォルム', 'image/normal/01_front/03860301.png', 'image/shiny/01_front/03860301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03860401', '0386', 'デオキシス', 'スピードフォルム', 'image/normal/01_front/03860401.png', 'image/shiny/01_front/03860401.png');


INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03870101', '0387', 'ナエトル', 'image/normal/01_front/03870101.png', 'image/shiny/01_front/03870101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03880101', '0388', 'ハヤシガメ', 'image/normal/01_front/03880101.png', 'image/shiny/01_front/03880101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03890101', '0389', 'ドダイトス', 'image/normal/01_front/03890101.png', 'image/shiny/01_front/03890101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03900101', '0390', 'ヒコザル', 'image/normal/01_front/03900101.png', 'image/shiny/01_front/03900101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03910101', '0391', 'モウカザル', 'image/normal/01_front/03910101.png', 'image/shiny/01_front/03910101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03920101', '0392', 'ゴウカザル', 'image/normal/01_front/03920101.png', 'image/shiny/01_front/03920101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03930101', '0393', 'ポッチャマ', 'image/normal/01_front/03930101.png', 'image/shiny/01_front/03930101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03940101', '0394', 'ポッタイシ', 'image/normal/01_front/03940101.png', 'image/shiny/01_front/03940101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03950101', '0395', 'エンペルト', 'image/normal/01_front/03950101.png', 'image/shiny/01_front/03950101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03960101', '0396', 'ムックル', 'オスのすがた', 'image/normal/01_front/03960101.png', 'image/shiny/01_front/03960101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03960102', '0396', 'ムックル', 'メスのすがた', 'image/normal/01_front/03960102.png', 'image/shiny/01_front/03960102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03970101', '0397', 'ムクバード', 'オスのすがた', 'image/normal/01_front/03970101.png', 'image/shiny/01_front/03970101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03970102', '0397', 'ムクバード', 'メスのすがた', 'image/normal/01_front/03970102.png', 'image/shiny/01_front/03970102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03980101', '0398', 'ムクホーク', 'オスのすがた', 'image/normal/01_front/03980101.png', 'image/shiny/01_front/03980101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03980102', '0398', 'ムクホーク', 'メスのすがた', 'image/normal/01_front/03980102.png', 'image/shiny/01_front/03980102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03980201', '0398', 'ムクホーク', 'メガムクホーク', 'image/normal/01_front/03980201.png', 'image/shiny/01_front/03980201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03990101', '0399', 'ビッパ', 'オスのすがた', 'image/normal/01_front/03990101.png', 'image/shiny/01_front/03990101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('03990102', '0399', 'ビッパ', 'メスのすがた', 'image/normal/01_front/03990102.png', 'image/shiny/01_front/03990102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04000101', '0400', 'ビーダル', 'オスのすがた', 'image/normal/01_front/04000101.png', 'image/shiny/01_front/04000101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04000102', '0400', 'ビーダル', 'メスのすがた', 'image/normal/01_front/04000102.png', 'image/shiny/01_front/04000102.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04010101', '0401', 'コロボーシ', 'オスのすがた', 'image/normal/01_front/04010101.png', 'image/shiny/01_front/04010101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04010102', '0401', 'コロボーシ', 'メスのすがた', 'image/normal/01_front/04010102.png', 'image/shiny/01_front/04010102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04020101', '0402', 'コロトック', 'オスのすがた', 'image/normal/01_front/04020101.png', 'image/shiny/01_front/04020101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04020102', '0402', 'コロトック', 'メスのすがた', 'image/normal/01_front/04020102.png', 'image/shiny/01_front/04020102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04030101', '0403', 'コリンク', 'オスのすがた', 'image/normal/01_front/04030101.png', 'image/shiny/01_front/04030101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04030102', '0403', 'コリンク', 'メスのすがた', 'image/normal/01_front/04030102.png', 'image/shiny/01_front/04030102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04040101', '0404', 'ルクシオ', 'オスのすがた', 'image/normal/01_front/04040101.png', 'image/shiny/01_front/04040101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04040102', '0404', 'ルクシオ', 'メスのすがた', 'image/normal/01_front/04040102.png', 'image/shiny/01_front/04040102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04050101', '0405', 'レントラー', 'オスのすがた', 'image/normal/01_front/04050101.png', 'image/shiny/01_front/04050101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04050102', '0405', 'レントラー', 'メスのすがた', 'image/normal/01_front/04050102.png', 'image/shiny/01_front/04050102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04060101', '0406', 'スボミー', 'image/normal/01_front/04060101.png', 'image/shiny/01_front/04060101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04070101', '0407', 'ロズレイド', 'オスのすがた', 'image/normal/01_front/04070101.png', 'image/shiny/01_front/04070101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04070102', '0407', 'ロズレイド', 'メスのすがた', 'image/normal/01_front/04070102.png', 'image/shiny/01_front/04070102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04080101', '0408', 'ズガイドス', 'image/normal/01_front/04080101.png', 'image/shiny/01_front/04080101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04090101', '0409', 'ラムパルド', 'image/normal/01_front/04090101.png', 'image/shiny/01_front/04090101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04100101', '0410', 'タテトプス', 'image/normal/01_front/04100101.png', 'image/shiny/01_front/04100101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04110101', '0411', 'トリデプス', 'image/normal/01_front/04110101.png', 'image/shiny/01_front/04110101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04120101', '0412', 'ミノムッチ', 'くさきのミノ', 'image/normal/01_front/04120101.png', 'image/shiny/01_front/04120101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04120201', '0412', 'ミノムッチ', 'すなちのミノ', 'image/normal/01_front/04120201.png', 'image/shiny/01_front/04120201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04120301', '0412', 'ミノムッチ', 'ゴミのミノ', 'image/normal/01_front/04120301.png', 'image/shiny/01_front/04120301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04130101', '0413', 'ミノマダム', 'くさきのミノ', 'image/normal/01_front/04130101.png', 'image/shiny/01_front/04130101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04130201', '0413', 'ミノマダム', 'すなちのミノ', 'image/normal/01_front/04130201.png', 'image/shiny/01_front/04130201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04130301', '0413', 'ミノマダム', 'ゴミのミノ', 'image/normal/01_front/04130301.png', 'image/shiny/01_front/04130301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04140101', '0414', 'ガーメイル', 'image/normal/01_front/04140101.png', 'image/shiny/01_front/04140101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04150101', '0415', 'ミツハニー', 'オスのすがた', 'image/normal/01_front/04150101.png', 'image/shiny/01_front/04150101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04150102', '0415', 'ミツハニー', 'メスのすがた', 'image/normal/01_front/04150102.png', 'image/shiny/01_front/04150102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04160101', '0416', 'ビークイン', 'image/normal/01_front/04160101.png', 'image/shiny/01_front/04160101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04170101', '0417', 'パチリス', 'オスのすがた', 'image/normal/01_front/04170101.png', 'image/shiny/01_front/04170101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04170102', '0417', 'パチリス', 'メスのすがた', 'image/normal/01_front/04170102.png', 'image/shiny/01_front/04170102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04180101', '0418', 'ブイゼル', 'オスのすがた', 'image/normal/01_front/04180101.png', 'image/shiny/01_front/04180101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04180102', '0418', 'ブイゼル', 'メスのすがた', 'image/normal/01_front/04180102.png', 'image/shiny/01_front/04180102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04190101', '0419', 'フローゼル', 'オスのすがた', 'image/normal/01_front/04190101.png', 'image/shiny/01_front/04190101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04190102', '0419', 'フローゼル', 'メスのすがた', 'image/normal/01_front/04190102.png', 'image/shiny/01_front/04190102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04200101', '0420', 'チェリンボ', 'image/normal/01_front/04200101.png', 'image/shiny/01_front/04200101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04210101', '0421', 'チェリム', 'ネガフォルム', 'image/normal/01_front/04210101.png', 'image/shiny/01_front/04210101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04210201', '0421', 'チェリム', 'ポジフォルム', 'image/normal/01_front/04210201.png', 'image/shiny/01_front/04210201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04220101', '0422', 'カラナクシ', 'にしのうみ', 'image/normal/01_front/04220101.png', 'image/shiny/01_front/04220101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04220201', '0422', 'カラナクシ', 'ひがしのうみ', 'image/normal/01_front/04220201.png', 'image/shiny/01_front/04220201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04230101', '0423', 'トリトドン', 'にしのうみ', 'image/normal/01_front/04230101.png', 'image/shiny/01_front/04230101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04230201', '0423', 'トリトドン', 'ひがしのうみ', 'image/normal/01_front/04230201.png', 'image/shiny/01_front/04230201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04240101', '0424', 'エテボース', 'オスのすがた', 'image/normal/01_front/04240101.png', 'image/shiny/01_front/04240101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04240102', '0424', 'エテボース', 'メスのすがた', 'image/normal/01_front/04240102.png', 'image/shiny/01_front/04240102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04250101', '0425', 'フワンテ', 'image/normal/01_front/04250101.png', 'image/shiny/01_front/04250101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04260101', '0426', 'フワライド', 'image/normal/01_front/04260101.png', 'image/shiny/01_front/04260101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04270101', '0427', 'ミミロル', 'image/normal/01_front/04270101.png', 'image/shiny/01_front/04270101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04280101', '0428', 'ミミロップ', 'image/normal/01_front/04280101.png', 'image/shiny/01_front/04280101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04280201', '0428', 'ミミロップ', 'メガミミロップ', 'image/normal/01_front/04280201.png', 'image/shiny/01_front/04280201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04290101', '0429', 'ムウマージ', 'image/normal/01_front/04290101.png', 'image/shiny/01_front/04290101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04300101', '0430', 'ドンカラス', 'image/normal/01_front/04300101.png', 'image/shiny/01_front/04300101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04310101', '0431', 'ニャルマー', 'image/normal/01_front/04310101.png', 'image/shiny/01_front/04310101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04320101', '0432', 'ブニャット', 'image/normal/01_front/04320101.png', 'image/shiny/01_front/04320101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04330101', '0433', 'リーシャン', 'image/normal/01_front/04330101.png', 'image/shiny/01_front/04330101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04340101', '0434', 'スカンプー', 'image/normal/01_front/04340101.png', 'image/shiny/01_front/04340101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04350101', '0435', 'スカタンク', 'image/normal/01_front/04350101.png', 'image/shiny/01_front/04350101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04360101', '0436', 'ドーミラー', 'image/normal/01_front/04360101.png', 'image/shiny/01_front/04360101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04370101', '0437', 'ドータクン', 'image/normal/01_front/04370101.png', 'image/shiny/01_front/04370101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04380101', '0438', 'ウソハチ', 'image/normal/01_front/04380101.png', 'image/shiny/01_front/04380101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04390101', '0439', 'マネネ', 'image/normal/01_front/04390101.png', 'image/shiny/01_front/04390101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04400101', '0440', 'ピンプク', 'image/normal/01_front/04400101.png', 'image/shiny/01_front/04400101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04410101', '0441', 'ペラップ', 'image/normal/01_front/04410101.png', 'image/shiny/01_front/04410101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04420101', '0442', 'ミカルゲ', 'image/normal/01_front/04420101.png', 'image/shiny/01_front/04420101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04430101', '0443', 'フカマル', 'オスのすがた', 'image/normal/01_front/04430101.png', 'image/shiny/01_front/04430101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04430102', '0443', 'フカマル', 'メスのすがた', 'image/normal/01_front/04430102.png', 'image/shiny/01_front/04430102.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04440101', '0444', 'ガバイト', 'オスのすがた', 'image/normal/01_front/04440101.png', 'image/shiny/01_front/04440101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04440102', '0444', 'ガバイト', 'メスのすがた', 'image/normal/01_front/04440102.png', 'image/shiny/01_front/04440102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04450101', '0445', 'ガブリアス', 'オスのすがた', 'image/normal/01_front/04450101.png', 'image/shiny/01_front/04450101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04450102', '0445', 'ガブリアス', 'メスのすがた', 'image/normal/01_front/04450102.png', 'image/shiny/01_front/04450102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04450201', '0445', 'ガブリアス', 'メガガブリアス', 'image/normal/01_front/04450201.png', 'image/shiny/01_front/04450201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04450301', '0445', 'ガブリアス', 'メガガブリアスZ', 'image/normal/01_front/04450301.png', 'image/shiny/01_front/04450301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04460101', '0446', 'ゴンベ', 'image/normal/01_front/04460101.png', 'image/shiny/01_front/04460101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04470101', '0447', 'リオル', 'image/normal/01_front/04470101.png', 'image/shiny/01_front/04470101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04480101', '0448', 'ルカリオ', 'image/normal/01_front/04480101.png', 'image/shiny/01_front/04480101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04480201', '0448', 'ルカリオ', 'メガルカリオ', 'image/normal/01_front/04480201.png', 'image/shiny/01_front/04480201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04480301', '0448', 'ルカリオ', 'メガルカリオZ', 'image/normal/01_front/04480301.png', 'image/shiny/01_front/04480301.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04490101', '0449', 'ヒポポタス', 'オスのすがた', 'image/normal/01_front/04490101.png', 'image/shiny/01_front/04490101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04490102', '0449', 'ヒポポタス', 'メスのすがた', 'image/normal/01_front/04490102.png', 'image/shiny/01_front/04490102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04500101', '0450', 'ガバルドン', 'オスのすがた', 'image/normal/01_front/04500101.png', 'image/shiny/01_front/04500101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04500102', '0450', 'ガバルドン', 'メスのすがた', 'image/normal/01_front/04500102.png', 'image/shiny/01_front/04500102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04510101', '0451', 'スコルピ', 'image/normal/01_front/04510101.png', 'image/shiny/01_front/04510101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04520101', '0452', 'ドラピオン', 'image/normal/01_front/04520101.png', 'image/shiny/01_front/04520101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04530101', '0453', 'グレッグル', 'オスのすがた', 'image/normal/01_front/04530101.png', 'image/shiny/01_front/04530101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04530102', '0453', 'グレッグル', 'メスのすがた', 'image/normal/01_front/04530102.png', 'image/shiny/01_front/04530102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04540101', '0454', 'ドクロッグ', 'オスのすがた', 'image/normal/01_front/04540101.png', 'image/shiny/01_front/04540101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04540102', '0454', 'ドクロッグ', 'メスのすがた', 'image/normal/01_front/04540102.png', 'image/shiny/01_front/04540102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04550101', '0455', 'マスキッパ', 'image/normal/01_front/04550101.png', 'image/shiny/01_front/04550101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04560101', '0456', 'ケイコウオ', 'オスのすがた', 'image/normal/01_front/04560101.png', 'image/shiny/01_front/04560101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04560102', '0456', 'ケイコウオ', 'メスのすがた', 'image/normal/01_front/04560102.png', 'image/shiny/01_front/04560102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04570101', '0457', 'ネオラント', 'オスのすがた', 'image/normal/01_front/04570101.png', 'image/shiny/01_front/04570101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04570102', '0457', 'ネオラント', 'メスのすがた', 'image/normal/01_front/04570102.png', 'image/shiny/01_front/04570102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04580101', '0458', 'タマンタ', 'image/normal/01_front/04580101.png', 'image/shiny/01_front/04580101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04590101', '0459', 'ユキカブリ', 'オスのすがた', 'image/normal/01_front/04590101.png', 'image/shiny/01_front/04590101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04590102', '0459', 'ユキカブリ', 'メスのすがた', 'image/normal/01_front/04590102.png', 'image/shiny/01_front/04590102.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04600101', '0460', 'ユキノオー', 'オスのすがた', 'image/normal/01_front/04600101.png', 'image/shiny/01_front/04600101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04600102', '0460', 'ユキノオー', 'メスのすがた', 'image/normal/01_front/04600102.png', 'image/shiny/01_front/04600102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04600201', '0460', 'ユキノオー', 'メガユキノオー', 'image/normal/01_front/04600201.png', 'image/shiny/01_front/04600201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04610101', '0461', 'マニューラ', 'オスのすがた', 'image/normal/01_front/04610101.png', 'image/shiny/01_front/04610101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04610102', '0461', 'マニューラ', 'メスのすがた', 'image/normal/01_front/04610102.png', 'image/shiny/01_front/04610102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04620101', '0462', 'ジバコイル', 'image/normal/01_front/04620101.png', 'image/shiny/01_front/04620101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04630101', '0463', 'ベロベルト', 'image/normal/01_front/04630101.png', 'image/shiny/01_front/04630101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04640101', '0464', 'ドサイドン', 'オスのすがた', 'image/normal/01_front/04640101.png', 'image/shiny/01_front/04640101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04640102', '0464', 'ドサイドン', 'メスのすがた', 'image/normal/01_front/04640102.png', 'image/shiny/01_front/04640102.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04650101', '0465', 'モジャンボ', 'オスのすがた', 'image/normal/01_front/04650101.png', 'image/shiny/01_front/04650101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04650102', '0465', 'モジャンボ', 'メスのすがた', 'image/normal/01_front/04650102.png', 'image/shiny/01_front/04650102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04660101', '0466', 'エレキブル', 'image/normal/01_front/04660101.png', 'image/shiny/01_front/04660101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04670101', '0467', 'ブーバーン', 'image/normal/01_front/04670101.png', 'image/shiny/01_front/04670101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04680101', '0468', 'トゲキッス', 'image/normal/01_front/04680101.png', 'image/shiny/01_front/04680101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04690101', '0469', 'メガヤンマ', 'image/normal/01_front/04690101.png', 'image/shiny/01_front/04690101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04700101', '0470', 'リーフィア', 'image/normal/01_front/04700101.png', 'image/shiny/01_front/04700101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04710101', '0471', 'グレイシア', 'image/normal/01_front/04710101.png', 'image/shiny/01_front/04710101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04720101', '0472', 'グライオン', 'image/normal/01_front/04720101.png', 'image/shiny/01_front/04720101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04730101', '0473', 'マンムー', 'オスのすがた', 'image/normal/01_front/04730101.png', 'image/shiny/01_front/04730101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04730102', '0473', 'マンムー', 'メスのすがた', 'image/normal/01_front/04730102.png', 'image/shiny/01_front/04730102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04740101', '0474', 'ポリゴンZ', 'image/normal/01_front/04740101.png', 'image/shiny/01_front/04740101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04750101', '0475', 'エルレイド', 'image/normal/01_front/04750101.png', 'image/shiny/01_front/04750101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04750201', '0475', 'エルレイド', 'メガエルレイド', 'image/normal/01_front/04750201.png', 'image/shiny/01_front/04750201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04760101', '0476', 'ダイノーズ', 'image/normal/01_front/04760101.png', 'image/shiny/01_front/04760101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04770101', '0477', 'ヨノワール', 'image/normal/01_front/04770101.png', 'image/shiny/01_front/04770101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04780101', '0478', 'ユキメノコ', 'image/normal/01_front/04780101.png', 'image/shiny/01_front/04780101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04780201', '0478', 'ユキメノコ', 'メガユキメノコ', 'image/normal/01_front/04780201.png', 'image/shiny/01_front/04780201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04790101', '0479', 'ロトム', 'image/normal/01_front/04790101.png', 'image/shiny/01_front/04790101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04790201', '0479', 'ロトム', 'ヒートロトム', 'image/normal/01_front/04790201.png', 'image/shiny/01_front/04790201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04790301', '0479', 'ロトム', 'ウォッシュロトム', 'image/normal/01_front/04790301.png', 'image/shiny/01_front/04790301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04790401', '0479', 'ロトム', 'フロストロトム', 'image/normal/01_front/04790401.png', 'image/shiny/01_front/04790401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04790501', '0479', 'ロトム', 'スピンロトム', 'image/normal/01_front/04790501.png', 'image/shiny/01_front/04790501.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04790601', '0479', 'ロトム', 'カットロトム', 'image/normal/01_front/04790601.png', 'image/shiny/01_front/04790601.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04800101', '0480', 'ユクシー', 'image/normal/01_front/04800101.png', 'image/shiny/01_front/04800101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04810101', '0481', 'エムリット', 'image/normal/01_front/04810101.png', 'image/shiny/01_front/04810101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04820101', '0482', 'アグノム', 'image/normal/01_front/04820101.png', 'image/shiny/01_front/04820101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04830101', '0483', 'ディアルガ', 'image/normal/01_front/04830101.png', 'image/shiny/01_front/04830101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04830201', '0483', 'ディアルガ', 'オリジンフォルム', 'image/normal/01_front/04830201.png', 'image/shiny/01_front/04830201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04840101', '0484', 'パルキア', 'image/normal/01_front/04840101.png', 'image/shiny/01_front/04840101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04840201', '0484', 'パルキア', 'オリジンフォルム', 'image/normal/01_front/04840201.png', 'image/shiny/01_front/04840201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04850101', '0485', 'ヒードラン', 'image/normal/01_front/04850101.png', 'image/shiny/01_front/04850101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04850201', '0485', 'ヒードラン', 'メガヒードラン', 'image/normal/01_front/04850201.png', 'image/shiny/01_front/04850201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04860101', '0486', 'レジギガス', 'image/normal/01_front/04860101.png', 'image/shiny/01_front/04860101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04870101', '0487', 'ギラティナ', 'アナザーフォルム', 'image/normal/01_front/04870101.png', 'image/shiny/01_front/04870101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04870201', '0487', 'ギラティナ', 'オリジンフォルム', 'image/normal/01_front/04870201.png', 'image/shiny/01_front/04870201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04880101', '0488', 'クレセリア', 'image/normal/01_front/04880101.png', 'image/shiny/01_front/04880101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04890101', '0489', 'フィオネ', 'image/normal/01_front/04890101.png', 'image/shiny/01_front/04890101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04900101', '0490', 'マナフィ', 'image/normal/01_front/04900101.png', 'image/shiny/01_front/04900101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04910101', '0491', 'ダークライ', 'image/normal/01_front/04910101.png', 'image/shiny/01_front/04910101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04910201', '0491', 'ダークライ', 'メガダークライ', 'image/normal/01_front/04910201.png', 'image/shiny/01_front/04910201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04920101', '0492', 'シェイミ', 'ランドフォルム', 'image/normal/01_front/04920101.png', 'image/shiny/01_front/04920101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04920201', '0492', 'シェイミ', 'スカイフォルム', 'image/normal/01_front/04920201.png', 'image/shiny/01_front/04920201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04930101', '0493', 'アルセウス', 'ノーマルタイプ', 'image/normal/01_front/04930101.png', 'image/shiny/01_front/04930101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04930201', '0493', 'アルセウス', 'ほのおタイプ', 'image/normal/01_front/04930201.png', 'image/shiny/01_front/04930201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04930301', '0493', 'アルセウス', 'みずタイプ', 'image/normal/01_front/04930301.png', 'image/shiny/01_front/04930301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04930401', '0493', 'アルセウス', 'くさタイプ', 'image/normal/01_front/04930401.png', 'image/shiny/01_front/04930401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04930501', '0493', 'アルセウス', 'でんきタイプ', 'image/normal/01_front/04930501.png', 'image/shiny/01_front/04930501.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04930601', '0493', 'アルセウス', 'こおりタイプ', 'image/normal/01_front/04930601.png', 'image/shiny/01_front/04930601.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04930701', '0493', 'アルセウス', 'かくとうタイプ', 'image/normal/01_front/04930701.png', 'image/shiny/01_front/04930701.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04930801', '0493', 'アルセウス', 'どくタイプ', 'image/normal/01_front/04930801.png', 'image/shiny/01_front/04930801.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04930901', '0493', 'アルセウス', 'じめんタイプ', 'image/normal/01_front/04930901.png', 'image/shiny/01_front/04930901.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04931001', '0493', 'アルセウス', 'ひこうタイプ', 'image/normal/01_front/04931001.png', 'image/shiny/01_front/04931001.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04931101', '0493', 'アルセウス', 'エスパータイプ', 'image/normal/01_front/04931101.png', 'image/shiny/01_front/04931101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04931201', '0493', 'アルセウス', 'むしタイプ', 'image/normal/01_front/04931201.png', 'image/shiny/01_front/04931201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04931301', '0493', 'アルセウス', 'いわタイプ', 'image/normal/01_front/04931301.png', 'image/shiny/01_front/04931301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04931401', '0493', 'アルセウス', 'ゴーストタイプ', 'image/normal/01_front/04931401.png', 'image/shiny/01_front/04931401.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04931501', '0493', 'アルセウス', 'ドラゴンタイプ', 'image/normal/01_front/04931501.png', 'image/shiny/01_front/04931501.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04931601', '0493', 'アルセウス', 'あくタイプ', 'image/normal/01_front/04931601.png', 'image/shiny/01_front/04931601.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04931701', '0493', 'アルセウス', 'はがねタイプ', 'image/normal/01_front/04931701.png', 'image/shiny/01_front/04931701.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04931801', '0493', 'アルセウス', 'フェアリータイプ', 'image/normal/01_front/04931801.png', 'image/shiny/01_front/04931801.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04940101', '0494', 'ビクティニ', 'image/normal/01_front/04940101.png', 'image/shiny/01_front/04940101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04950101', '0495', 'ツタージャ', 'image/normal/01_front/04950101.png', 'image/shiny/01_front/04950101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04960101', '0496', 'ジャノビー', 'image/normal/01_front/04960101.png', 'image/shiny/01_front/04960101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04970101', '0497', 'ジャローダ', 'image/normal/01_front/04970101.png', 'image/shiny/01_front/04970101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04980101', '0498', 'ポカブ', 'image/normal/01_front/04980101.png', 'image/shiny/01_front/04980101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('04990101', '0499', 'チャオブー', 'image/normal/01_front/04990101.png', 'image/shiny/01_front/04990101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05000101', '0500', 'エンブオー', 'image/normal/01_front/05000101.png', 'image/shiny/01_front/05000101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05000201', '0500', 'エンブオー', 'メガエンブオー', 'image/normal/01_front/05000201.png', 'image/shiny/01_front/05000201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05010101', '0501', 'ミジュマル', 'image/normal/01_front/05010101.png', 'image/shiny/01_front/05010101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05020101', '0502', 'フタチマル', 'image/normal/01_front/05020101.png', 'image/shiny/01_front/05020101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05030101', '0503', 'ダイケンキ', 'image/normal/01_front/05030101.png', 'image/shiny/01_front/05030101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05030201', '0503', 'ダイケンキ', 'ヒスイのすがた', 'image/normal/01_front/05030201.png', 'image/shiny/01_front/05030201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05040101', '0504', 'ミネズミ', 'image/normal/01_front/05040101.png', 'image/shiny/01_front/05040101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05050101', '0505', 'ミルホッグ', 'image/normal/01_front/05050101.png', 'image/shiny/01_front/05050101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05060101', '0506', 'ヨーテリー', 'image/normal/01_front/05060101.png', 'image/shiny/01_front/05060101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05070101', '0507', 'ハーデリア', 'image/normal/01_front/05070101.png', 'image/shiny/01_front/05070101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05080101', '0508', 'ムーランド', 'image/normal/01_front/05080101.png', 'image/shiny/01_front/05080101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05090101', '0509', 'チョロネコ', 'image/normal/01_front/05090101.png', 'image/shiny/01_front/05090101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05100101', '0510', 'レパルダス', 'image/normal/01_front/05100101.png', 'image/shiny/01_front/05100101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05110101', '0511', 'ヤナップ', 'image/normal/01_front/05110101.png', 'image/shiny/01_front/05110101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05120101', '0512', 'ヤナッキー', 'image/normal/01_front/05120101.png', 'image/shiny/01_front/05120101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05130101', '0513', 'バオップ', 'image/normal/01_front/05130101.png', 'image/shiny/01_front/05130101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05140101', '0514', 'バオッキー', 'image/normal/01_front/05140101.png', 'image/shiny/01_front/05140101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05150101', '0515', 'ヒヤップ', 'image/normal/01_front/05150101.png', 'image/shiny/01_front/05150101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05160101', '0516', 'ヒヤッキー', 'image/normal/01_front/05160101.png', 'image/shiny/01_front/05160101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05170101', '0517', 'ムンナ', 'image/normal/01_front/05170101.png', 'image/shiny/01_front/05170101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05180101', '0518', 'ムシャーナ', 'image/normal/01_front/05180101.png', 'image/shiny/01_front/05180101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05190101', '0519', 'マメパト', 'image/normal/01_front/05190101.png', 'image/shiny/01_front/05190101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05200101', '0520', 'ハトーボー', 'image/normal/01_front/05200101.png', 'image/shiny/01_front/05200101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05210101', '0521', 'ケンホロウ', 'オスのすがた', 'image/normal/01_front/05210101.png', 'image/shiny/01_front/05210101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05210102', '0521', 'ケンホロウ', 'メスのすがた', 'image/normal/01_front/05210102.png', 'image/shiny/01_front/05210102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05220101', '0522', 'シママ', 'image/normal/01_front/05220101.png', 'image/shiny/01_front/05220101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05230101', '0523', 'ゼブライカ', 'image/normal/01_front/05230101.png', 'image/shiny/01_front/05230101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05240101', '0524', 'ダンゴロ', 'image/normal/01_front/05240101.png', 'image/shiny/01_front/05240101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05250101', '0525', 'ガントル', 'image/normal/01_front/05250101.png', 'image/shiny/01_front/05250101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05260101', '0526', 'ギガイアス', 'image/normal/01_front/05260101.png', 'image/shiny/01_front/05260101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05270101', '0527', 'コロモリ', 'image/normal/01_front/05270101.png', 'image/shiny/01_front/05270101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05280101', '0528', 'ココロモリ', 'image/normal/01_front/05280101.png', 'image/shiny/01_front/05280101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05290101', '0529', 'モグリュー', 'image/normal/01_front/05290101.png', 'image/shiny/01_front/05290101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05300101', '0530', 'ドリュウズ', 'image/normal/01_front/05300101.png', 'image/shiny/01_front/05300101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05300201', '0530', 'ドリュウズ', 'メガドリュウズ', 'image/normal/01_front/05300201.png', 'image/shiny/01_front/05300201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05310101', '0531', 'タブンネ', 'image/normal/01_front/05310101.png', 'image/shiny/01_front/05310101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05310201', '0531', 'タブンネ', 'メガタブンネ', 'image/normal/01_front/05310201.png', 'image/shiny/01_front/05310201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05320101', '0532', 'ドッコラー', 'image/normal/01_front/05320101.png', 'image/shiny/01_front/05320101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05330101', '0533', 'ドテッコツ', 'image/normal/01_front/05330101.png', 'image/shiny/01_front/05330101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05340101', '0534', 'ローブシン', 'image/normal/01_front/05340101.png', 'image/shiny/01_front/05340101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05350101', '0535', 'オタマロ', 'image/normal/01_front/05350101.png', 'image/shiny/01_front/05350101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05360101', '0536', 'ガマガル', 'image/normal/01_front/05360101.png', 'image/shiny/01_front/05360101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05370101', '0537', 'ガマゲロゲ', 'image/normal/01_front/05370101.png', 'image/shiny/01_front/05370101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05380101', '0538', 'ナゲキ', 'image/normal/01_front/05380101.png', 'image/shiny/01_front/05380101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05390101', '0539', 'ダゲキ', 'image/normal/01_front/05390101.png', 'image/shiny/01_front/05390101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05400101', '0540', 'クルミル', 'image/normal/01_front/05400101.png', 'image/shiny/01_front/05400101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05410101', '0541', 'クルマユ', 'image/normal/01_front/05410101.png', 'image/shiny/01_front/05410101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05420101', '0542', 'ハハコモリ', 'image/normal/01_front/05420101.png', 'image/shiny/01_front/05420101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05430101', '0543', 'フシデ', 'image/normal/01_front/05430101.png', 'image/shiny/01_front/05430101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05440101', '0544', 'ホイーガ', 'image/normal/01_front/05440101.png', 'image/shiny/01_front/05440101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05450101', '0545', 'ペンドラー', 'image/normal/01_front/05450101.png', 'image/shiny/01_front/05450101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05450201', '0545', 'ペンドラー', 'メガペンドラー', 'image/normal/01_front/05450201.png', 'image/shiny/01_front/05450201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05460101', '0546', 'モンメン', 'image/normal/01_front/05460101.png', 'image/shiny/01_front/05460101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05470101', '0547', 'エルフーン', 'image/normal/01_front/05470101.png', 'image/shiny/01_front/05470101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05480101', '0548', 'チュリネ', 'image/normal/01_front/05480101.png', 'image/shiny/01_front/05480101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05490101', '0549', 'ドレディア', 'image/normal/01_front/05490101.png', 'image/shiny/01_front/05490101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05490201', '0549', 'ドレディア', 'ヒスイのすがた', 'image/normal/01_front/05490201.png', 'image/shiny/01_front/05490201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05500101', '0550', 'バスラオ', 'あかすじのすがた', 'image/normal/01_front/05500101.png', 'image/shiny/01_front/05500101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05500201', '0550', 'バスラオ', 'あおすじのすがた', 'image/normal/01_front/05500201.png', 'image/shiny/01_front/05500201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05500301', '0550', 'バスラオ', 'しろすじのすがた', 'image/normal/01_front/05500301.png', 'image/shiny/01_front/05500301.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05510101', '0551', 'メグロコ', 'image/normal/01_front/05510101.png', 'image/shiny/01_front/05510101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05520101', '0552', 'ワルビル', 'image/normal/01_front/05520101.png', 'image/shiny/01_front/05520101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05530101', '0553', 'ワルビアル', 'image/normal/01_front/05530101.png', 'image/shiny/01_front/05530101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05540101', '0554', 'ダルマッカ', 'image/normal/01_front/05540101.png', 'image/shiny/01_front/05540101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05540201', '0554', 'ダルマッカ', 'ガラルのすがた', 'image/normal/01_front/05540201.png', 'image/shiny/01_front/05540201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05550101', '0555', 'ヒヒダルマ', 'ノーマルモード', 'image/normal/01_front/05550101.png', 'image/shiny/01_front/05550101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05550201', '0555', 'ヒヒダルマ', 'ダルマモード', 'image/normal/01_front/05550201.png', 'image/shiny/01_front/05550201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05550301', '0555', 'ヒヒダルマ', 'ガラルのすがた・ノーマルモード', 'image/normal/01_front/05550301.png', 'image/shiny/01_front/05550301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05550401', '0555', 'ヒヒダルマ', 'ガラルのすがた・ダルマモード', 'image/normal/01_front/05550401.png', 'image/shiny/01_front/05550401.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05560101', '0556', 'マラカッチ', 'image/normal/01_front/05560101.png', 'image/shiny/01_front/05560101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05570101', '0557', 'イシズマイ', 'image/normal/01_front/05570101.png', 'image/shiny/01_front/05570101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05580101', '0558', 'イワパレス', 'image/normal/01_front/05580101.png', 'image/shiny/01_front/05580101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05590101', '0559', 'ズルッグ', 'image/normal/01_front/05590101.png', 'image/shiny/01_front/05590101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05600101', '0560', 'ズルズキン', 'image/normal/01_front/05600101.png', 'image/shiny/01_front/05600101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05600201', '0560', 'ズルズキン', 'メガズルズキン', 'image/normal/01_front/05600201.png', 'image/shiny/01_front/05600201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05610101', '0561', 'シンボラー', 'image/normal/01_front/05610101.png', 'image/shiny/01_front/05610101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05620101', '0562', 'デスマス', 'image/normal/01_front/05620101.png', 'image/shiny/01_front/05620101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05620201', '0562', 'デスマス', 'ガラルのすがた', 'image/normal/01_front/05620201.png', 'image/shiny/01_front/05620201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05630101', '0563', 'デスカーン', 'image/normal/01_front/05630101.png', 'image/shiny/01_front/05630101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05640101', '0564', 'プロトーガ', 'image/normal/01_front/05640101.png', 'image/shiny/01_front/05640101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05650101', '0565', 'アバゴーラ', 'image/normal/01_front/05650101.png', 'image/shiny/01_front/05650101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05660101', '0566', 'アーケン', 'image/normal/01_front/05660101.png', 'image/shiny/01_front/05660101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05670101', '0567', 'アーケオス', 'image/normal/01_front/05670101.png', 'image/shiny/01_front/05670101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05680101', '0568', 'ヤブクロン', 'image/normal/01_front/05680101.png', 'image/shiny/01_front/05680101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05690101', '0569', 'ダストダス', 'image/normal/01_front/05690101.png', 'image/shiny/01_front/05690101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05690201', '0569', 'ダストダス', 'キョダイマックスのすがた', 'image/normal/01_front/05690201.png', 'image/shiny/01_front/05690201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05700101', '0570', 'ゾロア', 'image/normal/01_front/05700101.png', 'image/shiny/01_front/05700101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05700201', '0570', 'ゾロア', 'ヒスイのすがた', 'image/normal/01_front/05700201.png', 'image/shiny/01_front/05700201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05710101', '0571', 'ゾロアーク', 'image/normal/01_front/05710101.png', 'image/shiny/01_front/05710101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05710201', '0571', 'ゾロアーク', 'ヒスイのすがた', 'image/normal/01_front/05710201.png', 'image/shiny/01_front/05710201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05720101', '0572', 'チラーミィ', 'image/normal/01_front/05720101.png', 'image/shiny/01_front/05720101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05730101', '0573', 'チラチーノ', 'image/normal/01_front/05730101.png', 'image/shiny/01_front/05730101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05740101', '0574', 'ゴチム', 'image/normal/01_front/05740101.png', 'image/shiny/01_front/05740101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05750101', '0575', 'ゴチミル', 'image/normal/01_front/05750101.png', 'image/shiny/01_front/05750101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05760101', '0576', 'ゴチルゼル', 'image/normal/01_front/05760101.png', 'image/shiny/01_front/05760101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05770101', '0577', 'ユニラン', 'image/normal/01_front/05770101.png', 'image/shiny/01_front/05770101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05780101', '0578', 'ダブラン', 'image/normal/01_front/05780101.png', 'image/shiny/01_front/05780101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05790101', '0579', 'ランクルス', 'image/normal/01_front/05790101.png', 'image/shiny/01_front/05790101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05800101', '0580', 'コアルヒー', 'image/normal/01_front/05800101.png', 'image/shiny/01_front/05800101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05810101', '0581', 'スワンナ', 'image/normal/01_front/05810101.png', 'image/shiny/01_front/05810101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05820101', '0582', 'バニプッチ', 'image/normal/01_front/05820101.png', 'image/shiny/01_front/05820101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05830101', '0583', 'バニリッチ', 'image/normal/01_front/05830101.png', 'image/shiny/01_front/05830101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05840101', '0584', 'バイバニラ', 'image/normal/01_front/05840101.png', 'image/shiny/01_front/05840101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05850101', '0585', 'シキジカ', 'はるのすがた', 'image/normal/01_front/05850101.png', 'image/shiny/01_front/05850101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05850201', '0585', 'シキジカ', 'なつのすがた', 'image/normal/01_front/05850201.png', 'image/shiny/01_front/05850201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05850301', '0585', 'シキジカ', 'あきのすがた', 'image/normal/01_front/05850301.png', 'image/shiny/01_front/05850301.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05850401', '0585', 'シキジカ', 'ふゆのすがた', 'image/normal/01_front/05850401.png', 'image/shiny/01_front/05850401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05860101', '0586', 'メブキジカ', 'はるのすがた', 'image/normal/01_front/05860101.png', 'image/shiny/01_front/05860101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05860201', '0586', 'メブキジカ', 'なつのすがた', 'image/normal/01_front/05860201.png', 'image/shiny/01_front/05860201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05860301', '0586', 'メブキジカ', 'あきのすがた', 'image/normal/01_front/05860301.png', 'image/shiny/01_front/05860301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05860401', '0586', 'メブキジカ', 'ふゆのすがた', 'image/normal/01_front/05860401.png', 'image/shiny/01_front/05860401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05870101', '0587', 'エモンガ', 'image/normal/01_front/05870101.png', 'image/shiny/01_front/05870101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05880101', '0588', 'カブルモ', 'image/normal/01_front/05880101.png', 'image/shiny/01_front/05880101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05890101', '0589', 'シュバルゴ', 'image/normal/01_front/05890101.png', 'image/shiny/01_front/05890101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05900101', '0590', 'タマゲタケ', 'image/normal/01_front/05900101.png', 'image/shiny/01_front/05900101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05910101', '0591', 'モロバレル', 'image/normal/01_front/05910101.png', 'image/shiny/01_front/05910101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05920101', '0592', 'プルリル', 'オスのすがた', 'image/normal/01_front/05920101.png', 'image/shiny/01_front/05920101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05920102', '0592', 'プルリル', 'メスのすがた', 'image/normal/01_front/05920102.png', 'image/shiny/01_front/05920102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05930101', '0593', 'ブルンゲル', 'オスのすがた', 'image/normal/01_front/05930101.png', 'image/shiny/01_front/05930101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05930102', '0593', 'ブルンゲル', 'メスのすがた', 'image/normal/01_front/05930102.png', 'image/shiny/01_front/05930102.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05940101', '0594', 'ママンボウ', 'image/normal/01_front/05940101.png', 'image/shiny/01_front/05940101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05950101', '0595', 'バチュル', 'image/normal/01_front/05950101.png', 'image/shiny/01_front/05950101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05960101', '0596', 'デンチュラ', 'image/normal/01_front/05960101.png', 'image/shiny/01_front/05960101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05970101', '0597', 'テッシード', 'image/normal/01_front/05970101.png', 'image/shiny/01_front/05970101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05980101', '0598', 'ナットレイ', 'image/normal/01_front/05980101.png', 'image/shiny/01_front/05980101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('05990101', '0599', 'ギアル', 'image/normal/01_front/05990101.png', 'image/shiny/01_front/05990101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06000101', '0600', 'ギギアル', 'image/normal/01_front/06000101.png', 'image/shiny/01_front/06000101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06010101', '0601', 'ギギギアル', 'image/normal/01_front/06010101.png', 'image/shiny/01_front/06010101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06020101', '0602', 'シビシラス', 'image/normal/01_front/06020101.png', 'image/shiny/01_front/06020101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06030101', '0603', 'シビビール', 'image/normal/01_front/06030101.png', 'image/shiny/01_front/06030101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06040101', '0604', 'シビルドン', 'image/normal/01_front/06040101.png', 'image/shiny/01_front/06040101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06040201', '0604', 'シビルドン', 'メガシビルドン', 'image/normal/01_front/06040201.png', 'image/shiny/01_front/06040201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06050101', '0605', 'リグレー', 'image/normal/01_front/06050101.png', 'image/shiny/01_front/06050101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06060101', '0606', 'オーベム', 'image/normal/01_front/06060101.png', 'image/shiny/01_front/06060101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06070101', '0607', 'ヒトモシ', 'image/normal/01_front/06070101.png', 'image/shiny/01_front/06070101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06080101', '0608', 'ランプラー', 'image/normal/01_front/06080101.png', 'image/shiny/01_front/06080101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06090101', '0609', 'シャンデラ', 'image/normal/01_front/06090101.png', 'image/shiny/01_front/06090101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06090201', '0609', 'シャンデラ', 'メガシャンデラ', 'image/normal/01_front/06090201.png', 'image/shiny/01_front/06090201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06100101', '0610', 'キバゴ', 'image/normal/01_front/06100101.png', 'image/shiny/01_front/06100101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06110101', '0611', 'オノンド', 'image/normal/01_front/06110101.png', 'image/shiny/01_front/06110101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06120101', '0612', 'オノノクス', 'image/normal/01_front/06120101.png', 'image/shiny/01_front/06120101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06130101', '0613', 'クマシュン', 'image/normal/01_front/06130101.png', 'image/shiny/01_front/06130101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06140101', '0614', 'ツンベアー', 'image/normal/01_front/06140101.png', 'image/shiny/01_front/06140101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06150101', '0615', 'フリージオ', 'image/normal/01_front/06150101.png', 'image/shiny/01_front/06150101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06160101', '0616', 'チョボマキ', 'image/normal/01_front/06160101.png', 'image/shiny/01_front/06160101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06170101', '0617', 'アギルダー', 'image/normal/01_front/06170101.png', 'image/shiny/01_front/06170101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06180101', '0618', 'マッギョ', 'image/normal/01_front/06180101.png', 'image/shiny/01_front/06180101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06180201', '0618', 'マッギョ', 'ガラルのすがた', 'image/normal/01_front/06180201.png', 'image/shiny/01_front/06180201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06190101', '0619', 'コジョフー', 'image/normal/01_front/06190101.png', 'image/shiny/01_front/06190101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06200101', '0620', 'コジョンド', 'image/normal/01_front/06200101.png', 'image/shiny/01_front/06200101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06210101', '0621', 'クリムガン', 'image/normal/01_front/06210101.png', 'image/shiny/01_front/06210101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06220101', '0622', 'ゴビット', 'image/normal/01_front/06220101.png', 'image/shiny/01_front/06220101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06230101', '0623', 'ゴルーグ', 'image/normal/01_front/06230101.png', 'image/shiny/01_front/06230101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06230201', '0623', 'ゴルーグ', 'メガゴルーグ', 'image/normal/01_front/06230201.png', 'image/shiny/01_front/06230201.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06240101', '0624', 'コマタナ', 'image/normal/01_front/06240101.png', 'image/shiny/01_front/06240101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06250101', '0625', 'キリキザン', 'image/normal/01_front/06250101.png', 'image/shiny/01_front/06250101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06260101', '0626', 'バッフロン', 'image/normal/01_front/06260101.png', 'image/shiny/01_front/06260101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06270101', '0627', 'ワシボン', 'image/normal/01_front/06270101.png', 'image/shiny/01_front/06270101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06280101', '0628', 'ウォーグル', 'image/normal/01_front/06280101.png', 'image/shiny/01_front/06280101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06280201', '0628', 'ウォーグル', 'ヒスイのすがた', 'image/normal/01_front/06280201.png', 'image/shiny/01_front/06280201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06290101', '0629', 'バルチャイ', 'image/normal/01_front/06290101.png', 'image/shiny/01_front/06290101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06300101', '0630', 'バルジーナ', 'image/normal/01_front/06300101.png', 'image/shiny/01_front/06300101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06310101', '0631', 'クイタラン', 'image/normal/01_front/06310101.png', 'image/shiny/01_front/06310101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06320101', '0632', 'アイアント', 'image/normal/01_front/06320101.png', 'image/shiny/01_front/06320101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06330101', '0633', 'モノズ', 'image/normal/01_front/06330101.png', 'image/shiny/01_front/06330101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06340101', '0634', 'ジヘッド', 'image/normal/01_front/06340101.png', 'image/shiny/01_front/06340101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06350101', '0635', 'サザンドラ', 'image/normal/01_front/06350101.png', 'image/shiny/01_front/06350101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06360101', '0636', 'メラルバ', 'image/normal/01_front/06360101.png', 'image/shiny/01_front/06360101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06370101', '0637', 'ウルガモス', 'image/normal/01_front/06370101.png', 'image/shiny/01_front/06370101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06380101', '0638', 'コバルオン', 'image/normal/01_front/06380101.png', 'image/shiny/01_front/06380101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06390101', '0639', 'テラキオン', 'image/normal/01_front/06390101.png', 'image/shiny/01_front/06390101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06400101', '0640', 'ビリジオン', 'image/normal/01_front/06400101.png', 'image/shiny/01_front/06400101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06410101', '0641', 'トルネロス', 'けしんフォルム', 'image/normal/01_front/06410101.png', 'image/shiny/01_front/06410101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06410201', '0641', 'トルネロス', 'れいじゅうフォルム', 'image/normal/01_front/06410201.png', 'image/shiny/01_front/06410201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06420101', '0642', 'ボルトロス', 'けしんフォルム', 'image/normal/01_front/06420101.png', 'image/shiny/01_front/06420101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06420201', '0642', 'ボルトロス', 'れいじゅうフォルム', 'image/normal/01_front/06420201.png', 'image/shiny/01_front/06420201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06430101', '0643', 'レシラム', 'image/normal/01_front/06430101.png', 'image/shiny/01_front/06430101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06440101', '0644', 'ゼクロム', 'image/normal/01_front/06440101.png', 'image/shiny/01_front/06440101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06450101', '0645', 'ランドロス', 'けしんフォルム', 'image/normal/01_front/06450101.png', 'image/shiny/01_front/06450101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06450201', '0645', 'ランドロス', 'れいじゅうフォルム', 'image/normal/01_front/06450201.png', 'image/shiny/01_front/06450201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06460101', '0646', 'キュレム', 'image/normal/01_front/06460101.png', 'image/shiny/01_front/06460101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06460201', '0646', 'キュレム', 'ホワイトキュレム', 'image/normal/01_front/06460201.png', 'image/shiny/01_front/06460201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06460301', '0646', 'キュレム', 'ブラックキュレム', 'image/normal/01_front/06460301.png', 'image/shiny/01_front/06460301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06470101', '0647', 'ケルディオ', 'いつものすがた', 'image/normal/01_front/06470101.png', 'image/shiny/01_front/06470101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06470201', '0647', 'ケルディオ', 'かくごのすがた', 'image/normal/01_front/06470201.png', 'image/shiny/01_front/06470201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06480101', '0648', 'メロエッタ', 'ボイスフォルム', 'image/normal/01_front/06480101.png', 'image/shiny/01_front/06480101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06480201', '0648', 'メロエッタ', 'ステップフォルム', 'image/normal/01_front/06480201.png', 'image/shiny/01_front/06480201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06490101', '0649', 'ゲノセクト', 'image/normal/01_front/06490101.png', 'image/shiny/01_front/06490101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06490201', '0649', 'ゲノセクト', 'ブレイズカセット', 'image/normal/01_front/06490201.png', 'image/shiny/01_front/06490201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06490301', '0649', 'ゲノセクト', 'アクアカセット', 'image/normal/01_front/06490301.png', 'image/shiny/01_front/06490301.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06490401', '0649', 'ゲノセクト', 'イナズマカセット', 'image/normal/01_front/06490401.png', 'image/shiny/01_front/06490401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06490501', '0649', 'ゲノセクト', 'フリーズカセット', 'image/normal/01_front/06490501.png', 'image/shiny/01_front/06490501.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06500101', '0650', 'ハリマロン', 'image/normal/01_front/06500101.png', 'image/shiny/01_front/06500101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06510101', '0651', 'ハリボーグ', 'image/normal/01_front/06510101.png', 'image/shiny/01_front/06510101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06520101', '0652', 'ブリガロン', 'image/normal/01_front/06520101.png', 'image/shiny/01_front/06520101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06520201', '0652', 'ブリガロン', 'メガブリガロン', 'image/normal/01_front/06520201.png', 'image/shiny/01_front/06520201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06530101', '0653', 'フォッコ', 'image/normal/01_front/06530101.png', 'image/shiny/01_front/06530101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06540101', '0654', 'テールナー', 'image/normal/01_front/06540101.png', 'image/shiny/01_front/06540101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06550101', '0655', 'マフォクシー', 'image/normal/01_front/06550101.png', 'image/shiny/01_front/06550101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06550201', '0655', 'マフォクシー', 'メガマフォクシー', 'image/normal/01_front/06550201.png', 'image/shiny/01_front/06550201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06560101', '0656', 'ケロマツ', 'image/normal/01_front/06560101.png', 'image/shiny/01_front/06560101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06570101', '0657', 'ゲコガシラ', 'image/normal/01_front/06570101.png', 'image/shiny/01_front/06570101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06580101', '0658', 'ゲッコウガ', 'image/normal/01_front/06580101.png', 'image/shiny/01_front/06580101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06580201', '0658', 'ゲッコウガ', 'サトシゲッコウガ', 'image/normal/01_front/06580201.png', 'image/shiny/01_front/06580201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06580301', '0658', 'ゲッコウガ', 'メガゲッコウガ', 'image/normal/01_front/06580301.png', 'image/shiny/01_front/06580301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06590101', '0659', 'ホルビー', 'image/normal/01_front/06590101.png', 'image/shiny/01_front/06590101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06600101', '0660', 'ホルード', 'image/normal/01_front/06600101.png', 'image/shiny/01_front/06600101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06610101', '0661', 'ヤヤコマ', 'image/normal/01_front/06610101.png', 'image/shiny/01_front/06610101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06620101', '0662', 'ヒノヤコマ', 'image/normal/01_front/06620101.png', 'image/shiny/01_front/06620101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06630101', '0663', 'ファイアロー', 'image/normal/01_front/06630101.png', 'image/shiny/01_front/06630101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06640101', '0664', 'コフキムシ', 'image/normal/01_front/06640101.png', 'image/shiny/01_front/06640101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06650101', '0665', 'コフーライ', 'image/normal/01_front/06650101.png', 'image/shiny/01_front/06650101.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06660101', '0666', 'ビビヨン', 'ひょうせつのもよう', 'image/normal/01_front/06660101.png', 'image/shiny/01_front/06660101.png');



INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06660201', '0666', 'ビビヨン', 'ゆきぐにのもよう', 'image/normal/01_front/06660201.png', 'image/shiny/01_front/06660201.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06660301', '0666', 'ビビヨン', 'せつげんのもよう', 'image/normal/01_front/06660301.png', 'image/shiny/01_front/06660301.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06660401', '0666', 'ビビヨン', 'たいりくのもよう', 'image/normal/01_front/06660401.png', 'image/shiny/01_front/06660401.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06660501', '0666', 'ビビヨン', 'ていえんのもよう', 'image/normal/01_front/06660501.png', 'image/shiny/01_front/06660501.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06660601', '0666', 'ビビヨン', 'みやびなもよう', 'image/normal/01_front/06660601.png', 'image/shiny/01_front/06660601.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06660701', '0666', 'ビビヨン', 'はなぞののもよう', 'image/normal/01_front/06660701.png', 'image/shiny/01_front/06660701.png');

INSERT INTO pokedex3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06660801', '0666', 'ビビヨン', 'モダンなもよう', 'image/normal/01_front/06660801.png', 'image/shiny/01_front/06660801.png');


INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06660901', '0666', 'ビビヨン', 'マリンのもよう', 'image/normal/02_front/06660901.png', 'image/shiny/02_front/06660901.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06661001', '0666', 'ビビヨン', 'ぐんとうのもよう', 'image/normal/02_front/06661001.png', 'image/shiny/02_front/06661001.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06661101', '0666', 'ビビヨン', 'こうやのもよう', 'image/normal/02_front/06661101.png', 'image/shiny/02_front/06661101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06661201', '0666', 'ビビヨン', 'さじんのもよう', 'image/normal/02_front/06661201.png', 'image/shiny/02_front/06661201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06661301', '0666', 'ビビヨン', 'たいがのもよう', 'image/normal/02_front/06661301.png', 'image/shiny/02_front/06661301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06661401', '0666', 'ビビヨン', 'スコールのもよう', 'image/normal/02_front/06661401.png', 'image/shiny/02_front/06661401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06661501', '0666', 'ビビヨン', 'サバンナのもよう', 'image/normal/02_front/06661501.png', 'image/shiny/02_front/06661501.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06661601', '0666', 'ビビヨン', 'たいようのもよう', 'image/normal/02_front/06661601.png', 'image/shiny/02_front/06661601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06661701', '0666', 'ビビヨン', 'オーシャンのもよう', 'image/normal/02_front/06661701.png', 'image/shiny/02_front/06661701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06661801', '0666', 'ビビヨン', 'ジャングルのもよう', 'image/normal/02_front/06661801.png', 'image/shiny/02_front/06661801.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06661901', '0666', 'ビビヨン', 'ファンシーのもよう', 'image/normal/02_front/06661901.png', 'image/shiny/02_front/06661901.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06662001', '0666', 'ビビヨン', 'ボールのもよう', 'image/normal/02_front/06662001.png', 'image/shiny/02_front/06662001.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06670101', '0667', 'シシコ', 'image/normal/02_front/06670101.png', 'image/shiny/02_front/06670101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06680101', '0668', 'カエンジシ', 'オスのすがた', 'image/normal/02_front/06680101.png', 'image/shiny/02_front/06680101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06680102', '0668', 'カエンジシ', 'メスのすがた', 'image/normal/02_front/06680102.png', 'image/shiny/02_front/06680102.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06680201', '0668', 'カエンジシ', 'メガカエンジシ', 'image/normal/02_front/06680201.png', 'image/shiny/02_front/06680201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06690101', '0669', 'フラベベ', 'あかいはな', 'image/normal/02_front/06690101.png', 'image/shiny/02_front/06690101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06690201', '0669', 'フラベベ', 'きいろのはな', 'image/normal/02_front/06690201.png', 'image/shiny/02_front/06690201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06690301', '0669', 'フラベベ', 'オレンジいろのはな', 'image/normal/02_front/06690301.png', 'image/shiny/02_front/06690301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06690401', '0669', 'フラベベ', 'あおいはな', 'image/normal/02_front/06690401.png', 'image/shiny/02_front/06690401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06690501', '0669', 'フラベベ', 'しろいはな', 'image/normal/02_front/06690501.png', 'image/shiny/02_front/06690501.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06700101', '0670', 'フラエッテ', 'あかいはな', 'image/normal/02_front/06700101.png', 'image/shiny/02_front/06700101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06700201', '0670', 'フラエッテ', 'きいろのはな', 'image/normal/02_front/06700201.png', 'image/shiny/02_front/06700201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06700301', '0670', 'フラエッテ', 'オレンジいろのはな', 'image/normal/02_front/06700301.png', 'image/shiny/02_front/06700301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06700401', '0670', 'フラエッテ', 'あおいはな', 'image/normal/02_front/06700401.png', 'image/shiny/02_front/06700401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06700501', '0670', 'フラエッテ', 'しろいはな', 'image/normal/02_front/06700501.png', 'image/shiny/02_front/06700501.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06700601', '0670', 'フラエッテ', 'えいえんのはな', 'image/normal/02_front/06700601.png', 'image/shiny/02_front/06700601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06700701', '0670', 'フラエッテ', 'メガフラエッテ', 'image/normal/02_front/06700701.png', 'image/shiny/02_front/06700701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06710101', '0671', 'フラージェス', 'あかいはな', 'image/normal/02_front/06710101.png', 'image/shiny/02_front/06710101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06710201', '0671', 'フラージェス', 'きいろのはな', 'image/normal/02_front/06710201.png', 'image/shiny/02_front/06710201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06710301', '0671', 'フラージェス', 'オレンジいろのはな', 'image/normal/02_front/06710301.png', 'image/shiny/02_front/06710301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06710401', '0671', 'フラージェス', 'あおいはな', 'image/normal/02_front/06710401.png', 'image/shiny/02_front/06710401.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06710501', '0671', 'フラージェス', 'しろいはな', 'image/normal/02_front/06710501.png', 'image/shiny/02_front/06710501.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06720101', '0672', 'メェークル', 'image/normal/02_front/06720101.png', 'image/shiny/02_front/06720101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06730101', '0673', 'ゴーゴート', 'image/normal/02_front/06730101.png', 'image/shiny/02_front/06730101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06740101', '0674', 'ヤンチャム', 'image/normal/02_front/06740101.png', 'image/shiny/02_front/06740101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06750101', '0675', 'ゴロンダ', 'image/normal/02_front/06750101.png', 'image/shiny/02_front/06750101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06760101', '0676', 'トリミアン', 'image/normal/02_front/06760101.png', 'image/shiny/02_front/06760101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06760201', '0676', 'トリミアン', 'ハートカット', 'image/normal/02_front/06760201.png', 'image/shiny/02_front/06760201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06760301', '0676', 'トリミアン', 'スターカット', 'image/normal/02_front/06760301.png', 'image/shiny/02_front/06760301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06760401', '0676', 'トリミアン', 'ダイヤカット', 'image/normal/02_front/06760401.png', 'image/shiny/02_front/06760401.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06760501', '0676', 'トリミアン', 'クイーンカット', 'image/normal/02_front/06760501.png', 'image/shiny/02_front/06760501.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06760601', '0676', 'トリミアン', 'カブキカット', 'image/normal/02_front/06760601.png', 'image/shiny/02_front/06760601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06760701', '0676', 'トリミアン', 'キングダムカット', 'image/normal/02_front/06760701.png', 'image/shiny/02_front/06760701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06760801', '0676', 'トリミアン', 'レディカット', 'image/normal/02_front/06760801.png', 'image/shiny/02_front/06760801.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06760901', '0676', 'トリミアン', 'マダムカット', 'image/normal/02_front/06760901.png', 'image/shiny/02_front/06760901.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06761001', '0676', 'トリミアン', 'ジェントルカット', 'image/normal/02_front/06761001.png', 'image/shiny/02_front/06761001.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06770101', '0677', 'ニャスパー', 'image/normal/02_front/06770101.png', 'image/shiny/02_front/06770101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06780101', '0678', 'ニャオニクス', 'オスのすがた', 'image/normal/02_front/06780101.png', 'image/shiny/02_front/06780101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06780102', '0678', 'ニャオニクス', 'メスのすがた', 'image/normal/02_front/06780102.png', 'image/shiny/02_front/06780102.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06780201', '0678', 'ニャオニクス', 'メガニャオニクス', 'image/normal/02_front/06780201.png', 'image/shiny/02_front/06780201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06870201', '0687', 'カラマネロ', 'メガカラマネロ', 'image/normal/02_front/06870201.png', 'image/shiny/02_front/06870201.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06790101', '0679', 'ヒトツキ', 'image/normal/02_front/06790101.png', 'image/shiny/02_front/06790101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06800101', '0680', 'ニダンギル', 'image/normal/02_front/06800101.png', 'image/shiny/02_front/06800101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06810101', '0681', 'ギルガルド', 'シールドフォルム', 'image/normal/02_front/06810101.png', 'image/shiny/02_front/06810101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06810201', '0681', 'ギルガルド', 'ブレードフォルム', 'image/normal/02_front/06810201.png', 'image/shiny/02_front/06810201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06820101', '0682', 'シュシュプ', 'image/normal/02_front/06820101.png', 'image/shiny/02_front/06820101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06830101', '0683', 'フレフワン', 'image/normal/02_front/06830101.png', 'image/shiny/02_front/06830101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06840101', '0684', 'ペロッパフ', 'image/normal/02_front/06840101.png', 'image/shiny/02_front/06840101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06850101', '0685', 'ペロリーム', 'image/normal/02_front/06850101.png', 'image/shiny/02_front/06850101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06860101', '0686', 'マーイーカ', 'image/normal/02_front/06860101.png', 'image/shiny/02_front/06860101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06870101', '0687', 'カラマネロ', 'image/normal/02_front/06870101.png', 'image/shiny/02_front/06870101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06880101', '0688', 'カメテテ', 'image/normal/02_front/06880101.png', 'image/shiny/02_front/06880101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06890101', '0689', 'ガメノデス', 'image/normal/02_front/06890101.png', 'image/shiny/02_front/06890101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06890201', '0689', 'ガメノデス', 'メガガメノデス', 'image/normal/02_front/06890201.png', 'image/shiny/02_front/06890201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06900101', '0690', 'クズモー', 'image/normal/02_front/06900101.png', 'image/shiny/02_front/06900101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06910101', '0691', 'ドラミドロ', 'image/normal/02_front/06910101.png', 'image/shiny/02_front/06910101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06910201', '0691', 'ドラミドロ', 'メガドラミドロ', 'image/normal/02_front/06910201.png', 'image/shiny/02_front/06910201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06920101', '0692', 'ウデッポウ', 'image/normal/02_front/06920101.png', 'image/shiny/02_front/06920101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06930101', '0693', 'ブロスター', 'image/normal/02_front/06930101.png', 'image/shiny/02_front/06930101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06940101', '0694', 'エリキテル', 'image/normal/02_front/06940101.png', 'image/shiny/02_front/06940101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06950101', '0695', 'エレザード', 'image/normal/02_front/06950101.png', 'image/shiny/02_front/06950101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06960101', '0696', 'チゴラス', 'image/normal/02_front/06960101.png', 'image/shiny/02_front/06960101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06970101', '0697', 'ガチゴラス', 'image/normal/02_front/06970101.png', 'image/shiny/02_front/06970101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06980101', '0698', 'アマルス', 'image/normal/02_front/06980101.png', 'image/shiny/02_front/06980101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('06990101', '0699', 'アマルルガ', 'image/normal/02_front/06990101.png', 'image/shiny/02_front/06990101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07000101', '0700', 'ニンフィア', 'image/normal/02_front/07000101.png', 'image/shiny/02_front/07000101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07010101', '0701', 'ルチャブル', 'image/normal/02_front/07010101.png', 'image/shiny/02_front/07010101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07010201', '0701', 'ルチャブル', 'メガルチャブル', 'image/normal/02_front/07010201.png', 'image/shiny/02_front/07010201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07020101', '0702', 'デデンネ', 'image/normal/02_front/07020101.png', 'image/shiny/02_front/07020101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07030101', '0703', 'メレシー', 'image/normal/02_front/07030101.png', 'image/shiny/02_front/07030101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07040101', '0704', 'ヌメラ', 'image/normal/02_front/07040101.png', 'image/shiny/02_front/07040101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07050101', '0705', 'ヌメイル', 'image/normal/02_front/07050101.png', 'image/shiny/02_front/07050101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07050201', '0705', 'ヌメイル', 'ヒスイのすがた', 'image/normal/02_front/07050201.png', 'image/shiny/02_front/07050201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07060101', '0706', 'ヌメルゴン', 'image/normal/02_front/07060101.png', 'image/shiny/02_front/07060101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07060201', '0706', 'ヌメルゴン', 'ヒスイのすがた', 'image/normal/02_front/07060201.png', 'image/shiny/02_front/07060201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07070101', '0707', 'クレッフィ', 'image/normal/02_front/07070101.png', 'image/shiny/02_front/07070101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07080101', '0708', 'ボクレー', 'image/normal/02_front/07080101.png', 'image/shiny/02_front/07080101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07090101', '0709', 'オーロット', 'image/normal/02_front/07090101.png', 'image/shiny/02_front/07090101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07100101', '0710', 'バケッチャ', 'ちゅうだましゅ(ふつうのサイズ)', 'image/normal/02_front/07100101.png', 'image/shiny/02_front/07100101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07100201', '0710', 'バケッチャ', 'こだましゅ(ちいさいサイズ)', 'image/normal/02_front/07100201.png', 'image/shiny/02_front/07100201.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07100301', '0710', 'バケッチャ', 'おおだましゅ(おおきいサイズ)', 'image/normal/02_front/07100301.png', 'image/shiny/02_front/07100301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07100401', '0710', 'バケッチャ', 'ギガだましゅ(とくだいサイズ)', 'image/normal/02_front/07100401.png', 'image/shiny/02_front/07100401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07110101', '0711', 'パンプジン', 'ちゅうだましゅ(ふつうのサイズ)', 'image/normal/02_front/07110101.png', 'image/shiny/02_front/07110101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07110201', '0711', 'パンプジン', 'こだましゅ(ちいさいサイズ)', 'image/normal/02_front/07110201.png', 'image/shiny/02_front/07110201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07110301', '0711', 'パンプジン', 'おおだましゅ(おおきいサイズ)', 'image/normal/02_front/07110301.png', 'image/shiny/02_front/07110301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07110401', '0711', 'パンプジン', 'ギガだましゅ(とくだいサイズ)', 'image/normal/02_front/07110401.png', 'image/shiny/02_front/07110401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07120101', '0712', 'カチコール', 'image/normal/02_front/07120101.png', 'image/shiny/02_front/07120101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07130101', '0713', 'クレベース', 'image/normal/02_front/07130101.png', 'image/shiny/02_front/07130101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07130201', '0713', 'クレベース', 'ヒスイのすがた', 'image/normal/02_front/07130201.png', 'image/shiny/02_front/07130201.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07140101', '0714', 'オンバット', 'image/normal/02_front/07140101.png', 'image/shiny/02_front/07140101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07150101', '0715', 'オンバーン', 'image/normal/02_front/07150101.png', 'image/shiny/02_front/07150101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07160101', '0716', 'ゼルネアス', 'リラックスモード', 'image/normal/02_front/07160101.png', 'image/shiny/02_front/07160101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07160201', '0716', 'ゼルネアス', 'アクティブモード', 'image/normal/02_front/07160201.png', 'image/shiny/02_front/07160201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07170101', '0717', 'イベルタル', 'image/normal/02_front/07170101.png', 'image/shiny/02_front/07170101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07180101', '0718', 'ジガルデ', '50%フォルム', 'image/normal/02_front/07180101.png', 'image/shiny/02_front/07180101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07180201', '0718', 'ジガルデ', '10%フォルム', 'image/normal/02_front/07180201.png', 'image/shiny/02_front/07180201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07180301', '0718', 'ジガルデ', '100%フォルム', 'image/normal/02_front/07180301.png', 'image/shiny/02_front/07180301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07180401', '0718', 'ジガルデ', 'メガジガルデ', 'image/normal/02_front/07180401.png', 'image/shiny/02_front/07180401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07190101', '0719', 'ディアンシー', 'image/normal/02_front/07190101.png', 'image/shiny/02_front/07190101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07190201', '0719', 'ディアンシー', 'メガディアンシー', 'image/normal/02_front/07190201.png', 'image/shiny/02_front/07190201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07200101', '0720', 'フーパ', 'いましめられしフーパ', 'image/normal/02_front/07200101.png', 'image/shiny/02_front/07200101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07200201', '0720', 'フーパ', 'ときはなたれしフーパ', 'image/normal/02_front/07200201.png', 'image/shiny/02_front/07200201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07210101', '0721', 'ボルケニオン', 'image/normal/02_front/07210101.png', 'image/shiny/02_front/07210101.png');


INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07220101', '0722', 'モクロー', 'image/normal/02_front/07220101.png', 'image/shiny/02_front/07220101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07230101', '0723', 'フクスロー', 'image/normal/02_front/07230101.png', 'image/shiny/02_front/07230101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07240101', '0724', 'ジュナイパー', 'image/normal/02_front/07240101.png', 'image/shiny/02_front/07240101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07240201', '0724', 'ジュナイパー', 'ヒスイのすがた', 'image/normal/02_front/07240201.png', 'image/shiny/02_front/07240201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07250101', '0725', 'ニャビー', 'image/normal/02_front/07250101.png', 'image/shiny/02_front/07250101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07260101', '0726', 'ニャヒート', 'image/normal/02_front/07260101.png', 'image/shiny/02_front/07260101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07270101', '0727', 'ガオガエン', 'image/normal/02_front/07270101.png', 'image/shiny/02_front/07270101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07280101', '0728', 'アシマリ', 'image/normal/02_front/07280101.png', 'image/shiny/02_front/07280101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07290101', '0729', 'オシャマリ', 'image/normal/02_front/07290101.png', 'image/shiny/02_front/07290101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07300101', '0730', 'アシレーヌ', 'image/normal/02_front/07300101.png', 'image/shiny/02_front/07300101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07310101', '0731', 'ツツケラ', 'image/normal/02_front/07310101.png', 'image/shiny/02_front/07310101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07320101', '0732', 'ケララッパ', 'image/normal/02_front/07320101.png', 'image/shiny/02_front/07320101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07330101', '0733', 'ドデカバシ', 'image/normal/02_front/07330101.png', 'image/shiny/02_front/07330101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07340101', '0734', 'ヤングース', 'image/normal/02_front/07340101.png', 'image/shiny/02_front/07340101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07350101', '0735', 'デカグース', 'image/normal/02_front/07350101.png', 'image/shiny/02_front/07350101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07360101', '0736', 'アゴジムシ', 'image/normal/02_front/07360101.png', 'image/shiny/02_front/07360101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07370101', '0737', 'デンヂムシ', 'image/normal/02_front/07370101.png', 'image/shiny/02_front/07370101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07380101', '0738', 'クワガノン', 'image/normal/02_front/07380101.png', 'image/shiny/02_front/07380101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07390101', '0739', 'マケンカニ', 'image/normal/02_front/07390101.png', 'image/shiny/02_front/07390101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07400101', '0740', 'ケケンカニ', 'image/normal/02_front/07400101.png', 'image/shiny/02_front/07400101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07400201', '0740', 'ケケンカニ', 'メガケケンカニ', 'image/normal/02_front/07400201.png', 'image/shiny/02_front/07400201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07410101', '0741', 'オドリドリ', 'めらめらスタイル', 'image/normal/02_front/07410101.png', 'image/shiny/02_front/07410101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07410201', '0741', 'オドリドリ', 'ぱちぱちスタイル', 'image/normal/02_front/07410201.png', 'image/shiny/02_front/07410201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07410301', '0741', 'オドリドリ', 'ふらふらスタイル', 'image/normal/02_front/07410301.png', 'image/shiny/02_front/07410301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07410401', '0741', 'オドリドリ', 'まいまいスタイル', 'image/normal/02_front/07410401.png', 'image/shiny/02_front/07410401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07420101', '0742', 'アブリー', 'image/normal/02_front/07420101.png', 'image/shiny/02_front/07420101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07430101', '0743', 'アブリボン', 'image/normal/02_front/07430101.png', 'image/shiny/02_front/07430101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07440101', '0744', 'イワンコ', 'image/normal/02_front/07440101.png', 'image/shiny/02_front/07440101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07450101', '0745', 'ルガルガン', 'まひるのすがた', 'image/normal/02_front/07450101.png', 'image/shiny/02_front/07450101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07450201', '0745', 'ルガルガン', 'まよなかのすがた', 'image/normal/02_front/07450201.png', 'image/shiny/02_front/07450201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07450301', '0745', 'ルガルガン', 'たそがれのすがた', 'image/normal/02_front/07450301.png', 'image/shiny/02_front/07450301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07460101', '0746', 'ヨワシ', 'たんどくのすがた', 'image/normal/02_front/07460101.png', 'image/shiny/02_front/07460101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07460201', '0746', 'ヨワシ', 'むれたすがた', 'image/normal/02_front/07460201.png', 'image/shiny/02_front/07460201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07470101', '0747', 'ヒドイデ', 'image/normal/02_front/07470101.png', 'image/shiny/02_front/07470101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07480101', '0748', 'ドヒドイデ', 'image/normal/02_front/07480101.png', 'image/shiny/02_front/07480101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07490101', '0749', 'ドロバンコ', 'image/normal/02_front/07490101.png', 'image/shiny/02_front/07490101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07500101', '0750', 'バンバドロ', 'image/normal/02_front/07500101.png', 'image/shiny/02_front/07500101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07510101', '0751', 'シズクモ', 'image/normal/02_front/07510101.png', 'image/shiny/02_front/07510101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07520101', '0752', 'オニシズクモ', 'image/normal/02_front/07520101.png', 'image/shiny/02_front/07520101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07530101', '0753', 'カリキリ', 'image/normal/02_front/07530101.png', 'image/shiny/02_front/07530101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07540101', '0754', 'ラランテス', 'image/normal/02_front/07540101.png', 'image/shiny/02_front/07540101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07550101', '0755', 'ネマシュ', 'image/normal/02_front/07550101.png', 'image/shiny/02_front/07550101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07560101', '0756', 'マシェード', 'image/normal/02_front/07560101.png', 'image/shiny/02_front/07560101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07570101', '0757', 'ヤトウモリ', 'image/normal/02_front/07570101.png', 'image/shiny/02_front/07570101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07580101', '0758', 'エンニュート', 'image/normal/02_front/07580101.png', 'image/shiny/02_front/07580101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07590101', '0759', 'ヌイコグマ', 'image/normal/02_front/07590101.png', 'image/shiny/02_front/07590101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07600101', '0760', 'キテルグマ', 'image/normal/02_front/07600101.png', 'image/shiny/02_front/07600101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07610101', '0761', 'アマカジ', 'image/normal/02_front/07610101.png', 'image/shiny/02_front/07610101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07620101', '0762', 'アママイコ', 'image/normal/02_front/07620101.png', 'image/shiny/02_front/07620101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07630101', '0763', 'アマージョ', 'image/normal/02_front/07630101.png', 'image/shiny/02_front/07630101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07640101', '0764', 'キュワワー', 'image/normal/02_front/07640101.png', 'image/shiny/02_front/07640101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07650101', '0765', 'ヤレユータン', 'image/normal/02_front/07650101.png', 'image/shiny/02_front/07650101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07660101', '0766', 'ナゲツケサル', 'image/normal/02_front/07660101.png', 'image/shiny/02_front/07660101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07670101', '0767', 'コソクムシ', 'image/normal/02_front/07670101.png', 'image/shiny/02_front/07670101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07680101', '0768', 'グソクムシャ', 'image/normal/02_front/07680101.png', 'image/shiny/02_front/07680101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07680201', '0768', 'グソクムシャ', 'メガグソクムシャ', 'image/normal/02_front/07680201.png', 'image/shiny/02_front/07680201.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07690101', '0769', 'スナバァ', 'image/normal/02_front/07690101.png', 'image/shiny/02_front/07690101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07700101', '0770', 'シロデスナ', 'image/normal/02_front/07700101.png', 'image/shiny/02_front/07700101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07710101', '0771', 'ナマコブシ', 'image/normal/02_front/07710101.png', 'image/shiny/02_front/07710101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07720101', '0772', 'タイプ：ヌル', 'image/normal/02_front/07720101.png', 'image/shiny/02_front/07720101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07730101', '0773', 'シルヴァディ', 'タイプ：ノーマル', 'image/normal/02_front/07730101.png', 'image/shiny/02_front/07730101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07730201', '0773', 'シルヴァディ', 'タイプ：ファイヤー', 'image/normal/02_front/07730201.png', 'image/shiny/02_front/07730201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07730301', '0773', 'シルヴァディ', 'タイプ：ウォーター', 'image/normal/02_front/07730301.png', 'image/shiny/02_front/07730301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07730401', '0773', 'シルヴァディ', 'タイプ：グラス', 'image/normal/02_front/07730401.png', 'image/shiny/02_front/07730401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07730501', '0773', 'シルヴァディ', 'タイプ：エレクトロ', 'image/normal/02_front/07730501.png', 'image/shiny/02_front/07730501.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07730601', '0773', 'シルヴァディ', 'タイプ：アイス', 'image/normal/02_front/07730601.png', 'image/shiny/02_front/07730601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07730701', '0773', 'シルヴァディ', 'タイプ：ファイト', 'image/normal/02_front/07730701.png', 'image/shiny/02_front/07730701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07730801', '0773', 'シルヴァディ', 'タイプ：ポイズン', 'image/normal/02_front/07730801.png', 'image/shiny/02_front/07730801.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07730901', '0773', 'シルヴァディ', 'タイプ：グラウンド', 'image/normal/02_front/07730901.png', 'image/shiny/02_front/07730901.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07731001', '0773', 'シルヴァディ', 'タイプ：フライング', 'image/normal/02_front/07731001.png', 'image/shiny/02_front/07731001.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07731101', '0773', 'シルヴァディ', 'タイプ：サイキック', 'image/normal/02_front/07731101.png', 'image/shiny/02_front/07731101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07731201', '0773', 'シルヴァディ', 'タイプ：バグ', 'image/normal/02_front/07731201.png', 'image/shiny/02_front/07731201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07731301', '0773', 'シルヴァディ', 'タイプ：ロック', 'image/normal/02_front/07731301.png', 'image/shiny/02_front/07731301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07731401', '0773', 'シルヴァディ', 'タイプ：ゴースト', 'image/normal/02_front/07731401.png', 'image/shiny/02_front/07731401.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07731501', '0773', 'シルヴァディ', 'タイプ：ドラゴン', 'image/normal/02_front/07731501.png', 'image/shiny/02_front/07731501.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07731601', '0773', 'シルヴァディ', 'タイプ：ダーク', 'image/normal/02_front/07731601.png', 'image/shiny/02_front/07731601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07731701', '0773', 'シルヴァディ', 'タイプ：スチール', 'image/normal/02_front/07731701.png', 'image/shiny/02_front/07731701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07731801', '0773', 'シルヴァディ', 'タイプ：フェアリー', 'image/normal/02_front/07731801.png', 'image/shiny/02_front/07731801.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07740101', '0774', 'メテノ', 'りゅうせいのすがた', 'image/normal/02_front/07740101.png', 'image/shiny/02_front/07740101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07740201', '0774', 'メテノ', 'あかいろのコア', 'image/normal/02_front/07740201.png', 'image/shiny/02_front/07740201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07740301', '0774', 'メテノ', 'だいだいいろのコア', 'image/normal/02_front/07740301.png', 'image/shiny/02_front/07740301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07740401', '0774', 'メテノ', 'きいろのコア', 'image/normal/02_front/07740401.png', 'image/shiny/02_front/07740401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07740501', '0774', 'メテノ', 'みどりいろのコア', 'image/normal/02_front/07740501.png', 'image/shiny/02_front/07740501.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07740601', '0774', 'メテノ', 'みずいろのコア', 'image/normal/02_front/07740601.png', 'image/shiny/02_front/07740601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07740701', '0774', 'メテノ', 'あおいろのコア', 'image/normal/02_front/07740701.png', 'image/shiny/02_front/07740701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07740801', '0774', 'メテノ', 'むらさきいろのコア', 'image/normal/02_front/07740801.png', 'image/shiny/02_front/07740801.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07750101', '0775', 'ネッコアラ', 'image/normal/02_front/07750101.png', 'image/shiny/02_front/07750101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07760101', '0776', 'バクガメス', 'image/normal/02_front/07760101.png', 'image/shiny/02_front/07760101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07770101', '0777', 'トゲデマル', 'image/normal/02_front/07770101.png', 'image/shiny/02_front/07770101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07780101', '0778', 'ミミッキュ', 'ばけたすがた', 'image/normal/02_front/07780101.png', 'image/shiny/02_front/07780101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07780201', '0778', 'ミミッキュ', 'ばれたすがた', 'image/normal/02_front/07780201.png', 'image/shiny/02_front/07780201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07790101', '0779', 'ハギギシリ', 'image/normal/02_front/07790101.png', 'image/shiny/02_front/07790101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07800101', '0780', 'ジジーロン', 'image/normal/02_front/07800101.png', 'image/shiny/02_front/07800101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07800201', '0780', 'ジジーロン', 'メガジジーロン', 'image/normal/02_front/07800201.png', 'image/shiny/02_front/07800201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07810101', '0781', 'ダダリン', 'image/normal/02_front/07810101.png', 'image/shiny/02_front/07810101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07820101', '0782', 'ジャラコ', 'image/normal/02_front/07820101.png', 'image/shiny/02_front/07820101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07830101', '0783', 'ジャランゴ', 'image/normal/02_front/07830101.png', 'image/shiny/02_front/07830101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07840101', '0784', 'ジャラランガ', 'image/normal/02_front/07840101.png', 'image/shiny/02_front/07840101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07850101', '0785', 'カプ・コケコ', 'image/normal/02_front/07850101.png', 'image/shiny/02_front/07850101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07860101', '0786', 'カプ・テテフ', 'image/normal/02_front/07860101.png', 'image/shiny/02_front/07860101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07870101', '0787', 'カプ・ブルル', 'image/normal/02_front/07870101.png', 'image/shiny/02_front/07870101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07880101', '0788', 'カプ・レヒレ', 'image/normal/02_front/07880101.png', 'image/shiny/02_front/07880101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07890101', '0789', 'コスモッグ', 'image/normal/02_front/07890101.png', 'image/shiny/02_front/07890101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07900101', '0790', 'コスモウム', 'image/normal/02_front/07900101.png', 'image/shiny/02_front/07900101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07910101', '0791', 'ソルガレオ', 'image/normal/02_front/07910101.png', 'image/shiny/02_front/07910101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07920101', '0792', 'ルナアーラ', 'image/normal/02_front/07920101.png', 'image/shiny/02_front/07920101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07930101', '0793', 'ウツロイド', 'image/normal/02_front/07930101.png', 'image/shiny/02_front/07930101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07940101', '0794', 'マッシブーン', 'image/normal/02_front/07940101.png', 'image/shiny/02_front/07940101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07950101', '0795', 'フェローチェ', 'image/normal/02_front/07950101.png', 'image/shiny/02_front/07950101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07960101', '0796', 'デンジュモク', 'image/normal/02_front/07960101.png', 'image/shiny/02_front/07960101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07970101', '0797', 'テッカグヤ', 'image/normal/02_front/07970101.png', 'image/shiny/02_front/07970101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07980101', '0798', 'カミツルギ', 'image/normal/02_front/07980101.png', 'image/shiny/02_front/07980101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('07990101', '0799', 'アクジキング', 'image/normal/02_front/07990101.png', 'image/shiny/02_front/07990101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08000101', '0800', 'ネクロズマ', 'image/normal/02_front/08000101.png', 'image/shiny/02_front/08000101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08000201', '0800', 'ネクロズマ', 'たそがれのたてがみ', 'image/normal/02_front/08000201.png', 'image/shiny/02_front/08000201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08000301', '0800', 'ネクロズマ', 'あかつきのつばさ', 'image/normal/02_front/08000301.png', 'image/shiny/02_front/08000301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08000401', '0800', 'ネクロズマ', 'ウルトラネクロズマ', 'image/normal/02_front/08000401.png', 'image/shiny/02_front/08000401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08010101', '0801', 'マギアナ', 'image/normal/02_front/08010101.png', 'image/shiny/02_front/08010101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08010201', '0801', 'マギアナ', '500ねんまえのいろ', 'image/normal/02_front/08010201.png', 'image/shiny/02_front/08010201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08010301', '0801', 'マギアナ', 'メガマギアナ', 'image/normal/02_front/08010301.png', 'image/shiny/02_front/08010301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08010401', '0801', 'マギアナ', 'メガマギアナ・500ねんまえのいろ', 'image/normal/02_front/08010401.png', 'image/shiny/02_front/08010401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08020101', '0802', 'マーシャドー', 'image/normal/02_front/08020101.png', 'image/shiny/02_front/08020101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08030101', '0803', 'ベベノム', 'image/normal/02_front/08030101.png', 'image/shiny/02_front/08030101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08040101', '0804', 'アーゴヨン', 'image/normal/02_front/08040101.png', 'image/shiny/02_front/08040101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08050101', '0805', 'ツンデツンデ', 'image/normal/02_front/08050101.png', 'image/shiny/02_front/08050101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08060101', '0806', 'ズガドーン', 'image/normal/02_front/08060101.png', 'image/shiny/02_front/08060101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08070101', '0807', 'ゼラオラ', 'image/normal/02_front/08070101.png', 'image/shiny/02_front/08070101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08070201', '0807', 'ゼラオラ', 'メガゼラオラ', 'image/normal/02_front/08070201.png', 'image/shiny/02_front/08070201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08080101', '0808', 'メルタン', 'image/normal/02_front/08080101.png', 'image/shiny/02_front/08080101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08090101', '0809', 'メルメタル', 'image/normal/02_front/08090101.png', 'image/shiny/02_front/08090101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08090201', '0809', 'メルメタル', 'キョダイマックスのすがた', 'image/normal/02_front/08090201.png', 'image/shiny/02_front/08090201.png');




INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08100101', '0810', 'サルノリ', 'image/normal/02_front/08100101.png', 'image/shiny/02_front/08100101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08110101', '0811', 'バチンキー', 'image/normal/02_front/08110101.png', 'image/shiny/02_front/08110101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08120101', '0812', 'ゴリランダー', 'image/normal/02_front/08120101.png', 'image/shiny/02_front/08120101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08120201', '0812', 'ゴリランダー', 'キョダイマックスのすがた', 'image/normal/02_front/08120201.png', 'image/shiny/02_front/08120201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08130101', '0813', 'ヒバニー', 'image/normal/02_front/08130101.png', 'image/shiny/02_front/08130101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08140101', '0814', 'ラビフット', 'image/normal/02_front/08140101.png', 'image/shiny/02_front/08140101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08150101', '0815', 'エースバーン', 'image/normal/02_front/08150101.png', 'image/shiny/02_front/08150101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08150201', '0815', 'エースバーン', 'キョダイマックスのすがた', 'image/normal/02_front/08150201.png', 'image/shiny/02_front/08150201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08160101', '0816', 'メッソン', 'image/normal/02_front/08160101.png', 'image/shiny/02_front/08160101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08170101', '0817', 'ジメレオン', 'image/normal/02_front/08170101.png', 'image/shiny/02_front/08170101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08180101', '0818', 'インテレオン', 'image/normal/02_front/08180101.png', 'image/shiny/02_front/08180101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08180201', '0818', 'インテレオン', 'キョダイマックスのすがた', 'image/normal/02_front/08180201.png', 'image/shiny/02_front/08180201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08190101', '0819', 'ホシガリス', 'image/normal/02_front/08190101.png', 'image/shiny/02_front/08190101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08200101', '0820', 'ヨクバリス', 'image/normal/02_front/08200101.png', 'image/shiny/02_front/08200101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08210101', '0821', 'ココガラ', 'image/normal/02_front/08210101.png', 'image/shiny/02_front/08210101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08220101', '0822', 'アオガラス', 'image/normal/02_front/08220101.png', 'image/shiny/02_front/08220101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08230101', '0823', 'アーマーガア', 'image/normal/02_front/08230101.png', 'image/shiny/02_front/08230101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08230201', '0823', 'アーマーガア', 'キョダイマックスのすがた', 'image/normal/02_front/08230201.png', 'image/shiny/02_front/08230201.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08240101', '0824', 'サッチムシ', 'image/normal/02_front/08240101.png', 'image/shiny/02_front/08240101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08250101', '0825', 'レドームシ', 'image/normal/02_front/08250101.png', 'image/shiny/02_front/08250101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08260101', '0826', 'イオルブ', 'image/normal/02_front/08260101.png', 'image/shiny/02_front/08260101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08260201', '0826', 'イオルブ', 'キョダイマックスのすがた', 'image/normal/02_front/08260201.png', 'image/shiny/02_front/08260201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08270101', '0827', 'クスネ', 'image/normal/02_front/08270101.png', 'image/shiny/02_front/08270101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08280101', '0828', 'フォクスライ', 'image/normal/02_front/08280101.png', 'image/shiny/02_front/08280101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08290101', '0829', 'ヒメンカ', 'image/normal/02_front/08290101.png', 'image/shiny/02_front/08290101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08300101', '0830', 'ワタシラガ', 'image/normal/02_front/08300101.png', 'image/shiny/02_front/08300101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08310101', '0831', 'ウールー', 'image/normal/02_front/08310101.png', 'image/shiny/02_front/08310101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08320101', '0832', 'バイウールー', 'image/normal/02_front/08320101.png', 'image/shiny/02_front/08320101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08330101', '0833', 'カムカメ', 'image/normal/02_front/08330101.png', 'image/shiny/02_front/08330101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08340101', '0834', 'カジリガメ', 'image/normal/02_front/08340101.png', 'image/shiny/02_front/08340101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08340201', '0834', 'カジリガメ', 'キョダイマックスのすがた', 'image/normal/02_front/08340201.png', 'image/shiny/02_front/08340201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08350101', '0835', 'ワンパチ', 'image/normal/02_front/08350101.png', 'image/shiny/02_front/08350101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08360101', '0836', 'パルスワン', 'image/normal/02_front/08360101.png', 'image/shiny/02_front/08360101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08370101', '0837', 'タンドン', 'image/normal/02_front/08370101.png', 'image/shiny/02_front/08370101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08380101', '0838', 'トロッゴン', 'image/normal/02_front/08380101.png', 'image/shiny/02_front/08380101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08390101', '0839', 'セキタンザン', 'image/normal/02_front/08390101.png', 'image/shiny/02_front/08390101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08390201', '0839', 'セキタンザン', 'キョダイマックスのすがた', 'image/normal/02_front/08390201.png', 'image/shiny/02_front/08390201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08400101', '0840', 'カジッチュ', 'image/normal/02_front/08400101.png', 'image/shiny/02_front/08400101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08410101', '0841', 'アップリュー', 'image/normal/02_front/08410101.png', 'image/shiny/02_front/08410101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08410201', '0841', 'アップリュー', 'キョダイマックスのすがた', 'image/normal/02_front/08410201.png', 'image/shiny/02_front/08410201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08420101', '0842', 'タルップル', 'image/normal/02_front/08420101.png', 'image/shiny/02_front/08420101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08420201', '0842', 'タルップル', 'キョダイマックスのすがた', 'image/normal/02_front/08420201.png', 'image/shiny/02_front/08420201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08430101', '0843', 'スナヘビ', 'image/normal/02_front/08430101.png', 'image/shiny/02_front/08430101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08440101', '0844', 'サダイジャ', 'image/normal/02_front/08440101.png', 'image/shiny/02_front/08440101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08440201', '0844', 'サダイジャ', 'キョダイマックスのすがた', 'image/normal/02_front/08440201.png', 'image/shiny/02_front/08440201.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08450101', '0845', 'ウッウ', 'image/normal/02_front/08450101.png', 'image/shiny/02_front/08450101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08450201', '0845', 'ウッウ', 'うのみのすがた', 'image/normal/02_front/08450201.png', 'image/shiny/02_front/08450201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08450301', '0845', 'ウッウ', 'まるのみのすがた', 'image/normal/02_front/08450301.png', 'image/shiny/02_front/08450301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08460101', '0846', 'サシカマス', 'image/normal/02_front/08460101.png', 'image/shiny/02_front/08460101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08470101', '0847', 'カマスジョー', 'image/normal/02_front/08470101.png', 'image/shiny/02_front/08470101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08480101', '0848', 'エレズン', 'image/normal/02_front/08480101.png', 'image/shiny/02_front/08480101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08490101', '0849', 'ストリンダー', 'ハイなすがた', 'image/normal/02_front/08490101.png', 'image/shiny/02_front/08490101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08490201', '0849', 'ストリンダー', 'ローなすがた', 'image/normal/02_front/08490201.png', 'image/shiny/02_front/08490201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08490301', '0849', 'ストリンダー', 'ハイなすがた・キョダイマックスのすがた', 'image/normal/02_front/08490301.png', 'image/shiny/02_front/08490301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08490401', '0849', 'ストリンダー', 'ローなすがた・キョダイマックスのすがた', 'image/normal/02_front/08490401.png', 'image/shiny/02_front/08490401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08500101', '0850', 'ヤクデ', 'image/normal/02_front/08500101.png', 'image/shiny/02_front/08500101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08510101', '0851', 'マルヤクデ', 'image/normal/02_front/08510101.png', 'image/shiny/02_front/08510101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08510201', '0851', 'マルヤクデ', 'キョダイマックスのすがた', 'image/normal/02_front/08510201.png', 'image/shiny/02_front/08510201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08520101', '0852', 'タタッコ', 'image/normal/02_front/08520101.png', 'image/shiny/02_front/08520101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08530101', '0853', 'オトスパス', 'image/normal/02_front/08530101.png', 'image/shiny/02_front/08530101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08540101', '0854', 'ヤバチャ', 'がんさくフォルム', 'image/normal/02_front/08540101.png', 'image/shiny/02_front/08540101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08540201', '0854', 'ヤバチャ', 'しんさくフォルム', 'image/normal/02_front/08540201.png', 'image/shiny/02_front/08540201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08550101', '0855', 'ポットデス', 'がんさくフォルム', 'image/normal/02_front/08550101.png', 'image/shiny/02_front/08550101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08550201', '0855', 'ポットデス', 'しんさくフォルム', 'image/normal/02_front/08550201.png', 'image/shiny/02_front/08550201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08560101', '0856', 'ミブリム', 'image/normal/02_front/08560101.png', 'image/shiny/02_front/08560101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08570101', '0857', 'テブリム', 'image/normal/02_front/08570101.png', 'image/shiny/02_front/08570101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08580101', '0858', 'ブリムオン', 'image/normal/02_front/08580101.png', 'image/shiny/02_front/08580101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08580201', '0858', 'ブリムオン', 'キョダイマックスのすがた', 'image/normal/02_front/08580201.png', 'image/shiny/02_front/08580201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08590101', '0859', 'ベロバー', 'image/normal/02_front/08590101.png', 'image/shiny/02_front/08590101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08600101', '0860', 'ギモー', 'image/normal/02_front/08600101.png', 'image/shiny/02_front/08600101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08610101', '0861', 'オーロンゲ', 'image/normal/02_front/08610101.png', 'image/shiny/02_front/08610101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08610201', '0861', 'オーロンゲ', 'キョダイマックスのすがた', 'image/normal/02_front/08610201.png', 'image/shiny/02_front/08610201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08620101', '0862', 'タチフサグマ', 'image/normal/02_front/08620101.png', 'image/shiny/02_front/08620101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08630101', '0863', 'ニャイキング', 'image/normal/02_front/08630101.png', 'image/shiny/02_front/08630101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08640101', '0864', 'サニゴーン', 'image/normal/02_front/08640101.png', 'image/shiny/02_front/08640101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08650101', '0865', 'ネギガナイト', 'image/normal/02_front/08650101.png', 'image/shiny/02_front/08650101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08660101', '0866', 'バリコオル', 'image/normal/02_front/08660101.png', 'image/shiny/02_front/08660101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08670101', '0867', 'デスバーン', 'image/normal/02_front/08670101.png', 'image/shiny/02_front/08670101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08680101', '0868', 'マホミル', 'image/normal/02_front/08680101.png', 'image/shiny/02_front/08680101.png');




INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08690101', '0869', 'マホイップ', 'ミルキティバニラ・いちご', 'image/normal/02_front/08690101.png', 'image/shiny/02_front/08690101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08690201', '0869', 'マホイップ', 'ミルキティバニラ・ベリー', 'image/normal/02_front/08690201.png', 'image/shiny/02_front/08690201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08690301', '0869', 'マホイップ', 'ミルキティバニラ・ハート', 'image/normal/02_front/08690301.png', 'image/shiny/02_front/08690301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08690401', '0869', 'マホイップ', 'ミルキティバニラ・スター', 'image/normal/02_front/08690401.png', 'image/shiny/02_front/08690401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08690501', '0869', 'マホイップ', 'ミルキティバニラ・よつば', 'image/normal/02_front/08690501.png', 'image/shiny/02_front/08690501.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08690601', '0869', 'マホイップ', 'ミルキティバニラ・おはな', 'image/normal/02_front/08690601.png', 'image/shiny/02_front/08690601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08690701', '0869', 'マホイップ', 'ミルキティバニラ・リボン', 'image/normal/02_front/08690701.png', 'image/shiny/02_front/08690701.png');




INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08690801', '0869', 'マホイップ', 'ミルキティルビー・いちご', 'image/normal/02_front/08690901.png', 'image/shiny/02_front/08690801.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08690901', '0869', 'マホイップ', 'ミルキティルビー・ベリー', 'image/normal/02_front/08690901.png', 'image/shiny/02_front/08690901.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08691001', '0869', 'マホイップ', 'ミルキティルビー・ハート', 'image/normal/02_front/08691001.png', 'image/shiny/02_front/08691001.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08691101', '0869', 'マホイップ', 'ミルキティルビー・スター', 'image/normal/02_front/08691101.png', 'image/shiny/02_front/08691101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08691201', '0869', 'マホイップ', 'ミルキティルビー・よつば', 'image/normal/02_front/08691201.png', 'image/shiny/02_front/08691201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08691301', '0869', 'マホイップ', 'ミルキティルビー・おはな', 'image/normal/02_front/08691301.png', 'image/shiny/02_front/08691301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08691401', '0869', 'マホイップ', 'ミルキティルビー・リボン', 'image/normal/02_front/08691401.png', 'image/shiny/02_front/08691401.png');






INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08691501', '0869', 'マホイップ', 'ミルキティまっちゃ・いちご', 'image/normal/02_front/08691501.png', 'image/shiny/02_front/08691501.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08691601', '0869', 'マホイップ', 'ミルキティまっちゃ・ベリー', 'image/normal/02_front/08691601.png', 'image/shiny/02_front/08691601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08691701', '0869', 'マホイップ', 'ミルキティまっちゃ・ハート', 'image/normal/02_front/08691701.png', 'image/shiny/02_front/08691701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08691801', '0869', 'マホイップ', 'ミルキティまっちゃ・スター', 'image/normal/02_front/08691801.png', 'image/shiny/02_front/08691801.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08691901', '0869', 'マホイップ', 'ミルキティまっちゃ・よつば', 'image/normal/02_front/08691901.png', 'image/shiny/02_front/08691901.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08692001', '0869', 'マホイップ', 'ミルキティまっちゃ・おはな', 'image/normal/02_front/08692001.png', 'image/shiny/02_front/08692001.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08692101', '0869', 'マホイップ', 'ミルキティまっちゃ・リボン', 'image/normal/02_front/08692101.png', 'image/shiny/02_front/08692101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08692201', '0869', 'マホイップ', 'ミルキティミント・いちご', 'image/normal/02_front/08692201.png', 'image/shiny/02_front/08692201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08692301', '0869', 'マホイップ', 'ミルキティミント・ベリー', 'image/normal/02_front/08692301.png', 'image/shiny/02_front/08692301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08692401', '0869', 'マホイップ', 'ミルキティミント・ハート', 'image/normal/02_front/08692401.png', 'image/shiny/02_front/08692401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08692501', '0869', 'マホイップ', 'ミルキティミント・スター', 'image/normal/02_front/08692501.png', 'image/shiny/02_front/08692501.png');


INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08692601', '0869', 'マホイップ', 'ミルキティミント・よつば', 'image/normal/02_front/08692601.png', 'image/shiny/02_front/08692601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08692701', '0869', 'マホイップ', 'ミルキティミント・おはな', 'image/normal/02_front/08692701.png', 'image/shiny/02_front/08692701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08692801', '0869', 'マホイップ', 'ミルキティミント・リボン', 'image/normal/02_front/08692801.png', 'image/shiny/02_front/08692801.png');


INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08692901', '0869', 'マホイップ', 'ミルキティレモン・いちご', 'image/normal/02_front/08692901.png', 'image/shiny/02_front/08692901.png');


INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08693001', '0869', 'マホイップ', 'ミルキティレモン・ベリー', 'image/normal/02_front/08693001.png', 'image/shiny/02_front/08693001.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08693101', '0869', 'マホイップ', 'ミルキティレモン・ハート', 'image/normal/02_front/08693101.png', 'image/shiny/02_front/08693101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08693201', '0869', 'マホイップ', 'ミルキティレモン・スター', 'image/normal/02_front/08693201.png', 'image/shiny/02_front/08693201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08693301', '0869', 'マホイップ', 'ミルキティレモン・よつば', 'image/normal/02_front/08693301.png', 'image/shiny/02_front/08693301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08693401', '0869', 'マホイップ', 'ミルキティレモン・おはな', 'image/normal/02_front/08693401.png', 'image/shiny/02_front/08693401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08693501', '0869', 'マホイップ', 'ミルキティレモン・リボン', 'image/normal/02_front/08693501.png', 'image/shiny/02_front/08693501.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08693601', '0869', 'マホイップ', 'ミルキティソルト・いちご', 'image/normal/02_front/08693601.png', 'image/shiny/02_front/08693601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08693701', '0869', 'マホイップ', 'ミルキティソルト・ベリー', 'image/normal/02_front/08693701.png', 'image/shiny/02_front/08693701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08693801', '0869', 'マホイップ', 'ミルキティソルト・ハート', 'image/normal/02_front/08693801.png', 'image/shiny/02_front/08693801.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08693901', '0869', 'マホイップ', 'ミルキティソルト・スター', 'image/normal/02_front/08693901.png', 'image/shiny/02_front/08693901.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08694001', '0869', 'マホイップ', 'ミルキティソルト・よつば', 'image/normal/02_front/08694001.png', 'image/shiny/02_front/08694001.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08694101', '0869', 'マホイップ', 'ミルキティソルト・おはな', 'image/normal/02_front/08694101.png', 'image/shiny/02_front/08694101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08694201', '0869', 'マホイップ', 'ミルキティソルト・リボン', 'image/normal/02_front/08694201.png', 'image/shiny/02_front/08694201.png');




INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08694301', '0869', 'マホイップ', 'ルビーミックス・いちご', 'image/normal/02_front/08694301.png', 'image/shiny/02_front/08694301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08694401', '0869', 'マホイップ', 'ルビーミックス・ベリー', 'image/normal/02_front/08694401.png', 'image/shiny/02_front/08694401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08694501', '0869', 'マホイップ', 'ルビーミックス・ハート', 'image/normal/02_front/08694501.png', 'image/shiny/02_front/08694501.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08694601', '0869', 'マホイップ', 'ルビーミックス・スター', 'image/normal/02_front/08694601.png', 'image/shiny/02_front/08694601.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08694701', '0869', 'マホイップ', 'ルビーミックス・よつば', 'image/normal/02_front/08694701.png', 'image/shiny/02_front/08694701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08694801', '0869', 'マホイップ', 'ルビーミックス・おはな', 'image/normal/02_front/08694801.png', 'image/shiny/02_front/08694801.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08694901', '0869', 'マホイップ', 'ルビーミックス・リボン', 'image/normal/02_front/08694901.png', 'image/shiny/02_front/08694901.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08695001', '0869', 'マホイップ', 'キャラメルミックス・いちご', 'image/normal/02_front/08695001.png', 'image/shiny/02_front/08695001.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08695101', '0869', 'マホイップ', 'キャラメルミックス・ベリー', 'image/normal/02_front/08695101.png', 'image/shiny/02_front/08695101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08695201', '0869', 'マホイップ', 'キャラメルミックス・ハート', 'image/normal/02_front/08695201.png', 'image/shiny/02_front/08695201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08695301', '0869', 'マホイップ', 'キャラメルミックス・スター', 'image/normal/02_front/08695301.png', 'image/shiny/02_front/08695301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08695401', '0869', 'マホイップ', 'キャラメルミックス・よつば', 'image/normal/02_front/08695401.png', 'image/shiny/02_front/08695401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08695501', '0869', 'マホイップ', 'キャラメルミックス・おはな', 'image/normal/02_front/08695501.png', 'image/shiny/02_front/08695501.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08695601', '0869', 'マホイップ', 'キャラメルミックス・リボン', 'image/normal/02_front/08695601.png', 'image/shiny/02_front/08695601.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08695701', '0869', 'マホイップ', 'トリプルミックス・いちご', 'image/normal/02_front/08695701.png', 'image/shiny/02_front/08695701.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08695801', '0869', 'マホイップ', 'トリプルミックス・ベリー', 'image/normal/02_front/08695801.png', 'image/shiny/02_front/08695801.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08695901', '0869', 'マホイップ', 'トリプルミックス・ハート', 'image/normal/02_front/08695901.png', 'image/shiny/02_front/08695901.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08696001', '0869', 'マホイップ', 'トリプルミックス・スター', 'image/normal/02_front/08696001.png', 'image/shiny/02_front/08696001.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08696101', '0869', 'マホイップ', 'トリプルミックス・よつば', 'image/normal/02_front/08696101.png', 'image/shiny/02_front/08696101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08696201', '0869', 'マホイップ', 'トリプルミックス・おはな', 'image/normal/02_front/08696201.png', 'image/shiny/02_front/08696201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08696301', '0869', 'マホイップ', 'トリプルミックス・リボン', 'image/normal/02_front/08696301.png', 'image/shiny/02_front/08696301.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08696401', '0869', 'マホイップ', 'キョダイマックスのすがた', 'image/normal/02_front/08696401.png', 'image/shiny/02_front/08696401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08700101', '0870', 'タイレーツ', 'image/normal/02_front/08700101.png', 'image/shiny/02_front/08700101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08700201', '0870', 'タイレーツ', 'メガタイレーツ', 'image/normal/02_front/08700201.png', 'image/shiny/02_front/08700201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08710101', '0871', 'バチンウニ', 'image/normal/02_front/08710101.png', 'image/shiny/02_front/08710101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08720101', '0872', 'ユキハミ', 'image/normal/02_front/08720101.png', 'image/shiny/02_front/08720101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08730101', '0873', 'モスノウ', 'image/normal/02_front/08730101.png', 'image/shiny/02_front/08730101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08740101', '0874', 'イシヘンジン', 'image/normal/02_front/08740101.png', 'image/shiny/02_front/08740101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08750101', '0875', 'コオリッポ', 'アイスフェイス', 'image/normal/02_front/08750101.png', 'image/shiny/02_front/08750101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08750201', '0875', 'コオリッポ', 'ナイスフェイス', 'image/normal/02_front/08750201.png', 'image/shiny/02_front/08750201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08760101', '0876', 'イエッサン', 'オスのすがた', 'image/normal/02_front/08760101.png', 'image/shiny/02_front/08760101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08760102', '0876', 'イエッサン', 'メスのすがた', 'image/normal/02_front/08760102.png', 'image/shiny/02_front/08760102.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08770101', '0877', 'モルペコ', 'まんぷくもよう', 'image/normal/02_front/08770101.png', 'image/shiny/02_front/08770101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08770201', '0877', 'モルペコ', 'はらぺこもよう', 'image/normal/02_front/08770201.png', 'image/shiny/02_front/08770201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08780101', '0878', 'ゾウドウ', 'image/normal/02_front/08780101.png', 'image/shiny/02_front/08780101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08790101', '0879', 'ダイオウドウ', 'image/normal/02_front/08790101.png', 'image/shiny/02_front/08790101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08790201', '0879', 'ダイオウドウ', 'キョダイマックスのすがた', 'image/normal/02_front/08790201.png', 'image/shiny/02_front/08790201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08800101', '0880', 'バッチラゴン', 'image/normal/02_front/08800101.png', 'image/shiny/02_front/08800101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08810101', '0881', 'バッチルドン', 'image/normal/02_front/08810101.png', 'image/shiny/02_front/08810101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08820101', '0882', 'ウオノラゴン', 'image/normal/02_front/08820101.png', 'image/shiny/02_front/08820101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08830101', '0883', 'ウオチルドン', 'image/normal/02_front/08830101.png', 'image/shiny/02_front/08830101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08840101', '0884', 'ジュラルドン', 'image/normal/02_front/08840101.png', 'image/shiny/02_front/08840101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08840201', '0884', 'ジュラルドン', 'キョダイマックスのすがた', 'image/normal/02_front/08840201.png', 'image/shiny/02_front/08840201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08850101', '0885', 'ドラメシヤ', 'image/normal/02_front/08850101.png', 'image/shiny/02_front/08850101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08860101', '0886', 'ドロンチ', 'image/normal/02_front/08860101.png', 'image/shiny/02_front/08860101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08870101', '0887', 'ドラパルト', 'image/normal/02_front/08870101.png', 'image/shiny/02_front/08870101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08880101', '0888', 'ザシアン', 'れきせんのゆうしゃ', 'image/normal/02_front/08880101.png', 'image/shiny/02_front/08880101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08880201', '0888', 'ザシアン', 'けんのおう', 'image/normal/02_front/08880201.png', 'image/shiny/02_front/08880201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08890101', '0889', 'ザマゼンタ', 'れきせんのゆうしゃ', 'image/normal/02_front/08890101.png', 'image/shiny/02_front/08890101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08890201', '0889', 'ザマゼンタ', 'たてのおう', 'image/normal/02_front/08890201.png', 'image/shiny/02_front/08890201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08900101', '0890', 'ムゲンダイナ', 'image/normal/02_front/08900101.png', 'image/shiny/02_front/08900101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08900201', '0890', 'ムゲンダイナ', 'ムゲンダイマックス', 'image/normal/02_front/08900201.png', 'image/shiny/02_front/08900201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08910101', '0891', 'ダクマ', 'image/normal/02_front/08910101.png', 'image/shiny/02_front/08910101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08920101', '0892', 'ウーラオス', 'いちげきのかた', 'image/normal/02_front/08920101.png', 'image/shiny/02_front/08920101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08920201', '0892', 'ウーラオス', 'れんげきのかた', 'image/normal/02_front/08920201.png', 'image/shiny/02_front/08920201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08920301', '0892', 'ウーラオス', 'いちげきのかた・キョダイマックスのすがた', 'image/normal/02_front/08920301.png', 'image/shiny/02_front/08920301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08920401', '0892', 'ウーラオス', 'れんげきのかた・キョダイマックスのすがた', 'image/normal/02_front/08920401.png', 'image/shiny/02_front/08920401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08930101', '0893', 'ザルード', 'image/normal/02_front/08930101.png', 'image/shiny/02_front/08930101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08930201', '0893', 'ザルード', 'とうちゃんザルード', 'image/normal/02_front/08930201.png', 'image/shiny/02_front/08930201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08940101', '0894', 'レジエレキ', 'image/normal/02_front/08940101.png', 'image/shiny/02_front/08940101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08950101', '0895', 'レジドラゴ', 'image/normal/02_front/08950101.png', 'image/shiny/02_front/08950101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08960101', '0896', 'ブリザポス', 'image/normal/02_front/08960101.png', 'image/shiny/02_front/08960101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08970101', '0897', 'レイスポス', 'image/normal/02_front/08970101.png', 'image/shiny/02_front/08970101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08980101', '0898', 'バトレックス', 'image/normal/02_front/08980101.png', 'image/shiny/02_front/08980101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08980201', '0898', 'バトレックス', 'はくばじょうのすがた', 'image/normal/02_front/08980201.png', 'image/shiny/02_front/08980201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08980301', '0898', 'バトレックス', 'こくばじょうのすがた', 'image/normal/02_front/08980301.png', 'image/shiny/02_front/08980301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('08990101', '0899', 'アヤシシ', 'image/normal/02_front/08990101.png', 'image/shiny/02_front/08990101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09000101', '0900', 'バサギリ', 'image/normal/02_front/09000101.png', 'image/shiny/02_front/09000101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09010101', '0901', 'ガチグマ', 'image/normal/02_front/09010101.png', 'image/shiny/02_front/09010101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09010201', '0901', 'ガチグマ', 'アカツキ', 'image/normal/02_front/09010201.png', 'image/shiny/02_front/09010201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09020101', '0902', 'イダイトウ', 'オスのすがた', 'image/normal/02_front/09020101.png', 'image/shiny/02_front/09020101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09020102', '0902', 'イダイトウ', 'メスのすがた', 'image/normal/02_front/09020102.png', 'image/shiny/02_front/09020102.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09030101', '0903', 'オオニューラ', 'image/normal/02_front/09030101.png', 'image/shiny/02_front/09030101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09040101', '0904', 'ハリーマン', 'image/normal/02_front/09040101.png', 'image/shiny/02_front/09040101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09050101', '0905', 'ラブトロス', 'けしんフォルム', 'image/normal/02_front/09050101.png', 'image/shiny/02_front/09050101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09050201', '0905', 'ラブトロス', 'れいじゅうフォルム', 'image/normal/02_front/09050201.png', 'image/shiny/02_front/09050201.png');




INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09060101', '0906', 'ニャオハ', 'image/normal/02_front/09060101.png', 'image/shiny/02_front/09060101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09070101', '0907', 'ニャローテ', 'image/normal/02_front/09070101.png', 'image/shiny/02_front/09070101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09080101', '0908', 'マスカーニャ', 'image/normal/02_front/09080101.png', 'image/shiny/02_front/09080101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09090101', '0909', 'ホゲータ', 'image/normal/02_front/09090101.png', 'image/shiny/02_front/09090101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09100101', '0910', 'アチゲータ', 'image/normal/02_front/09100101.png', 'image/shiny/02_front/09100101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09110101', '0911', 'ラウドボーン', 'image/normal/02_front/09110101.png', 'image/shiny/02_front/09110101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09120101', '0912', 'クワッス', 'image/normal/02_front/09120101.png', 'image/shiny/02_front/09120101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09130101', '0913', 'ウェルカモ', 'image/normal/02_front/09130101.png', 'image/shiny/02_front/09130101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09140101', '0914', 'ウェーニバル', 'image/normal/02_front/09140101.png', 'image/shiny/02_front/09140101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09150101', '0915', 'グルトン', 'image/normal/02_front/09150101.png', 'image/shiny/02_front/09150101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09160101', '0916', 'パフュートン', 'オスのすがた', 'image/normal/02_front/09160101.png', 'image/shiny/02_front/09160101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09160102', '0916', 'パフュートン', 'メスのすがた', 'image/normal/02_front/09160102.png', 'image/shiny/02_front/09160102.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09170101', '0917', 'タマンチュラ', 'image/normal/02_front/09170101.png', 'image/shiny/02_front/09170101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09180101', '0918', 'ワナイダー', 'image/normal/02_front/09180101.png', 'image/shiny/02_front/09180101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09190101', '0919', 'マメバッタ', 'image/normal/02_front/09190101.png', 'image/shiny/02_front/09190101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09200101', '0920', 'エクスレッグ', 'image/normal/02_front/09200101.png', 'image/shiny/02_front/09200101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09210101', '0921', 'パモ', 'image/normal/02_front/09210101.png', 'image/shiny/02_front/09210101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09220101', '0922', 'パモット', 'image/normal/02_front/09220101.png', 'image/shiny/02_front/09220101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09230101', '0923', 'パーモット', 'image/normal/02_front/09230101.png', 'image/shiny/02_front/09230101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09240101', '0924', 'ワッカネズミ', 'image/normal/02_front/09240101.png', 'image/shiny/02_front/09240101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09250101', '0925', 'イッカネズミ', '3びきかぞく', 'image/normal/02_front/09250101.png', 'image/shiny/02_front/09250101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09250201', '0925', 'イッカネズミ', '4びきかぞく', 'image/normal/02_front/09250201.png', 'image/shiny/02_front/09250201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09260101', '0926', 'パピモッチ', 'image/normal/02_front/09260101.png', 'image/shiny/02_front/09260101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09270101', '0927', 'パウッツェル', 'image/normal/02_front/09270101.png', 'image/shiny/02_front/09270101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09280101', '0928', 'ミニーブ', 'image/normal/02_front/09280101.png', 'image/shiny/02_front/09280101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09290101', '0929', 'オリーニョ', 'image/normal/02_front/09290101.png', 'image/shiny/02_front/09290101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09300101', '0930', 'オリーヴァ', 'image/normal/02_front/09300101.png', 'image/shiny/02_front/09300101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09310101', '0931', 'イキリンコ', 'グリーンフェザー', 'image/normal/02_front/09310101.png', 'image/shiny/02_front/09310101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09310201', '0931', 'イキリンコ', 'ブルーフェザー', 'image/normal/02_front/09310201.png', 'image/shiny/02_front/09310201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09310301', '0931', 'イキリンコ', 'イエローフェザー', 'image/normal/02_front/09310301.png', 'image/shiny/02_front/09310301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09310401', '0931', 'イキリンコ', 'ホワイトフェザー', 'image/normal/02_front/09310401.png', 'image/shiny/02_front/09310401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09320101', '0932', 'コジオ', 'image/normal/02_front/09320101.png', 'image/shiny/02_front/09320101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09330101', '0933', 'ジオヅム', 'image/normal/02_front/09330101.png', 'image/shiny/02_front/09330101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09340101', '0934', 'キョジオーン', 'image/normal/02_front/09340101.png', 'image/shiny/02_front/09340101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09350101', '0935', 'カルボウ', 'image/normal/02_front/09350101.png', 'image/shiny/02_front/09350101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09360101', '0936', 'グレンアルマ', 'image/normal/02_front/09360101.png', 'image/shiny/02_front/09360101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09370101', '0937', 'ソウブレイズ', 'image/normal/02_front/09370101.png', 'image/shiny/02_front/09370101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09380101', '0938', 'ズピカ', 'image/normal/02_front/09380101.png', 'image/shiny/02_front/09380101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09390101', '0939', 'ハラバリー', 'image/normal/02_front/09390101.png', 'image/shiny/02_front/09390101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09400101', '0940', 'カイデン', 'image/normal/02_front/09400101.png', 'image/shiny/02_front/09400101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09410101', '0941', 'タイカイデン', 'image/normal/02_front/09410101.png', 'image/shiny/02_front/09410101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09420101', '0942', 'オラチフ', 'image/normal/02_front/09420101.png', 'image/shiny/02_front/09420101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09430101', '0943', 'マフィンティフ', 'image/normal/02_front/09430101.png', 'image/shiny/02_front/09430101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09440101', '0944', 'シルシュルー', 'image/normal/02_front/09440101.png', 'image/shiny/02_front/09440101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09450101', '0945', 'タギングル', 'image/normal/02_front/09450101.png', 'image/shiny/02_front/09450101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09460101', '0946', 'アノクサ', 'image/normal/02_front/09460101.png', 'image/shiny/02_front/09460101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09470101', '0947', 'アノホラグサ', 'image/normal/02_front/09470101.png', 'image/shiny/02_front/09470101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09480101', '0948', 'ノノクラゲ', 'image/normal/02_front/09480101.png', 'image/shiny/02_front/09480101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09490101', '0949', 'リククラゲ', 'image/normal/02_front/09490101.png', 'image/shiny/02_front/09490101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09500101', '0950', 'ガケガニ', 'image/normal/02_front/09500101.png', 'image/shiny/02_front/09500101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09510101', '0951', 'カプサイジ', 'image/normal/02_front/09510101.png', 'image/shiny/02_front/09510101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09520101', '0952', 'スコヴィラン', 'image/normal/02_front/09520101.png', 'image/shiny/02_front/09520101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09520201', '0952', 'スコヴィラン', 'メガスコヴィラン', 'image/normal/02_front/09520201.png', 'image/shiny/02_front/09520201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09530101', '0953', 'シガロコ', 'image/normal/02_front/09530101.png', 'image/shiny/02_front/09530101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09540101', '0954', 'ベラカス', 'image/normal/02_front/09540101.png', 'image/shiny/02_front/09540101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09550101', '0955', 'ヒラヒナ', 'image/normal/02_front/09550101.png', 'image/shiny/02_front/09550101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09560101', '0956', 'クエスパトラ', 'image/normal/02_front/09560101.png', 'image/shiny/02_front/09560101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09570101', '0957', 'カヌチャン', 'image/normal/02_front/09570101.png', 'image/shiny/02_front/09570101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09580101', '0958', 'ナカヌチャン', 'image/normal/02_front/09580101.png', 'image/shiny/02_front/09580101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09590101', '0959', 'デカヌチャン', 'image/normal/02_front/09590101.png', 'image/shiny/02_front/09590101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09600101', '0960', 'ウミディグダ', 'image/normal/02_front/09600101.png', 'image/shiny/02_front/09600101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09610101', '0961', 'ウミトリオ', 'image/normal/02_front/09610101.png', 'image/shiny/02_front/09610101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09620101', '0962', 'オトシドリ', 'image/normal/02_front/09620101.png', 'image/shiny/02_front/09620101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09630101', '0963', 'ナミイルカ', 'image/normal/02_front/09630101.png', 'image/shiny/02_front/09630101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09640101', '0964', 'イルカマン', 'ナイーブフォルム', 'image/normal/02_front/09640101.png', 'image/shiny/02_front/09640101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09640201', '0964', 'イルカマン', 'マイティフォルム', 'image/normal/02_front/09640201.png', 'image/shiny/02_front/09640201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09650101', '0965', 'ブロロン', 'image/normal/02_front/09650101.png', 'image/shiny/02_front/09650101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09660101', '0966', 'ブロロローム', 'image/normal/02_front/09660101.png', 'image/shiny/02_front/09660101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09670101', '0967', 'モトトカゲ', 'image/normal/02_front/09670101.png', 'image/shiny/02_front/09670101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09680101', '0968', 'ミミズズ', 'image/normal/02_front/09680101.png', 'image/shiny/02_front/09680101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09690101', '0969', 'キラーメ', 'image/normal/02_front/09690101.png', 'image/shiny/02_front/09690101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09700101', '0970', 'キラフロル', 'image/normal/02_front/09700101.png', 'image/shiny/02_front/09700101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09700201', '0970', 'キラフロル', 'メガキラフロル', 'image/normal/02_front/09700201.png', 'image/shiny/02_front/09700201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09710101', '0971', 'ボチ', 'image/normal/02_front/09710101.png', 'image/shiny/02_front/09710101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09720101', '0972', 'ハカドッグ', 'image/normal/02_front/09720101.png', 'image/shiny/02_front/09720101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09730101', '0973', 'カラミンゴ', 'image/normal/02_front/09730101.png', 'image/shiny/02_front/09730101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09740101', '0974', 'アルクジラ', 'image/normal/02_front/09740101.png', 'image/shiny/02_front/09740101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09750101', '0975', 'ハルクジラ', 'image/normal/02_front/09750101.png', 'image/shiny/02_front/09750101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09760101', '0976', 'ミガルーサ', 'image/normal/02_front/09760101.png', 'image/shiny/02_front/09760101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09770101', '0977', 'ヘイラッシャ', 'image/normal/02_front/09770101.png', 'image/shiny/02_front/09770101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09780101', '0978', 'シャリタツ', 'そったすがた', 'image/normal/02_front/09780101.png', 'image/shiny/02_front/09780101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09780201', '0978', 'シャリタツ', 'たれたすがた', 'image/normal/02_front/09780201.png', 'image/shiny/02_front/09780201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09780301', '0978', 'シャリタツ', 'のびたすがた', 'image/normal/02_front/09780301.png', 'image/shiny/02_front/09780301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09780401', '0978', 'シャリタツ', 'メガシャリタツ・そったすがた', 'image/normal/02_front/09780401.png', 'image/shiny/02_front/09780401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09780501', '0978', 'シャリタツ', 'メガシャリタツ・たれたすがた', 'image/normal/02_front/09780501.png', 'image/shiny/02_front/09780501.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09780601', '0978', 'シャリタツ', 'メガシャリタツ・のびたすがた', 'image/normal/02_front/09780601.png', 'image/shiny/02_front/09780601.png');




INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09790101', '0979', 'コノヨザル', 'image/normal/02_front/09790101.png', 'image/shiny/02_front/09790101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09800101', '0980', 'ドオー', 'image/normal/02_front/09800101.png', 'image/shiny/02_front/09800101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09810101', '0981', 'リキキリン', 'image/normal/02_front/09810101.png', 'image/shiny/02_front/09810101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09820101', '0982', 'ノココッチ', 'ふたふしフォルム', 'image/normal/02_front/09820101.png', 'image/shiny/02_front/09820101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09820201', '0982', 'ノココッチ', 'みつふしフォルム', 'image/normal/02_front/09820201.png', 'image/shiny/02_front/09820201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09830101', '0983', 'ドドゲザン', 'image/normal/02_front/09830101.png', 'image/shiny/02_front/09830101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09840101', '0984', 'イダイナキバ', 'image/normal/02_front/09840101.png', 'image/shiny/02_front/09840101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09850101', '0985', 'サケブシッポ', 'image/normal/02_front/09850101.png', 'image/shiny/02_front/09850101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09860101', '0986', 'アラブルタケ', 'image/normal/02_front/09860101.png', 'image/shiny/02_front/09860101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09870101', '0987', 'ハバタクカミ', 'image/normal/02_front/09870101.png', 'image/shiny/02_front/09870101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09880101', '0988', 'チヲハウハネ', 'image/normal/02_front/09880101.png', 'image/shiny/02_front/09880101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09890101', '0989', 'スナノケガワ', 'image/normal/02_front/09890101.png', 'image/shiny/02_front/09890101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09900101', '0990', 'テツノワダチ', 'image/normal/02_front/09900101.png', 'image/shiny/02_front/09900101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09910101', '0991', 'テツノツツミ', 'image/normal/02_front/09910101.png', 'image/shiny/02_front/09910101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09920101', '0992', 'テツノカイナ', 'image/normal/02_front/09920101.png', 'image/shiny/02_front/09920101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09930101', '0993', 'テツノコウベ', 'image/normal/02_front/09930101.png', 'image/shiny/02_front/09930101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09940101', '0994', 'テツノドクガ', 'image/normal/02_front/09940101.png', 'image/shiny/02_front/09940101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09950101', '0995', 'テツノイバラ', 'image/normal/02_front/09950101.png', 'image/shiny/02_front/09950101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09960101', '0996', 'セビエ', 'image/normal/02_front/09960101.png', 'image/shiny/02_front/09960101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09970101', '0997', 'セゴール', 'image/normal/02_front/09970101.png', 'image/shiny/02_front/09970101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09980101', '0998', 'セグレイブ', 'image/normal/02_front/09980101.png', 'image/shiny/02_front/09980101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09980201', '0998', 'セグレイブ', 'メガセグレイブ', 'image/normal/02_front/09980201.png', 'image/shiny/02_front/09980201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09990101', '0999', 'コレクレー', 'はこフォルム', 'image/normal/02_front/09990101.png', 'image/shiny/02_front/09990101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('09990201', '0999', 'コレクレー', 'とほフォルム', 'image/normal/02_front/09990201.png', 'image/shiny/02_front/09990201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10000101', '1000', 'サーフゴー', 'image/normal/02_front/10000101.png', 'image/shiny/02_front/10000101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10010101', '1001', 'チオンジェン', 'image/normal/02_front/10010101.png', 'image/shiny/02_front/10010101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10020101', '1002', 'パオジアン', 'image/normal/02_front/10020101.png', 'image/shiny/02_front/10020101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10030101', '1003', 'ディンルー', 'image/normal/02_front/10030101.png', 'image/shiny/02_front/10030101.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10040101', '1004', 'イーユイ', 'image/normal/02_front/10040101.png', 'image/shiny/02_front/10040101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10050101', '1005', 'トドロクツキ', 'image/normal/02_front/10050101.png', 'image/shiny/02_front/10050101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10060101', '1006', 'テツノブジン', 'image/normal/02_front/10060101.png', 'image/shiny/02_front/10060101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10070101', '1007', 'コライドン', 'image/normal/02_front/10070101.png', 'image/shiny/02_front/10070101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10080101', '1008', 'ミライドン', 'image/normal/02_front/10080101.png', 'image/shiny/02_front/10080101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10090101', '1009', 'ウネルミナモ', 'image/normal/02_front/10090101.png', 'image/shiny/02_front/10090101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10100101', '1010', 'テツノイサハ', 'image/normal/02_front/10100101.png', 'image/shiny/02_front/10100101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10110101', '1011', 'カミッチュ', 'image/normal/02_front/10110101.png', 'image/shiny/02_front/10110101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10120101', '1012', 'チャデス', 'マガイモノのすがた', 'image/normal/02_front/10120101.png', 'image/shiny/02_front/10120101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10120201', '1012', 'チャデス', 'タカイモノのすがた', 'image/normal/02_front/10120201.png', 'image/shiny/02_front/10120201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10130101', '1013', 'ヤバソチャ', 'マガイモノのすがた', 'image/normal/02_front/10130101.png', 'image/shiny/02_front/10130101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10130201', '1013', 'ヤバソチャ', 'タカイモノのすがた', 'image/normal/02_front/10130201.png', 'image/shiny/02_front/10130201.png');



INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10140101', '1014', 'イイネイヌ', 'image/normal/02_front/10140101.png', 'image/shiny/02_front/10140101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10150101', '1015', 'マシマシラ', 'image/normal/02_front/10150101.png', 'image/shiny/02_front/10150101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10160101', '1016', 'キチキギス', 'image/normal/02_front/10160101.png', 'image/shiny/02_front/10160101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10170101', '1017', 'オーガポン', 'みどりのかめん', 'image/normal/02_front/10170101.png', 'image/shiny/02_front/10170101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10170201', '1017', 'オーガポン', 'いどのかめん', 'image/normal/02_front/10170201.png', 'image/shiny/02_front/10170201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10170301', '1017', 'オーガポン', 'かまどのかめん', 'image/normal/02_front/10170301.png', 'image/shiny/02_front/10170301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10170401', '1017', 'オーガポン', 'いしずえのかめん', 'image/normal/02_front/10170401.png', 'image/shiny/02_front/10170401.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10180101', '1018', 'ブリジュラス', 'image/normal/02_front/10180101.png', 'image/shiny/02_front/10180101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10190101', '1019', 'カミツオロチ', 'image/normal/02_front/10190101.png', 'image/shiny/02_front/10190101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10200101', '1020', 'ウガツホムラ', 'image/normal/02_front/10200101.png', 'image/shiny/02_front/10200101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10210101', '1021', 'タケルライコ', 'image/normal/02_front/10210101.png', 'image/shiny/02_front/10210101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10220101', '1022', 'テツノイワオ', 'image/normal/02_front/10220101.png', 'image/shiny/02_front/10220101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10230101', '1023', 'テツノカシラ', 'image/normal/02_front/10230101.png', 'image/shiny/02_front/10230101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10240101', '1024', 'テラパゴス', 'ノーマルフォルム', 'image/normal/02_front/10240101.png', 'image/shiny/02_front/10240101.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10240201', '1024', 'テラパゴス', 'テラスタルフォルム', 'image/normal/02_front/10240201.png', 'image/shiny/02_front/10240201.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, FORM, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10240301', '1024', 'テラパゴス', 'ステラフォルム', 'image/normal/02_front/10240301.png', 'image/shiny/02_front/10240301.png');

INSERT INTO POKÉDEX3(POKEID, NO, NAME, PATH_NORMAL_FRONT, PATH_SHINY_FRONT)
VALUES('10250101', '1025', 'モモワロウ', 'image/normal/02_front/10250101.png', 'image/shiny/02_front/10250101.png');
    `);

    console.log("pokedex3 へのデータ挿入が完了しました！");
  } catch (err) {
    console.error("SQL実行エラー:", err);
  } finally {
    await client.end();
    console.log("DB接続終了");
  }
}

insertPokedex3();
