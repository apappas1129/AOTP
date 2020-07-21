<template>
  <main role="main" class="row contact-us content container">
    <div class="row contact-us-container justify-content-center col-md-12">
      <div class="contact-us-card col-md-10">
        <div class="card col-md-12">
          <div class="contact-us-header">
            <h2>Hit us up!</h2>
          </div>
          <div class="contact-us-subheader">
            <p>Send us a message, we'll get back to you.</p>
          </div>
          <div class="contact-us-form">
            <form :action="mailToUri" method="post" enctype="text/plain">
              <div class="form-group">
                <input
                  class="col-md-12"
                  v-model="fullName"
                  type="text"
                  placeholder="Your full name"
                  name="name"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="col-md-12"
                  v-model="message"
                  placeholder="Let's Talk. Write your message here"
                  name="message"
                />
              </div>
              <div class="row col-md-12 contact-us-buttons justify-content-center">
                <div class="col-md-3">
                  <input class="btn col-md-12" type="submit" value="Send" />
                </div>
                <div class="col-md-3">
                  <input class="btn col-md-12" type="reset" value="Clear" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- <div class="mailing-address-container col-md-4">
        <div class="card col-md-12">
          <div class="row col-md-12">
            <div class="mailing-address-header">
              <h2>Mailing Address:</h2>
            </div>
            <ul>
              <li>Alchemy Studios,</li>
              <li>Opposite Coco Grande</li>
              <li>Hibbard Ave, Dumaguete,</li>
              <li>6200 Negros Oriental</li>
            </ul>
          </div>
          <div class="row email-us-container col-md-12">
            <div class="row email-us-header col-md-12">
              <h2>Email Us:</h2>
            </div>
            <a href="mailto:aotp@gmail.com">aotp@gmail.com</a>
          </div>
        </div>
      </div>-->
    </div>
  </main>
</template>

<script>
export default {
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Contact Us'
  },
  data() {
    return {
      fullName: '',
      message: ''
    };
  },
  computed: {
    mailToUri() {
      let link = 'mailto:aotpmusic@gmail.com';
      if (this.message || this.fullName) {
        link = link + '?';
        if (this.message) {
          link = link + 'body=' + encodeURI(this.message);
        }

        if (this.fullName) {
          link =
            link +
            encodeURI('\n\nWarm Regards\n' + this.fullName) +
            (this.message ? '&subject=' : 'subject=') +
            encodeURI(this.fullName + ' Booking');
        }
      }

      return link;
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3rem;
  padding-left: 3rem;
}

.contact-us {
  h2,
  h3,
  p {
    color: #fff;
  }
  margin: 80px auto 0 auto !important;
  padding-bottom: 5% !important;
  .contact-us-container {
    .contact-us-card {
      .card {
        background: #1f1f1f;
        padding: 3em 5em;
        .contact-us-form {
          form {
            .form-group {
              input {
                height: 5vh;
              }
              input::placeholder,
              textarea::placeholder {
                color: #bcbcbc;
              }
              textarea::placeholder {
                padding: 15px 0px;
              }
              textarea {
                min-height: 15vh;
              }
            }
            .contact-us-buttons {
              .btn {
                background: #c39d63;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .contact-us {
    .contact-us-container {
      .contact-us-card {
        .card {
          padding: 1em;
          .contact-us-form {
            form {
              .contact-us-buttons {
                div {
                  margin: 0.5em 0;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 790px) {
  .contact-us {
    margin-top: 0 !important;
  }
}
</style>