# RegLex.org

RegLex.org の公開用静的サイトです。既存の英語版・日本語版を維持しながら、セキュリティ専門組織向けの LogosCyber サイトを同一リポジトリで管理します。

## 公開パス

- `/us/` — RegLex Accounting US
- `/jp/` — RegLex 日本語版
- `/LogosCyber/jp/` — LogosCyber 法人向けサイト

## 構成

既存の RegLex ページはルートの `styles.css` と `main.js` を共有します。LogosCyber は独立したViteビルド成果物として `LogosCyber/jp/` 配下に配置し、サブパス用の絶対アセットパスを使用します。

このリポジトリへのプッシュはGitHub上のソース更新を意味します。Cloudflareなどの公開環境へ反映されるかどうかは、ホスティング側のGit連携設定とデプロイ設定に依存します。
