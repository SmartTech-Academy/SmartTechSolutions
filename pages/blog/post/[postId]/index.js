import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import { useRouter } from "next/router";

import PageHead from "@/pages/Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";
import BackToTop from "@/my_components/BackToTop/BackToTop_1";

import BlogDetails from "@/my_components/_BlogDetails/BlogDetails";

import Footer from "@/my_components/Footer/Footer";
import { getAllPosts, getPostBySlug } from "@/helper/wpgraphql";

// The [postId] segment is treated as the real WordPress `slug` directly —
// no more regex-extracting a trailing digit and matching a local JSON id
// (the old data/blog/blog.json approach). Every post gets its own genuine
// slug-based URL: /blog/post/<slug>.
export async function getStaticPaths() {
  let posts = [];
  try {
    posts = await getAllPosts();
  } catch (err) {
    console.error("Failed to fetch post slugs from WPGraphQL:", err);
  }

  return {
    paths: posts.filter((p) => p.slug).map((p) => ({ params: { postId: p.slug } })),
    // A post published after the last build still resolves — WPGraphQL is
    // queried on that first request, then cached like every other path.
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.postId);

  if (!post) {
    return { notFound: true };
  }

  let relatedPosts = [];
  try {
    const allPosts = await getAllPosts({ maxPosts: 8 });
    relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 4);
  } catch (err) {
    console.error("Failed to fetch related posts from WPGraphQL:", err);
  }

  return {
    props: { post, relatedPosts },
    revalidate: 60,
  };
}

const BlogPost = ({ post, relatedPosts }) => {
  const router = useRouter();

  return (
    <>
      <PageHead
        title={post ? `${post.title} | SmartTech Solutions Blog` : "Blog Post | SmartTech Solutions"}
        description={post?.excerpt}
        image={post?.image}
        path={router.asPath.split("?")[0]}
      />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="" headerType="" />
          <Cart />

          <BlogDetails post={post} relatedPosts={relatedPosts} />

          <BackToTop />
          <Separator />
          <Footer />
        </Context>
      </Provider>
    </>
  );
};

export default BlogPost;
