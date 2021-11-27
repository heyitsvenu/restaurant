function renderHome() {
  const content = document.getElementById('content');

  const header = document.createElement('header');
  header.classList.add('header');
  header.classList.add('active');
  header.dataset.tab = 'home';
  header.innerHTML = `
    <div id="logo"><h1>StarBelly</h1></div>
    <div id="hero">
      <h2>Fill your belly while watching the stars</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        eaque natus provident illo error accusantium expedita vitae quia
        ipsum iusto?
      </p>
    </div>
  `;

  content.appendChild(header);
}

export default renderHome;
