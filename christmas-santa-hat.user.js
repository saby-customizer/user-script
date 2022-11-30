// ==UserScript==
// @name          SABY Christmas - Santa Hat
// @namespace     saby-customizer
// @version       2.0.2
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
    .NavigationPanels-Sidebar__logo:after {
      content: '';
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAzFBMVEUAAADP2NzP2N3T09PxbW3/wQbP2N30Qjb/vwfQ2NzR0tXP2Nz/wQf1Qzb/wQj0Qzf1QzfQ2dv/wQf0QzbP2NzP2Nz0Qzb0QzbP2Nz5bibRz9P1Qjf1Qzb0RDbtXVP0QzXP2NvO2dzzQzbP19v0RDbQ19z1QjbO2dvzQzfQ193yQzb2QjTP2d33QDjO1t7M1uD0QDXP2Nz0Qzb/wQfTy838phDYtLTraF/tYVjvWE7ySz7eNTH+uwnRz9LVwsPbpqXglZLkOTP3aCjmXSUWswnNAAAAMXRSTlMA2Y4LBMjCkEhC/vby2Mqje3FK9fHw7+fm1cvEw7Wqp6WThYB1bGRdVFI9NjUgHxkY7vQQvQAAAMhJREFUKM9l0NW6wjAQReHdUqQ4HMXdNcHd3v+doEmbTOC/XNMm8wWSk/0rZcq/lRFMTo37mjBkuBKlvcuJrO6TL04N1SDKDSlH5lj4uLrz20FP2qLnF56H7pt13LJDQFoMVqpfmccKISkGRz/vL0yyEaZ/7NfMZyEmBgXRd2cW+PG2SqbzYuPtkikRSH1vnTjTXEjz1/cn0nMIpHbknMQASpX0/zG0Irl3Rrqre8MBkVO9BUMv6DZM04TsdbzrBI/6wY18WzbpT303P1O/hzfhAAAAAElFTkSuQmCC') !important;
      background-repeat: no-repeat;
      background-size: 18px;
      height: 18px;
      width: 18px;
      position: absolute;
      top: 2px;
      left: 60px;
      transform: rotate(23deg);
    }
    .NavigationPanels-SchemeSelector .NavigationPanels-Sidebar__logo:after {
      display: none;
    }
  `

  document.head.append(style)
})(
  // @ts-ignore
  unsafeWindow
)
