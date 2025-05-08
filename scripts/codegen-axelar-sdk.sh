#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

TS_PROTO_OPTS="esModuleInterop=true,forceLong=long,useOptionals=messages,useDate=false"

OUT_DIR="./src"
AXELAR_SDK_DIR="./axelar-core/proto"
AXELAR_SDK_THIRD_PARTY_DIR="./axelar-core/swagger-proto/third_party"

PLUGIN_PATH="$(realpath ./bin)/protoc-gen-ts_proto_yarn_2"

mkdir -p "$OUT_DIR"

protoc \
  --plugin="$PLUGIN_PATH" \
  --ts_proto_yarn_2_out="$OUT_DIR" \
  --proto_path="$AXELAR_SDK_DIR" \
  # --proto_path="$AXELAR_SDK_THIRD_PARTY_DIR" \
  --ts_proto_yarn_2_opt="$TS_PROTO_OPTS" \
  "$AXELAR_SDK_DIR/axelar/auxiliary/v1beta1/genesis.proto" \
  "$AXELAR_SDK_DIR/axelar/auxiliary/v1beta1/events.proto" \
  "$AXELAR_SDK_DIR/axelar/auxiliary/v1beta1/service.proto" \
  "$AXELAR_SDK_DIR/axelar/auxiliary/v1beta1/tx.proto" \
  "$AXELAR_SDK_DIR/axelar/axelarnet/v1beta1/events.proto" \
  "$AXELAR_SDK_DIR/axelar/axelarnet/v1beta1/genesis.proto" \
  "$AXELAR_SDK_DIR/axelar/axelarnet/v1beta1/params.proto" \
  "$AXELAR_SDK_DIR/axelar/axelarnet/v1beta1/proposal.proto" \
  "$AXELAR_SDK_DIR/axelar/axelarnet/v1beta1/query.proto" \
  "$AXELAR_SDK_DIR/axelar/axelarnet/v1beta1/service.proto" \
  "$AXELAR_SDK_DIR/axelar/axelarnet/v1beta1/tx.proto" \
  "$AXELAR_SDK_DIR/axelar/axelarnet/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/distribution/v1beta1/events.proto" \
  "$AXELAR_SDK_DIR/axelar/multisig/exported/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/multisig/v1beta1/events.proto" \
  "$AXELAR_SDK_DIR/axelar/multisig/v1beta1/genesis.proto" \
  "$AXELAR_SDK_DIR/axelar/multisig/v1beta1/params.proto" \
  "$AXELAR_SDK_DIR/axelar/multisig/v1beta1/query.proto" \
  "$AXELAR_SDK_DIR/axelar/multisig/v1beta1/service.proto" \
  "$AXELAR_SDK_DIR/axelar/multisig/v1beta1/tx.proto" \
  "$AXELAR_SDK_DIR/axelar/multisig/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/nexus/exported/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/nexus/v1beta1/events.proto" \
  "$AXELAR_SDK_DIR/axelar/nexus/v1beta1/genesis.proto" \
  "$AXELAR_SDK_DIR/axelar/nexus/v1beta1/params.proto" \
  "$AXELAR_SDK_DIR/axelar/nexus/v1beta1/query.proto" \
  "$AXELAR_SDK_DIR/axelar/nexus/v1beta1/service.proto" \
  "$AXELAR_SDK_DIR/axelar/nexus/v1beta1/tx.proto" \
  "$AXELAR_SDK_DIR/axelar/nexus/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/permission/exported/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/permission/v1beta1/genesis.proto" \
  "$AXELAR_SDK_DIR/axelar/permission/v1beta1/params.proto" \
  "$AXELAR_SDK_DIR/axelar/permission/v1beta1/query.proto" \
  "$AXELAR_SDK_DIR/axelar/permission/v1beta1/service.proto" \
  "$AXELAR_SDK_DIR/axelar/permission/v1beta1/tx.proto" \
  "$AXELAR_SDK_DIR/axelar/permission/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/reward/v1beta1/genesis.proto" \
  "$AXELAR_SDK_DIR/axelar/reward/v1beta1/params.proto" \
  "$AXELAR_SDK_DIR/axelar/reward/v1beta1/query.proto" \
  "$AXELAR_SDK_DIR/axelar/reward/v1beta1/service.proto" \
  "$AXELAR_SDK_DIR/axelar/reward/v1beta1/tx.proto" \
  "$AXELAR_SDK_DIR/axelar/reward/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/snapshot/exported/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/snapshot/v1beta1/genesis.proto" \
  "$AXELAR_SDK_DIR/axelar/snapshot/v1beta1/params.proto" \
  "$AXELAR_SDK_DIR/axelar/snapshot/v1beta1/query.proto" \
  "$AXELAR_SDK_DIR/axelar/snapshot/v1beta1/service.proto" \
  "$AXELAR_SDK_DIR/axelar/snapshot/v1beta1/tx.proto" \
  "$AXELAR_SDK_DIR/axelar/snapshot/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/evm/v1beta1/genesis.proto" \
  "$AXELAR_SDK_DIR/axelar/evm/v1beta1/params.proto" \
  "$AXELAR_SDK_DIR/axelar/evm/v1beta1/query.proto" \
  "$AXELAR_SDK_DIR/axelar/evm/v1beta1/service.proto" \
  "$AXELAR_SDK_DIR/axelar/evm/v1beta1/tx.proto" \
  "$AXELAR_SDK_DIR/axelar/evm/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/tss/exported/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/tss/tofnd/v1beta1/common.proto" \
  "$AXELAR_SDK_DIR/axelar/tss/tofnd/v1beta1/multisig.proto" \
  "$AXELAR_SDK_DIR/axelar/tss/tofnd/v1beta1/tofnd.proto" \
  "$AXELAR_SDK_DIR/axelar/tss/v1beta1/genesis.proto" \
  "$AXELAR_SDK_DIR/axelar/tss/v1beta1/params.proto" \
  "$AXELAR_SDK_DIR/axelar/tss/v1beta1/service.proto" \
  "$AXELAR_SDK_DIR/axelar/tss/v1beta1/tx.proto" \
  "$AXELAR_SDK_DIR/axelar/tss/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/utils/v1beta1/bitmap.proto" \
  "$AXELAR_SDK_DIR/axelar/utils/v1beta1/queuer.proto" \
  "$AXELAR_SDK_DIR/axelar/utils/v1beta1/threshold.proto" \
  "$AXELAR_SDK_DIR/axelar/vote/exported/v1beta1/types.proto" \
  "$AXELAR_SDK_DIR/axelar/vote/v1beta1/events.proto" \
  "$AXELAR_SDK_DIR/axelar/vote/v1beta1/genesis.proto" \
  "$AXELAR_SDK_DIR/axelar/vote/v1beta1/params.proto" \
  "$AXELAR_SDK_DIR/axelar/vote/v1beta1/query.proto" \
  "$AXELAR_SDK_DIR/axelar/vote/v1beta1/service.proto" \
  "$AXELAR_SDK_DIR/axelar/vote/v1beta1/tx.proto" \
  "$AXELAR_SDK_DIR/axelar/vote/v1beta1/types.proto" \
