// ==UserScript==
// @name          SABY Christmas Tree
// @namespace     saby-customizer
// @version       2.0.3
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

  style.type = 'text/css'
  style.innerHTML = `
    .NavigationPanels-Accordion__title_level-1::after, .NavigationPanels-Accordion__title_level-2_active::after {
      background: none !important;
    }

    .NavigationPanels-Sidebar {
      background-image: url('data:image/png;base64,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') !important;
      background-repeat: no-repeat;
      background-position-y: calc(100% - 6px);
      background-position-x: center;
    }
  `

  document.head.append(style)
})(
  // @ts-ignore
  unsafeWindow
)
