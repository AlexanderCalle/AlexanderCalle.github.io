import skills from '../data/skills'
import SkillCardItem from './SkillCardItem'

const SkillsList = () => {
  return (
    <div className="w-2/5 pl-10">
      <h1>Skills</h1>
      <div className="mt-10 pl-14 w-full flex flex-wrap gap-y-5">
        {skills.map((name, idx)=> (
          <SkillCardItem key={idx} name={name} idx={idx} />
        ))}
      </div>
    </div>
  )
}

export default SkillsList