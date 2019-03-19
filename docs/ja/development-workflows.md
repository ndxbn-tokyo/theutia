## Development WorkFlows
開発フローには、いくつかの選択肢があります。

ToDo: 各開発フローを一つの図にまとめたものを、ここに置く

### コードファースト

1. ルータ、コントローラを生成 `theu generate --router --controller Foo` し、実装
1. 結合テストを生成 `theu generate --feature Foo` し、実装
1. API ドキュメントを更新 `theu update api-document`

### テストファースト（TDD/BDD）

1. 結合テストを生成 `theu generate --feature Foo` し、実装
1. ルータ、コントローラを生成 `theu generate --router --controller Foo` し、実装
1. API ドキュメントを更新 `theu update api-document`

### API ドキュメント ファースト

1. API ドキュメントを書く（Swagger で）
1. ルータとコントローラと結合テストを、自動生成 `theu update --router --controller --feature`
1. 実装
