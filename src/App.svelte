<script>
  import Heatmap from "./Heatmap.svelte";
  import Barchart from "./Barchart.svelte";
  import CircleMap from "./CircleMap.svelte";
</script>

<style>

  header {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: radial-gradient(
      circle,
      #0d49a1,
      #075fb9,
      #0076d1,
      #008ee8,
      #00a6ff
    );
    color: white;
    height: 70vh;
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }
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

  img {
    max-width: 100%;
    max-height: 100%;
  }

</style>

<header>
  <h1 style="font-size: 2rem;;">Year in President Trump's Tweets</h1>
  <p class="lead">
    As President, @realDonaldTrump has tweeted
    <u>
      <b>2284*</b>
    </u>
    times in 2017.
  </p>
  <p>*last updated December 11, 2017</p>

</header>
<section>
  <div class="content">
    <h2>When does Trump tweet?</h2>
    <p>Looking at all his tweets, it looks like he hardly tweets at 2pm</p>
  </div>
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

<section class="content" id="retweeting">
  <h2>Retweeting</h2>
  <p class="lead">Who was @realDonaldTrump retweeting this year?</p>

  <p>
    @realDonaldTrump retweeted
    <b>284</b>
    tweets this year.
  </p>
  <p>
    @realDonaldTrump retweeted @foxandfriends
    <b>46</b>
    times.
  </p>
  <CircleMap />

</section>

<section class="content">
  <div class="text-center">
    <div class="row">
      <div class="col">

        <h1>Most retweeted tweet: 272k</h1>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <blockquote class="twitter-tweet" data-lang="en">
          <p lang="en" dir="ltr">
            Why would Kim Jong-un insult me by calling me &quot;old,&quot; when
            I would NEVER call him &quot;short and fat?&quot; Oh well, I try so
            hard to be his friend - and maybe someday that will happen!
          </p>
          &mdash; Donald J. Trump (@realDonaldTrump)
          <a
            href="https://twitter.com/realDonaldTrump/status/929511061954297857?ref_src=twsrc%5Etfw">
            November 12, 2017
          </a>
        </blockquote>

      </div>

      <div class="col">
        <blockquote
          class="twitter-tweet"
          data-lang="en"
          data-conversation="none">
          <p lang="en" dir="ltr">
            Well if it’s any consolation, that sounded like something an 8 year
            old might say.
          </p>
          &mdash; Ron Mayer (@korax23)
          <a
            href="https://twitter.com/korax23/status/929513534538399745?ref_src=twsrc%5Etfw">
            November 12, 2017
          </a>
        </blockquote>

        <blockquote
          class="twitter-tweet"
          data-lang="en"
          data-conversation="none">
          <p lang="en" dir="ltr">
            Is this a joke? What is happening here? Did a 13 yr old girl tweet
            this?
          </p>
          &mdash; Kerry Souza (@bellaluna6)
          <a
            href="https://twitter.com/bellaluna6/status/929513959497101320?ref_src=twsrc%5Etfw">
            November 12, 2017
          </a>
        </blockquote>

      </div>

    </div>

  </div>
</section>
