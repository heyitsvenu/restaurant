function renderMenu() {
  const content = document.getElementById('content');

  const menu = document.createElement('section');
  menu.classList.add('menu');
  menu.dataset.tab = 'menu';
  menu.innerHTML = `
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> American Cheese Burger</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Reddishly Red Pasta</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> FingerLickin French Fries</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Brrrrrrrrr Burrito</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Chimichanga Baby</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Mac & Nothing</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Mac & Cheese</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Melting MeatBalls</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> not-so-french French Toast</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Chicken Nuggets</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Croissant If you can say it</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Smoked Sprouts</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Julius Caesar Salad</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Pound Cake</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Kung Pao Soya Chunks</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Kung Mao Chicken</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Margherita Pizza</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> General Tso's Chicken</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Earl Grey Coffee</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Doughie Doughnuts</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Hamburger</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Apple Juice</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Mandarin Juice</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Choco-Mix</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> Not-Beef</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
    <div class="item">
      <h3><i class="fas fa-hamburger"></i> La La Lamb</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Perspiciatis, earum!
      </p>
    </div>
  `;

  content.appendChild(menu);
}

export default renderMenu;
