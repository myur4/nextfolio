import BaseBanner from '../components/banner';
import Introduction from '../components/intro'
import Skills from '../components/skillContainer'
import Personal from '../components/about'
import Projects from '../components/projects';

export default function Home() {
  return (
    <>
      <BaseBanner/>
      <Introduction/>
      <Personal/>
      <Skills/>
      <Projects/>
    </>
  )
}
