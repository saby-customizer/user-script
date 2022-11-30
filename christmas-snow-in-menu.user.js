// ==UserScript==
// @name          SABY Christmas - Snow In Menu
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
  const sidebarCls = '.NavigationPanels-Sidebar'
  const snowflakeCnt = 100
  let hideCount = Math.random() * snowflakeCnt / 2 ^ 0

  style.type = 'text/css'
  style.innerHTML = `
    .NavigationPanels-Accordion__title_level-1::after, .NavigationPanels-Accordion__title_level-2_active::after {
      background: none !important;
    }

    .saby-customizer__snowflake-in-menu {
      position: absolute;
      width: 8px;
      height: 8px;
      background: white;
      border-radius: 50%;
      box-shadow: 0px 0px 4px white;
    }
    .saby-customizer__snowflake-in-menu--hide {
      display: none;
    }
  `

  for (let index = 1; index <= snowflakeCnt; index++) {
    const opacity = 0.1 + Math.random() * 0.4
    const scale = 0.25 + Math.random() * 0.75
    const percent = 30 + Math.random() * 50
    const position = Math.random() * 200 ^ 0
    const positionS = Math.random() * 200 ^ 0
    const positionE = Math.random() * 200 ^ 0
    const timeS = 30 + Math.random() * 20 ^ 0
    const timeE = 20 + Math.random() * 30 ^ 0
    style.innerHTML += `
    .saby-customizer__snowflake-in-menu:nth-child(${index}) {
      opacity: ${opacity};
      transform: translate(${position}px, -8px) scale(${scale});
      animation: saby-customizer__snowflake-in-menu-${index} ${timeS}s -${timeE}s linear infinite;
    }
    @keyframes saby-customizer__snowflake-in-menu-${index} {
      ${percent}% {
        transform: translate(${positionS}px, ${percent}) scale(${scale});
      }
      to {
        transform: translate(${positionE}px, 100vh) scale(${scale});
      }
    }
  `
  }



  if (document.querySelector(sidebarCls)) {
    document.head.append(style)
    setInterval(() => {
      const sidebar = document.querySelector(sidebarCls)
      const snowflakes = sidebar.querySelectorAll('.saby-customizer__snowflake-in-menu')

      if (snowflakes.length < snowflakeCnt) {
        const snowflake = document.createElement('div')

        snowflake.classList.add('saby-customizer__snowflake-in-menu')

        if (snowflakes.length === 0) {
          sidebar.prepend(snowflake)
        } else {
          snowflakes[snowflakes.length - 1].after(snowflake)
        }
      } else {
        if (hideCount) {
          snowflakes[Math.random() * (snowflakeCnt - 1) ^ 0].classList.add('saby-customizer__snowflake-in-menu--hide')
          hideCount--
        } else {
          const hSnowflakes = sidebar.querySelectorAll('.saby-customizer__snowflake-in-menu--hide')

          if (hSnowflakes.length) {
            hSnowflakes[Math.random() * (hSnowflakes.length - 1) ^ 0].classList.remove('saby-customizer__snowflake-in-menu--hide')
          } else {
            hideCount = Math.random() * snowflakeCnt / 2 ^ 0
          }
        }
      }
    }, 1000)
  }
})(
  // @ts-ignore
  unsafeWindow
)
