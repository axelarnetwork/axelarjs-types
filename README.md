# axelarjs-types

## Development

```sh
# Setup
git submodule update --init --recursive
yarn install

# Regenerate types from proto files
yarn codegen

# Build package
yarn build
```

## Updating axelar-core version

```sh
cd axelar-core
git checkout <new-commit-hash>
cd ..
git add axelar-core
git commit -m "update axelar-core to <commit-hash>"
yarn codegen
```
