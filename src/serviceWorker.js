const isLocalhost = Boolean(
  window.location.hostname === 'localhost'
  // [::1] is the IPv6 localhost address.
  // eslint-disable-next-line no-tabs
	|| window.location.hostname === '[::1]'
  // eslint-disable-next-line no-tabs
	// 127.0.0.0/8 are considered localhost for IPv4.
  || window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  // eslint-disable-next-line no-tabs
  )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // eslint-disable-next-line no-use-before-define
        checkValidServiceWorker(swUrl, config);

        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service '
            // eslint-disable-next-line no-tabs
						+ 'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // eslint-disable-next-line no-use-before-define
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  // eslint-disable-next-line no-undef
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      // eslint-disable-next-line no-param-reassign
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            // eslint-disable-next-line no-undef
            if (navigator.serviceWorker.controller) {
              console.log(
                'New content is available and will be used when all '
                + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  // eslint-disable-next-line no-undef
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404
        || (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        // eslint-disable-next-line no-undef
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  // eslint-disable-next-line no-undef
  if ('serviceWorker' in navigator) {
    // eslint-disable-next-line no-undef
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
