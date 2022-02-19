var i = 1;

var testNum = {
  "1": {
    "title": "문제 1번",
    "description": "\'요즘애들\' 이라는 말을 자주 사용한다.",
    "A": "자주 사용한다",
    "B": "종종 사용한다",
    "C": "아주 가끔 사용한다",
    "D": "사용하지 않는다"
  },
  "2": {
    "title": "문제 2번",
    "description": "회의시간에 후배가 내 의견에 반대한다면?.",
    "A": "회의 끝나고 옥상으로 부른다",
    "B": "나중에 은근슬쩍 꼽준다",
    "C": "신경은 쓰이지만 그냥 넘어간다",
    "D": "반대한 사실조차 기억하지 못한다"
  },
  "3": {
    "title": "문제 3번",
    "description": "후배가 나보다 출근을 늦게한다면?",
    "A": "사회생활 잘하라고 경고한다",
    "B": "눈치준다",
    "C": "신경은 쓰이지만 그럴수도 있다고 생각한다",
    "D": "별 생각없다"
  },
  "4": {
    "title": "문제 4번",
    "description": "사생활 영역도 인생선배로서 조언해줄 수 있다.",
    "A": "매우 그렇다",
    "B": "그렇다",
    "C": "그렇지 않다",
    "D": "매우 그렇지 않다"
  },
  "5": {
    "title": "문제 5번",
    "description": "후배들에게 배울게 있다는 말에 동의하지만 실제로 배워본적은 없다.",
    "A": "매우 그렇다",
    "B": "그렇다",
    "C": "그렇지 않다",
    "D": "매우 그렇지 않다"
  },
  "6": {
    "title": "문제 6번",
    "description": "회식자리에서 후배가 고기를 굽지도 않고 먹기 바쁘다. 당신은?",
    "A": "따로 불러서 회식자리 매너에 대한 조언을 한다",
    "B": "눈치준다",
    "C": "신경은 쓰이지만 그럴수도 있다고 생각한다",
    "D": "별 생각없다"
  },
  "7": {
    "title": "문제 7번",
    "description": "상대방을 볼 때 말투부터 얼굴 등 외형적 모습까지 나도 모르게 판단하고있다.",
    "A": "매우 그렇다",
    "B": "그렇다",
    "C": "그렇지 않다",
    "D": "매우 그렇지 않다"
  },
  "8": {
    "title": "문제 8번",
    "description": "후배의 옷차림이나 인사예절을 지적할 수 있다.",
    "A": "매우 그렇다",
    "B": "그렇다",
    "C": "그렇지 않다",
    "D": "매우 그렇지 않다"
  },
  "9": {
    "title": "문제 9번",
    "description": "\"OO란 OOO인거야\" 식의 진리 명제를 자주 구사한다.",
    "A": "매우 그렇다",
    "B": "그렇다",
    "C": "그렇지 않다",
    "D": "매우 그렇지 않다"
  },
  "10": {
    "title": "문제 10번",
    "description": "처음 만난 사람이 나보다 나이가 어릴 때 당신은 ? ",
    "A": "바로 반말모드",
    "B": "타이밍 보다가 자연스럽게 반말모드",
    "C": "상대방 의사 물어보고 반말모드",
    "D": "친해졌다고 생각이 들때 의사를 물어보고 반말모드 "
  },
  "11": {
    "title": "문제 11번",
    "description": "후배가 낯선 방식으로 업무처리를 할때 당신은 ?",
    "A": "바로 내가 쓰는 방식을 알려준다",
    "B": "서툰 모습을 보이면 그때 다른 방식을 알려준다",
    "C": "시간이 지나고 다른 방법도 있음을 알려준다",
    "D": "각자의 방식이 있다고 생각하고 넘어간다"
  },
  "12": {
    "title": "문제 12번",
    "description": "후배가 타당하지 못한 이유로 회식 참여를 못하게 됐을 때 당신은 ?",
    "A": "'라떼는~' 회식은 무조건 필참해야 함을 알려준다",
    "B": "공과사 구분을 명확히 하게끔 조언을 한다",
    "C": "아무말 안하고 집으로 보낸다",
    "D": "팀장님께 잘 이야기하겠다고 하고 빠르게 집으로 보낸다"
  },

};

var result = {
  "ggondae1": {
    "score": 18,
    "r_title": "꼰대 of 꼰대",
    "img": "ggondae1.png",
    "explain": "당신은 회생불가한 꼰대입니다. 말하는 것보다 듣는 것에 집중해보세요. 내 말이 진리고 법이요! 상대방의 말은 신경조차 쓰지않는 당신, 귀를 여십시오!!!"
  },
  "ggondae2": {
    "score":21,
    "r_title": "부장님 비켜~! 이구역 꼰대는 나야",
    "img": "ggondae2.png",
    "explain": "어쩌면 당신 부장님보다 더 까탈스러운 당신,, 그만큼 섬세하다는 말일 수도 있겠지만 그래도 조금은 유연하게 후배들을 챙겨주세요! 후배들은 물론 부장님도 당신 눈치를 보고 있습니다 ㅎㅋ"
  },
  "ggondae3": {
    "score": 24,
    "r_title": "젊은꼰대 아니고 그냥 꼰대",
    "img": "ggondae3.png",
    "explain": "이제는 젊다는 말조차 당신에게는 어색하네요, 사회생활에 찌들다보니 당신도 모르는새 그냥 꼰대가 되어버렸어요. 스스로에게 또 후배들에게 관대해져 봅시다!"
  },
  "ggondae4": {
    "score": 27,
    "r_title": "죄송합니다 꼰대입니다",
    "img": "ggondae4.png",
    "explain": "당신이 꼰대라는게 저도 믿기지 않네요. 어찌보면 당연하게 생각드는 일들인데 요즘 친구들은 이런 당신의 행동들을 꼰대라고 느끼나봐요. 우리 함께 젊은 사고를 가져봅시다."
  },
  "ggondae5": {
    "score": 30,
    "r_title": "자네가 바로 요즘 꼰대",
    "img": "ggondae5.png",
    "explain": "당신.. 어디가서 '나는 꼰대 아니지~' 라는 말을 앵무새처럼 하고있을 것 같아요.. 근데 그런말 하는 것조차 꼰대 같답니다. 아직 기회가 있어요! 좀 더 열린 사고를 가져봅시다."
  },
  "ggondae6": {
    "score": 33,
    "r_title": "꼰대되기 1초전",
    "img": "ggondae6.png",
    "explain": "조심하세요, 자칫 잘못하면 꼰대되기 일보직전이에요. FM처럼 일하는데 꼰대라니 참 아이러니하죠. 일도 좋지만 후배들과 소통하는 시간을 좀 가져봅시다!"
  },
  "ggondae7": {
    "score": 35,
    "r_title": "조금 불편한 선배",
    "img": "ggondae7.png",
    "explain": "당신은 잘 챙겨준다고 챙긴 것 같은데 아직 후배들에게는 조금 불편한 선배일 수 있어요! 회사생활이라는게 참 어렵네요, 잘해도 중간이니까 말이에요. 그래도 이런 불편한 관계가 제일 좋을 수도 있어요."
  },
  "ggondae8": {
    "score": 38,
    "r_title": "세상 스윗한 선배",
    "img": "ggondae8.png",
    "explain": "당신.. 요즘 귀가 간지럽지는 않나요? 후배들이 동네방네 당신 칭찬하고 다니거든요. 안타깝지만 꼰대랑은 거리가 멀어요! SWEET한게 싫다면 조금 정석대로 갈 필요도 있을것 같아요. "
  },
  "ggondae9": {
    "score": 43,
    "r_title": "롤모델! 후배들의 선망의 대상",
    "img": "ggondae9.png",
    "explain": "일도 잘하고, 성격도 좋고, 후배까지 잘 챙겨주는 당신은 후배들의 선망의 대상이에요. 오늘도 후배들은 당신을 보면서 인류애를 느끼고 있답니다 ^0^"
  },
  "ggondae10": {
    "score": 48,
    "r_title": "너무 쿨한 선배",
    "img": "ggondae10.png",
    "explain": "신경 안써주는 건 고마운데요.. 그래도 이건 조금 심한데요? 혹시 후배들 이름은 다 기억하시는지요? 너무 일에만 몰두하지 말고 한번씩 대화의 시간을 가져봅시다!"
  }
};

//테스트 시작함수
var testStart = function(){
  document.querySelector('#main').style.display = "none";
  document.querySelector('#test').style.display = "block";
  next();
}

document.querySelector('#start_btn').addEventListener('click', testStart);

//테스트 다시시작
var retry = function(){
  i = 1;
    document.querySelector('#result').style.display = "none";
    document.querySelector('#main').style.display = "block";
    document.querySelector('#score').value= 0;
    document.querySelector('#Atag').value= 0;
    document.querySelector('#Btag').value= 0;
    document.querySelector('#Ctag').value= 0;
    history.replaceState({}, null, location.pathname);
  }

  document.querySelector('#retry_btn').addEventListener('click', retry);

//타입 선택을 위한 함수
var preTagValueA = 0;
var preTagValueB = 0;
var preTagValueC = 0;
var preTagValueD = 0;
document.querySelector('#A').addEventListener('click',function(){
  var preValue = parseInt(document.querySelector('#score').value);
  document.querySelector('#score').value = preValue+parseInt(1);
  preTagValueA++;
  document.querySelector('#Atag').value = preTagValueA;
  next();
})
document.querySelector('#B').addEventListener('click',function(){
  var preValue = parseInt(document.querySelector('#score').value);
  document.querySelector('#score').value = preValue+parseInt(2);
  preTagValueB++;
  document.querySelector('#Btag').value = preTagValueB;
  next();
})
  document.querySelector('#C').addEventListener('click',function(){
    var preValue = parseInt(document.querySelector('#score').value);
    document.querySelector('#score').value = preValue+parseInt(3);
    preTagValueC++;
    document.querySelector('#Ctag').value = preTagValueC;
    next();
})
  document.querySelector('#D').addEventListener('click',function(){
  var preValue = parseInt(document.querySelector('#score').value);
  document.querySelector('#score').value= preValue+parseInt(4);
  preTagValueD++;
  document.querySelector('#Dtag').value = preTagValueD;
  next();
});


//문제 넘기기 + 결과 도출 함수
var next = function(){
  if(i==13){
    document.querySelector('#test').style.display = "none";
    document.querySelector('#result').style.display = "block";
    var resultType = '';
    if (document.querySelector('#score').value < 18){
      resultType += 'ggondae1'
    }
    else if (document.querySelector('#score').value < 21){
      resultType = 'ggondae2';
    }
    else if(document.querySelector('#score').value < 24){
      resultType = 'ggondae3';
    }
    else if(document.querySelector('#score').value < 27){
      resultType = 'ggondae4';
    }
    else if(document.querySelector('#score').value < 30){
      resultType = 'ggondae5';
    }
    else if(document.querySelector('#score').value < 33){
      resultType = 'ggondae6';
    }
    else if(document.querySelector('#score').value < 35){
      resultType = 'ggondae7';
    }
    else if(document.querySelector('#score').value < 38){
      resultType = 'ggondae8';
    }
    else if(document.querySelector('#score').value < 43){
      resultType = 'ggondae9';
    }
    else if(document.querySelector('#score').value <= 48){
      resultType = 'ggondae10';
    }

    console.log(score, resultType);
    console.log('result :: ', result);
    document.querySelector('#r_title').innerHTML = result[resultType]['r_title'];
    document.querySelector('#explain').innerHTML = result[resultType]['explain'];
    document.querySelector("#result_img").setAttribute("src", 'img/' + result[resultType]['img']);
    history.replaceState({result: resultType}, '', '?result='+resultType); // MBTI 결과 쿼리 파라미터 삽입
  }

  else{
    document.querySelector('#number').innerHTML = i+'/12';
    document.querySelector('#progress').style.width = (i/12)*100+'%';
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#description').innerHTML = testNum[i]['description'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML = testNum[i]['B'];
    document.querySelector('#C').innerHTML = testNum[i]['C'];
    document.querySelector('#D').innerHTML = testNum[i]['D'];
    i++;
  }
}

// 쿼리 파라미터 값이 있을 경우 결과 페이지로 직접 이동
 var shareParams = new URL(location.href).searchParams.get('result');
 if (Object.keys(result).includes(shareParams) === true){
   document.querySelector('#main').style.display = "none";
   document.querySelector('#result').style.display = "block";
   var resultType = shareParams;
   document.querySelector('#r_title').innerHTML = result[resultType]['r_title'];
   document.querySelector('#explain').innerHTML = result[resultType]['explain'];
   document.querySelector("#result_img").setAttribute("src", 'img/' + result[resultType]['img']);
 }

// 카카오 SDK 초기화
Kakao.init('0ab598adb271bb69a4ae990fcc08dbf7');
Kakao.isInitialized();

  // 카톡 공유 실행 함수
  var kakaoShare = function(){
    var title = document.querySelector('#r_title').textContent;
    var desc = document.querySelector('#explain').textContent;
    var imgUrl = document.querySelector('#result_img').src;
    var ggondae = new URL(location.href).searchParams.get('result');

    Kakao.Link.sendDefault({
  objectType: 'feed',
  content: {
    title: title,
    description: desc,
    imageUrl:
      imgUrl,
    link: {
      mobileWebUrl: 'http://ggondae.com?result='+ ggondae,
    },
  },
  buttons: [
    {
      title: '테스트하기',
      link: {
        mobileWebUrl: 'http://ggondae.com',
        webUrl: 'http://ggondae.com',
      },
    },
  ]
});
}

document.querySelector('#share_btn').addEventListener('click', kakaoShare);


document.querySelector('#copy_btn').addEventListener('click', function(){
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다. 친구들에게 테스트 결과를 공유해보세요")
  })
