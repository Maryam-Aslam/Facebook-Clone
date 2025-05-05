


const menuBtn = document.getElementById('menuBtn');
const menuCard = document.getElementById('menuCard');

menuBtn.addEventListener('click', () => {
  menuCard.classList.toggle('hidden');
});

function toggleNotifications() {
    const card = document.getElementById('notificationCard');
    card.style.display = card.style.display === 'flex' ? 'none' : 'flex';
  }

function toggleCard() {
    const card = document.getElementById('dropdownCard');
    card.style.display = card.style.display === 'block' ? 'none' : 'block';
  }

document.querySelectorAll(".groups").forEach(function(element) {
  element.onclick = function() {
    window.location.href = "groups.html";
  };
});

document.querySelectorAll(".friends").forEach(function(element) {
  element.onclick = function() {
    window.location.href = "friends.html";
  };
});

document.querySelectorAll(".feed").forEach(function(element) {
  element.onclick = function() {
    window.location.href = "feed.html";
  };
});

document.querySelectorAll(".marketplace").forEach(function(element) {
  element.onclick = function() {
    window.location.href = "market.html";
  };
});

document.querySelectorAll(".mhome").forEach(function(element) {
  element.onclick = function() {
    window.location.href = "fbhome.html";
  };
});

document.querySelectorAll(".mlogo").forEach(function(element) {
  element.onclick = function() {
    window.location.href = "fbhome.html";
  };
});




      


  document.getElementById("linked").onclick = function () {
    document.getElementById("storypage").classList.add("show-div");
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















  function showDropdown() {
    const content = document.getElementById('dropdownContent');
    content.style.display = 'block';
  }

  function closeDropdown() {
    const content = document.getElementById('dropdownContent');
    content.style.display = 'none';
  }



  document.getElementById("linked").onclick = function () {
    window.location.href = "story.html";
  };
  // preview page story functionality

  //create array of objct
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










  const showFullView = (story) => {
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

  // const nextBtnFull = document.querySelector(".pstorym .nextm");
  // const previousBtnFull = document.querySelector(".pstorym .prem");

  // nextBtnFull.addEventListener("click", () => {
  //   if (currentActive >= allstories.length - 1) {
  //     return;
  //   }
  //   currentActive++;
  //   updateFullView();
  // });

  // previousBtnFull.addEventListener("click", () => {
  //   if (currentActive <= 0) {
  //     return;
  //   }
  //   currentActive--;
  //   updateFullView();
  // });

  // LIKE functionality
  document.querySelectorAll('.post .post-actions button:nth-child(1)').forEach(button => {
    button.addEventListener('click', function () {
      const post = this.closest('.post');
      const likeCountElement = post.querySelector('.like-count');

      let currentLikes = parseInt(likeCountElement.innerText.replace('👍', '').trim());
      currentLikes++;
      likeCountElement.innerText = `👍 ${currentLikes}`;
    });
  });

  // COMMENT BOX toggle functionality
  document.querySelectorAll('.post .post-actions button:nth-child(2)').forEach(button => {
    button.addEventListener('click', function () {
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
    button.addEventListener('click', function () {
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

  // Add new story creation functionality
  document.querySelector('.create-story-btn').addEventListener('click', () => {
    document.getElementById('storyDialog').style.display = 'block';
  });

  document.getElementById('storyFileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        // Create new story object
        const newStory = {
          id: allstories.length,
          author: "Your Story", // You can customize this
          imageUrl: e.target.result
        };
        
        // Add to allstories array
        allstories.unshift(newStory);
        
        // Clear existing stories
        storiesm.innerHTML = '';
        
        // Recreate all stories including the new one
        createstory();
        
        // Hide dialog
        document.getElementById('storyDialog').style.display = 'none';
      };
      reader.readAsDataURL(file);
    }
  });

  // Remove old event listeners
  document.querySelector('.create-story-btn')?.removeEventListener('click', () => {});
  document.getElementById('storyFileInput')?.removeEventListener('change', () => {});


















