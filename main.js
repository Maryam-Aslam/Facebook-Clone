
document.getElementById("storypage").style.display = "block";




document.getElementById("linked").onclick = function () {
    document.getElementById("preview").style.display = "block";
  };

document.getElementById("linked").onclick = function() {
  document.getElementById("preview").classList.add("show-div");
};
      
        const fileInput = document.getElementById('fileInputma');
        const previewSec = document.querySelector('.full-viewma');
        const storyImg = document.querySelector('.storyma img');
        const closeBtnma = document.querySelector('.close-btnma');
      
        document.querySelector('.msectopma').onclick = () => {
          fileInput.click();
        };
      
        fileInput.onchange = e => {
          const file = e.target.files[0];
          if (file) {
            const imageUrl = URL.createObjectURL(file);
            storyImg.src = imageUrl;
            previewSec.classList.add('active');
          }
        };
      
        closeBtnma.onclick = () => {
          previewSec.classList.remove('active');
        };

        




//in left side bar see more or see less function---
function showDropdown() {
    const content = document.getElementById('dropdownContent');
    content.style.display = 'block';
  }
  
  function closeDropdown() {
    const content = document.getElementById('dropdownContent');
    content.style.display = 'none';
  }

// preview page story functionality

//create arry of objct
const storiesm = document.querySelector(".storiesm");
const closeBtn = document.querySelector(".close-btnm");
const storiesFullView = document.querySelector(".full-viewm");
const storyImageFull = document.querySelector(".story img");
const storyAuthorFull = document.querySelector(".story .author");



const allstories = [
  { id: 0, author: "Maryam Aslam", imageUrl: "story1.webp" },
  { id: 1, author: "Amina", imageUrl: "story2.jpg" },
  { id: 2, author: "Asthetic vibes", imageUrl: "story6.jpg" },
  { id: 3, author: "Muhammad", imageUrl: "story3.jfif" },
  { id: 4, author: "Fatima Zahra", imageUrl: "story4.jpg" },
  { id: 5, author: "Hussain", imageUrl: "post2.jfif" },
  { id: 6, author: "Dr Noor", imageUrl: "story8.jpg" },
  { id: 7, author: "Tour guide", imageUrl: "story9.jpg" },
  { id: 8, author: "Webdev here", imageUrl: "story5.webp" },
];

let currentActive = 0;

const createstory = () => {
  allstories.forEach(s => {
    const storym = document.createElement("div");
    storym.classList.add("storym");

    const img = document.createElement("img");
    img.src = s.imageUrl;

    const author = document.createElement("div");
    author.classList.add("author");
    author.innerHTML = s.author;

    storym.appendChild(img);
    storym.appendChild(author);

    storiesm.appendChild(storym);

    storym.addEventListener("click", () => {
      showFullView(s);
    });
  });
};
createstory();

//NEW STORY WILL UPLOAD FUNCTION ------

const storyUploadInput = document.getElementById("storyUploadInput");
const shareStoryBtn = document.getElementById("shareStoryBtn");

shareStoryBtn.addEventListener("click", () => {
  storyUploadInput.click(); // Trigger file input
});

storyUploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const newStory = {
      id: allstories.length,
      author: "You", // You can later add a name input field
      imageUrl: reader.result,
    };
    allstories.push(newStory);
    createStory(newStory); // Function to add the story to the UI
  };
  reader.readAsDataURL(file);
});


function createStory(s) {
  const storym = document.createElement("div");
  storym.classList.add("storym");

  const img = document.createElement("img");
  img.src = s.imageUrl;

  const author = document.createElement("div");
  author.classList.add("author");
  author.innerHTML = s.author;

  storym.appendChild(img);
  storym.appendChild(author);

  storym.addEventListener("click", () => {
    showFullView(s);
  });

  storiesm.appendChild(storym); // Add to stories section
}


//--------------------------------------------------------









const showFullView=(story)=>{
    const fullImage = storiesFullView.querySelector(".story img");
  const fullAuthor = storiesFullView.querySelector(".authorm");
  fullImage.src = story.imageUrl;
  fullAuthor.innerHTML = story.author;

  storiesFullView.classList.add("active");

  closeBtn.addEventListener("click", () => {
    storiesFullView.classList.remove("active");
  });
};
const next_btn = document.querySelector(".nextm");
const prev_btn = document.querySelector(".prem");
const contentm = document.querySelector(".contentm"); // Make sure you have this div

const updateFullView = () => {
  storyImageFull.src = allstories[currentActive].imageUrl;
  storyAuthorFull.innerHTML = allstories[currentActive].author;
};

next_btn.addEventListener("click", () => {
    contentm.scrollLeft += 300;
});

prev_btn.addEventListener("click", () => {
    contentm.scrollLeft -= 300;
});
contentm.addEventListener("scroll", () => {
  if (contentm.scrollLeft <= 24) {
    prev_btn.classList.remove("active");
  } else {
    prev_btn.classList.add("active");
  }

  let maxScrollValue =
    contentm.scrollWidth - contentm.clientWidth - 24;

  if (contentm.scrollLeft >= maxScrollValue) {
    next_btn.classList.remove("active");
  } else {
    next_btn.classList.add("active");
  }
});

const nextBtnFull = document.querySelector(".pstorym .nextm");
const previousBtnFull = document.querySelector(".pstorym .prem");

nextBtnFull.addEventListener("click", () => {
  if (currentActive >= allstories.length - 1) {
    return;
  }
  currentActive++;
  updateFullView();
});

previousBtnFull.addEventListener("click", () => {
  if (currentActive <= 0) {
    return;
  }
  currentActive--;
  updateFullView();
});





// LIKE functionality
document.querySelectorAll('.post .post-actions button:nth-child(1)').forEach(button => {
  button.addEventListener('click', function() {
    const post = this.closest('.post');
    const likeCountElement = post.querySelector('.like-count');

    let currentLikes = parseInt(likeCountElement.innerText.replace('👍', '').trim());
    currentLikes++;
    likeCountElement.innerText = `👍 ${currentLikes}`;
  });
});

// COMMENT BOX toggle functionality
document.querySelectorAll('.post .post-actions button:nth-child(2)').forEach(button => {
  button.addEventListener('click', function() {
    const post = this.closest('.post');
    const commentBox = post.querySelector('.comment-box');

    if (commentBox.style.display === "none" || commentBox.style.display === "") {
      commentBox.style.display = "block";
    } else {
      commentBox.style.display = "none";
    }
  });
});

// POST COMMENT functionality
document.querySelectorAll('.post .comment-box button').forEach(button => {
  button.addEventListener('click', function() {
    const post = this.closest('.post');
    const commentInput = post.querySelector('.comment-input');
    const commentsList = post.querySelector('.comments-list');

    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      const newComment = document.createElement('p');
      newComment.textContent = commentText;
      commentsList.appendChild(newComment);

      commentInput.value = ""; // Clear input box
    }
  });
});

//SEE MORE OPTIONS


//for new post upload 
function uploadPost() {
      const fileInput = document.getElementById("imageInput");
      const file = fileInput.files[0];
      if (!file) {
        alert("Please select an image.");
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        createPost(e.target.result);
      };
      reader.readAsDataURL(file);
    }

    function createPost(imageUrl) {
  const container = document.getElementById("postContainer");

  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `
    <div class="post-header">
      <img src="http://127.0.0.1:5501/pimg.webp" class="profile-pic">
      <div class="post-user-info">
        <h3>Maryam Aslam · <span>Follow</span></h3>
        <p>Now · 🌎</p>
      </div>
    </div>
    <div class="post-text">
Your feed needed this. Just posted for you!
    </div>
    <div class="post-image">
      <img src="${imageUrl}" alt="Uploaded Post">
    </div>
    <div class="post-stats">
      <span class="like-count">👍 0</span>
      <span class="comment-count">0 comments · 0 shares</span>
    </div>
    <div class="post-actions">
      <button onclick="likePost(this)">Like</button>
      <button onclick="toggleCommentBox(this)">Comment</button>
      <button>Share</button>
    </div>
    <div class="comment-box" style="display:none;">
      <input type="text" class="comment-input" placeholder="Write a comment...">
      <button onclick="postComment(this)">Post</button>
    </div>
    <div class="comments-list"></div>
  `;
  container.prepend(post);
}

function likePost(button) {
  const post = button.closest('.post');
  const likeCountElement = post.querySelector('.like-count');
  let currentLikes = parseInt(likeCountElement.innerText.replace('👍', '').trim());
  currentLikes++;
  likeCountElement.innerText = `👍 ${currentLikes}`;
}

function toggleCommentBox(btn) {
  const commentBox = btn.parentElement.nextElementSibling;
  commentBox.style.display = commentBox.style.display === "none" ? "block" : "none";
}

