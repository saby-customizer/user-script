// ==UserScript==
// @name          SABY Christmas - Snow In Menu
// @namespace     saby-customizer
// @version       2.0.11
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
  const sidebarCls = '.NavigationPanels-Sidebar__container'
  const snowflakeCnt = document.body.clientHeight * 0.15 ^ 0
  const snowflakeStrt = snowflakeCnt * 0.05 || 1
  const snowflakeTimer = 1000
  const brW = 200
  const steps = document.body.clientHeight / (brW * 1.5) ^ 0
  const step = 100 / steps
  let hideCount = Math.random() * snowflakeCnt / 2 ^ 0
  let snowflakeCntInitial = 0

  if (document.querySelector(sidebarCls)) {
    const sidebar = document.querySelector(sidebarCls)
    snowflakeCntInitial = sidebar.children.length
  }

  style.type = 'text/css'
  style.innerHTML = `
    .NavigationPanels-Accordion__title_level-1::after, .NavigationPanels-Accordion__title_level-2_active::after {
      background: none !important;
    }
    .NavigationPanels-Sidebar__snowflake {
      display: none !important;
    }
    .NavigationPanels-Accordion__item_substrate_accent,
    .NavigationPanels-Accordion__item_activeMenu > .NavigationPanels-Accordion__item_substrate,
    .ws-is-hover .NavigationPanels-Accordion__item:hover > .NavigationPanels-Accordion__item_substrate {
      opacity: .6;
    }
    .NavigationPanels-Accordion__item_activeMenu> .NavigationPanels-Accordion__item_substrate_accent + .NavigationPanels-Accordion__item_substrate {
      opacity: 0;
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

  for (let snowID = 1; snowID <= snowflakeCnt; snowID++) {
    const timeS = (document.body.clientHeight * 0.07 + Math.random() * document.body.clientHeight * 0.06) ^ 0
    const timeE = (document.body.clientHeight * 0.06 + Math.random() * document.body.clientHeight * 0.07) ^ 0
    style.innerHTML += `
    .saby-customizer__snowflake-in-menu:nth-child(${snowID + snowflakeCntInitial}) {
      animation: saby-customizer__snowflake-in-menu-${snowID + snowflakeCntInitial} ${timeS}s -${timeE}s linear infinite;
    }
    @keyframes saby-customizer__snowflake-in-menu-${snowID + snowflakeCntInitial}  {
      from {
        opacity: ${0.1 + Math.random() * 0.4};
        transform: translate(${Math.random() * brW ^ 0}px, -8px) scale(${0.25 + Math.random() * 0.75});
      }
    `
    for (let idx = 0; idx < steps; idx++) {
      const percent = step * idx + step / 3 + Math.random() * step / 3
      style.innerHTML += `
      ${percent}% {
        opacity: ${0.1 + Math.random() * 0.4};
        transform: translate(${Math.random() * brW ^ 0}px, ${percent}vh) scale(${0.25 + Math.random() * 0.75});
      }
    `
    }
    style.innerHTML += `
      to {
        opacity: ${0.1 + Math.random() * 0.4};
        transform: translate(${Math.random() * brW ^ 0}px, 100vh) scale(${0.25 + Math.random() * 0.75});
      }
    }
  `
  }

  document.head.append(style)
  setInterval(() => {
    if (document.querySelector(sidebarCls)) {
      const sidebar = document.querySelector(sidebarCls)
      const snowflakes = sidebar.querySelectorAll('.saby-customizer__snowflake-in-menu')

      if (snowflakes.length < snowflakeCnt) {
        const snowflake = document.createElement('div')

        snowflake.classList.add('saby-customizer__snowflake-in-menu')

        if (snowflakes.length === 0) {
          for (let i = 0; i < snowflakeStrt; i++) {
            sidebar.append(snowflake.cloneNode(true))
          }
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
    }
  }, snowflakeTimer)

})(
  // @ts-ignore
  unsafeWindow
)
