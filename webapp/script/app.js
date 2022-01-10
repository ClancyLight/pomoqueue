// alert('hello\nit works');

const loadPage = () => {
  const itemView = document.getElementById('item-view');
  const userInput = document.getElementById('user-input');

  const itemViewedSrcFldr = 'assets/todo';
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
            <h1>Activity Information</h1>
            <p>'<code>${imgSrc}</code>': ... info describing the to-do task/goal/activity. Can be
            quite detailed. Can be an amount of time to exercise/practice etc. But preferably not based on
            time, but rather based on a goal/outcome, ie. complete 200 push-ups. Or. finish the next chapter of...</p>
        </center>
    `;

      document.body.appendChild(infoDiv);
    }
  });
};

loadPage();
