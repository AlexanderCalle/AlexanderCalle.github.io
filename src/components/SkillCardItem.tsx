const SkillCardItem = ({idx, name}: {name: string, idx: number}) => {
  return (
    <span className={`w-28 ${idx%2 != 0 ? "bg-off-white" : "bg-deep-purple-400 text-white"} aspect-square rounded-lg shadow-2xl hover:z-10 hover:scale-105 transition-transform -ml-10 flex justify-center items-center font-bold p-2 text-center`}>{name}</span>
  )
}

export default SkillCardItem