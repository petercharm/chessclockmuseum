import './styles.css';

const path = window.location.pathname.toLowerCase();
const page = path.endsWith('collection.html') ? 'collection' : path.endsWith('contacts.html') ? 'contacts' : 'home';

const nav = [
  { href: '/', label: 'Главная', id: 'home' },
  { href: '/collection.html', label: 'Коллекция', id: 'collection' },
  { href: '/contacts.html', label: 'Контакты', id: 'contacts' }
];

const header = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Музей шахматных часов — главная">
      <span class="brand-mark" aria-hidden="true">♜</span>
      <span class="brand-copy"><strong>Музей времени</strong><small>Шахматные часы</small></span>
    </a>
    <button class="menu-toggle" aria-label="Открыть меню" aria-expanded="false">☰</button>
    <nav class="nav" aria-label="Основная навигация">
      ${nav.map(item => `<a href="${item.href}" ${page === item.id ? 'aria-current="page"' : ''}>${item.label}</a>`).join('')}
    </nav>
  </header>
`;

const footer = `
  <footer class="site-footer">
    <a class="footer-brand" href="/">Музей времени</a>
    <p>История шахмат — в каждом мгновении.</p>
    <span>© ${new Date().getFullYear()} Музей шахматных часов</span>
  </footer>
`;

const pieces = [
  {
    number: '01',
    title: 'Механические часы',
    era: 'Начало XX века',
    description: 'Классическая механика, два циферблата и флажки, отмечающие контрольное время. Такие часы стали символом турнирных шахмат.',
    image: '/images/mechanical-clock.svg',
    alt: 'Иллюстрация классических механических шахматных часов'
  },
  {
    number: '02',
    title: 'Советская классика',
    era: '1950–1980-е годы',
    description: 'Надёжные часы с характерным корпусом и крупными кнопками. Они сопровождали клубные турниры и партии поколений шахматистов.',
    image: '/images/soviet-clock.svg',
    alt: 'Иллюстрация шахматных часов в стиле советской классики'
  },
  {
    number: '03',
    title: 'Электронная эпоха',
    era: 'Конец XX века',
    description: 'Цифровой дисплей принёс новые форматы контроля времени: от быстрых партий до сложных режимов с добавлением секунд.',
    image: '/images/digital-clock.svg',
    alt: 'Иллюстрация электронных шахматных часов'
  }
];

function pieceCard(piece) {
  return `
    <article class="piece-card">
      <a class="piece-image" href="/collection.html" aria-label="Подробнее: ${piece.title}">
        <img src="${piece.image}" alt="${piece.alt}" loading="lazy">
        <span class="piece-number">${piece.number}</span>
      </a>
      <div class="piece-info">
        <span class="eyebrow">${piece.era}</span>
        <h3>${piece.title}</h3>
        <p>${piece.description}</p>
      </div>
    </article>
  `;
}

function homePage() {
  return `
    <main>
      <section class="hero">
        <div class="hero-content">
          <span class="eyebrow hero-eyebrow"><span class="dot"></span> Музей шахматной истории</span>
          <h1>У каждого<br>хода есть <em>время.</em></h1>
          <p class="hero-lead">История шахматных часов — от механических механизмов до цифровой точности. Предметы, которые измеряли напряжение великих партий.</p>
          <div class="hero-actions">
            <a class="button button-light" href="/collection.html">Исследовать коллекцию <span>↗</span></a>
            <a class="text-link" href="/contacts.html">Связаться с музеем <span>→</span></a>
          </div>
          <div class="hero-note"><span class="hero-note-line"></span><span>Время — часть игры с 1880-х годов</span></div>
        </div>
        <div class="hero-art" aria-label="Силуэт шахматных часов">
          <div class="art-glow"></div>
          <div class="hero-clock">
            <div class="clock-top"><span>♟</span><span>♟</span></div>
            <div class="clock-faces">
              <div class="face"><span class="face-time">10:10</span><i></i></div>
              <div class="face"><span class="face-time">10:10</span><i></i></div>
            </div>
            <div class="clock-buttons"><span></span><span></span></div>
            <div class="clock-base"></div>
          </div>
          <span class="art-caption">МЕХАНИКА · ПАМЯТЬ · ВРЕМЯ</span>
          <span class="art-index">№ 001 / 1880</span>
        </div>
        <div class="hero-bottom"><span>51°30′ N&nbsp; / &nbsp;МИР ШАХМАТ</span><span>ПРОКРУТИТЕ, ЧТОБЫ ОТКРЫТЬ ИСТОРИЮ ↓</span></div>
      </section>

      <section class="intro section-wrap">
        <div class="section-kicker">01 / О МУЗЕЕ</div>
        <div class="intro-copy">
          <h2>Не просто прибор.<br><em>Свидетель партии.</em></h2>
          <p>Шахматные часы хранят особую историю. Они отсчитывают секунды перед решающим ходом, напоминают о смелых жертвах и становятся немыми свидетелями партий, которые помнят десятилетиями.</p>
          <p>Наш музей посвящён эволюции этих удивительных приборов и людям, которые создавали, использовали и коллекционировали их.</p>
          <a class="underlined-link" href="/collection.html">Познакомиться с коллекцией <span>↗</span></a>
        </div>
      </section>

      <section class="collection-preview">
        <div class="section-wrap">
          <div class="section-heading">
            <div><div class="section-kicker">02 / ИЗ СОБРАНИЯ</div><h2>Три эпохи.<br><em>Одна игра.</em></h2></div>
            <a class="underlined-link" href="/collection.html">Вся коллекция <span>↗</span></a>
          </div>
          <div class="piece-grid">${pieces.map(pieceCard).join('')}</div>
        </div>
      </section>

      <section class="quote-band">
        <span class="quote-mark">“</span>
        <blockquote>Шахматы — это жизнь,<br>а время делает каждый ход историей.</blockquote>
        <span class="quote-caption">МУЗЕЙ ШАХМАТНЫХ ЧАСОВ</span>
      </section>
      <section class="visit-cta section-wrap">
        <div><div class="section-kicker">03 / ОСТАВАЙТЕСЬ НА СВЯЗИ</div><h2>История продолжается.<br><em>Станьте её частью.</em></h2></div>
        <a class="button button-dark" href="/contacts.html">Связаться с нами <span>↗</span></a>
      </section>
    </main>
  `;
}

function collectionPage() {
  return `
    <main>
      <section class="page-hero">
        <div class="section-kicker">АРХИВ / КОЛЛЕКЦИЯ</div>
        <h1>Хранители<br><em>времени.</em></h1>
        <p>От щелчка механической кнопки до точности цифрового дисплея — проследите, как менялся прибор, без которого невозможно представить турнирные шахматы.</p>
        <div class="page-hero-index">КОЛЛЕКЦИЯ · 001—003</div>
      </section>
      <section class="collection-page section-wrap">
        <div class="collection-toolbar">
          <span>ИЗБРАННЫЕ ЭКСПОНАТЫ</span>
          <span>${String(pieces.length).padStart(2, '0')} ПРЕДМЕТА</span>
        </div>
        <div class="piece-grid collection-grid">${pieces.map(pieceCard).join('')}</div>
        <div class="collection-note">
          <span class="note-icon">✳</span>
          <div><h3>Помогите пополнить архив</h3><p>У вас есть редкие шахматные часы или история, связанная с ними? Музей открыт к сотрудничеству и новым экспонатам.</p><a class="underlined-link" href="/contacts.html">Предложить экспонат <span>↗</span></a></div>
        </div>
      </section>
    </main>
  `;
}

function contactsPage() {
  return `
    <main>
      <section class="page-hero contact-hero">
        <div class="section-kicker">МУЗЕЙ / КОНТАКТЫ</div>
        <h1>Давайте<br><em>поговорим.</em></h1>
        <p>Вопрос о коллекции, желание поделиться историей или предложение нового экспоната — мы будем рады вашему сообщению.</p>
      </section>
      <section class="contact-layout section-wrap">
        <div class="contact-details">
          <div class="section-kicker">КАК НАС НАЙТИ</div>
          <h2>Связь с<br><em>музеем.</em></h2>
          <div class="contact-item"><span class="contact-icon">✉</span><div><span class="contact-label">ЭЛЕКТРОННАЯ ПОЧТА</span><a href="mailto:hello@chessclockmuseum.example">hello@chessclockmuseum.example</a><small>Замените адрес на свой перед публикацией</small></div></div>
          <div class="contact-item"><span class="contact-icon">⌖</span><div><span class="contact-label">АДРЕС</span><p>Добавьте адрес музея<br>и информацию о посещении</p></div></div>
          <div class="contact-item"><span class="contact-icon">◷</span><div><span class="contact-label">ЧАСЫ РАБОТЫ</span><p>Посещение — по предварительной договорённости</p></div></div>
        </div>
        <form class="contact-form" id="contact-form">
          <div class="section-kicker">НАПИШИТЕ НАМ</div>
          <h2>Ваше сообщение</h2>
          <label for="name">Имя</label><input id="name" name="name" autocomplete="name" required placeholder="Как к вам обращаться">
          <label for="email">Электронная почта</label><input id="email" name="email" type="email" autocomplete="email" required placeholder="you@example.com">
          <label for="subject">Тема обращения</label><select id="subject" name="subject"><option>Вопрос о коллекции</option><option>Предложить экспонат</option><option>Посещение музея</option><option>Другое</option></select>
          <label for="message">Сообщение</label><textarea id="message" name="message" rows="5" required placeholder="Расскажите, чем мы можем помочь"></textarea>
          <button class="button button-dark" type="submit">Подготовить письмо <span>↗</span></button>
          <p class="form-hint">Форма откроет ваше почтовое приложение — сообщения не сохраняются на сайте.</p>
          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
        </form>
      </section>
    </main>
  `;
}

document.querySelector('#app').innerHTML = header + (page === 'collection' ? collectionPage() : page === 'contacts' ? contactsPage() : homePage()) + footer;

const menuToggle = document.querySelector('.menu-toggle');
const navElement = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = navElement.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

document.querySelector('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = `[Музей шахматных часов] ${form.get('subject')}`;
  const body = `Имя: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`;
  const mailto = `mailto:hello@chessclockmuseum.example?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = 'Открываем почтовое приложение. Не забудьте заменить демонстрационный email на ваш адрес.';
  window.location.href = mailto;
});
