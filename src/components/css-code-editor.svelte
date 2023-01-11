<script lang="ts">
  import Prism from "prismjs"
  import Prettier from "prettier/esm/standalone.mjs"
  // @ts-ignore
  import parserCss from "prettier/esm/parser-postcss.mjs"
  import { onMount } from "svelte"

  export let defaultCode = ""
  let highlightEl: HTMLElement
  let textareaEl: HTMLTextAreaElement
  let styleEl: HTMLStyleElement

  const updateCode = (text: string) => {
    // const escapedCode = formattedCode
    //   .replace(new RegExp("&", "g"), "&")
    //   .replace(new RegExp("<", "g"), "<")
    const formattedCode = Prettier.format(text, { parser: "css", plugins: [parserCss] })
    styleEl.innerHTML = formattedCode ?? ""
    textareaEl.innerHTML = formattedCode ?? text
    highlightEl.innerHTML = formattedCode ?? text
    Prism.highlightElement(highlightEl)
    if (formattedCode) {
      const rowCount = formattedCode.split("\n")?.length + 1
      textareaEl.style.height = rowCount * 1.5 + "em"
    }
  }

  onMount(() => {
    updateCode(defaultCode)
  })
</script>

<div class="container">
  <textarea
    bind:this={textareaEl}
    on:input={e => updateCode(e.currentTarget.value)}
    spellcheck="false"
    class="same-layer"
  />
  <pre aria-hidden="true" class="same-layer">
    <code class="language-css" bind:this={highlightEl} />
  </pre>
  <style bind:this={styleEl}>
  </style>
</div>

<style>
  .container {
    display: grid;
  }

  .same-layer {
    grid-area: 1 / 1;
    overflow: hidden;
    white-space: nowrap;
    line-height: 1.5;
    font-size: 16px;
    padding: 1em;
    margin: 0.5em 0;
    width: 100%;
    box-sizing: border-box;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  textarea {
    resize: none;
    height: 100%;
    position: relative; /** z-index有効化 */
    z-index: 1;
    color: transparent;
    background: transparent;
    caret-color: white;
  }

  code {
    display: block;
    width: 100%;
  }
</style>
