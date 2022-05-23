'use strict';
{
  const cola = document.getElementById('cola');
  const coffee = document.getElementById('coffee');
  const calpis = document.getElementById('calpis');
  const num_1 = document.getElementById('num_1');
  const num_2 = document.getElementById('num_2');
  const num_3 = document.getElementById('num_3');
  const five_hund = document.getElementById('five_hund');
  const one_hund = document.getElementById('one_hund');
  const fifty = document.getElementById('fifty');
  const ten = document.getElementById('ten');
  const total_money = document.getElementById('total_money');
  const back = document.getElementById('back');
  const imgs = document.querySelectorAll('main img');
  const result = document.getElementById('result');
  const return_money = document.getElementById('return_money');
  const target_img = document.getElementById('target_img');
  let timeId1;
  let timeId2;
  let timeId3;
  let isBuy = false;
  let isInput = false;
  let returnMoney = 0;
  console.log(imgs[1]);
  let money = 0;
  // const numbers = [num_1,num_2,num_3];
  const Play = {
    play1:function() {
      var audio = document.getElementById('coin_input');
      if (audio.paused) {
          audio.play();
      }else{
          audio.currentTime = 0
          audio.play();
      }
    },
    play2:function() {
      var audio = document.getElementById('coin_return');
      if (audio.paused) {
          audio.play();
      }else{
          audio.currentTime = 0;
          audio.play();
      }
    },
    play3:function() {
      var audio = document.getElementById('chooice');
      if (audio.paused) {
          audio.play();
      }else{
          audio.currentTime = 0;
          audio.play();
      }
    },
    play4:function() {
      var audio = document.getElementById('number_start');
      if (audio.paused) {
          audio.play();
      }else{
          audio.currentTime = 0;
          audio.play();
      }
    },
    play5:function() {
      var audio = document.getElementById('number_stop');
      if (audio.paused) {
          audio.volume = 0.7;
          audio.play();
      }else{
          audio.currentTime = 0;
          audio.volume = 0;
          audio.play();
      }
    },
    play6:function() {
      var audio = document.getElementById('success');
      setTimeout(()=>{},1000);
      if (audio.paused) {
          audio.volume = 0.5;
          audio.play();
      }else{
          audio.currentTime = 0;
          audio.volume = 0;
          audio.play();
      }
    },
    play7:function() {
      var audio = document.getElementById('drink_out');
      if (audio.paused) {
          // audio.volume = 0.5;
          audio.play();
      }else{
          audio.currentTime = 0;
          audio.volume = 0;
          audio.play();
      }
    },
  };
  function numbers(){
    money = 0;
    Play.play4();
    const Number = {
      numberRotation_1:function(){
        timeId1 = setInterval(()=>{
          num_1.innerText = Math.floor(Math.random()*9);
        },10);
      },
      numberRotation_2:function (){
        timeId2 = setInterval(()=>{
          num_2.innerText = Math.floor(Math.random()*9);
        },10);
      },
      numberRotation_3:function (){
        timeId3 = setInterval(()=>{
          num_3.innerText = Math.floor(Math.random()*9);
        },10);
      }
    }
    Number.numberRotation_1();
    Number.numberRotation_2();
    Number.numberRotation_3();
    setTimeout(()=>{
      clearInterval(timeId1);
      Play.play5();
    },2000);
    setTimeout(()=>{
      clearInterval(timeId2);
      Play.play5();
    },3000);
    setTimeout(()=>{
      clearInterval(timeId3);
      total_money.innerText = 0;
      Play.play5();
      if(num_1.innerText==num_2.innerText&num_2.innerText==num_3.innerText){
        Play.play6();
        console.log('Create');
      }else{
        console.log('lose');
      }
      isBuy = false;
      setTimeout(()=>{
        Scroll();
      },2000);
      imgs.forEach(img => {
        img.classList.remove('jump');
        // img.classList.add('buruburu');
      });
    },4000);
  }


  const coins = [five_hund,one_hund,fifty,ten];

  coins.forEach(coin=>{

    coin.addEventListener('click',()=>{
      isInput = true;
      money += parseInt(coin.innerText);
      total_money.innerText = money;
      result.classList.remove('enter');
      Scrollup();
      Play.play1();
      if(money >= 150){
        imgs.forEach(img=>{
          img.classList.add('buruburu');
        })
      }else if (money >= 130) {
        imgs[0].classList.add('buruburu');
        imgs[2].classList.add('buruburu');
      }else if (money >= 120) {
        imgs[0].classList.add('buruburu');
      }
    });
    coin.addEventListener('mousedown',()=>{
      coin.classList.add('pressed');
    });
    coin.addEventListener('mouseup',()=>{
      coin.classList.remove('pressed');
    });
  });
  function Scroll(){
    window.scroll({
      top: 180,
      behavior: "smooth"
    });
  }
  function Scrollup(){
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }

  const selectors = [cola,coffee,calpis];
  let i;
  function buruburu(){
    imgs.forEach(img => {
      img.classList.remove('buruburu');
    });
    imgs[i].classList.add('jump');

    // imgs[i].classList.add('buruburu');
    // setTimeout(()=>{
    // },3000);
  }

  selectors.forEach(select=>{
    select.addEventListener('click',item=>{
      if(isBuy){
        return;
      }
      const s_money = parseInt(select.innerText.split('円').join().replace(',',''));
      const t_money = parseInt(total_money.innerText);
      if(s_money <= t_money){
        console.log(select);

        console.log(6);
        money = t_money-s_money;
        console.log(money);
        return_money.innerText = `${money+'円'}`;
        // money = 0;
        isInput = false;
        numbers();
        Play.play3();
        isBuy = true;
        setTimeout(()=>{
          result.classList.add('enter');
          Play.play7();
        },4000);
        if(s_money == 120){
          i = 0;
          console.log(selectors[i].id);
          console.log(numbers[i]);
          buruburu();
          selectDrink();
          console.log(0);
        }else if (s_money == 150) {
          i = 1;
          console.log(selectors[i].id);
          buruburu();
          selectDrink();
          console.log(1);
        }else {
          i = 2;
          console.log(selectors[i].id);
          buruburu();
          selectDrink();
          console.log(2);
        }
      }else{
        return;
      }

      select.value = select.innerText.split('円').join().replace(',','');
      // imgs.forEach(img => {
      //   img.classList.add('buruburu');
      // });

    });
    function selectDrink(){
      target_img.classList.add('buruburu');
      if(selectors[i].id =='calpis'){
        target_img.src = 'img/calpis.png';
      }else if (selectors[i].id =='coffee') {
        target_img.src = 'img/coffee.png';
      }else if (selectors[i].id =='cola') {
        target_img.src = 'img/cola.png';
      }
    }
    select.addEventListener('mousedown',item=>{
      select.classList.add('pressed');
    });
    select.addEventListener('mouseup',item=>{
      select.classList.remove('pressed');
    });

  });

  back.addEventListener('click',()=>{
      if(!isInput){
        return;
      }
      total_money.innerText = '0';
      money = 0;
      document.getElementById('coin_input').pause();
      Play.play2();
      isInput = false;
      imgs.forEach(img=>{
        img.classList.remove('buruburu');
      })
  });
  back.addEventListener('mousedown',()=>{
    back.classList.add('pressed');
  });
  back.addEventListener('mouseup',()=>{
    back.classList.remove('pressed');
  });

}
