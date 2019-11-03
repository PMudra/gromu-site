/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const moment = require("moment-timezone")
moment.locale("de")

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === "matches") {
    createNodeField({
      node,
      name: "localTime",
      value: moment(node.utcDate)
        .tz("Europe/Berlin")
        .format("LT"),
    })
    createNodeField({
      node,
      name: "localDate",
      value: moment(node.utcDate)
        .tz("Europe/Berlin")
        .format("dd. D.M."),
    })
    createNodeField({
      node,
      name: "scheduled",
      value: moment(node.utcDate).hour() !== 0,
    })
  }
}
