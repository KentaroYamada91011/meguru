<template>
  <div>
    <no-ssr>
      <div class="ShareButtons">
        <div>
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        <div>
          <!-- facebookシェアボタン -->
          <div id="fb-root"></div>
          <span ref="unique-parameter-value" class="facebook-share-button fb-share-button" data-size="small" data-layout="button" data-mobile-iframe="true">
          </span>
        </div>
        <!-- LINEシェアボタン  -->
        <!-- <div class="line-it-button" data-lang="ja" data-type="share-a" data-ver="3" data-url="https://4792f276.ngrok.io#lineitbutton" data-color="default" data-size="small" data-count="false" style="display: none;"></div>
        <script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script> -->
      </div>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',
  mounted () {
    ;(function (d, s, id) {
      window.FB = null
      var js
      var fjs = d.getElementsByTagName(s)[0]
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.12'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }
}
</script>

<style scoped>
.ShareButtons {
  display: flex;
}

.ShareButtons > div {
  margin-right: 8px;
}

.fb-share-button {
  line-height: 0 !important;
}

.fb_iframe_widget_fluid {
    display: block;
}
</style>
