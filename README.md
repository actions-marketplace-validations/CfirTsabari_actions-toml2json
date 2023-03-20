# actions-toml2json
A GitHub Action to convert a toml file into JSON format

[![license](https://img.shields.io/github/license/CfirTsabari/actions-toml2json.svg)](https://github.com/CfirTsabari/actions-toml2json/blob/master/LICENSE)
[![release](https://img.shields.io/github/release/CfirTsabari/actions-toml2json.svg)](https://github.com/CfirTsabari/actions-toml2json/releases/latest)

## Getting started

### Create your workflow
```yaml
name: CI
on: pull_request

jobs:
  ci:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v3
      - name: create a toml file
        run: |
        echo '# This is an example TOML file

        [server]
        host = "localhost"
        port = 8080

        [database]
        name = "my_db"
        user = "my_user"
        password = "my_password"' > example.toml

      - name: Run action
        id: convert
        uses: CfirTsabari/actions-toml2json@v1.0.0
        with:
          toml-file-path: example.toml

      - name: Print json output
        run: echo ${{ steps.convert.outputs.json-output }}
```

## License
[MIT License - CfirTsabari/actions-toml2json](https://github.com/CfirTsabari/actions-toml2json/blob/master/LICENSE)

