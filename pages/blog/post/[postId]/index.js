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
import BlogData from "@/data/blog/blog.json";

import Footer from "@/my_components/Footer/Footer";
import { extractNumbersFromString } from "@/helper/SpecialHelpers.js";

// SEO-friendly excerpt + cover image for each real post, keyed by its id in
// data/blog/blog.json — that file's own `desc` field is generic template
// filler text, while these excerpts are the same ones already written for
// the blog listing cards (my_components/_Blog/AllBlogs.js + sections/BlogList.js),
// so the meta description users see in search results actually matches
// what they were shown before clicking through.
const POST_SEO = {
  1: {
    excerpt: "A practical framework for finding which pages are quietly driving your growth — and the ones bleeding traffic without anyone noticing.",
    image: "/app_images/blog/blog1.webp",
  },
  2: {
    excerpt: "How the best product teams turn ed-tech features into habits users actually stick with, from onboarding to the first real \"aha\" moment.",
    image: "/app_images/blog/blog2.webp",
  },
  3: {
    excerpt: "Scaling a learning platform brings its own engineering headaches — sync across offline devices, content versioning, and multi-tenant data isolation.",
    image: "/app_images/blog/blog3.webp",
  },
  4: {
    excerpt: "Applied AI is quietly reshaping how students get feedback — adaptive quizzes, auto-graded essays, and tutoring assistants that actually understand context.",
    image: "/app_images/blog/blog4.webp",
  },
  5: {
    excerpt: "Verifiable credentials, tamper-proof transcripts, and micro-scholarships — five ways blockchain is finding real, practical use in ed-tech.",
    image: "/app_images/blog/blog5.webp",
  },
  6: {
    excerpt: "Great learning UX hides complexity, not content — notes on designing interfaces that feel simple even when the material underneath isn't.",
    image: "/app_images/blog/blog6.webp",
  },
};

const BlogPost = () => {
  const router = useRouter();
  const postId = parseInt(extractNumbersFromString(router.query.postId));
  const matchedBlog = BlogData.blogList.find((post) => post.id === postId);
  const seo = POST_SEO[postId];

  return (
    <>
      <PageHead
        title={matchedBlog ? `${matchedBlog.title} | SmartTech Solutions Blog` : "Blog Post | SmartTech Solutions"}
        description={seo?.excerpt || matchedBlog?.desc}
        image={seo?.image}
        path={router.asPath.split("?")[0]}
      />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="" headerType="" />
          <Cart />

          <BlogDetails />

          <BackToTop />
          <Separator />
          <Footer />
        </Context>
      </Provider>
    </>
  );
};

export default BlogPost;
