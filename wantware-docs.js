(() => {
  const viewer = document.querySelector('#document-viewer');
  const title = viewer.querySelector('#document-title');
  const reader = viewer.querySelector('markdown-element');
  const original = viewer.querySelector('[data-document-original]');
  const back = viewer.querySelector('[data-document-back]');
  const handle = viewer.querySelector('.document-bar');
  const localFiles = [...document.querySelectorAll('a[href]')]
    .map(link => new URL(link.href))
    .filter(url => url.origin === location.origin && /\.(md|json)$/i.test(url.pathname))
    .map(url => decodeURIComponent(url.pathname.split('/').pop()));
  reader.setAttribute('data-local-files', JSON.stringify(localFiles));
  const history = [];
  let opener;
  let dragging;

  function keepInView(left, top) {
    const rect = viewer.getBoundingClientRect();
    viewer.style.left = `${Math.max(0, Math.min(left, innerWidth - rect.width))}px`;
    viewer.style.top = `${Math.max(0, Math.min(top, innerHeight - rect.height))}px`;
  }

  function openDocument(href, remember = true) {
    const url = new URL(href, document.baseURI);
    if (remember) history.push(url.href);
    title.textContent = decodeURIComponent(url.pathname.split('/').pop());
    original.href = url.href;
    back.disabled = history.length < 2;
    if (!viewer.open) {
      opener = document.activeElement;
      viewer.showModal();
      const rect = viewer.getBoundingClientRect();
      keepInView((innerWidth - rect.width) / 2, Math.min(64, (innerHeight - rect.height) / 2));
    }
    viewer.querySelector('.document-body').scrollTop = 0;
    if (reader.getAttribute('data-src') === url.href) reader.render();
    else reader.setAttribute('data-src', url.href);
  }

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.hasAttribute('data-document-original')) return;
    const url = new URL(link.href);
    if (url.origin !== location.origin || !/\.(md|json)$/i.test(url.pathname)) return;
    event.preventDefault();
    openDocument(url.href);
  });
  reader.addEventListener('markdown-navigate', event => openDocument(event.detail.url));
  viewer.querySelector('[data-document-close]').addEventListener('click', () => viewer.close());
  viewer.addEventListener('close', () => {
    reader.request?.abort();
    history.length = 0;
    opener?.focus();
  });
  back.addEventListener('click', () => {
    if (history.length < 2) return;
    history.pop();
    openDocument(history[history.length - 1], false);
  });

  handle.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('a, button')) return;
    const rect = viewer.getBoundingClientRect();
    dragging = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    handle.setPointerCapture(event.pointerId);
    handle.classList.add('dragging');
    event.preventDefault();
  });
  handle.addEventListener('pointermove', event => {
    if (dragging) keepInView(event.clientX - dragging.x, event.clientY - dragging.y);
  });
  const stopDragging = () => { dragging = null; handle.classList.remove('dragging'); };
  handle.addEventListener('pointerup', stopDragging);
  handle.addEventListener('pointercancel', stopDragging);
  handle.addEventListener('lostpointercapture', stopDragging);
  handle.addEventListener('keydown', event => {
    if (event.target !== handle) return;
    const direction = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
    if (!direction) return;
    event.preventDefault();
    const rect = viewer.getBoundingClientRect();
    keepInView(rect.left + direction[0] * 24, rect.top + direction[1] * 24);
  });
  window.addEventListener('resize', () => {
    if (!viewer.open) return;
    const rect = viewer.getBoundingClientRect();
    keepInView(rect.left, rect.top);
  });
})();
