import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="name">Zhu Jian Kenny Su</h1>
    <div class="card">
      <a class="link" href="mailto:zhujiankennysu@gmail.com?subject=Inquiry&body=Hello%20Kenny,">zhujiankennysu&#8203;@gmail.com</a>
      <a class="link" href="tel:+1(647)785-0457">(647) 785-457</a>
    </div>
  </div>
`
