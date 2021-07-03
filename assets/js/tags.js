(function ($) {
    function postTemplateFunc(post) {
        return `<li class="archive_list">
            <time>${post.date}</time>
            <a class="archive_list_article_link" href='${post.url}'>${post.title}</a>
            <p>${post.description}</p>
        </li>`;
    }
    function getUrlParams (name) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        if (name) {
            return params[name];
        } else {
            return params;
        }
    }

    function getTagPosts () {
        const pageTag = getUrlParams('tag');
        let tagPosts = [];
        console.log(pageTag);
        if (Array.isArray(posts)) {
            tagPosts = posts.filter((post) => {
                return Array.isArray(post.tags) && post.tags.some((tag) => {
                    return pageTag === tag;
                });
            });
        }
        return tagPosts;
    }

    function render(tagPosts) {
        let renderStr = '';
        renderStr = tagPosts.reduce((renderStr, post) => {
            renderStr += postTemplateFunc(post);
            return renderStr;
        }, renderStr);

        $('#archive_list_wrap').append(renderStr);
    }
    function initTagIndexPage() {
        const tagPosts = getTagPosts();
        console.log(tagPosts);
        render(tagPosts);


    }
    $(document).ready(() => {
        initTagIndexPage();
    });
})(jQuery)
