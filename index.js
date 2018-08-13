module.exports =  {
  "verifyConditions": [
    "@semantic-release/github",
    "@semantic-release/npm"
  ],
  "prepare": [
    {
      "path": "@semantic-release/changelog",
      "changelogFile": "CHANGELOG.md"
    },
    {
      "path": "@semantic-release/git",
      "assets": [
        "package.json",
        "CHANGELOG.md"
      ],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }
  ],
  "publish": [
    "@semantic-release/github"
  ],
  "success": [
    "@semantic-release/github"
  ],
  "fail": [
    "@semantic-release/github"
  ]
}