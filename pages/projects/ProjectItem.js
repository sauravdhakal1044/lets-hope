import React, { useEffect, useState } from 'react'
import projects from '../../components/Projects items/projects'
import PItem from './PItem'
import TestAnimate from './PItem'

function ProjectItems() {

  const [projectItem, setProjectItem] = useState([])

  useEffect(() => {
    setProjectItem(projects)
  }, [])


  return (
    <>
      <div className=' grid grid-cols-1 gap-y-4 projectItems'>
        {/* <TestAnimate> */}
        {
          projectItem && projectItem.map((item, index) => {
            return <PItem
              key={item.name}
              value={item}
            />
          })
        }
        {/* </TestAnimate> */}
      </div>
    </>
  )
}

export default ProjectItems