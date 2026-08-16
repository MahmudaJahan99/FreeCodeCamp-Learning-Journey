const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Back-End Development", className: "backend" },
};

function timeAgo(timestamp) {
  const dateObj = new Date(timestamp);
  let seconds = Math.floor((new Date() - dateObj) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  if (hours < 24) {
    return `${hours}h ago`;
  }

  return `${days}d ago`;
}

function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }

  return views;
}

function forumCategory(categoryId) {
  const category = allCategories[categoryId] || {
    category: "General",
    className: "general",
  };

  return `<a class="category ${category.className}" href="${forumCategoryUrl}${category.className}/${categoryId}">${category.category}</a>`;
}

function avatars(posters, users) {
  return posters
    .map((poster) => {
      const user = users.find((user) => user.id === poster.user_id);
      const size = user.avatar_template.replace("{size}", "30");
      const src = size.startsWith("/") ? `${avatarUrl}${size}` : size;

      return `<img src="${src}" alt="${user.name}">`;
    })
    .join("");
}

const postsContainer = document.getElementById("posts-container");

function showLatestPosts(posts) {
  const { users, topic_list } = posts;
  const { topics } = topic_list;

  postsContainer.innerHTML = topics
    .map((topic) => {
      const {
        id,
        title,
        slug,
        posts_count,
        views,
        bumped_at,
        category_id,
        posters,
      } = topic;

      return `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
${forumCategory(category_id)}
        </td>
        <td>
          <div class="avatar-container">${avatars(posters, users)}</div>
        </td>
        <td>
          ${posts_count - 1}
        </td>
        <td>
          ${viewCount(views)}
        </td>
        <td>
          ${timeAgo(bumped_at)}
        </td>
    </tr>`;
    })
    .join("");
}

const fetchData = async () => {
  try {
    const response = await fetch(forumLatest);
    const forumDataArr = await response.json();

    showLatestPosts(forumDataArr);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
