<script>
import {onMount} from 'svelte';
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";


  export let data;
  export let labels;
  export let title;
  export let comment;

  let svg;
  let width = 500;
  let height = 500;
  

const padding = { top: 20, right: 40, bottom: 40, left: 20 };

  $: length = data.length;
  $: barWidth = width / length;
  $: yScale = scaleLinear()
            .domain([0,max(data)])
            .range([padding.top, 0.9*height-padding.bottom ]);

  onMount(resize);

  function resize() {
    ({ width, height } = svg.getBoundingClientRect());
    
  }
</script>

<style>


  svg {
    width: 100%;
    height: 100%;
  }

  .chart-container{
      display: flex;
      flex-direction: column;
      min-height: 300px;
      height: 50vh;
      width: auto;
      flex: 1 1 300px;
      padding: 1em;
  }
</style>

<svelte:window on:resize={resize} />

<div class="chart-container">
    <h3>{title}</h3>

  <svg bind:this={svg}>

    <g transform="translate({0.1 * barWidth}, 10)">
      {#each data as d, i}
        <g>
            <rect
              width={0.6 * barWidth}
              height={yScale(d)}
              y={height- padding.bottom - yScale(d)}
              x={barWidth * i}
              fill="#55acee" />


          <text
            fill="#757575"
            font-size="12"
            font-family="Roboto"
            x={(i + 0.3) * barWidth}
            y="{height-14}"
            color="#757575"
            text-anchor="middle">
            {labels[i]}
          </text>
          
          <text
            fill="#757575"
            font-size="12"
            font-family="Roboto"
            x={(i + 0.3) * barWidth}
            y={height- padding.bottom - yScale(d)-6}
            text-anchor="middle">
            {d}
          </text>

        </g>
      {/each}
    </g>

  </svg>
  {@html comment}
</div>