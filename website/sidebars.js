/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    Docusaurus: ["doc1", "doc2", "doc3"],
    Features: ["mdx"],
    // Added TypeDoc autogenerated .md documentation.
    TypeDoc: [
      "myapi/index",
      {
        type: "category",
        label: "External Modules",
        items: [
          "myapi/modules/_classes_",
          "myapi/classes/_classes_.animal",
          "myapi/classes/_classes_.horse",
          "myapi/classes/_classes_.snake",
          "myapi/modules/_interfaces_",
          "myapi/interfaces/_interfaces_.squareconfig"
        ]
      },
      {
        type: "category",
        label: "Classes",
        items: [
          "myapi/classes/_classes_.animal",
          "myapi/classes/_classes_.horse",
          "myapi/classes/_classes_.snake"
        ]
      },
      {
        type: "category",
        label: "Interfaces",
        items: ["myapi/interfaces/_interfaces_.squareconfig"]
      }
    ]
  }
};
