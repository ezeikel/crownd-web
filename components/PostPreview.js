import { useQuery } from "@apollo/client";
import { SINGLE_POST_QUERY } from "../apollo/queries";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoPlayer from "./VideoPlayer";

const Wrapper = styled.li`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const Preview = styled.div`
  height: 100%;
  img,
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const Overlay = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.2s opacity ease;
  &:hover {
    opacity: 1;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: var(--spacing-large);
`;

const Stat = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: var(--spacing-tiny);
  place-items: center;
  color: var(--color-white);
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.4rem;
`;

const PostPreview = ({ id }) => {
  const {
    loading,
    error,
    data: { post } = {}, // setting default value when destructing as data is undefined when loading - https://github.com/apollographql/react-apollo/issues/3323#issuecomment-523430331
  } = useQuery(SINGLE_POST_QUERY, {
    variables: { id },
  });

  if (!post) return null;

  const videoJsOptions = {
    autoplay: false,
    fill: true,
    sources: [
      {
        src: post.content.url,
        type: "video/mp4",
      },
    ],
  };

  return (
    <Wrapper>
      <Link href="/post/[postId]" as={`/post/${post.id}`}>
        <a>
          <Preview key={post.id}>
            {/(\.png$|\.jpg$|\.heic$)/.test(post.content.url) ? (
              <img
                src={post.content.url
                  .replace(/(\.png$|\.heic$)/, ".jpg")
                  .replace(
                    "/upload",
                    "/upload/w_350,h_350,ar_1:1,c_fill,dpr_2.0"
                  )}
              />
            ) : (
              /* TODO: instagram uses the poster <img /> here instead of the actual video element */
              <VideoPlayer {...videoJsOptions} />
            )}
          </Preview>
          <Overlay>
            <Stats>
              <Stat>
                <FontAwesomeIcon
                  icon={["fas", "heart"]}
                  color="var(--color-white)"
                  size="lg"
                />
                {post.likes.length}
              </Stat>
              <Stat>
                <FontAwesomeIcon
                  icon={["fas", "comment"]}
                  color="var(--color-white)"
                  size="lg"
                />
                {post.comments.length}
              </Stat>
            </Stats>
          </Overlay>
        </a>
      </Link>
    </Wrapper>
  );
};

export default PostPreview;
