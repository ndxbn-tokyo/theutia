## フレームワークの設定

### `yarn start` したときの設定
#### `strictConfigFileSchema`
default: `false`

設定ファイルのスキーマを、厳密にチェックする。
設定ファイルのスキーマは、各 Theutia サブモジュールで定義されている。
この設定値が `true` だった場合、プリケーションの ConfigSchemaChecker に登録され、`application.start` よりも前のタイミングでチェックされる。
