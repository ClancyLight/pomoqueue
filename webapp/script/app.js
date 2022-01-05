// alert('hello\nit works');

const loadPage = () => {
  const itemView = document.getElementById('item-view');
  const userInput = document.getElementById('user-input');

  const itemViewedSrcFldr = 'assets';
  const currentItemFile = 'sample.jpg';

  itemView.style.fontFamily = 'courier';
  itemView.innerHTML = `
    <center>
        <h1>${itemViewedSrcFldr}/${currentItemFile}</h1>
        <img src="${itemViewedSrcFldr}/${currentItemFile}"
            height="240px"
        ></img>
    </center> 
    `;

  const leftBtn = '<';
  const rightBtn = '>';
  const infoBtn = 'info';
  userInput.innerHTML = `
    <center>
        <div>
            <button id="right-btn" class="btn">${leftBtn}</button>
            <button id="info-btn" class="btn">${infoBtn}</button>
            <button id="right-btn" class="btn">${rightBtn}</button>
  
        </div>
    </center>
    `;

  const infoBtnElement = document.getElementById('info-btn');

  infoBtnElement.addEventListener('click', function () {
    if (document.getElementById('info-div')) {
      // alert("exit info");
      document.getElementById('info-div').remove();
    } else {
      const imgSrc = `${itemViewedSrcFldr}/${currentItemFile}`;
      // alert(`${imgSrc}`);
      const infoDiv = document.createElement('div');
      infoDiv.id = 'info-div';

      infoDiv.innerHTML = `
        <center>
            <h1>Information</ht>
            <p>This file, ${imgSrc}, is about bla bla bla..</p>
        </center>
    `;

      document.body.appendChild(infoDiv);
    }
  });
};

loadPage();
