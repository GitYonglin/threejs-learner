<script lang="ts">
  import { onMount } from "svelte";
  import { TEngine, TEngine2 } from "$lib/TEngine";
  let domroot: HTMLElement;

  onMount(async () => {
    console.log(domroot);
    let tl = new TEngine(domroot);
  });
</script>

<h1 style="position: fixed;top:0;left:0;">three js test</h1>
<div bind:this={domroot} class="three-canvas"></div>

<style>
  :global(html, body) {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .three-canvas {
    width: 100%;
    height: 100%;
  }
</style>
