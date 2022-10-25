document.addEventListener("DOMContentLoaded", () => {
  let appendCSS = (css) => {
    let el = document.querySelector('style#__jstyle_css__')
    if (!el) {
      el = document.createElement('style')
      el.id = '__jstyle_css__'
      document.head.appendChild(el)
    }
    el.innerHTML += css + '\n\n'
  }
  // noinspection UnnecessaryLocalVariableJS
  let tags = new Proxy({}, {
    get: (target, tagName) => new Proxy({}, {
      set: (target1, property, value, receiver) => {
        let css = `${tagName} { ${property}: ${value}; }`
        console.log({css})
        appendCSS(css)
        return true
      }
    })
  })
  document.tags = window.tags = tags

  for (let el of document.querySelectorAll('style')) {
    if (el.type === 'text/javascript') {
      console.log(el)
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML = el.innerHTML
      el.parentNode.replaceChild(script, el)
    }
  }
  for (let el of document.querySelectorAll('[jstyle]')) {
    console.log(el)
    let css = el.getAttribute('jstyle')
    let tagName = el.tagName.toUpperCase()
    eval(`tags.${tagName}.${css}`)
  }
})
