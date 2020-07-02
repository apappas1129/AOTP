<template>
  <div style="margin-top:80px; overflow-y: auto">
    <div class="row">
      <div class="col-12 about-wrapper">
        <div style="display: inline-flex; margin: 0px auto; max-width: 1100px;">
          <div>
            <h1>about us</h1>
            <div style="max-height: 300px; overflow-y: auto">
              <p>
                <a href="#">All Over The Place</a> (
                <i>aka</i> AOTP) is a modern contemporary band from Dumaguete city.
                <br />
                <br />The 6 piece band comprises:
                <br />
                <a href="#">Sam Akins</a> (Vocals),
                <a href="#">Pablo Punzalan</a> (Guitar),
                <a href="#">Paolo Victor Ramos</a> (Bass),
                <br />
                <a href="#">JC Macahig</a> (Keyboard),
                <a href="#">Jed Aromin</a> (Drums)
                and
                <a href="#">JJ Macahig</a> (Guitar).
                <br />
                <br />The band was put together for a battle of the bands competition held in August 2018 at
                <a
                  class="red"
                  target="_blank"
                  href="https://www.google.com/maps/place/Silliman+University/@9.3132404,123.3046366,17z/data=!3m1!4b1!4m5!3m4!1s0x33ab6ee24378e605:0x69488c043ae473cd!8m2!3d9.3132404!4d123.3068253"
                >
                  <i class="las la-map-marker map"></i> Silliman University
                </a>.
                They gained recognition after winning the contest and then got to open up for Rock Band
                <a
                  class="orange"
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/IV_of_Spades"
                >IV Of Spades</a>
                on their visit to
                <a
                  class="red"
                  target="_blank"
                  href="https://www.google.com/maps/place/Dumaguete,+Negros+Oriental/@9.2957304,123.2470476,13z/data=!3m1!4b1!4m5!3m4!1s0x33ab6edb788ea0f7:0xd79dfe9b5bfc37fb!8m2!3d9.3068402!4d123.3054467"
                >Dumaguete City</a>
                a few weeks after.
                They also got to play alongside
                <a
                  class="orange"
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Ben%26Ben"
                >Ben&Ben</a>
                for the first ever
                <a
                  target="_blank"
                  href="https://twitter.com/hashtag/SILLIMUSIKA?src=hashtag_click"
                >Sillimusika</a> event in 2019,
                <a
                  class="orange"
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Parokya_ni_Edgar"
                >Parokya Ni Edgar</a>
                at the annual
                <a
                  target="_blank"
                  href="http://dumaguetecity.gov.ph/festivals/"
                >Buglasan Festival</a> in Dumaguete
                and
                <a
                  class="orange"
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Silent_Sanctuary"
                >Silent Sanctuary</a>
                during Dumaguete's leg of Coke Studio.
              </p>
            </div>
          </div>
          <div class="about-main-photo">
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="the-band-wrapper">
        <h1>the band</h1>
        <band-grid></band-grid>
      </div>
    </div>
  </div>
</template>

<script>
import BandGrid from '@/components/BandGrid.vue';

export default {
  name: 'About',
  components: { BandGrid }
}

</script>

<style lang="scss" scoped>
p {
  padding-top: 2px;
}
.the-band-wrapper {
  width: 100%;
  text-align: left;
  margin: 0 auto;
  max-width: 1100px;
}

.about-wrapper {
  overflow-y: auto;
  text-align: left;
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
}

.about-main-photo {
  padding: 1rem 1rem 3rem 1rem;
  height: calc(100vh - 110px);
  width: calc(100vh - 110px);
  max-width: 400px;
  max-height: 400px;
  min-width: 400px;
  min-height: 400px;
  div {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background-size: cover;
    background-image: url('../assets/mini-gallery/s3-1.jpg');
    background-position-x: 40%;
    box-shadow: 0px 15px 35px -5px rgba(142, 149, 157, 0.32);
  }
}

h1 {
  font-size: 3rem;
}

h1,
h2,
h3 {
  font-weight: bolder;
  font-family: 'Questrial', sans-serif;
  font-style: normal;
  letter-spacing: 4px;
  color: #333;
  margin-bottom: 1.4rem;
}

a::before,
a::after {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00b989;
  content: '';
  opacity: 0;
  -webkit-transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
    -webkit-transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  -moz-transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
    -moz-transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  transform: translateY(-10px);
}

a::before {
  top: 0;
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  transform: translateY(-10px);
}

a::after {
  bottom: 0;
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  transform: translateY(10px);
}

a:hover,
a:focus {
  color: #00b989;
}

a.red:hover,
a.red:focus {
  color: #ff6961;
}
a.red::before,
a.red::after {
  background: #ff6961;
}
a.orange:hover,
a.orange:focus {
  color: #ffb347;
}
a.orange::before,
a.orange::after {
  background: #ffb347;
}

a {
  padding: 5px 0;
  color: #2c3e50;
  font-weight: 700;
  text-shadow: none;
  -webkit-transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  -moz-transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  position: relative;
  text-decoration: none;
}

a:hover::before,
a:focus::before,
a:hover::after,
a:focus::after {
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  transform: translateY(0px);
}

i.map {
  font-weight: bold;
  font-size: 22px;
  letter-spacing: -6px;
  position: relative;
  top: 2px;
}
</style>