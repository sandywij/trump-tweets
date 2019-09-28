<script>
  import { scaleQuantile } from "d3-scale";
  import { max } from "d3-array";
  import * as d3 from "d3";

  import data from "./heatmapdata.js";

  const gridSize = {width:32, height:32};

  const reformat = d3
    .nest()
    .key(d => {
      return d.hour;
    })
    .key(d => {
      return d.day;
    })
    .rollup(v => {
      return {
        value: v[0].value
      };
    })
    .object(data);

  let width;
  let height;

  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    hours = [
      "12am",
      "1am",
      "2am",
      "3am",
      "4am",
      "5am",
      "6am",
      "7am",
      "8am",
      "9am",
      "10am",
      "11am",
      "12pm",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
      "6pm",
      "7pm",
      "8pm",
      "9pm",
      "10pm",
      "11pm"
    ],
    legendElementWidth = gridSize * 2,
    buckets = 7,
    colors = [
      "#ffffcc",
      "#c7e9b4",
      "#7fcdbb",
      "#41b6c4",
      "#1d91c0",
      "#225ea8",
      "#0c2c84"
    ];

  const colorScale = scaleQuantile()
    .domain([
      -1,
      buckets - 1,
      max(data, function(d) {
        return d.value;
      })
    ])
    .range(colors);
</script>

<style>
  #heatmap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    box-sizing: border-box;
  }


  text {
      font-size: 10px;
  }

  svg {
      width: 90%;
  }

  @media only screen and (max-width: 800px) {
    #heatmap {
      flex-direction: column;
    }

    .group {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div id="heatmap">


  <svg width={width} 
            preserveAspectRatio="xMidYMid meet"
            viewbox="0 0 800 450"
            xmlns="http://www.w3.org/2000/svg">
<g transform="translate(0, {gridSize.height})">
{#each days as day, i}
<text y={(i+0.4)*gridSize.height}>{day}</text>
{/each}
</g>

<g transform="translate(0, 20)">
{#each hours as hour, i}
<text text-anchor="middle" x={(i+ 1)*gridSize.width+ 10} y={0}>{hour}</text>
{/each}
</g>

<g transform="translate({gridSize.width}, {gridSize.height})">
{#each data as d}
<path 
stroke-width="10"
stroke="black"
fill={colorScale(d.value)}
transform="translate({(d.hour) * gridSize.width} , {d.day * gridSize.height}) scale(0.012)"
d="m 1999.9999,192.4 c -73.58,32.64 -152.67,54.69 -235.66,64.61 84.7,-50.78 149.77,-131.19 180.41,-227.01 -79.29,47.03 -167.1,81.17 -260.57,99.57 C 1609.3399,49.82 1502.6999,0 1384.6799,0 c -226.6,0 -410.328,183.71 -410.328,410.31 0,32.16 3.628,63.48 10.625,93.51 -341.016,-17.11 -643.368,-180.47 -845.739,-428.72 -35.324,60.6 -55.5583,131.09 -55.5583,206.29 0,142.36 72.4373,267.95 182.5433,341.53 -67.262,-2.13 -130.535,-20.59 -185.8519,-51.32 -0.039,1.71 -0.039,3.42 -0.039,5.16 0,198.803 141.441,364.635 329.145,402.342 -34.426,9.375 -70.676,14.395 -108.098,14.395 -26.441,0 -52.145,-2.578 -77.203,-7.364 52.215,163.008 203.75,281.649 383.304,284.946 -140.429,110.062 -317.351,175.66 -509.5972,175.66 -33.1211,0 -65.7851,-1.949 -97.8828,-5.738 181.586,116.4176 397.27,184.359 628.988,184.359 754.732,0 1167.462,-625.238 1167.462,-1167.47 0,-17.79 -0.41,-35.48 -1.2,-53.08 80.1799,-57.86 149.7399,-130.12 204.7499,-212.41"
/>
{/each}
</g>
</svg>

</div>
