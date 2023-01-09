<script lang="ts">
  import { onMount } from "svelte"

  export let src: string
  export let title: string

  let iframeEl: HTMLIFrameElement

  const fitInner = () => {
    const innerPage = iframeEl.contentWindow?.document.body
    if (!innerPage) return
    innerPage.style.overflow = "hidden"
    iframeEl.style.width = innerPage.scrollWidth + "px"
    iframeEl.style.height = innerPage.scrollHeight + "px"
  }

  onMount(() => {
    const resizeObserver = new ResizeObserver(() => fitInner())
    resizeObserver.observe(document.documentElement)

    return () => {
      resizeObserver.unobserve(document.documentElement)
    }
  })
</script>

<div class="wrapper">
  <iframe {title} {src} bind:this={iframeEl} on:load={fitInner} />
</div>

<style>
  .wrapper {
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    display: flex;
    justify-content: center;
    padding: 2rem;
    overflow: hidden;
  }
  iframe {
    width: 100%;
    height: 100%;
    min-width: 80vw;
    border: 0;
  }
</style>
