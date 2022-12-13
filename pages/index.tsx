import BaseBanner from '../components/banner';
import Introduction from '../components/intro'
import Skills from '../components/skillContainer'
import Personal from '../components/about'

export default function Home() {
  return (
    <div>
      <BaseBanner/>
      <Introduction/>
      <Personal/>
      <Skills/>
    </div>
  )
}
