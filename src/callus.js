function renderCall() {
  const content = document.getElementById('content');

  const call = document.createElement('section');
  call.classList.add('call');
  call.dataset.tab = 'call';
  call.innerHTML = `
    <h3 class="call-heading">Please call us to have your food delivered at your doorstep</h3>
    <div class="info">
      <p>Call-To : (+91)-8553271820</p>
    </div>
    <div class="loc-info">
      <p>
        Please drop by our restaurant and enjoy our out of sky vibe and ambience
      </p>
    </div>
    <div id="map"></div>
  `;

  content.appendChild(call);
}

export default renderCall;
