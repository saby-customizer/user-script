// ==UserScript==
// @name          SABY Christmas Tree Arrow
// @namespace     saby-customizer
// @version       2.0.1
// @author        IgorNovozhilov
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @homepage      https://saby-customizer.github.io
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR42s3TOQvCQBAF4HjggWcnaCF4K1YiaQTvwhiiphBBsBAsLcT/X/gW3sIoum6ZgQ8yJDM77G4cJ2qxgrTIO6QjB3NTgw1kRN4jHXlYmxqcoS7yEelowfZXsRptCguofpmgCQGEnCIli2uwFPkN4qJBEk7i/QEasoH64AJZTqDHVE3HfPZZNIAra95CbdAdhpBgscvVJhADD3amTfQ4RYWFOh5Q5iK+7TEG3PWQ5291jHtOoOMIXZEX/k3whOLHReqLvMRFrK9ym+RVnkXr73sBExASEE+L5FQAAAAASUVORK5CYII=
// @icon64        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAolBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgESU6AAAANXRSTlMAoCAkHAUCCTzsD26NC/v4262dhXESvZN7GMp4UCHnxbekWFNLNSnx1pdjXkY5LuDOQdF/aPChBGIAAAICSURBVFjD7ZbZjqMwEEWLpMEsYQskBBKy71unl/v/vzajxoMhJkhkNK1pifNkm9Kh7ALb1NIiYw7N8kAYlvuDoV0r6KBTHlCUcr+Ll1bw8wS+/5eC/b6ZQB2p5YHFotxnPKCaOLTIsuLHaxBbJwqtwaO3By7m5MMN1GoB6znwaf47gFEFbIhDl4i2CoasSmAmiNIsYFYlWLhn3po4SpVg7qx5a6WQzBuOeduCLgsmsArTlZfS9zTx+HUhC4aFAJovJMGuR4LIkASqG5Cgb0hbEUIShDDvBS84kmAMdl9DjOoFMT5rBfSqSBmWBNouIoEypXsOhnDaRj9X5S3fsEXA7iAJrhCL1HO2fGKbOL7yil0gUoicLkkEGGlZsh98PezAwGoJ44Nl2jwgwJhktAi3JSO2TJBVNPXgr1R14mOffgX0MVvZZJ5uPEBivcc7jeFN+EQMnX+khpcVZekhIY8HVKKfyd5ovMMGxLk4B56lvqG3i0aPGUwrf/ae+2c4LgTUb2nrRC1uZKvGe2LPLWZqjBsLol3pOx01FoxhimHVPTUWbLAsFBidxgK6vat5Asmcmgt0p6/x6ved6xMC+sRs82Wa4fTc0TaZYkaUYLp+9my0j9b5HB7Zdx7vW3TrBVektQIder3ggm1DgTyFfytIkf5vl6zvFsjXfcuSr/stLRK/AOfYMYlvYTomAAAAAElFTkSuQmCC
// @supportURL    https://github.com/saby-customizer/saby-customizer.github.io/issues
// @include       https://sbis.ru/*
// @include       https://*.sbis.ru/*
// @include       https://saby.ru/*
// @include       https://*.saby.ru/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {
  const style = document.createElement('style')

  style.id = 'saby-customizer__christmas-tree'
  style.type = 'text/css'
  style.innerHTML = `
    .NavigationPanels-Counter__arrow>.NavigationPanels-Counter__arrow_icon {
      content: '';
      width: 12px;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAt1BMVEUAAACNxU6QyFHXWFSUzFWf12Gf1mGf1mCW0Fia01yT0V2k21uRWzSLfjzTY1eGUCuf12Gf1mHlXl+c012RyVOf1mGf1mGTy1WLVjCUy1SSylSQkUSRlUaTy1WpqViASiWwu2DkUFmZ0F6TyVie1mGf12Cf1mGLxEyRyVKa0luQyFHuVGGut17ValnhRlSPx1CwumHVfmGkzWCzsWCdz128nV3qT128k1rdTVSfs1O4hVGom1CLfjxBmj2XAAAAJnRSTlMA/Oj63rmMXEIdEAf8+/rx6ejj3sjCtaypmJSOhHt0aFpWPDQyIP69pQAAAACPSURBVBjTTY7VEoMwFEQJ0Bapu3s3gtX9/7+rlITAebp7ZnbuGhLXHnhGiU0zRKUsrPsJqBZ58omOAGpamJQjZaiFbwrGhF1URpQB52c3zwv6r4RxsFaCUIqU26WjxNSKrgDnvfzNMg5ehCSCOTLvyPuBjPZBrUggUfP7lMmo13vOdt74zvaub2hWrfpYXj8PvBDkRu1UTgAAAABJRU5ErkJggg==') !important;
      background-repeat: no-repeat;
      background-position-x: -2px;
    }

    .NavigationPanels-Counter__arrow>.NavigationPanels-Counter__arrow_icon polygon {
      display: none;
    }

    .NavigationPanels-Counter__arrow:hover>.NavigationPanels-Counter__arrow_icon {
      transform: rotate(25deg);
    }
  `

  document.head.appendChild(style)
})(
  // @ts-ignore
  unsafeWindow
)
