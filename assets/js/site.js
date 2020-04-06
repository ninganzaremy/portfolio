
                  /*sticky-header bg-color change on scroll*/
                  window.onscroll = () => {
                    const nav = document.querySelector('#navbar');
                    if(this.scrollY <= 20) nav.className = ''; else nav.className = 'header-area-wrapper';
                  };
