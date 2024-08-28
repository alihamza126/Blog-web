import {allBlogs} from 'contentlayer/generated'
import HomeCoverSection from './components/Home/HomeCoverSection';
import FeaturePost from './components/Home/FeaturePost';
import RecentPosts from './components/Home/RecentPosts';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
        <HomeCoverSection blogs={allBlogs}/>
        <FeaturePost blogs={allBlogs}/>
        <RecentPosts blogs={allBlogs}/>
    </div>
  )
}
