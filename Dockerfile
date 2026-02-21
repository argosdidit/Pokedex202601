FROM node:18

# 作業ディレクトリ
WORKDIR /app

# package.json がないので npm install は不要
# 静的ファイルとサーバーコードをコピー
COPY . .

# アプリが使うポート
EXPOSE 3001

# サーバーを起動
CMD ["node", "pokeServer.js"]
