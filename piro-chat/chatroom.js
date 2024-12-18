const chatInput = document.getElementById("chat-input");
const hashtagButton = document.getElementById("hashtag");
const sendButton = document.getElementById("btn-send");
const chatBubbleContainer = document.getElementById("chat-bubble");

// 새로고침 했을 때 딱 한 번 실행 되면서 자동 포커스
chatInput.focus();

// input이 들어왔다면 전송 버튼이 보이도록 설정
// 만약 input이 없다면 해시태그 버튼이 보이도록 설정정
chatInput.addEventListener("input", (event) => {
  const isVisible = event.target.value !== "";
  sendButton.style.display = isVisible ? "block" : "none";
  hashtagButton.style.display = isVisible ? "none" : "block";
});

chatInput.addEventListener("keypress", (event) => {
  if (event.code === "Enter") {
    sendButton.click();
  }
});

let isMyMessage = true; // true -> 나, false -> 교육팀장님

// 전송 클릭 이벤트
sendButton.addEventListener("click", () => {
  if (chatInput.value === "") return;
  const contentDiv = document.createElement("div");
  if (isMyMessage) {
    // 내 말풍선 띄우기
    /*
      <div class="my-bubble-content">
        <div class="my-bubble">
          안녕하세요
        </div>
      </div>
    */
    contentDiv.className = "my-bubble-content";
    const bubble = document.createElement("div");
    bubble.className = "my-bubble";
    bubble.innerText = chatInput.value;
    contentDiv.appendChild(bubble);
  } else {
    // 교육팀장님 말풍선 띄우기
    /**
      <div class="your-bubble">
        <div class="profile">
          <img src="./profile.png" alt="">
        </div>
        <div class="bubble-content">
          <div class="name">교육팀장님</div>
          <div class="bubble">
            반가워요
          </div>
        </div>
      </div>
    */
    contentDiv.className = "your-bubble";
    const profileDiv = document.createElement("div");
    profileDiv.className = "profile";
    const profileImg = document.createElement("img");
    profileImg.src = "./img/profile.png";
    profileDiv.appendChild(profileImg);
    contentDiv.appendChild(profileDiv);
    const bubbleContent = document.createElement("div");
    bubbleContent.className = "bubble-content";
    const name = document.createElement("div");
    name.className = "name";
    name.innerText = "교육팀장님";
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerText = chatInput.value;
    bubbleContent.appendChild(name);
    bubbleContent.appendChild(bubble);
    contentDiv.appendChild(bubbleContent);
  }
  // 다음에는 다른 사람이 전송하도록 설정
  isMyMessage = !isMyMessage;
  chatBubbleContainer.appendChild(contentDiv);
  // 채팅 인풋창 비우기 및 스크롤 항상 하단에 있도록 조정
  chatInput.value = "";
  chatBubbleContainer.scrollTop = chatBubbleContainer.scrollHeight;

  // hashtagButton 다시 보이기
  hashtagButton.style.display = "block";
  sendButton.style.display = "none";
});
