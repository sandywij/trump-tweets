<script>
  import Heatmap from "./Heatmap.svelte";
  import Barchart from "./Barchart.svelte";
</script>

<style>
  .content {
    max-width: 850px;
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


  <section class="content">
          <div class="container text-center">
            <div class="row">
              <div class="col">

        <h1> Most retweeted tweet: 272k </h1>
      </div>
    </div>

      <div class="row">
        <div class="col">
          <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Why would Kim Jong-un insult me by calling me &quot;old,&quot; when I would NEVER call him &quot;short and fat?&quot; Oh well, I try so hard to be his friend - and maybe someday that will happen!</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/929511061954297857?ref_src=twsrc%5Etfw">November 12, 2017</a></blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        </div>

        <div class="col">
          <blockquote class="twitter-tweet" data-lang="en" data-conversation="none"><p lang="en" dir="ltr" >Well if it’s any consolation, that sounded like something an 8 year old might say.</p>&mdash; Ron Mayer (@korax23) <a href="https://twitter.com/korax23/status/929513534538399745?ref_src=twsrc%5Etfw">November 12, 2017</a></blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        <blockquote class="twitter-tweet" data-lang="en" data-conversation="none"><p lang="en" dir="ltr">Is this a joke? What is happening here? Did a 13 yr old girl tweet this?</p>&mdash; Kerry Souza (@bellaluna6) <a href="https://twitter.com/bellaluna6/status/929513959497101320?ref_src=twsrc%5Etfw">November 12, 2017</a></blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        </div>

      </div>

    </div>
  </section>