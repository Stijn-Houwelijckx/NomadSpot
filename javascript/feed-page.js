// ============ Load chat ============ //

let feed_section = document.querySelector(".feed-section");

let feed_posts = [
  {
    profile_image: "assets/images/ProfileImage_Christa.png",
    profile_name: "Christa Romano",
    post_location: "Denpasar, Bali",
    post_image: "assets/images/FeedImage_Christa2.jpg",
    liked: false,
    post_time: "7 minutes ago",
    caption: "Picture of the day.",
  },
  {
    profile_image: "assets/images/ProfileImage_Christian.png",
    profile_name: "Christian LeBlanc",
    post_location: "Kubu, Bali",
    post_image: "assets/images/Christian.jpg",
    liked: true,
    post_time: "11 minutes ago",
    caption: "New profile picture!!",
  },
  //   {
  //     profile_image: "assets/images/ProfileImage_Christa.png",
  //     profile_name: "Christa Achterklap",
  //     post_location: "Denpasar, Bali",
  //     post_image: "assets/images/FeedImage_Dylan1.jpg",
  //     liked: false,
  //     post_time: "15 minutes ago",
  //     caption: "Picture of the day.",
  //   },
  {
    profile_image: "assets/images/ProfileImage_TropicalNomad.png",
    profile_name: "Tropical Nomad",
    post_location: "Banjar, Bali",
    post_image: "assets/images/FeedImage_TropicalNomad.png",
    liked: false,
    post_time: "1 hour ago",
    caption:
      "Hey digital nomads! Tropical nomad is hosting an after work party at 18:00! Be there to connect with your fellow nomads after a hard day of work. See you there!",
  },
  {
    profile_image: "assets/images/ProfileImage_Dylan.png",
    profile_name: "Dylan Bollen",
    post_location: "Sydney, Australia",
    post_image: "assets/images/FeedImage_Dylan2.jpg",
    liked: false,
    post_time: "1 hour ago",
    caption:
      "Finally made it to the Great Barrier reef, swimming beside this majestic human being. I am the turtle btw!",
  },
  {
    profile_image: "assets/images/ProfileImage_Christa.png",
    profile_name: "Christa Romano",
    post_location: "Denpasar, Bali",
    post_image: "assets/images/FeedImage_Christa1.jpg",
    liked: false,
    post_time: "5 hours ago",
    caption:
      "Working from Denpasar in Bali! I love the digital nomad lifestyle!!!",
  },
  {
    profile_image: "assets/images/ProfileImage_Christa.png",
    profile_name: "Christa Romano",
    post_location: "Denpasar, Bali",
    post_image: "assets/images/FeedImage_Christa3.jpg",
    liked: false,
    post_time: "7 hours ago",
    caption: "Say hello to my little friend!",
  },
  {
    profile_image: "assets/images/ProfileImage_Dylan.png",
    profile_name: "Dylan Bollen",
    post_location: "Sydney, Australia",
    post_image: "assets/images/FeedImage_Dylan1.jpg",
    liked: true,
    post_time: "2 days ago",
    caption: "Me and my bro chilling :)",
  },
];

// ============ Load Posts ============ //

window.addEventListener("load", function (e) {
  for (let i = 0; i < feed_posts.length; i++) {
    showPost(i);
  }
});

// ============ Like Posts ============ //

window.addEventListener("load", function (e) {
  let hearth = this.document.querySelectorAll(".likeHearth");

  for (let i = 0; i < hearth.length; i++) {
    hearth[i].addEventListener("click", function (e) {
      hearth[i].classList.toggle("liked");
    });
  }
});

// ============ Search Bar ============ //

let search_box = document.querySelector(".search-box");
let search_input = document.querySelector(".search-input");
let notFound = document.querySelector(".notFound");

// search_box.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

search_input.addEventListener("keyup", function (e) {
  //   console.log(e);
  let search_input_text = search_input.value;
  let notFound_counter = 0;

  feed_section.innerHTML = "";

  for (let i = 0; i < feed_posts.length; i++) {
    const pattern = new RegExp(
      "\\b" + search_input_text.toLocaleLowerCase() + "\\w*",
      "i"
    );
    if (feed_posts[i].profile_name.toLocaleLowerCase().match(pattern)) {
      showPost(i);
      notFound.style.display = "none";
    } else {
      notFound_counter++;
    }
  }

  if (notFound_counter == feed_posts.length) {
    console.log("User not found");

    notFound.style.display = "block";
  }
});

// ============ Functions ============ //

function showPost(post_number) {
  const feed_post_containerEl = document.createElement("div");
  feed_post_containerEl.classList.add("feed-post-container");

  const feed_profile_containerEl = document.createElement("div");
  feed_profile_containerEl.classList.add("feed-profile-container");

  const feed_profile_imageEl = document.createElement("div");
  feed_profile_imageEl.classList.add("feed-profile-image");
  feed_profile_imageEl.style.backgroundImage = `url(${feed_posts[post_number].profile_image})`;

  const feed_profile_text_containerEl = document.createElement("div");
  feed_profile_text_containerEl.classList.add("feed-profile-text-container");

  const feed_profile_nameEl = document.createElement("h2");
  feed_profile_nameEl.classList.add("feed-profile-name");
  feed_profile_nameEl.innerText = feed_posts[post_number].profile_name;

  const feed_post_locationEl = document.createElement("p");
  feed_post_locationEl.classList.add("feed-post-location");
  feed_post_locationEl.innerText = feed_posts[post_number].post_location;

  const feed_post_imageEl = document.createElement("div");
  feed_post_imageEl.classList.add("feed-post-image");

  const feed_post_imageImg = document.createElement("img");
  feed_post_imageImg.src = feed_posts[post_number].post_image;
  feed_post_imageImg.alt = feed_posts[post_number].profile_name;

  const feed_caption_containerEl = document.createElement("div");
  feed_caption_containerEl.classList.add("feed-caption-container");

  const feed_caption_infoEl = document.createElement("div");
  feed_caption_infoEl.classList.add("feed-caption-info");

  // const hearth_svg = this.document.createElement("svg");
  // Get a reference to the target div element
  const targetDiv = document.getElementById("your-div-id"); // Replace 'your-div-id' with the actual ID of your div

  // Create a new SVG element
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  // Set the SVG element attributes
  svgElement.setAttribute("width", "24");
  svgElement.setAttribute("height", "24");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("fill", "currentColor");
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgElement.setAttribute("class", "icon likeHearth");

  // Set the SVG element inner HTML
  svgElement.innerHTML = `
  <path
    d="M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  `;

  if (feed_posts[post_number].liked == true) {
    svgElement.classList.add("liked");
  }

  const feed_post_timeEl = document.createElement("p");
  feed_post_timeEl.classList.add("feed-post-time");
  feed_post_timeEl.innerText = feed_posts[post_number].post_time;

  const feed_captionEl = document.createElement("p");
  feed_captionEl.classList.add("feed-cation");
  feed_captionEl.innerText = feed_posts[post_number].caption;

  feed_caption_infoEl.appendChild(svgElement);
  feed_caption_infoEl.appendChild(feed_post_timeEl);

  feed_caption_containerEl.appendChild(feed_caption_infoEl);
  feed_caption_containerEl.appendChild(feed_captionEl);

  feed_post_imageEl.appendChild(feed_post_imageImg);

  feed_profile_text_containerEl.appendChild(feed_profile_nameEl);
  feed_profile_text_containerEl.appendChild(feed_post_locationEl);

  feed_profile_containerEl.appendChild(feed_profile_imageEl);
  feed_profile_containerEl.appendChild(feed_profile_text_containerEl);

  feed_post_containerEl.appendChild(feed_profile_containerEl);
  feed_post_containerEl.appendChild(feed_post_imageEl);
  feed_post_containerEl.appendChild(feed_caption_containerEl);

  feed_section.appendChild(feed_post_containerEl);

  //   <div class="feed-post-container">
  //     <div class="feed-profile-container">
  //       <div class="feed-profile-image"></div>
  //       <div class="feed-profile-text-container">
  //         <h2 class="feed-profile-name">Christa Romano</h2>
  //         <p class="feed-post-location">Denpasar, Bali</p>
  //       </div>
  //     </div>
  //     <div class="feed-post-image">
  //       <img src="assets/images/FeedImage_Christa2.jpg" alt="Christa Romano" />
  //     </div>
  //     <div class="feed-caption-container">
  //       <div class="feed-caption-info">
  //         <svg
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="currentColor"
  //           xmlns="http://www.w3.org/2000/svg"
  //           class="icon"
  //         >
  //           <path
  //             d="M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z"
  //             stroke="currentColor"
  //             stroke-width="1.5"
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //           />
  //         </svg>
  //         <p class="feed-post-time">15 minutes ago</p>
  //       </div>
  //       <p class="feed-caption">Picture of the day.</p>
  //     </div>
  //   </div>;

  //   chat_thread.scrollTop = chat_thread.scrollHeight;
}
