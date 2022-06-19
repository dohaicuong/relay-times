/**
 * @generated SignedSource<<a3dfbafa544e812abe1576f789beb257>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostListItem_post$data = {
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
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "05f65fe88aa678825d4ec19e9c743e81";

export default node;
