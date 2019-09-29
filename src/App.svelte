<script>
  import Heatmap from "./Heatmap.svelte";
  import Barchart from "./Barchart.svelte";
</script>

<style>
  .content {
    max-width: 800px;
    width: 100%;
    margin: 0px auto;
  }


  .chart {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>

<article>
  <section >
  <h2 class="content">When does Trump tweet?</h2>
    <Heatmap />
  </section>
  <section class="content">
    <h2>How often does Trump tweets?</h2>
    <div class="chart">
      <Barchart
        title="Tweets by Month"
        data={[75, 152, 142, 155, 149, 210, 245, 264, 292, 296, 260, 44]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        comment={'<p>In 2017, @realDonaldTrump tweeted the most in the month of <strong>October.</strong></p>'} />

      <Barchart
        title="Average Daily Tweets"
        data={[6.2, 5.4, 4.5, 5.1, 4.8, 7, 7.9, 8.5, 9.7, 9.5, 8.6, 6.2]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        comment={'<p>His number of daily tweets almost doubled between May and June.</p>'} />

    </div>
  </section>

</article>
