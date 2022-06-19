/**
 * @generated SignedSource<<d1c92698f9cb5c89fa28d6dac5991aea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostListItem_post$data = {
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "PostListItem_post";
};
export type PostListItem_post$key = {
  readonly " $data"?: PostListItem_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostListItem_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostListItem_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "ba669b0045045aae1cea1bd8c0d369c7";

export default node;
