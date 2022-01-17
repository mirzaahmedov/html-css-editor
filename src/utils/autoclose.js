const brackets = {
  "{": "}",
  "[": "]",
  "(": ")",
  '"': '"',
  "'": "'",
}

const completions = {
  tag: { regex: /<([a-z0-9]+)>$/, pair: (match) => `</${match}>` },
}

export default function autoclose(event) {
  const index = event.target.selectionStart
  const char = event.nativeEvent.data

  const update_value = (pair) => {
    const prefix = event.target.value.slice(0, index)
    const suffix = event.target.value.slice(index)
    event.target.value = prefix + pair + suffix
  }
  const reset_cursor = (pair) => {
    event.target.selectionStart -= pair.length
    event.target.selectionEnd -= pair.length
  }

  if (char === ">") {
    const match = event.target.value
      .slice(0, index)
      .match(completions.tag.regex)
    if(!match) return
    const pair = completions.tag.pair(match[1])
    update_value(pair)
    reset_cursor(pair)
  } else if (char in brackets) {
    const pair = brackets[char]
    update_value(pair)
    reset_cursor(pair)
  }
}
