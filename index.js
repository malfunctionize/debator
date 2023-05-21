module.exports = {
  run: [{
    "uri": "https://github.com/malfunctionizie/lla.git/index.js",
    "method": "run",
    "params": {
      "message": {
        "p": "### Instruction\n\nWrite a brief controversial opinion.\n\n### Response\n\n",
        "m": "../models/stable-vicuna/13b_q4_0.bin",
        "n": 256
      }
    },
    "returns": "local.message"
  }, {
    "uri": "https://github.com/malfunctionizie/lla.git/index.js",
    "method": "run",
    "params": {
      "message": {
        "p": "### Instruction\n\nExplain why you disagree with the following statement:\n\n${local.message}. Just explain while including the original message coherently.\n\n### Response\n\n",
        "m": "../models/stable-vicuna/13b_q4_0.bin",
        "n": 256
      }
    },
    "returns": "local.message"
  }, {
    "method": "push",
    "params": {
      "self": {
        "items": "{{local.message}}"
      }
    }
  }, {
    "method": "goto",
    "params": {
      "index": 1
    }
  }]
}
