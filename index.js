module.exports = {
  run: [{
    "uri": "https://github.com/malfunctionize/llama.git/index.js",
    "method": "run",
    "params": {
      "message": {
        "p": "### Instruction\n\nWrite a brief controversial opinion.\n\n### Response\n\n",
        "m": "../models/stable-vicuna/13b_q4_0.bin",
        "n": 256
      }
    },
    "queue": true,
    "returns": "local.message"
  }, {
    "uri": "https://github.com/malfunctionize/llama.git/index.js",
    "method": "run",
    "params": {
      "message": {
        "p": "### Instruction\n\nExplain why you disagree with the following statement:\n\n{{local.message}}. Just explain while including the original message coherently.\n\n### Response\n\n",
        "m": "../models/stable-vicuna/13b_q4_0.bin",
        "n": 256
      }
    },
    "queue": true,
    "returns": "local.message"
  }, {
    "method": "set",
    "params": {
      "self": {
        "db.json": {
          "items": "{{self.db.items.concat(local.message)}}"
        }
      }
    }
  }, {
    "method": "goto",
    "params": {
      "index": 1
    }
  }]
}
